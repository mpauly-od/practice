import { Story } from '@storybook/vue3';
import { buttonTypes } from '../../../src/components/base/Button/ButtonType';
import Button from '../../../src/components/base/Button/Button.vue';

export default {
    title: 'Base/Button',
    component: Button,
    argTypes: {
        styleType: {
            options: buttonTypes,
            control: { type: 'select' }
        }
    }
};

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Button },
    setup: () => {
        return { args };
    },
    template: '<Button v-bind="args"/>'
});

export const Primary = Template.bind({});
Primary.args = {
    styleType: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    styleType: 'secondary'
};

export const Surface = Template.bind({});
Surface.args = {
    styleType: 'surface'
};