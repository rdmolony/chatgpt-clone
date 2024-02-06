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
  args: { }
};

export const CallAndResponse = {
  args: { 
    messages: {
      0: {
        user: "Hello",
        llm: "Hello from LLM"
      }
    }
  }
};

export const ManyCallsAndResponses = {
  args: { 
    messages: {
      0: {
        user: "Hello",
        llm: "Hello from LLM"
      },
      1: {
        user: "Hello again",
        llm: "Hello again from LLM"
      },
      2: {
        user: "Hello again again",
        llm: "Hello again again from LLM"
      },
      3: {
        user: "Hello...",
        llm: "Hello..."
      }
    }
  }
};
