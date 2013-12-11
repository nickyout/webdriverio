---
tags: properties
name: getElementCssProperty
arguments:
    - type: String
      name: find by
      disc: strategy to find element
    - type: String
      name: finder
      desc: match given string with specified strategy
    - type: String
      name: style attribute
      desc: css property name
    - type: Function
      name: callback(err, value)
      desc: A function returning with requested style value
---

Get a CSS property from a DOM-element selected with one of the base
selecting mechanisms in the webdriver protocol (class name, css selector,
id, name, link text, partial link text, tag name, xpath). Find more
informations about supported selecting strategies [here](http://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element).