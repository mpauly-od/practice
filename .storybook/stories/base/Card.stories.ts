import { Story } from '@storybook/vue3';
import { ref } from 'vue';
import Card from '../../../src/components/base/Card/Card.vue';

export default {
    title: 'Base/Card',
    component: Card
};

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { 
        Card
    },
    setup: () => {
        const count = ref(0);

        return { 
            args,
            count
        };
    },
    template: `
        <Card 
            v-bind="args"
            style="height: 300px; width: 200px; display: flex; align-items: center; justify-content: center;"
            @click="count++"
        >
            <span>Card</span>
        </Card>
        <div>Times clicked: {{ count }}</div>
    `
});

export const Demo = Template.bind({});
Demo.args = {
    clickOptions: {
        ariaLabel: 'You can click this card'
    }
};
