<template>
    <button
        :class="`${$style.button} ${$style[styleType]}`"
    >
        {{ label }}
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ButtonType } from './ButtonType'

export default defineComponent({
    props: {
      styleType: {
          type: String as PropType<ButtonType>,
          default: 'surface'
      },
      label: {
          type: String,
          default: 'Click'
      }
    },
    setup () {
        return {}
    },
    emits: [
        'click'
    ]
})
</script>

<style module>
    .button {
        border: none;
        border-radius: var(--border-radius);
        padding: var(--space-xs);
    }

    .primary {
        background: var(--color-primary);
        color: var(--color-text-on-primary);
        text-transform: uppercase;
    }

    .secondary {
        background: var(--color-secondary);
        color: var(--color-text-on-secondary);
    }

    .surface {
        background: var(--color-surface);
        border: 1px solid var(--color-text-on-surface);
        color: var(--color-text-on-surface);
    }
</style>