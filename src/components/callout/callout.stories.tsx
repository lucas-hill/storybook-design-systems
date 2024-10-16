import type {Meta, StoryObj} from '@storybook/react';
import { Callout } from './callout';

const meta = {
    title: 'Components/Callout',
    component: Callout,
    args: {
        children: 'Lorem ipsum dolor'
    }
} satisfies Meta; 

export default meta;
export type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
    args: {
        title: 'Primary',
        variant: 'primary',
    }
};

export const Danger: Story = {
    args: {
        title: 'Danger',
        variant: 'danger',
    }
};

export const Information: Story = {
    args: {
        title: 'Information',
        variant: 'information',
    }
};

export const Success: Story = {
    args: {
        title: 'Success',
        variant: 'success',
    }
};

export const Warning: Story = {
    args: {
        title: 'Warning',
        variant: 'warning',
    }
};
