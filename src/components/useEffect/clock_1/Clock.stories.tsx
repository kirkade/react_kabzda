// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Clock} from "./Clock";



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Clock',
    component: Clock,
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args}/>

export const AnalogExample = Template.bind({});
AnalogExample.args = {
    mode:'analog'
}


export const DigitalExample = Template.bind({});
DigitalExample.args = {
    mode:'digital'
}