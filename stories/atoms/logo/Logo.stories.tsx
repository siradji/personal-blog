import React from 'react';

import {Story, Meta} from '@storybook/react';

import {Logo} from 'components/atoms/logo';

export default  {
        title: "Atoms/Logo", 
        component: Logo
} as Meta



const Template: Story = (args) => <Logo {...args} />;


export const Primary = Template.bind({});

