---
tags: properties
name: getCssProperty
arguments:
    - type: String
      name: css selector
      desc: element with requested style attribute
    - type: String
      name: style attribute
      name: css property name
    - type: Function
      name: callback(err, value)
      desc: A function returning with requested style value
---

Get a css property from a DOM-element selected with a css selector.