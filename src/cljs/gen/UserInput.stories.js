"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WaitingForLLM = exports.Default = void 0;
var _UserInput = _interopRequireDefault(require("./UserInput"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  component: _UserInput["default"],
  title: "Input",
  tags: ['autodocs']
};
var Default = exports.Default = {
  args: {}
};
var WaitingForLLM = exports.WaitingForLLM = {
  args: {
    isWaitingForLLM: true
  }
};