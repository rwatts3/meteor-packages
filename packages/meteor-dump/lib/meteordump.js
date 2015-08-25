/**
 * Makes nodedump exportable to meteordump
 */
nodedump = this.nodedump;
try {
    delete this.nodedump;
} catch (e) {
}

/**
 * @public
 * @where {Client}
 * @method meteordump
 * @param {Object} dump Takes any variable or object and creates a visual dump.
 * @param {Object} options Additional Options to be passed to control the dumps presentation.
 * @returns {*}
 *
 *Turns nodedump into a method that can be called on the client.
 */
meteordump = function (dump, options) {
    return Blaze.body.onRendered(function () {
        return $(nodedump(dump,options)).prependTo('body');
    })
};

/**
 * @public
 * @where {Client}
 * @returns {*}
 *
 * Registers the meteordump helper to be used within the template.
 */
Template.registerHelper('meteordump' , function (dump , options) {
    var options = options.hash || {};
    return $(nodedump(dump,options)).prependTo('body');
});
