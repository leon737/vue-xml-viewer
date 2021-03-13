<template>
    <span>
        <span class="attribute-name">{{name}}</span>
    </span>
</template>
<script>
import {defineComponent} from '@vue/composition-api'

export default defineComponent({
    props: {
        name: String
    }
})
</script>
<style lang="scss" scoped>
.attribute-name {
    color: $attributeNameColor;
}
</style>