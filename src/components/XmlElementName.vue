<template>
    <span>
        <span v-if="closing" class="bracket">/</span>
        <span @click="onClick" class="element-name">{{ name }}</span>
    </span>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: String,
        closing: Boolean
    },
    setup(props, { emit }) {
        const onClick = () => {
            emit('click')
        }

        return {
            onClick
        }
    },
    emits: ['click']
})
</script>
<style scoped>
.bracket {
    color: var(--xml-viewer-bracket-color);
}

.element-name {
    color: var(--xml-viewer-element-name-color);
}
</style>