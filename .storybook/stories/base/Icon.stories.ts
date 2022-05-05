import { Story } from '@storybook/vue3';
import Icon from '../../../src/components/base/Icon/Icon.vue';
import { iconNames } from '../../../src/components/base/Icon/IconName';

export default {
    title: 'Base/Icon',
    component: Icon,
    argTypes: {
        name: {
            options: iconNames,
            control: { type: 'select' }
        }
    }
};

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Icon },
    setup: () => {
        return { args };
    },
    template: '<Icon v-bind="args"/>'
});

export const Default = Template.bind({});
Default.args = {
    name: 'dismiss'
};