<template>
    <div style="padding-left: 20px; padding-top: 20px;">
        <XmlViewer :xml="xml" />
    </div>
</template>
<script>

import XmlViewer from './XmlViewer'
import testXml from '../data/test.xml'

import {ref} from '@vue/composition-api'

export default {
    components: {
        XmlViewer
    },
    setup() {
        const xml = ref(testXml)

        return {
            xml
        }
    }
}
</script>