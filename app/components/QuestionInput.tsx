import React from 'react';
import { Send } from 'lucide-react';

interface QuestionInputProps {
  question: string;
  textColor: string;
  borderColor: string;
  onSubmit: (e: React.FormEvent) => void;
}

export const QuestionInput: React.FC<QuestionInputProps> = ({
  question,
  textColor,
  borderColor,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className={`flex items-center gap-2 p-1.5 rounded-lg border ${borderColor} `}>
        <input
          type="text"
          value={question}
          readOnly
          placeholder="Select a question from below..."
          className={`flex-1 bg-transparent outline-none ${textColor} cursor-default text-sm px-2`}
        />
        <button
          type="submit"
          disabled={!question}
          className={`p-1.5 rounded-full transition-colors duration-200 ${textColor} 
            ${question ? 'hover:bg-blue-600 dark:hover:bg-gray-800' : 'opacity-50 cursor-not-allowed'}`}
        >
          <Send size={16} />
        </button>
      </div>
    </form>
  );
};