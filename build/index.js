"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 4000;
app.get('/home', function (request, response) {
  response.json({
    user: 'name',
    pass: 'test'
  });
});
app.listen(port, function () {
  console.log('App runing', port);
});