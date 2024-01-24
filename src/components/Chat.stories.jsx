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
    responses: [
      {
        user: "Hello",
        llm: "Hello from LLM"
      },
      {
        user: "Hello again",
        llm: "Hello again from LLM"
      }
    ]
  }
};
