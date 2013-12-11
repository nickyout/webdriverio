---
tags: cookies
name: getCookie
arguments:
    - type: String
      name: name
      desc: name of requested cookie
    - type: Function
      name: callback(err, cookie)
      desc: A function returning requested cookie
---

Get the [cookie](https://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object) with the given name for current page.