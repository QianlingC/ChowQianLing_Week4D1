import { number } from "prop-types";
import React from "react";

import { Input } from "./Component";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {
    handleChange: { action: "handleChange" },
  },
};

const Template = (args) => <Input {...args} />;

// Normal,  Number are the stories
export const Normal = Template.bind({}); //creating a copy of template
Normal.args = {
  label: "Normal",
  placeholder: "Enter some data",
};

export const Number = Template.bind({});
Number.args = {
  label: "Normal",
  placeholder: "Enter some value",
  type: number,
};
