<template>
    <button :class="`button ${type}`">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type ButtonType = 'primary' | 'secondary' | 'default';

export default defineComponent({
    props: {
      type: {
          type: String as PropType<ButtonType>,
          default: 'default'
      }
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>
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

    .default {
        background: var(--color-surface);
        border: 1px solid var(--color-text-on-surface);
        color: var(--color-text-on-surface);
    }
</style>