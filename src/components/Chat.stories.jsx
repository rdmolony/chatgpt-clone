import Chat from "./Chat";

export default {
  component: Chat,
  title: "Chat",
  tags: ['autodocs'],
};

export const Default = {
  args: { }
};

export const LLMResponse = {
  args: { 
    userResponses: [
      "Hello",
      "Hello again"
    ],
    llmResponses: [
      "Hello from LLM",
      "Hello again from LLM"
    ]
  }
};
