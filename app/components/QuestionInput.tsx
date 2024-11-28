import React from 'react';

interface QuestionInputProps {
  question: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textColor: string;
  borderColor: string;
}

export const QuestionInput: React.FC<QuestionInputProps> = ({
  question,
  onChange,
  textColor,
  borderColor,
}) => {
  return (
    <div className="w-full max-w-2xl">
      <label className="block text-md font-medium mb-2" htmlFor="questionInput">
        Question
      </label>
      <input
        id="questionInput"
        type="text"
        value={question}
        onChange={onChange}
        className={`w-full max-w-md p-2 border rounded-full ${borderColor} ${textColor} background_1 text-center placeholder-blue-200`}
        required
        placeholder="Enter your question here..."
      />
    </div>
  );
};