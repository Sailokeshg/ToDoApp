import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import Snackbar from "./index";

export default {
  title: "Atoms/Snackbar",
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = () => <Snackbar />;

export const Default = Template.bind({});
