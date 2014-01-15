What is WebdriverJS
-------------------

Webdriverjs lets you control a browser or a mobile application with just a few
lines of code. Creating automated tests is as easy as:

{% highlight sh linenos %}
var webdriverjs = require('webdriverjs');
var options = { desiredCapabilities: { browserName: 'chrome' } };

webdriverjs
    .remote(options)
    .init()
    .url('http://www.google.com')
    .title(function(err, res) {
        console.log('Title was: ' + res.value);
    })
    .end();
{% endhighlight %}