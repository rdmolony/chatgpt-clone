"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LLMResponse = exports.Default = void 0;
var _Chat = _interopRequireDefault(require("./Chat"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  component: _Chat["default"],
  title: "Chat",
  tags: ['autodocs'],
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement("div", {
      className: "h-screen"
    }, /*#__PURE__*/React.createElement(Story, null));
  }]
};
var Default = exports.Default = {
  args: {}
};
var LLMResponse = exports.LLMResponse = {
  args: {
    responses: [{
      user: "Hello",
      llm: "Hello from LLM"
    }, {
      user: "Hello again",
      llm: "Hello again from LLM"
    }]
  }
};