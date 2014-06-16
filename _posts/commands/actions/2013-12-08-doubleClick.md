---
tags: actions
name: doubleClick
arguments:
    - type: String
      name: selector
      desc: Element to double click on. If it matches with more than on DOM-element it automatically clicks on the first element
    - type: Function
      name: callback(err)
      desc: A function returning if command was executed successfully
---

Double-click on an element based on a selector.