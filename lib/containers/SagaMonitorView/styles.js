'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SagaMonitorBody = exports.SagaMonitorOption = exports.SagaMonitorHeader = exports.SagaMonitorContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-family: monospace;\n  font-size: 13px;\n  color: rgb(33,33,33);\n  height: 100%;\n  width: 100%;\n\n  & * {\n    box-sizing: border-box;\n  }\n\n  & [hidden] {\n    visibility: hidden;\n  }\n'], ['\n  font-family: monospace;\n  font-size: 13px;\n  color: rgb(33,33,33);\n  height: 100%;\n  width: 100%;\n\n  & * {\n    box-sizing: border-box;\n  }\n\n  & [hidden] {\n    visibility: hidden;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: rgb(243, 243, 243);\n  border-bottom: 1px solid rgb(204, 204, 204);\n  position: relative;\n\n  & hr {\n    background-color: rgb(56, 121, 217);\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n    border: none;\n    height: 2px;\n    margin: 0;\n    position: absolute;\n    bottom: -1px;\n    transition: .2s ease-in-out;\n  }\n'], ['\n  background-color: rgb(243, 243, 243);\n  border-bottom: 1px solid rgb(204, 204, 204);\n  position: relative;\n\n  & hr {\n    background-color: rgb(56, 121, 217);\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n    border: none;\n    height: 2px;\n    margin: 0;\n    position: absolute;\n    bottom: -1px;\n    transition: .2s ease-in-out;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 5px 10px;\n  width: 80px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgb(220, 220, 220);\n  }\n'], ['\n  padding: 5px 10px;\n  width: 80px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgb(220, 220, 220);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 30px;\n  bottom: 0;\n  width: 100%;\n'], ['\n  position: absolute;\n  top: 30px;\n  bottom: 0;\n  width: 100%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SagaMonitorContainer = exports.SagaMonitorContainer = _styledComponents2.default.div(_templateObject);

var SagaMonitorHeader = exports.SagaMonitorHeader = _styledComponents2.default.section(_templateObject2);

var SagaMonitorOption = exports.SagaMonitorOption = _styledComponents2.default.div(_templateObject3);

var SagaMonitorBody = exports.SagaMonitorBody = _styledComponents2.default.section(_templateObject4);