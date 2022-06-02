<template>
    <div
        :class="{
            [$style.overlay]: true,
            [$style.absolute]: absolute
        }"
    >
        <div 
            :class="$style.scrim"
        ></div>
        <div :class="$style.content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Translucent overlay that covers content.
 */
export default defineComponent({
    props: {
        /**
         * Whether to use absolute positioning instead of fixed.
         */
        absolute: {
            type: Boolean,
            default: false
        }
    }
});
</script>

<style module>
.overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.absolute {
    position: absolute;
}

.scrim {
    position: absolute;
    width: 100%;
    height: 100%;

    opacity: 0.5;
    background-color: var(--color-black);

    z-index: 0;
}

.content {
    z-index: 1;
}
</style>