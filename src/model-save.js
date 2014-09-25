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
        sync: function(method, model, options) {
            if ( method === 'create' || method === 'update'  ) {
                var notSync = model.notSync;
                if (notSync) {
                    options.attrs = options.attrs || model.toJSON();
                    // Use notSync either as an array or string
                    if (Object.prototype.toString.call(notSync) !== '[object Array]') {
                        notSync = [ notSync ];
                    }
                    options.attrs = _.omit( options.attrs, notSync );
                }
            }

            Backbone.Model.prototype.sync.call(this, method, model, options);
        }
    });

    //Exports
    Backbone.ModelSave = ModelSave;

    return Backbone;

}));
