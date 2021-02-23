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
<style scoped>
.attribute-value {
    color: #CC864C;
    padding: 0;
    margin: 0;
}
</style>