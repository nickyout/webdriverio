var App = function() {

    this.ui = {
        body: $('body')
    };

    this.events = {
        'click .links>a': 'scrollToCommand'
    };

    this.delegateEvents();
};

App.prototype.scrollToCommand = function(e) {
    e.preventDefault();

    var elem = $(e.target),
        target = $('a[name="' + elem.attr('href').slice(1) + '"]');

    if (target.length) {
        var targetOffset = target.offset().top;
        this.ui.body.animate({scrollTop: targetOffset}, 1000);
        return false;
    }
};

/**
 * delegate events to dom objects
 * this was cribbed from backbone, to see the original source take a look here:
 * https://github.com/jashkenas/backbone/blob/master/backbone.js#L1062
 */
App.prototype.delegateEvents = function() {

    'use strict';

    var i = 0;
    for (var key in this.events) {
        var method = this[this.events[key]],
            eventName = key.split(' ')[0],
            selector = key.split(' ')[1];

        eventName += '.delegateEvents' + i;
        if (selector === '') {
            this.ui.body.on(eventName, method.bind(this));
        } else {
            this.ui.body.on(eventName, selector, method.bind(this));
        }

        ++i;
    }
};

$(function() {
    new App();
});