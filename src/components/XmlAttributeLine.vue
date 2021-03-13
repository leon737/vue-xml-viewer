<template>
    <span>
        <XmlAttribute
            v-for="(attribute, index) in attributes"
            :key="index"
            :attribute="attribute"
        />
    </span>
</template>
<script>
import XmlAttribute from './XmlAttribute'

import {defineComponent} from '@vue/composition-api'

export default defineComponent({
    name: 'XmlElement',
    components: {
        XmlAttribute
    },
    props: {
        attributes: Array
    }
})
</script>