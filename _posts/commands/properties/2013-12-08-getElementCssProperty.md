---
tags: properties
name: getElementCssProperty
arguments:
    - type: String
      name: "find by"
    - type: String
      name: "finder"
    - type: String
      name: "css property name"
    - type: Function
      name: callback
---

Gets a css property from a dom object selected with one of the base
selecting mechanisms in the webdriver protocol (class name, css selector,
id, name, link text, partial link text, tag name, xpath)