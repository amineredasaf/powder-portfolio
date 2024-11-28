import { useState, useRef, useEffect, FormEvent } from 'react';
import { HfInference } from '@huggingface/inference';
import { Send } from 'lucide-react';
import Button from './button';
import { getTextColor } from '../utils/colorUtils';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import dotenv from 'dotenv';

dotenv.config();

const hf = new HfInference(process.env.NEXT_PUBLIC_HF_API_KEY);

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatBotProps {
  className?: string;
}

const CONTEXT = `
I am a software developer with expertise in React, TypeScript, and Node.js.
I have 5 years of experience building web applications.
I am passionate about creating clean, efficient, and user-friendly interfaces.
I graduated from Computer Science at MIT in 2019.
I have worked on projects for companies like Google and Microsoft.
I am currently looking for new opportunities in full-stack development.
`;

export default function ChatBot({ className = '' }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([{
    role: 'assistant',
    content: 'Hi! I\'m your AI assistant. Feel free to ask me anything about the portfolio owner!'
  }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const activeBgColor = useIntersectionObserver();
  const textColor = getTextColor(activeBgColor);
  const borderColor = textColor === 'text-light' ? 'border-light' : 'border-gray-800/20';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages([{ role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const prompt = `${CONTEXT}\n\nQuestion: ${userMessage}\n\nAnswer:`;
      const response = await hf.textGeneration({
        model: 'meta-llama/Llama-3.2-3B',
        inputs: prompt,
        parameters: {
          max_new_tokens: 150,
          temperature: 0.7,
          top_p: 0.95,
          repetition_penalty: 1.15,
        },
      });

      const shortAnswer = response.generated_text.trim().split('\n')[0];
      setMessages([{ role: 'assistant', content: shortAnswer }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([{ role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`w-96 ${className}`}>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className={`
            flex-1 px-6 py-2
            border rounded-full
            ${borderColor}
            bg-transparent
            ${textColor}
            placeholder:${textColor} placeholder:opacity-50
            focus:outline-none focus:ring-2 focus:ring-indigo-500/50
          `}
        />
        <Button
          icon={Send}
        //   disabled={isLoading}
          className={isLoading ? 'opacity-50 cursor-not-allowed' : ''}
        />
      </form>

      <div className="space-y-3  overflow-y-auto pr-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`
                border rounded-full px-4 py-1.5
                ${borderColor}
                ${message.role === 'user' ? 'ml-8' : 'mr-8'}
                backdrop-blur-sm
              `}
            >
              <p className={`${textColor} text-sm`}>{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div
              className={`
                border rounded-full px-4 py-1.5
                ${borderColor}
                mr-8
                backdrop-blur-sm
              `}
            >
              <p className={`${textColor} text-sm`}>Thinking...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
