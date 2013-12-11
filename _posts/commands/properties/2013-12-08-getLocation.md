---
tags: properties
name: getLocation
arguments:
    - type: String
      name: css selector
      desc: element with requested position offset
    - type: Function
      name: callback(err, value)
      desc: A function returning with requested element offset
---

Determine an element's location on the page. The point (0, 0) refers to the upper-left
corner of the page.