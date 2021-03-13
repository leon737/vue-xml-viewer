<template>
    <span>
        <span v-if="closing" class="bracket">/</span>
        <span @click="onClick" class="element-name">{{name}}</span>
    </span>
</template>
<script>
import {defineComponent} from '@vue/composition-api'

export default defineComponent({
    props: {
        name: String,
        closing: Boolean
    },
    setup(props, {emit}) {
        const onClick = () => {
            emit('click')
        }

        return {
            onClick
        }
    }
})
</script>
<style lang="scss" scoped>
.bracket {
    color: $bracketColor;
}
.element-name {
    color: $elementNameColor;
}
</style>