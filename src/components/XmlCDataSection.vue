<template>
    <div>
        <div class="content">
            <span>&lt;![CDATA[</span><pre class="inline no-margin-padding">{{content}}</pre><span>]]&gt;</span>
        </div>
    </div>
</template>
<script>
import {computed} from '@vue/composition-api'
import App from '../App.vue'

export default {
    components: { App },
    props: {
        cdataSection: Text
    },
    setup(props) {
        const content = computed(() => props.cdataSection.textContent)

        return {
            content
        }
    }
}
</script>
<style lang="scss" scoped>
.content {
    color: $cdataContentColor;
}
.inline {
    display: inline;
}
.no-margin-padding {
    margin: 0;
    padding: 0;
}
</style>