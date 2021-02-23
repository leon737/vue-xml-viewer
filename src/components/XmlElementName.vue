<template>
    <span>
        <span v-if="closing" class="bracket">/</span>
        <span @click="onClick" class="element-name">{{name}}</span>
    </span>
</template>
<script>
export default {
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
}
</script>
<style scoped>
.bracket {
    color: gray;
}
.element-name {
    color: #598BA1;
}
</style>