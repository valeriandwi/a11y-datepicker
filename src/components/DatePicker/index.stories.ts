import type { Meta, StoryObj } from "@storybook/react";

import DatePicker from ".";

const meta = {
  title: "Example/A11y - DatePicker",
  component: DatePicker,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  args: {},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TriggeredWhenClick: Story = {
  args: {
    trigger: "click",
  },
};

export const TriggeredWhenHover: Story = {
  args: {
    trigger: "hover",
  },
};
