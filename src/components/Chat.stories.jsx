import Chat from "./Chat";

export default {
  component: Chat,
  title: "Chat",
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ]
};

export const Default = {
  args: { inputId: 123 }
};

export const LLMResponse = {
  args: { 
    inputId: 123,
    priorMessages: [
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
