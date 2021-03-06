/**
 *
 * Protocol binding to handle with tabs in the browser.
 *
 * <example>
    :window.js
    // change focus to another window
    // using window handle
    client.window('{dc30381e-e2f3-9444-8bf3-12cc44e8372a}');

    // using tab name attribute
    client.window('my tab');

    // close the current window
    client.window();
 * </example>
 *
 * @param {String=} windowHandle the window to change focus to
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/window
 * @type protocol
 *
 */

module.exports = function window (windowHandle) {

    var data = {},
        requestOptions = {
            path: '/session/:sessionId/window',
            method: 'DELETE'
        };

    if(typeof windowHandle === 'string') {
        data = { name: windowHandle };
        requestOptions.method = 'POST';
    }

    this.requestHandler.create(
        requestOptions,
        data,
        arguments[arguments.length - 1]
    );

};