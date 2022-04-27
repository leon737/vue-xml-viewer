<template>
    <div class="xml-element">
        <div>
            <template v-if="!selfClosing">
                <CaretDown v-if="!collapsed" class="caret" @click="toggleCollapsed" />
                <CaretRight v-else class="caret" @click="toggleCollapsed" />
            </template>
            <span class="bracket">&lt;</span>
            <XmlElementName class="clickable" :name="name" @click="toggleCollapsed" />
            <XmlAttributeLine v-if="!collapsed" :attributes="attributes" />
            <span v-if="selfClosing && !collapsed" class="bracket"> /</span>
            <span v-if="selfClosing && collapsed" class="dots"> ...</span>
            <span class="bracket">&gt;</span>
        </div>
        <div v-if="!collapsed" class="child-elements">
            <div>
                <XmlElement v-for="(childElement, index) in childElements" :key="`e${index}`" :node="childElement" />
                <XmlElementContent v-for="(childContent, index) in childContents" :key="`t${index}`"
                    :node="childContent" />
                <XmlCDataSection v-for="(cdataSection, index) in cdataSections" :key="`c${index}`"
                    :cdataSection="cdataSection" />
                <XmlRemark v-for="(remark, index) in remarks" :key="`r${index}`" :remark="remark" />
            </div>
        </div>
        <div v-if="!selfClosing && !collapsed">
            <span class="bracket">&lt;</span>
            <XmlElementName :name="name" :closing="true" />
            <span class="bracket">&gt;</span>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref, computed } from 'vue'
import XmlElementName from './XmlElementName'
import XmlElementContent from './XmlElementContent'
import XmlAttributeLine from './XmlAttributeLine'
import XmlCDataSection from './XmlCDataSection'
import XmlRemark from './XmlRemark'
import CaretDown from './CaretDown.vue'
import CaretRight from './CaretRight.vue'

export default defineComponent({
    name: 'XmlElement',
    components: {
        XmlElementName,
        XmlElementContent,
        XmlAttributeLine,
        XmlCDataSection,
        XmlRemark,
        CaretDown,
        CaretRight,
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
})
</script>
<style scoped>
.xml-element {
    white-space: nowrap;
    font-size: 14px;
    font-family: Consolas, Menlo, Courier, monospace;
}

.bracket, .dots {
    color: var(--xml-viewer-bracket-color);
}

.caret {
    color: var(--xml-viewer-bracket-color);
    fill: var(--xml-viewer-bracket-color);
}

.child-elements>div {
    margin-left: 20px;
}

.clickable {
    cursor: pointer;
}
</style>