import type { Meta, StoryObj } from '@storybook/react' //These are only needed for typescript
import { Button } from './button';

const meta = { 
  title:     'Button',
  component: Button,
  args: { //This will set a default argument that can be overridden by the individual stories
    children: 'Button',
    disabled: false,//set default value to false to avoid the setBoolean Toggle button
    size: 'medium',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variant: { //sets to a select dropdown
      control: 'select',
    }
  },
} satisfies Meta; //satisfies Meta will make sure you are passing in the right options

export default meta;
type Story = StoryObj<typeof Button>;

//There are two ways to do this
//First is the Component Story format which will look something like this
export const Primary: Story = {
  args: {
    variant: 'primary',
  }
};

//Second you can use the render funciton to directly render they button components as you would in your framework
// export const Primary: Story = {
//   render: () => <Button variant="primary">Wowowowow</Button>,
// };

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

//This is a theme override that will force every page to show in Dark mode
export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    }
  }
}

export const Mobile: Story = {
	parameters: {
		 viewport: {
              //To find what mobile items are supported you can test mobile by chaning the stories to mobile and looking at the query parameters
			 defaultViewport: 'mobile1', //mobile1 is one of the current builtins but you can customize these
		 }
	 }
}
