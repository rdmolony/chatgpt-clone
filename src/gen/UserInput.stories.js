"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _UserInput = _interopRequireDefault(require("./UserInput"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  component: _UserInput["default"],
  title: "Input",
  tags: ['autodocs'],
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement("div", {
      className: "h-32"
    }, /*#__PURE__*/React.createElement(Story, null));
  }]
};
var Default = exports.Default = {
  args: {}
};