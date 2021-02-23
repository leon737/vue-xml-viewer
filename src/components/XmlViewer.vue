<template>
    <div>
        <XmlElement :node="rootNode" />
    </div>
</template>
<script>
import XmlElement from './XmlElement'

import {ref, watch} from '@vue/composition-api'

export default {
    components: {
        XmlElement
    },
    props: {
        xml: String
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
}
</script>