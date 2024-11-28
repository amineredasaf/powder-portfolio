import React from 'react';

interface ChatMessageProps {
  message: string;
  textColor: string;
  borderColor: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, textColor, borderColor }) => {
  return (
    <div className={`mt-3 p-4 ${textColor} ${borderColor} rounded-md w-full max-w-2xl`}>
      <div className="flex gap-2">
        <span className="text-blue-300 text-md shrink-0">Amine Bot:</span>
        <p className="whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
};