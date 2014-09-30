backbone-model-save
=========
0.1.2

Tested with Backbone 1.1.0 only

This extension of Backbone allows you to specify model attributes that won't be sent to the server along with a .save()

```javascript
var myModel = new Backbone.ModelSave.extend({
    notSync: ['name', 'age']
});

```

Install
----
```
bower install backbone-model-save
```
```
git clone https://github.com/lupugabriel1/backbone-model-save
```
License
----
MIT
