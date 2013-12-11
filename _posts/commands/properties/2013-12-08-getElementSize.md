---
tags: properties
name: getElementSize
arguments:
    - type: String
      name: css selector
      desc: element with requested size
    - type: Function
      name: callback(err, value)
      desc: A function returning with requested element size
---

Get the width and height for an DOM-element based on the css selector.