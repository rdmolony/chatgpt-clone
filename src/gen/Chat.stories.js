"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _Chat = _interopRequireDefault(require("./Chat"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  component: _Chat["default"],
  title: "Chat",
  tags: ['autodocs']
};
var Default = exports.Default = {
  args: {
    name: "Storybook.js"
  }
};