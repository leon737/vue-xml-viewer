# vue3-xml-viewer
A Vue 3 component to display a formatted and colored XML document.
The project is forked from https://antony-k1208.github.io/vue3-xml-viewer and made Vue3 a first class citizen.

## Live demo
https://antony-k1208.github.io/vue3-xml-viewer/

## Setup
```
npm install vue3-xml-viewer --save
```

## Usage
```html
<template>
    <div>
        <XmlViewer :xml="xml" />
    </div>
</template>
```
```javascript
import XmlViewer from 'vue3-xml-viewer'

export default {
    components: {
        XmlViewer
    },
    setup() {
        const xml = getSomeXmlAsString()
        
        return {
            xml
        }
    }
}
```

