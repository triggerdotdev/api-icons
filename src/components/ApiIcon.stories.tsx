import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ApiIcon } from "./ApiIcon";

const meta: Meta<typeof ApiIcon> = {
  component: ApiIcon,
  title: "Marbella/ApiIcon",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ApiIcon>;

export const Primary: Story = (args) => <ApiIcon {...args} />;

Primary.args = {
  name: "airtable",
  className: "",
  style: {},
};
