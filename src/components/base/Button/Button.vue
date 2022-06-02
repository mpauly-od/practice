<template>
    <button
        :class="{
            [$style.button]: true,
            [$style[styleType]]: true,
            [$style.raised]: raised
        }"
    >
        <Icon 
            v-if="iconName"
            :name="iconName"
        />
        <span v-if="!(iconOnly && iconName)">
            {{ label }}
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ButtonType } from './ButtonType'
import Icon from '../Icon/Icon.vue'
import { IconName } from '../Icon/IconName';

/**
 * Wrapper for HTML button element to keep the look consistent.
 */
export default defineComponent({
    components: {
        Icon
    },
    props: {
        /**
         * Text to display on the button.
         */
        label: {
            type: String,
            required: true
        },
        /**
         * Which set of button styles to apply based on the desired background color.
         */
        styleType: {
            type: String as PropType<ButtonType>,
            default: "primary"
        },
        /**
         * Gives the button the appearance of floating above the surface.
         */
        raised: {
            type: Boolean,
            default: false
        },
        /**
         * Removes the label from the button.
         * @requires @param iconName
         * @requires aria-label attribute for accessibility purposes 
         */
        iconOnly: {
            type: Boolean,
            default: false
        },
        /**
         * Name of the icon to display inside the button
         */
        iconName: {
            type: String as PropType<IconName>,
            default: undefined
        }
    },
    setup: () => {
        return {};
    }
});
</script>

<style module>
    .button {
        border: none;
        border-radius: var(--border-radius);
        padding: var(--space-xs);

        display: flex;
        align-items: center;
        gap: var(--space-xs);
    }

    .primary {
        background: var(--color-primary);
        color: var(--color-text-on-primary);
        text-transform: uppercase;
    }

    .primary:hover {
        background: var(--color-primary-dark);
    }

    .secondary {
        background: var(--color-secondary);
        color: var(--color-text-on-secondary);
    }

    .secondary:hover {
        background: var(--color-secondary-light);
    }

    .surface {
        background: var(--color-surface);
        border: 1px solid var(--color-text-on-surface);
        color: var(--color-text-on-surface);
    }

    .surface:hover {
        background: var(--color-surface-hover);
    }

    .raised {
        box-shadow: 0px 1px 6px 0px var(--color-black);
    }
</style>