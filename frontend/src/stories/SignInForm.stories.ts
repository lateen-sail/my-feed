import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SignInForm } from "@/components/auth/SignInForm";

const meta: Meta<typeof SignInForm> = {
  title: "Auth/SignInForm",
  component: SignInForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onToggleMode: { action: "toggle mode clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithToggle: Story = {
  args: {
    onToggleMode: () => console.log("Toggle to sign up"),
  },
};
