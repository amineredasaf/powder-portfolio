import React, { useState } from "react";
import axios from "axios";
import { getTextColor } from "../utils/colorUtils";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ChatMessage } from "./ChatMessage";
import { QuestionInput } from "./QuestionInput";
import { SuggestedQuestion } from "./SuggestedQuestion";
import { suggestedQuestions, context } from "../data/suggestedQuestions";

export const ChatBot: React.FC = () => {
  const activeBgColor = useIntersectionObserver();
  const textColor = getTextColor(activeBgColor);
  const borderColor = textColor === "text-light" ? "border-light" : "border-dark";
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
        {
          inputs: {
            question,
            context,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error:", error);
      setAnswer("Sorry, I couldn't process your question. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestedQuestionClick = (selectedQuestion: string) => {
    setQuestion(selectedQuestion);
    handleSubmit(new Event('submit') as any);
  };

  return (
    <div className="p-3 flex flex-col items-center w-full max-w-xl mx-auto  rounded-lg shadow-sm">
      <div className="w-full space-y-3">
        <QuestionInput
          question={question}
          textColor={textColor}
          borderColor={borderColor}
          onSubmit={handleSubmit}
        />

        <div className="flex flex-wrap gap-1.5 justify-center max-h-35 overflow-y-auto">
          {suggestedQuestions.map((q, index) => (
            <SuggestedQuestion
              key={index}
              question={q}
              onClick={handleSuggestedQuestionClick}
              textColor={textColor}
              borderColor={borderColor}
            />
          ))}
        </div>

        {loading && (
          <div className={`text-center ${textColor} text-sm`}>
            Thinking...
          </div>
        )}

        {answer && (
          <ChatMessage
            message={answer}
            textColor={textColor}
            borderColor={borderColor}
          />
        )}
      </div>
    </div>
  );
};

export default ChatBot;