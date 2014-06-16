---
tags: properties
name: getLocationInView
arguments:
    - type: String
      name: selector
      desc: element with requested position offset
    - type: Function
      name: callback(err, value)
      desc: A function returning with requested element offset
---

Determine an element's location on the screen once it has been scrolled into view.