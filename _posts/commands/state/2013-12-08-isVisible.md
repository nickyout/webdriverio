---
tags: state
name: isVisible
arguments:
    - type: String
      name: css selector
      desc: DOM-element
    - type: Function
      name: callback(err, value)
      desc: A function returning with true if element is visible
---

Return true or false if the selected DOM-element found by css selector is visible.