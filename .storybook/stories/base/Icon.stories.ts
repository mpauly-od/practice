import { Story } from '@storybook/vue3';
import IconComponent from '../../../src/components/base/Icon/Icon.vue';
import { iconNames } from '../../../src/components/base/Icon/IconName';

export default {
    title: 'Base/Icon',
    component: IconComponent,
    argTypes: {
        name: {
            options: iconNames,
            control: { type: 'select' }
        }
    }
};

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { IconComponent },
    setup: () => {
        return { args };
    },
    template: '<IconComponent v-bind="args"/>'
});

export const Icon = Template.bind({});
Icon.args = {
    name: 'dismiss'
};