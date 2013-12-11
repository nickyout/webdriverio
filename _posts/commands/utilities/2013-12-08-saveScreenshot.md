---
tags: utilities
name: saveScreenshot
arguments:
    - type: String
      name: path
      desc: path of generated image (relative to the execution directory)
    - type: Function
      name: callback(err, image)
      desc: A function returning with the screenshot as a base64 encoded PNG
---

Save a screenshot as a base64 encoded PNG with the current state of the browser.