"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _Response = _interopRequireDefault(require("./Response"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  component: _Response["default"],
  title: "LLMResponse",
  tags: ['autodocs']
};
var Default = exports.Default = {
  args: {
    text: "I'm an LLM"
  }
};