---
tags: cookies
name: deleteCookie
arguments:
    - type: String
      name: name
      desc: name of cookie
    - type: Function
      name: callback(err)
      desc: A function returning if command was executed successfully
---

Delete a cookie with the given name for current page.