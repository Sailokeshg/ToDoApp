import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import InputField from "./index";

export default {
  title: "Molecules/InputField",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const Default = Template.bind({});

Default.args ={
  addTodo: (text:string) => {},
}