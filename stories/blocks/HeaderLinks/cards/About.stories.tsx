import React from 'react'; 

import {Story, Meta} from '@storybook/react';

import {AboutCard, AboutCardInterface} from 'components/blocks/cards'


export default  {
    title: "Blocks/Cards/About", 
    component: AboutCard,
    argTypes: {
        cardHeader: {control: "Text"},
    }
} as Meta;


const Template: Story<AboutCardInterface> = (args) => (<AboutCard {...args}>Hello this is me and who are you? </AboutCard>)

export const Main  = Template.bind({});

Main.args = {
    cardHeading: "Suraj Auwal"
}

