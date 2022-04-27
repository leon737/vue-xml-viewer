<template>
    <span>
        <XmlAttributeName :name="name" class="margin-left-sm" />
        <span class="no-margin-padding assignment">=</span>
        <span class="no-margin-padding quote">"</span>
        <XmlAttributeValue :value="value" class="no-margin-padding" />
        <span class="no-margin-padding quote">"</span>
    </span>
</template>
<script>
import XmlAttributeName from './XmlAttributeName'
import XmlAttributeValue from './XmlAttributeValue'

import { defineComponent, computed } from 'vue'

export default defineComponent({
    name: 'XmlElement',
    components: {
        XmlAttributeName,
        XmlAttributeValue
    },
    props: {
        attribute: Attr
    },
    setup(props) {
        const name = computed(() => props.attribute.name)
        const value = computed(() => props.attribute.value)

        return {
            name,
            value
        }
    }
})
</script>
<style scoped>
.no-margin-padding {
    margin: 0;
    padding: 0;
}

.margin-left-sm {
    margin-left: 8px;
}

.assignment {
    color: var(--xml-viewer-assignment-color);
}

.quote {
    color: var(--xml-viewer-quote-color);
}
</style>