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

export default {
    name: 'XmlElement',
    components: {
        XmlAttribute
    },
    props: {
        attributes: Array
    }
}
</script>