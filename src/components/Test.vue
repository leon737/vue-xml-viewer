<template>
    <button @click="toggle">Toggle Theme</button>
    <div style="padding-left: 20px; padding-top: 20px;">
        <XmlViewer :xml="xml" :theme="theme" />
    </div>
</template>

<script>
import XmlViewer from './XmlViewer'
import testXml from '../data/test.xml'

import { ref } from 'vue'

export default {
    components: {
        XmlViewer
    },
    setup() {
        const xml = ref(testXml)
        const theme = ref('light')

        function toggle() {
            document.querySelector('body').style.backgroundColor = theme.value === 'light' ? '#111' : '#fdfdfd'
            theme.value = theme.value === 'light' ? 'dark' : 'light'
        }

        return {
            xml,
            theme,
            toggle
        }
    }
}
</script>