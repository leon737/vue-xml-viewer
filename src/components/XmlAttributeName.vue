<template>
    <span>
        <span class="attribute-name">{{name}}</span>
    </span>
</template>
<script>
export default {
    props: {
        name: String
    }
}
</script>
<style lang="scss" scoped>
.attribute-name {
    color: $attributeNameColor;
}
</style>