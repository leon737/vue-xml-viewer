# vue-xml-viewer

## Setup
```
npm install vue-xml-viewer --save
```

## Usage

```html
<template>
    <div style="padding-left: 20px; padding-top: 20px;">
        <XmlViewer :xml="xml" />
    </div>
</template>
```
```javascript
import XmlViewer from './XmlViewer'

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

