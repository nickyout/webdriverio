---
tags: state
name: isSelected
arguments:
    - type: String
      name: selector
      desc: option element or input of type checkbox or radio
    - type: Function
      name: callback(err, value)
      desc: A function returning with true if element is selected
---

Return true or false if an &lt;option&gt; element, or an &lt;input&gt; element of type checkbox
or radio is currently selected found by selector.