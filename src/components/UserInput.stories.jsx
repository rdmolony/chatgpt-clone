import UserInput from "./UserInput";

export default {
  component: UserInput,
  title: "Input",
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-32">
        <Story />
      </div>
    ),
  ]
};

export const Default = {
  args: { }
};
