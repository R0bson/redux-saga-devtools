'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Layout = require('../../components/Layout');

var _Dock = require('../../components/Dock');

var _Dock2 = _interopRequireDefault(_Dock);

var _EffectView = require('../EffectView');

var _EffectView2 = _interopRequireDefault(_EffectView);

var _ActionView = require('../ActionView');

var _ActionView2 = _interopRequireDefault(_ActionView);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EFFECT_VIEW = 'Effects';
var ACTION_VIEW = 'Actions';

var OPTION_WIDTH = 80;
var OPTION_STYLE = { width: OPTION_WIDTH };

var SagaMonitorView = function (_React$Component) {
  _inherits(SagaMonitorView, _React$Component);

  function SagaMonitorView() {
    var _ref, _this$viewHandlers;

    var _temp, _this, _ret;

    _classCallCheck(this, SagaMonitorView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SagaMonitorView.__proto__ || Object.getPrototypeOf(SagaMonitorView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentView: EFFECT_VIEW,
      currentViewIndex: 0
    }, _this.viewHandlers = (_this$viewHandlers = {}, _defineProperty(_this$viewHandlers, EFFECT_VIEW, function () {
      return _this.setState({ currentView: EFFECT_VIEW, currentViewIndex: 0 });
    }), _defineProperty(_this$viewHandlers, ACTION_VIEW, function () {
      return _this.setState({ currentView: ACTION_VIEW, currentViewIndex: 1 });
    }), _this$viewHandlers), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SagaMonitorView, [{
    key: 'renderCurrentView',
    value: function renderCurrentView() {
      switch (this.state.currentView) {
        case EFFECT_VIEW:
          return _react2.default.createElement(_EffectView2.default, { rootEffectIds: this.props.rootEffectIds });
        case ACTION_VIEW:
          return _react2.default.createElement(_ActionView2.default, null);
        default:
          return 'Unknown View!';
      }
    }
  }, {
    key: 'renderViewOption',
    value: function renderViewOption(view) {
      return _react2.default.createElement(
        _Layout.Cell,
        null,
        _react2.default.createElement(
          _styles.SagaMonitorOption,
          {
            style: OPTION_STYLE,
            onMouseDown: this.viewHandlers[view]
          },
          view
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Dock2.default,
        null,
        _react2.default.createElement(
          _styles.SagaMonitorContainer,
          null,
          _react2.default.createElement(
            _styles.SagaMonitorHeader,
            null,
            _react2.default.createElement(
              _Layout.Row,
              null,
              this.renderViewOption(EFFECT_VIEW),
              this.renderViewOption(ACTION_VIEW),
              _react2.default.createElement('hr', { style: { width: OPTION_WIDTH, left: OPTION_WIDTH * this.state.currentViewIndex } })
            )
          ),
          _react2.default.createElement(
            _styles.SagaMonitorBody,
            null,
            this.renderCurrentView()
          )
        )
      );
    }
  }]);

  return SagaMonitorView;
}(_react2.default.Component);

SagaMonitorView.propTypes = {
  rootEffectIds: _propTypes2.default.array.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    rootEffectIds: state.rootEffectIds
  };
})(SagaMonitorView);