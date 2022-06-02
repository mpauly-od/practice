import { Story } from '@storybook/vue3';
import { buttonTypes } from '../../../src/components/base/Button/ButtonType';
import Button from '../../../src/components/base/Button/Button.vue';
import { iconNames } from '../../../src/components/base/Icon/IconName';

export default {
    title: 'Base/Button',
    component: Button,
    args: {
        label: "Click"
    },
    argTypes: {
        styleType: {
            options: buttonTypes,
            control: { type: 'select' }
        },
        iconName: {
            options: iconNames,
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

export const Demo = Template.bind({});
Demo.args = {};
