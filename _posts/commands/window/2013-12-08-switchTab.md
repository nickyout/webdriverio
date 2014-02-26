---
tags: window
name: switchTab
arguments:
    - type: String
      name: tabID
      desc: tab ID to focus on
    - type: Function
      name: callback(err)
      desc: A function returning if command was executed successfully
---

Switch focus to a particular tab / window handle.