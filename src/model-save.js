(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['underscore', 'backbone'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('underscore'), require('backbone'));
    } else {
        // Globals
        factory(_, Backbone);
    }
}(function(_, Backbone) {

    var ModelSave = Backbone.Model.extend({
        save: function(attrs, options) {
            var notSync = this.notSync;
            if (notSync) {
                // Use notSync either as an array or string
                if (Object.prototype.toString.call(notSync) !== '[object Array]') {
                    notSync = [ notSync ];
                }
                attrs = _.omit( this.attributes, notSync );
            }

            Backbone.Model.prototype.save.call(this, attrs, options);
        }
    });

    //Exports
    Backbone.ModelSave = ModelSave;

    return Backbone;

}));
