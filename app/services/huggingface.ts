import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.NEXT_PUBLIC_HF_API_KEY);

export const getQuestionAnswer = async (question: string, context: string) => {
  try {
    const response = await hf.questionAnswering({
      model: "deepset/roberta-base-squad2",
      inputs: {
        question,
        context,
      },
    });
    return response.answer;
  } catch (error) {
    console.error("Error in question answering:", error);
    throw error;
  }
};

export const generateTextResponse = async (
  question: string,
  answer: string
) => {
  try {
    const prompt = `
Question: ${question}
Context: ${answer}
Please provide a natural, conversational response based on the above context.
Response:`;

    const response = await hf.textGeneration({
      model: "meta-llama/Meta-Llama-3-8B-Instruct",
      inputs: prompt,
      parameters: {
        max_new_tokens: 150,
        temperature: 0.7,
        top_p: 0.95,
        repetition_penalty: 1.2,
        stop: ["Question:", "\n\n"],
      },
    });

    // Clean up the response
    let cleanResponse = response.generated_text
      .replace(prompt, "") // Remove the prompt
      .replace("Response:", "") // Remove the Response: prefix
      .trim();

    // If the response is empty or invalid, return the original answer
    if (!cleanResponse || cleanResponse.length < 5) {
      return answer;
    }

    return cleanResponse;
  } catch (error) {
    console.error("Error in text generation:", error);
    // Fallback to original answer if text generation fails
    return answer;
  }
};
