import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms/openai";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

export async function initialCall() {
  return model.call(
    "What's a good idea for an application to build with GPT-3?"
  );
}

(async () => {
  const res = await initialCall();

  console.log(res);
})();
