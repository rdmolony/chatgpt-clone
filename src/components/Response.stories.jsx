import Response from "./Response";
import OpenAiIcon from './icons/OpenAi';
import UserIcon from './icons/User';


export default {
  component: Response,
  title: "Response",
  tags: ['autodocs'],
};

export const LLMResponse = {
  args: { 
    fromWhom: "ChatGPT",
    Icon: OpenAiIcon,
    text: "I'm an LLM"
  }
};

export const UserResponse = {
  args: { 
    fromWhom: "You",
    Icon: UserIcon,
    text: "I am you"
  }
};

export const WaitingOnLLMResponse = {
  args: {
    fromWhom: "ChatGPT",
    Icon: OpenAiIcon,
    text: "",
  }
}
