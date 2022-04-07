import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import Card from "./index";

export default {
  title: "Atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>;

export const Default = Template.bind({});

Default.args = {
    title: "test string",
}