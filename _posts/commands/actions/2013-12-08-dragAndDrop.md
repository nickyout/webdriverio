---
tags: actions
name: dragAndDrop
arguments:
    - type: String
      name: source
      desc: source selector
    - type: String
      name: destination
      desc: destination selector
    - type: Function
      name: callback(err)
      desc: A function returning if command was executed successfully
---

Drag an item to a destination element.