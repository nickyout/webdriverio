---
tags: properties
name: getTagName
arguments:
    - type: String
      name: selector
      desc: element with requested tag name
    - type: Function
      name: callback(err, tagName)
      desc: A function returning with requested tag name
---

Get tag name of a DOM-element found by the selector.