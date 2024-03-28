"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ManyCallsAndResponses = exports.Default = exports.CallAndResponse = void 0;
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
var CallAndResponse = exports.CallAndResponse = {
  args: {
    messages: {
      0: {
        user: "Hello",
        llm: "Hello from LLM"
      }
    }
  }
};
var ManyCallsAndResponses = exports.ManyCallsAndResponses = {
  args: {
    messages: {
      0: {
        user: "Hello",
        llm: "Hello from LLM"
      },
      1: {
        user: "Hello again",
        llm: "Hello again from LLM"
      },
      2: {
        user: "Hello again again",
        llm: "Hello again again from LLM"
      },
      3: {
        user: "Hello...",
        llm: "Hello..."
      }
    }
  }
};