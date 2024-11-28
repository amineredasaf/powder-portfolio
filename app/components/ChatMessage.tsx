import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  textColor: string;
  borderColor: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  textColor,
  borderColor
}) => {
  return (
    <div className={`flex items-start gap-2 p-3 rounded-lg border ${borderColor}  mt-3 w-full`}>
      <MessageSquare className={textColor} size={16} />
      <p className={`${textColor} text-xs leading-relaxed`}>{message}</p>
    </div>
  );
};