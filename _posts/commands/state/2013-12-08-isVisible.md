---
tags: state
name: isVisible
arguments:
    - type: String
      name: selector
      desc: DOM-element
    - type: Function
      name: callback(err, value)
      desc: A function returning with true if element is visible
---

Return true or false if the selected DOM-element found by selector is visible.