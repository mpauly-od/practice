<template>
    <div
        :class="{
            [$style.card]: true,
            [$style.raised]: raised
        }"
    >
        <button
            v-if="clickOptions"
            :class="$style.clickTarget"
            :aria-label="clickOptions.ariaLabel"
            @click="$emit('click')"
        ></button>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type CardClickOptions = {
    ariaLabel: string;
};

/**
 * Very basic card or panel component for consistent styling
 */
export default defineComponent({

    props: {
        /**
         * Optionally change the tag of the card to be more semantically meaningful
         */
        tag: {
            type: String,
            default: 'div'
        },
        /**
         * Gives the card the appearance of floating above the surface.
         */
        raised: {
            type: Boolean,
            default: true
        },
        /**
         * Options required to make the entire card clickable.
         */
        clickOptions: {
            type: Object as PropType<CardClickOptions>,
            default: undefined
        }
    },
    emits: [
        'click'
    ],
    setup: () => {
        return {};
    }
});
</script>

<style module>
    .card {
        background-color: var(--color-surface);
        border: 2px solid var(--color-text-on-surface);
        border-radius: var(--border-radius);
        color: var(--color-text-on-surface);
        padding: var(--space-md);
        position: relative;
    }

    .raised {
        border-width: 1px;
        box-shadow: var(--box-shadow-raised);
    }

    .clickTarget {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background-color: transparent;
        border: none;
    }
</style>