import { Story } from '@storybook/vue3';
import { ref } from 'vue';
import Button from '../../../src/components/base/Button/Button.vue';
import Overlay from '../../../src/components/base/Overlay/Overlay.vue';
import Card from '../../../src/components/base/Card/Card.vue';

export default {
    title: 'Base/Overlay',
    component: Overlay
};

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { 
        Overlay,
        Button,
        Card
    },
    setup: () => {
        const showOverlay = ref(false);

        return { 
            args,
            showOverlay
        };
    },
    template: `
        <Card style="height: 300px; width: 200px; display: flex; align-items: flex-end; justify-content: center; z-index: 3;">
            <Button
                label="Trigger overlay"
                @click="showOverlay = true"
            />
            <Overlay 
                v-if="showOverlay"
                v-bind="args"
            >
                <Button
                    label="Hide overlay" 
                    @click="showOverlay = false"
                />
            </Overlay>
        </Card>
    `
});

export const Demo = Template.bind({});
Demo.args = {
    absolute: false
};
