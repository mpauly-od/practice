
<template>
    <component 
        :is="iconComponent"
        :class="$style.icon"
    />
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, PropType } from 'vue'
import { IconName, iconNames } from './IconName';

type IconComponentName = `Icon_${IconName}`;
const components = iconNames.reduce((obj, iconName) => {
    // Not turning string interpolation into a variable because of some rollup requirements around dynamic imports
    // See https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
    obj[`Icon_${iconName}`] = defineAsyncComponent(() => import(`./Icon_${iconName}.vue`));

    return obj;
}, {} as { [n in IconComponentName]: typeof defineAsyncComponent });

export default defineComponent({
    components,
    props: {
        name: {
            type: String as PropType<IconName>,
            required: true
        }
    },
    setup (props) {
        const iconComponent = computed<IconComponentName>(() => `Icon_${props.name}`);

        return { 
            iconComponent
        };
    }
})
</script>

<style module>
.icon {
    height: var(--text-xl);
    width: var(--text-xl);

    fill: currentColor;
    stroke: currentColor;
}
</style>