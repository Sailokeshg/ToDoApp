import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import SideBar from "./index";

export default {
  title: "Organisms/SideBar",
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = () => <SideBar />;

export const Default = Template.bind({});
