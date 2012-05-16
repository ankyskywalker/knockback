// Generated by CoffeeScript 1.3.1
var ViewModel, model, view_model;

model = new Backbone.Model({
  number: 33
});

ViewModel = function(model) {
  this.number = kb.observable(model, 'number');
  this.formatted_number = kb.observable(model, {
    key: 'number',
    read: function() {
      return "#: " + (this.number());
    },
    write: function(value) {
      return this.number(value.substring(3));
    }
  }, this);
  return this;
};

view_model = new ViewModel(model);

ko.applyBindings(view_model, $('#kboo_read_write')[0]);