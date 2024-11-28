import React from 'react';
import { MessageCircleQuestion } from 'lucide-react';

interface SuggestedQuestionProps {
  question: string;
  onClick: (question: string) => void;
  textColor: string;
  borderColor: string;
}

export const SuggestedQuestion: React.FC<SuggestedQuestionProps> = ({
  question,
  onClick,
  textColor,
  borderColor
}) => {
  return (
    <button
      onClick={() => onClick(question)}
      className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${borderColor} ${textColor} 
        hover:bg-blue-400 transition-colors duration-200 text-xs whitespace-nowrap`}
    >
      <MessageCircleQuestion size={14} />
      <span>{question}</span>
    </button>
  );
};