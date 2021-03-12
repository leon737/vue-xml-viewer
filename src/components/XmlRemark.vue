<template>
    <div>
        <div class="content">
            &lt;!-- <pre class="inline no-margin-padding">{{content}}</pre> --&gt;
        </div>
    </div>
</template>
<script>
import {computed} from '@vue/composition-api'

export default {
    props: {
        remark: Comment
    },
    setup(props) {
        const content = computed(() => props.remark.textContent)

        return {
            content
        }
    }
}
</script>
<style lang="scss" scoped>
.content {
    color: $remarkContentColor;
}
.inline {
    display: inline;
}
.no-margin-padding {
    margin: 0;
    padding: 0;
}
</style>