import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import  Modal  from "../../../components/organisms/Modal";

export default {
    title: "Organisms/Modal",
    component: Modal,
}as ComponentMeta< typeof Modal>;

const Template: ComponentStory< typeof Modal> = () => <Modal  />;

export const Default = Template.bind({});
