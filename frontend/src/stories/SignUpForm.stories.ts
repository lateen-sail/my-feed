import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SignUpForm } from "@/components/auth/SignUpForm";

const meta: Meta<typeof SignUpForm> = {
  title: "Auth/SignUpForm",
  component: SignUpForm,
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
    onToggleMode: () => console.log("Toggle to sign in"),
  },
};
