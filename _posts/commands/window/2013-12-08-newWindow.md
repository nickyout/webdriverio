---
tags: window
name: newWindow
arguments:
    - type: String
      name: url
      desc: website URL to open
    - type: String
      name: windowName
      desc: name of the new window
    - type: String
      name: windowFeatures
      desc: features of opened window (e.g. size, position, scrollbars, etc.)
    - type: Function
      name: callback(err)
      desc: A function returning if command was executed successfully
---

Open new window in browser. This command is  the equivalent function to window.open().