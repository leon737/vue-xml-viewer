<template>
    <div :class="theme">
        <XmlElement :node="rootNode" />
    </div>
</template>
<script>
import XmlElement from './XmlElement'

import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    components: {
        XmlElement
    },
    props: {
        xml: String,
        theme: {
            type: String,
            default: 'light',
        },
    },
    setup(props) {
        const parser = new DOMParser()
        const rootNode = ref()

        const parseDocument = (xml) => {
            const xmlDoc = parser.parseFromString(xml, 'text/xml')
            const rootElement = xmlDoc.childNodes[0]
            rootNode.value = rootElement
        }

        watch(() => props.xml, value => {
            parseDocument(value)
        })

        parseDocument(props.xml)

        return {
            rootNode
        }

    }
})
</script>