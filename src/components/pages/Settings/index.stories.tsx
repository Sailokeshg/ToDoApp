import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import Page from "./index";
import {MemoryRouter} from 'react-router-dom';


export default {
    title: "Organisms/Modal",
    component: Page,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)] 
}as ComponentMeta<typeof Page>;

const Template: ComponentStory< typeof Page> = () => <Page/>;

export const Default = Template.bind({});
