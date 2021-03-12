<template>
    <div>
        <div class="content">
            {{content}}
        </div>
    </div>
</template>
<script>
import {computed} from '@vue/composition-api'
import App from '../App.vue'

export default {
    components: { App },
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