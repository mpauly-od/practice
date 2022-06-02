import { Story } from '@storybook/vue3';
import { ref } from 'vue';
import Button from '../../../src/components/base/Button/Button.vue';
import Overlay from '../../../src/components/base/Overlay/Overlay.vue';

export default {
    title: 'Base/Overlay',
    component: Overlay
};

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { 
        Overlay,
        Button
    },
    setup: () => {
        const showOverlay = ref(false);

        return { 
            args,
            showOverlay
        };
    },
    template: `
        <div style="position: relative; height: 300px; width: 200px; padding: 1rem; border: 2px solid var(--color-black); display: flex; align-items: flex-end; justify-content: center;">
            <Button
                label="Trigger overlay"
                @click="showOverlay = true"
            />
            <Overlay 
                v-if="showOverlay"
                v-bind="args"
                style="z-index: 3;"
            >
                <Button
                    label="Hide overlay" 
                    @click="showOverlay = false"
                />
            </Overlay>
        </div>
    `
    // template: '<Overlay v-bind="args" />'
});

export const Demo = Template.bind({});
Demo.args = {
    absolute: false
};
