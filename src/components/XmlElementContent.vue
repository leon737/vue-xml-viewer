<template>
    <div>
        <div class="content">
            {{content}}
        </div>
    </div>
</template>
<script>
import {computed} from '@vue/composition-api'

export default {
    props: {
        node: Text
    },
    setup(props) {
        const content = computed(() => props.node.textContent)

        return {
            content
        }
    }
}
</script>
<style lang="scss" scoped>
.content {
    color: $elementContentColor;
}
</style>