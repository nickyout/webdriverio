---
tags: actions
name: moveToObject
arguments:
    - type: String
      name: css selector
      desc: move mouse by an offset from specified element
    - type: Function
      name: callback(err)
      desc: A function returning if command was executed successfully
---

Move the mouse by an offset of the specificed element. If no element is specified,
the move is relative to the current mouse cursor. If an element is provided but no
offset, the mouse will be moved to the center of the element. If the element is not
visible, it will be scrolled into view.