---
tags: actions
name: clearElement
arguments:
    - type: String
      name: selector
      desc: Input element
    - type: Function
      name: callback(err)
      desc: A function returning if command was executed successfully
---

Clear a &lt;textarea&gt; or text &lt;input&gt; element's value.