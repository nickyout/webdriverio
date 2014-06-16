---
tags: actions
name: buttonClick
arguments:
    - type: String
      name: selector
      desc: Button element
    - type: Function
      name: callback(err)
      desc: A function returning if command was executed successfully
---

Click on a button using a selector.