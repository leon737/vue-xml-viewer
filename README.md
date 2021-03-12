# vue-xml-viewer

## Setup
```
npm install vue-xml-viewer --save
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
import XmlViewer from './vue-xml-viewer'

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

