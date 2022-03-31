import { Story } from '@storybook/vue3';
import Button from '../../../src/components/base/Button.vue';

export default {
    title: 'Base/Button',
    component: Button
};

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Button },
    setup: () => {
        return { args}
    },
    template: '<Button v-bind="args">Click me</Button>'
});

export const Default = Template.bind({});
Default.args = {
    type: 'default'
};

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary'
};