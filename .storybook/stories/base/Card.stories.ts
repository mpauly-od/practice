import { Story } from '@storybook/vue3';
import { ref } from 'vue';
import CardComponent from '../../../src/components/base/Card/Card.vue';

export default {
    title: 'Base/Card',
    component: CardComponent
};

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { 
        CardComponent
    },
    setup: () => {
        const count = ref(0);

        return { 
            args,
            count
        };
    },
    template: `
        <CardComponent 
            v-bind="args"
            style="height: 300px; width: 200px; display: flex; align-items: center; justify-content: center;"
            @click="count++"
        >
            <span>Card</span>
        </CardComponent>
        <div>Times clicked: {{ count }}</div>
    `
});

export const Card = Template.bind({});
Card.args = {
    clickOptions: {
        ariaLabel: 'You can click this card'
    }
};
