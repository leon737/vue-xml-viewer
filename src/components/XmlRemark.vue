<template>
    <div>
        <div class="content">
            &lt;!--
            <pre class="inline no-margin-padding">{{ content }}</pre> --&gt;
        </div>
    </div>
</template>
<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        remark: Comment
    },
    setup(props) {
        const content = computed(() => props.remark.textContent)

        return {
            content
        }
    }
})
</script>
<style scoped>
.content {
    color: var(--xml-viewer-remark-content-color);
}

.inline {
    display: inline;
}

.no-margin-padding {
    margin: 0;
    padding: 0;
}
</style>