---
tags: utilities
name: chooseFile
arguments:
    - type: String
      name: selector
      desc: input element type="file"
    - type: String
      name: localFilePath
      desc: path to file
    - type: Function
      name: callback
      desc: A function returning if command was executed successfully
---

Given a selector corresponding to an `<input type=file>`, will upload the local
file to the browser machine and fill the form accordingly. It does not submit
the form for you.