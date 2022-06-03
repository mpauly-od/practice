import { Story } from '@storybook/vue3';
import { ref } from 'vue';
import Button from '../../../src/components/base/Button/Button.vue';
import OverlayComponent from '../../../src/components/base/Overlay/Overlay.vue';
import Card from '../../../src/components/base/Card/Card.vue';

export default {
    title: 'Base/Overlay',
    component: OverlayComponent
};

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { 
        OverlayComponent,
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
            <OverlayComponent 
                v-if="showOverlay"
                v-bind="args"
            >
                <Button
                    label="Hide overlay" 
                    @click="showOverlay = false"
                />
            </OverlayComponent>
        </Card>
    `
});

export const Overlay = Template.bind({});
Overlay.args = {
    absolute: false
};
