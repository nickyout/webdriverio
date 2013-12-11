---
tags: cookies
name: setCookie
arguments:
    - type: Object
      name: cookie
      desc: cookie object
    - type: Function
      name: callback(err)
      desc: A function returning if command was executed successfully
---

Sets a [cookie](https://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object) for current page.