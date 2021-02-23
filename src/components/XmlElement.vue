<template>
    <div>
        <div>
            <span class="bracket">&lt;</span>
            <XmlElementName class="clickable" :name="name" @click="toggleCollapsed" />
            <XmlAttributeLine v-if="!collapsed" :attributes="attributes" />
            <span v-if="selfClosing && !collapsed" class="bracket"> /</span>
            <span v-if="collapsed" class="dots"> ...</span>
            <span class="bracket">&gt;</span>
        </div>
            <div v-if="!collapsed" class="child-elements">
                <XmlElement
                    v-for="(childElement, index) in childElements"
                    :key="`e${index}`"
                    :node="childElement"
                />
                <XmlElementContent
                    v-for="(childContent, index) in childContents"
                    :key="`t${index}`"
                    :node="childContent"
                />
                <XmlCDataSection
                    v-for="(cdataSection, index) in cdataSections"
                    :key="`c${index}`"
                    :cdataSection="cdataSection"
                />
                <XmlRemark
                    v-for="(remark, index) in remarks"
                    :key="`r${index}`"
                    :remark="remark"
                />
            </div>
        <div v-if="!selfClosing && !collapsed">
            <span class="bracket">&lt;</span>
            <XmlElementName :name="name" :closing="true" />
            <span class="bracket">&gt;</span>
        </div>
    </div>
</template>
<script>
import XmlElementName from './XmlElementName'
import XmlElementContent from './XmlElementContent'
import XmlAttributeLine from './XmlAttributeLine'
import XmlCDataSection from './XmlCDataSection'
import XmlRemark from './XmlRemark'

import {ref, computed} from '@vue/composition-api'

export default {
    name: 'XmlElement',
    components: {
        XmlElementName,
        XmlElementContent,
        XmlAttributeLine,
        XmlCDataSection,
        XmlRemark
    },
    props: {
        node: Element
    },
    setup(props) {
        const collapsed = ref(false)
        const name = computed(() => props.node.nodeName)
        const childNodes = computed(() => Array.from(props.node.childNodes))
        const childElements = computed(() => childNodes.value && childNodes.value.filter(x => x.nodeType === 1))
        const childContents = computed(() => childNodes.value && childNodes.value.filter(x => x.nodeType === 3))
        const cdataSections = computed(() => childNodes.value && childNodes.value.filter(x => x.nodeType === 4))
        const remarks = computed(() => childNodes.value && childNodes.value.filter(x => x.nodeType === 8))
        const attributes = computed(() => (props.node.attributes && Array.from(props.node.attributes)) || [])
        const selfClosing = !childElements.value.length && !childContents.value.length && !cdataSections.value.length && !remarks.value.length

        const toggleCollapsed = () => {
            collapsed.value = !collapsed.value
        }

        return {
            name,
            childElements,
            childContents,
            attributes,
            cdataSections,
            remarks,
            selfClosing,
            collapsed,
            toggleCollapsed
        }
    }
}
</script>
<style scoped>
.bracket {
    color: gray;
}
.dots {
    color: lightblue;
}
.child-elements {
    margin-left: 20px
}
.clickable {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-style: dotted;
}
</style>