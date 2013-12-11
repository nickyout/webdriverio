---
tags: properties
name: getAttribute
arguments:
    - type: String
      name: css selector
      desc: element with requested attribute
    - type: String
      name: attribute name
      desc: requested attribute
    - type: Function
      name: callback(err, value)
      desc: A function returning with requested attribute value
---

Get an attribute from an DOM-element based on the css selector and attribute name.