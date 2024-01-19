"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _LLMResponse = _interopRequireDefault(require("./LLMResponse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  component: _LLMResponse["default"],
  title: "LLMResponse",
  tags: ['autodocs']
};
var Default = exports.Default = {
  args: {
    text: "Dia Duit, cad faoi ar mhaith labhairt?"
  }
};