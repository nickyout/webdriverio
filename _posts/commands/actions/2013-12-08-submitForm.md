---
tags: actions
name: submitForm
arguments:
    - type: String
      name: selector
      desc: form element
    - type: Function
      name: callback(err)
      desc: A function returning if command was executed successfully
---

Submits a form found by the selector. The submit command may also be
applied to any element that is a descendant of a &lt;form&gt; element.