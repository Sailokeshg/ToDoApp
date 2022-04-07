import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import MuiList from "./index";

export default {
  title: "Molecules/MuiList",
  component: MuiList,
} as ComponentMeta<typeof MuiList>;

const Template: ComponentStory<typeof MuiList> = (args) => <MuiList{...args} />;

export const Default = Template.bind({});

Default.args = {
    todo: {
        text: "test",
        isDone: false,
    },
    markTodo: (index:number) => {},
    removeTodo: (index:number) => {},
}
