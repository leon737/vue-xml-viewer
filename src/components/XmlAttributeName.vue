<template>
    <span>
        <span class="attribute-name">{{ name }}</span>
    </span>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: String
    }
})
</script>
<style scoped>
.attribute-name {
    color: var(--xml-viewer-attribute-name-color);
}
</style>