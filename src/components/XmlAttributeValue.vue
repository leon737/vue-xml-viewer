<template>
    <span>
        <span class="attribute-value">{{value}}</span>
    </span>
</template>
<script>
export default {
    props: {
        value: String
    }
}
</script>
<style lang="scss" scoped>
.attribute-value {
    color: $attributeValueColor;
    padding: 0;
    margin: 0;
}
</style>