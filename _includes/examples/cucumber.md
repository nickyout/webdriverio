{% highlight sh linenos %}
Feature: Example feature
  As a user of webdriverjs
  I should be able to use different commands
  to get informations about elements on the page
 
  Scenario: Get size of an element
    Given I go on the website "https://github.com/"
    When I use getElementSize() on the element ".header-logo-wordmark"
    Then I should get a width of "89" and height of "32"
 
  Scenario: Get title of website
    Given I go on the website "https://github.com/"
    When I use getTitle() to get the title of this website
    Then the command should return "GitHub · Build software better, together."
 
  Scenario: Get CSS property of element
    Given I go on the website "https://github.com/"
    When I use getElementCssProperty() to get the "color" attribute of an element with "css selector" "a[href='/plans']"
    Then the command should return "rgba(65,131,196,1)"
{% endhighlight %}
<footer>my-feature.feature <a href="https://gist.github.com/christian-bromann/6417028" target="_blank">Open Gist</a></footer>

{% highlight sh linenos %}
/**
 * to run these tests you need install Cucumber.js on your machine
 * take a look at https://github.com/cucumber/cucumber-js for more informations
 *
 * first, install Cucumber.js via NPM
 * $ npm install -g cucumber
 *
 * then go into the cucumber directory and start the tests with
 * $ cucumber.js
 */
 
var webdriverjs = require('webdriverjs'),
    assert      = require('assert');
 
var sharedSteps = module.exports = function(){
 
    var client    = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'}, logLevel: 'silent' }),
        tmpResult = null;
    client.init();
 
    this.Given(/^I go on the website "([^"]*)"$/, function(url, next) {
        client
            .url(url)
            .call(next);
    });
 
    this.When(/^I use getElementSize\(\) on the element "([^"]*)"$/, function(className, next) {
        client
            .getElementSize(className, function(err, result) {
                assert(err === null, 'command getElementSize() returns with an error');
                tmpResult = result;
                next();
            });
    });
 
    this.When(/^I use getTitle\(\) to get the title of this website$/, function(next) {
        client
            .getTitle(function(err, title) {
                assert(err === null, 'command getTitle() returns with an error');
                tmpResult = title;
                next();
            });
    });
 
    this.When(/^I use getElementCssProperty\(\) to get the "([^"]*)" attribute of an element with "([^"]*)" "([^"]*)"$/, function(attribute, findBy, cssSelector, next) {
        client
            .getElementCssProperty(findBy, cssSelector, attribute, function(err, result) {
                assert(err === null, 'command getElementCssProperty() returns with an error');
                tmpResult = result;
                next();
            });
    });
 
    this.Then(/^I should get a width of "([^"]*)" and height of "([^"]*)"$/, function(width, height, next) {
        assert(tmpResult.width  == width , 'width of element is ' + tmpResult.width + ' but should be ' + width);
        assert(tmpResult.height == height, 'height of element is ' + tmpResult.width + ' but should be ' + height);
        next();
    });
 
    this.Then(/^the command should return "([^"]*)"$/, function(result, next) {
        assert(tmpResult == result , ' result of command is "'+ tmpResult + '" but should be "'+ result);
        next();
    });
};
{% endhighlight %}
<footer>step-definitions.js <a href="https://gist.github.com/christian-bromann/6417028" target="_blank">Open Gist</a></footer>