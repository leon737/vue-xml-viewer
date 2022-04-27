<template>
    <div>
        <div class="content">
            <span>&lt;![CDATA[</span>
            <pre class="inline no-margin-padding">{{ content }}</pre><span>]]&gt;</span>
        </div>
    </div>
</template>
<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        cdataSection: Text
    },
    setup(props) {
        const content = computed(() => props.cdataSection.textContent)

        return {
            content
        }
    }
})
</script>
<style scoped>
.content {
    color: var(--xml-viewer-cdata-content-color);
}

.inline {
    display: inline;
}

.no-margin-padding {
    margin: 0;
    padding: 0;
}
</style>