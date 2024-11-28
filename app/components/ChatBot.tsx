import React, { useState } from "react";
import axios from "axios";
import { getTextColor } from "../utils/colorUtils";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ChatMessage } from "./ChatMessage";
import { QuestionInput } from "./QuestionInput";

const ChatBot = () => {
  const activeBgColor = useIntersectionObserver();
  const textColor = getTextColor(activeBgColor);
  const borderColor = textColor === "text-light" ? "border-light" : "border-dark";
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  let context = "my name is reda amine saf im 24 years old.\r";
  context += "I am a full stack developer with expertise in React, TypeScript, and Node.js.\r";
  context += "I have one two year of exprience building web applications.\r";
  context += "I am passionate about creating clean, efficient, and user-friendly interfaces.\r";
  context += "I graduated student at 1337 school and UM6P\r";
  context += "I have worked on projects for companies like Ora and wovo\r";
  context += "I am currently looking for new opportunities in full-stack development\r";
  context += "my email is rsaf.works@gmail.com\r";
  context += "i cant share my phone number due to privacy reasons\r";
  context += "i love cats\r";
  context += "my country is morocco\r";
  context += "my city is sometimes tangier, khouribga or casablanca\r";
  context += "i am a big fan of the twenty one pilots band\r";
  context += "my linkedin is https://www.linkedin.com/in/amineredasaf\r";
  context += "my github is https://github.com/amineredasaf";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center w-full">
      <form onSubmit={handleSubmit} className="space-y-4 w-[400px] flex flex-col items-center ">
        <QuestionInput
          question={question}
          onChange={(e) => setQuestion(e.target.value)}
          textColor={textColor}
          borderColor={borderColor}
        />
      </form>

      {answer && (
        <ChatMessage
          message={answer}
          textColor={textColor}
          borderColor={borderColor}
        />
      )}
    </div>
  );
};

export default ChatBot;