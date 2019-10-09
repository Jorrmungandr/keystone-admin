(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  danger: _theme["default"].alert.color.danger,
  error: _theme["default"].alert.color.danger,
  info: _theme["default"].alert.color.info,
  success: _theme["default"].alert.color.success,
  warning: _theme["default"].alert.color.warning
};

},{"../../../theme":70}],2:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// clone children if a class exists for the tagname
var cloneWithClassnames = function cloneWithClassnames(c) {
  var type = c.type && c.type.displayName ? c.type.displayName : c.type || null;
  if (!type || !_styles["default"][type]) return c;
  return (0, _react.cloneElement)(c, {
    className: (0, _glamor.css)(_styles["default"][type])
  });
};

function Alert(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      Component = _ref.component,
      props = _objectWithoutProperties(_ref, ["children", "className", "color", "component"]);

  props.className = (0, _glamor.css)(_styles["default"].alert, _styles["default"][color], className);
  props.children = _react.Children.map(children, cloneWithClassnames);
  return _react["default"].createElement(Component, _extends({}, props, {
    "data-alert-type": color
  }));
}

;
Alert.propTypes = {
  color: _react.PropTypes.oneOf(Object.keys(_colors["default"])).isRequired,
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string])
};
Alert.defaultProps = {
  component: 'div'
};
module.exports = Alert;

},{"./colors":1,"./styles":3,"glamor":undefined,"react":undefined}],3:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors["default"]).forEach(function (color) {
  colorVariants[color] = {
    backgroundColor: _colors["default"][color].background,
    borderColor: _colors["default"][color].border,
    color: _colors["default"][color].text
  };
}); // Prepare headings

var headingTagnames = {};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (tag) {
  headingTagnames[tag] = {
    color: 'inherit'
  };
});
var linkStyles = {
  color: 'inherit',
  textDecoration: 'underline',
  ':hover': {
    color: 'inherit'
  },
  ':focus': {
    color: 'inherit'
  }
};
module.exports = _objectSpread({
  alert: {
    borderColor: 'transparent',
    borderRadius: _theme["default"].alert.borderRadius,
    borderStyle: 'solid',
    borderWidth: _theme["default"].alert.borderWidth,
    margin: _theme["default"].alert.margin,
    padding: _theme["default"].alert.padding
  },
  // tagnames
  a: linkStyles,
  Link: linkStyles,
  strong: {
    fontWeight: 500
  }
}, headingTagnames, colorVariants);

},{"../../../theme":70,"./colors":1}],4:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BlankState(_ref) {
  var className = _ref.className,
      children = _ref.children,
      heading = _ref.heading,
      Component = _ref.component,
      props = _objectWithoutProperties(_ref, ["className", "children", "heading", "component"]);

  props.className = (0, _glamor.css)(classes.container, className);
  return _react["default"].createElement(Component, props, !!heading && _react["default"].createElement("h2", {
    "data-e2e-blank-state-heading": true,
    className: (0, _glamor.css)(classes.heading)
  }, heading), children);
}

;
BlankState.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
  heading: _react.PropTypes.string
};
BlankState.defaultProps = {
  component: 'div'
};
/* eslint quote-props: ["error", "as-needed"] */

var classes = {
  container: {
    backgroundColor: _theme["default"].blankstate.background,
    borderRadius: _theme["default"].blankstate.borderRadius,
    color: _theme["default"].blankstate.color,
    paddingBottom: _theme["default"].blankstate.paddingVertical,
    paddingLeft: _theme["default"].blankstate.paddingHorizontal,
    paddingRight: _theme["default"].blankstate.paddingHorizontal,
    paddingTop: _theme["default"].blankstate.paddingVertical,
    textAlign: 'center'
  },
  heading: {
    color: 'inherit',
    ':last-child': {
      marginBottom: 0
    }
  }
};
module.exports = BlankState;

},{"../../../theme":70,"glamor":undefined,"react":undefined}],5:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var commonClasses = _styles["default"].common;
var stylesheetCache = {};

function getStyleSheet(variant, color) {
  var cacheKey = "".concat(variant, "-").concat(color);

  if (!stylesheetCache[cacheKey]) {
    var variantStyles = _styles["default"][variant](color);

    stylesheetCache[cacheKey] = variantStyles;
  }

  return stylesheetCache[cacheKey];
}

var BUTTON_SIZES = ['large', 'medium', 'small', 'xsmall'];
var BUTTON_VARIANTS = ['fill', 'hollow', 'link'];
var BUTTON_COLORS = ['default', 'primary', 'success', 'warning', 'danger', 'cancel', 'delete']; // NOTE must NOT be functional component to allow `refs`

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          cssStyles = _this$props.cssStyles,
          block = _this$props.block,
          className = _this$props.className,
          color = _this$props.color,
          Tag = _this$props.component,
          disabled = _this$props.disabled,
          size = _this$props.size,
          variant = _this$props.variant,
          props = _objectWithoutProperties(_this$props, ["active", "cssStyles", "block", "className", "color", "component", "disabled", "size", "variant"]); // get the styles


      var variantClasses = getStyleSheet(variant, color);
      props.className = _glamor.css.apply(void 0, [commonClasses.base, commonClasses[size], variantClasses.base, block ? commonClasses.block : null, disabled ? commonClasses.disabled : null, active ? variantClasses.active : null].concat(_toConsumableArray(cssStyles)));

      if (className) {
        props.className += ' ' + className;
      } // return an anchor or button


      if (!Tag) {
        Tag = props.href ? 'a' : 'button';
      } // Ensure buttons don't submit by default


      if (Tag === 'button' && !props.type) {
        props.type = 'button';
      }

      return _react["default"].createElement(Tag, props);
    }
  }]);

  return Button;
}(_react.Component);

;
Button.propTypes = {
  active: _react.PropTypes.bool,
  block: _react.PropTypes.bool,
  color: _react.PropTypes.oneOf(BUTTON_COLORS),
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  cssStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    _definition: _react.PropTypes.object,
    _name: _react.PropTypes.string
  })),
  disabled: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(BUTTON_SIZES),
  variant: _react.PropTypes.oneOf(BUTTON_VARIANTS)
};
Button.defaultProps = {
  cssStyles: [],
  color: 'default',
  variant: 'fill'
};
module.exports = Button;

},{"./styles":6,"glamor":undefined,"react":undefined}],6:[function(require,module,exports){
"use strict";

var _css = require("../../../utils/css");

var _color = require("../../../utils/color");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Common Styles
// ----------------
exports.common = {
  // Base Button
  // ----------------
  base: {
    'appearance': 'none',
    'background': 'none',
    'borderWidth': _theme["default"].button.borderWidth,
    'borderStyle': 'solid',
    'borderColor': 'transparent',
    'borderRadius': _theme["default"].button.borderRadius,
    'cursor': 'pointer',
    'display': 'inline-block',
    'fontWeight': _theme["default"].button.font.weight,
    'height': _theme["default"].component.height,
    'lineHeight': _theme["default"].component.lineHeight,
    'marginBottom': 0,
    'padding': "0 ".concat(_theme["default"].button.paddingHorizontal),
    'outline': 0,
    'textAlign': 'center',
    'touchAction': 'manipulation',
    'userSelect': 'none',
    'verticalAlign': 'middle',
    'whiteSpace': 'nowrap',
    ':hover': {
      color: _theme["default"].button["default"].textColor,
      textDecoration: 'none'
    },
    ':focus': {
      color: _theme["default"].button["default"].textColor,
      textDecoration: 'none'
    }
  },
  // Block Display
  // ----------------
  block: {
    display: 'block',
    width: '100%'
  },
  // Disabled
  // ----------------
  disabled: {
    opacity: 0.4,
    pointerEvents: 'none'
  },
  // Sizes
  // ----------------
  large: {
    fontSize: _theme["default"].font.size.large
  },
  "default": {
    fontSize: _theme["default"].font.size["default"]
  },
  small: {
    fontSize: _theme["default"].font.size.small
  },
  xsmall: {
    fontSize: _theme["default"].font.size.xsmall,
    lineHeight: '1.9',
    paddingLeft: '.66em',
    paddingRight: '.66em'
  }
}; // Fill Variant
// ----------------

function buttonFillVariant(textColor, bgColor) {
  var hoverStyles = _objectSpread({}, (0, _css.gradientVertical)((0, _color.lighten)(bgColor, 10), (0, _color.darken)(bgColor, 5)), {
    borderColor: "".concat((0, _color.darken)(bgColor, 5), " ").concat((0, _color.darken)(bgColor, 10), " ").concat((0, _color.darken)(bgColor, 15)),
    boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
    color: textColor,
    outline: 'none'
  });

  var focusStyles = _objectSpread({}, (0, _css.gradientVertical)((0, _color.lighten)(bgColor, 10), (0, _color.darken)(bgColor, 5)), {
    borderColor: "".concat((0, _color.darken)(bgColor, 5), " ").concat((0, _color.darken)(bgColor, 10), " ").concat((0, _color.darken)(bgColor, 15)),
    boxShadow: "0 0 0 3px ".concat((0, _color.fade)(bgColor, 25)),
    color: textColor,
    outline: 'none'
  });

  var activeStyles = {
    backgroundColor: (0, _color.darken)(bgColor, 10),
    backgroundImage: 'none',
    borderColor: "".concat((0, _color.darken)(bgColor, 25), " ").concat((0, _color.darken)(bgColor, 15), " ").concat((0, _color.darken)(bgColor, 10)),
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
  };
  return {
    base: _objectSpread({}, (0, _css.gradientVertical)((0, _color.lighten)(bgColor, 5), (0, _color.darken)(bgColor, 10), bgColor), {
      'borderColor': "".concat((0, _color.darken)(bgColor, 10), " ").concat((0, _color.darken)(bgColor, 20), " ").concat((0, _color.darken)(bgColor, 25)),
      'boxShadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      'color': textColor,
      'fontWeight': 400,
      'textShadow': '0 -1px 0 rgba(0, 0, 0, 0.25)',
      ':hover': hoverStyles,
      ':focus': focusStyles,
      ':active': activeStyles
    }),
    active: activeStyles
  };
} // TODO: This is pretty hacky, needs to be consolidated with the Variant() method
// above (needs more theme variables to be implemented though)


function buttonFillDefault() {
  var borderColor = _theme["default"].input.border.color["default"];

  var hoverStyles = _objectSpread({}, (0, _css.gradientVertical)('#fff', '#eee'), {
    borderColor: "".concat((0, _color.darken)(borderColor, 5), " ").concat((0, _color.darken)(borderColor, 5), " ").concat((0, _color.darken)(borderColor, 10)),
    boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
    color: _theme["default"].color.text
  });

  var focusStyles = {
    borderColor: _theme["default"].color.primary,
    boxShadow: "0 0 0 3px ".concat((0, _color.fade)(_theme["default"].color.primary, 10)),
    color: _theme["default"].color.text,
    outline: 'none'
  };
  var activeStyles = {
    background: '#e6e6e6',
    borderColor: (0, _color.darken)(borderColor, 10),
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    color: _theme["default"].color.text
  };
  return {
    base: _objectSpread({}, (0, _css.gradientVertical)('#fafafa', '#eaeaea'), {
      'borderColor': "".concat(borderColor, " ").concat((0, _color.darken)(borderColor, 6), " ").concat((0, _color.darken)(borderColor, 12)),
      'color': _theme["default"].color.text,
      'textShadow': '0 1px 0 white',
      ':hover': hoverStyles,
      ':focus': focusStyles,
      ':active': activeStyles
    }),
    // gross hack
    active: _objectSpread({}, activeStyles, {
      ':hover': activeStyles,
      ':focus': _objectSpread({}, activeStyles, focusStyles, {
        boxShadow: "0 0 0 3px ".concat((0, _color.fade)(_theme["default"].color.primary, 10), ", inset 0 1px 2px rgba(0, 0, 0, 0.1)")
      }),
      ':active': activeStyles
    })
  };
}

exports.fill = function (color) {
  switch (color) {
    case 'default':
      return buttonFillDefault();

    case 'cancel':
    case 'delete':
      return buttonFillVariant('white', _theme["default"].button.danger.bgColor);

    default:
      return buttonFillVariant('white', _theme["default"].button[color].bgColor);
  }
}; // Hollow Variant
// ----------------


function buttonHollowVariant(textColor, borderColor) {
  var focusAndHoverStyles = {
    backgroundImage: 'none',
    backgroundColor: (0, _color.fade)(borderColor, 15),
    borderColor: (0, _color.darken)(borderColor, 15),
    boxShadow: 'none',
    color: textColor,
    outline: 'none'
  };
  var focusOnlyStyles = {
    boxShadow: "0 0 0 3px ".concat((0, _color.fade)(borderColor, 10))
  };
  var activeStyles = {
    backgroundColor: (0, _color.fade)(borderColor, 35),
    borderColor: (0, _color.darken)(borderColor, 25),
    boxShadow: 'none'
  };
  return {
    base: {
      'background': 'none',
      'borderColor': borderColor,
      'color': textColor,
      ':hover': focusAndHoverStyles,
      ':focus ': Object.assign({}, focusAndHoverStyles, focusOnlyStyles),
      ':active': activeStyles
    },
    active: activeStyles
  };
}

;

exports.hollow = function (color) {
  // TODO: better handling of cancel and delete colors
  if (color === 'cancel' || color === 'delete') color = 'danger';
  return buttonHollowVariant(_theme["default"].button[color].bgColor, _theme["default"].button[color].borderColor);
}; // Link Variant
// ----------------


function buttonLinkVariant(textColor, hoverColor) {
  var hoverStyles = {
    color: hoverColor,
    textDecoration: 'underline'
  };
  return {
    base: {
      'background': 'none',
      'border': 0,
      'boxShadow': 'none',
      'color': textColor,
      'fontWeight': 'normal',
      'outline': 'none',
      ':hover': hoverStyles,
      ':focus': hoverStyles,
      ':active': hoverStyles
    },
    active: hoverStyles
  };
}

;

function buttonLinkDelete() {
  var styles = buttonLinkVariant(_theme["default"].color.gray40, _theme["default"].color.danger);

  var hoverStyles = _objectSpread({}, (0, _css.gradientVertical)((0, _color.lighten)(_theme["default"].color.danger, 10), (0, _color.darken)(_theme["default"].color.danger, 10)), {
    backgroundColor: _theme["default"].color.danger,
    borderColor: "".concat((0, _color.darken)(_theme["default"].color.danger, 4), " ").concat((0, _color.darken)(_theme["default"].color.danger, 8), " ").concat((0, _color.darken)(_theme["default"].color.danger, 12)),
    boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
    color: 'white',
    textDecoration: 'none'
  });

  var activeStyles = {
    backgroundColor: (0, _color.darken)(_theme["default"].color.danger, 4),
    backgroundImage: 'none',
    borderColor: "".concat((0, _color.darken)(_theme["default"].color.danger, 12), " ").concat((0, _color.darken)(_theme["default"].color.danger, 8), " ").concat((0, _color.darken)(_theme["default"].color.danger, 8)),
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    color: 'white'
  };
  return {
    base: _objectSpread({}, styles.base, {
      ':hover': hoverStyles,
      ':focus': hoverStyles,
      ':active': activeStyles
    }),
    active: activeStyles
  };
}

exports.link = function (color) {
  switch (color) {
    case 'default':
      return buttonLinkVariant(_theme["default"].color.link, _theme["default"].color.linkHover);

    case 'cancel':
      return buttonLinkVariant(_theme["default"].color.gray40, _theme["default"].color.danger);

    case 'delete':
      return buttonLinkDelete();

    default:
      return buttonLinkVariant(_theme["default"].color[color], _theme["default"].color[color]);
  }
};

},{"../../../theme":70,"../../../utils/color":71,"../../../utils/css":73}],7:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Center(_ref) {
  var className = _ref.className,
      Component = _ref.component,
      height = _ref.height,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "component", "height", "style"]);

  props.className = (0, _glamor.css)(_styles["default"].center, className);
  props.style = _objectSpread({
    height: height
  }, style);
  return _react["default"].createElement(Component, props);
}

;
Center.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
Center.defaultProps = {
  component: 'div',
  height: 'auto'
};
module.exports = Center;

},{"./styles":8,"glamor":undefined,"react":undefined}],8:[function(require,module,exports){
"use strict";

// ==============================
// Center
// ==============================
module.exports = {
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

},{}],9:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

var _color = require("../../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(function (color) {
  baseColors[color] = {
    background: (0, _color.fade)(_theme["default"].color[color], 10),
    backgroundActive: (0, _color.fade)(_theme["default"].color[color], 20),
    backgroundHover: (0, _color.fade)(_theme["default"].color[color], 15),
    text: _theme["default"].color[color]
  };
});
var invertedColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(function (color) {
  invertedColors[color + '__inverted'] = {
    background: _theme["default"].color[color],
    backgroundActive: (0, _color.lighten)(_theme["default"].color[color], 5),
    backgroundHover: (0, _color.lighten)(_theme["default"].color[color], 15),
    text: 'white'
  };
});
module.exports = _objectSpread({
  "default": {
    background: _theme["default"].color.gray10,
    backgroundActive: _theme["default"].color.gray20,
    backgroundHover: _theme["default"].color.gray15,
    text: _theme["default"].color.gray60
  }
}, baseColors, {
  // inverted
  default__inverted: {
    background: _theme["default"].color.gray60,
    backgroundActive: (0, _color.lighten)(_theme["default"].color.gray60, 5),
    backgroundHover: (0, _color.lighten)(_theme["default"].color.gray60, 15),
    text: 'white'
  }
}, invertedColors);

},{"../../../theme":70,"../../../utils/color":71}],10:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Chip(_ref) {
  var className = _ref.className,
      children = _ref.children,
      color = _ref.color,
      inverted = _ref.inverted,
      label = _ref.label,
      onClear = _ref.onClear,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["className", "children", "color", "inverted", "label", "onClear", "onClick"]);

  props.className = (0, _glamor.css)(_styles["default"].chip, className);
  var labelClassName = (0, _glamor.css)(_styles["default"].button, _styles["default"].label, _styles["default"]['button__' + color + (inverted ? '__inverted' : '')]);
  var clearClassName = (0, _glamor.css)(_styles["default"].button, _styles["default"].clear, _styles["default"]['button__' + color + (inverted ? '__inverted' : '')]);
  return _react["default"].createElement("div", props, _react["default"].createElement("button", {
    type: "button",
    onClick: onClick,
    className: labelClassName
  }, label, children), !!onClear && _react["default"].createElement("button", {
    type: "button",
    onClick: onClear,
    className: clearClassName
  }, "\xD7"));
}

;
Chip.propTypes = {
  color: _react.PropTypes.oneOf(Object.keys(_colors["default"])).isRequired,
  inverted: _react.PropTypes.bool,
  label: _react["default"].PropTypes.string.isRequired,
  onClear: _react["default"].PropTypes.func,
  onClick: _react["default"].PropTypes.func
};
Chip.defaultProps = {
  color: 'default'
};
module.exports = Chip;

},{"./colors":9,"./styles":11,"glamor":undefined,"react":undefined}],11:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _theme = _interopRequireDefault(require("../../../theme"));

var _css = require("../../../utils/css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors["default"]).forEach(function (color) {
  var hoverStyles = {
    backgroundColor: _colors["default"][color].backgroundHover
  };
  colorVariants['button__' + color] = {
    backgroundColor: _colors["default"][color].background,
    color: _colors["default"][color].text,
    ':hover': hoverStyles,
    ':focus': hoverStyles,
    ':active': {
      backgroundColor: _colors["default"][color].backgroundActive
    }
  };
});
module.exports = _objectSpread({
  chip: {
    display: 'inline-block',
    fontSize: _theme["default"].font.size.small,
    fontWeight: 500,
    marginRight: '0.5em',
    overflow: 'hidden',
    lineHeight: '2.2em'
  },
  // tagnames
  button: {
    appearance: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    "float": 'left',
    padding: '0 .9em',
    outline: 'none',
    // make pills - exaggerate the padding toward the radii so it looks even
    ':first-child': _objectSpread({}, (0, _css.borderLeftRadius)('3em'), {
      paddingLeft: '1.1em'
    }),
    ':last-child': _objectSpread({}, (0, _css.borderRightRadius)('3em'), {
      paddingRight: '1.1em'
    })
  },
  // provide separation between the label and clear buttons
  // floating stops the margins from collapsing into eaching
  label: {
    marginRight: 1
  },
  clear: {
    marginLeft: 1
  }
}, colorVariants);

},{"../../../theme":70,"../../../utils/css":73,"./colors":9}],12:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Container(_ref) {
  var className = _ref.className,
      clearFloatingChildren = _ref.clearFloatingChildren,
      Component = _ref.component,
      width = _ref.width,
      props = _objectWithoutProperties(_ref, ["className", "clearFloatingChildren", "component", "width"]);

  props.className = (0, _glamor.css)(_styles["default"].container, _styles["default"][width], clearFloatingChildren ? _styles["default"].clearfix : null, className);
  return _react["default"].createElement(Component, props);
}

;
Container.propTypes = {
  clearFloatingChildren: _react.PropTypes.bool,
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
  width: _react.PropTypes.oneOf(Object.keys(_sizes["default"])).isRequired
};
Container.defaultProps = {
  component: 'div',
  width: 'large'
};
module.exports = Container;

},{"./sizes":13,"./styles":14,"glamor":undefined,"react":undefined}],13:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  small: _theme["default"].container.size.small,
  medium: _theme["default"].container.size.medium,
  large: _theme["default"].container.size.large
};

},{"../../../theme":70}],14:[function(require,module,exports){
"use strict";

var _sizes = _interopRequireDefault(require("./sizes"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Prepare sizes
var sizeVariants = {};
Object.keys(_sizes["default"]).forEach(function (size) {
  sizeVariants[size] = {
    maxWidth: _sizes["default"][size]
  };
});
/*
	Micro clearfix hack
	1.	The space content is one way to avoid an Opera bug when the
			contenteditable attribute is included anywhere else in the document.
			Otherwise it causes space to appear at the top and bottom of elements
			that are clearfixed.
	2.	The use of `table` rather than `block` is only necessary if using
			`:before` to contain the top-margins of child elements.
*/

var clearfixStyles = {
  clear: 'both',
  content: '" "',
  // 1
  display: 'table' // 2

};
module.exports = _objectSpread({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: _theme["default"].container.gutter,
    paddingRight: _theme["default"].container.gutter
  },
  // clear floating children
  clearfix: {
    ':before': clearfixStyles,
    ':after': clearfixStyles
  }
}, sizeVariants);

},{"../../../theme":70,"./sizes":13}],15:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DropdownButton(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react["default"].createElement(_Button["default"], props, children, _react["default"].createElement("span", {
    className: (0, _glamor.css)(classes.arrow)
  }));
}

; // NOTE
// 1: take advantage of `currentColor` by leaving border top color undefined
// 2: even though the arrow is vertically centered, visually it appears too low
//    because of lowercase characters beside it

var classes = {
  arrow: {
    borderLeft: '0.3em solid transparent',
    borderRight: '0.3em solid transparent',
    borderTop: '0.3em solid',
    // 1
    display: 'inline-block',
    height: 0,
    marginTop: '-0.125em',
    // 2
    verticalAlign: 'middle',
    width: 0,
    // add spacing
    ':first-child': {
      marginRight: '0.5em'
    },
    ':last-child': {
      marginLeft: '0.5em'
    }
  }
};
module.exports = DropdownButton;

},{"../Button":5,"glamor":undefined,"react":undefined}],16:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, _getPrototypeOf(Form).apply(this, arguments));
  }

  _createClass(Form, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        formLayout: this.props.layout,
        labelWidth: this.props.labelWidth
      };
    }
  }, {
    key: "render",
    value: function render() {
      // NOTE `labelWidth` is declared to remove it from `props`, though never used
      var _this$props = this.props,
          className = _this$props.className,
          Component = _this$props.component,
          labelWidth = _this$props.labelWidth,
          layout = _this$props.layout,
          props = _objectWithoutProperties(_this$props, ["className", "component", "labelWidth", "layout"]);

      props.className = (0, _glamor.css)(_styles["default"].Form, _styles["default"]['Form__' + layout], className);
      return _react["default"].createElement(Component, props);
    }
  }]);

  return Form;
}(_react.Component);

;
Form.childContextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
Form.propTypes = {
  children: _react.PropTypes.node.isRequired,
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  layout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline'])
};
Form.defaultProps = {
  component: 'form',
  layout: 'basic'
};
module.exports = Form;

},{"./styles":17,"glamor":undefined,"react":undefined}],17:[function(require,module,exports){
"use strict";

// ==============================
// Form
// ==============================
module.exports = {
  Form: {}
};

},{}],18:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _FormLabel = _interopRequireDefault(require("../FormLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FormField =
/*#__PURE__*/
function (_Component) {
  _inherits(FormField, _Component);

  function FormField() {
    var _this;

    _classCallCheck(this, FormField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormField).call(this));
    _this.formFieldId = generateId();
    return _this;
  }

  _createClass(FormField, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        formFieldId: this.formFieldId
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context = this.context,
          _this$context$formLay = _this$context.formLayout,
          formLayout = _this$context$formLay === void 0 ? 'basic' : _this$context$formLay,
          labelWidth = _this$context.labelWidth;

      var _this$props = this.props,
          cssStyles = _this$props.cssStyles,
          children = _this$props.children,
          className = _this$props.className,
          cropLabel = _this$props.cropLabel,
          htmlFor = _this$props.htmlFor,
          label = _this$props.label,
          offsetAbsentLabel = _this$props.offsetAbsentLabel,
          props = _objectWithoutProperties(_this$props, ["cssStyles", "children", "className", "cropLabel", "htmlFor", "label", "offsetAbsentLabel"]);

      props.className = (0, _glamor.css)(_styles["default"].FormField, _styles["default"]['FormField--form-layout-' + formLayout], offsetAbsentLabel ? _styles["default"]['FormField--offset-absent-label'] : null, cssStyles);

      if (className) {
        props.className += ' ' + className;
      }

      if (offsetAbsentLabel && labelWidth) {
        props.style = _objectSpread({
          paddingLeft: labelWidth
        }, props.style);
      } // elements


      var componentLabel = label ? _react["default"].createElement(_FormLabel["default"], {
        htmlFor: htmlFor,
        cropText: cropLabel
      }, label) : null;
      return _react["default"].createElement("div", _extends({}, props, {
        htmlFor: htmlFor
      }), componentLabel, children);
    }
  }]);

  return FormField;
}(_react.Component);

;
var stylesShape = {
  _definition: _react.PropTypes.object,
  _name: _react.PropTypes.string
};
FormField.contextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
FormField.childContextTypes = {
  formFieldId: _react.PropTypes.string
};
FormField.propTypes = {
  children: _react.PropTypes.node,
  cropLabel: _react.PropTypes.bool,
  cssStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
  htmlFor: _react["default"].PropTypes.string,
  label: _react["default"].PropTypes.string,
  offsetAbsentLabel: _react["default"].PropTypes.bool
};

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

;
module.exports = FormField;

},{"../FormLabel":23,"./styles":19,"glamor":undefined,"react":undefined}],19:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  'FormField': {
    marginBottom: '1em',
    position: 'relative'
  },
  // when inside a horizontal form
  'FormField--form-layout-horizontal': _defineProperty({}, "@media (min-width: ".concat(_theme["default"].breakpoint.tabletLandscapeMin, ")"), {
    display: 'table',
    tableLayout: 'fixed',
    width: '100%'
  }),
  // inside horizontal form
  // typically for use with submit button inside
  'FormField--offset-absent-label': {
    paddingLeft: _theme["default"].form.label.width
  },
  // when inside an inline form
  'FormField--form-layout-inline': {
    'display': 'inline-block',
    'paddingLeft': '0.25em',
    'paddingRight': '0.25em',
    'verticalAlign': 'top',
    ':first-child': {
      paddingLeft: 0
    },
    ':last-child': {
      paddingRight: 0
    }
  }
};

},{"../../../theme":70}],20:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

var _concatClassnames = _interopRequireDefault(require("../../../utils/concatClassnames"));

var _noedit = _interopRequireDefault(require("./noedit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// NOTE must NOT be functional component to allow `refs`
var FormInput =
/*#__PURE__*/
function (_Component) {
  _inherits(FormInput, _Component);

  function FormInput() {
    _classCallCheck(this, FormInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormInput).apply(this, arguments));
  }

  _createClass(FormInput, [{
    key: "blur",
    value: function blur() {
      this.target.blur();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.target.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          cssStyles = _this$props.cssStyles,
          className = _this$props.className,
          disabled = _this$props.disabled,
          id = _this$props.id,
          multiline = _this$props.multiline,
          noedit = _this$props.noedit,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, ["cssStyles", "className", "disabled", "id", "multiline", "noedit", "size"]); // NOTE return a different component for `noedit`


      if (noedit) return _react["default"].createElement(_noedit["default"], this.props);
      var _this$context = this.context,
          formFieldId = _this$context.formFieldId,
          formLayout = _this$context.formLayout;
      props.id = id || formFieldId;
      props.className = _glamor.css.apply(void 0, [_styles["default"].FormInput, _styles["default"]['FormInput__size--' + size], disabled ? _styles["default"]['FormInput--disabled'] : null, formLayout ? _styles["default"]['FormInput--form-layout-' + formLayout] : null].concat(_toConsumableArray((0, _concatClassnames["default"])(cssStyles))));

      if (className) {
        props.className += ' ' + className;
      }

      var setRef = function setRef(n) {
        return _this.target = n;
      };

      var Tag = multiline ? 'textarea' : 'input';
      return _react["default"].createElement(Tag, _extends({
        ref: setRef,
        disabled: props.disabled
      }, props));
    }
  }]);

  return FormInput;
}(_react.Component);

;
var stylesShape = {
  _definition: _react.PropTypes.object,
  _name: _react.PropTypes.string
};
FormInput.propTypes = {
  cssStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
  multiline: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['default', 'small', 'large']),
  type: _react.PropTypes.string
};
FormInput.defaultProps = {
  size: 'default',
  type: 'text'
};
FormInput.contextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  formFieldId: _react.PropTypes.string
};
module.exports = FormInput;

},{"../../../utils/concatClassnames":72,"./noedit":21,"./styles":22,"glamor":undefined,"react":undefined}],21:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

var _color = require("../../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint quote-props: ["error", "as-needed"] */
function FormInputNoedit(_ref) {
  var className = _ref.className,
      Component = _ref.component,
      cropText = _ref.cropText,
      multiline = _ref.multiline,
      noedit = _ref.noedit,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["className", "component", "cropText", "multiline", "noedit", "type"]);

  props.className = (0, _glamor.css)(classes.noedit, cropText ? classes.cropText : null, multiline ? classes.multiline : null, props.href || props.onClick ? classes.anchor : null, className);
  return _react["default"].createElement(Component, props);
}

;
FormInputNoedit.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  cropText: _react.PropTypes.bool
};
FormInputNoedit.defaultProps = {
  component: 'span'
};
var anchorHoverAndFocusStyles = {
  backgroundColor: (0, _color.fade)(_theme["default"].color.link, 10),
  borderColor: (0, _color.fade)(_theme["default"].color.link, 10),
  color: _theme["default"].color.link,
  outline: 'none',
  textDecoration: 'underline'
};
var classes = {
  noedit: {
    appearance: 'none',
    backgroundColor: _theme["default"].input.background.noedit,
    backgroundImage: 'none',
    borderColor: _theme["default"].input.border.color.noedit,
    borderRadius: _theme["default"].input.border.radius,
    borderStyle: 'solid',
    borderWidth: _theme["default"].input.border.width,
    color: _theme["default"].color.gray80,
    display: 'inline-block',
    lineHeight: _theme["default"].input.lineHeight,
    padding: "0 ".concat(_theme["default"].input.paddingHorizontal),
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    verticalAlign: 'middle',
    // prevent empty inputs from collapsing by adding content
    ':empty:before': {
      color: _theme["default"].color.gray40,
      content: '"(no value)"'
    }
  },
  multiline: {
    display: 'block',
    height: 'auto',
    lineHeight: '1.4',
    paddingBottom: '0.6em',
    paddingTop: '0.6em'
  },
  // indicate clickability when using an anchor
  anchor: {
    backgroundColor: (0, _color.fade)(_theme["default"].color.link, 5),
    borderColor: (0, _color.fade)(_theme["default"].color.link, 10),
    color: _theme["default"].color.link,
    marginRight: 5,
    minWidth: 0,
    textDecoration: 'none',
    ':hover': anchorHoverAndFocusStyles,
    ':focus': anchorHoverAndFocusStyles
  }
};
module.exports = FormInputNoedit;

},{"../../../theme":70,"../../../utils/color":71,"glamor":undefined,"react":undefined}],22:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ==============================
// Form Input
// ==============================
module.exports = {
  'FormInput': {
    'appearance': 'none',
    'backgroundColor': _theme["default"].input.background["default"],
    'backgroundImage': 'none',
    'borderColor': _theme["default"].input.border.color["default"],
    'borderRadius': _theme["default"].input.border.radius,
    'borderStyle': 'solid',
    'borderWidth': _theme["default"].input.border.width,
    'boxShadow': _theme["default"].input.boxShadow,
    'color': 'inherit',
    // FIXME
    'display': 'block',
    'height': _theme["default"].input.height,
    'lineHeight': _theme["default"].input.lineHeight,
    'padding': "0 ".concat(_theme["default"].input.paddingHorizontal),
    'transition': 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    'width': '100%',
    ':hover': {
      borderColor: _theme["default"].input.border.color.hover,
      outline: 0
    },
    ':focus': {
      borderColor: _theme["default"].input.border.color.focus,
      boxShadow: _theme["default"].input.boxShadowFocus,
      outline: 0
    }
  },
  'FormInput--disabled': {
    backgroundColor: _theme["default"].input.background.disabled,
    pointerEvents: 'none'
  },
  // sizes
  'FormInput__size--small': {
    fontSize: _theme["default"].font.size.small
  },
  'FormInput__size--large': {
    fontSize: _theme["default"].font.size.large
  }
};

},{"../../../theme":70}],23:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FormLabel(_ref, _ref2) {
  var cssStyles = _ref.cssStyles,
      className = _ref.className,
      Component = _ref.component,
      cropText = _ref.cropText,
      htmlFor = _ref.htmlFor,
      props = _objectWithoutProperties(_ref, ["cssStyles", "className", "component", "cropText", "htmlFor"]);

  var formFieldId = _ref2.formFieldId,
      formLayout = _ref2.formLayout,
      labelWidth = _ref2.labelWidth;
  props.htmlFor = htmlFor || formFieldId;
  props.className = (0, _glamor.css)(_styles["default"].FormLabel, formLayout ? _styles["default"]['FormLabel--form-layout-' + formLayout] : null, cropText ? _styles["default"]['FormLabel--crop-text'] : null, cssStyles);

  if (className) {
    props.className += ' ' + className;
  }

  if (labelWidth) {
    props.style = _objectSpread({
      width: labelWidth
    }, props.style);
  }

  return _react["default"].createElement(Component, props);
}

;
var stylesShape = {
  _definition: _react.PropTypes.object,
  _name: _react.PropTypes.string
};
FormLabel.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  cropText: _react.PropTypes.bool,
  cssStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)])
};
FormLabel.defaultProps = {
  component: 'label'
};
FormLabel.contextTypes = {
  formLayout: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline']),
  formFieldId: _react.PropTypes.string,
  labelWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
module.exports = FormLabel;

},{"./styles":24,"glamor":undefined,"react":undefined}],24:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  'FormLabel': {
    color: _theme["default"].form.label.color,
    fontSize: _theme["default"].form.label.fontSize,
    fontWeight: _theme["default"].form.label.fontWeight,
    display: 'inline-block',
    marginBottom: '0.5em'
  },
  // when inside a horizontal form
  'FormLabel--form-layout-horizontal': _defineProperty({}, "@media (min-width: ".concat(_theme["default"].breakpoint.tabletLandscapeMin, ")"), {
    display: 'table-cell',
    lineHeight: _theme["default"].component.lineHeight,
    // fix
    marginBottom: 0,
    paddingRight: 5,
    verticalAlign: 'top',
    width: _theme["default"].form.label.width
  }),
  // crop long text
  'FormLabel--crop-text': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
};

},{"../../../theme":70}],25:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FormNote(_ref) {
  var className = _ref.className,
      children = _ref.children,
      Component = _ref.component,
      html = _ref.html,
      props = _objectWithoutProperties(_ref, ["className", "children", "component", "html"]);

  props.className = (0, _glamor.css)(_styles["default"].note, className); // Property Violation

  if (children && html) {
    console.error('Warning: FormNote cannot render `children` and `html`. You must provide one or the other.');
  }

  return html ? _react["default"].createElement(Component, _extends({}, props, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  })) : _react["default"].createElement(Component, props, children);
}

;
FormNote.propTypes = {
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  html: _react.PropTypes.string
};
FormNote.defaultProps = {
  component: 'div'
};
module.exports = FormNote;

},{"./styles":26,"glamor":undefined,"react":undefined}],26:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ==============================
// Form Note
// ==============================
module.exports = {
  note: {
    color: _theme["default"].form.note.color,
    fontSize: _theme["default"].form.note.fontSize,
    marginTop: _theme["default"].spacing.small
  }
};

},{"../../../theme":70}],27:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FormSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(FormSelect, _Component);

  function FormSelect() {
    _classCallCheck(this, FormSelect);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormSelect).apply(this, arguments));
  }

  _createClass(FormSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          id = _this$props.id,
          options = _this$props.options,
          props = _objectWithoutProperties(_this$props, ["children", "id", "options"]);

      var formFieldId = this.context.formFieldId;
      props.className = (0, _glamor.css)(_styles["default"].select, props.disabled ? _styles["default"]['select--disabled'] : null);
      props.id = id || formFieldId; // Property Violation

      if (options && children) {
        console.error('Warning: FormSelect cannot render `children` and `options`. You must provide one or the other.');
      }

      return _react["default"].createElement("div", {
        className: (0, _glamor.css)(_styles["default"].container)
      }, options ? _react["default"].createElement("select", props, options.map(function (opt) {
        return _react["default"].createElement("option", {
          key: opt.value,
          value: opt.value
        }, opt.label);
      })) : _react["default"].createElement("select", props, children), _react["default"].createElement("span", {
        className: (0, _glamor.css)(_styles["default"].arrows, props.disabled ? _styles["default"]['arrows--disabled'] : null)
      }, _react["default"].createElement("span", {
        className: (0, _glamor.css)(_styles["default"].arrow, _styles["default"].arrowTop)
      }), _react["default"].createElement("span", {
        className: (0, _glamor.css)(_styles["default"].arrow, _styles["default"].arrowBottom)
      })));
    }
  }]);

  return FormSelect;
}(_react.Component);

;
FormSelect.contextTypes = {
  formFieldId: _react.PropTypes.string
};
FormSelect.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  options: _react["default"].PropTypes.arrayOf(_react["default"].PropTypes.shape({
    label: _react["default"].PropTypes.string,
    value: _react["default"].PropTypes.string
  })),
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
module.exports = FormSelect;

},{"./styles":28,"glamor":undefined,"react":undefined}],28:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

var _color = require("../../../utils/color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ==============================
// Form Select
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
module.exports = {
  container: {
    position: 'relative'
  },
  // select node
  select: {
    appearance: 'none',
    backgroundColor: _theme["default"].input.background["default"],
    backgroundImage: 'none',
    borderColor: _theme["default"].input.border.color["default"],
    borderBottomColor: (0, _color.darken)(_theme["default"].input.border.color["default"], 4),
    borderTopColor: (0, _color.lighten)(_theme["default"].input.border.color["default"], 4),
    borderRadius: _theme["default"].input.border.radius,
    borderStyle: 'solid',
    borderWidth: _theme["default"].input.border.width,
    boxShadow: _theme["default"].select.boxShadow,
    color: 'inherit',
    // FIXME
    display: 'block',
    height: _theme["default"].input.height,
    lineHeight: _theme["default"].input.lineHeight,
    padding: "0 ".concat(_theme["default"].input.paddingHorizontal),
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
    width: '100%',
    ':hover': {
      borderColor: _theme["default"].input.border.color.hover,
      outline: 0
    },
    ':focus': {
      borderColor: _theme["default"].input.border.color.focus,
      boxShadow: _theme["default"].input.boxShadowFocus,
      outline: 0
    }
  },
  'select--disabled': {
    backgroundColor: _theme["default"].input.background.disabled,
    pointerEvents: 'none'
  },
  // arrows
  arrows: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: _theme["default"].input.height,
    justifyContent: 'center',
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    width: _theme["default"].input.height
  },
  arrow: {
    borderLeft: '0.3em solid transparent',
    borderRight: '0.3em solid transparent',
    display: 'inline-block',
    height: 0,
    verticalAlign: 'middle',
    width: 0,
    zIndex: 1
  },
  arrowTop: {
    borderBottom: '0.3em solid',
    marginBottom: '0.1em'
  },
  arrowBottom: {
    borderTop: '0.3em solid',
    marginTop: '0.1em'
  }
};

},{"../../../theme":70,"../../../utils/color":71}],29:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  danger: _theme["default"].glyph.color.danger,
  inherit: _theme["default"].glyph.color.inherit,
  inverted: _theme["default"].glyph.color.inverted,
  primary: _theme["default"].glyph.color.primary,
  success: _theme["default"].glyph.color.success,
  warning: _theme["default"].glyph.color.warning
};

},{"../../../theme":70}],30:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _octicons = _interopRequireDefault(require("./octicons"));

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// FIXME static octicon classes leaning on Elemental to avoid duplicate
// font and CSS; inflating the project size
function Glyph(_ref) {
  var cssStyles = _ref.cssStyles,
      className = _ref.className,
      color = _ref.color,
      Component = _ref.component,
      name = _ref.name,
      size = _ref.size,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["cssStyles", "className", "color", "component", "name", "size", "style"]);

  var colorIsValidType = Object.keys(_colors["default"]).includes(color);
  props.className = (0, _glamor.css)(_styles["default"].glyph, colorIsValidType && _styles["default"]['color__' + color], _styles["default"]['size__' + size], cssStyles) + " ".concat(_octicons["default"][name]);

  if (className) {
    props.className += ' ' + className;
  } // support random color strings


  props.style = _objectSpread({
    color: !colorIsValidType ? color : null
  }, style);
  return _react["default"].createElement(Component, props);
}

;
Glyph.propTypes = {
  color: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(Object.keys(_colors["default"])), _react.PropTypes.string]),
  cssStyles: _react.PropTypes.shape({
    _definition: _react.PropTypes.object,
    _name: _react.PropTypes.string
  }),
  name: _react.PropTypes.oneOf(Object.keys(_octicons["default"])).isRequired,
  size: _react.PropTypes.oneOf(Object.keys(_sizes["default"]))
};
Glyph.defaultProps = {
  component: 'i',
  color: 'inherit',
  size: 'small'
};
module.exports = Glyph;

},{"./colors":29,"./octicons":31,"./sizes":32,"./styles":33,"glamor":undefined,"react":undefined}],31:[function(require,module,exports){
"use strict";

/* eslint quote-props: ["error", "as-needed"] */
module.exports = {
  alert: 'octicon octicon-alert',
  'arrow-down': 'octicon octicon-arrow-down',
  'arrow-left': 'octicon octicon-arrow-left',
  'arrow-right': 'octicon octicon-arrow-right',
  'arrow-small-down': 'octicon octicon-arrow-small-down',
  'arrow-small-left': 'octicon octicon-arrow-small-left',
  'arrow-small-right': 'octicon octicon-arrow-small-right',
  'arrow-small-up': 'octicon octicon-arrow-small-up',
  'arrow-up': 'octicon octicon-arrow-up',
  microscope: 'octicon octicon-microscope',
  beaker: 'octicon octicon-beaker',
  bell: 'octicon octicon-bell',
  book: 'octicon octicon-book',
  bookmark: 'octicon octicon-bookmark',
  briefcase: 'octicon octicon-briefcase',
  broadcast: 'octicon octicon-broadcast',
  browser: 'octicon octicon-browser',
  bug: 'octicon octicon-bug',
  calendar: 'octicon octicon-calendar',
  check: 'octicon octicon-check',
  checklist: 'octicon octicon-checklist',
  'chevron-down': 'octicon octicon-chevron-down',
  'chevron-left': 'octicon octicon-chevron-left',
  'chevron-right': 'octicon octicon-chevron-right',
  'chevron-up': 'octicon octicon-chevron-up',
  'circle-slash': 'octicon octicon-circle-slash',
  'circuit-board': 'octicon octicon-circuit-board',
  clippy: 'octicon octicon-clippy',
  clock: 'octicon octicon-clock',
  'cloud-download': 'octicon octicon-cloud-download',
  'cloud-upload': 'octicon octicon-cloud-upload',
  code: 'octicon octicon-code',
  'color-mode': 'octicon octicon-color-mode',
  'comment-add': 'octicon octicon-comment-add',
  comment: 'octicon octicon-comment',
  'comment-discussion': 'octicon octicon-comment-discussion',
  'credit-card': 'octicon octicon-credit-card',
  dash: 'octicon octicon-dash',
  dashboard: 'octicon octicon-dashboard',
  database: 'octicon octicon-database',
  clone: 'octicon octicon-clone',
  'desktop-download': 'octicon octicon-desktop-download',
  'device-camera': 'octicon octicon-device-camera',
  'device-camera-video': 'octicon octicon-device-camera-video',
  'device-desktop': 'octicon octicon-device-desktop',
  'device-mobile': 'octicon octicon-device-mobile',
  diff: 'octicon octicon-diff',
  'diff-added': 'octicon octicon-diff-added',
  'diff-ignored': 'octicon octicon-diff-ignored',
  'diff-modified': 'octicon octicon-diff-modified',
  'diff-removed': 'octicon octicon-diff-removed',
  'diff-renamed': 'octicon octicon-diff-renamed',
  ellipsis: 'octicon octicon-ellipsis',
  'eye-unwatch': 'octicon octicon-eye-unwatch',
  'eye-watch': 'octicon octicon-eye-watch',
  eye: 'octicon octicon-eye',
  'file-binary': 'octicon octicon-file-binary',
  'file-code': 'octicon octicon-file-code',
  'file-directory': 'octicon octicon-file-directory',
  'file-media': 'octicon octicon-file-media',
  'file-pdf': 'octicon octicon-file-pdf',
  'file-submodule': 'octicon octicon-file-submodule',
  'file-symlink-directory': 'octicon octicon-file-symlink-directory',
  'file-symlink-file': 'octicon octicon-file-symlink-file',
  'file-text': 'octicon octicon-file-text',
  'file-zip': 'octicon octicon-file-zip',
  flame: 'octicon octicon-flame',
  fold: 'octicon octicon-fold',
  gear: 'octicon octicon-gear',
  gift: 'octicon octicon-gift',
  gist: 'octicon octicon-gist',
  'gist-secret': 'octicon octicon-gist-secret',
  'git-branch-create': 'octicon octicon-git-branch-create',
  'git-branch-delete': 'octicon octicon-git-branch-delete',
  'git-branch': 'octicon octicon-git-branch',
  'git-commit': 'octicon octicon-git-commit',
  'git-compare': 'octicon octicon-git-compare',
  'git-merge': 'octicon octicon-git-merge',
  'git-pull-request-abandoned': 'octicon octicon-git-pull-request-abandoned',
  'git-pull-request': 'octicon octicon-git-pull-request',
  globe: 'octicon octicon-globe',
  graph: 'octicon octicon-graph',
  heart: 'octicon octicon-heart',
  history: 'octicon octicon-history',
  home: 'octicon octicon-home',
  'horizontal-rule': 'octicon octicon-horizontal-rule',
  hubot: 'octicon octicon-hubot',
  inbox: 'octicon octicon-inbox',
  info: 'octicon octicon-info',
  'issue-closed': 'octicon octicon-issue-closed',
  'issue-opened': 'octicon octicon-issue-opened',
  'issue-reopened': 'octicon octicon-issue-reopened',
  jersey: 'octicon octicon-jersey',
  key: 'octicon octicon-key',
  keyboard: 'octicon octicon-keyboard',
  law: 'octicon octicon-law',
  'light-bulb': 'octicon octicon-light-bulb',
  link: 'octicon octicon-link',
  'link-external': 'octicon octicon-link-external',
  'list-ordered': 'octicon octicon-list-ordered',
  'list-unordered': 'octicon octicon-list-unordered',
  location: 'octicon octicon-location',
  'gist-private': 'octicon octicon-gist-private',
  'mirror-private': 'octicon octicon-mirror-private',
  'git-fork-private': 'octicon octicon-git-fork-private',
  lock: 'octicon octicon-lock',
  'logo-github': 'octicon octicon-logo-github',
  mail: 'octicon octicon-mail',
  'mail-read': 'octicon octicon-mail-read',
  'mail-reply': 'octicon octicon-mail-reply',
  'mark-github': 'octicon octicon-mark-github',
  markdown: 'octicon octicon-markdown',
  megaphone: 'octicon octicon-megaphone',
  mention: 'octicon octicon-mention',
  milestone: 'octicon octicon-milestone',
  'mirror-public': 'octicon octicon-mirror-public',
  mirror: 'octicon octicon-mirror',
  'mortar-board': 'octicon octicon-mortar-board',
  mute: 'octicon octicon-mute',
  'no-newline': 'octicon octicon-no-newline',
  octoface: 'octicon octicon-octoface',
  organization: 'octicon octicon-organization',
  "package": 'octicon octicon-package',
  paintcan: 'octicon octicon-paintcan',
  pencil: 'octicon octicon-pencil',
  'person-add': 'octicon octicon-person-add',
  'person-follow': 'octicon octicon-person-follow',
  person: 'octicon octicon-person',
  pin: 'octicon octicon-pin',
  plug: 'octicon octicon-plug',
  'repo-create': 'octicon octicon-repo-create',
  'gist-new': 'octicon octicon-gist-new',
  'file-directory-create': 'octicon octicon-file-directory-create',
  'file-add': 'octicon octicon-file-add',
  plus: 'octicon octicon-plus',
  'primitive-dot': 'octicon octicon-primitive-dot',
  'primitive-square': 'octicon octicon-primitive-square',
  pulse: 'octicon octicon-pulse',
  question: 'octicon octicon-question',
  quote: 'octicon octicon-quote',
  'radio-tower': 'octicon octicon-radio-tower',
  'repo-delete': 'octicon octicon-repo-delete',
  repo: 'octicon octicon-repo',
  'repo-clone': 'octicon octicon-repo-clone',
  'repo-force-push': 'octicon octicon-repo-force-push',
  'gist-fork': 'octicon octicon-gist-fork',
  'repo-forked': 'octicon octicon-repo-forked',
  'repo-pull': 'octicon octicon-repo-pull',
  'repo-push': 'octicon octicon-repo-push',
  rocket: 'octicon octicon-rocket',
  rss: 'octicon octicon-rss',
  ruby: 'octicon octicon-ruby',
  'screen-full': 'octicon octicon-screen-full',
  'screen-normal': 'octicon octicon-screen-normal',
  'search-save': 'octicon octicon-search-save',
  search: 'octicon octicon-search',
  server: 'octicon octicon-server',
  settings: 'octicon octicon-settings',
  shield: 'octicon octicon-shield',
  'log-in': 'octicon octicon-log-in',
  'sign-in': 'octicon octicon-sign-in',
  'log-out': 'octicon octicon-log-out',
  'sign-out': 'octicon octicon-sign-out',
  squirrel: 'octicon octicon-squirrel',
  'star-add': 'octicon octicon-star-add',
  'star-delete': 'octicon octicon-star-delete',
  star: 'octicon octicon-star',
  stop: 'octicon octicon-stop',
  'repo-sync': 'octicon octicon-repo-sync',
  sync: 'octicon octicon-sync',
  'tag-remove': 'octicon octicon-tag-remove',
  'tag-add': 'octicon octicon-tag-add',
  tag: 'octicon octicon-tag',
  telescope: 'octicon octicon-telescope',
  terminal: 'octicon octicon-terminal',
  'three-bars': 'octicon octicon-three-bars',
  thumbsdown: 'octicon octicon-thumbsdown',
  thumbsup: 'octicon octicon-thumbsup',
  tools: 'octicon octicon-tools',
  trashcan: 'octicon octicon-trashcan',
  'triangle-down': 'octicon octicon-triangle-down',
  'triangle-left': 'octicon octicon-triangle-left',
  'triangle-right': 'octicon octicon-triangle-right',
  'triangle-up': 'octicon octicon-triangle-up',
  unfold: 'octicon octicon-unfold',
  unmute: 'octicon octicon-unmute',
  versions: 'octicon octicon-versions',
  watch: 'octicon octicon-watch',
  'remove-close': 'octicon octicon-remove-close',
  x: 'octicon octicon-x',
  zap: 'octicon octicon-zap'
};

},{}],32:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  small: _theme["default"].glyph.size.small,
  medium: _theme["default"].glyph.size.medium,
  large: _theme["default"].glyph.size.large
};

},{"../../../theme":70}],33:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors["default"]).forEach(function (color) {
  colorVariants["color__".concat(color)] = {
    color: _colors["default"][color]
  };
}); // Prepare sizes

var sizeVariants = {};
Object.keys(_sizes["default"]).forEach(function (size) {
  sizeVariants["size__".concat(size)] = {
    fontSize: _sizes["default"][size]
  };
});
module.exports = _objectSpread({
  glyph: {}
}, colorVariants, sizeVariants);

},{"./colors":29,"./sizes":32}],34:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var _Glyph = _interopRequireDefault(require("../Glyph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GlyphButton(_ref) {
  var children = _ref.children,
      glyph = _ref.glyph,
      glyphColor = _ref.glyphColor,
      glyphSize = _ref.glyphSize,
      glyphStyle = _ref.glyphStyle,
      position = _ref.position,
      props = _objectWithoutProperties(_ref, ["children", "glyph", "glyphColor", "glyphSize", "glyphStyle", "position"]);

  var isDefault = position === 'default';
  var isLeft = position === 'left';
  var isRight = position === 'right';
  var offset = {};
  if (isLeft) offset.marginRight = '0.5em';
  if (isRight) offset.marginLeft = '0.5em';

  var glyphStyles = _objectSpread({}, offset, glyphStyle);

  var icon = _react["default"].createElement(_Glyph["default"], {
    cssStyles: classes.glyph,
    color: glyphColor,
    name: glyph,
    size: glyphSize,
    style: glyphStyles
  });

  return _react["default"].createElement(_Button["default"], props, (isDefault || isLeft) && icon, children, isRight && icon);
}

; // For props "glyph", "glyphColor", and "glyphSize":
// prop type validation will occur within the Glyph component, no need to
// duplicate, just pass it through.

GlyphButton.propTypes = {
  glyph: _react.PropTypes.string,
  glyphColor: _react.PropTypes.string,
  glyphSize: _react.PropTypes.string,
  glyphStyle: _react.PropTypes.object,
  position: _react.PropTypes.oneOf(['default', 'left', 'right'])
};
GlyphButton.defaultProps = {
  glyphStyle: {},
  position: 'default' // no margin, assumes no children

};
var classes = {
  glyph: {
    display: 'inline-block',
    marginTop: '-0.125em',
    // fix icon alignment
    verticalAlign: 'middle'
  }
};
module.exports = GlyphButton;

},{"../Button":5,"../Glyph":30,"react":undefined}],35:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _FormField = _interopRequireDefault(require("../FormField"));

var _Glyph = _interopRequireDefault(require("../Glyph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GlyphField(_ref) {
  var children = _ref.children,
      glyph = _ref.glyph,
      glyphColor = _ref.glyphColor,
      glyphSize = _ref.glyphSize,
      position = _ref.position,
      props = _objectWithoutProperties(_ref, ["children", "glyph", "glyphColor", "glyphSize", "position"]);

  var isLeft = position === 'left';
  var isRight = position === 'right';
  var glyphStyles = {};
  if (isLeft) glyphStyles.marginRight = '0.5em';
  if (isRight) glyphStyles.marginLeft = '0.5em';

  var icon = _react["default"].createElement(_Glyph["default"], {
    cssStyles: classes.glyph,
    color: glyphColor,
    name: glyph,
    size: glyphSize,
    style: glyphStyles
  });

  return _react["default"].createElement(_FormField["default"], _extends({
    cssStyles: classes.wrapper
  }, props), isLeft && icon, children, isRight && icon);
}

; // For props "glyph", "glyphColor", and "glyphSize":
// prop type validation will occur within the Glyph component, no need to
// duplicate, just pass it through.

GlyphField.propTypes = {
  glyph: _react.PropTypes.string,
  glyphColor: _react.PropTypes.string,
  glyphSize: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(['left', 'right'])
};
GlyphField.defaultProps = {
  position: 'left'
};
var classes = {
  wrapper: {
    alignItems: 'center',
    display: 'flex'
  },
  glyph: {
    display: 'inline-block',
    marginTop: '-0.125em',
    // fix icon alignment
    verticalAlign: 'middle'
  }
};
module.exports = GlyphField;

},{"../FormField":18,"../Glyph":30,"react":undefined}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _GridCol["default"];
  }
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _GridRow["default"];
  }
});

var _GridCol = _interopRequireDefault(require("../GridCol"));

var _GridRow = _interopRequireDefault(require("../GridRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"../GridCol":37,"../GridRow":38}],37:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WIDTHS = {
  'one-whole': '100%',
  'one-half': '50%',
  'one-third': '33.33%',
  'two-thirds': '66.66%',
  'one-quarter': '25%',
  'three-quarters': '75%',
  'one-fifth': '20%',
  'two-fifths': '40%',
  'three-fifths': '60%',
  'four-fifths': '80%',
  'one-sixth': '16.66%',
  'five-sixths': '83.33%'
};

var GridCol = function GridCol(props, context) {
  var gutter = props.gutter || context.gutter;
  var xsmall = props.xsmall || context.xsmall;
  var small = props.small || context.small;
  var medium = props.medium || context.medium;
  var large = props.large || context.large;
  var className = (0, _glamor.css)(classes['xsmall-' + xsmall], classes['small-' + small], classes['medium-' + medium], classes['large-' + large]);
  var componentClassName = "".concat(className).concat(props.className ? ' ' + props.className : '');
  var componentStyles = gutter ? {
    paddingLeft: gutter / 2,
    paddingRight: gutter / 2
  } : {};
  return _react["default"].createElement("div", {
    className: componentClassName,
    style: componentStyles
  }, props.children);
};

GridCol.contextTypes = {
  gutter: _react.PropTypes.number,
  large: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  small: _react.PropTypes.string,
  xsmall: _react.PropTypes.string
};
GridCol.propTypes = {
  gutter: _react.PropTypes.number,
  large: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  small: _react.PropTypes.string,
  xsmall: _react.PropTypes.string
};

var classes = _objectSpread({}, prepareWidths('xsmall', WIDTHS), prepareWidths('small', WIDTHS), prepareWidths('medium', WIDTHS), prepareWidths('large', WIDTHS));
/* eslint-disable guard-for-in */


function prepareWidths(prefix, obj) {
  var classes = {};

  switch (prefix) {
    case 'small':
      for (var prop in obj) {
        classes[prefix + '-' + prop] = _defineProperty({}, "@media (min-width: ".concat(_theme["default"].breakpoint.tabletPortraitMin, ")"), {
          width: obj[prop]
        });
      }

      break;

    case 'medium':
      for (var _prop in obj) {
        classes[prefix + '-' + _prop] = _defineProperty({}, "@media (min-width: ".concat(_theme["default"].breakpoint.tabletLandscapeMin, ")"), {
          width: obj[_prop]
        });
      }

      break;

    case 'large':
      for (var _prop2 in obj) {
        classes[prefix + '-' + _prop2] = _defineProperty({}, "@media (min-width: ".concat(_theme["default"].breakpoint.desktopMin, ")"), {
          width: obj[_prop2]
        });
      }

      break;

    default:
      for (var _prop3 in obj) {
        classes[prefix + '-' + _prop3] = {
          width: obj[_prop3]
        };
      }

  }

  return classes;
}

;
module.exports = GridCol;

},{"../../../theme":70,"glamor":undefined,"react":undefined}],38:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GridRow =
/*#__PURE__*/
function (_Component) {
  _inherits(GridRow, _Component);

  function GridRow() {
    _classCallCheck(this, GridRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(GridRow).apply(this, arguments));
  }

  _createClass(GridRow, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        gutter: this.props.gutter,
        xsmall: this.props.xsmall,
        small: this.props.small,
        medium: this.props.medium,
        large: this.props.large
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          gutter = _this$props.gutter,
          _this$props$styles = _this$props.styles,
          styles = _this$props$styles === void 0 ? {} : _this$props$styles;
      var componentClassName = "".concat((0, _glamor.css)(classes.grid)).concat(className ? ' ' + className : '');
      var componentStyles = Object.assign(styles, {
        marginLeft: gutter / -2,
        marginRight: gutter / -2
      });
      return _react["default"].createElement("div", {
        className: componentClassName,
        style: componentStyles
      }, children);
    }
  }]);

  return GridRow;
}(_react.Component);

;
GridRow.childContextTypes = {
  gutter: _react.PropTypes.number,
  xsmall: _react.PropTypes.string,
  small: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  large: _react.PropTypes.string
};
GridRow.propTypes = {
  gutter: _react.PropTypes.number,
  large: _react.PropTypes.string,
  medium: _react.PropTypes.string,
  small: _react.PropTypes.string,
  xsmall: _react.PropTypes.string
};
GridRow.defaultProps = {
  gutter: 0,
  xsmall: 'one-whole'
};
var classes = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};
module.exports = GridRow;

},{"glamor":undefined,"react":undefined}],39:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// NOTE: only accepts InlineGroupSection as a single child
function InlineGroup(_ref) {
  var cssStyles = _ref.cssStyles,
      block = _ref.block,
      children = _ref.children,
      className = _ref.className,
      Component = _ref.component,
      contiguous = _ref.contiguous,
      props = _objectWithoutProperties(_ref, ["cssStyles", "block", "children", "className", "component", "contiguous"]);

  // prepare group className
  props.className = (0, _glamor.css)(classes.group, !!block && classes.block, cssStyles);

  if (className) {
    props.className += ' ' + className;
  } // convert children to an array and filter out falsey values


  var buttons = _react.Children.toArray(children).filter(function (i) {
    return i;
  }); // normalize the count


  var count = buttons.length - 1; // clone children and apply classNames that glamor can target

  props.children = buttons.map(function (c, idx) {
    if (!c) return null;
    var isOnlyChild = !count;
    var isFirstChild = !isOnlyChild && idx === 0;
    var isLastChild = !isOnlyChild && idx === count;
    var isMiddleChild = !isOnlyChild && !isFirstChild && !isLastChild;
    var position;
    if (isOnlyChild) position = 'only';
    if (isFirstChild) position = 'first';
    if (isLastChild) position = 'last';
    if (isMiddleChild) position = 'middle';
    return (0, _react.cloneElement)(c, {
      contiguous: contiguous,
      position: position
    });
  });
  return _react["default"].createElement(Component, props);
}

;
InlineGroup.propTypes = {
  block: _react.PropTypes.bool,
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  contiguous: _react.PropTypes.bool,
  cssStyles: _react.PropTypes.shape({
    _definition: _react.PropTypes.object,
    _name: _react.PropTypes.string
  })
};
InlineGroup.defaultProps = {
  component: 'div'
};
var classes = {
  group: {
    display: 'inline-flex'
  },
  block: {
    display: 'flex'
  }
};
module.exports = InlineGroup;

},{"glamor":undefined,"react":undefined}],40:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// NOTE: Inline Group Section accepts a single child
function InlineGroupSection(_ref) {
  var active = _ref.active,
      cssStyles = _ref.cssStyles,
      children = _ref.children,
      className = _ref.className,
      contiguous = _ref.contiguous,
      grow = _ref.grow,
      position = _ref.position,
      props = _objectWithoutProperties(_ref, ["active", "cssStyles", "children", "className", "contiguous", "grow", "position"]);

  // evaluate position
  var separate = position === 'last' || position === 'middle'; // A `contiguous` section must manipulate it's child directly
  // A separate (default) section just wraps the child

  return contiguous ? (0, _react.cloneElement)(children, _objectSpread({
    cssStyles: [_styles["default"].contiguous, _styles["default"]['contiguous__' + position], active ? _styles["default"].active : null, grow ? _styles["default"].grow : null, cssStyles]
  }, props)) : _react["default"].createElement("div", _extends({
    className: (0, _glamor.css)(!!grow && _styles["default"].grow, !!separate && _styles["default"].separate, cssStyles)
  }, props), children);
}

;
InlineGroupSection.propTypes = {
  active: _react.PropTypes.bool,
  // buttons only
  children: _react.PropTypes.element.isRequired,
  contiguous: _react.PropTypes.bool,
  grow: _react.PropTypes.bool,
  position: _react.PropTypes.oneOf(['first', 'last', 'middle', 'only'])
};
module.exports = InlineGroupSection;

},{"./styles":41,"glamor":undefined,"react":undefined}],41:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ==============================
// Inline Group: Section
// ==============================
// Takes only FormInput and Button as children, rendering them as a
// tidy inline array
module.exports = {
  // pull active elements up
  active: {
    position: 'relative'
  },
  // stretch to fill available width
  grow: {
    flex: '1 1 0'
  },
  // separate applicable non-contiguous elements
  separate: {
    paddingLeft: '0.75em'
  },
  // Contiguous: manipulate children directly
  // pull focused contiguous elements up
  contiguous: {
    ':focus': {
      position: 'relative',
      zIndex: 1
    }
  },
  // position
  contiguous__middle: {
    borderRadius: 0,
    marginLeft: _theme["default"].button.borderWidth * -1
  },
  contiguous__first: {
    borderBottomRightRadius: '0 !important',
    borderTopRightRadius: '0 !important'
  },
  contiguous__last: {
    borderBottomLeftRadius: '0 !important',
    borderTopLeftRadius: '0 !important',
    marginLeft: _theme["default"].button.borderWidth * -1
  }
};

},{"../../../theme":70}],42:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LabelledControl(_ref) {
  var className = _ref.className,
      inline = _ref.inline,
      label = _ref.label,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["className", "inline", "label", "title"]);

  var labelClassName = (0, _glamor.css)(_styles["default"].wrapper, inline && _styles["default"].wrapper__inline, className);
  return _react["default"].createElement("label", {
    title: title,
    className: labelClassName
  }, _react["default"].createElement("input", _extends({}, props, {
    className: (0, _glamor.css)(_styles["default"].control)
  })), _react["default"].createElement("span", {
    className: (0, _glamor.css)(_styles["default"].label)
  }, label));
}

;
LabelledControl.propTypes = {
  inline: _react.PropTypes.bool,
  title: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(['checkbox', 'radio']).isRequired
};
module.exports = LabelledControl;

},{"./styles":43,"glamor":undefined,"react":undefined}],43:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */
module.exports = {
  wrapper: {
    display: 'block',
    height: _theme["default"].input.height,
    lineHeight: _theme["default"].input.lineHeight
  },
  wrapper__inline: {
    display: 'inline'
  },
  // checkbox or radio
  control: {
    marginRight: '0.5em'
  }
};

},{"../../../theme":70}],44:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _Button = _interopRequireDefault(require("../Button"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LoadingButton(_ref) {
  var children = _ref.children,
      loading = _ref.loading,
      props = _objectWithoutProperties(_ref, ["children", "loading"]);

  // determine the correct variant for the spinner,
  // fill is the default variant on Button
  var variant = props.variant || 'fill'; // determine the correct color for the spinner,
  // cancel and delete alias to "danger"

  var color;
  if (props.color === 'cancel' || props.color === 'delete') color = 'danger'; // merge all the variant/color together

  var formattedColor = variant === 'fill' && props.color !== 'default' ? 'inverted' : color; // render the spinner if required

  var spinner = loading && _react["default"].createElement(_Spinner["default"], {
    size: "small",
    color: formattedColor
  }); // slide the spinner in and out of view


  var spinnerStyles = {
    width: loading ? _theme["default"].spinner.size.small * 5 + _theme["default"].spacing.small : 0
  }; // render everything

  return _react["default"].createElement(_Button["default"], props, _react["default"].createElement("span", {
    className: (0, _glamor.css)(classes.spinner),
    style: spinnerStyles
  }, spinner), children);
}

;
LoadingButton.propTypes = {
  loading: _react.PropTypes.bool
};
LoadingButton.defaultProps = {
  loading: false
};
var classes = {
  spinner: {
    display: 'inline-block',
    overflow: 'hidden',
    textAlign: 'left',
    transition: 'width 200ms ease-out',
    verticalAlign: 'middle'
  }
};
module.exports = LoadingButton;

},{"../../../theme":70,"../Button":5,"../Spinner":61,"glamor":undefined,"react":undefined}],45:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ModalBody(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return _react["default"].createElement("div", _extends({
    className: (0, _glamor.css)(classes.body, className)
  }, props));
}

;
var classes = {
  body: {
    paddingBottom: _theme["default"].modal.padding.body.vertical,
    paddingLeft: _theme["default"].modal.padding.body.horizontal,
    paddingRight: _theme["default"].modal.padding.body.horizontal,
    paddingTop: _theme["default"].modal.padding.body.vertical
  }
};
module.exports = ModalBody;

},{"../../../theme":70,"glamor":undefined,"react":undefined}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _ScrollLock = _interopRequireDefault(require("../ScrollLock"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var ModalDialog =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalDialog, _Component);

  function ModalDialog() {
    var _this;

    _classCallCheck(this, ModalDialog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalDialog).call(this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleKeyboardInput = _this.handleKeyboardInput.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ModalDialog, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        onClose: this.props.onClose
      };
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!canUseDom) return; // add event listeners

      if (nextProps.isOpen && nextProps.enableKeyboardInput) {
        window.addEventListener('keydown', this.handleKeyboardInput);
      }

      if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
        window.removeEventListener('keydown', this.handleKeyboardInput);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.enableKeyboardInput) {
        window.removeEventListener('keydown', this.handleKeyboardInput);
      }
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "handleKeyboardInput",
    value: function handleKeyboardInput(event) {
      if (event.keyCode === 27) this.props.onClose();
      return false;
    }
  }, {
    key: "handleBackdropClick",
    value: function handleBackdropClick(e) {
      if (e.target !== this.refs.container) return;
      this.props.onClose();
    } // ==============================
    // Renderers
    // ==============================

  }, {
    key: "renderDialog",
    value: function renderDialog() {
      var _this$props = this.props,
          backdropClosesModal = _this$props.backdropClosesModal,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          width = _this$props.width;
      if (!isOpen) return _react["default"].createElement("span", {
        key: "closed"
      });
      return _react["default"].createElement("div", {
        className: (0, _glamor.css)(classes.container),
        key: "open",
        ref: "container",
        onClick: !!backdropClosesModal && this.handleBackdropClick,
        onTouchEnd: !!backdropClosesModal && this.handleBackdropClick
      }, _react["default"].createElement("div", {
        className: (0, _glamor.css)(classes.dialog),
        style: {
          width: width
        },
        "data-screen-id": "modal-dialog"
      }, children), _react["default"].createElement(_ScrollLock["default"], null));
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Portal["default"], null, this.renderDialog());
    }
  }]);

  return ModalDialog;
}(_react.Component);

;
ModalDialog.propTypes = {
  backdropClosesModal: _react.PropTypes.bool,
  enableKeyboardInput: _react.PropTypes.bool,
  isOpen: _react.PropTypes.bool,
  onClose: _react.PropTypes.func.isRequired,
  width: _react.PropTypes.number
};
ModalDialog.defaultProps = {
  enableKeyboardInput: true,
  width: 768
};
ModalDialog.childContextTypes = {
  onClose: _react.PropTypes.func.isRequired
};
var classes = {
  container: {
    alignItems: 'center',
    backgroundColor: _theme["default"].modal.background,
    boxSizing: 'border-box',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: _theme["default"].modal.zIndex
  },
  dialog: {
    backgroundColor: 'white',
    borderRadius: _theme["default"].borderRadius["default"],
    maxHeight: '90%',
    overflowY: 'auto',
    paddingBottom: _theme["default"].modal.padding.dialog.vertical,
    paddingLeft: _theme["default"].modal.padding.dialog.horizontal,
    paddingRight: _theme["default"].modal.padding.dialog.horizontal,
    paddingTop: _theme["default"].modal.padding.dialog.vertical,
    position: 'relative'
  }
};
var _default = ModalDialog;
exports["default"] = _default;

},{"../../../theme":70,"../Portal":53,"../ScrollLock":56,"glamor":undefined,"react":undefined}],47:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ModalFooter(_ref) {
  var align = _ref.align,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["align", "className"]);

  return _react["default"].createElement("div", _extends({}, props, {
    className: (0, _glamor.css)(classes.footer, classes['align__' + align], className)
  }));
}

;
ModalFooter.propTypes = {
  align: _react.PropTypes.oneOf(['center', 'left', 'right']),
  children: _react.PropTypes.node,
  onClose: _react.PropTypes.func,
  showCloseButton: _react.PropTypes.bool,
  text: _react.PropTypes.string
};
ModalFooter.defaultProps = {
  align: 'left'
};
var classes = {
  footer: {
    borderTop: "2px solid ".concat(_theme["default"].color.gray10),
    display: 'flex',
    paddingBottom: _theme["default"].modal.padding.footer.vertical,
    paddingLeft: _theme["default"].modal.padding.footer.horizontal,
    paddingRight: _theme["default"].modal.padding.footer.horizontal,
    paddingTop: _theme["default"].modal.padding.footer.vertical
  },
  // alignment
  align__left: {
    justifyContent: 'flex-start'
  },
  align__center: {
    justifyContent: 'center'
  },
  align__right: {
    justifyContent: 'flex-end'
  }
};
module.exports = ModalFooter;

},{"../../../theme":70,"glamor":undefined,"react":undefined}],48:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _GlyphButton = _interopRequireDefault(require("../GlyphButton"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ModalHeader(_ref, _ref2) {
  var children = _ref.children,
      className = _ref.className,
      showCloseButton = _ref.showCloseButton,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["children", "className", "showCloseButton", "text"]);

  var onClose = _ref2.onClose;

  // Property Violation
  if (children && text) {
    console.error('Warning: ModalHeader cannot render `children` and `text`. You must provide one or the other.');
  }

  return _react["default"].createElement("div", _extends({}, props, {
    className: (0, _glamor.css)(classes.header, className)
  }), _react["default"].createElement("div", {
    className: (0, _glamor.css)(classes.grow)
  }, text ? _react["default"].createElement("h4", {
    className: (0, _glamor.css)(classes.text)
  }, text) : children), !!onClose && showCloseButton && _react["default"].createElement(_GlyphButton["default"], {
    cssStyles: classes.close,
    color: "cancel",
    glyph: "x",
    onClick: onClose,
    variant: "link"
  }));
}

;
ModalHeader.propTypes = {
  children: _react.PropTypes.node,
  onClose: _react.PropTypes.func,
  showCloseButton: _react.PropTypes.bool,
  text: _react.PropTypes.string
};
ModalHeader.contextTypes = {
  onClose: _react.PropTypes.func.isRequired
};
var classes = {
  header: {
    alignItems: 'center',
    borderBottom: "2px solid ".concat(_theme["default"].color.gray10),
    display: 'flex',
    paddingBottom: _theme["default"].modal.padding.header.vertical,
    paddingLeft: _theme["default"].modal.padding.header.horizontal,
    paddingRight: _theme["default"].modal.padding.header.horizontal,
    paddingTop: _theme["default"].modal.padding.header.vertical
  },
  // fill space to push the close button right
  grow: {
    flexGrow: 1
  },
  // title text
  text: {
    color: 'inherit',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1,
    margin: 0
  }
};
module.exports = ModalHeader;

},{"../../../theme":70,"../GlyphButton":34,"glamor":undefined,"react":undefined}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Body", {
  enumerable: true,
  get: function get() {
    return _body["default"];
  }
});
Object.defineProperty(exports, "Dialog", {
  enumerable: true,
  get: function get() {
    return _dialog["default"];
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _footer["default"];
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _header["default"];
  }
});

var _body = _interopRequireDefault(require("./body"));

var _dialog = _interopRequireDefault(require("./dialog"));

var _footer = _interopRequireDefault(require("./footer"));

var _header = _interopRequireDefault(require("./header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./body":45,"./dialog":46,"./footer":47,"./header":48}],50:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _page = _interopRequireDefault(require("./page"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pagination).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "renderCount",
    value: function renderCount() {
      var count = '';
      var _this$props = this.props,
          currentPage = _this$props.currentPage,
          pageSize = _this$props.pageSize,
          plural = _this$props.plural,
          singular = _this$props.singular,
          total = _this$props.total;

      if (!total) {
        count = 'No ' + (plural || 'records');
      } else if (total > pageSize) {
        var start = pageSize * (currentPage - 1) + 1;
        var end = Math.min(start + pageSize - 1, total);
        count = "Showing ".concat(start, " to ").concat(end, " of ").concat(total);
      } else {
        count = 'Showing ' + total;

        if (total > 1 && plural) {
          count += ' ' + plural;
        } else if (total === 1 && singular) {
          count += ' ' + singular;
        }
      }

      return _react["default"].createElement("div", {
        className: (0, _glamor.css)(classes.count),
        "data-e2e-pagination-count": true
      }, count);
    }
  }, {
    key: "renderPages",
    value: function renderPages() {
      var _this$props2 = this.props,
          currentPage = _this$props2.currentPage,
          limit = _this$props2.limit,
          onPageSelect = _this$props2.onPageSelect,
          pageSize = _this$props2.pageSize,
          total = _this$props2.total;
      if (total <= pageSize) return null;
      var pages = [];
      var totalPages = Math.ceil(total / pageSize);
      var minPage = 1;
      var maxPage = totalPages;

      if (limit && limit < totalPages) {
        var rightLimit = Math.floor(limit / 2);
        var leftLimit = rightLimit + limit % 2 - 1;
        minPage = currentPage - leftLimit;
        maxPage = currentPage + rightLimit;

        if (minPage < 1) {
          maxPage = limit;
          minPage = 1;
        }

        if (maxPage > totalPages) {
          minPage = totalPages - limit + 1;
          maxPage = totalPages;
        }
      }

      if (minPage > 1) {
        pages.push(_react["default"].createElement(_page["default"], {
          key: "page_start",
          onClick: function onClick() {
            return onPageSelect(1);
          }
        }, "..."));
      }

      var _loop = function _loop(page) {
        var selected = page === currentPage;
        /* eslint-disable no-loop-func */

        pages.push(_react["default"].createElement(_page["default"], {
          key: 'page_' + page,
          selected: selected,
          onClick: function onClick() {
            return onPageSelect(page);
          }
        }, page));
        /* eslint-enable */
      };

      for (var page = minPage; page <= maxPage; page++) {
        _loop(page);
      }

      if (maxPage < totalPages) {
        pages.push(_react["default"].createElement(_page["default"], {
          key: "page_end",
          onClick: function onClick() {
            return onPageSelect(totalPages);
          }
        }, "..."));
      }

      return _react["default"].createElement("div", {
        className: (0, _glamor.css)(classes.list)
      }, pages);
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0, _glamor.css)(classes.container, this.props.className);
      return _react["default"].createElement("div", {
        className: className,
        style: this.props.style
      }, this.renderCount(), this.renderPages());
    }
  }]);

  return Pagination;
}(_react.Component);

;
var classes = {
  container: {
    display: 'block',
    lineHeight: _theme["default"].component.lineHeight,
    marginBottom: '2em'
  },
  count: {
    display: 'inline-block',
    marginRight: '1em',
    verticalAlign: 'middle'
  },
  list: {
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};
Pagination.propTypes = {
  className: _react.PropTypes.string,
  currentPage: _react.PropTypes.number.isRequired,
  limit: _react.PropTypes.number,
  onPageSelect: _react.PropTypes.func,
  pageSize: _react.PropTypes.number.isRequired,
  plural: _react.PropTypes.string,
  singular: _react.PropTypes.string,
  style: _react.PropTypes.object,
  total: _react.PropTypes.number.isRequired
};
module.exports = Pagination;

},{"../../../theme":70,"./page":51,"glamor":undefined,"react":undefined}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Page(_ref) {
  var disabled = _ref.disabled,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, ["disabled", "selected"]);

  props.className = (0, _glamor.css)(classes.page, !!disabled && classes.disabled, !!selected && classes.selected);
  return _react["default"].createElement("button", props);
}

;
Page.propTypes = {
  disabled: _react.PropTypes.bool,
  onClick: _react.PropTypes.func.isRequired,
  selected: _react.PropTypes.bool
};
/* eslint quote-props: ["error", "as-needed"] */

var selectedStyle = {
  backgroundColor: _theme["default"].pagination.selected.background,
  borderColor: _theme["default"].pagination.selected.border,
  color: _theme["default"].pagination.selected.color,
  cursor: 'default',
  zIndex: 2
};
var pseudoStyle = {
  backgroundColor: _theme["default"].pagination.hover.background,
  borderColor: _theme["default"].pagination.hover.border,
  color: _theme["default"].pagination.hover.color,
  outline: 'none'
};
var classes = {
  page: {
    appearance: 'none',
    background: 'none',
    border: '1px solid transparent',
    borderRadius: _theme["default"].borderRadius["default"],
    color: _theme["default"].pagination.color,
    cursor: 'pointer',
    display: 'inline-block',
    "float": 'left',
    // Collapse white-space
    marginRight: '0.25em',
    padding: '0 .7em',
    position: 'relative',
    textDecoration: 'none',
    // handle hover and focus
    ':hover': pseudoStyle,
    ':focus': pseudoStyle
  },
  // selected page
  selected: _objectSpread({}, selectedStyle, {
    ':hover': selectedStyle,
    ':focus': selectedStyle
  }),
  // disabled page
  disabled: {
    backgroundColor: _theme["default"].pagination.disabled.background,
    borderColor: _theme["default"].pagination.disabled.background,
    color: _theme["default"].pagination.disabled.color,
    cursor: 'default'
  }
};
var _default = Page;
exports["default"] = _default;

},{"../../../theme":70,"glamor":undefined,"react":undefined}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9
var PassContext =
/*#__PURE__*/
function (_Component) {
  _inherits(PassContext, _Component);

  function PassContext() {
    _classCallCheck(this, PassContext);

    return _possibleConstructorReturn(this, _getPrototypeOf(PassContext).apply(this, arguments));
  }

  _createClass(PassContext, [{
    key: "getChildContext",
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return PassContext;
}(_react.Component);

;
PassContext.propTypes = {
  context: _react.PropTypes.object.isRequired
};
PassContext.childContextTypes = {
  onClose: _react.PropTypes.func
};
var _default = PassContext;
exports["default"] = _default;

},{"react":undefined}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

var _reactDom = require("react-dom");

var _PassContext = _interopRequireDefault(require("../PassContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Portal =
/*#__PURE__*/
function (_Component) {
  _inherits(Portal, _Component);

  function Portal() {
    var _this;

    _classCallCheck(this, Portal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Portal).call(this));
    _this.portalElement = null;
    return _this;
  }

  _createClass(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var p = document.createElement('div');
      document.body.appendChild(p);
      this.portalElement = p;
      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // Animate fade on mount/unmount
      var duration = 200;
      var styles = "\n\t\t\t\t.fade-enter { opacity: 0.01; }\n\t\t\t\t.fade-enter.fade-enter-active { opacity: 1; transition: opacity ".concat(duration, "ms; }\n\t\t\t\t.fade-leave { opacity: 1; }\n\t\t\t\t.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity ").concat(duration, "ms; }\n\t\t");
      (0, _reactDom.render)(_react["default"].createElement(_PassContext["default"], {
        context: this.context
      }, _react["default"].createElement("div", null, _react["default"].createElement("style", null, styles), _react["default"].createElement(_reactAddonsCssTransitionGroup["default"], _extends({
        component: "div",
        transitionName: "fade",
        transitionEnterTimeout: duration,
        transitionLeaveTimeout: duration
      }, this.props)))), this.portalElement);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.portalElement);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(_react.Component);

exports["default"] = Portal;
Portal.contextTypes = {
  onClose: _react.PropTypes.func
};

},{"../PassContext":52,"react":undefined,"react-addons-css-transition-group":undefined,"react-dom":undefined}],54:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Using window.innerWidth and state instead of CSS media breakpoints
// because we want to render null rather than an empty span. Allowing for
// CSS pseudo classes like :only-child to behave as expected.
// Return true if window + document
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var ResponsiveText =
/*#__PURE__*/
function (_Component) {
  _inherits(ResponsiveText, _Component);

  function ResponsiveText() {
    var _this;

    _classCallCheck(this, ResponsiveText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveText).call(this));
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    _this.state = {
      windowWidth: canUseDOM ? window.innerWidth : 0
    };
    return _this;
  }

  _createClass(ResponsiveText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (canUseDOM) {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (canUseDOM) {
        window.removeEventListener('resize', this.handleResize);
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      this.setState({
        windowWidth: canUseDOM ? window.innerWidth : 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          hiddenLG = _this$props.hiddenLG,
          hiddenMD = _this$props.hiddenMD,
          hiddenSM = _this$props.hiddenSM,
          hiddenXS = _this$props.hiddenXS,
          visibleLG = _this$props.visibleLG,
          visibleMD = _this$props.visibleMD,
          visibleSM = _this$props.visibleSM,
          visibleXS = _this$props.visibleXS,
          props = _objectWithoutProperties(_this$props, ["component", "hiddenLG", "hiddenMD", "hiddenSM", "hiddenXS", "visibleLG", "visibleMD", "visibleSM", "visibleXS"]);

      var windowWidth = this.state.windowWidth;
      var text; // set text value from breakpoint; attempt XS --> LG

      if (windowWidth < _theme["default"].breakpointNumeric.mobile) {
        text = visibleXS || hiddenSM || hiddenMD || hiddenLG;
      } else if (windowWidth < _theme["default"].breakpointNumeric.tabletPortrait) {
        text = hiddenXS || visibleSM || hiddenMD || hiddenLG;
      } else if (windowWidth < _theme["default"].breakpointNumeric.tabletLandscape) {
        text = hiddenXS || hiddenSM || visibleMD || hiddenLG;
      } else {
        text = hiddenXS || hiddenSM || hiddenMD || visibleLG;
      }

      return text ? _react["default"].createElement(Component, props, text) : null;
    }
  }]);

  return ResponsiveText;
}(_react.Component);

;
ResponsiveText.propTypes = {
  hiddenLG: _react.PropTypes.string,
  hiddenMD: _react.PropTypes.string,
  hiddenSM: _react.PropTypes.string,
  hiddenXS: _react.PropTypes.string,
  visibleLG: _react.PropTypes.string,
  visibleMD: _react.PropTypes.string,
  visibleSM: _react.PropTypes.string,
  visibleXS: _react.PropTypes.string
};
ResponsiveText.defaultProps = {
  component: 'span'
};
module.exports = ResponsiveText;

},{"../../../theme":70,"react":undefined}],55:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ScreenReaderOnly(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  props.className = (0, _glamor.css)(classes.srOnly, className);
  return _react["default"].createElement("span", props);
}

;
var classes = {
  srOnly: {
    border: 0,
    clip: 'rect(0,0,0,0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1
  }
};
module.exports = ScreenReaderOnly;

},{"glamor":undefined,"react":undefined}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollLock, _Component);

  function ScrollLock() {
    var _this;

    _classCallCheck(this, ScrollLock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollLock).call(this));
    _this.lockCount = 0;
    return _this;
  }

  _createClass(ScrollLock, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (typeof window === 'undefined') return;
      this.lockCount++;
      if (this.lockCount > 1) return; //	FIXME iOS ignores overflow on body

      try {
        var scrollBarWidth = window.innerWidth - document.body.clientWidth;
        var target = document.body;
        target.style.paddingRight = scrollBarWidth + 'px';
        target.style.overflowY = 'hidden';
      } catch (err) {
        console.error('Failed to find body element. Err:', err);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window === 'undefined' || this.lockCount === 0) return;
      this.lockCount--;
      if (this.lockCount > 0) return; // Still locked
      //	FIXME iOS ignores overflow on body

      try {
        var target = document.body;
        target.style.paddingRight = '';
        target.style.overflowY = '';
      } catch (err) {
        console.error('Failed to find body element. Err:', err);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollLock;
}(_react.Component);

exports["default"] = ScrollLock;

},{"react":undefined}],57:[function(require,module,exports){
"use strict";

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  danger: _theme["default"].color.danger,
  "default": _theme["default"].color.gray80,
  error: _theme["default"].color.danger,
  info: _theme["default"].color.info,
  primary: _theme["default"].color.primary,
  success: _theme["default"].color.success,
  warning: _theme["default"].color.warning
};

},{"../../../theme":70}],58:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SegmentedControl(_ref) {
  var className = _ref.className,
      color = _ref.color,
      cropText = _ref.cropText,
      equalWidthSegments = _ref.equalWidthSegments,
      inline = _ref.inline,
      onChange = _ref.onChange,
      options = _ref.options,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["className", "color", "cropText", "equalWidthSegments", "inline", "onChange", "options", "value"]);

  props.className = (0, _glamor.css)(_styles["default"].control, inline ? _styles["default"].control__inline : null, className);
  return _react["default"].createElement("div", props, options.map(function (opt) {
    var buttonClassName = (0, _glamor.css)(_styles["default"].button, opt.disabled ? _styles["default"].button__disabled : null, opt.value === value ? _styles["default"]['button__' + color] : null, cropText ? _styles["default"].button__cropText : null, equalWidthSegments ? _styles["default"].button__equalWidth : null);
    return _react["default"].createElement("button", {
      className: buttonClassName,
      key: opt.value,
      onClick: !opt.disabled && function () {
        return onChange(opt.value);
      },
      type: "button",
      title: cropText ? opt.label : null,
      tabIndex: opt.disabled ? '-1' : ''
    }, opt.label);
  }));
}

;
var valuePropShape = [_react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.string];
SegmentedControl.propTypes = {
  color: _react.PropTypes.oneOf(Object.keys(_colors["default"])),
  cropText: _react.PropTypes.bool,
  // when `inline && equalWidthSegments` crops to the next largest option length
  equalWidthSegments: _react.PropTypes.bool,
  // only relevant when `inline === false`
  inline: _react.PropTypes.bool,
  onChange: _react.PropTypes.func.isRequired,
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    disabled: _react.PropTypes.bool,
    label: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType(valuePropShape)
  })).isRequired,
  value: _react.PropTypes.oneOfType(valuePropShape)
};
SegmentedControl.defaultProps = {
  color: 'default'
};
module.exports = SegmentedControl;

},{"./colors":57,"./styles":59,"glamor":undefined,"react":undefined}],59:[function(require,module,exports){
"use strict";

var _colors = _interopRequireDefault(require("./colors"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors["default"]).forEach(function (color) {
  var pseudoStyles = {
    backgroundColor: _colors["default"][color],
    color: 'white'
  };
  colorVariants['button__' + color] = {
    backgroundColor: _colors["default"][color],
    color: 'white',
    ':hover': pseudoStyles,
    ':focus': pseudoStyles,
    ':active': pseudoStyles
  };
});
module.exports = _objectSpread({
  control: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: _theme["default"].input.border.color["default"],
    borderRadius: '0.4em',
    display: 'flex',
    fontSize: _theme["default"].font.size.small,
    paddingLeft: 1,
    paddingRight: 1
  },
  control__inline: {
    display: 'inline-flex'
  },
  // buttons
  button: {
    background: 'none',
    border: 0,
    borderRadius: '0.25em',
    flexGrow: 1,
    margin: '2px 1px',
    padding: '0.3em 0.9em',
    outline: 0,
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    ':focus': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    ':active': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },
  button__equalWidth: {
    flex: '1 1 0'
  },
  button__cropText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  button__disabled: {
    opacity: 0.6,
    pointerEvents: 'none'
  }
}, colorVariants);

},{"../../../theme":70,"./colors":57}],60:[function(require,module,exports){
"use strict";

module.exports = ['danger', 'default', 'inverted', 'primary', 'success', 'warning'];

},{}],61:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _glamor = require("glamor");

var _styles = _interopRequireDefault(require("./styles"));

var _ScreenReaderOnly = _interopRequireDefault(require("../ScreenReaderOnly"));

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Spinner(_ref) {
  var className = _ref.className,
      size = _ref.size,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["className", "size", "color"]);

  props.className = (0, _glamor.css)(_styles["default"].base, _styles["default"][size], className);
  return _react["default"].createElement("div", props, _react["default"].createElement("span", {
    className: "".concat((0, _glamor.css)(_styles["default"].dot, _styles["default"]['size__' + size], _styles["default"]['color__' + color], _styles["default"].dot__first))
  }), _react["default"].createElement("span", {
    className: "".concat((0, _glamor.css)(_styles["default"].dot, _styles["default"]['size__' + size], _styles["default"]['color__' + color], _styles["default"].dot__second))
  }), _react["default"].createElement("span", {
    className: "".concat((0, _glamor.css)(_styles["default"].dot, _styles["default"]['size__' + size], _styles["default"]['color__' + color], _styles["default"].dot__third))
  }), _react["default"].createElement(_ScreenReaderOnly["default"], null, "Loading..."));
}

;
Spinner.propTypes = {
  color: _react.PropTypes.oneOf(_colors["default"]),
  size: _react.PropTypes.oneOf(_sizes["default"])
};
Spinner.defaultProps = {
  size: 'medium',
  color: 'default'
};
module.exports = Spinner;

},{"../ScreenReaderOnly":55,"./colors":60,"./sizes":62,"./styles":63,"glamor":undefined,"react":undefined}],62:[function(require,module,exports){
"use strict";

module.exports = ['small', 'medium', 'large'];

},{}],63:[function(require,module,exports){
"use strict";

var _glamor = require("glamor");

var _theme = _interopRequireDefault(require("../../../theme"));

var _colors = _interopRequireDefault(require("./colors"));

var _sizes = _interopRequireDefault(require("./sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Prepare variants
var colorVariants = {};

_colors["default"].forEach(function (color) {
  colorVariants["color__".concat(color)] = {
    backgroundColor: _theme["default"].spinner.color[color]
  };
}); // Prepare sizes


var sizeVariants = {};

_sizes["default"].forEach(function (size) {
  sizeVariants["size__".concat(size)] = {
    fontSize: _theme["default"].spinner.size[size]
  };
}); // Declare animation keyframes


var keyframes = _glamor.compose.keyframes('pulse', {
  '0%, 80%, 100%': {
    opacity: 0
  },
  '40%': {
    opacity: 1
  }
});

module.exports = _objectSpread({
  base: {
    display: 'inline-block',
    lineHeight: 1,
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '5em'
  },
  small: {
    fontSize: 4
  },
  medium: {
    fontSize: 8
  },
  large: {
    fontSize: 16
  },
  // text
  text: {
    border: 0,
    clip: 'rect(0,0,0,0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1
  },
  // dots
  dot: {
    animationName: keyframes,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    borderRadius: '1em',
    display: 'inline-block',
    height: '1em',
    verticalAlign: 'top',
    width: '1em'
  },
  dot__second: {
    animationDelay: '160ms',
    marginLeft: '1em'
  },
  dot__third: {
    animationDelay: '320ms',
    marginLeft: '1em'
  }
}, colorVariants, sizeVariants);

},{"../../../theme":70,"./colors":60,"./sizes":62,"glamor":undefined}],64:[function(require,module,exports){
"use strict";

module.exports = {
  Alert: require('./Alert'),
  BlankState: require('./BlankState'),
  Button: require('./Button'),
  Center: require('./Center'),
  Chip: require('./Chip'),
  Container: require('./Container'),
  DropdownButton: require('./DropdownButton'),
  Form: require('./Form'),
  FormField: require('./FormField'),
  FormInput: require('./FormInput'),
  FormLabel: require('./FormLabel'),
  FormNote: require('./FormNote'),
  FormSelect: require('./FormSelect'),
  Glyph: require('./Glyph'),
  GlyphButton: require('./GlyphButton'),
  GlyphField: require('./GlyphField'),
  Grid: require('./Grid'),
  InlineGroup: require('./InlineGroup'),
  InlineGroupSection: require('./InlineGroupSection'),
  LabelledControl: require('./LabelledControl'),
  LoadingButton: require('./LoadingButton'),
  Modal: require('./Modal'),
  Pagination: require('./Pagination'),
  ResponsiveText: require('./ResponsiveText'),
  ScreenReaderOnly: require('./ScreenReaderOnly'),
  SegmentedControl: require('./SegmentedControl'),
  Spinner: require('./Spinner')
};

},{"./Alert":2,"./BlankState":4,"./Button":5,"./Center":7,"./Chip":10,"./Container":12,"./DropdownButton":15,"./Form":16,"./FormField":18,"./FormInput":20,"./FormLabel":23,"./FormNote":25,"./FormSelect":27,"./Glyph":30,"./GlyphButton":34,"./GlyphField":35,"./Grid":36,"./InlineGroup":39,"./InlineGroupSection":40,"./LabelledControl":42,"./LoadingButton":44,"./Modal":49,"./Pagination":50,"./ResponsiveText":54,"./ScreenReaderOnly":55,"./SegmentedControl":58,"./Spinner":61}],65:[function(require,module,exports){
"use strict";

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _xhr = _interopRequireDefault(require("xhr"));

var _Alert = _interopRequireDefault(require("./components/Alert"));

var _Brand = _interopRequireDefault(require("./components/Brand"));

var _UserInfo = _interopRequireDefault(require("./components/UserInfo"));

var _LoginForm = _interopRequireDefault(require("./components/LoginForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The actual Sign In view, with the login form
 */
var SigninView = _react["default"].createClass({
  displayName: "SigninView",
  getInitialState: function getInitialState() {
    return {
      email: '',
      password: '',
      isAnimating: false,
      isInvalid: false,
      invalidMessage: '',
      signedOut: window.location.search === '?signedout'
    };
  },
  componentDidMount: function componentDidMount() {
    // Focus the email field when we're mounted
    if (this.refs.email) {
      this.refs.email.select();
    }

    this.__isMounted = true;
  },
  componentWillUnmount: function componentWillUnmount() {
    this.__isMounted = false;
  },
  handleInputChange: function handleInputChange(e) {
    // Set the new state when the input changes
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  },
  handleSubmit: function handleSubmit(e) {
    var _this = this;

    e.preventDefault(); // If either password or mail are missing, show an error

    if (!this.state.email || !this.state.password) {
      return this.displayError('Please enter an email address and password to sign in.');
    }

    (0, _xhr["default"])({
      url: "".concat(Keystone.adminPath, "/api/session/signin"),
      method: 'post',
      json: {
        email: this.state.email,
        password: this.state.password
      },
      headers: (0, _objectAssign["default"])({}, Keystone.csrf.header)
    }, function (err, resp, body) {
      if (err || body && body.error) {
        return body.error === 'invalid csrf' ? _this.displayError('Something went wrong; please refresh your browser and try again.') : _this.displayError('The email and password you entered are not valid.');
      } else {
        // Redirect to where we came from or to the default admin path
        if (Keystone.redirect) {
          top.location.href = Keystone.redirect;
        } else {
          top.location.href = _this.props.from ? _this.props.from : Keystone.adminPath;
        }
      }
    });
  },

  /**
   * Display an error message
   *
   * @param  {String} message The message you want to show
   */
  displayError: function displayError(message) {
    this.setState({
      isAnimating: true,
      isInvalid: true,
      invalidMessage: message
    });
    setTimeout(this.finishAnimation, 750);
  },
  // Finish the animation and select the email field
  finishAnimation: function finishAnimation() {
    if (!this.__isMounted) return;

    if (this.refs.email) {
      this.refs.email.select();
    }

    this.setState({
      isAnimating: false
    });
  },
  render: function render() {
    var boxClassname = (0, _classnames["default"])('auth-box', {
      'auth-box--has-errors': this.state.isAnimating
    });
    return _react["default"].createElement("div", {
      className: "auth-wrapper"
    }, _react["default"].createElement(_Alert["default"], {
      isInvalid: this.state.isInvalid,
      signedOut: this.state.signedOut,
      invalidMessage: this.state.invalidMessage
    }), _react["default"].createElement("div", {
      className: boxClassname
    }, _react["default"].createElement("h1", {
      className: "u-hidden-visually"
    }, this.props.brand ? this.props.brand : 'Keystone', " Sign In "), _react["default"].createElement("div", {
      className: "auth-box__inner"
    }, _react["default"].createElement(_Brand["default"], {
      logo: this.props.logo,
      brand: this.props.brand
    }), this.props.user ? _react["default"].createElement(_UserInfo["default"], {
      adminPath: this.props.from ? this.props.from : Keystone.adminPath,
      signoutPath: "".concat(Keystone.adminPath, "/signout"),
      userCanAccessKeystone: this.props.userCanAccessKeystone,
      userName: this.props.user.name
    }) : _react["default"].createElement(_LoginForm["default"], {
      email: this.state.email,
      handleInputChange: this.handleInputChange,
      handleSubmit: this.handleSubmit,
      isAnimating: this.state.isAnimating,
      password: this.state.password
    }))), _react["default"].createElement("div", {
      className: "auth-footer"
    }, _react["default"].createElement("span", null, "Powered by "), _react["default"].createElement("a", {
      href: "http://keystonejs.com",
      target: "_blank",
      title: "The Node.js CMS and web application platform (new window)"
    }, "KeystoneJS")));
  }
});

module.exports = SigninView;

},{"./components/Alert":66,"./components/Brand":67,"./components/LoginForm":68,"./components/UserInfo":69,"classnames":undefined,"object-assign":74,"react":undefined,"xhr":undefined}],66:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _elemental = require("../../App/elemental");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Renders an Alert. Pass either an isInvalid and invalidMessage prop, or set
 * the signedOut prop to true to show the standard signed out message
 */
var AlertView = function AlertView(props) {
  if (props.isInvalid) {
    return _react["default"].createElement(_elemental.Alert, {
      key: "error",
      color: "danger",
      style: {
        textAlign: 'center'
      }
    }, props.invalidMessage);
  } else if (props.signedOut) {
    return _react["default"].createElement(_elemental.Alert, {
      key: "signed-out",
      color: "info",
      style: {
        textAlign: 'center'
      }
    }, "You have been signed out.");
  } else {
    // Can't return "null" from stateless components
    return _react["default"].createElement("span", null);
  }
};

AlertView.propTypes = {
  invalidMessage: _react["default"].PropTypes.string,
  isInvalid: _react["default"].PropTypes.bool,
  signedOut: _react["default"].PropTypes.bool
};
module.exports = AlertView;

},{"../../App/elemental":64,"react":undefined}],67:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Renders a logo, defaulting to the Keystone logo if no brand is specified in
 * the configuration
 */
var Brand = function Brand(props) {
  // Default to the KeystoneJS logo
  var logo = {
    src: "".concat(Keystone.adminPath, "/images/logo.png"),
    width: 205,
    height: 68
  };

  if (props.logo) {
    // If the logo is set to a string, it's a direct link
    logo = typeof props.logo === 'string' ? {
      src: props.logo
    } : props.logo; // Optionally one can specify the logo as an array, also stating the
    // wanted width and height of the logo
    // TODO: Deprecate this

    if (Array.isArray(logo)) {
      logo = {
        src: logo[0],
        width: logo[1],
        height: logo[2]
      };
    }
  }

  return _react["default"].createElement("div", {
    className: "auth-box__col"
  }, _react["default"].createElement("div", {
    className: "auth-box__brand"
  }, _react["default"].createElement("a", {
    href: "/",
    className: "auth-box__brand__logo"
  }, _react["default"].createElement("img", {
    src: logo.src,
    width: logo.width ? logo.width : null,
    height: logo.height ? logo.height : null,
    alt: props.brand
  }))));
};

module.exports = Brand;

},{"react":undefined}],68:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../../App/elemental");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

/**
 * The login form of the signin screen
 */
var LoginForm = function LoginForm(_ref) {
  var email = _ref.email,
      handleInputChange = _ref.handleInputChange,
      handleSubmit = _ref.handleSubmit,
      isAnimating = _ref.isAnimating,
      password = _ref.password;
  return _react["default"].createElement("div", {
    className: "auth-box__col"
  }, _react["default"].createElement(_elemental.Form, {
    onSubmit: handleSubmit,
    noValidate: true
  }, _react["default"].createElement(_elemental.FormField, {
    label: "Email",
    htmlFor: "email"
  }, _react["default"].createElement(_elemental.FormInput, {
    autoFocus: true,
    type: "email",
    name: "email",
    onChange: handleInputChange,
    value: email
  })), _react["default"].createElement(_elemental.FormField, {
    label: "Password",
    htmlFor: "password"
  }, _react["default"].createElement(_elemental.FormInput, {
    type: "password",
    name: "password",
    onChange: handleInputChange,
    value: password
  })), _react["default"].createElement(_elemental.Button, {
    disabled: isAnimating,
    color: "primary",
    type: "submit"
  }, "Sign In")));
};

LoginForm.propTypes = {
  email: _react.PropTypes.string,
  handleInputChange: _react.PropTypes.func.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  isAnimating: _react.PropTypes.bool,
  password: _react.PropTypes.string
};
module.exports = LoginForm;

},{"../../App/elemental":64,"react":undefined}],69:[function(require,module,exports){
"use strict";

var _react = _interopRequireWildcard(require("react"));

var _elemental = require("../../App/elemental");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

// TODO Figure out if we should change "Keystone" to "Admin area"
var UserInfo = function UserInfo(_ref) {
  var adminPath = _ref.adminPath,
      signoutPath = _ref.signoutPath,
      userCanAccessKeystone = _ref.userCanAccessKeystone,
      userName = _ref.userName;
  var adminButton = userCanAccessKeystone ? _react["default"].createElement(_elemental.Button, {
    href: adminPath,
    color: "primary"
  }, "Open Keystone") : null;
  return _react["default"].createElement("div", {
    className: "auth-box__col"
  }, _react["default"].createElement("p", null, "Hi ", userName, ","), _react["default"].createElement("p", null, "You're already signed in."), adminButton, _react["default"].createElement(_elemental.Button, {
    href: signoutPath,
    variant: "link",
    color: "cancel"
  }, "Sign Out"));
};

UserInfo.propTypes = {
  adminPath: _react.PropTypes.string.isRequired,
  signoutPath: _react.PropTypes.string.isRequired,
  userCanAccessKeystone: _react.PropTypes.bool,
  userName: _react.PropTypes.string.isRequired
};
module.exports = UserInfo;

},{"../../App/elemental":64,"react":undefined}],70:[function(require,module,exports){
"use strict";

/* eslint-disable key-spacing */
var theme = {};

var _require = require('./utils/color'),
    blend = _require.blend,
    darken = _require.darken,
    fade = _require.fade,
    lighten = _require.lighten; // ==============================
// COMMON
// ==============================
// breakpoint


theme.breakpointNumeric = {
  mobile: 480,
  tabletPortrait: 768,
  tabletLandscape: 992,
  desktop: 1200
};
theme.breakpoint = {
  tabletPortraitMin: theme.breakpointNumeric.mobile + 1 + 'px',
  tabletLandscapeMin: theme.breakpointNumeric.tabletPortrait + 1 + 'px',
  desktopMin: theme.breakpointNumeric.tabletLandscape + 1 + 'px',
  desktopLargeMin: theme.breakpointNumeric.desktop + 1 + 'px',
  mobileMax: theme.breakpointNumeric.mobile + 'px',
  tabletPortraitMax: theme.breakpointNumeric.tabletPortrait + 'px',
  tabletLandscapeMax: theme.breakpointNumeric.tabletLandscape + 'px',
  desktopMax: theme.breakpointNumeric.desktop + 'px'
}; // container

theme.container = {
  gutter: 20,
  size: {
    small: 750,
    medium: 970,
    large: 1170
  }
}; // color

theme.color = {
  body: '#fafafa',
  link: '#1385e5',
  linkHover: lighten('#1385e5', 10),
  text: '#1A1A1A',
  // contextual
  success: '#34c240',
  create: '#34c240',
  // alias for success
  primary: '#1385e5',
  info: '#1385e5',
  // alias for primary
  warning: '#FA3',
  danger: '#d64242',
  error: '#d64242',
  // alias for danger
  // neutrals
  gray90: '#1A1A1A',
  gray80: '#333',
  gray70: '#4D4D4D',
  gray60: '#666',
  gray50: '#7F7F7F',
  gray40: '#999',
  gray30: '#B3B3B3',
  gray20: '#CCC',
  gray15: '#D9D9D9',
  gray10: '#E5E5E5',
  gray05: '#F2F2F2',
  // social
  facebook: '#3B5998',
  google: '#DC4E41',
  instagram: '#3f729b',
  pinterest: '#bd081c',
  tumblr: '#35465c',
  twitter: '#55ACEE',
  youtube: '#cd201f',
  vimeo: '#1ab7ea'
}; // border radii

theme.borderRadius = {
  small: '0.125rem',
  "default": '0.3rem',
  large: '0.5rem'
}; // spacing

theme.spacing = {
  xsmall: 5,
  small: 10,
  "default": 20,
  large: 30,
  xlarge: 40,
  xxlarge: 60
}; // ==============================
// ELEMENTAL SPECIFIC
// ==============================
// button

theme.button = {
  borderRadius: theme.borderRadius["default"],
  borderWidth: 1,
  font: {
    weight: 500
  },
  paddingHorizontal: '1em',
  "default": {
    bgColor: theme.color.primary,
    borderColor: blend(theme.color.primary, theme.color.body, 60),
    textColor: theme.color.primary
  },
  primary: {
    bgColor: theme.color.primary,
    borderColor: blend(theme.color.primary, theme.color.body, 60),
    textColor: theme.color.primary
  },
  success: {
    bgColor: theme.color.success,
    borderColor: blend(theme.color.success, theme.color.body, 60),
    textColor: theme.color.success
  },
  warning: {
    bgColor: theme.color.warning,
    borderColor: blend(theme.color.warning, theme.color.body, 60),
    textColor: theme.color.warning
  },
  danger: {
    bgColor: theme.color.danger,
    borderColor: blend(theme.color.danger, theme.color.body, 60),
    textColor: theme.color.danger
  }
}; // blank state

theme.blankstate = {
  background: darken(theme.color.body, 4),
  borderRadius: theme.borderRadius["default"],
  color: theme.color.gray40,
  paddingHorizontal: '2em',
  paddingVertical: '4em'
}; // font

theme.font = {
  family: {
    mono: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    serif: 'Georgia, Times New Roman, Times, serif'
  },
  size: {
    xxsmall: '0.65rem',
    xsmall: '0.75rem',
    small: '0.85rem',
    "default": '1rem',
    medium: '1.2rem',
    large: '1.6rem',
    xlarge: '2.4rem',
    xxlarge: '3.2rem'
  }
}; // form

theme.form = {
  label: {
    color: theme.color.gray50,
    fontSize: '1rem',
    fontWeight: 'normal',
    width: 180
  },
  note: {
    color: theme.color.gray40,
    fontSize: '0.9em'
  }
}; // component

theme.component = {
  lineHeight: '2.3em',
  height: '2.4em',
  padding: '1em'
}; // input

theme.input = {
  background: {
    "default": 'white',
    disabled: '#fafafa',
    noedit: darken(theme.color.body, 2)
  },
  placeholderColor: '#aaa',
  lineHeight: theme.component.lineHeight,
  height: theme.component.height,
  border: {
    color: {
      "default": '#ccc',
      focus: theme.color.info,
      hover: '#bbb',
      noedit: darken(theme.color.body, 8)
    },
    radius: theme.borderRadius["default"],
    width: 1
  },
  boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
  boxShadowFocus: "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px ".concat(fade(theme.color.info, 10)),
  paddingHorizontal: '.75em'
}; // select

theme.select = {
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.075)'
}; // alert

theme.alert = {
  padding: '0.75em  1em',
  margin: '0 0 1em',
  borderWidth: 1,
  borderRadius: theme.borderRadius["default"],
  color: {
    danger: {
      background: fade(theme.color.danger, 10),
      border: fade(theme.color.danger, 10),
      text: theme.color.danger
    },
    info: {
      background: fade(theme.color.primary, 10),
      border: fade(theme.color.primary, 10),
      text: theme.color.primary
    },
    success: {
      background: fade(theme.color.success, 10),
      border: fade(theme.color.success, 10),
      text: theme.color.success
    },
    warning: {
      background: fade(theme.color.warning, 10),
      border: fade(theme.color.warning, 10),
      text: theme.color.warning
    }
  }
}; // glyph

theme.glyph = {
  color: {
    danger: theme.color.danger,
    inherit: 'inherit',
    inverted: 'white',
    primary: theme.color.primary,
    success: theme.color.success,
    warning: theme.color.warning
  },
  size: {
    small: 16,
    medium: 32,
    large: 64
  }
}; // modal

theme.modal = {
  background: 'rgba(0, 0, 0, 0.8)',
  zIndex: 100,
  padding: {
    dialog: {
      horizontal: '1em',
      vertical: 0
    },
    body: {
      horizontal: 0,
      vertical: '1em'
    },
    footer: {
      horizontal: 0,
      vertical: '1em'
    },
    header: {
      horizontal: 0,
      vertical: '0.6em'
    }
  }
}; // pagination

theme.pagination = {
  color: theme.color.gray60,
  hover: {
    background: 'white',
    border: 'rgba(0, 0, 0, 0.1)',
    color: theme.color.gray60
  },
  selected: {
    background: 'rgba(0, 0, 0, 0.05)',
    border: 'transparent',
    color: theme.color.gray60
  },
  disabled: {
    background: 'transparent',
    color: theme.color.gray40
  }
}; // spinner

theme.spinner = {
  color: {
    danger: theme.color.danger,
    "default": theme.color.gray40,
    inverted: 'white',
    primary: theme.color.primary,
    success: theme.color.success,
    warning: theme.color.warning
  },
  size: {
    small: 4,
    medium: 8,
    large: 16
  }
};
module.exports = theme;

},{"./utils/color":71}],71:[function(require,module,exports){
"use strict";

/**
	Validate Hex
	==============================

	@param {String} hex

	1. remove hash if present
	2. convert from 3 to 6 digit color code & ensure valid hex
*/
function validateHex(color) {
  var hex = color.replace('#', '');

  if (hex.length === 3) {
    return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error("Invalid color value provided: \"".concat(color, "\""));
  }

  return hex;
}

;
/**
	Fade Color
	==============================

	Takes a hexidecimal color, converts it to RGB and applies an alpha value.

	@param {String} color
	@param {Number} opacity (0-100)

	1. convert hex to RGB
	2. combine and add alpha channel
*/

function fade(color) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var decimalFraction = opacity / 100;
  var hex = validateHex(color); // 1.

  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16); // 2.

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + decimalFraction + ')';
  return result;
}

;
/**
	Shade Color
	==============================

	Takes a hexidecimal color, converts it to RGB and lightens or darkens

	@param {String} color
	@param {Number} opacity (0-100)

	1. do fancy RGB bitwise operations
	2. combine back into a hex value
*/

function shade(color, percent) {
  var decimalFraction = percent / 100;
  var hex = validateHex(color); // 1.

  var f = parseInt(hex, 16);
  var t = decimalFraction < 0 ? 0 : 255;
  var p = decimalFraction < 0 ? decimalFraction * -1 : decimalFraction;
  var R = f >> 16;
  var G = f >> 8 & 0x00FF;
  var B = f & 0x0000FF; // 2.

  return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

; // shade helpers

var lighten = shade;

function darken(color, percent) {
  return shade(color, percent * -1);
}

;
/**
	Blend Color
	==============================

	Takes two hexidecimal colors and blend them together

	@param {String} color1
	@param {String} color2
	@param {Number} percent (0-100)

	1. do fancy RGB bitwise operations
	2. combine back into a hex value
*/

function blend(color1, color2, percent) {
  var decimalFraction = percent / 100;
  var hex1 = validateHex(color1);
  var hex2 = validateHex(color2); // 1.

  var f = parseInt(hex1, 16);
  var t = parseInt(hex2, 16);
  var R1 = f >> 16;
  var G1 = f >> 8 & 0x00FF;
  var B1 = f & 0x0000FF;
  var R2 = t >> 16;
  var G2 = t >> 8 & 0x00FF;
  var B2 = t & 0x0000FF; // 2.

  return '#' + (0x1000000 + (Math.round((R2 - R1) * decimalFraction) + R1) * 0x10000 + (Math.round((G2 - G1) * decimalFraction) + G1) * 0x100 + (Math.round((B2 - B1) * decimalFraction) + B1)).toString(16).slice(1);
}

module.exports = {
  blend: blend,
  darken: darken,
  fade: fade,
  lighten: lighten
};

},{}],72:[function(require,module,exports){
"use strict";

// ======================
// Concatenate Classnames
// ======================
//
// Support className as an array:
// force classname prop into an array (possibly of arrays) then flatten

/*
	// To use spread the new array into glamor's `css` function

	function Component ({ className, ...props }) {
		props.className = css(
			classes.component,
			...concatClassnames(className)
		);

		return <Component {...props} />;
	};
*/
module.exports = function concatClassnames(className) {
  return [className].reduce(function (a, b) {
    return a.concat(b);
  }, []);
};

},{}],73:[function(require,module,exports){
"use strict";

/**
	Linear Gradient
	==============================

	Short-hand helper for adding a linear gradient to your component.

	- @param {String} sideOrCorner
	- @param {String} top
	- @param {String} bottom
	- @param {String} base (optional)
	- @returns {Object} css linear gradient declaration

	Spread the declaration into your component class:
	------------------------------

	myComponentClass: {
		...linearGradient(red, blue),
	}
*/
function linearGradient(direction, top, bottom) {
  var base = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  return {
    background: "linear-gradient(".concat(direction, ", ").concat(top, " 0%, ").concat(bottom, " 100%) ").concat(base)
  };
} // Vertical Gradient


function gradientVertical(top, bottom, base) {
  return linearGradient('to bottom', top, bottom, base);
} // Horizontal Gradient


function gradientHorizontal(top, bottom, base) {
  return linearGradient('to right', top, bottom, base);
}
/**
	Border Radius
	==============================

	Short-hand helper for border radii
*/
// top


function borderTopRadius(radius) {
  return {
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius
  };
} // right


function borderRightRadius(radius) {
  return {
    borderBottomRightRadius: radius,
    borderTopRightRadius: radius
  };
} // bottom


function borderBottomRadius(radius) {
  return {
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: radius
  };
} // left


function borderLeftRadius(radius) {
  return {
    borderBottomLeftRadius: radius,
    borderTopLeftRadius: radius
  };
} // Return


module.exports = {
  borderTopRadius: borderTopRadius,
  borderRightRadius: borderRightRadius,
  borderBottomRadius: borderBottomRadius,
  borderLeftRadius: borderLeftRadius,
  gradientHorizontal: gradientHorizontal,
  gradientVertical: gradientVertical
};

},{}],74:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],75:[function(require,module,exports){
"use strict";

var _qs = _interopRequireDefault(require("qs"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Signin = _interopRequireDefault(require("./Signin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * The signin page, it renders a page with a username and password input form.
 *
 * This is decoupled from the main app (in the "App/" folder) because we inject
 * lots of data into the other screens (like the lists that exist) that we don't
 * want to have injected here, so this is a completely separate route and template.
 */
// Sanitize from param
var internalFromRegex = /^\/[^\/\\]\w+/;

var params = _qs["default"].parse(window.location.search.replace(/^\?/, ''));

var from = internalFromRegex.test(params.from) ? params.from : undefined;

_reactDom["default"].render(_react["default"].createElement(_Signin["default"], {
  brand: Keystone.brand,
  from: from,
  logo: Keystone.logo,
  user: Keystone.user,
  userCanAccessKeystone: Keystone.userCanAccessKeystone
}), document.getElementById('signin-view'));

},{"./Signin":65,"qs":undefined,"react":undefined,"react-dom":undefined}]},{},[75])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0FsZXJ0L2NvbG9ycy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvQWxlcnQvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0FsZXJ0L3N0eWxlcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvQmxhbmtTdGF0ZS9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvQnV0dG9uL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9CdXR0b24vc3R5bGVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9DZW50ZXIvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0NlbnRlci9zdHlsZXMuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0NoaXAvY29sb3JzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9DaGlwL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9DaGlwL3N0eWxlcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvQ29udGFpbmVyL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9Db250YWluZXIvc2l6ZXMuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0NvbnRhaW5lci9zdHlsZXMuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0Ryb3Bkb3duQnV0dG9uL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9Gb3JtL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9Gb3JtL3N0eWxlcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvRm9ybUZpZWxkL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9Gb3JtRmllbGQvc3R5bGVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9Gb3JtSW5wdXQvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0Zvcm1JbnB1dC9ub2VkaXQuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0Zvcm1JbnB1dC9zdHlsZXMuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0Zvcm1MYWJlbC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvRm9ybUxhYmVsL3N0eWxlcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvRm9ybU5vdGUvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0Zvcm1Ob3RlL3N0eWxlcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvRm9ybVNlbGVjdC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvRm9ybVNlbGVjdC9zdHlsZXMuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0dseXBoL2NvbG9ycy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvR2x5cGgvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0dseXBoL29jdGljb25zLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9HbHlwaC9zaXplcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvR2x5cGgvc3R5bGVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9HbHlwaEJ1dHRvbi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvR2x5cGhGaWVsZC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvR3JpZC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvR3JpZENvbC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvR3JpZFJvdy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvSW5saW5lR3JvdXAvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL0lubGluZUdyb3VwU2VjdGlvbi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvSW5saW5lR3JvdXBTZWN0aW9uL3N0eWxlcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvTGFiZWxsZWRDb250cm9sL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9MYWJlbGxlZENvbnRyb2wvc3R5bGVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9Mb2FkaW5nQnV0dG9uL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9Nb2RhbC9ib2R5LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9Nb2RhbC9kaWFsb2cuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL01vZGFsL2Zvb3Rlci5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvTW9kYWwvaGVhZGVyLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9Nb2RhbC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvUGFnaW5hdGlvbi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvUGFnaW5hdGlvbi9wYWdlLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9QYXNzQ29udGV4dC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvUG9ydGFsL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9SZXNwb25zaXZlVGV4dC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvU2NyZWVuUmVhZGVyT25seS9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvU2Nyb2xsTG9jay9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvU2VnbWVudGVkQ29udHJvbC9jb2xvcnMuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL1NlZ21lbnRlZENvbnRyb2wvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL1NlZ21lbnRlZENvbnRyb2wvc3R5bGVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvQXBwL2VsZW1lbnRhbC9TcGlubmVyL2NvbG9ycy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvU3Bpbm5lci9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvU3Bpbm5lci9zaXplcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L0FwcC9lbGVtZW50YWwvU3Bpbm5lci9zdHlsZXMuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9BcHAvZWxlbWVudGFsL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvU2lnbmluL1NpZ25pbi5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L1NpZ25pbi9jb21wb25lbnRzL0FsZXJ0LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvU2lnbmluL2NvbXBvbmVudHMvQnJhbmQuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9TaWduaW4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC9TaWduaW4vY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2tleXN0b25lLTQvYWRtaW4vY2xpZW50L3RoZW1lLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvdXRpbHMvY29sb3IuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9rZXlzdG9uZS00L2FkbWluL2NsaWVudC91dGlscy9jb25jYXRDbGFzc25hbWVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9hZG1pbi9jbGllbnQvdXRpbHMvY3NzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMva2V5c3RvbmUtNC9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIlNpZ25pbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxNQUFNLENBQUMsT0FBUCxHQUFpQjtBQUNoQixFQUFBLE1BQU0sRUFBRSxrQkFBTSxLQUFOLENBQVksS0FBWixDQUFrQixNQURWO0FBRWhCLEVBQUEsS0FBSyxFQUFFLGtCQUFNLEtBQU4sQ0FBWSxLQUFaLENBQWtCLE1BRlQ7QUFHaEIsRUFBQSxJQUFJLEVBQUUsa0JBQU0sS0FBTixDQUFZLEtBQVosQ0FBa0IsSUFIUjtBQUloQixFQUFBLE9BQU8sRUFBRSxrQkFBTSxLQUFOLENBQVksS0FBWixDQUFrQixPQUpYO0FBS2hCLEVBQUEsT0FBTyxFQUFFLGtCQUFNLEtBQU4sQ0FBWSxLQUFaLENBQWtCO0FBTFgsQ0FBakI7Ozs7O0FDRkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTSxtQkFBbUIsR0FBRyxTQUF0QixtQkFBc0IsQ0FBQyxDQUFELEVBQU87QUFDbEMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUYsSUFBVSxDQUFDLENBQUMsSUFBRixDQUFPLFdBQWpCLEdBQ1YsQ0FBQyxDQUFDLElBQUYsQ0FBTyxXQURHLEdBRVYsQ0FBQyxDQUFDLElBQUYsSUFBVSxJQUZiO0FBSUEsTUFBSSxDQUFDLElBQUQsSUFBUyxDQUFDLG1CQUFRLElBQVIsQ0FBZCxFQUE2QixPQUFPLENBQVA7QUFFN0IsU0FBTyx5QkFBYSxDQUFiLEVBQWdCO0FB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LEVBQUEscUJBQXFCLEVBQUUsUUFBUSxDQUFDO0FBTGpDLEVBREQsRUFRQyxRQUFRLENBQUMsY0FBVCxDQUF3QixhQUF4QixDQVJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRhbmdlcjogdGhlbWUuYWxlcnQuY29sb3IuZGFuZ2VyLFxuXHRlcnJvcjogdGhlbWUuYWxlcnQuY29sb3IuZGFuZ2VyLFxuXHRpbmZvOiB0aGVtZS5hbGVydC5jb2xvci5pbmZvLFxuXHRzdWNjZXNzOiB0aGVtZS5hbGVydC5jb2xvci5zdWNjZXNzLFxuXHR3YXJuaW5nOiB0aGVtZS5hbGVydC5jb2xvci53YXJuaW5nLFxufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgUmVhY3QsIHsgY2xvbmVFbGVtZW50LCBDaGlsZHJlbiwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5cbi8vIGNsb25lIGNoaWxkcmVuIGlmIGEgY2xhc3MgZXhpc3RzIGZvciB0aGUgdGFnbmFtZVxuY29uc3QgY2xvbmVXaXRoQ2xhc3NuYW1lcyA9IChjKSA9PiB7XG5cdGNvbnN0IHR5cGUgPSBjLnR5cGUgJiYgYy50eXBlLmRpc3BsYXlOYW1lXG5cdFx0PyBjLnR5cGUuZGlzcGxheU5hbWVcblx0XHQ6IGMudHlwZSB8fCBudWxsO1xuXG5cdGlmICghdHlwZSB8fCAhY2xhc3Nlc1t0eXBlXSkgcmV0dXJuIGM7XG5cblx0cmV0dXJuIGNsb25lRWxlbWVudChjLCB7XG5cdFx0Y2xhc3NOYW1lOiBjc3MoY2xhc3Nlc1t0eXBlXSksXG5cdH0pO1xufTtcblxuZnVuY3Rpb24gQWxlcnQgKHtcblx0Y2hpbGRyZW4sXG5cdGNsYXNzTmFtZSxcblx0Y29sb3IsXG5cdGNvbXBvbmVudDogQ29tcG9uZW50LFxuXHQuLi5wcm9wc1xufSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlcy5hbGVydCxcblx0XHRjbGFzc2VzW2NvbG9yXSxcblx0XHRjbGFzc05hbWVcblx0KTtcblx0cHJvcHMuY2hpbGRyZW4gPSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNsb25lV2l0aENsYXNzbmFtZXMpO1xuXG5cdHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gZGF0YS1hbGVydC10eXBlPXtjb2xvcn0gLz47XG59O1xuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG5cdGNvbG9yOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoY29sb3JzKSkuaXNSZXF1aXJlZCxcblx0Y29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuZnVuYyxcblx0XHRQcm9wVHlwZXMuc3RyaW5nLFxuXHRdKSxcbn07XG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XG5cdGNvbXBvbmVudDogJ2RpdicsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFsZXJ0O1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBbGVydFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJhcy1uZWVkZWRcIl0gKi9cblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG4vLyBQcmVwYXJlIHZhcmlhbnRzXG5jb25zdCBjb2xvclZhcmlhbnRzID0ge307XG5PYmplY3Qua2V5cyhjb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuXHRjb2xvclZhcmlhbnRzW2NvbG9yXSA9IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1tjb2xvcl0uYmFja2dyb3VuZCxcblx0XHRib3JkZXJDb2xvcjogY29sb3JzW2NvbG9yXS5ib3JkZXIsXG5cdFx0Y29sb3I6IGNvbG9yc1tjb2xvcl0udGV4dCxcblx0fTtcbn0pO1xuXG4vLyBQcmVwYXJlIGhlYWRpbmdzXG5jb25zdCBoZWFkaW5nVGFnbmFtZXMgPSB7fTtcblsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXS5mb3JFYWNoKHRhZyA9PiB7XG5cdGhlYWRpbmdUYWduYW1lc1t0YWddID0geyBjb2xvcjogJ2luaGVyaXQnIH07XG59KTtcblxuY29uc3QgbGlua1N0eWxlcyA9IHtcblx0Y29sb3I6ICdpbmhlcml0Jyxcblx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuXG5cdCc6aG92ZXInOiB7IGNvbG9yOiAnaW5oZXJpdCcgfSxcblx0Jzpmb2N1cyc6IHsgY29sb3I6ICdpbmhlcml0JyB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGFsZXJ0OiB7XG5cdFx0Ym9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5hbGVydC5ib3JkZXJSYWRpdXMsXG5cdFx0Ym9yZGVyU3R5bGU6ICdzb2xpZCcsXG5cdFx0Ym9yZGVyV2lkdGg6IHRoZW1lLmFsZXJ0LmJvcmRlcldpZHRoLFxuXHRcdG1hcmdpbjogdGhlbWUuYWxlcnQubWFyZ2luLFxuXHRcdHBhZGRpbmc6IHRoZW1lLmFsZXJ0LnBhZGRpbmcsXG5cdH0sXG5cblx0Ly8gdGFnbmFtZXNcblx0YTogbGlua1N0eWxlcyxcblx0TGluazogbGlua1N0eWxlcyxcblx0c3Ryb25nOiB7XG5cdFx0Zm9udFdlaWdodDogNTAwLFxuXHR9LFxuXG5cdC8vIGhlYWRpbmdzXG5cdC4uLmhlYWRpbmdUYWduYW1lcyxcblxuXHQvLyBjb2xvcnNcblx0Li4uY29sb3JWYXJpYW50cyxcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbmZ1bmN0aW9uIEJsYW5rU3RhdGUgKHtcblx0Y2xhc3NOYW1lLFxuXHRjaGlsZHJlbixcblx0aGVhZGluZyxcblx0Y29tcG9uZW50OiBDb21wb25lbnQsXG5cdC4uLnByb3BzXG59KSB7XG5cdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRjbGFzc2VzLmNvbnRhaW5lcixcblx0XHRjbGFzc05hbWVcblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxDb21wb25lbnQgey4uLnByb3BzfT5cblx0XHRcdHshIWhlYWRpbmcgJiYgPGgyIGRhdGEtZTJlLWJsYW5rLXN0YXRlLWhlYWRpbmcgY2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy5oZWFkaW5nKX0+e2hlYWRpbmd9PC9oMj59XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9Db21wb25lbnQ+XG5cdCk7XG59O1xuXG5CbGFua1N0YXRlLnByb3BUeXBlcyA9IHtcblx0Y29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuZnVuYyxcblx0XHRQcm9wVHlwZXMuc3RyaW5nLFxuXHRdKS5pc1JlcXVpcmVkLFxuXHRoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkJsYW5rU3RhdGUuZGVmYXVsdFByb3BzID0ge1xuXHRjb21wb25lbnQ6ICdkaXYnLFxufTtcblxuLyogZXNsaW50IHF1b3RlLXByb3BzOiBbXCJlcnJvclwiLCBcImFzLW5lZWRlZFwiXSAqL1xuXG5jb25zdCBjbGFzc2VzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmJsYW5rc3RhdGUuYmFja2dyb3VuZCxcblx0XHRib3JkZXJSYWRpdXM6IHRoZW1lLmJsYW5rc3RhdGUuYm9yZGVyUmFkaXVzLFxuXHRcdGNvbG9yOiB0aGVtZS5ibGFua3N0YXRlLmNvbG9yLFxuXHRcdHBhZGRpbmdCb3R0b206IHRoZW1lLmJsYW5rc3RhdGUucGFkZGluZ1ZlcnRpY2FsLFxuXHRcdHBhZGRpbmdMZWZ0OiB0aGVtZS5ibGFua3N0YXRlLnBhZGRpbmdIb3Jpem9udGFsLFxuXHRcdHBhZGRpbmdSaWdodDogdGhlbWUuYmxhbmtzdGF0ZS5wYWRkaW5nSG9yaXpvbnRhbCxcblx0XHRwYWRkaW5nVG9wOiB0aGVtZS5ibGFua3N0YXRlLnBhZGRpbmdWZXJ0aWNhbCxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHR9LFxuXG5cdGhlYWRpbmc6IHtcblx0XHRjb2xvcjogJ2luaGVyaXQnLFxuXG5cdFx0JzpsYXN0LWNoaWxkJzoge1xuXHRcdFx0bWFyZ2luQm90dG9tOiAwLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJsYW5rU3RhdGU7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IGNvbW1vbkNsYXNzZXMgPSBzdHlsZXMuY29tbW9uO1xuY29uc3Qgc3R5bGVzaGVldENhY2hlID0ge307XG5mdW5jdGlvbiBnZXRTdHlsZVNoZWV0ICh2YXJpYW50LCBjb2xvcikge1xuXHRjb25zdCBjYWNoZUtleSA9IGAke3ZhcmlhbnR9LSR7Y29sb3J9YDtcblx0aWYgKCFzdHlsZXNoZWV0Q2FjaGVbY2FjaGVLZXldKSB7XG5cdFx0Y29uc3QgdmFyaWFudFN0eWxlcyA9IHN0eWxlc1t2YXJpYW50XShjb2xvcik7XG5cdFx0c3R5bGVzaGVldENhY2hlW2NhY2hlS2V5XSA9IHZhcmlhbnRTdHlsZXM7XG5cdH1cblx0cmV0dXJuIHN0eWxlc2hlZXRDYWNoZVtjYWNoZUtleV07XG59XG5cbmNvbnN0IEJVVFRPTl9TSVpFUyA9IFsnbGFyZ2UnLCAnbWVkaXVtJywgJ3NtYWxsJywgJ3hzbWFsbCddO1xuY29uc3QgQlVUVE9OX1ZBUklBTlRTID0gWydmaWxsJywgJ2hvbGxvdycsICdsaW5rJ107XG5jb25zdCBCVVRUT05fQ09MT1JTID0gWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdjYW5jZWwnLCAnZGVsZXRlJ107XG5cbi8vIE5PVEUgbXVzdCBOT1QgYmUgZnVuY3Rpb25hbCBjb21wb25lbnQgdG8gYWxsb3cgYHJlZnNgXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlciAoKSB7XG5cdFx0dmFyIHtcblx0XHRcdGFjdGl2ZSxcblx0XHRcdGNzc1N0eWxlcyxcblx0XHRcdGJsb2NrLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0Y29sb3IsXG5cdFx0XHRjb21wb25lbnQ6IFRhZyxcblx0XHRcdGRpc2FibGVkLFxuXHRcdFx0c2l6ZSxcblx0XHRcdHZhcmlhbnQsXG5cdFx0XHQuLi5wcm9wc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Ly8gZ2V0IHRoZSBzdHlsZXNcblx0XHRjb25zdCB2YXJpYW50Q2xhc3NlcyA9IGdldFN0eWxlU2hlZXQodmFyaWFudCwgY29sb3IpO1xuXHRcdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRcdGNvbW1vbkNsYXNzZXMuYmFzZSxcblx0XHRcdGNvbW1vbkNsYXNzZXNbc2l6ZV0sXG5cdFx0XHR2YXJpYW50Q2xhc3Nlcy5iYXNlLFxuXHRcdFx0YmxvY2sgPyBjb21tb25DbGFzc2VzLmJsb2NrIDogbnVsbCxcblx0XHRcdGRpc2FibGVkID8gY29tbW9uQ2xhc3Nlcy5kaXNhYmxlZCA6IG51bGwsXG5cdFx0XHRhY3RpdmUgPyB2YXJpYW50Q2xhc3Nlcy5hY3RpdmUgOiBudWxsLFxuXHRcdFx0Li4uY3NzU3R5bGVzXG5cdFx0KTtcblx0XHRpZiAoY2xhc3NOYW1lKSB7XG5cdFx0XHRwcm9wcy5jbGFzc05hbWUgKz0gKCcgJyArIGNsYXNzTmFtZSk7XG5cdFx0fVxuXG5cdFx0Ly8gcmV0dXJuIGFuIGFuY2hvciBvciBidXR0b25cblx0XHRpZiAoIVRhZykge1xuXHRcdFx0VGFnID0gcHJvcHMuaHJlZiA/ICdhJyA6ICdidXR0b24nO1xuXHRcdH1cblx0XHQvLyBFbnN1cmUgYnV0dG9ucyBkb24ndCBzdWJtaXQgYnkgZGVmYXVsdFxuXHRcdGlmIChUYWcgPT09ICdidXR0b24nICYmICFwcm9wcy50eXBlKSB7XG5cdFx0XHRwcm9wcy50eXBlID0gJ2J1dHRvbic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxUYWcgey4uLnByb3BzfSAvPjtcblx0fVxufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblx0YmxvY2s6IFByb3BUeXBlcy5ib29sLFxuXHRjb2xvcjogUHJvcFR5cGVzLm9uZU9mKEJVVFRPTl9DT0xPUlMpLFxuXHRjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5mdW5jLFxuXHRcdFByb3BUeXBlcy5zdHJpbmcsXG5cdF0pLFxuXHRjc3NTdHlsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0X2RlZmluaXRpb246IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdH0pKSxcblx0ZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXHRocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRzaXplOiBQcm9wVHlwZXMub25lT2YoQlVUVE9OX1NJWkVTKSxcblx0dmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKEJVVFRPTl9WQVJJQU5UUyksXG59O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcblx0Y3NzU3R5bGVzOiBbXSxcblx0Y29sb3I6ICdkZWZhdWx0Jyxcblx0dmFyaWFudDogJ2ZpbGwnLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJ1dHRvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IGdyYWRpZW50VmVydGljYWwgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jc3MnO1xuaW1wb3J0IHsgZGFya2VuLCBmYWRlLCBsaWdodGVuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29sb3InO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxuXG4vLyBDb21tb24gU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydHMuY29tbW9uID0ge1xuXHQvLyBCYXNlIEJ1dHRvblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tXG5cdGJhc2U6IHtcblx0XHQnYXBwZWFyYW5jZSc6ICdub25lJyxcblx0XHQnYmFja2dyb3VuZCc6ICdub25lJyxcblx0XHQnYm9yZGVyV2lkdGgnOiB0aGVtZS5idXR0b24uYm9yZGVyV2lkdGgsXG5cdFx0J2JvcmRlclN0eWxlJzogJ3NvbGlkJyxcblx0XHQnYm9yZGVyQ29sb3InOiAndHJhbnNwYXJlbnQnLFxuXHRcdCdib3JkZXJSYWRpdXMnOiB0aGVtZS5idXR0b24uYm9yZGVyUmFkaXVzLFxuXHRcdCdjdXJzb3InOiAncG9pbnRlcicsXG5cdFx0J2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJyxcblx0XHQnZm9udFdlaWdodCc6IHRoZW1lLmJ1dHRvbi5mb250LndlaWdodCxcblx0XHQnaGVpZ2h0JzogdGhlbWUuY29tcG9uZW50LmhlaWdodCxcblx0XHQnbGluZUhlaWdodCc6IHRoZW1lLmNvbXBvbmVudC5saW5lSGVpZ2h0LFxuXHRcdCdtYXJnaW5Cb3R0b20nOiAwLFxuXHRcdCdwYWRkaW5nJzogYDAgJHt0aGVtZS5idXR0b24ucGFkZGluZ0hvcml6b250YWx9YCxcblx0XHQnb3V0bGluZSc6IDAsXG5cdFx0J3RleHRBbGlnbic6ICdjZW50ZXInLFxuXHRcdCd0b3VjaEFjdGlvbic6ICdtYW5pcHVsYXRpb24nLFxuXHRcdCd1c2VyU2VsZWN0JzogJ25vbmUnLFxuXHRcdCd2ZXJ0aWNhbEFsaWduJzogJ21pZGRsZScsXG5cdFx0J3doaXRlU3BhY2UnOiAnbm93cmFwJyxcblxuXHRcdCc6aG92ZXInOiB7XG5cdFx0XHRjb2xvcjogdGhlbWUuYnV0dG9uLmRlZmF1bHQudGV4dENvbG9yLFxuXHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHR9LFxuXHRcdCc6Zm9jdXMnOiB7XG5cdFx0XHRjb2xvcjogdGhlbWUuYnV0dG9uLmRlZmF1bHQudGV4dENvbG9yLFxuXHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHR9LFxuXHR9LFxuXHQvLyBCbG9jayBEaXNwbGF5XG5cdC8vIC0tLS0tLS0tLS0tLS0tLS1cblx0YmxvY2s6IHtcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdHdpZHRoOiAnMTAwJScsXG5cdH0sXG5cdC8vIERpc2FibGVkXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS1cblx0ZGlzYWJsZWQ6IHtcblx0XHRvcGFjaXR5OiAwLjQsXG5cdFx0cG9pbnRlckV2ZW50czogJ25vbmUnLFxuXHR9LFxuXHQvLyBTaXplc1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tXG5cdGxhcmdlOiB7XG5cdFx0Zm9udFNpemU6IHRoZW1lLmZvbnQuc2l6ZS5sYXJnZSxcblx0fSxcblx0ZGVmYXVsdDoge1xuXHRcdGZvbnRTaXplOiB0aGVtZS5mb250LnNpemUuZGVmYXVsdCxcblx0fSxcblx0c21hbGw6IHtcblx0XHRmb250U2l6ZTogdGhlbWUuZm9udC5zaXplLnNtYWxsLFxuXHR9LFxuXHR4c21hbGw6IHtcblx0XHRmb250U2l6ZTogdGhlbWUuZm9udC5zaXplLnhzbWFsbCxcblx0XHRsaW5lSGVpZ2h0OiAnMS45Jyxcblx0XHRwYWRkaW5nTGVmdDogJy42NmVtJyxcblx0XHRwYWRkaW5nUmlnaHQ6ICcuNjZlbScsXG5cdH0sXG59O1xuXG5cbi8vIEZpbGwgVmFyaWFudFxuLy8gLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gYnV0dG9uRmlsbFZhcmlhbnQgKHRleHRDb2xvciwgYmdDb2xvcikge1xuXHRjb25zdCBob3ZlclN0eWxlcyA9IHtcblx0XHQuLi5ncmFkaWVudFZlcnRpY2FsKGxpZ2h0ZW4oYmdDb2xvciwgMTApLCBkYXJrZW4oYmdDb2xvciwgNSkpLFxuXHRcdGJvcmRlckNvbG9yOiBgJHtkYXJrZW4oYmdDb2xvciwgNSl9ICR7ZGFya2VuKGJnQ29sb3IsIDEwKX0gJHtkYXJrZW4oYmdDb2xvciwgMTUpfWAsXG5cdFx0Ym94U2hhZG93OiAnMCAxcHggMCByZ2JhKDAsMCwwLDAuMSknLFxuXHRcdGNvbG9yOiB0ZXh0Q29sb3IsXG5cdFx0b3V0bGluZTogJ25vbmUnLFxuXHR9O1xuXHRjb25zdCBmb2N1c1N0eWxlcyA9IHtcblx0XHQuLi5ncmFkaWVudFZlcnRpY2FsKGxpZ2h0ZW4oYmdDb2xvciwgMTApLCBkYXJrZW4oYmdDb2xvciwgNSkpLFxuXHRcdGJvcmRlckNvbG9yOiBgJHtkYXJrZW4oYmdDb2xvciwgNSl9ICR7ZGFya2VuKGJnQ29sb3IsIDEwKX0gJHtkYXJrZW4oYmdDb2xvciwgMTUpfWAsXG5cdFx0Ym94U2hhZG93OiBgMCAwIDAgM3B4ICR7ZmFkZShiZ0NvbG9yLCAyNSl9YCxcblx0XHRjb2xvcjogdGV4dENvbG9yLFxuXHRcdG91dGxpbmU6ICdub25lJyxcblx0fTtcblx0Y29uc3QgYWN0aXZlU3R5bGVzID0ge1xuXHRcdGJhY2tncm91bmRDb2xvcjogZGFya2VuKGJnQ29sb3IsIDEwKSxcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6ICdub25lJyxcblx0XHRib3JkZXJDb2xvcjogYCR7ZGFya2VuKGJnQ29sb3IsIDI1KX0gJHtkYXJrZW4oYmdDb2xvciwgMTUpfSAke2RhcmtlbihiZ0NvbG9yLCAxMCl9YCxcblx0XHRib3hTaGFkb3c6ICdpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpJyxcblx0fTtcblx0cmV0dXJuIHtcblx0XHRiYXNlOiB7XG5cdFx0XHQuLi5ncmFkaWVudFZlcnRpY2FsKGxpZ2h0ZW4oYmdDb2xvciwgNSksIGRhcmtlbihiZ0NvbG9yLCAxMCksIGJnQ29sb3IpLFxuXHRcdFx0J2JvcmRlckNvbG9yJzogYCR7ZGFya2VuKGJnQ29sb3IsIDEwKX0gJHtkYXJrZW4oYmdDb2xvciwgMjApfSAke2RhcmtlbihiZ0NvbG9yLCAyNSl9YCxcblx0XHRcdCdib3hTaGFkb3cnOiAnaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknLFxuXHRcdFx0J2NvbG9yJzogdGV4dENvbG9yLFxuXHRcdFx0J2ZvbnRXZWlnaHQnOiA0MDAsXG5cdFx0XHQndGV4dFNoYWRvdyc6ICcwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpJyxcblxuXHRcdFx0Jzpob3Zlcic6IGhvdmVyU3R5bGVzLFxuXHRcdFx0Jzpmb2N1cyc6IGZvY3VzU3R5bGVzLFxuXHRcdFx0JzphY3RpdmUnOiBhY3RpdmVTdHlsZXMsXG5cdFx0fSxcblx0XHRhY3RpdmU6IGFjdGl2ZVN0eWxlcyxcblx0fTtcbn1cbi8vIFRPRE86IFRoaXMgaXMgcHJldHR5IGhhY2t5LCBuZWVkcyB0byBiZSBjb25zb2xpZGF0ZWQgd2l0aCB0aGUgVmFyaWFudCgpIG1ldGhvZFxuLy8gYWJvdmUgKG5lZWRzIG1vcmUgdGhlbWUgdmFyaWFibGVzIHRvIGJlIGltcGxlbWVudGVkIHRob3VnaClcbmZ1bmN0aW9uIGJ1dHRvbkZpbGxEZWZhdWx0ICgpIHtcblx0Y29uc3QgYm9yZGVyQ29sb3IgPSB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuZGVmYXVsdDtcblx0Y29uc3QgaG92ZXJTdHlsZXMgPSB7XG5cdFx0Li4uZ3JhZGllbnRWZXJ0aWNhbCgnI2ZmZicsICcjZWVlJyksXG5cdFx0Ym9yZGVyQ29sb3I6IGAke2Rhcmtlbihib3JkZXJDb2xvciwgNSl9ICR7ZGFya2VuKGJvcmRlckNvbG9yLCA1KX0gJHtkYXJrZW4oYm9yZGVyQ29sb3IsIDEwKX1gLFxuXHRcdGJveFNoYWRvdzogJzAgMXB4IDAgcmdiYSgwLDAsMCwwLjEpJyxcblx0XHRjb2xvcjogdGhlbWUuY29sb3IudGV4dCxcblx0fTtcblx0Y29uc3QgZm9jdXNTdHlsZXMgPSB7XG5cdFx0Ym9yZGVyQ29sb3I6IHRoZW1lLmNvbG9yLnByaW1hcnksXG5cdFx0Ym94U2hhZG93OiBgMCAwIDAgM3B4ICR7ZmFkZSh0aGVtZS5jb2xvci5wcmltYXJ5LCAxMCl9YCxcblx0XHRjb2xvcjogdGhlbWUuY29sb3IudGV4dCxcblx0XHRvdXRsaW5lOiAnbm9uZScsXG5cdH07XG5cdGNvbnN0IGFjdGl2ZVN0eWxlcyA9IHtcblx0XHRiYWNrZ3JvdW5kOiAnI2U2ZTZlNicsXG5cdFx0Ym9yZGVyQ29sb3I6IGRhcmtlbihib3JkZXJDb2xvciwgMTApLFxuXHRcdGJveFNoYWRvdzogJ2luc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSknLFxuXHRcdGNvbG9yOiB0aGVtZS5jb2xvci50ZXh0LFxuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdGJhc2U6IHtcblx0XHRcdC4uLmdyYWRpZW50VmVydGljYWwoJyNmYWZhZmEnLCAnI2VhZWFlYScpLFxuXHRcdFx0J2JvcmRlckNvbG9yJzogYCR7Ym9yZGVyQ29sb3J9ICR7ZGFya2VuKGJvcmRlckNvbG9yLCA2KX0gJHtkYXJrZW4oYm9yZGVyQ29sb3IsIDEyKX1gLFxuXHRcdFx0J2NvbG9yJzogdGhlbWUuY29sb3IudGV4dCxcblx0XHRcdCd0ZXh0U2hhZG93JzogJzAgMXB4IDAgd2hpdGUnLFxuXG5cdFx0XHQnOmhvdmVyJzogaG92ZXJTdHlsZXMsXG5cdFx0XHQnOmZvY3VzJzogZm9jdXNTdHlsZXMsXG5cdFx0XHQnOmFjdGl2ZSc6IGFjdGl2ZVN0eWxlcyxcblx0XHR9LFxuXG5cdFx0Ly8gZ3Jvc3MgaGFja1xuXHRcdGFjdGl2ZToge1xuXHRcdFx0Li4uYWN0aXZlU3R5bGVzLFxuXG5cdFx0XHQnOmhvdmVyJzogYWN0aXZlU3R5bGVzLFxuXHRcdFx0Jzpmb2N1cyc6IHtcblx0XHRcdFx0Li4uYWN0aXZlU3R5bGVzLFxuXHRcdFx0XHQuLi5mb2N1c1N0eWxlcyxcblx0XHRcdFx0Ym94U2hhZG93OiBgMCAwIDAgM3B4ICR7ZmFkZSh0aGVtZS5jb2xvci5wcmltYXJ5LCAxMCl9LCBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpYCxcblx0XHRcdH0sXG5cdFx0XHQnOmFjdGl2ZSc6IGFjdGl2ZVN0eWxlcyxcblx0XHR9LFxuXHR9O1xufVxuZXhwb3J0cy5maWxsID0gKGNvbG9yKSA9PiB7XG5cdHN3aXRjaCAoY29sb3IpIHtcblx0XHRjYXNlICdkZWZhdWx0Jzpcblx0XHRcdHJldHVybiBidXR0b25GaWxsRGVmYXVsdCgpO1xuXHRcdGNhc2UgJ2NhbmNlbCc6XG5cdFx0Y2FzZSAnZGVsZXRlJzpcblx0XHRcdHJldHVybiBidXR0b25GaWxsVmFyaWFudCgnd2hpdGUnLCB0aGVtZS5idXR0b24uZGFuZ2VyLmJnQ29sb3IpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gYnV0dG9uRmlsbFZhcmlhbnQoJ3doaXRlJywgdGhlbWUuYnV0dG9uW2NvbG9yXS5iZ0NvbG9yKTtcblx0fVxufTtcblxuXG4vLyBIb2xsb3cgVmFyaWFudFxuLy8gLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gYnV0dG9uSG9sbG93VmFyaWFudCAodGV4dENvbG9yLCBib3JkZXJDb2xvcikge1xuXHRjb25zdCBmb2N1c0FuZEhvdmVyU3R5bGVzID0ge1xuXHRcdGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogZmFkZShib3JkZXJDb2xvciwgMTUpLFxuXHRcdGJvcmRlckNvbG9yOiBkYXJrZW4oYm9yZGVyQ29sb3IsIDE1KSxcblx0XHRib3hTaGFkb3c6ICdub25lJyxcblx0XHRjb2xvcjogdGV4dENvbG9yLFxuXHRcdG91dGxpbmU6ICdub25lJyxcblx0fTtcblx0Y29uc3QgZm9jdXNPbmx5U3R5bGVzID0ge1xuXHRcdGJveFNoYWRvdzogYDAgMCAwIDNweCAke2ZhZGUoYm9yZGVyQ29sb3IsIDEwKX1gLFxuXHR9O1xuXHRjb25zdCBhY3RpdmVTdHlsZXMgPSB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBmYWRlKGJvcmRlckNvbG9yLCAzNSksXG5cdFx0Ym9yZGVyQ29sb3I6IGRhcmtlbihib3JkZXJDb2xvciwgMjUpLFxuXHRcdGJveFNoYWRvdzogJ25vbmUnLFxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0YmFzZToge1xuXHRcdFx0J2JhY2tncm91bmQnOiAnbm9uZScsXG5cdFx0XHQnYm9yZGVyQ29sb3InOiBib3JkZXJDb2xvcixcblx0XHRcdCdjb2xvcic6IHRleHRDb2xvcixcblxuXHRcdFx0Jzpob3Zlcic6IGZvY3VzQW5kSG92ZXJTdHlsZXMsXG5cdFx0XHQnOmZvY3VzICc6IE9iamVjdC5hc3NpZ24oe30sIGZvY3VzQW5kSG92ZXJTdHlsZXMsIGZvY3VzT25seVN0eWxlcyksXG5cdFx0XHQnOmFjdGl2ZSc6IGFjdGl2ZVN0eWxlcyxcblx0XHR9LFxuXHRcdGFjdGl2ZTogYWN0aXZlU3R5bGVzLFxuXHR9O1xufTtcbmV4cG9ydHMuaG9sbG93ID0gKGNvbG9yKSA9PiB7XG5cdC8vIFRPRE86IGJldHRlciBoYW5kbGluZyBvZiBjYW5jZWwgYW5kIGRlbGV0ZSBjb2xvcnNcblx0aWYgKGNvbG9yID09PSAnY2FuY2VsJyB8fCBjb2xvciA9PT0gJ2RlbGV0ZScpIGNvbG9yID0gJ2Rhbmdlcic7XG5cblx0cmV0dXJuIGJ1dHRvbkhvbGxvd1ZhcmlhbnQodGhlbWUuYnV0dG9uW2NvbG9yXS5iZ0NvbG9yLCB0aGVtZS5idXR0b25bY29sb3JdLmJvcmRlckNvbG9yKTtcbn07XG5cblxuLy8gTGluayBWYXJpYW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBidXR0b25MaW5rVmFyaWFudCAodGV4dENvbG9yLCBob3ZlckNvbG9yKSB7XG5cdGNvbnN0IGhvdmVyU3R5bGVzID0ge1xuXHRcdGNvbG9yOiBob3ZlckNvbG9yLFxuXHRcdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcblx0fTtcblx0cmV0dXJuIHtcblx0XHRiYXNlOiB7XG5cdFx0XHQnYmFja2dyb3VuZCc6ICdub25lJyxcblx0XHRcdCdib3JkZXInOiAwLFxuXHRcdFx0J2JveFNoYWRvdyc6ICdub25lJyxcblx0XHRcdCdjb2xvcic6IHRleHRDb2xvcixcblx0XHRcdCdmb250V2VpZ2h0JzogJ25vcm1hbCcsXG5cdFx0XHQnb3V0bGluZSc6ICdub25lJyxcblxuXHRcdFx0Jzpob3Zlcic6IGhvdmVyU3R5bGVzLFxuXHRcdFx0Jzpmb2N1cyc6IGhvdmVyU3R5bGVzLFxuXHRcdFx0JzphY3RpdmUnOiBob3ZlclN0eWxlcyxcblx0XHR9LFxuXHRcdGFjdGl2ZTogaG92ZXJTdHlsZXMsXG5cdH07XG59O1xuZnVuY3Rpb24gYnV0dG9uTGlua0RlbGV0ZSAoKSB7XG5cdGNvbnN0IHN0eWxlcyA9IGJ1dHRvbkxpbmtWYXJpYW50KHRoZW1lLmNvbG9yLmdyYXk0MCwgdGhlbWUuY29sb3IuZGFuZ2VyKTtcblx0Y29uc3QgaG92ZXJTdHlsZXMgPSB7XG5cdFx0Li4uZ3JhZGllbnRWZXJ0aWNhbChsaWdodGVuKHRoZW1lLmNvbG9yLmRhbmdlciwgMTApLCBkYXJrZW4odGhlbWUuY29sb3IuZGFuZ2VyLCAxMCkpLFxuXHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IuZGFuZ2VyLFxuXHRcdGJvcmRlckNvbG9yOiBgJHtkYXJrZW4odGhlbWUuY29sb3IuZGFuZ2VyLCA0KX0gJHtkYXJrZW4odGhlbWUuY29sb3IuZGFuZ2VyLCA4KX0gJHtkYXJrZW4odGhlbWUuY29sb3IuZGFuZ2VyLCAxMil9YCxcblx0XHRib3hTaGFkb3c6ICcwIDFweCAwIHJnYmEoMCwwLDAsMC4xKScsXG5cdFx0Y29sb3I6ICd3aGl0ZScsXG5cdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0fTtcblx0Y29uc3QgYWN0aXZlU3R5bGVzID0ge1xuXHRcdGJhY2tncm91bmRDb2xvcjogZGFya2VuKHRoZW1lLmNvbG9yLmRhbmdlciwgNCksXG5cdFx0YmFja2dyb3VuZEltYWdlOiAnbm9uZScsXG5cdFx0Ym9yZGVyQ29sb3I6IGAke2Rhcmtlbih0aGVtZS5jb2xvci5kYW5nZXIsIDEyKX0gJHtkYXJrZW4odGhlbWUuY29sb3IuZGFuZ2VyLCA4KX0gJHtkYXJrZW4odGhlbWUuY29sb3IuZGFuZ2VyLCA4KX1gLFxuXHRcdGJveFNoYWRvdzogJ2luc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSknLFxuXHRcdGNvbG9yOiAnd2hpdGUnLFxuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdGJhc2U6IHtcblx0XHRcdC4uLnN0eWxlcy5iYXNlLFxuXHRcdFx0Jzpob3Zlcic6IGhvdmVyU3R5bGVzLFxuXHRcdFx0Jzpmb2N1cyc6IGhvdmVyU3R5bGVzLFxuXHRcdFx0JzphY3RpdmUnOiBhY3RpdmVTdHlsZXMsXG5cdFx0fSxcblx0XHRhY3RpdmU6IGFjdGl2ZVN0eWxlcyxcblx0fTtcbn1cblxuZXhwb3J0cy5saW5rID0gKGNvbG9yKSA9PiB7XG5cdHN3aXRjaCAoY29sb3IpIHtcblx0XHRjYXNlICdkZWZhdWx0Jzpcblx0XHRcdHJldHVybiBidXR0b25MaW5rVmFyaWFudCh0aGVtZS5jb2xvci5saW5rLCB0aGVtZS5jb2xvci5saW5rSG92ZXIpO1xuXHRcdGNhc2UgJ2NhbmNlbCc6XG5cdFx0XHRyZXR1cm4gYnV0dG9uTGlua1ZhcmlhbnQodGhlbWUuY29sb3IuZ3JheTQwLCB0aGVtZS5jb2xvci5kYW5nZXIpO1xuXHRcdGNhc2UgJ2RlbGV0ZSc6XG5cdFx0XHRyZXR1cm4gYnV0dG9uTGlua0RlbGV0ZSgpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gYnV0dG9uTGlua1ZhcmlhbnQodGhlbWUuY29sb3JbY29sb3JdLCB0aGVtZS5jb2xvcltjb2xvcl0pO1xuXHR9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmZ1bmN0aW9uIENlbnRlciAoe1xuXHRjbGFzc05hbWUsXG5cdGNvbXBvbmVudDogQ29tcG9uZW50LFxuXHRoZWlnaHQsXG5cdHN0eWxlLFxuXHQuLi5wcm9wc1xufSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoY2xhc3Nlcy5jZW50ZXIsIGNsYXNzTmFtZSk7XG5cdHByb3BzLnN0eWxlID0geyBoZWlnaHQsIC4uLnN0eWxlIH07XG5cblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbn07XG5DZW50ZXIucHJvcFR5cGVzID0ge1xuXHRjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5mdW5jLFxuXHRcdFByb3BUeXBlcy5zdHJpbmcsXG5cdF0pLFxuXHRoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5udW1iZXIsXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XSksXG59O1xuQ2VudGVyLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnZGl2Jyxcblx0aGVpZ2h0OiAnYXV0bycsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENlbnRlcjtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2VudGVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNlbnRlcjoge1xuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdH0sXG59O1xuIiwiaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcbmltcG9ydCB7IGZhZGUsIGxpZ2h0ZW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb2xvcic7XG5cbmNvbnN0IGJhc2VDb2xvcnMgPSB7fTtcblsnZGFuZ2VyJywgJ2luZm8nLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnXS5mb3JFYWNoKGNvbG9yID0+IHtcblx0YmFzZUNvbG9yc1tjb2xvcl0gPSB7XG5cdFx0YmFja2dyb3VuZDogZmFkZSh0aGVtZS5jb2xvcltjb2xvcl0sIDEwKSxcblx0XHRiYWNrZ3JvdW5kQWN0aXZlOiBmYWRlKHRoZW1lLmNvbG9yW2NvbG9yXSwgMjApLFxuXHRcdGJhY2tncm91bmRIb3ZlcjogZmFkZSh0aGVtZS5jb2xvcltjb2xvcl0sIDE1KSxcblx0XHR0ZXh0OiB0aGVtZS5jb2xvcltjb2xvcl0sXG5cdH07XG59KTtcbmNvbnN0IGludmVydGVkQ29sb3JzID0ge307XG5bJ2RhbmdlcicsICdpbmZvJywgJ3ByaW1hcnknLCAnc3VjY2VzcycsICd3YXJuaW5nJ10uZm9yRWFjaChjb2xvciA9PiB7XG5cdGludmVydGVkQ29sb3JzW2NvbG9yICsgJ19faW52ZXJ0ZWQnXSA9IHtcblx0XHRiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcltjb2xvcl0sXG5cdFx0YmFja2dyb3VuZEFjdGl2ZTogbGlnaHRlbih0aGVtZS5jb2xvcltjb2xvcl0sIDUpLFxuXHRcdGJhY2tncm91bmRIb3ZlcjogbGlnaHRlbih0aGVtZS5jb2xvcltjb2xvcl0sIDE1KSxcblx0XHR0ZXh0OiAnd2hpdGUnLFxuXHR9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkZWZhdWx0OiB7XG5cdFx0YmFja2dyb3VuZDogdGhlbWUuY29sb3IuZ3JheTEwLFxuXHRcdGJhY2tncm91bmRBY3RpdmU6IHRoZW1lLmNvbG9yLmdyYXkyMCxcblx0XHRiYWNrZ3JvdW5kSG92ZXI6IHRoZW1lLmNvbG9yLmdyYXkxNSxcblx0XHR0ZXh0OiB0aGVtZS5jb2xvci5ncmF5NjAsXG5cdH0sXG5cdC4uLmJhc2VDb2xvcnMsXG5cblx0Ly8gaW52ZXJ0ZWRcblx0ZGVmYXVsdF9faW52ZXJ0ZWQ6IHtcblx0XHRiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvci5ncmF5NjAsXG5cdFx0YmFja2dyb3VuZEFjdGl2ZTogbGlnaHRlbih0aGVtZS5jb2xvci5ncmF5NjAsIDUpLFxuXHRcdGJhY2tncm91bmRIb3ZlcjogbGlnaHRlbih0aGVtZS5jb2xvci5ncmF5NjAsIDE1KSxcblx0XHR0ZXh0OiAnd2hpdGUnLFxuXHR9LFxuXHQuLi5pbnZlcnRlZENvbG9ycyxcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuXG5mdW5jdGlvbiBDaGlwICh7XG5cdGNsYXNzTmFtZSxcblx0Y2hpbGRyZW4sXG5cdGNvbG9yLFxuXHRpbnZlcnRlZCxcblx0bGFiZWwsXG5cdG9uQ2xlYXIsXG5cdG9uQ2xpY2ssXG5cdC4uLnByb3BzXG59KSB7XG5cdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRjbGFzc2VzLmNoaXAsXG5cdFx0Y2xhc3NOYW1lXG5cdCk7XG5cdGNvbnN0IGxhYmVsQ2xhc3NOYW1lID0gY3NzKFxuXHRcdGNsYXNzZXMuYnV0dG9uLFxuXHRcdGNsYXNzZXMubGFiZWwsXG5cdFx0Y2xhc3Nlc1snYnV0dG9uX18nICsgY29sb3IgKyAoaW52ZXJ0ZWQgPyAnX19pbnZlcnRlZCcgOiAnJyldXG5cdCk7XG5cdGNvbnN0IGNsZWFyQ2xhc3NOYW1lID0gY3NzKFxuXHRcdGNsYXNzZXMuYnV0dG9uLFxuXHRcdGNsYXNzZXMuY2xlYXIsXG5cdFx0Y2xhc3Nlc1snYnV0dG9uX18nICsgY29sb3IgKyAoaW52ZXJ0ZWQgPyAnX19pbnZlcnRlZCcgOiAnJyldXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHsuLi5wcm9wc30+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2xhYmVsQ2xhc3NOYW1lfT5cblx0XHRcdFx0e2xhYmVsfVxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdHshIW9uQ2xlYXIgJiYgKFxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsZWFyfSBjbGFzc05hbWU9e2NsZWFyQ2xhc3NOYW1lfT5cblx0XHRcdFx0XHQmdGltZXM7XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkNoaXAucHJvcFR5cGVzID0ge1xuXHRjb2xvcjogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKGNvbG9ycykpLmlzUmVxdWlyZWQsXG5cdGludmVydGVkOiBQcm9wVHlwZXMuYm9vbCxcblx0bGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0b25DbGVhcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG5cdG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxufTtcbkNoaXAuZGVmYXVsdFByb3BzID0ge1xuXHRjb2xvcjogJ2RlZmF1bHQnLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGlwO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBbGVydFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJhcy1uZWVkZWRcIl0gKi9cblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuaW1wb3J0IHsgYm9yZGVyTGVmdFJhZGl1cywgYm9yZGVyUmlnaHRSYWRpdXMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jc3MnO1xuXG4vLyBQcmVwYXJlIHZhcmlhbnRzXG5jb25zdCBjb2xvclZhcmlhbnRzID0ge307XG5PYmplY3Qua2V5cyhjb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuXHRjb25zdCBob3ZlclN0eWxlcyA9IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1tjb2xvcl0uYmFja2dyb3VuZEhvdmVyLFxuXHR9O1xuXG5cdGNvbG9yVmFyaWFudHNbJ2J1dHRvbl9fJyArIGNvbG9yXSA9IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1tjb2xvcl0uYmFja2dyb3VuZCxcblx0XHRjb2xvcjogY29sb3JzW2NvbG9yXS50ZXh0LFxuXG5cdFx0Jzpob3Zlcic6IGhvdmVyU3R5bGVzLFxuXHRcdCc6Zm9jdXMnOiBob3ZlclN0eWxlcyxcblx0XHQnOmFjdGl2ZSc6IHtcblx0XHRcdGJhY2tncm91bmRDb2xvcjogY29sb3JzW2NvbG9yXS5iYWNrZ3JvdW5kQWN0aXZlLFxuXHRcdH0sXG5cdH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNoaXA6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRmb250U2l6ZTogdGhlbWUuZm9udC5zaXplLnNtYWxsLFxuXHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRtYXJnaW5SaWdodDogJzAuNWVtJyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0bGluZUhlaWdodDogJzIuMmVtJyxcblx0fSxcblxuXHQvLyB0YWduYW1lc1xuXHRidXR0b246IHtcblx0XHRhcHBlYXJhbmNlOiAnbm9uZScsXG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdGJvcmRlcjogJ25vbmUnLFxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0ZmxvYXQ6ICdsZWZ0Jyxcblx0XHRwYWRkaW5nOiAnMCAuOWVtJyxcblx0XHRvdXRsaW5lOiAnbm9uZScsXG5cblx0XHQvLyBtYWtlIHBpbGxzIC0gZXhhZ2dlcmF0ZSB0aGUgcGFkZGluZyB0b3dhcmQgdGhlIHJhZGlpIHNvIGl0IGxvb2tzIGV2ZW5cblx0XHQnOmZpcnN0LWNoaWxkJzoge1xuXHRcdFx0Li4uYm9yZGVyTGVmdFJhZGl1cygnM2VtJyksXG5cdFx0XHRwYWRkaW5nTGVmdDogJzEuMWVtJyxcblx0XHR9LFxuXHRcdCc6bGFzdC1jaGlsZCc6IHtcblx0XHRcdC4uLmJvcmRlclJpZ2h0UmFkaXVzKCczZW0nKSxcblx0XHRcdHBhZGRpbmdSaWdodDogJzEuMWVtJyxcblx0XHR9LFxuXHR9LFxuXG5cblx0Ly8gcHJvdmlkZSBzZXBhcmF0aW9uIGJldHdlZW4gdGhlIGxhYmVsIGFuZCBjbGVhciBidXR0b25zXG5cdC8vIGZsb2F0aW5nIHN0b3BzIHRoZSBtYXJnaW5zIGZyb20gY29sbGFwc2luZyBpbnRvIGVhY2hpbmdcblxuXHRsYWJlbDogeyBtYXJnaW5SaWdodDogMSB9LFxuXHRjbGVhcjogeyBtYXJnaW5MZWZ0OiAxIH0sXG5cblx0Ly8gY29sb3JzXG5cdC4uLmNvbG9yVmFyaWFudHMsXG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgc2l6ZXMgZnJvbSAnLi9zaXplcyc7XG5cbmZ1bmN0aW9uIENvbnRhaW5lciAoe1xuXHRjbGFzc05hbWUsXG5cdGNsZWFyRmxvYXRpbmdDaGlsZHJlbixcblx0Y29tcG9uZW50OiBDb21wb25lbnQsXG5cdHdpZHRoLFxuXHQuLi5wcm9wc1xufSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlcy5jb250YWluZXIsXG5cdFx0Y2xhc3Nlc1t3aWR0aF0sXG5cdFx0Y2xlYXJGbG9hdGluZ0NoaWxkcmVuID8gY2xhc3Nlcy5jbGVhcmZpeCA6IG51bGwsXG5cdFx0Y2xhc3NOYW1lXG5cdCk7XG5cblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbn07XG5cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG5cdGNsZWFyRmxvYXRpbmdDaGlsZHJlbjogUHJvcFR5cGVzLmJvb2wsXG5cdGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLmZ1bmMsXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XSkuaXNSZXF1aXJlZCxcblx0d2lkdGg6IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhzaXplcykpLmlzUmVxdWlyZWQsXG59O1xuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnZGl2Jyxcblx0d2lkdGg6ICdsYXJnZScsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhaW5lcjtcbiIsImltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzbWFsbDogdGhlbWUuY29udGFpbmVyLnNpemUuc21hbGwsXG5cdG1lZGl1bTogdGhlbWUuY29udGFpbmVyLnNpemUubWVkaXVtLFxuXHRsYXJnZTogdGhlbWUuY29udGFpbmVyLnNpemUubGFyZ2UsXG59O1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiBlc2xpbnQgcXVvdGUtcHJvcHM6IFtcImVycm9yXCIsIFwiYXMtbmVlZGVkXCJdICovXG5cbmltcG9ydCBzaXplcyBmcm9tICcuL3NpemVzJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbi8vIFByZXBhcmUgc2l6ZXNcbmNvbnN0IHNpemVWYXJpYW50cyA9IHt9O1xuT2JqZWN0LmtleXMoc2l6ZXMpLmZvckVhY2goc2l6ZSA9PiB7XG5cdHNpemVWYXJpYW50c1tzaXplXSA9IHtcblx0XHRtYXhXaWR0aDogc2l6ZXNbc2l6ZV0sXG5cdH07XG59KTtcblxuLypcblx0TWljcm8gY2xlYXJmaXggaGFja1xuXHQxLlx0VGhlIHNwYWNlIGNvbnRlbnQgaXMgb25lIHdheSB0byBhdm9pZCBhbiBPcGVyYSBidWcgd2hlbiB0aGVcblx0XHRcdGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUgaXMgaW5jbHVkZWQgYW55d2hlcmUgZWxzZSBpbiB0aGUgZG9jdW1lbnQuXG5cdFx0XHRPdGhlcndpc2UgaXQgY2F1c2VzIHNwYWNlIHRvIGFwcGVhciBhdCB0aGUgdG9wIGFuZCBib3R0b20gb2YgZWxlbWVudHNcblx0XHRcdHRoYXQgYXJlIGNsZWFyZml4ZWQuXG5cdDIuXHRUaGUgdXNlIG9mIGB0YWJsZWAgcmF0aGVyIHRoYW4gYGJsb2NrYCBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB1c2luZ1xuXHRcdFx0YDpiZWZvcmVgIHRvIGNvbnRhaW4gdGhlIHRvcC1tYXJnaW5zIG9mIGNoaWxkIGVsZW1lbnRzLlxuKi9cbmNvbnN0IGNsZWFyZml4U3R5bGVzID0ge1xuXHRjbGVhcjogJ2JvdGgnLFxuXHRjb250ZW50OiAnXCIgXCInLCAvLyAxXG5cdGRpc3BsYXk6ICd0YWJsZScsIC8vIDJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHRtYXJnaW5MZWZ0OiAnYXV0bycsXG5cdFx0bWFyZ2luUmlnaHQ6ICdhdXRvJyxcblx0XHRwYWRkaW5nTGVmdDogdGhlbWUuY29udGFpbmVyLmd1dHRlcixcblx0XHRwYWRkaW5nUmlnaHQ6IHRoZW1lLmNvbnRhaW5lci5ndXR0ZXIsXG5cdH0sXG5cblx0Ly8gY2xlYXIgZmxvYXRpbmcgY2hpbGRyZW5cblx0Y2xlYXJmaXg6IHtcblx0XHQnOmJlZm9yZSc6IGNsZWFyZml4U3R5bGVzLFxuXHRcdCc6YWZ0ZXInOiBjbGVhcmZpeFN0eWxlcyxcblx0fSxcblxuXHQvLyBzaXplc1xuXHQuLi5zaXplVmFyaWFudHMsXG59O1xuIiwiLyogZXNsaW50IHF1b3RlLXByb3BzOiBbXCJlcnJvclwiLCBcImFzLW5lZWRlZFwiXSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcblxuZnVuY3Rpb24gRHJvcGRvd25CdXR0b24gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8QnV0dG9uIHsuLi5wcm9wc30+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmFycm93KX0gLz5cblx0XHQ8L0J1dHRvbj5cblx0KTtcbn07XG5cbi8vIE5PVEVcbi8vIDE6IHRha2UgYWR2YW50YWdlIG9mIGBjdXJyZW50Q29sb3JgIGJ5IGxlYXZpbmcgYm9yZGVyIHRvcCBjb2xvciB1bmRlZmluZWRcbi8vIDI6IGV2ZW4gdGhvdWdoIHRoZSBhcnJvdyBpcyB2ZXJ0aWNhbGx5IGNlbnRlcmVkLCB2aXN1YWxseSBpdCBhcHBlYXJzIHRvbyBsb3dcbi8vICAgIGJlY2F1c2Ugb2YgbG93ZXJjYXNlIGNoYXJhY3RlcnMgYmVzaWRlIGl0XG5jb25zdCBjbGFzc2VzID0ge1xuXHRhcnJvdzoge1xuXHRcdGJvcmRlckxlZnQ6ICcwLjNlbSBzb2xpZCB0cmFuc3BhcmVudCcsXG5cdFx0Ym9yZGVyUmlnaHQ6ICcwLjNlbSBzb2xpZCB0cmFuc3BhcmVudCcsXG5cdFx0Ym9yZGVyVG9wOiAnMC4zZW0gc29saWQnLCAvLyAxXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0aGVpZ2h0OiAwLFxuXHRcdG1hcmdpblRvcDogJy0wLjEyNWVtJywgLy8gMlxuXHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdHdpZHRoOiAwLFxuXG5cdFx0Ly8gYWRkIHNwYWNpbmdcblx0XHQnOmZpcnN0LWNoaWxkJzoge1xuXHRcdFx0bWFyZ2luUmlnaHQ6ICcwLjVlbScsXG5cdFx0fSxcblx0XHQnOmxhc3QtY2hpbGQnOiB7XG5cdFx0XHRtYXJnaW5MZWZ0OiAnMC41ZW0nLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERyb3Bkb3duQnV0dG9uO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzJztcblxuY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGdldENoaWxkQ29udGV4dCAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGZvcm1MYXlvdXQ6IHRoaXMucHJvcHMubGF5b3V0LFxuXHRcdFx0bGFiZWxXaWR0aDogdGhpcy5wcm9wcy5sYWJlbFdpZHRoLFxuXHRcdH07XG5cdH1cblx0cmVuZGVyICgpIHtcblx0XHQvLyBOT1RFIGBsYWJlbFdpZHRoYCBpcyBkZWNsYXJlZCB0byByZW1vdmUgaXQgZnJvbSBgcHJvcHNgLCB0aG91Z2ggbmV2ZXIgdXNlZFxuXHRcdGNvbnN0IHtcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGNvbXBvbmVudDogQ29tcG9uZW50LFxuXHRcdFx0bGFiZWxXaWR0aCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXHRcdFx0bGF5b3V0LFxuXHRcdFx0Li4ucHJvcHNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRcdGNsYXNzZXMuRm9ybSxcblx0XHRcdGNsYXNzZXNbJ0Zvcm1fXycgKyBsYXlvdXRdLFxuXHRcdFx0Y2xhc3NOYW1lXG5cdFx0KTtcblxuXHRcdHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG5cdH1cbn07XG5cbkZvcm0uY2hpbGRDb250ZXh0VHlwZXMgPSB7XG5cdGZvcm1MYXlvdXQ6IFByb3BUeXBlcy5vbmVPZihbJ2Jhc2ljJywgJ2hvcml6b250YWwnLCAnaW5saW5lJ10pLFxuXHRsYWJlbFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMubnVtYmVyLFxuXHRcdFByb3BUeXBlcy5zdHJpbmcsXG5cdF0pLFxufTtcbkZvcm0ucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblx0Y29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdFByb3BUeXBlcy5mdW5jLFxuXHRdKSxcblx0bGF5b3V0OiBQcm9wVHlwZXMub25lT2YoWydiYXNpYycsICdob3Jpem9udGFsJywgJ2lubGluZSddKSxcbn07XG5Gb3JtLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnZm9ybScsXG5cdGxheW91dDogJ2Jhc2ljJyxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRm9ybVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRGb3JtOiB7fSxcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJy4uL0Zvcm1MYWJlbCc7XG5cbmNsYXNzIEZvcm1GaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZm9ybUZpZWxkSWQgPSBnZW5lcmF0ZUlkKCk7XG5cdH1cblx0Z2V0Q2hpbGRDb250ZXh0ICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Zm9ybUZpZWxkSWQ6IHRoaXMuZm9ybUZpZWxkSWQsXG5cdFx0fTtcblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdGNvbnN0IHsgZm9ybUxheW91dCA9ICdiYXNpYycsIGxhYmVsV2lkdGggfSA9IHRoaXMuY29udGV4dDtcblx0XHRjb25zdCB7XG5cdFx0XHRjc3NTdHlsZXMsXG5cdFx0XHRjaGlsZHJlbixcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGNyb3BMYWJlbCxcblx0XHRcdGh0bWxGb3IsXG5cdFx0XHRsYWJlbCxcblx0XHRcdG9mZnNldEFic2VudExhYmVsLFxuXHRcdFx0Li4ucHJvcHNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRcdGNsYXNzZXMuRm9ybUZpZWxkLFxuXHRcdFx0Y2xhc3Nlc1snRm9ybUZpZWxkLS1mb3JtLWxheW91dC0nICsgZm9ybUxheW91dF0sXG5cdFx0XHRvZmZzZXRBYnNlbnRMYWJlbCA/IGNsYXNzZXNbJ0Zvcm1GaWVsZC0tb2Zmc2V0LWFic2VudC1sYWJlbCddIDogbnVsbCxcblx0XHRcdGNzc1N0eWxlc1xuXHRcdCk7XG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0cHJvcHMuY2xhc3NOYW1lICs9ICgnICcgKyBjbGFzc05hbWUpO1xuXHRcdH1cblx0XHRpZiAob2Zmc2V0QWJzZW50TGFiZWwgJiYgbGFiZWxXaWR0aCkge1xuXHRcdFx0cHJvcHMuc3R5bGUgPSB7XG5cdFx0XHRcdHBhZGRpbmdMZWZ0OiBsYWJlbFdpZHRoLFxuXHRcdFx0XHQuLi5wcm9wcy5zdHlsZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gZWxlbWVudHNcblx0XHRjb25zdCBjb21wb25lbnRMYWJlbCA9IGxhYmVsID8gKFxuXHRcdFx0PEZvcm1MYWJlbCBodG1sRm9yPXtodG1sRm9yfSBjcm9wVGV4dD17Y3JvcExhYmVsfT5cblx0XHRcdFx0e2xhYmVsfVxuXHRcdFx0PC9Gb3JtTGFiZWw+XG5cdFx0KSA6IG51bGw7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiB7Li4ucHJvcHN9IGh0bWxGb3I9e2h0bWxGb3J9PlxuXHRcdFx0XHR7Y29tcG9uZW50TGFiZWx9XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn07XG5cbmNvbnN0IHN0eWxlc1NoYXBlID0ge1xuXHRfZGVmaW5pdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcblx0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Gb3JtRmllbGQuY29udGV4dFR5cGVzID0ge1xuXHRmb3JtTGF5b3V0OiBQcm9wVHlwZXMub25lT2YoWydiYXNpYycsICdob3Jpem9udGFsJywgJ2lubGluZSddKSxcblx0bGFiZWxXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLm51bWJlcixcblx0XHRQcm9wVHlwZXMuc3RyaW5nLFxuXHRdKSxcbn07XG5Gb3JtRmllbGQuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG5cdGZvcm1GaWVsZElkOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkZvcm1GaWVsZC5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblx0Y3JvcExhYmVsOiBQcm9wVHlwZXMuYm9vbCxcblx0Y3NzU3R5bGVzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoc3R5bGVzU2hhcGUpKSxcblx0XHRQcm9wVHlwZXMuc2hhcGUoc3R5bGVzU2hhcGUpLFxuXHRdKSxcblx0aHRtbEZvcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0bGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdG9mZnNldEFic2VudExhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSWQgKCkge1xuXHRyZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtRmllbGQ7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZvcm0gRmllbGRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0J0Zvcm1GaWVsZCc6IHtcblx0XHRtYXJnaW5Cb3R0b206ICcxZW0nLFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHR9LFxuXG5cdC8vIHdoZW4gaW5zaWRlIGEgaG9yaXpvbnRhbCBmb3JtXG5cblx0J0Zvcm1GaWVsZC0tZm9ybS1sYXlvdXQtaG9yaXpvbnRhbCc6IHtcblx0XHRbYEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnQudGFibGV0TGFuZHNjYXBlTWlufSlgXToge1xuXHRcdFx0ZGlzcGxheTogJ3RhYmxlJyxcblx0XHRcdHRhYmxlTGF5b3V0OiAnZml4ZWQnLFxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIGluc2lkZSBob3Jpem9udGFsIGZvcm1cblx0Ly8gdHlwaWNhbGx5IGZvciB1c2Ugd2l0aCBzdWJtaXQgYnV0dG9uIGluc2lkZVxuXHQnRm9ybUZpZWxkLS1vZmZzZXQtYWJzZW50LWxhYmVsJzoge1xuXHRcdHBhZGRpbmdMZWZ0OiB0aGVtZS5mb3JtLmxhYmVsLndpZHRoLFxuXHR9LFxuXG5cdC8vIHdoZW4gaW5zaWRlIGFuIGlubGluZSBmb3JtXG5cblx0J0Zvcm1GaWVsZC0tZm9ybS1sYXlvdXQtaW5saW5lJzoge1xuXHRcdCdkaXNwbGF5JzogJ2lubGluZS1ibG9jaycsXG5cdFx0J3BhZGRpbmdMZWZ0JzogJzAuMjVlbScsXG5cdFx0J3BhZGRpbmdSaWdodCc6ICcwLjI1ZW0nLFxuXHRcdCd2ZXJ0aWNhbEFsaWduJzogJ3RvcCcsXG5cblx0XHQnOmZpcnN0LWNoaWxkJzogeyBwYWRkaW5nTGVmdDogMCB9LFxuXHRcdCc6bGFzdC1jaGlsZCc6IHsgcGFkZGluZ1JpZ2h0OiAwIH0sXG5cdH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBjb25jYXRDbGFzc25hbWVzIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbmNhdENsYXNzbmFtZXMnO1xuaW1wb3J0IElucHV0Tm9lZGl0IGZyb20gJy4vbm9lZGl0JztcblxuLy8gTk9URSBtdXN0IE5PVCBiZSBmdW5jdGlvbmFsIGNvbXBvbmVudCB0byBhbGxvdyBgcmVmc2BcblxuY2xhc3MgRm9ybUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Ymx1ciAoKSB7XG5cdFx0dGhpcy50YXJnZXQuYmx1cigpO1xuXHR9XG5cdGZvY3VzICgpIHtcblx0XHR0aGlzLnRhcmdldC5mb2N1cygpO1xuXHR9XG5cdHJlbmRlciAoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Y3NzU3R5bGVzLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0ZGlzYWJsZWQsXG5cdFx0XHRpZCxcblx0XHRcdG11bHRpbGluZSxcblx0XHRcdG5vZWRpdCxcblx0XHRcdHNpemUsXG5cdFx0XHQuLi5wcm9wc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Ly8gTk9URSByZXR1cm4gYSBkaWZmZXJlbnQgY29tcG9uZW50IGZvciBgbm9lZGl0YFxuXHRcdGlmIChub2VkaXQpIHJldHVybiA8SW5wdXROb2VkaXQgey4uLnRoaXMucHJvcHN9IC8+O1xuXG5cdFx0Y29uc3QgeyBmb3JtRmllbGRJZCwgZm9ybUxheW91dCB9ID0gdGhpcy5jb250ZXh0O1xuXG5cdFx0cHJvcHMuaWQgPSBpZCB8fCBmb3JtRmllbGRJZDtcblx0XHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoXG5cdFx0XHRjbGFzc2VzLkZvcm1JbnB1dCxcblx0XHRcdGNsYXNzZXNbJ0Zvcm1JbnB1dF9fc2l6ZS0tJyArIHNpemVdLFxuXHRcdFx0ZGlzYWJsZWQgPyBjbGFzc2VzWydGb3JtSW5wdXQtLWRpc2FibGVkJ10gOiBudWxsLFxuXHRcdFx0Zm9ybUxheW91dCA/IGNsYXNzZXNbJ0Zvcm1JbnB1dC0tZm9ybS1sYXlvdXQtJyArIGZvcm1MYXlvdXRdIDogbnVsbCxcblx0XHRcdC4uLmNvbmNhdENsYXNzbmFtZXMoY3NzU3R5bGVzKVxuXHRcdCk7XG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0cHJvcHMuY2xhc3NOYW1lICs9ICgnICcgKyBjbGFzc05hbWUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNldFJlZiA9IChuKSA9PiAodGhpcy50YXJnZXQgPSBuKTtcblx0XHRjb25zdCBUYWcgPSBtdWx0aWxpbmUgPyAndGV4dGFyZWEnIDogJ2lucHV0JztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFnXG5cdFx0XHRcdHJlZj17c2V0UmVmfVxuXHRcdFx0XHRkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdHsuLi5wcm9wc31cblx0XHRcdC8+XG5cdFx0KTtcblx0fVxufTtcblxuY29uc3Qgc3R5bGVzU2hhcGUgPSB7XG5cdF9kZWZpbml0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkZvcm1JbnB1dC5wcm9wVHlwZXMgPSB7XG5cdGNzc1N0eWxlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHN0eWxlc1NoYXBlKSksXG5cdFx0UHJvcFR5cGVzLnNoYXBlKHN0eWxlc1NoYXBlKSxcblx0XSksXG5cdG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG5cdHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnc21hbGwnLCAnbGFyZ2UnXSksXG5cdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuRm9ybUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcblx0c2l6ZTogJ2RlZmF1bHQnLFxuXHR0eXBlOiAndGV4dCcsXG59O1xuRm9ybUlucHV0LmNvbnRleHRUeXBlcyA9IHtcblx0Zm9ybUxheW91dDogUHJvcFR5cGVzLm9uZU9mKFsnYmFzaWMnLCAnaG9yaXpvbnRhbCcsICdpbmxpbmUnXSksXG5cdGZvcm1GaWVsZElkOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcbmltcG9ydCB7IGZhZGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb2xvcic7XG5cbi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJhcy1uZWVkZWRcIl0gKi9cblxuZnVuY3Rpb24gRm9ybUlucHV0Tm9lZGl0ICh7XG5cdGNsYXNzTmFtZSxcblx0Y29tcG9uZW50OiBDb21wb25lbnQsXG5cdGNyb3BUZXh0LFxuXHRtdWx0aWxpbmUsXG5cdG5vZWRpdCwgLy8gTk9URSBub3QgdXNlZCwganVzdCByZW1vdmVkIGZyb20gcHJvcHNcblx0dHlwZSxcblx0Li4ucHJvcHNcbn0pIHtcblx0cHJvcHMuY2xhc3NOYW1lID0gY3NzKFxuXHRcdGNsYXNzZXMubm9lZGl0LFxuXHRcdGNyb3BUZXh0ID8gY2xhc3Nlcy5jcm9wVGV4dCA6IG51bGwsXG5cdFx0bXVsdGlsaW5lID8gY2xhc3Nlcy5tdWx0aWxpbmUgOiBudWxsLFxuXHRcdChwcm9wcy5ocmVmIHx8IHByb3BzLm9uQ2xpY2spID8gY2xhc3Nlcy5hbmNob3IgOiBudWxsLFxuXHRcdGNsYXNzTmFtZVxuXHQpO1xuXG5cdHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG59O1xuXG5Gb3JtSW5wdXROb2VkaXQucHJvcFR5cGVzID0ge1xuXHRjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0UHJvcFR5cGVzLmZ1bmMsXG5cdF0pLFxuXHRjcm9wVGV4dDogUHJvcFR5cGVzLmJvb2wsXG59O1xuRm9ybUlucHV0Tm9lZGl0LmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnc3BhbicsXG59O1xuXG5jb25zdCBhbmNob3JIb3ZlckFuZEZvY3VzU3R5bGVzID0ge1xuXHRiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUuY29sb3IubGluaywgMTApLFxuXHRib3JkZXJDb2xvcjogZmFkZSh0aGVtZS5jb2xvci5saW5rLCAxMCksXG5cdGNvbG9yOiB0aGVtZS5jb2xvci5saW5rLFxuXHRvdXRsaW5lOiAnbm9uZScsXG5cdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSB7XG5cdG5vZWRpdDoge1xuXHRcdGFwcGVhcmFuY2U6ICdub25lJyxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmlucHV0LmJhY2tncm91bmQubm9lZGl0LFxuXHRcdGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuXHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3Iubm9lZGl0LFxuXHRcdGJvcmRlclJhZGl1czogdGhlbWUuaW5wdXQuYm9yZGVyLnJhZGl1cyxcblx0XHRib3JkZXJTdHlsZTogJ3NvbGlkJyxcblx0XHRib3JkZXJXaWR0aDogdGhlbWUuaW5wdXQuYm9yZGVyLndpZHRoLFxuXHRcdGNvbG9yOiB0aGVtZS5jb2xvci5ncmF5ODAsXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0bGluZUhlaWdodDogdGhlbWUuaW5wdXQubGluZUhlaWdodCxcblx0XHRwYWRkaW5nOiBgMCAke3RoZW1lLmlucHV0LnBhZGRpbmdIb3Jpem9udGFsfWAsXG5cdFx0dHJhbnNpdGlvbjogJ2JvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cycsXG5cdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cblx0XHQvLyBwcmV2ZW50IGVtcHR5IGlucHV0cyBmcm9tIGNvbGxhcHNpbmcgYnkgYWRkaW5nIGNvbnRlbnRcblx0XHQnOmVtcHR5OmJlZm9yZSc6IHtcblx0XHRcdGNvbG9yOiB0aGVtZS5jb2xvci5ncmF5NDAsXG5cdFx0XHRjb250ZW50OiAnXCIobm8gdmFsdWUpXCInLFxuXHRcdH0sXG5cdH0sXG5cblx0bXVsdGlsaW5lOiB7XG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRoZWlnaHQ6ICdhdXRvJyxcblx0XHRsaW5lSGVpZ2h0OiAnMS40Jyxcblx0XHRwYWRkaW5nQm90dG9tOiAnMC42ZW0nLFxuXHRcdHBhZGRpbmdUb3A6ICcwLjZlbScsXG5cdH0sXG5cblx0Ly8gaW5kaWNhdGUgY2xpY2thYmlsaXR5IHdoZW4gdXNpbmcgYW4gYW5jaG9yXG5cdGFuY2hvcjoge1xuXHRcdGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5jb2xvci5saW5rLCA1KSxcblx0XHRib3JkZXJDb2xvcjogZmFkZSh0aGVtZS5jb2xvci5saW5rLCAxMCksXG5cdFx0Y29sb3I6IHRoZW1lLmNvbG9yLmxpbmssXG5cdFx0bWFyZ2luUmlnaHQ6IDUsXG5cdFx0bWluV2lkdGg6IDAsXG5cdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblxuXHRcdCc6aG92ZXInOiBhbmNob3JIb3ZlckFuZEZvY3VzU3R5bGVzLFxuXHRcdCc6Zm9jdXMnOiBhbmNob3JIb3ZlckFuZEZvY3VzU3R5bGVzLFxuXHR9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSW5wdXROb2VkaXQ7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZvcm0gSW5wdXRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0J0Zvcm1JbnB1dCc6IHtcblx0XHQnYXBwZWFyYW5jZSc6ICdub25lJyxcblx0XHQnYmFja2dyb3VuZENvbG9yJzogdGhlbWUuaW5wdXQuYmFja2dyb3VuZC5kZWZhdWx0LFxuXHRcdCdiYWNrZ3JvdW5kSW1hZ2UnOiAnbm9uZScsXG5cdFx0J2JvcmRlckNvbG9yJzogdGhlbWUuaW5wdXQuYm9yZGVyLmNvbG9yLmRlZmF1bHQsXG5cdFx0J2JvcmRlclJhZGl1cyc6IHRoZW1lLmlucHV0LmJvcmRlci5yYWRpdXMsXG5cdFx0J2JvcmRlclN0eWxlJzogJ3NvbGlkJyxcblx0XHQnYm9yZGVyV2lkdGgnOiB0aGVtZS5pbnB1dC5ib3JkZXIud2lkdGgsXG5cdFx0J2JveFNoYWRvdyc6IHRoZW1lLmlucHV0LmJveFNoYWRvdyxcblx0XHQnY29sb3InOiAnaW5oZXJpdCcsIC8vIEZJWE1FXG5cdFx0J2Rpc3BsYXknOiAnYmxvY2snLFxuXHRcdCdoZWlnaHQnOiB0aGVtZS5pbnB1dC5oZWlnaHQsXG5cdFx0J2xpbmVIZWlnaHQnOiB0aGVtZS5pbnB1dC5saW5lSGVpZ2h0LFxuXHRcdCdwYWRkaW5nJzogYDAgJHt0aGVtZS5pbnB1dC5wYWRkaW5nSG9yaXpvbnRhbH1gLFxuXHRcdCd0cmFuc2l0aW9uJzogJ2JvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cycsXG5cdFx0J3dpZHRoJzogJzEwMCUnLFxuXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuaG92ZXIsXG5cdFx0XHRvdXRsaW5lOiAwLFxuXHRcdH0sXG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuZm9jdXMsXG5cdFx0XHRib3hTaGFkb3c6IHRoZW1lLmlucHV0LmJveFNoYWRvd0ZvY3VzLFxuXHRcdFx0b3V0bGluZTogMCxcblx0XHR9LFxuXHR9LFxuXHQnRm9ybUlucHV0LS1kaXNhYmxlZCc6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmlucHV0LmJhY2tncm91bmQuZGlzYWJsZWQsXG5cdFx0cG9pbnRlckV2ZW50czogJ25vbmUnLFxuXHR9LFxuXG5cdC8vIHNpemVzXG5cdCdGb3JtSW5wdXRfX3NpemUtLXNtYWxsJzoge1xuXHRcdGZvbnRTaXplOiB0aGVtZS5mb250LnNpemUuc21hbGwsXG5cdH0sXG5cdCdGb3JtSW5wdXRfX3NpemUtLWxhcmdlJzoge1xuXHRcdGZvbnRTaXplOiB0aGVtZS5mb250LnNpemUubGFyZ2UsXG5cdH0sXG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmZ1bmN0aW9uIEZvcm1MYWJlbCAoe1xuXHRjc3NTdHlsZXMsXG5cdGNsYXNzTmFtZSxcblx0Y29tcG9uZW50OiBDb21wb25lbnQsXG5cdGNyb3BUZXh0LFxuXHRodG1sRm9yLFxuXHQuLi5wcm9wc1xufSxcbntcblx0Zm9ybUZpZWxkSWQsXG5cdGZvcm1MYXlvdXQsXG5cdGxhYmVsV2lkdGgsXG59KSB7XG5cdHByb3BzLmh0bWxGb3IgPSBodG1sRm9yIHx8IGZvcm1GaWVsZElkO1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlcy5Gb3JtTGFiZWwsXG5cdFx0Zm9ybUxheW91dCA/IGNsYXNzZXNbJ0Zvcm1MYWJlbC0tZm9ybS1sYXlvdXQtJyArIGZvcm1MYXlvdXRdIDogbnVsbCxcblx0XHRjcm9wVGV4dCA/IGNsYXNzZXNbJ0Zvcm1MYWJlbC0tY3JvcC10ZXh0J10gOiBudWxsLFxuXHRcdGNzc1N0eWxlc1xuXHQpO1xuXHRpZiAoY2xhc3NOYW1lKSB7XG5cdFx0cHJvcHMuY2xhc3NOYW1lICs9ICgnICcgKyBjbGFzc05hbWUpO1xuXHR9XG5cdGlmIChsYWJlbFdpZHRoKSB7XG5cdFx0cHJvcHMuc3R5bGUgPSB7XG5cdFx0XHR3aWR0aDogbGFiZWxXaWR0aCxcblx0XHRcdC4uLnByb3BzLnN0eWxlLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xufTtcblxuY29uc3Qgc3R5bGVzU2hhcGUgPSB7XG5cdF9kZWZpbml0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkZvcm1MYWJlbC5wcm9wVHlwZXMgPSB7XG5cdGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XHRQcm9wVHlwZXMuZnVuYyxcblx0XSksXG5cdGNyb3BUZXh0OiBQcm9wVHlwZXMuYm9vbCxcblx0Y3NzU3R5bGVzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoc3R5bGVzU2hhcGUpKSxcblx0XHRQcm9wVHlwZXMuc2hhcGUoc3R5bGVzU2hhcGUpLFxuXHRdKSxcbn07XG5Gb3JtTGFiZWwuZGVmYXVsdFByb3BzID0ge1xuXHRjb21wb25lbnQ6ICdsYWJlbCcsXG59O1xuRm9ybUxhYmVsLmNvbnRleHRUeXBlcyA9IHtcblx0Zm9ybUxheW91dDogUHJvcFR5cGVzLm9uZU9mKFsnYmFzaWMnLCAnaG9yaXpvbnRhbCcsICdpbmxpbmUnXSksXG5cdGZvcm1GaWVsZElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRsYWJlbFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMubnVtYmVyLFxuXHRcdFByb3BUeXBlcy5zdHJpbmcsXG5cdF0pLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtTGFiZWw7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZvcm0gTGFiZWxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0J0Zvcm1MYWJlbCc6IHtcblx0XHRjb2xvcjogdGhlbWUuZm9ybS5sYWJlbC5jb2xvcixcblx0XHRmb250U2l6ZTogdGhlbWUuZm9ybS5sYWJlbC5mb250U2l6ZSxcblx0XHRmb250V2VpZ2h0OiB0aGVtZS5mb3JtLmxhYmVsLmZvbnRXZWlnaHQsXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luQm90dG9tOiAnMC41ZW0nLFxuXHR9LFxuXG5cdC8vIHdoZW4gaW5zaWRlIGEgaG9yaXpvbnRhbCBmb3JtXG5cblx0J0Zvcm1MYWJlbC0tZm9ybS1sYXlvdXQtaG9yaXpvbnRhbCc6IHtcblx0XHRbYEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnQudGFibGV0TGFuZHNjYXBlTWlufSlgXToge1xuXHRcdFx0ZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxuXHRcdFx0bGluZUhlaWdodDogdGhlbWUuY29tcG9uZW50LmxpbmVIZWlnaHQsIC8vIGZpeFxuXHRcdFx0bWFyZ2luQm90dG9tOiAwLFxuXHRcdFx0cGFkZGluZ1JpZ2h0OiA1LFxuXHRcdFx0dmVydGljYWxBbGlnbjogJ3RvcCcsXG5cdFx0XHR3aWR0aDogdGhlbWUuZm9ybS5sYWJlbC53aWR0aCxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIGNyb3AgbG9uZyB0ZXh0XG5cblx0J0Zvcm1MYWJlbC0tY3JvcC10ZXh0Jzoge1xuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHR0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG5cdFx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXG5cdH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmZ1bmN0aW9uIEZvcm1Ob3RlICh7XG5cdGNsYXNzTmFtZSxcblx0Y2hpbGRyZW4sXG5cdGNvbXBvbmVudDogQ29tcG9uZW50LFxuXHRodG1sLFxuXHQuLi5wcm9wc1xufSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoY2xhc3Nlcy5ub3RlLCBjbGFzc05hbWUpO1xuXG5cdC8vIFByb3BlcnR5IFZpb2xhdGlvblxuXHRpZiAoY2hpbGRyZW4gJiYgaHRtbCkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6IEZvcm1Ob3RlIGNhbm5vdCByZW5kZXIgYGNoaWxkcmVuYCBhbmQgYGh0bWxgLiBZb3UgbXVzdCBwcm92aWRlIG9uZSBvciB0aGUgb3RoZXIuJyk7XG5cdH1cblxuXHRyZXR1cm4gaHRtbCA/IChcblx0XHQ8Q29tcG9uZW50IHsuLi5wcm9wc30gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+XG5cdCkgOiAoXG5cdFx0PENvbXBvbmVudCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0NvbXBvbmVudD5cblx0KTtcbn07XG5Gb3JtTm90ZS5wcm9wVHlwZXMgPSB7XG5cdGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLmZ1bmMsXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XSksXG5cdGh0bWw6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuRm9ybU5vdGUuZGVmYXVsdFByb3BzID0ge1xuXHRjb21wb25lbnQ6ICdkaXYnLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtTm90ZTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRm9ybSBOb3RlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdG5vdGU6IHtcblx0XHRjb2xvcjogdGhlbWUuZm9ybS5ub3RlLmNvbG9yLFxuXHRcdGZvbnRTaXplOiB0aGVtZS5mb3JtLm5vdGUuZm9udFNpemUsXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnNtYWxsLFxuXHR9LFxufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzJztcblxuY2xhc3MgRm9ybVNlbGVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlciAoKSB7XG5cdFx0Y29uc3QgeyBjaGlsZHJlbiwgaWQsIG9wdGlvbnMsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgZm9ybUZpZWxkSWQgfSA9IHRoaXMuY29udGV4dDtcblxuXHRcdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRcdGNsYXNzZXMuc2VsZWN0LFxuXHRcdFx0cHJvcHMuZGlzYWJsZWQgPyBjbGFzc2VzWydzZWxlY3QtLWRpc2FibGVkJ10gOiBudWxsXG5cdFx0KTtcblx0XHRwcm9wcy5pZCA9IGlkIHx8IGZvcm1GaWVsZElkO1xuXG5cdFx0Ly8gUHJvcGVydHkgVmlvbGF0aW9uXG5cdFx0aWYgKG9wdGlvbnMgJiYgY2hpbGRyZW4pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6IEZvcm1TZWxlY3QgY2Fubm90IHJlbmRlciBgY2hpbGRyZW5gIGFuZCBgb3B0aW9uc2AuIFlvdSBtdXN0IHByb3ZpZGUgb25lIG9yIHRoZSBvdGhlci4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmNvbnRhaW5lcil9PlxuXHRcdFx0XHR7b3B0aW9ucyA/IChcblx0XHRcdFx0XHQ8c2VsZWN0IHsuLi5wcm9wc30+e29wdGlvbnMubWFwKG9wdCA9PiAoXG5cdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17b3B0LnZhbHVlfSB2YWx1ZT17b3B0LnZhbHVlfT5cblx0XHRcdFx0XHRcdFx0e29wdC5sYWJlbH1cblx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHQpIDogPHNlbGVjdCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L3NlbGVjdD59XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuYXJyb3dzLCBwcm9wcy5kaXNhYmxlZCA/IGNsYXNzZXNbJ2Fycm93cy0tZGlzYWJsZWQnXSA6IG51bGwpfT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmFycm93LCBjbGFzc2VzLmFycm93VG9wKX0gLz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmFycm93LCBjbGFzc2VzLmFycm93Qm90dG9tKX0gLz5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcblxuRm9ybVNlbGVjdC5jb250ZXh0VHlwZXMgPSB7XG5cdGZvcm1GaWVsZElkOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkZvcm1TZWxlY3QucHJvcFR5cGVzID0ge1xuXHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0b3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoXG5cdFx0UmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRcdFx0dmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdFx0fSlcblx0KSxcblx0dmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5udW1iZXIsXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XSksXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1TZWxlY3Q7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZvcm0gU2VsZWN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyogZXNsaW50IHF1b3RlLXByb3BzOiBbXCJlcnJvclwiLCBcImFzLW5lZWRlZFwiXSAqL1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuaW1wb3J0IHsgZGFya2VuLCBsaWdodGVuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29sb3InO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdH0sXG5cblx0Ly8gc2VsZWN0IG5vZGVcblx0c2VsZWN0OiB7XG5cdFx0YXBwZWFyYW5jZTogJ25vbmUnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUuaW5wdXQuYmFja2dyb3VuZC5kZWZhdWx0LFxuXHRcdGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuXHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuZGVmYXVsdCxcblx0XHRib3JkZXJCb3R0b21Db2xvcjogZGFya2VuKHRoZW1lLmlucHV0LmJvcmRlci5jb2xvci5kZWZhdWx0LCA0KSxcblx0XHRib3JkZXJUb3BDb2xvcjogbGlnaHRlbih0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuZGVmYXVsdCwgNCksXG5cdFx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5pbnB1dC5ib3JkZXIucmFkaXVzLFxuXHRcdGJvcmRlclN0eWxlOiAnc29saWQnLFxuXHRcdGJvcmRlcldpZHRoOiB0aGVtZS5pbnB1dC5ib3JkZXIud2lkdGgsXG5cdFx0Ym94U2hhZG93OiB0aGVtZS5zZWxlY3QuYm94U2hhZG93LFxuXHRcdGNvbG9yOiAnaW5oZXJpdCcsIC8vIEZJWE1FXG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRoZWlnaHQ6IHRoZW1lLmlucHV0LmhlaWdodCxcblx0XHRsaW5lSGVpZ2h0OiB0aGVtZS5pbnB1dC5saW5lSGVpZ2h0LFxuXHRcdHBhZGRpbmc6IGAwICR7dGhlbWUuaW5wdXQucGFkZGluZ0hvcml6b250YWx9YCxcblx0XHR0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzJyxcblx0XHR3aWR0aDogJzEwMCUnLFxuXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuaG92ZXIsXG5cdFx0XHRvdXRsaW5lOiAwLFxuXHRcdH0sXG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuZm9jdXMsXG5cdFx0XHRib3hTaGFkb3c6IHRoZW1lLmlucHV0LmJveFNoYWRvd0ZvY3VzLFxuXHRcdFx0b3V0bGluZTogMCxcblx0XHR9LFxuXHR9LFxuXHQnc2VsZWN0LS1kaXNhYmxlZCc6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmlucHV0LmJhY2tncm91bmQuZGlzYWJsZWQsXG5cdFx0cG9pbnRlckV2ZW50czogJ25vbmUnLFxuXHR9LFxuXG5cdC8vIGFycm93c1xuXHRhcnJvd3M6IHtcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0aGVpZ2h0OiB0aGVtZS5pbnB1dC5oZWlnaHQsXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRyaWdodDogMCxcblx0XHR0b3A6IDAsXG5cdFx0d2lkdGg6IHRoZW1lLmlucHV0LmhlaWdodCxcblx0fSxcblx0YXJyb3c6IHtcblx0XHRib3JkZXJMZWZ0OiAnMC4zZW0gc29saWQgdHJhbnNwYXJlbnQnLFxuXHRcdGJvcmRlclJpZ2h0OiAnMC4zZW0gc29saWQgdHJhbnNwYXJlbnQnLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdGhlaWdodDogMCxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHR3aWR0aDogMCxcblx0XHR6SW5kZXg6IDEsXG5cdH0sXG5cdGFycm93VG9wOiB7XG5cdFx0Ym9yZGVyQm90dG9tOiAnMC4zZW0gc29saWQnLFxuXHRcdG1hcmdpbkJvdHRvbTogJzAuMWVtJyxcblx0fSxcblx0YXJyb3dCb3R0b206IHtcblx0XHRib3JkZXJUb3A6ICcwLjNlbSBzb2xpZCcsXG5cdFx0bWFyZ2luVG9wOiAnMC4xZW0nLFxuXHR9LFxufTtcbiIsImltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkYW5nZXI6IHRoZW1lLmdseXBoLmNvbG9yLmRhbmdlcixcblx0aW5oZXJpdDogdGhlbWUuZ2x5cGguY29sb3IuaW5oZXJpdCxcblx0aW52ZXJ0ZWQ6IHRoZW1lLmdseXBoLmNvbG9yLmludmVydGVkLFxuXHRwcmltYXJ5OiB0aGVtZS5nbHlwaC5jb2xvci5wcmltYXJ5LFxuXHRzdWNjZXNzOiB0aGVtZS5nbHlwaC5jb2xvci5zdWNjZXNzLFxuXHR3YXJuaW5nOiB0aGVtZS5nbHlwaC5jb2xvci53YXJuaW5nLFxufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgb2N0aWNvbnMgZnJvbSAnLi9vY3RpY29ucyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCBzaXplcyBmcm9tICcuL3NpemVzJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzJztcblxuLy8gRklYTUUgc3RhdGljIG9jdGljb24gY2xhc3NlcyBsZWFuaW5nIG9uIEVsZW1lbnRhbCB0byBhdm9pZCBkdXBsaWNhdGVcbi8vIGZvbnQgYW5kIENTUzsgaW5mbGF0aW5nIHRoZSBwcm9qZWN0IHNpemVcblxuZnVuY3Rpb24gR2x5cGggKHtcblx0Y3NzU3R5bGVzLFxuXHRjbGFzc05hbWUsXG5cdGNvbG9yLFxuXHRjb21wb25lbnQ6IENvbXBvbmVudCxcblx0bmFtZSxcblx0c2l6ZSxcblx0c3R5bGUsXG5cdC4uLnByb3BzXG59KSB7XG5cdGNvbnN0IGNvbG9ySXNWYWxpZFR5cGUgPSBPYmplY3Qua2V5cyhjb2xvcnMpLmluY2x1ZGVzKGNvbG9yKTtcblx0cHJvcHMuY2xhc3NOYW1lID0gY3NzKFxuXHRcdGNsYXNzZXMuZ2x5cGgsXG5cdFx0Y29sb3JJc1ZhbGlkVHlwZSAmJiBjbGFzc2VzWydjb2xvcl9fJyArIGNvbG9yXSxcblx0XHRjbGFzc2VzWydzaXplX18nICsgc2l6ZV0sXG5cdFx0Y3NzU3R5bGVzXG5cdCkgKyBgICR7b2N0aWNvbnNbbmFtZV19YDtcblx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdHByb3BzLmNsYXNzTmFtZSArPSAoJyAnICsgY2xhc3NOYW1lKTtcblx0fVxuXG5cdC8vIHN1cHBvcnQgcmFuZG9tIGNvbG9yIHN0cmluZ3Ncblx0cHJvcHMuc3R5bGUgPSB7XG5cdFx0Y29sb3I6ICFjb2xvcklzVmFsaWRUeXBlID8gY29sb3IgOiBudWxsLFxuXHRcdC4uLnN0eWxlLFxuXHR9O1xuXG5cdHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG59O1xuXG5HbHlwaC5wcm9wVHlwZXMgPSB7XG5cdGNvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoY29sb3JzKSksXG5cdFx0UHJvcFR5cGVzLnN0cmluZywgLy8gc3VwcG9ydCByYW5kb20gY29sb3Igc3RyaW5nc1xuXHRdKSxcblx0Y3NzU3R5bGVzOiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdF9kZWZpbml0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRcdF9uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR9KSxcblx0bmFtZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKG9jdGljb25zKSkuaXNSZXF1aXJlZCxcblx0c2l6ZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKHNpemVzKSksXG59O1xuR2x5cGguZGVmYXVsdFByb3BzID0ge1xuXHRjb21wb25lbnQ6ICdpJyxcblx0Y29sb3I6ICdpbmhlcml0Jyxcblx0c2l6ZTogJ3NtYWxsJyxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2x5cGg7XG4iLCIvKiBlc2xpbnQgcXVvdGUtcHJvcHM6IFtcImVycm9yXCIsIFwiYXMtbmVlZGVkXCJdICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRhbGVydDogJ29jdGljb24gb2N0aWNvbi1hbGVydCcsXG5cdCdhcnJvdy1kb3duJzogJ29jdGljb24gb2N0aWNvbi1hcnJvdy1kb3duJyxcblx0J2Fycm93LWxlZnQnOiAnb2N0aWNvbiBvY3RpY29uLWFycm93LWxlZnQnLFxuXHQnYXJyb3ctcmlnaHQnOiAnb2N0aWNvbiBvY3RpY29uLWFycm93LXJpZ2h0Jyxcblx0J2Fycm93LXNtYWxsLWRvd24nOiAnb2N0aWNvbiBvY3RpY29uLWFycm93LXNtYWxsLWRvd24nLFxuXHQnYXJyb3ctc21hbGwtbGVmdCc6ICdvY3RpY29uIG9jdGljb24tYXJyb3ctc21hbGwtbGVmdCcsXG5cdCdhcnJvdy1zbWFsbC1yaWdodCc6ICdvY3RpY29uIG9jdGljb24tYXJyb3ctc21hbGwtcmlnaHQnLFxuXHQnYXJyb3ctc21hbGwtdXAnOiAnb2N0aWNvbiBvY3RpY29uLWFycm93LXNtYWxsLXVwJyxcblx0J2Fycm93LXVwJzogJ29jdGljb24gb2N0aWNvbi1hcnJvdy11cCcsXG5cdG1pY3Jvc2NvcGU6ICdvY3RpY29uIG9jdGljb24tbWljcm9zY29wZScsXG5cdGJlYWtlcjogJ29jdGljb24gb2N0aWNvbi1iZWFrZXInLFxuXHRiZWxsOiAnb2N0aWNvbiBvY3RpY29uLWJlbGwnLFxuXHRib29rOiAnb2N0aWNvbiBvY3RpY29uLWJvb2snLFxuXHRib29rbWFyazogJ29jdGljb24gb2N0aWNvbi1ib29rbWFyaycsXG5cdGJyaWVmY2FzZTogJ29jdGljb24gb2N0aWNvbi1icmllZmNhc2UnLFxuXHRicm9hZGNhc3Q6ICdvY3RpY29uIG9jdGljb24tYnJvYWRjYXN0Jyxcblx0YnJvd3NlcjogJ29jdGljb24gb2N0aWNvbi1icm93c2VyJyxcblx0YnVnOiAnb2N0aWNvbiBvY3RpY29uLWJ1ZycsXG5cdGNhbGVuZGFyOiAnb2N0aWNvbiBvY3RpY29uLWNhbGVuZGFyJyxcblx0Y2hlY2s6ICdvY3RpY29uIG9jdGljb24tY2hlY2snLFxuXHRjaGVja2xpc3Q6ICdvY3RpY29uIG9jdGljb24tY2hlY2tsaXN0Jyxcblx0J2NoZXZyb24tZG93bic6ICdvY3RpY29uIG9jdGljb24tY2hldnJvbi1kb3duJyxcblx0J2NoZXZyb24tbGVmdCc6ICdvY3RpY29uIG9jdGljb24tY2hldnJvbi1sZWZ0Jyxcblx0J2NoZXZyb24tcmlnaHQnOiAnb2N0aWNvbiBvY3RpY29uLWNoZXZyb24tcmlnaHQnLFxuXHQnY2hldnJvbi11cCc6ICdvY3RpY29uIG9jdGljb24tY2hldnJvbi11cCcsXG5cdCdjaXJjbGUtc2xhc2gnOiAnb2N0aWNvbiBvY3RpY29uLWNpcmNsZS1zbGFzaCcsXG5cdCdjaXJjdWl0LWJvYXJkJzogJ29jdGljb24gb2N0aWNvbi1jaXJjdWl0LWJvYXJkJyxcblx0Y2xpcHB5OiAnb2N0aWNvbiBvY3RpY29uLWNsaXBweScsXG5cdGNsb2NrOiAnb2N0aWNvbiBvY3RpY29uLWNsb2NrJyxcblx0J2Nsb3VkLWRvd25sb2FkJzogJ29jdGljb24gb2N0aWNvbi1jbG91ZC1kb3dubG9hZCcsXG5cdCdjbG91ZC11cGxvYWQnOiAnb2N0aWNvbiBvY3RpY29uLWNsb3VkLXVwbG9hZCcsXG5cdGNvZGU6ICdvY3RpY29uIG9jdGljb24tY29kZScsXG5cdCdjb2xvci1tb2RlJzogJ29jdGljb24gb2N0aWNvbi1jb2xvci1tb2RlJyxcblx0J2NvbW1lbnQtYWRkJzogJ29jdGljb24gb2N0aWNvbi1jb21tZW50LWFkZCcsXG5cdGNvbW1lbnQ6ICdvY3RpY29uIG9jdGljb24tY29tbWVudCcsXG5cdCdjb21tZW50LWRpc2N1c3Npb24nOiAnb2N0aWNvbiBvY3RpY29uLWNvbW1lbnQtZGlzY3Vzc2lvbicsXG5cdCdjcmVkaXQtY2FyZCc6ICdvY3RpY29uIG9jdGljb24tY3JlZGl0LWNhcmQnLFxuXHRkYXNoOiAnb2N0aWNvbiBvY3RpY29uLWRhc2gnLFxuXHRkYXNoYm9hcmQ6ICdvY3RpY29uIG9jdGljb24tZGFzaGJvYXJkJyxcblx0ZGF0YWJhc2U6ICdvY3RpY29uIG9jdGljb24tZGF0YWJhc2UnLFxuXHRjbG9uZTogJ29jdGljb24gb2N0aWNvbi1jbG9uZScsXG5cdCdkZXNrdG9wLWRvd25sb2FkJzogJ29jdGljb24gb2N0aWNvbi1kZXNrdG9wLWRvd25sb2FkJyxcblx0J2RldmljZS1jYW1lcmEnOiAnb2N0aWNvbiBvY3RpY29uLWRldmljZS1jYW1lcmEnLFxuXHQnZGV2aWNlLWNhbWVyYS12aWRlbyc6ICdvY3RpY29uIG9jdGljb24tZGV2aWNlLWNhbWVyYS12aWRlbycsXG5cdCdkZXZpY2UtZGVza3RvcCc6ICdvY3RpY29uIG9jdGljb24tZGV2aWNlLWRlc2t0b3AnLFxuXHQnZGV2aWNlLW1vYmlsZSc6ICdvY3RpY29uIG9jdGljb24tZGV2aWNlLW1vYmlsZScsXG5cdGRpZmY6ICdvY3RpY29uIG9jdGljb24tZGlmZicsXG5cdCdkaWZmLWFkZGVkJzogJ29jdGljb24gb2N0aWNvbi1kaWZmLWFkZGVkJyxcblx0J2RpZmYtaWdub3JlZCc6ICdvY3RpY29uIG9jdGljb24tZGlmZi1pZ25vcmVkJyxcblx0J2RpZmYtbW9kaWZpZWQnOiAnb2N0aWNvbiBvY3RpY29uLWRpZmYtbW9kaWZpZWQnLFxuXHQnZGlmZi1yZW1vdmVkJzogJ29jdGljb24gb2N0aWNvbi1kaWZmLXJlbW92ZWQnLFxuXHQnZGlmZi1yZW5hbWVkJzogJ29jdGljb24gb2N0aWNvbi1kaWZmLXJlbmFtZWQnLFxuXHRlbGxpcHNpczogJ29jdGljb24gb2N0aWNvbi1lbGxpcHNpcycsXG5cdCdleWUtdW53YXRjaCc6ICdvY3RpY29uIG9jdGljb24tZXllLXVud2F0Y2gnLFxuXHQnZXllLXdhdGNoJzogJ29jdGljb24gb2N0aWNvbi1leWUtd2F0Y2gnLFxuXHRleWU6ICdvY3RpY29uIG9jdGljb24tZXllJyxcblx0J2ZpbGUtYmluYXJ5JzogJ29jdGljb24gb2N0aWNvbi1maWxlLWJpbmFyeScsXG5cdCdmaWxlLWNvZGUnOiAnb2N0aWNvbiBvY3RpY29uLWZpbGUtY29kZScsXG5cdCdmaWxlLWRpcmVjdG9yeSc6ICdvY3RpY29uIG9jdGljb24tZmlsZS1kaXJlY3RvcnknLFxuXHQnZmlsZS1tZWRpYSc6ICdvY3RpY29uIG9jdGljb24tZmlsZS1tZWRpYScsXG5cdCdmaWxlLXBkZic6ICdvY3RpY29uIG9jdGljb24tZmlsZS1wZGYnLFxuXHQnZmlsZS1zdWJtb2R1bGUnOiAnb2N0aWNvbiBvY3RpY29uLWZpbGUtc3VibW9kdWxlJyxcblx0J2ZpbGUtc3ltbGluay1kaXJlY3RvcnknOiAnb2N0aWNvbiBvY3RpY29uLWZpbGUtc3ltbGluay1kaXJlY3RvcnknLFxuXHQnZmlsZS1zeW1saW5rLWZpbGUnOiAnb2N0aWNvbiBvY3RpY29uLWZpbGUtc3ltbGluay1maWxlJyxcblx0J2ZpbGUtdGV4dCc6ICdvY3RpY29uIG9jdGljb24tZmlsZS10ZXh0Jyxcblx0J2ZpbGUtemlwJzogJ29jdGljb24gb2N0aWNvbi1maWxlLXppcCcsXG5cdGZsYW1lOiAnb2N0aWNvbiBvY3RpY29uLWZsYW1lJyxcblx0Zm9sZDogJ29jdGljb24gb2N0aWNvbi1mb2xkJyxcblx0Z2VhcjogJ29jdGljb24gb2N0aWNvbi1nZWFyJyxcblx0Z2lmdDogJ29jdGljb24gb2N0aWNvbi1naWZ0Jyxcblx0Z2lzdDogJ29jdGljb24gb2N0aWNvbi1naXN0Jyxcblx0J2dpc3Qtc2VjcmV0JzogJ29jdGljb24gb2N0aWNvbi1naXN0LXNlY3JldCcsXG5cdCdnaXQtYnJhbmNoLWNyZWF0ZSc6ICdvY3RpY29uIG9jdGljb24tZ2l0LWJyYW5jaC1jcmVhdGUnLFxuXHQnZ2l0LWJyYW5jaC1kZWxldGUnOiAnb2N0aWNvbiBvY3RpY29uLWdpdC1icmFuY2gtZGVsZXRlJyxcblx0J2dpdC1icmFuY2gnOiAnb2N0aWNvbiBvY3RpY29uLWdpdC1icmFuY2gnLFxuXHQnZ2l0LWNvbW1pdCc6ICdvY3RpY29uIG9jdGljb24tZ2l0LWNvbW1pdCcsXG5cdCdnaXQtY29tcGFyZSc6ICdvY3RpY29uIG9jdGljb24tZ2l0LWNvbXBhcmUnLFxuXHQnZ2l0LW1lcmdlJzogJ29jdGljb24gb2N0aWNvbi1naXQtbWVyZ2UnLFxuXHQnZ2l0LXB1bGwtcmVxdWVzdC1hYmFuZG9uZWQnOiAnb2N0aWNvbiBvY3RpY29uLWdpdC1wdWxsLXJlcXVlc3QtYWJhbmRvbmVkJyxcblx0J2dpdC1wdWxsLXJlcXVlc3QnOiAnb2N0aWNvbiBvY3RpY29uLWdpdC1wdWxsLXJlcXVlc3QnLFxuXHRnbG9iZTogJ29jdGljb24gb2N0aWNvbi1nbG9iZScsXG5cdGdyYXBoOiAnb2N0aWNvbiBvY3RpY29uLWdyYXBoJyxcblx0aGVhcnQ6ICdvY3RpY29uIG9jdGljb24taGVhcnQnLFxuXHRoaXN0b3J5OiAnb2N0aWNvbiBvY3RpY29uLWhpc3RvcnknLFxuXHRob21lOiAnb2N0aWNvbiBvY3RpY29uLWhvbWUnLFxuXHQnaG9yaXpvbnRhbC1ydWxlJzogJ29jdGljb24gb2N0aWNvbi1ob3Jpem9udGFsLXJ1bGUnLFxuXHRodWJvdDogJ29jdGljb24gb2N0aWNvbi1odWJvdCcsXG5cdGluYm94OiAnb2N0aWNvbiBvY3RpY29uLWluYm94Jyxcblx0aW5mbzogJ29jdGljb24gb2N0aWNvbi1pbmZvJyxcblx0J2lzc3VlLWNsb3NlZCc6ICdvY3RpY29uIG9jdGljb24taXNzdWUtY2xvc2VkJyxcblx0J2lzc3VlLW9wZW5lZCc6ICdvY3RpY29uIG9jdGljb24taXNzdWUtb3BlbmVkJyxcblx0J2lzc3VlLXJlb3BlbmVkJzogJ29jdGljb24gb2N0aWNvbi1pc3N1ZS1yZW9wZW5lZCcsXG5cdGplcnNleTogJ29jdGljb24gb2N0aWNvbi1qZXJzZXknLFxuXHRrZXk6ICdvY3RpY29uIG9jdGljb24ta2V5Jyxcblx0a2V5Ym9hcmQ6ICdvY3RpY29uIG9jdGljb24ta2V5Ym9hcmQnLFxuXHRsYXc6ICdvY3RpY29uIG9jdGljb24tbGF3Jyxcblx0J2xpZ2h0LWJ1bGInOiAnb2N0aWNvbiBvY3RpY29uLWxpZ2h0LWJ1bGInLFxuXHRsaW5rOiAnb2N0aWNvbiBvY3RpY29uLWxpbmsnLFxuXHQnbGluay1leHRlcm5hbCc6ICdvY3RpY29uIG9jdGljb24tbGluay1leHRlcm5hbCcsXG5cdCdsaXN0LW9yZGVyZWQnOiAnb2N0aWNvbiBvY3RpY29uLWxpc3Qtb3JkZXJlZCcsXG5cdCdsaXN0LXVub3JkZXJlZCc6ICdvY3RpY29uIG9jdGljb24tbGlzdC11bm9yZGVyZWQnLFxuXHRsb2NhdGlvbjogJ29jdGljb24gb2N0aWNvbi1sb2NhdGlvbicsXG5cdCdnaXN0LXByaXZhdGUnOiAnb2N0aWNvbiBvY3RpY29uLWdpc3QtcHJpdmF0ZScsXG5cdCdtaXJyb3ItcHJpdmF0ZSc6ICdvY3RpY29uIG9jdGljb24tbWlycm9yLXByaXZhdGUnLFxuXHQnZ2l0LWZvcmstcHJpdmF0ZSc6ICdvY3RpY29uIG9jdGljb24tZ2l0LWZvcmstcHJpdmF0ZScsXG5cdGxvY2s6ICdvY3RpY29uIG9jdGljb24tbG9jaycsXG5cdCdsb2dvLWdpdGh1Yic6ICdvY3RpY29uIG9jdGljb24tbG9nby1naXRodWInLFxuXHRtYWlsOiAnb2N0aWNvbiBvY3RpY29uLW1haWwnLFxuXHQnbWFpbC1yZWFkJzogJ29jdGljb24gb2N0aWNvbi1tYWlsLXJlYWQnLFxuXHQnbWFpbC1yZXBseSc6ICdvY3RpY29uIG9jdGljb24tbWFpbC1yZXBseScsXG5cdCdtYXJrLWdpdGh1Yic6ICdvY3RpY29uIG9jdGljb24tbWFyay1naXRodWInLFxuXHRtYXJrZG93bjogJ29jdGljb24gb2N0aWNvbi1tYXJrZG93bicsXG5cdG1lZ2FwaG9uZTogJ29jdGljb24gb2N0aWNvbi1tZWdhcGhvbmUnLFxuXHRtZW50aW9uOiAnb2N0aWNvbiBvY3RpY29uLW1lbnRpb24nLFxuXHRtaWxlc3RvbmU6ICdvY3RpY29uIG9jdGljb24tbWlsZXN0b25lJyxcblx0J21pcnJvci1wdWJsaWMnOiAnb2N0aWNvbiBvY3RpY29uLW1pcnJvci1wdWJsaWMnLFxuXHRtaXJyb3I6ICdvY3RpY29uIG9jdGljb24tbWlycm9yJyxcblx0J21vcnRhci1ib2FyZCc6ICdvY3RpY29uIG9jdGljb24tbW9ydGFyLWJvYXJkJyxcblx0bXV0ZTogJ29jdGljb24gb2N0aWNvbi1tdXRlJyxcblx0J25vLW5ld2xpbmUnOiAnb2N0aWNvbiBvY3RpY29uLW5vLW5ld2xpbmUnLFxuXHRvY3RvZmFjZTogJ29jdGljb24gb2N0aWNvbi1vY3RvZmFjZScsXG5cdG9yZ2FuaXphdGlvbjogJ29jdGljb24gb2N0aWNvbi1vcmdhbml6YXRpb24nLFxuXHRwYWNrYWdlOiAnb2N0aWNvbiBvY3RpY29uLXBhY2thZ2UnLFxuXHRwYWludGNhbjogJ29jdGljb24gb2N0aWNvbi1wYWludGNhbicsXG5cdHBlbmNpbDogJ29jdGljb24gb2N0aWNvbi1wZW5jaWwnLFxuXHQncGVyc29uLWFkZCc6ICdvY3RpY29uIG9jdGljb24tcGVyc29uLWFkZCcsXG5cdCdwZXJzb24tZm9sbG93JzogJ29jdGljb24gb2N0aWNvbi1wZXJzb24tZm9sbG93Jyxcblx0cGVyc29uOiAnb2N0aWNvbiBvY3RpY29uLXBlcnNvbicsXG5cdHBpbjogJ29jdGljb24gb2N0aWNvbi1waW4nLFxuXHRwbHVnOiAnb2N0aWNvbiBvY3RpY29uLXBsdWcnLFxuXHQncmVwby1jcmVhdGUnOiAnb2N0aWNvbiBvY3RpY29uLXJlcG8tY3JlYXRlJyxcblx0J2dpc3QtbmV3JzogJ29jdGljb24gb2N0aWNvbi1naXN0LW5ldycsXG5cdCdmaWxlLWRpcmVjdG9yeS1jcmVhdGUnOiAnb2N0aWNvbiBvY3RpY29uLWZpbGUtZGlyZWN0b3J5LWNyZWF0ZScsXG5cdCdmaWxlLWFkZCc6ICdvY3RpY29uIG9jdGljb24tZmlsZS1hZGQnLFxuXHRwbHVzOiAnb2N0aWNvbiBvY3RpY29uLXBsdXMnLFxuXHQncHJpbWl0aXZlLWRvdCc6ICdvY3RpY29uIG9jdGljb24tcHJpbWl0aXZlLWRvdCcsXG5cdCdwcmltaXRpdmUtc3F1YXJlJzogJ29jdGljb24gb2N0aWNvbi1wcmltaXRpdmUtc3F1YXJlJyxcblx0cHVsc2U6ICdvY3RpY29uIG9jdGljb24tcHVsc2UnLFxuXHRxdWVzdGlvbjogJ29jdGljb24gb2N0aWNvbi1xdWVzdGlvbicsXG5cdHF1b3RlOiAnb2N0aWNvbiBvY3RpY29uLXF1b3RlJyxcblx0J3JhZGlvLXRvd2VyJzogJ29jdGljb24gb2N0aWNvbi1yYWRpby10b3dlcicsXG5cdCdyZXBvLWRlbGV0ZSc6ICdvY3RpY29uIG9jdGljb24tcmVwby1kZWxldGUnLFxuXHRyZXBvOiAnb2N0aWNvbiBvY3RpY29uLXJlcG8nLFxuXHQncmVwby1jbG9uZSc6ICdvY3RpY29uIG9jdGljb24tcmVwby1jbG9uZScsXG5cdCdyZXBvLWZvcmNlLXB1c2gnOiAnb2N0aWNvbiBvY3RpY29uLXJlcG8tZm9yY2UtcHVzaCcsXG5cdCdnaXN0LWZvcmsnOiAnb2N0aWNvbiBvY3RpY29uLWdpc3QtZm9yaycsXG5cdCdyZXBvLWZvcmtlZCc6ICdvY3RpY29uIG9jdGljb24tcmVwby1mb3JrZWQnLFxuXHQncmVwby1wdWxsJzogJ29jdGljb24gb2N0aWNvbi1yZXBvLXB1bGwnLFxuXHQncmVwby1wdXNoJzogJ29jdGljb24gb2N0aWNvbi1yZXBvLXB1c2gnLFxuXHRyb2NrZXQ6ICdvY3RpY29uIG9jdGljb24tcm9ja2V0Jyxcblx0cnNzOiAnb2N0aWNvbiBvY3RpY29uLXJzcycsXG5cdHJ1Ynk6ICdvY3RpY29uIG9jdGljb24tcnVieScsXG5cdCdzY3JlZW4tZnVsbCc6ICdvY3RpY29uIG9jdGljb24tc2NyZWVuLWZ1bGwnLFxuXHQnc2NyZWVuLW5vcm1hbCc6ICdvY3RpY29uIG9jdGljb24tc2NyZWVuLW5vcm1hbCcsXG5cdCdzZWFyY2gtc2F2ZSc6ICdvY3RpY29uIG9jdGljb24tc2VhcmNoLXNhdmUnLFxuXHRzZWFyY2g6ICdvY3RpY29uIG9jdGljb24tc2VhcmNoJyxcblx0c2VydmVyOiAnb2N0aWNvbiBvY3RpY29uLXNlcnZlcicsXG5cdHNldHRpbmdzOiAnb2N0aWNvbiBvY3RpY29uLXNldHRpbmdzJyxcblx0c2hpZWxkOiAnb2N0aWNvbiBvY3RpY29uLXNoaWVsZCcsXG5cdCdsb2ctaW4nOiAnb2N0aWNvbiBvY3RpY29uLWxvZy1pbicsXG5cdCdzaWduLWluJzogJ29jdGljb24gb2N0aWNvbi1zaWduLWluJyxcblx0J2xvZy1vdXQnOiAnb2N0aWNvbiBvY3RpY29uLWxvZy1vdXQnLFxuXHQnc2lnbi1vdXQnOiAnb2N0aWNvbiBvY3RpY29uLXNpZ24tb3V0Jyxcblx0c3F1aXJyZWw6ICdvY3RpY29uIG9jdGljb24tc3F1aXJyZWwnLFxuXHQnc3Rhci1hZGQnOiAnb2N0aWNvbiBvY3RpY29uLXN0YXItYWRkJyxcblx0J3N0YXItZGVsZXRlJzogJ29jdGljb24gb2N0aWNvbi1zdGFyLWRlbGV0ZScsXG5cdHN0YXI6ICdvY3RpY29uIG9jdGljb24tc3RhcicsXG5cdHN0b3A6ICdvY3RpY29uIG9jdGljb24tc3RvcCcsXG5cdCdyZXBvLXN5bmMnOiAnb2N0aWNvbiBvY3RpY29uLXJlcG8tc3luYycsXG5cdHN5bmM6ICdvY3RpY29uIG9jdGljb24tc3luYycsXG5cdCd0YWctcmVtb3ZlJzogJ29jdGljb24gb2N0aWNvbi10YWctcmVtb3ZlJyxcblx0J3RhZy1hZGQnOiAnb2N0aWNvbiBvY3RpY29uLXRhZy1hZGQnLFxuXHR0YWc6ICdvY3RpY29uIG9jdGljb24tdGFnJyxcblx0dGVsZXNjb3BlOiAnb2N0aWNvbiBvY3RpY29uLXRlbGVzY29wZScsXG5cdHRlcm1pbmFsOiAnb2N0aWNvbiBvY3RpY29uLXRlcm1pbmFsJyxcblx0J3RocmVlLWJhcnMnOiAnb2N0aWNvbiBvY3RpY29uLXRocmVlLWJhcnMnLFxuXHR0aHVtYnNkb3duOiAnb2N0aWNvbiBvY3RpY29uLXRodW1ic2Rvd24nLFxuXHR0aHVtYnN1cDogJ29jdGljb24gb2N0aWNvbi10aHVtYnN1cCcsXG5cdHRvb2xzOiAnb2N0aWNvbiBvY3RpY29uLXRvb2xzJyxcblx0dHJhc2hjYW46ICdvY3RpY29uIG9jdGljb24tdHJhc2hjYW4nLFxuXHQndHJpYW5nbGUtZG93bic6ICdvY3RpY29uIG9jdGljb24tdHJpYW5nbGUtZG93bicsXG5cdCd0cmlhbmdsZS1sZWZ0JzogJ29jdGljb24gb2N0aWNvbi10cmlhbmdsZS1sZWZ0Jyxcblx0J3RyaWFuZ2xlLXJpZ2h0JzogJ29jdGljb24gb2N0aWNvbi10cmlhbmdsZS1yaWdodCcsXG5cdCd0cmlhbmdsZS11cCc6ICdvY3RpY29uIG9jdGljb24tdHJpYW5nbGUtdXAnLFxuXHR1bmZvbGQ6ICdvY3RpY29uIG9jdGljb24tdW5mb2xkJyxcblx0dW5tdXRlOiAnb2N0aWNvbiBvY3RpY29uLXVubXV0ZScsXG5cdHZlcnNpb25zOiAnb2N0aWNvbiBvY3RpY29uLXZlcnNpb25zJyxcblx0d2F0Y2g6ICdvY3RpY29uIG9jdGljb24td2F0Y2gnLFxuXHQncmVtb3ZlLWNsb3NlJzogJ29jdGljb24gb2N0aWNvbi1yZW1vdmUtY2xvc2UnLFxuXHR4OiAnb2N0aWNvbiBvY3RpY29uLXgnLFxuXHR6YXA6ICdvY3RpY29uIG9jdGljb24temFwJyxcbn07XG4iLCJpbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c21hbGw6IHRoZW1lLmdseXBoLnNpemUuc21hbGwsXG5cdG1lZGl1bTogdGhlbWUuZ2x5cGguc2l6ZS5tZWRpdW0sXG5cdGxhcmdlOiB0aGVtZS5nbHlwaC5zaXplLmxhcmdlLFxufTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2x5cGhcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCBzaXplcyBmcm9tICcuL3NpemVzJztcblxuLy8gUHJlcGFyZSB2YXJpYW50c1xuY29uc3QgY29sb3JWYXJpYW50cyA9IHt9O1xuT2JqZWN0LmtleXMoY29sb3JzKS5mb3JFYWNoKGNvbG9yID0+IHtcblx0Y29sb3JWYXJpYW50c1tgY29sb3JfXyR7Y29sb3J9YF0gPSB7XG5cdFx0Y29sb3I6IGNvbG9yc1tjb2xvcl0sXG5cdH07XG59KTtcblxuLy8gUHJlcGFyZSBzaXplc1xuY29uc3Qgc2l6ZVZhcmlhbnRzID0ge307XG5PYmplY3Qua2V5cyhzaXplcykuZm9yRWFjaChzaXplID0+IHtcblx0c2l6ZVZhcmlhbnRzW2BzaXplX18ke3NpemV9YF0gPSB7XG5cdFx0Zm9udFNpemU6IHNpemVzW3NpemVdLFxuXHR9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRnbHlwaDoge30sXG5cblx0Ly8gQ29sb3JzXG5cdC4uLmNvbG9yVmFyaWFudHMsXG5cblx0Ly8gU2l6ZXNcblx0Li4uc2l6ZVZhcmlhbnRzLFxufTtcbiIsIi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJhcy1uZWVkZWRcIl0gKi9cblxuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBHbHlwaCBmcm9tICcuLi9HbHlwaCc7XG5cbmZ1bmN0aW9uIEdseXBoQnV0dG9uICh7XG5cdGNoaWxkcmVuLFxuXHRnbHlwaCxcblx0Z2x5cGhDb2xvcixcblx0Z2x5cGhTaXplLFxuXHRnbHlwaFN0eWxlLFxuXHRwb3NpdGlvbixcblx0Li4ucHJvcHNcbn0pIHtcblx0Y29uc3QgaXNEZWZhdWx0ID0gcG9zaXRpb24gPT09ICdkZWZhdWx0Jztcblx0Y29uc3QgaXNMZWZ0ID0gcG9zaXRpb24gPT09ICdsZWZ0Jztcblx0Y29uc3QgaXNSaWdodCA9IHBvc2l0aW9uID09PSAncmlnaHQnO1xuXG5cdGNvbnN0IG9mZnNldCA9IHt9O1xuXHRpZiAoaXNMZWZ0KSBvZmZzZXQubWFyZ2luUmlnaHQgPSAnMC41ZW0nO1xuXHRpZiAoaXNSaWdodCkgb2Zmc2V0Lm1hcmdpbkxlZnQgPSAnMC41ZW0nO1xuXG5cdGNvbnN0IGdseXBoU3R5bGVzID0ge1xuXHRcdC4uLm9mZnNldCxcblx0XHQuLi5nbHlwaFN0eWxlLFxuXHR9O1xuXG5cdGNvbnN0IGljb24gPSAoXG5cdFx0PEdseXBoXG5cdFx0XHRjc3NTdHlsZXM9e2NsYXNzZXMuZ2x5cGh9XG5cdFx0XHRjb2xvcj17Z2x5cGhDb2xvcn1cblx0XHRcdG5hbWU9e2dseXBofVxuXHRcdFx0c2l6ZT17Z2x5cGhTaXplfVxuXHRcdFx0c3R5bGU9e2dseXBoU3R5bGVzfVxuXHRcdC8+XG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8QnV0dG9uIHsuLi5wcm9wc30+XG5cdFx0XHR7KGlzRGVmYXVsdCB8fCBpc0xlZnQpICYmIGljb259XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHR7aXNSaWdodCAmJiBpY29ufVxuXHRcdDwvQnV0dG9uPlxuXHQpO1xufTtcblxuLy8gRm9yIHByb3BzIFwiZ2x5cGhcIiwgXCJnbHlwaENvbG9yXCIsIGFuZCBcImdseXBoU2l6ZVwiOlxuLy8gcHJvcCB0eXBlIHZhbGlkYXRpb24gd2lsbCBvY2N1ciB3aXRoaW4gdGhlIEdseXBoIGNvbXBvbmVudCwgbm8gbmVlZCB0b1xuLy8gZHVwbGljYXRlLCBqdXN0IHBhc3MgaXQgdGhyb3VnaC5cbkdseXBoQnV0dG9uLnByb3BUeXBlcyA9IHtcblx0Z2x5cGg6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGdseXBoQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGdseXBoU2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcblx0Z2x5cGhTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblx0cG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbGVmdCcsICdyaWdodCddKSxcbn07XG5HbHlwaEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG5cdGdseXBoU3R5bGU6IHt9LFxuXHRwb3NpdGlvbjogJ2RlZmF1bHQnLCAvLyBubyBtYXJnaW4sIGFzc3VtZXMgbm8gY2hpbGRyZW5cbn07XG5cbmNvbnN0IGNsYXNzZXMgPSB7XG5cdGdseXBoOiB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luVG9wOiAnLTAuMTI1ZW0nLCAvLyBmaXggaWNvbiBhbGlnbm1lbnRcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0fSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2x5cGhCdXR0b247XG4iLCIvKiBlc2xpbnQgcXVvdGUtcHJvcHM6IFtcImVycm9yXCIsIFwiYXMtbmVlZGVkXCJdICovXG5cbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmllbGQgZnJvbSAnLi4vRm9ybUZpZWxkJztcbmltcG9ydCBHbHlwaCBmcm9tICcuLi9HbHlwaCc7XG5cbmZ1bmN0aW9uIEdseXBoRmllbGQgKHtcblx0Y2hpbGRyZW4sXG5cdGdseXBoLFxuXHRnbHlwaENvbG9yLFxuXHRnbHlwaFNpemUsXG5cdHBvc2l0aW9uLFxuXHQuLi5wcm9wc1xufSkge1xuXHRjb25zdCBpc0xlZnQgPSBwb3NpdGlvbiA9PT0gJ2xlZnQnO1xuXHRjb25zdCBpc1JpZ2h0ID0gcG9zaXRpb24gPT09ICdyaWdodCc7XG5cblx0Y29uc3QgZ2x5cGhTdHlsZXMgPSB7fTtcblx0aWYgKGlzTGVmdCkgZ2x5cGhTdHlsZXMubWFyZ2luUmlnaHQgPSAnMC41ZW0nO1xuXHRpZiAoaXNSaWdodCkgZ2x5cGhTdHlsZXMubWFyZ2luTGVmdCA9ICcwLjVlbSc7XG5cblx0Y29uc3QgaWNvbiA9IChcblx0XHQ8R2x5cGhcblx0XHRcdGNzc1N0eWxlcz17Y2xhc3Nlcy5nbHlwaH1cblx0XHRcdGNvbG9yPXtnbHlwaENvbG9yfVxuXHRcdFx0bmFtZT17Z2x5cGh9XG5cdFx0XHRzaXplPXtnbHlwaFNpemV9XG5cdFx0XHRzdHlsZT17Z2x5cGhTdHlsZXN9XG5cdFx0Lz5cblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxGaWVsZCBjc3NTdHlsZXM9e2NsYXNzZXMud3JhcHBlcn0gey4uLnByb3BzfT5cblx0XHRcdHtpc0xlZnQgJiYgaWNvbn1cblx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdHtpc1JpZ2h0ICYmIGljb259XG5cdFx0PC9GaWVsZD5cblx0KTtcbn07XG5cbi8vIEZvciBwcm9wcyBcImdseXBoXCIsIFwiZ2x5cGhDb2xvclwiLCBhbmQgXCJnbHlwaFNpemVcIjpcbi8vIHByb3AgdHlwZSB2YWxpZGF0aW9uIHdpbGwgb2NjdXIgd2l0aGluIHRoZSBHbHlwaCBjb21wb25lbnQsIG5vIG5lZWQgdG9cbi8vIGR1cGxpY2F0ZSwganVzdCBwYXNzIGl0IHRocm91Z2guXG5HbHlwaEZpZWxkLnByb3BUeXBlcyA9IHtcblx0Z2x5cGg6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGdseXBoQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGdseXBoU2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcblx0cG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG59O1xuR2x5cGhGaWVsZC5kZWZhdWx0UHJvcHMgPSB7XG5cdHBvc2l0aW9uOiAnbGVmdCcsXG59O1xuXG5jb25zdCBjbGFzc2VzID0ge1xuXHR3cmFwcGVyOiB7XG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHR9LFxuXHRnbHlwaDoge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpblRvcDogJy0wLjEyNWVtJywgLy8gZml4IGljb24gYWxpZ25tZW50XG5cdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdseXBoRmllbGQ7XG4iLCJpbXBvcnQgQ29sIGZyb20gJy4uL0dyaWRDb2wnO1xuaW1wb3J0IFJvdyBmcm9tICcuLi9HcmlkUm93JztcblxuZXhwb3J0IHsgQ29sLCBSb3cgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5cbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbmNvbnN0IFdJRFRIUyA9IHtcblx0J29uZS13aG9sZSc6ICcxMDAlJyxcblx0J29uZS1oYWxmJzogJzUwJScsXG5cdCdvbmUtdGhpcmQnOiAnMzMuMzMlJyxcblx0J3R3by10aGlyZHMnOiAnNjYuNjYlJyxcblx0J29uZS1xdWFydGVyJzogJzI1JScsXG5cdCd0aHJlZS1xdWFydGVycyc6ICc3NSUnLFxuXG5cdCdvbmUtZmlmdGgnOiAnMjAlJyxcblx0J3R3by1maWZ0aHMnOiAnNDAlJyxcblx0J3RocmVlLWZpZnRocyc6ICc2MCUnLFxuXHQnZm91ci1maWZ0aHMnOiAnODAlJyxcblxuXHQnb25lLXNpeHRoJzogJzE2LjY2JScsXG5cdCdmaXZlLXNpeHRocyc6ICc4My4zMyUnLFxufTtcblxuY29uc3QgR3JpZENvbCA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuXHRjb25zdCBndXR0ZXIgPSBwcm9wcy5ndXR0ZXIgfHwgY29udGV4dC5ndXR0ZXI7XG5cdGNvbnN0IHhzbWFsbCA9IHByb3BzLnhzbWFsbCB8fCBjb250ZXh0LnhzbWFsbDtcblx0Y29uc3Qgc21hbGwgPSBwcm9wcy5zbWFsbCB8fCBjb250ZXh0LnNtYWxsO1xuXHRjb25zdCBtZWRpdW0gPSBwcm9wcy5tZWRpdW0gfHwgY29udGV4dC5tZWRpdW07XG5cdGNvbnN0IGxhcmdlID0gcHJvcHMubGFyZ2UgfHwgY29udGV4dC5sYXJnZTtcblxuXHRjb25zdCBjbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlc1sneHNtYWxsLScgKyB4c21hbGxdLFxuXHRcdGNsYXNzZXNbJ3NtYWxsLScgKyBzbWFsbF0sXG5cdFx0Y2xhc3Nlc1snbWVkaXVtLScgKyBtZWRpdW1dLFxuXHRcdGNsYXNzZXNbJ2xhcmdlLScgKyBsYXJnZV1cblx0KTtcblxuXHRjb25zdCBjb21wb25lbnRDbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9JHtwcm9wcy5jbGFzc05hbWUgPyAoJyAnICsgcHJvcHMuY2xhc3NOYW1lKSA6ICcnfWA7XG5cdGNvbnN0IGNvbXBvbmVudFN0eWxlcyA9IGd1dHRlciA/IHtcblx0XHRwYWRkaW5nTGVmdDogZ3V0dGVyIC8gMixcblx0XHRwYWRkaW5nUmlnaHQ6IGd1dHRlciAvIDIsXG5cdH0gOiB7fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRDbGFzc05hbWV9IHN0eWxlPXtjb21wb25lbnRTdHlsZXN9PlxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuR3JpZENvbC5jb250ZXh0VHlwZXMgPSB7XG5cdGd1dHRlcjogUHJvcFR5cGVzLm51bWJlcixcblx0bGFyZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cdG1lZGl1bTogUHJvcFR5cGVzLnN0cmluZyxcblx0c21hbGw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHhzbWFsbDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkdyaWRDb2wucHJvcFR5cGVzID0ge1xuXHRndXR0ZXI6IFByb3BUeXBlcy5udW1iZXIsXG5cdGxhcmdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRtZWRpdW06IFByb3BUeXBlcy5zdHJpbmcsXG5cdHNtYWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR4c21hbGw6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5jb25zdCBjbGFzc2VzID0ge1xuXHQuLi5wcmVwYXJlV2lkdGhzKCd4c21hbGwnLCBXSURUSFMpLFxuXHQuLi5wcmVwYXJlV2lkdGhzKCdzbWFsbCcsIFdJRFRIUyksXG5cdC4uLnByZXBhcmVXaWR0aHMoJ21lZGl1bScsIFdJRFRIUyksXG5cdC4uLnByZXBhcmVXaWR0aHMoJ2xhcmdlJywgV0lEVEhTKSxcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xuZnVuY3Rpb24gcHJlcGFyZVdpZHRocyAocHJlZml4LCBvYmopIHtcblx0bGV0IGNsYXNzZXMgPSB7fTtcblx0c3dpdGNoIChwcmVmaXgpIHtcblx0XHRjYXNlICdzbWFsbCc6XG5cdFx0XHRmb3IgKGxldCBwcm9wIGluIG9iaikge1xuXHRcdFx0XHRjbGFzc2VzW3ByZWZpeCArICctJyArIHByb3BdID0ge1xuXHRcdFx0XHRcdFtgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludC50YWJsZXRQb3J0cmFpdE1pbn0pYF06IHtcblx0XHRcdFx0XHRcdHdpZHRoOiBvYmpbcHJvcF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ21lZGl1bSc6XG5cdFx0XHRmb3IgKGxldCBwcm9wIGluIG9iaikge1xuXHRcdFx0XHRjbGFzc2VzW3ByZWZpeCArICctJyArIHByb3BdID0ge1xuXHRcdFx0XHRcdFtgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludC50YWJsZXRMYW5kc2NhcGVNaW59KWBdOiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogb2JqW3Byb3BdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdsYXJnZSc6XG5cdFx0XHRmb3IgKGxldCBwcm9wIGluIG9iaikge1xuXHRcdFx0XHRjbGFzc2VzW3ByZWZpeCArICctJyArIHByb3BdID0ge1xuXHRcdFx0XHRcdFtgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludC5kZXNrdG9wTWlufSlgXToge1xuXHRcdFx0XHRcdFx0d2lkdGg6IG9ialtwcm9wXSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG5cdFx0XHRcdGNsYXNzZXNbcHJlZml4ICsgJy0nICsgcHJvcF0gPSB7XG5cdFx0XHRcdFx0d2lkdGg6IG9ialtwcm9wXSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdyaWRDb2w7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuXG5jbGFzcyBHcmlkUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Z2V0Q2hpbGRDb250ZXh0ICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z3V0dGVyOiB0aGlzLnByb3BzLmd1dHRlcixcblx0XHRcdHhzbWFsbDogdGhpcy5wcm9wcy54c21hbGwsXG5cdFx0XHRzbWFsbDogdGhpcy5wcm9wcy5zbWFsbCxcblx0XHRcdG1lZGl1bTogdGhpcy5wcm9wcy5tZWRpdW0sXG5cdFx0XHRsYXJnZTogdGhpcy5wcm9wcy5sYXJnZSxcblx0XHR9O1xuXHR9XG5cdHJlbmRlciAoKSB7XG5cdFx0Y29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBndXR0ZXIsIHN0eWxlcyA9IHt9IH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gYCR7Y3NzKGNsYXNzZXMuZ3JpZCl9JHtjbGFzc05hbWUgPyAoJyAnICsgY2xhc3NOYW1lKSA6ICcnfWA7XG5cdFx0Y29uc3QgY29tcG9uZW50U3R5bGVzID0gT2JqZWN0LmFzc2lnbihzdHlsZXMsIHtcblx0XHRcdG1hcmdpbkxlZnQ6IGd1dHRlciAvIC0yLFxuXHRcdFx0bWFyZ2luUmlnaHQ6IGd1dHRlciAvIC0yLFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRDbGFzc05hbWV9IHN0eWxlPXtjb21wb25lbnRTdHlsZXN9PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59O1xuXG5HcmlkUm93LmNoaWxkQ29udGV4dFR5cGVzID0ge1xuXHRndXR0ZXI6IFByb3BUeXBlcy5udW1iZXIsXG5cdHhzbWFsbDogUHJvcFR5cGVzLnN0cmluZyxcblx0c21hbGw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdG1lZGl1bTogUHJvcFR5cGVzLnN0cmluZyxcblx0bGFyZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5HcmlkUm93LnByb3BUeXBlcyA9IHtcblx0Z3V0dGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRsYXJnZTogUHJvcFR5cGVzLnN0cmluZyxcblx0bWVkaXVtOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRzbWFsbDogUHJvcFR5cGVzLnN0cmluZyxcblx0eHNtYWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuR3JpZFJvdy5kZWZhdWx0UHJvcHMgPSB7XG5cdGd1dHRlcjogMCxcblx0eHNtYWxsOiAnb25lLXdob2xlJyxcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSB7XG5cdGdyaWQ6IHtcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0ZmxleFdyYXA6ICd3cmFwJyxcblx0fSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR3JpZFJvdztcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgUmVhY3QsIHsgY2xvbmVFbGVtZW50LCBDaGlsZHJlbiwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBOT1RFOiBvbmx5IGFjY2VwdHMgSW5saW5lR3JvdXBTZWN0aW9uIGFzIGEgc2luZ2xlIGNoaWxkXG5cbmZ1bmN0aW9uIElubGluZUdyb3VwICh7XG5cdGNzc1N0eWxlcyxcblx0YmxvY2ssXG5cdGNoaWxkcmVuLFxuXHRjbGFzc05hbWUsXG5cdGNvbXBvbmVudDogQ29tcG9uZW50LFxuXHRjb250aWd1b3VzLFxuXHQuLi5wcm9wc1xufSkge1xuXHQvLyBwcmVwYXJlIGdyb3VwIGNsYXNzTmFtZVxuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlcy5ncm91cCxcblx0XHQhIWJsb2NrICYmIGNsYXNzZXMuYmxvY2ssXG5cdFx0Y3NzU3R5bGVzXG5cdCk7XG5cdGlmIChjbGFzc05hbWUpIHtcblx0XHRwcm9wcy5jbGFzc05hbWUgKz0gKCcgJyArIGNsYXNzTmFtZSk7XG5cdH1cblxuXHQvLyBjb252ZXJ0IGNoaWxkcmVuIHRvIGFuIGFycmF5IGFuZCBmaWx0ZXIgb3V0IGZhbHNleSB2YWx1ZXNcblx0Y29uc3QgYnV0dG9ucyA9IENoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcihpID0+IGkpO1xuXG5cdC8vIG5vcm1hbGl6ZSB0aGUgY291bnRcblx0Y29uc3QgY291bnQgPSBidXR0b25zLmxlbmd0aCAtIDE7XG5cblx0Ly8gY2xvbmUgY2hpbGRyZW4gYW5kIGFwcGx5IGNsYXNzTmFtZXMgdGhhdCBnbGFtb3IgY2FuIHRhcmdldFxuXHRwcm9wcy5jaGlsZHJlbiA9IGJ1dHRvbnMubWFwKChjLCBpZHgpID0+IHtcblx0XHRpZiAoIWMpIHJldHVybiBudWxsO1xuXG5cdFx0Y29uc3QgaXNPbmx5Q2hpbGQgPSAhY291bnQ7XG5cdFx0Y29uc3QgaXNGaXJzdENoaWxkID0gIWlzT25seUNoaWxkICYmIGlkeCA9PT0gMDtcblx0XHRjb25zdCBpc0xhc3RDaGlsZCA9ICFpc09ubHlDaGlsZCAmJiBpZHggPT09IGNvdW50O1xuXHRcdGNvbnN0IGlzTWlkZGxlQ2hpbGQgPSAhaXNPbmx5Q2hpbGQgJiYgIWlzRmlyc3RDaGlsZCAmJiAhaXNMYXN0Q2hpbGQ7XG5cblx0XHRsZXQgcG9zaXRpb247XG5cdFx0aWYgKGlzT25seUNoaWxkKSBwb3NpdGlvbiA9ICdvbmx5Jztcblx0XHRpZiAoaXNGaXJzdENoaWxkKSBwb3NpdGlvbiA9ICdmaXJzdCc7XG5cdFx0aWYgKGlzTGFzdENoaWxkKSBwb3NpdGlvbiA9ICdsYXN0Jztcblx0XHRpZiAoaXNNaWRkbGVDaGlsZCkgcG9zaXRpb24gPSAnbWlkZGxlJztcblxuXHRcdHJldHVybiBjbG9uZUVsZW1lbnQoYywge1xuXHRcdFx0Y29udGlndW91czogY29udGlndW91cyxcblx0XHRcdHBvc2l0aW9uLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRyZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xufTtcblxuSW5saW5lR3JvdXAucHJvcFR5cGVzID0ge1xuXHRibG9jazogUHJvcFR5cGVzLmJvb2wsXG5cdGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLmZ1bmMsXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XSksXG5cdGNvbnRpZ3VvdXM6IFByb3BUeXBlcy5ib29sLFxuXHRjc3NTdHlsZXM6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0X2RlZmluaXRpb246IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdH0pLFxufTtcbklubGluZUdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnZGl2Jyxcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSB7XG5cdGdyb3VwOiB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1mbGV4Jyxcblx0fSxcblx0YmxvY2s6IHtcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElubGluZUdyb3VwO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzJztcblxuLy8gTk9URTogSW5saW5lIEdyb3VwIFNlY3Rpb24gYWNjZXB0cyBhIHNpbmdsZSBjaGlsZFxuXG5mdW5jdGlvbiBJbmxpbmVHcm91cFNlY3Rpb24gKHtcblx0YWN0aXZlLFxuXHRjc3NTdHlsZXMsXG5cdGNoaWxkcmVuLFxuXHRjbGFzc05hbWUsXG5cdGNvbnRpZ3VvdXMsXG5cdGdyb3csXG5cdHBvc2l0aW9uLFxuXHQuLi5wcm9wc1xufSkge1xuXHQvLyBldmFsdWF0ZSBwb3NpdGlvblxuXHRjb25zdCBzZXBhcmF0ZSA9IHBvc2l0aW9uID09PSAnbGFzdCcgfHwgcG9zaXRpb24gPT09ICdtaWRkbGUnO1xuXG5cdC8vIEEgYGNvbnRpZ3VvdXNgIHNlY3Rpb24gbXVzdCBtYW5pcHVsYXRlIGl0J3MgY2hpbGQgZGlyZWN0bHlcblx0Ly8gQSBzZXBhcmF0ZSAoZGVmYXVsdCkgc2VjdGlvbiBqdXN0IHdyYXBzIHRoZSBjaGlsZFxuXHRyZXR1cm4gY29udGlndW91cyA/IGNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuXHRcdGNzc1N0eWxlczogW1xuXHRcdFx0Y2xhc3Nlcy5jb250aWd1b3VzLFxuXHRcdFx0Y2xhc3Nlc1snY29udGlndW91c19fJyArIHBvc2l0aW9uXSxcblx0XHRcdGFjdGl2ZSA/IGNsYXNzZXMuYWN0aXZlIDogbnVsbCxcblx0XHRcdGdyb3cgPyBjbGFzc2VzLmdyb3cgOiBudWxsLFxuXHRcdFx0Y3NzU3R5bGVzLFxuXHRcdF0sXG5cdFx0Li4ucHJvcHMsXG5cdH0pIDogKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjc3MoXG5cdFx0XHQhIWdyb3cgJiYgY2xhc3Nlcy5ncm93LFxuXHRcdFx0ISFzZXBhcmF0ZSAmJiBjbGFzc2VzLnNlcGFyYXRlLFxuXHRcdFx0Y3NzU3R5bGVzXG5cdFx0KX0gey4uLnByb3BzfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbklubGluZUdyb3VwU2VjdGlvbi5wcm9wVHlwZXMgPSB7XG5cdGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsIC8vIGJ1dHRvbnMgb25seVxuXHRjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcblx0Y29udGlndW91czogUHJvcFR5cGVzLmJvb2wsXG5cdGdyb3c6IFByb3BUeXBlcy5ib29sLFxuXHRwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnZmlyc3QnLCAnbGFzdCcsICdtaWRkbGUnLCAnb25seSddKSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5saW5lR3JvdXBTZWN0aW9uO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJbmxpbmUgR3JvdXA6IFNlY3Rpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBUYWtlcyBvbmx5IEZvcm1JbnB1dCBhbmQgQnV0dG9uIGFzIGNoaWxkcmVuLCByZW5kZXJpbmcgdGhlbSBhcyBhXG4vLyB0aWR5IGlubGluZSBhcnJheVxuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Ly8gcHVsbCBhY3RpdmUgZWxlbWVudHMgdXBcblx0YWN0aXZlOiB7XG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdH0sXG5cblx0Ly8gc3RyZXRjaCB0byBmaWxsIGF2YWlsYWJsZSB3aWR0aFxuXHRncm93OiB7XG5cdFx0ZmxleDogJzEgMSAwJyxcblx0fSxcblxuXHQvLyBzZXBhcmF0ZSBhcHBsaWNhYmxlIG5vbi1jb250aWd1b3VzIGVsZW1lbnRzXG5cdHNlcGFyYXRlOiB7XG5cdFx0cGFkZGluZ0xlZnQ6ICcwLjc1ZW0nLFxuXHR9LFxuXG5cdC8vIENvbnRpZ3VvdXM6IG1hbmlwdWxhdGUgY2hpbGRyZW4gZGlyZWN0bHlcblxuXHQvLyBwdWxsIGZvY3VzZWQgY29udGlndW91cyBlbGVtZW50cyB1cFxuXHRjb250aWd1b3VzOiB7XG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdFx0ekluZGV4OiAxLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gcG9zaXRpb25cblx0Y29udGlndW91c19fbWlkZGxlOiB7XG5cdFx0Ym9yZGVyUmFkaXVzOiAwLFxuXHRcdG1hcmdpbkxlZnQ6IHRoZW1lLmJ1dHRvbi5ib3JkZXJXaWR0aCAqIC0xLFxuXHR9LFxuXHRjb250aWd1b3VzX19maXJzdDoge1xuXHRcdGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnMCAhaW1wb3J0YW50Jyxcblx0XHRib3JkZXJUb3BSaWdodFJhZGl1czogJzAgIWltcG9ydGFudCcsXG5cdH0sXG5cdGNvbnRpZ3VvdXNfX2xhc3Q6IHtcblx0XHRib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAnMCAhaW1wb3J0YW50Jyxcblx0XHRib3JkZXJUb3BMZWZ0UmFkaXVzOiAnMCAhaW1wb3J0YW50Jyxcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5idXR0b24uYm9yZGVyV2lkdGggKiAtMSxcblx0fSxcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzJztcblxuZnVuY3Rpb24gTGFiZWxsZWRDb250cm9sICh7XG5cdGNsYXNzTmFtZSxcblx0aW5saW5lLFxuXHRsYWJlbCxcblx0dGl0bGUsXG5cdC4uLnByb3BzXG59KSB7XG5cdGNvbnN0IGxhYmVsQ2xhc3NOYW1lID0gY3NzKFxuXHRcdGNsYXNzZXMud3JhcHBlcixcblx0XHRpbmxpbmUgJiYgY2xhc3Nlcy53cmFwcGVyX19pbmxpbmUsXG5cdFx0Y2xhc3NOYW1lXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8bGFiZWwgdGl0bGU9e3RpdGxlfSBjbGFzc05hbWU9e2xhYmVsQ2xhc3NOYW1lfT5cblx0XHRcdDxpbnB1dCB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuY29udHJvbCl9IC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmxhYmVsKX0+e2xhYmVsfTwvc3Bhbj5cblx0XHQ8L2xhYmVsPlxuXHQpO1xufTtcblxuTGFiZWxsZWRDb250cm9sLnByb3BUeXBlcyA9IHtcblx0aW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcblx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2NoZWNrYm94JywgJ3JhZGlvJ10pLmlzUmVxdWlyZWQsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExhYmVsbGVkQ29udHJvbDtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQWxlcnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiBlc2xpbnQgcXVvdGUtcHJvcHM6IFtcImVycm9yXCIsIFwiYXMtbmVlZGVkXCJdICovXG5cbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHR3cmFwcGVyOiB7XG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRoZWlnaHQ6IHRoZW1lLmlucHV0LmhlaWdodCxcblx0XHRsaW5lSGVpZ2h0OiB0aGVtZS5pbnB1dC5saW5lSGVpZ2h0LFxuXHR9LFxuXHR3cmFwcGVyX19pbmxpbmU6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lJyxcblx0fSxcblxuXHQvLyBjaGVja2JveCBvciByYWRpb1xuXHRjb250cm9sOiB7XG5cdFx0bWFyZ2luUmlnaHQ6ICcwLjVlbScsXG5cdH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9TcGlubmVyJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbmZ1bmN0aW9uIExvYWRpbmdCdXR0b24gKHsgY2hpbGRyZW4sIGxvYWRpbmcsIC4uLnByb3BzIH0pIHtcblx0Ly8gZGV0ZXJtaW5lIHRoZSBjb3JyZWN0IHZhcmlhbnQgZm9yIHRoZSBzcGlubmVyLFxuXHQvLyBmaWxsIGlzIHRoZSBkZWZhdWx0IHZhcmlhbnQgb24gQnV0dG9uXG5cdGNvbnN0IHZhcmlhbnQgPSBwcm9wcy52YXJpYW50IHx8ICdmaWxsJztcblxuXHQvLyBkZXRlcm1pbmUgdGhlIGNvcnJlY3QgY29sb3IgZm9yIHRoZSBzcGlubmVyLFxuXHQvLyBjYW5jZWwgYW5kIGRlbGV0ZSBhbGlhcyB0byBcImRhbmdlclwiXG5cdGxldCBjb2xvcjtcblx0aWYgKHByb3BzLmNvbG9yID09PSAnY2FuY2VsJyB8fCBwcm9wcy5jb2xvciA9PT0gJ2RlbGV0ZScpIGNvbG9yID0gJ2Rhbmdlcic7XG5cblx0Ly8gbWVyZ2UgYWxsIHRoZSB2YXJpYW50L2NvbG9yIHRvZ2V0aGVyXG5cdGNvbnN0IGZvcm1hdHRlZENvbG9yID0gdmFyaWFudCA9PT0gJ2ZpbGwnICYmIHByb3BzLmNvbG9yICE9PSAnZGVmYXVsdCdcblx0XHQ/ICdpbnZlcnRlZCdcblx0XHQ6IGNvbG9yO1xuXG5cdC8vIHJlbmRlciB0aGUgc3Bpbm5lciBpZiByZXF1aXJlZFxuXHRjb25zdCBzcGlubmVyID0gbG9hZGluZyAmJiAoXG5cdFx0PFNwaW5uZXJcblx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRjb2xvcj17Zm9ybWF0dGVkQ29sb3J9XG5cdFx0Lz5cblx0KTtcblxuXHQvLyBzbGlkZSB0aGUgc3Bpbm5lciBpbiBhbmQgb3V0IG9mIHZpZXdcblx0Y29uc3Qgc3Bpbm5lclN0eWxlcyA9IHtcblx0XHR3aWR0aDogbG9hZGluZ1xuXHRcdFx0PyAodGhlbWUuc3Bpbm5lci5zaXplLnNtYWxsICogNSArIHRoZW1lLnNwYWNpbmcuc21hbGwpXG5cdFx0XHQ6IDAsXG5cdH07XG5cblx0Ly8gcmVuZGVyIGV2ZXJ5dGhpbmdcblx0cmV0dXJuIChcblx0XHQ8QnV0dG9uIHsuLi5wcm9wc30+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLnNwaW5uZXIpfSBzdHlsZT17c3Bpbm5lclN0eWxlc30+XG5cdFx0XHRcdHtzcGlubmVyfVxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvQnV0dG9uPlxuXHQpO1xufTtcblxuTG9hZGluZ0J1dHRvbi5wcm9wVHlwZXMgPSB7XG5cdGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxufTtcbkxvYWRpbmdCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuXHRsb2FkaW5nOiBmYWxzZSxcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSB7XG5cdHNwaW5uZXI6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0dGV4dEFsaWduOiAnbGVmdCcsXG5cdFx0dHJhbnNpdGlvbjogJ3dpZHRoIDIwMG1zIGVhc2Utb3V0Jyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0fSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9hZGluZ0J1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxuZnVuY3Rpb24gTW9kYWxCb2R5ICh7XG5cdGNsYXNzTmFtZSxcblx0Li4ucHJvcHNcbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmJvZHksIGNsYXNzTmFtZSl9XG5cdFx0XHR7Li4ucHJvcHN9XG5cdFx0Lz5cblx0KTtcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSB7XG5cdGJvZHk6IHtcblx0XHRwYWRkaW5nQm90dG9tOiB0aGVtZS5tb2RhbC5wYWRkaW5nLmJvZHkudmVydGljYWwsXG5cdFx0cGFkZGluZ0xlZnQ6IHRoZW1lLm1vZGFsLnBhZGRpbmcuYm9keS5ob3Jpem9udGFsLFxuXHRcdHBhZGRpbmdSaWdodDogdGhlbWUubW9kYWwucGFkZGluZy5ib2R5Lmhvcml6b250YWwsXG5cdFx0cGFkZGluZ1RvcDogdGhlbWUubW9kYWwucGFkZGluZy5ib2R5LnZlcnRpY2FsLFxuXHR9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbEJvZHk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IFNjcm9sbExvY2sgZnJvbSAnLi4vU2Nyb2xsTG9jayc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uL1BvcnRhbCc7XG5cbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbmNvbnN0IGNhblVzZURvbSA9ICEhKFxuXHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuXHQmJiB3aW5kb3cuZG9jdW1lbnRcblx0JiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcbik7XG5cbmNsYXNzIE1vZGFsRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2sgPSB0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUtleWJvYXJkSW5wdXQgPSB0aGlzLmhhbmRsZUtleWJvYXJkSW5wdXQuYmluZCh0aGlzKTtcblx0fVxuXHRnZXRDaGlsZENvbnRleHQgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRvbkNsb3NlOiB0aGlzLnByb3BzLm9uQ2xvc2UsXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcblx0XHRpZiAoIWNhblVzZURvbSkgcmV0dXJuO1xuXG5cdFx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuXHRcdGlmIChuZXh0UHJvcHMuaXNPcGVuICYmIG5leHRQcm9wcy5lbmFibGVLZXlib2FyZElucHV0KSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5Ym9hcmRJbnB1dCk7XG5cdFx0fVxuXHRcdGlmICghbmV4dFByb3BzLmlzT3BlbiAmJiBuZXh0UHJvcHMuZW5hYmxlS2V5Ym9hcmRJbnB1dCkge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWJvYXJkSW5wdXQpO1xuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZW5hYmxlS2V5Ym9hcmRJbnB1dCkge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWJvYXJkSW5wdXQpO1xuXHRcdH1cblx0fVxuXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLyBNZXRob2RzXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdGhhbmRsZUtleWJvYXJkSW5wdXQgKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRoYW5kbGVCYWNrZHJvcENsaWNrIChlKSB7XG5cdFx0aWYgKGUudGFyZ2V0ICE9PSB0aGlzLnJlZnMuY29udGFpbmVyKSByZXR1cm47XG5cblx0XHR0aGlzLnByb3BzLm9uQ2xvc2UoKTtcblx0fVxuXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLyBSZW5kZXJlcnNcblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblx0cmVuZGVyRGlhbG9nICgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRiYWNrZHJvcENsb3Nlc01vZGFsLFxuXHRcdFx0Y2hpbGRyZW4sXG5cdFx0XHRpc09wZW4sXG5cdFx0XHR3aWR0aCxcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGlmICghaXNPcGVuKSByZXR1cm4gPHNwYW4ga2V5PVwiY2xvc2VkXCIgLz47XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmNvbnRhaW5lcil9XG5cdFx0XHRcdGtleT1cIm9wZW5cIlxuXHRcdFx0XHRyZWY9XCJjb250YWluZXJcIlxuXHRcdFx0XHRvbkNsaWNrPXshIWJhY2tkcm9wQ2xvc2VzTW9kYWwgJiYgdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrfVxuXHRcdFx0XHRvblRvdWNoRW5kPXshIWJhY2tkcm9wQ2xvc2VzTW9kYWwgJiYgdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuZGlhbG9nKX0gc3R5bGU9e3sgd2lkdGggfX0gZGF0YS1zY3JlZW4taWQ9XCJtb2RhbC1kaWFsb2dcIj5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8U2Nyb2xsTG9jayAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UG9ydGFsPlxuXHRcdFx0XHR7dGhpcy5yZW5kZXJEaWFsb2coKX1cblx0XHRcdDwvUG9ydGFsPlxuXHRcdCk7XG5cdH1cbn07XG5cbk1vZGFsRGlhbG9nLnByb3BUeXBlcyA9IHtcblx0YmFja2Ryb3BDbG9zZXNNb2RhbDogUHJvcFR5cGVzLmJvb2wsXG5cdGVuYWJsZUtleWJvYXJkSW5wdXQ6IFByb3BUeXBlcy5ib29sLFxuXHRpc09wZW46IFByb3BUeXBlcy5ib29sLFxuXHRvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHR3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5Nb2RhbERpYWxvZy5kZWZhdWx0UHJvcHMgPSB7XG5cdGVuYWJsZUtleWJvYXJkSW5wdXQ6IHRydWUsXG5cdHdpZHRoOiA3NjgsXG59O1xuTW9kYWxEaWFsb2cuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG5cdG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBjbGFzc2VzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLm1vZGFsLmJhY2tncm91bmQsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHRsZWZ0OiAwLFxuXHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdHRvcDogMCxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdHpJbmRleDogdGhlbWUubW9kYWwuekluZGV4LFxuXHR9LFxuXHRkaWFsb2c6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG5cdFx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuZGVmYXVsdCxcblx0XHRtYXhIZWlnaHQ6ICc5MCUnLFxuXHRcdG92ZXJmbG93WTogJ2F1dG8nLFxuXHRcdHBhZGRpbmdCb3R0b206IHRoZW1lLm1vZGFsLnBhZGRpbmcuZGlhbG9nLnZlcnRpY2FsLFxuXHRcdHBhZGRpbmdMZWZ0OiB0aGVtZS5tb2RhbC5wYWRkaW5nLmRpYWxvZy5ob3Jpem9udGFsLFxuXHRcdHBhZGRpbmdSaWdodDogdGhlbWUubW9kYWwucGFkZGluZy5kaWFsb2cuaG9yaXpvbnRhbCxcblx0XHRwYWRkaW5nVG9wOiB0aGVtZS5tb2RhbC5wYWRkaW5nLmRpYWxvZy52ZXJ0aWNhbCxcblx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsRGlhbG9nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5mdW5jdGlvbiBNb2RhbEZvb3RlciAoe1xuXHRhbGlnbixcblx0Y2xhc3NOYW1lLFxuXHQuLi5wcm9wc1xufSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgey4uLnByb3BzfSBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmZvb3RlciwgY2xhc3Nlc1snYWxpZ25fXycgKyBhbGlnbl0sIGNsYXNzTmFtZSl9IC8+XG5cdCk7XG59O1xuXG5Nb2RhbEZvb3Rlci5wcm9wVHlwZXMgPSB7XG5cdGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydjZW50ZXInLCAnbGVmdCcsICdyaWdodCddKSxcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXHRvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblx0c2hvd0Nsb3NlQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcblx0dGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5Nb2RhbEZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7XG5cdGFsaWduOiAnbGVmdCcsXG59O1xuXG5jb25zdCBjbGFzc2VzID0ge1xuXHRmb290ZXI6IHtcblx0XHRib3JkZXJUb3A6IGAycHggc29saWQgJHt0aGVtZS5jb2xvci5ncmF5MTB9YCxcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0cGFkZGluZ0JvdHRvbTogdGhlbWUubW9kYWwucGFkZGluZy5mb290ZXIudmVydGljYWwsXG5cdFx0cGFkZGluZ0xlZnQ6IHRoZW1lLm1vZGFsLnBhZGRpbmcuZm9vdGVyLmhvcml6b250YWwsXG5cdFx0cGFkZGluZ1JpZ2h0OiB0aGVtZS5tb2RhbC5wYWRkaW5nLmZvb3Rlci5ob3Jpem9udGFsLFxuXHRcdHBhZGRpbmdUb3A6IHRoZW1lLm1vZGFsLnBhZGRpbmcuZm9vdGVyLnZlcnRpY2FsLFxuXHR9LFxuXG5cdC8vIGFsaWdubWVudFxuXHRhbGlnbl9fbGVmdDoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG5cdH0sXG5cdGFsaWduX19jZW50ZXI6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdH0sXG5cdGFsaWduX19yaWdodDoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuXHR9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IEdseXBoQnV0dG9uIGZyb20gJy4uL0dseXBoQnV0dG9uJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbmZ1bmN0aW9uIE1vZGFsSGVhZGVyICh7XG5cdGNoaWxkcmVuLFxuXHRjbGFzc05hbWUsXG5cdHNob3dDbG9zZUJ1dHRvbixcblx0dGV4dCxcblx0Li4ucHJvcHNcbn0sIHtcblx0b25DbG9zZSxcbn0pIHtcblx0Ly8gUHJvcGVydHkgVmlvbGF0aW9uXG5cdGlmIChjaGlsZHJlbiAmJiB0ZXh0KSB7XG5cdFx0Y29uc29sZS5lcnJvcignV2FybmluZzogTW9kYWxIZWFkZXIgY2Fubm90IHJlbmRlciBgY2hpbGRyZW5gIGFuZCBgdGV4dGAuIFlvdSBtdXN0IHByb3ZpZGUgb25lIG9yIHRoZSBvdGhlci4nKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuaGVhZGVyLCBjbGFzc05hbWUpfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy5ncm93KX0+XG5cdFx0XHRcdHt0ZXh0ID8gKFxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLnRleHQpfT5cblx0XHRcdFx0XHRcdHt0ZXh0fVxuXHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdCkgOiBjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdFx0eyEhb25DbG9zZSAmJiBzaG93Q2xvc2VCdXR0b24gJiYgKFxuXHRcdFx0XHQ8R2x5cGhCdXR0b25cblx0XHRcdFx0XHRjc3NTdHlsZXM9e2NsYXNzZXMuY2xvc2V9XG5cdFx0XHRcdFx0Y29sb3I9XCJjYW5jZWxcIlxuXHRcdFx0XHRcdGdseXBoPVwieFwiXG5cdFx0XHRcdFx0b25DbGljaz17b25DbG9zZX1cblx0XHRcdFx0XHR2YXJpYW50PVwibGlua1wiXG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTW9kYWxIZWFkZXIucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cdG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXHRzaG93Q2xvc2VCdXR0b246IFByb3BUeXBlcy5ib29sLFxuXHR0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbk1vZGFsSGVhZGVyLmNvbnRleHRUeXBlcyA9IHtcblx0b25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSB7XG5cdGhlYWRlcjoge1xuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAke3RoZW1lLmNvbG9yLmdyYXkxMH1gLFxuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRwYWRkaW5nQm90dG9tOiB0aGVtZS5tb2RhbC5wYWRkaW5nLmhlYWRlci52ZXJ0aWNhbCxcblx0XHRwYWRkaW5nTGVmdDogdGhlbWUubW9kYWwucGFkZGluZy5oZWFkZXIuaG9yaXpvbnRhbCxcblx0XHRwYWRkaW5nUmlnaHQ6IHRoZW1lLm1vZGFsLnBhZGRpbmcuaGVhZGVyLmhvcml6b250YWwsXG5cdFx0cGFkZGluZ1RvcDogdGhlbWUubW9kYWwucGFkZGluZy5oZWFkZXIudmVydGljYWwsXG5cdH0sXG5cblx0Ly8gZmlsbCBzcGFjZSB0byBwdXNoIHRoZSBjbG9zZSBidXR0b24gcmlnaHRcblx0Z3Jvdzoge1xuXHRcdGZsZXhHcm93OiAxLFxuXHR9LFxuXG5cdC8vIHRpdGxlIHRleHRcblx0dGV4dDoge1xuXHRcdGNvbG9yOiAnaW5oZXJpdCcsXG5cdFx0Zm9udFNpemU6IDE4LFxuXHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRsaW5lSGVpZ2h0OiAxLFxuXHRcdG1hcmdpbjogMCxcblx0fSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kYWxIZWFkZXI7XG4iLCJpbXBvcnQgQm9keSBmcm9tICcuL2JvZHknO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL2RpYWxvZyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuXG5leHBvcnQge1xuXHRCb2R5LFxuXHREaWFsb2csXG5cdEZvb3Rlcixcblx0SGVhZGVyLFxufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxuY2xhc3MgUGFnaW5hdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlckNvdW50ICgpIHtcblx0XHRsZXQgY291bnQgPSAnJztcblx0XHRjb25zdCB7IGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSwgcGx1cmFsLCBzaW5ndWxhciwgdG90YWwgfSA9IHRoaXMucHJvcHM7XG5cdFx0aWYgKCF0b3RhbCkge1xuXHRcdFx0Y291bnQgPSAnTm8gJyArIChwbHVyYWwgfHwgJ3JlY29yZHMnKTtcblx0XHR9IGVsc2UgaWYgKHRvdGFsID4gcGFnZVNpemUpIHtcblx0XHRcdGxldCBzdGFydCA9IChwYWdlU2l6ZSAqIChjdXJyZW50UGFnZSAtIDEpKSArIDE7XG5cdFx0XHRsZXQgZW5kID0gTWF0aC5taW4oc3RhcnQgKyBwYWdlU2l6ZSAtIDEsIHRvdGFsKTtcblx0XHRcdGNvdW50ID0gYFNob3dpbmcgJHtzdGFydH0gdG8gJHtlbmR9IG9mICR7dG90YWx9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y291bnQgPSAnU2hvd2luZyAnICsgdG90YWw7XG5cdFx0XHRpZiAodG90YWwgPiAxICYmIHBsdXJhbCkge1xuXHRcdFx0XHRjb3VudCArPSAnICcgKyBwbHVyYWw7XG5cdFx0XHR9IGVsc2UgaWYgKHRvdGFsID09PSAxICYmIHNpbmd1bGFyKSB7XG5cdFx0XHRcdGNvdW50ICs9ICcgJyArIHNpbmd1bGFyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmNvdW50KX0gZGF0YS1lMmUtcGFnaW5hdGlvbi1jb3VudD57Y291bnR9PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRyZW5kZXJQYWdlcyAoKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50UGFnZSwgbGltaXQsIG9uUGFnZVNlbGVjdCwgcGFnZVNpemUsIHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKHRvdGFsIDw9IHBhZ2VTaXplKSByZXR1cm4gbnVsbDtcblxuXHRcdGxldCBwYWdlcyA9IFtdO1xuXHRcdGxldCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsIC8gcGFnZVNpemUpO1xuXHRcdGxldCBtaW5QYWdlID0gMTtcblx0XHRsZXQgbWF4UGFnZSA9IHRvdGFsUGFnZXM7XG5cblx0XHRpZiAobGltaXQgJiYgKGxpbWl0IDwgdG90YWxQYWdlcykpIHtcblx0XHRcdGxldCByaWdodExpbWl0ID0gTWF0aC5mbG9vcihsaW1pdCAvIDIpO1xuXHRcdFx0bGV0IGxlZnRMaW1pdCA9IHJpZ2h0TGltaXQgKyAobGltaXQgJSAyKSAtIDE7XG5cdFx0XHRtaW5QYWdlID0gY3VycmVudFBhZ2UgLSBsZWZ0TGltaXQ7XG5cdFx0XHRtYXhQYWdlID0gY3VycmVudFBhZ2UgKyByaWdodExpbWl0O1xuXG5cdFx0XHRpZiAobWluUGFnZSA8IDEpIHtcblx0XHRcdFx0bWF4UGFnZSA9IGxpbWl0O1xuXHRcdFx0XHRtaW5QYWdlID0gMTtcblx0XHRcdH1cblx0XHRcdGlmIChtYXhQYWdlID4gdG90YWxQYWdlcykge1xuXHRcdFx0XHRtaW5QYWdlID0gdG90YWxQYWdlcyAtIGxpbWl0ICsgMTtcblx0XHRcdFx0bWF4UGFnZSA9IHRvdGFsUGFnZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChtaW5QYWdlID4gMSkge1xuXHRcdFx0cGFnZXMucHVzaCg8UGFnZSBrZXk9XCJwYWdlX3N0YXJ0XCIgb25DbGljaz17KCkgPT4gb25QYWdlU2VsZWN0KDEpfT4uLi48L1BhZ2U+KTtcblx0XHR9XG5cdFx0Zm9yIChsZXQgcGFnZSA9IG1pblBhZ2U7IHBhZ2UgPD0gbWF4UGFnZTsgcGFnZSsrKSB7XG5cdFx0XHRsZXQgc2VsZWN0ZWQgPSAocGFnZSA9PT0gY3VycmVudFBhZ2UpO1xuXHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cdFx0XHRwYWdlcy5wdXNoKDxQYWdlIGtleT17J3BhZ2VfJyArIHBhZ2V9IHNlbGVjdGVkPXtzZWxlY3RlZH0gb25DbGljaz17KCkgPT4gb25QYWdlU2VsZWN0KHBhZ2UpfT57cGFnZX08L1BhZ2U+KTtcblx0XHRcdC8qIGVzbGludC1lbmFibGUgKi9cblx0XHR9XG5cdFx0aWYgKG1heFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XG5cdFx0XHRwYWdlcy5wdXNoKDxQYWdlIGtleT1cInBhZ2VfZW5kXCIgb25DbGljaz17KCkgPT4gb25QYWdlU2VsZWN0KHRvdGFsUGFnZXMpfT4uLi48L1BhZ2U+KTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy5saXN0KX0+XG5cdFx0XHRcdHtwYWdlc31cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0cmVuZGVyICgpIHtcblx0XHRjb25zdCBjbGFzc05hbWUgPSBjc3MoY2xhc3Nlcy5jb250YWluZXIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5yZW5kZXJDb3VudCgpfVxuXHRcdFx0XHR7dGhpcy5yZW5kZXJQYWdlcygpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcblxuY29uc3QgY2xhc3NlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRsaW5lSGVpZ2h0OiB0aGVtZS5jb21wb25lbnQubGluZUhlaWdodCxcblx0XHRtYXJnaW5Cb3R0b206ICcyZW0nLFxuXHR9LFxuXHRjb3VudDoge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpblJpZ2h0OiAnMWVtJyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0fSxcblx0bGlzdDoge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHR9LFxufTtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0Y3VycmVudFBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0bGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG5cdG9uUGFnZVNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cdHBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdHBsdXJhbDogUHJvcFR5cGVzLnN0cmluZyxcblx0c2luZ3VsYXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXHR0b3RhbDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWdpbmF0aW9uO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5mdW5jdGlvbiBQYWdlICh7XG5cdGRpc2FibGVkLFxuXHRzZWxlY3RlZCxcblx0Li4ucHJvcHNcbn0pIHtcblx0cHJvcHMuY2xhc3NOYW1lID0gY3NzKFxuXHRcdGNsYXNzZXMucGFnZSxcblx0XHQhIWRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsXG5cdFx0ISFzZWxlY3RlZCAmJiBjbGFzc2VzLnNlbGVjdGVkXG5cdCk7XG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvbiB7Li4ucHJvcHN9IC8+XG5cdCk7XG59O1xuXG5QYWdlLnByb3BUeXBlcyA9IHtcblx0ZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG4vKiBlc2xpbnQgcXVvdGUtcHJvcHM6IFtcImVycm9yXCIsIFwiYXMtbmVlZGVkXCJdICovXG5cbmNvbnN0IHNlbGVjdGVkU3R5bGUgPSB7XG5cdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFnaW5hdGlvbi5zZWxlY3RlZC5iYWNrZ3JvdW5kLFxuXHRib3JkZXJDb2xvcjogdGhlbWUucGFnaW5hdGlvbi5zZWxlY3RlZC5ib3JkZXIsXG5cdGNvbG9yOiB0aGVtZS5wYWdpbmF0aW9uLnNlbGVjdGVkLmNvbG9yLFxuXHRjdXJzb3I6ICdkZWZhdWx0Jyxcblx0ekluZGV4OiAyLFxufTtcbmNvbnN0IHBzZXVkb1N0eWxlID0ge1xuXHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhZ2luYXRpb24uaG92ZXIuYmFja2dyb3VuZCxcblx0Ym9yZGVyQ29sb3I6IHRoZW1lLnBhZ2luYXRpb24uaG92ZXIuYm9yZGVyLFxuXHRjb2xvcjogdGhlbWUucGFnaW5hdGlvbi5ob3Zlci5jb2xvcixcblx0b3V0bGluZTogJ25vbmUnLFxufTtcblxuY29uc3QgY2xhc3NlcyA9IHtcblx0cGFnZToge1xuXHRcdGFwcGVhcmFuY2U6ICdub25lJyxcblx0XHRiYWNrZ3JvdW5kOiAnbm9uZScsXG5cdFx0Ym9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50Jyxcblx0XHRib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5kZWZhdWx0LFxuXHRcdGNvbG9yOiB0aGVtZS5wYWdpbmF0aW9uLmNvbG9yLFxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdGZsb2F0OiAnbGVmdCcsIC8vIENvbGxhcHNlIHdoaXRlLXNwYWNlXG5cdFx0bWFyZ2luUmlnaHQ6ICcwLjI1ZW0nLFxuXHRcdHBhZGRpbmc6ICcwIC43ZW0nLFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG5cblx0XHQvLyBoYW5kbGUgaG92ZXIgYW5kIGZvY3VzXG5cdFx0Jzpob3Zlcic6IHBzZXVkb1N0eWxlLFxuXHRcdCc6Zm9jdXMnOiBwc2V1ZG9TdHlsZSxcblx0fSxcblxuXHQvLyBzZWxlY3RlZCBwYWdlXG5cdHNlbGVjdGVkOiB7XG5cdFx0Li4uc2VsZWN0ZWRTdHlsZSxcblxuXHRcdCc6aG92ZXInOiBzZWxlY3RlZFN0eWxlLFxuXHRcdCc6Zm9jdXMnOiBzZWxlY3RlZFN0eWxlLFxuXHR9LFxuXG5cdC8vIGRpc2FibGVkIHBhZ2VcblxuXHRkaXNhYmxlZDoge1xuXHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFnaW5hdGlvbi5kaXNhYmxlZC5iYWNrZ3JvdW5kLFxuXHRcdGJvcmRlckNvbG9yOiB0aGVtZS5wYWdpbmF0aW9uLmRpc2FibGVkLmJhY2tncm91bmQsXG5cdFx0Y29sb3I6IHRoZW1lLnBhZ2luYXRpb24uZGlzYWJsZWQuY29sb3IsXG5cdFx0Y3Vyc29yOiAnZGVmYXVsdCcsXG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwiaW1wb3J0IHsgQ2hpbGRyZW4sIENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBQYXNzIHRoZSBMaWdodGJveCBjb250ZXh0IHRocm91Z2ggdG8gdGhlIFBvcnRhbCdzIGRlc2NlbmRlbnRzXG4vLyBTdGFja092ZXJmbG93IGRpc2N1c3Npb24gaHR0cDovL2dvby5nbC9vY2xySjlcblxuY2xhc3MgUGFzc0NvbnRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRnZXRDaGlsZENvbnRleHQgKCkge1xuXHRcdHJldHVybiB0aGlzLnByb3BzLmNvbnRleHQ7XG5cdH1cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcblx0fVxufTtcblxuUGFzc0NvbnRleHQucHJvcFR5cGVzID0ge1xuXHRjb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuUGFzc0NvbnRleHQuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG5cdG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc0NvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQYXNzQ29udGV4dCBmcm9tICcuLi9QYXNzQ29udGV4dCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9ydGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5wb3J0YWxFbGVtZW50ID0gbnVsbDtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCAoKSB7XG5cdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocCk7XG5cdFx0dGhpcy5wb3J0YWxFbGVtZW50ID0gcDtcblx0XHR0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG5cdFx0Ly8gQW5pbWF0ZSBmYWRlIG9uIG1vdW50L3VubW91bnRcblx0XHRjb25zdCBkdXJhdGlvbiA9IDIwMDtcblx0XHRjb25zdCBzdHlsZXMgPSBgXG5cdFx0XHRcdC5mYWRlLWVudGVyIHsgb3BhY2l0eTogMC4wMTsgfVxuXHRcdFx0XHQuZmFkZS1lbnRlci5mYWRlLWVudGVyLWFjdGl2ZSB7IG9wYWNpdHk6IDE7IHRyYW5zaXRpb246IG9wYWNpdHkgJHtkdXJhdGlvbn1tczsgfVxuXHRcdFx0XHQuZmFkZS1sZWF2ZSB7IG9wYWNpdHk6IDE7IH1cblx0XHRcdFx0LmZhZGUtbGVhdmUuZmFkZS1sZWF2ZS1hY3RpdmUgeyBvcGFjaXR5OiAwLjAxOyB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7ZHVyYXRpb259bXM7IH1cblx0XHRgO1xuXHRcdHJlbmRlcihcblx0XHRcdDxQYXNzQ29udGV4dCBjb250ZXh0PXt0aGlzLmNvbnRleHR9PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxzdHlsZT57c3R5bGVzfTwvc3R5bGU+XG5cdFx0XHRcdFx0PFRyYW5zaXRpb25cblx0XHRcdFx0XHRcdGNvbXBvbmVudD1cImRpdlwiXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uTmFtZT1cImZhZGVcIlxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbkVudGVyVGltZW91dD17ZHVyYXRpb259XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXtkdXJhdGlvbn1cblx0XHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9QYXNzQ29udGV4dD4sXG5cdFx0XHR0aGlzLnBvcnRhbEVsZW1lbnRcblx0XHQpO1xuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMucG9ydGFsRWxlbWVudCk7XG5cdH1cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5Qb3J0YWwuY29udGV4dFR5cGVzID0ge1xuXHRvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG4vLyBVc2luZyB3aW5kb3cuaW5uZXJXaWR0aCBhbmQgc3RhdGUgaW5zdGVhZCBvZiBDU1MgbWVkaWEgYnJlYWtwb2ludHNcbi8vIGJlY2F1c2Ugd2Ugd2FudCB0byByZW5kZXIgbnVsbCByYXRoZXIgdGhhbiBhbiBlbXB0eSBzcGFuLiBBbGxvd2luZyBmb3Jcbi8vIENTUyBwc2V1ZG8gY2xhc3NlcyBsaWtlIDpvbmx5LWNoaWxkIHRvIGJlaGF2ZSBhcyBleHBlY3RlZC5cblxuLy8gUmV0dXJuIHRydWUgaWYgd2luZG93ICsgZG9jdW1lbnRcbmNvbnN0IGNhblVzZURPTSA9ICEhKFxuXHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuXHQmJiB3aW5kb3cuZG9jdW1lbnRcblx0JiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcbik7XG5cbmNsYXNzIFJlc3BvbnNpdmVUZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR3aW5kb3dXaWR0aDogY2FuVXNlRE9NID8gd2luZG93LmlubmVyV2lkdGggOiAwLFxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQgKCkge1xuXHRcdGlmIChjYW5Vc2VET00pIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG5cdFx0XHR0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cdFx0aWYgKGNhblVzZURPTSkge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcblx0XHR9XG5cdH1cblx0aGFuZGxlUmVzaXplICgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHdpbmRvd1dpZHRoOiBjYW5Vc2VET00gPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDAsXG5cdFx0fSk7XG5cdH1cblx0cmVuZGVyICgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRjb21wb25lbnQ6IENvbXBvbmVudCxcblx0XHRcdGhpZGRlbkxHLFxuXHRcdFx0aGlkZGVuTUQsXG5cdFx0XHRoaWRkZW5TTSxcblx0XHRcdGhpZGRlblhTLFxuXHRcdFx0dmlzaWJsZUxHLFxuXHRcdFx0dmlzaWJsZU1ELFxuXHRcdFx0dmlzaWJsZVNNLFxuXHRcdFx0dmlzaWJsZVhTLFxuXHRcdFx0Li4ucHJvcHNcblx0XHR9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IHdpbmRvd1dpZHRoIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0bGV0IHRleHQ7XG5cblx0XHQvLyBzZXQgdGV4dCB2YWx1ZSBmcm9tIGJyZWFrcG9pbnQ7IGF0dGVtcHQgWFMgLS0+IExHXG5cdFx0aWYgKHdpbmRvd1dpZHRoIDwgdGhlbWUuYnJlYWtwb2ludE51bWVyaWMubW9iaWxlKSB7XG5cdFx0XHR0ZXh0ID0gdmlzaWJsZVhTIHx8IGhpZGRlblNNIHx8IGhpZGRlbk1EIHx8IGhpZGRlbkxHO1xuXHRcdH0gZWxzZSBpZiAod2luZG93V2lkdGggPCB0aGVtZS5icmVha3BvaW50TnVtZXJpYy50YWJsZXRQb3J0cmFpdCkge1xuXHRcdFx0dGV4dCA9IGhpZGRlblhTIHx8IHZpc2libGVTTSB8fCBoaWRkZW5NRCB8fCBoaWRkZW5MRztcblx0XHR9IGVsc2UgaWYgKHdpbmRvd1dpZHRoIDwgdGhlbWUuYnJlYWtwb2ludE51bWVyaWMudGFibGV0TGFuZHNjYXBlKSB7XG5cdFx0XHR0ZXh0ID0gaGlkZGVuWFMgfHwgaGlkZGVuU00gfHwgdmlzaWJsZU1EIHx8IGhpZGRlbkxHO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZXh0ID0gaGlkZGVuWFMgfHwgaGlkZGVuU00gfHwgaGlkZGVuTUQgfHwgdmlzaWJsZUxHO1xuXHRcdH1cblxuXHRcdHJldHVybiB0ZXh0ID8gPENvbXBvbmVudCB7Li4ucHJvcHN9Pnt0ZXh0fTwvQ29tcG9uZW50PiA6IG51bGw7XG5cdH1cbn07XG5cblJlc3BvbnNpdmVUZXh0LnByb3BUeXBlcyA9IHtcblx0aGlkZGVuTEc6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGhpZGRlbk1EOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRoaWRkZW5TTTogUHJvcFR5cGVzLnN0cmluZyxcblx0aGlkZGVuWFM6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHZpc2libGVMRzogUHJvcFR5cGVzLnN0cmluZyxcblx0dmlzaWJsZU1EOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR2aXNpYmxlU006IFByb3BUeXBlcy5zdHJpbmcsXG5cdHZpc2libGVYUzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5SZXNwb25zaXZlVGV4dC5kZWZhdWx0UHJvcHMgPSB7XG5cdGNvbXBvbmVudDogJ3NwYW4nLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNwb25zaXZlVGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuXG5mdW5jdGlvbiBTY3JlZW5SZWFkZXJPbmx5ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoY2xhc3Nlcy5zck9ubHksIGNsYXNzTmFtZSk7XG5cblx0cmV0dXJuIDxzcGFuIHsuLi5wcm9wc30gLz47XG59O1xuXG5jb25zdCBjbGFzc2VzID0ge1xuXHRzck9ubHk6IHtcblx0XHRib3JkZXI6IDAsXG5cdFx0Y2xpcDogJ3JlY3QoMCwwLDAsMCknLFxuXHRcdGhlaWdodDogMSxcblx0XHRtYXJnaW46IC0xLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHdpZHRoOiAxLFxuXHR9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY3JlZW5SZWFkZXJPbmx5O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxMb2NrIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5sb2NrQ291bnQgPSAwO1xuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cblx0XHR0aGlzLmxvY2tDb3VudCsrO1xuXHRcdGlmICh0aGlzLmxvY2tDb3VudCA+IDEpIHJldHVybjtcblxuXHRcdC8vXHRGSVhNRSBpT1MgaWdub3JlcyBvdmVyZmxvdyBvbiBib2R5XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHNjcm9sbEJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXG5cdFx0XHRjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuXG5cdFx0XHR0YXJnZXQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyV2lkdGggKyAncHgnO1xuXHRcdFx0dGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZpbmQgYm9keSBlbGVtZW50LiBFcnI6JywgZXJyKTtcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLmxvY2tDb3VudCA9PT0gMCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5sb2NrQ291bnQtLTtcblx0XHRpZiAodGhpcy5sb2NrQ291bnQgPiAwKSByZXR1cm47IC8vIFN0aWxsIGxvY2tlZFxuXG5cdFx0Ly9cdEZJWE1FIGlPUyBpZ25vcmVzIG92ZXJmbG93IG9uIGJvZHlcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcblxuXHRcdFx0dGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuXHRcdFx0dGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xuXG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmluZCBib2R5IGVsZW1lbnQuIEVycjonLCBlcnIpO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG4iLCJpbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGFuZ2VyOiB0aGVtZS5jb2xvci5kYW5nZXIsXG5cdGRlZmF1bHQ6IHRoZW1lLmNvbG9yLmdyYXk4MCxcblx0ZXJyb3I6IHRoZW1lLmNvbG9yLmRhbmdlcixcblx0aW5mbzogdGhlbWUuY29sb3IuaW5mbyxcblx0cHJpbWFyeTogdGhlbWUuY29sb3IucHJpbWFyeSxcblx0c3VjY2VzczogdGhlbWUuY29sb3Iuc3VjY2Vzcyxcblx0d2FybmluZzogdGhlbWUuY29sb3Iud2FybmluZyxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuXG5mdW5jdGlvbiBTZWdtZW50ZWRDb250cm9sICh7XG5cdGNsYXNzTmFtZSxcblx0Y29sb3IsXG5cdGNyb3BUZXh0LFxuXHRlcXVhbFdpZHRoU2VnbWVudHMsXG5cdGlubGluZSxcblx0b25DaGFuZ2UsXG5cdG9wdGlvbnMsXG5cdHZhbHVlLFxuXHQuLi5wcm9wc1xufSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlcy5jb250cm9sLFxuXHRcdGlubGluZSA/IGNsYXNzZXMuY29udHJvbF9faW5saW5lIDogbnVsbCxcblx0XHRjbGFzc05hbWVcblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgey4uLnByb3BzfT5cblx0XHRcdHtvcHRpb25zLm1hcCgob3B0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGJ1dHRvbkNsYXNzTmFtZSA9IGNzcyhcblx0XHRcdFx0XHRjbGFzc2VzLmJ1dHRvbixcblx0XHRcdFx0XHRvcHQuZGlzYWJsZWQgPyBjbGFzc2VzLmJ1dHRvbl9fZGlzYWJsZWQgOiBudWxsLFxuXHRcdFx0XHRcdG9wdC52YWx1ZSA9PT0gdmFsdWUgPyBjbGFzc2VzWydidXR0b25fXycgKyBjb2xvcl0gOiBudWxsLFxuXHRcdFx0XHRcdGNyb3BUZXh0ID8gY2xhc3Nlcy5idXR0b25fX2Nyb3BUZXh0IDogbnVsbCxcblx0XHRcdFx0XHRlcXVhbFdpZHRoU2VnbWVudHMgPyBjbGFzc2VzLmJ1dHRvbl9fZXF1YWxXaWR0aCA6IG51bGxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxuXHRcdFx0XHRcdFx0a2V5PXtvcHQudmFsdWV9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXshb3B0LmRpc2FibGVkICYmICgoKSA9PiBvbkNoYW5nZShvcHQudmFsdWUpKX1cblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0dGl0bGU9e2Nyb3BUZXh0ID8gb3B0LmxhYmVsIDogbnVsbH1cblx0XHRcdFx0XHRcdHRhYkluZGV4PXtvcHQuZGlzYWJsZWQgPyAnLTEnIDogJyd9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e29wdC5sYWJlbH1cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvZGl2Pik7XG59O1xuXG5jb25zdCB2YWx1ZVByb3BTaGFwZSA9IFtcblx0UHJvcFR5cGVzLmJvb2wsXG5cdFByb3BUeXBlcy5udW1iZXIsXG5cdFByb3BUeXBlcy5zdHJpbmcsXG5dO1xuXG5TZWdtZW50ZWRDb250cm9sLnByb3BUeXBlcyA9IHtcblx0Y29sb3I6IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhjb2xvcnMpKSxcblx0Y3JvcFRleHQ6IFByb3BUeXBlcy5ib29sLCAvLyB3aGVuIGBpbmxpbmUgJiYgZXF1YWxXaWR0aFNlZ21lbnRzYCBjcm9wcyB0byB0aGUgbmV4dCBsYXJnZXN0IG9wdGlvbiBsZW5ndGhcblx0ZXF1YWxXaWR0aFNlZ21lbnRzOiBQcm9wVHlwZXMuYm9vbCwgLy8gb25seSByZWxldmFudCB3aGVuIGBpbmxpbmUgPT09IGZhbHNlYFxuXHRpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuXHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0b3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG5cdFx0UHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblx0XHRcdGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdFx0dmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUodmFsdWVQcm9wU2hhcGUpLFxuXHRcdH0pXG5cdCkuaXNSZXF1aXJlZCxcblx0dmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUodmFsdWVQcm9wU2hhcGUpLFxufTtcblNlZ21lbnRlZENvbnRyb2wuZGVmYXVsdFByb3BzID0ge1xuXHRjb2xvcjogJ2RlZmF1bHQnLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWdtZW50ZWRDb250cm9sO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZWdtZW50ZWQgQ29udHJvbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJhcy1uZWVkZWRcIl0gKi9cblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG4vLyBQcmVwYXJlIHZhcmlhbnRzXG5jb25zdCBjb2xvclZhcmlhbnRzID0ge307XG5PYmplY3Qua2V5cyhjb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuXHRjb25zdCBwc2V1ZG9TdHlsZXMgPSB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcnNbY29sb3JdLFxuXHRcdGNvbG9yOiAnd2hpdGUnLFxuXHR9O1xuXHRjb2xvclZhcmlhbnRzWydidXR0b25fXycgKyBjb2xvcl0gPSB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcnNbY29sb3JdLFxuXHRcdGNvbG9yOiAnd2hpdGUnLFxuXG5cdFx0Jzpob3Zlcic6IHBzZXVkb1N0eWxlcyxcblx0XHQnOmZvY3VzJzogcHNldWRvU3R5bGVzLFxuXHRcdCc6YWN0aXZlJzogcHNldWRvU3R5bGVzLFxuXHR9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRjb250cm9sOiB7XG5cdFx0Ym9yZGVyV2lkdGg6IDEsXG5cdFx0Ym9yZGVyU3R5bGU6ICdzb2xpZCcsXG5cdFx0Ym9yZGVyQ29sb3I6IHRoZW1lLmlucHV0LmJvcmRlci5jb2xvci5kZWZhdWx0LFxuXHRcdGJvcmRlclJhZGl1czogJzAuNGVtJyxcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0Zm9udFNpemU6IHRoZW1lLmZvbnQuc2l6ZS5zbWFsbCxcblx0XHRwYWRkaW5nTGVmdDogMSxcblx0XHRwYWRkaW5nUmlnaHQ6IDEsXG5cdH0sXG5cdGNvbnRyb2xfX2lubGluZToge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG5cdH0sXG5cblx0Ly8gYnV0dG9uc1xuXHRidXR0b246IHtcblx0XHRiYWNrZ3JvdW5kOiAnbm9uZScsXG5cdFx0Ym9yZGVyOiAwLFxuXHRcdGJvcmRlclJhZGl1czogJzAuMjVlbScsXG5cdFx0ZmxleEdyb3c6IDEsXG5cdFx0bWFyZ2luOiAnMnB4IDFweCcsXG5cdFx0cGFkZGluZzogJzAuM2VtIDAuOWVtJyxcblx0XHRvdXRsaW5lOiAwLFxuXG5cdFx0Jzpob3Zlcic6IHsgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA1KScgfSxcblx0XHQnOmZvY3VzJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDUpJyB9LFxuXHRcdCc6YWN0aXZlJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMSknIH0sXG5cdH0sXG5cdGJ1dHRvbl9fZXF1YWxXaWR0aDoge1xuXHRcdGZsZXg6ICcxIDEgMCcsXG5cdH0sXG5cdGJ1dHRvbl9fY3JvcFRleHQ6IHtcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0dGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuXHRcdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuXHR9LFxuXHRidXR0b25fX2Rpc2FibGVkOiB7XG5cdFx0b3BhY2l0eTogMC42LFxuXHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0fSxcblxuXHQvLyBjb2xvcnNcblx0Li4uY29sb3JWYXJpYW50cyxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFsnZGFuZ2VyJywgJ2RlZmF1bHQnLCAnaW52ZXJ0ZWQnLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnXTtcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IFNjcmVlblJlYWRlck9ubHkgZnJvbSAnLi4vU2NyZWVuUmVhZGVyT25seSc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCBzaXplcyBmcm9tICcuL3NpemVzJztcblxuZnVuY3Rpb24gU3Bpbm5lciAoeyBjbGFzc05hbWUsIHNpemUsIGNvbG9yLCAuLi5wcm9wcyB9KSB7XG5cdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRjbGFzc2VzLmJhc2UsXG5cdFx0Y2xhc3Nlc1tzaXplXSxcblx0XHRjbGFzc05hbWVcblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgey4uLnByb3BzfT5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17YCR7Y3NzKGNsYXNzZXMuZG90LCBjbGFzc2VzWydzaXplX18nICsgc2l6ZV0sIGNsYXNzZXNbJ2NvbG9yX18nICsgY29sb3JdLCBjbGFzc2VzLmRvdF9fZmlyc3QpfWB9IC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2Ake2NzcyhjbGFzc2VzLmRvdCwgY2xhc3Nlc1snc2l6ZV9fJyArIHNpemVdLCBjbGFzc2VzWydjb2xvcl9fJyArIGNvbG9yXSwgY2xhc3Nlcy5kb3RfX3NlY29uZCl9YH0gLz5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17YCR7Y3NzKGNsYXNzZXMuZG90LCBjbGFzc2VzWydzaXplX18nICsgc2l6ZV0sIGNsYXNzZXNbJ2NvbG9yX18nICsgY29sb3JdLCBjbGFzc2VzLmRvdF9fdGhpcmQpfWB9IC8+XG5cdFx0XHQ8U2NyZWVuUmVhZGVyT25seT5Mb2FkaW5nLi4uPC9TY3JlZW5SZWFkZXJPbmx5PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG5cdGNvbG9yOiBQcm9wVHlwZXMub25lT2YoY29sb3JzKSxcblx0c2l6ZTogUHJvcFR5cGVzLm9uZU9mKHNpemVzKSxcbn07XG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcblx0c2l6ZTogJ21lZGl1bScsXG5cdGNvbG9yOiAnZGVmYXVsdCcsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwaW5uZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ107XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNwaW5uZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCBzaXplcyBmcm9tICcuL3NpemVzJztcblxuLy8gUHJlcGFyZSB2YXJpYW50c1xuY29uc3QgY29sb3JWYXJpYW50cyA9IHt9O1xuY29sb3JzLmZvckVhY2goY29sb3IgPT4ge1xuXHRjb2xvclZhcmlhbnRzW2Bjb2xvcl9fJHtjb2xvcn1gXSA9IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnNwaW5uZXIuY29sb3JbY29sb3JdLFxuXHR9O1xufSk7XG5cbi8vIFByZXBhcmUgc2l6ZXNcbmNvbnN0IHNpemVWYXJpYW50cyA9IHt9O1xuc2l6ZXMuZm9yRWFjaChzaXplID0+IHtcblx0c2l6ZVZhcmlhbnRzW2BzaXplX18ke3NpemV9YF0gPSB7XG5cdFx0Zm9udFNpemU6IHRoZW1lLnNwaW5uZXIuc2l6ZVtzaXplXSxcblx0fTtcbn0pO1xuXG4vLyBEZWNsYXJlIGFuaW1hdGlvbiBrZXlmcmFtZXNcblxuY29uc3Qga2V5ZnJhbWVzID0gY29tcG9zZS5rZXlmcmFtZXMoJ3B1bHNlJywge1xuXHQnMCUsIDgwJSwgMTAwJSc6IHsgb3BhY2l0eTogMCB9LFxuXHQnNDAlJzogeyBvcGFjaXR5OiAxIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGJhc2U6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRsaW5lSGVpZ2h0OiAxLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0d2lkdGg6ICc1ZW0nLFxuXHR9LFxuXHRzbWFsbDpcdHsgZm9udFNpemU6IDQgfSxcblx0bWVkaXVtOlx0eyBmb250U2l6ZTogOCB9LFxuXHRsYXJnZTpcdHsgZm9udFNpemU6IDE2IH0sXG5cblx0Ly8gdGV4dFxuXHR0ZXh0OiB7XG5cdFx0Ym9yZGVyOiAwLFxuXHRcdGNsaXA6ICdyZWN0KDAsMCwwLDApJyxcblx0XHRoZWlnaHQ6IDEsXG5cdFx0bWFyZ2luOiAtMSxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0cGFkZGluZzogMCxcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR3aWR0aDogMSxcblx0fSxcblxuXHQvLyBkb3RzXG5cdGRvdDoge1xuXHRcdGFuaW1hdGlvbk5hbWU6IGtleWZyYW1lcyxcblx0XHRhbmltYXRpb25EdXJhdGlvbjogJzFzJyxcblx0XHRhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJyxcblx0XHRib3JkZXJSYWRpdXM6ICcxZW0nLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdGhlaWdodDogJzFlbScsXG5cdFx0dmVydGljYWxBbGlnbjogJ3RvcCcsXG5cdFx0d2lkdGg6ICcxZW0nLFxuXHR9LFxuXHRkb3RfX3NlY29uZDoge1xuXHRcdGFuaW1hdGlvbkRlbGF5OiAnMTYwbXMnLFxuXHRcdG1hcmdpbkxlZnQ6ICcxZW0nLFxuXHR9LFxuXHRkb3RfX3RoaXJkOiB7XG5cdFx0YW5pbWF0aW9uRGVsYXk6ICczMjBtcycsXG5cdFx0bWFyZ2luTGVmdDogJzFlbScsXG5cdH0sXG5cblx0Ly8gQ29sb3JzXG5cdC4uLmNvbG9yVmFyaWFudHMsXG5cblx0Ly8gU2l6ZXNcblx0Li4uc2l6ZVZhcmlhbnRzLFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRBbGVydDogcmVxdWlyZSgnLi9BbGVydCcpLFxuXHRCbGFua1N0YXRlOiByZXF1aXJlKCcuL0JsYW5rU3RhdGUnKSxcblx0QnV0dG9uOiByZXF1aXJlKCcuL0J1dHRvbicpLFxuXHRDZW50ZXI6IHJlcXVpcmUoJy4vQ2VudGVyJyksXG5cdENoaXA6IHJlcXVpcmUoJy4vQ2hpcCcpLFxuXHRDb250YWluZXI6IHJlcXVpcmUoJy4vQ29udGFpbmVyJyksXG5cdERyb3Bkb3duQnV0dG9uOiByZXF1aXJlKCcuL0Ryb3Bkb3duQnV0dG9uJyksXG5cdEZvcm06IHJlcXVpcmUoJy4vRm9ybScpLFxuXHRGb3JtRmllbGQ6IHJlcXVpcmUoJy4vRm9ybUZpZWxkJyksXG5cdEZvcm1JbnB1dDogcmVxdWlyZSgnLi9Gb3JtSW5wdXQnKSxcblx0Rm9ybUxhYmVsOiByZXF1aXJlKCcuL0Zvcm1MYWJlbCcpLFxuXHRGb3JtTm90ZTogcmVxdWlyZSgnLi9Gb3JtTm90ZScpLFxuXHRGb3JtU2VsZWN0OiByZXF1aXJlKCcuL0Zvcm1TZWxlY3QnKSxcblx0R2x5cGg6IHJlcXVpcmUoJy4vR2x5cGgnKSxcblx0R2x5cGhCdXR0b246IHJlcXVpcmUoJy4vR2x5cGhCdXR0b24nKSxcblx0R2x5cGhGaWVsZDogcmVxdWlyZSgnLi9HbHlwaEZpZWxkJyksXG5cdEdyaWQ6IHJlcXVpcmUoJy4vR3JpZCcpLFxuXHRJbmxpbmVHcm91cDogcmVxdWlyZSgnLi9JbmxpbmVHcm91cCcpLFxuXHRJbmxpbmVHcm91cFNlY3Rpb246IHJlcXVpcmUoJy4vSW5saW5lR3JvdXBTZWN0aW9uJyksXG5cdExhYmVsbGVkQ29udHJvbDogcmVxdWlyZSgnLi9MYWJlbGxlZENvbnRyb2wnKSxcblx0TG9hZGluZ0J1dHRvbjogcmVxdWlyZSgnLi9Mb2FkaW5nQnV0dG9uJyksXG5cdE1vZGFsOiByZXF1aXJlKCcuL01vZGFsJyksXG5cdFBhZ2luYXRpb246IHJlcXVpcmUoJy4vUGFnaW5hdGlvbicpLFxuXHRSZXNwb25zaXZlVGV4dDogcmVxdWlyZSgnLi9SZXNwb25zaXZlVGV4dCcpLFxuXHRTY3JlZW5SZWFkZXJPbmx5OiByZXF1aXJlKCcuL1NjcmVlblJlYWRlck9ubHknKSxcblx0U2VnbWVudGVkQ29udHJvbDogcmVxdWlyZSgnLi9TZWdtZW50ZWRDb250cm9sJyksXG5cdFNwaW5uZXI6IHJlcXVpcmUoJy4vU3Bpbm5lcicpLFxufTtcbiIsIi8qKlxuICogVGhlIGFjdHVhbCBTaWduIEluIHZpZXcsIHdpdGggdGhlIGxvZ2luIGZvcm1cbiAqL1xuXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHhociBmcm9tICd4aHInO1xuXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9jb21wb25lbnRzL0FsZXJ0JztcbmltcG9ydCBCcmFuZCBmcm9tICcuL2NvbXBvbmVudHMvQnJhbmQnO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4vY29tcG9uZW50cy9Vc2VySW5mbyc7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xuXG52YXIgU2lnbmluVmlldyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZW1haWw6ICcnLFxuXHRcdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdFx0aXNBbmltYXRpbmc6IGZhbHNlLFxuXHRcdFx0aXNJbnZhbGlkOiBmYWxzZSxcblx0XHRcdGludmFsaWRNZXNzYWdlOiAnJyxcblx0XHRcdHNpZ25lZE91dDogd2luZG93LmxvY2F0aW9uLnNlYXJjaCA9PT0gJz9zaWduZWRvdXQnLFxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcblx0XHQvLyBGb2N1cyB0aGUgZW1haWwgZmllbGQgd2hlbiB3ZSdyZSBtb3VudGVkXG5cdFx0aWYgKHRoaXMucmVmcy5lbWFpbCkge1xuXHRcdFx0dGhpcy5yZWZzLmVtYWlsLnNlbGVjdCgpO1xuXHRcdH1cblx0XHR0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcblx0fSxcblx0Y29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuXHRcdHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcblx0fSxcblx0aGFuZGxlSW5wdXRDaGFuZ2UgKGUpIHtcblx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZSB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzXG5cdFx0Y29uc3QgbmV3U3RhdGUgPSB7fTtcblx0XHRuZXdTdGF0ZVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXHR9LFxuXHRoYW5kbGVTdWJtaXQgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly8gSWYgZWl0aGVyIHBhc3N3b3JkIG9yIG1haWwgYXJlIG1pc3NpbmcsIHNob3cgYW4gZXJyb3Jcblx0XHRpZiAoIXRoaXMuc3RhdGUuZW1haWwgfHwgIXRoaXMuc3RhdGUucGFzc3dvcmQpIHtcblx0XHRcdHJldHVybiB0aGlzLmRpc3BsYXlFcnJvcignUGxlYXNlIGVudGVyIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkIHRvIHNpZ24gaW4uJyk7XG5cdFx0fVxuXG5cdFx0eGhyKHtcblx0XHRcdHVybDogYCR7S2V5c3RvbmUuYWRtaW5QYXRofS9hcGkvc2Vzc2lvbi9zaWduaW5gLFxuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRqc29uOiB7XG5cdFx0XHRcdGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuXHRcdFx0XHRwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCxcblx0XHRcdH0sXG5cdFx0XHRoZWFkZXJzOiBhc3NpZ24oe30sIEtleXN0b25lLmNzcmYuaGVhZGVyKSxcblx0XHR9LCAoZXJyLCByZXNwLCBib2R5KSA9PiB7XG5cdFx0XHRpZiAoZXJyIHx8IGJvZHkgJiYgYm9keS5lcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gYm9keS5lcnJvciA9PT0gJ2ludmFsaWQgY3NyZidcblx0XHRcdFx0XHQ/IHRoaXMuZGlzcGxheUVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZzsgcGxlYXNlIHJlZnJlc2ggeW91ciBicm93c2VyIGFuZCB0cnkgYWdhaW4uJylcblx0XHRcdFx0XHQ6IHRoaXMuZGlzcGxheUVycm9yKCdUaGUgZW1haWwgYW5kIHBhc3N3b3JkIHlvdSBlbnRlcmVkIGFyZSBub3QgdmFsaWQuJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBSZWRpcmVjdCB0byB3aGVyZSB3ZSBjYW1lIGZyb20gb3IgdG8gdGhlIGRlZmF1bHQgYWRtaW4gcGF0aFxuXHRcdFx0XHRpZiAoS2V5c3RvbmUucmVkaXJlY3QpIHtcblx0XHRcdFx0XHR0b3AubG9jYXRpb24uaHJlZiA9IEtleXN0b25lLnJlZGlyZWN0O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRvcC5sb2NhdGlvbi5ocmVmID0gdGhpcy5wcm9wcy5mcm9tID8gdGhpcy5wcm9wcy5mcm9tIDogS2V5c3RvbmUuYWRtaW5QYXRoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdC8qKlxuXHQgKiBEaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2Vcblx0ICpcblx0ICogQHBhcmFtICB7U3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHlvdSB3YW50IHRvIHNob3dcblx0ICovXG5cdGRpc3BsYXlFcnJvciAobWVzc2FnZSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aXNBbmltYXRpbmc6IHRydWUsXG5cdFx0XHRpc0ludmFsaWQ6IHRydWUsXG5cdFx0XHRpbnZhbGlkTWVzc2FnZTogbWVzc2FnZSxcblx0XHR9KTtcblx0XHRzZXRUaW1lb3V0KHRoaXMuZmluaXNoQW5pbWF0aW9uLCA3NTApO1xuXHR9LFxuXHQvLyBGaW5pc2ggdGhlIGFuaW1hdGlvbiBhbmQgc2VsZWN0IHRoZSBlbWFpbCBmaWVsZFxuXHRmaW5pc2hBbmltYXRpb24gKCkge1xuXHRcdGlmICghdGhpcy5fX2lzTW91bnRlZCkgcmV0dXJuO1xuXHRcdGlmICh0aGlzLnJlZnMuZW1haWwpIHtcblx0XHRcdHRoaXMucmVmcy5lbWFpbC5zZWxlY3QoKTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpc0FuaW1hdGluZzogZmFsc2UsXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlciAoKSB7XG5cdFx0Y29uc3QgYm94Q2xhc3NuYW1lID0gY2xhc3NuYW1lcygnYXV0aC1ib3gnLCB7XG5cdFx0XHQnYXV0aC1ib3gtLWhhcy1lcnJvcnMnOiB0aGlzLnN0YXRlLmlzQW5pbWF0aW5nLFxuXHRcdH0pO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGgtd3JhcHBlclwiPlxuXHRcdFx0XHQ8QWxlcnRcblx0XHRcdFx0XHRpc0ludmFsaWQ9e3RoaXMuc3RhdGUuaXNJbnZhbGlkfVxuXHRcdFx0XHRcdHNpZ25lZE91dD17dGhpcy5zdGF0ZS5zaWduZWRPdXR9XG5cdFx0XHRcdFx0aW52YWxpZE1lc3NhZ2U9e3RoaXMuc3RhdGUuaW52YWxpZE1lc3NhZ2V9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtib3hDbGFzc25hbWV9PlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ1LWhpZGRlbi12aXN1YWxseVwiPnt0aGlzLnByb3BzLmJyYW5kID8gdGhpcy5wcm9wcy5icmFuZCA6ICdLZXlzdG9uZSd9IFNpZ24gSW4gPC9oMT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGgtYm94X19pbm5lclwiPlxuXHRcdFx0XHRcdFx0PEJyYW5kXG5cdFx0XHRcdFx0XHRcdGxvZ289e3RoaXMucHJvcHMubG9nb31cblx0XHRcdFx0XHRcdFx0YnJhbmQ9e3RoaXMucHJvcHMuYnJhbmR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMudXNlciA/IChcblx0XHRcdFx0XHRcdFx0PFVzZXJJbmZvXG5cdFx0XHRcdFx0XHRcdFx0YWRtaW5QYXRoPXt0aGlzLnByb3BzLmZyb20gPyB0aGlzLnByb3BzLmZyb20gOiBLZXlzdG9uZS5hZG1pblBhdGh9XG5cdFx0XHRcdFx0XHRcdFx0c2lnbm91dFBhdGg9e2Ake0tleXN0b25lLmFkbWluUGF0aH0vc2lnbm91dGB9XG5cdFx0XHRcdFx0XHRcdFx0dXNlckNhbkFjY2Vzc0tleXN0b25lPXt0aGlzLnByb3BzLnVzZXJDYW5BY2Nlc3NLZXlzdG9uZX1cblx0XHRcdFx0XHRcdFx0XHR1c2VyTmFtZT17dGhpcy5wcm9wcy51c2VyLm5hbWV9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8TG9naW5Gb3JtXG5cdFx0XHRcdFx0XHRcdFx0ZW1haWw9e3RoaXMuc3RhdGUuZW1haWx9XG5cdFx0XHRcdFx0XHRcdFx0aGFuZGxlSW5wdXRDaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0aGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH1cblx0XHRcdFx0XHRcdFx0XHRpc0FuaW1hdGluZz17dGhpcy5zdGF0ZS5pc0FuaW1hdGluZ31cblx0XHRcdFx0XHRcdFx0XHRwYXNzd29yZD17dGhpcy5zdGF0ZS5wYXNzd29yZH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGgtZm9vdGVyXCI+XG5cdFx0XHRcdFx0PHNwYW4+UG93ZXJlZCBieSA8L3NwYW4+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHA6Ly9rZXlzdG9uZWpzLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiVGhlIE5vZGUuanMgQ01TIGFuZCB3ZWIgYXBwbGljYXRpb24gcGxhdGZvcm0gKG5ldyB3aW5kb3cpXCI+S2V5c3RvbmVKUzwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxufSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaW5WaWV3O1xuIiwiLyoqXG4gKiBSZW5kZXJzIGFuIEFsZXJ0LiBQYXNzIGVpdGhlciBhbiBpc0ludmFsaWQgYW5kIGludmFsaWRNZXNzYWdlIHByb3AsIG9yIHNldFxuICogdGhlIHNpZ25lZE91dCBwcm9wIHRvIHRydWUgdG8gc2hvdyB0aGUgc3RhbmRhcmQgc2lnbmVkIG91dCBtZXNzYWdlXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnLi4vLi4vQXBwL2VsZW1lbnRhbCc7XG5cbmNvbnN0IEFsZXJ0VmlldyA9IGZ1bmN0aW9uIChwcm9wcykge1xuXHRpZiAocHJvcHMuaXNJbnZhbGlkKSB7XG5cdFx0cmV0dXJuIDxBbGVydCBrZXk9XCJlcnJvclwiIGNvbG9yPVwiZGFuZ2VyXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT57cHJvcHMuaW52YWxpZE1lc3NhZ2V9PC9BbGVydD47XG5cdH0gZWxzZSBpZiAocHJvcHMuc2lnbmVkT3V0KSB7XG5cdFx0cmV0dXJuIDxBbGVydCBrZXk9XCJzaWduZWQtb3V0XCIgY29sb3I9XCJpbmZvXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Zb3UgaGF2ZSBiZWVuIHNpZ25lZCBvdXQuPC9BbGVydD47XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQ2FuJ3QgcmV0dXJuIFwibnVsbFwiIGZyb20gc3RhdGVsZXNzIGNvbXBvbmVudHNcblx0XHRyZXR1cm4gPHNwYW4gLz47XG5cdH1cbn07XG5cbkFsZXJ0Vmlldy5wcm9wVHlwZXMgPSB7XG5cdGludmFsaWRNZXNzYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRpc0ludmFsaWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuXHRzaWduZWRPdXQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBbGVydFZpZXc7XG4iLCIvKipcbiAqIFJlbmRlcnMgYSBsb2dvLCBkZWZhdWx0aW5nIHRvIHRoZSBLZXlzdG9uZSBsb2dvIGlmIG5vIGJyYW5kIGlzIHNwZWNpZmllZCBpblxuICogdGhlIGNvbmZpZ3VyYXRpb25cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBCcmFuZCA9IGZ1bmN0aW9uIChwcm9wcykge1xuXHQvLyBEZWZhdWx0IHRvIHRoZSBLZXlzdG9uZUpTIGxvZ29cblx0bGV0IGxvZ28gPSB7IHNyYzogYCR7S2V5c3RvbmUuYWRtaW5QYXRofS9pbWFnZXMvbG9nby5wbmdgLCB3aWR0aDogMjA1LCBoZWlnaHQ6IDY4IH07XG5cdGlmIChwcm9wcy5sb2dvKSB7XG5cdFx0Ly8gSWYgdGhlIGxvZ28gaXMgc2V0IHRvIGEgc3RyaW5nLCBpdCdzIGEgZGlyZWN0IGxpbmtcblx0XHRsb2dvID0gdHlwZW9mIHByb3BzLmxvZ28gPT09ICdzdHJpbmcnID8geyBzcmM6IHByb3BzLmxvZ28gfSA6IHByb3BzLmxvZ287XG5cdFx0Ly8gT3B0aW9uYWxseSBvbmUgY2FuIHNwZWNpZnkgdGhlIGxvZ28gYXMgYW4gYXJyYXksIGFsc28gc3RhdGluZyB0aGVcblx0XHQvLyB3YW50ZWQgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgbG9nb1xuXHRcdC8vIFRPRE86IERlcHJlY2F0ZSB0aGlzXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobG9nbykpIHtcblx0XHRcdGxvZ28gPSB7IHNyYzogbG9nb1swXSwgd2lkdGg6IGxvZ29bMV0sIGhlaWdodDogbG9nb1syXSB9O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1ib3hfX2NvbFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRoLWJveF9fYnJhbmRcIj5cblx0XHRcdFx0PGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJhdXRoLWJveF9fYnJhbmRfX2xvZ29cIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9e2xvZ28uc3JjfVxuXHRcdFx0XHRcdFx0d2lkdGg9e2xvZ28ud2lkdGggPyBsb2dvLndpZHRoIDogbnVsbH1cblx0XHRcdFx0XHRcdGhlaWdodD17bG9nby5oZWlnaHQgPyBsb2dvLmhlaWdodCA6IG51bGx9XG5cdFx0XHRcdFx0XHRhbHQ9e3Byb3BzLmJyYW5kfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCcmFuZDtcbiIsIi8qKlxuICogVGhlIGxvZ2luIGZvcm0gb2YgdGhlIHNpZ25pbiBzY3JlZW5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBGb3JtRmllbGQsIEZvcm1JbnB1dCB9IGZyb20gJy4uLy4uL0FwcC9lbGVtZW50YWwnO1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoe1xuXHRlbWFpbCxcblx0aGFuZGxlSW5wdXRDaGFuZ2UsXG5cdGhhbmRsZVN1Ym1pdCxcblx0aXNBbmltYXRpbmcsXG5cdHBhc3N3b3JkLFxufSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1ib3hfX2NvbFwiPlxuXHRcdFx0PEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbm9WYWxpZGF0ZT5cblx0XHRcdFx0PEZvcm1GaWVsZCBsYWJlbD1cIkVtYWlsXCIgaHRtbEZvcj1cImVtYWlsXCI+XG5cdFx0XHRcdFx0PEZvcm1JbnB1dFxuXHRcdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Zvcm1GaWVsZD5cblx0XHRcdFx0PEZvcm1GaWVsZCBsYWJlbD1cIlBhc3N3b3JkXCIgaHRtbEZvcj1cInBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0PEZvcm1JbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Gb3JtRmllbGQ+XG5cdFx0XHRcdDxCdXR0b24gZGlzYWJsZWQ9e2lzQW5pbWF0aW5nfSBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0U2lnbiBJblxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvRm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkxvZ2luRm9ybS5wcm9wVHlwZXMgPSB7XG5cdGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRoYW5kbGVJbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0aGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRpc0FuaW1hdGluZzogUHJvcFR5cGVzLmJvb2wsXG5cdHBhc3N3b3JkOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luRm9ybTtcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9BcHAvZWxlbWVudGFsJztcblxuLy8gVE9ETyBGaWd1cmUgb3V0IGlmIHdlIHNob3VsZCBjaGFuZ2UgXCJLZXlzdG9uZVwiIHRvIFwiQWRtaW4gYXJlYVwiXG5cbmNvbnN0IFVzZXJJbmZvID0gKHtcblx0YWRtaW5QYXRoLFxuXHRzaWdub3V0UGF0aCxcblx0dXNlckNhbkFjY2Vzc0tleXN0b25lLFxuXHR1c2VyTmFtZSxcbn0pID0+IHtcblx0Y29uc3QgYWRtaW5CdXR0b24gPSB1c2VyQ2FuQWNjZXNzS2V5c3RvbmUgPyAoXG5cdFx0PEJ1dHRvbiBocmVmPXthZG1pblBhdGh9IGNvbG9yPVwicHJpbWFyeVwiPlxuXHRcdFx0T3BlbiBLZXlzdG9uZVxuXHRcdDwvQnV0dG9uPlxuXHQpIDogbnVsbDtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1ib3hfX2NvbFwiPlxuXHRcdFx0PHA+SGkge3VzZXJOYW1lfSw8L3A+XG5cdFx0XHQ8cD5Zb3UncmUgYWxyZWFkeSBzaWduZWQgaW4uPC9wPlxuXHRcdFx0e2FkbWluQnV0dG9ufVxuXHRcdFx0PEJ1dHRvbiBocmVmPXtzaWdub3V0UGF0aH0gdmFyaWFudD1cImxpbmtcIiBjb2xvcj1cImNhbmNlbFwiPlxuXHRcdFx0XHRTaWduIE91dFxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5Vc2VySW5mby5wcm9wVHlwZXMgPSB7XG5cdGFkbWluUGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRzaWdub3V0UGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHR1c2VyQ2FuQWNjZXNzS2V5c3RvbmU6IFByb3BUeXBlcy5ib29sLFxuXHR1c2VyTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVc2VySW5mbztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGtleS1zcGFjaW5nICovXG5jb25zdCB0aGVtZSA9IHt9O1xuY29uc3QgeyBibGVuZCwgZGFya2VuLCBmYWRlLCBsaWdodGVuIH0gPSByZXF1aXJlKCcuL3V0aWxzL2NvbG9yJyk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09NTU9OXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gYnJlYWtwb2ludFxuXG50aGVtZS5icmVha3BvaW50TnVtZXJpYyA9IHtcblx0bW9iaWxlOiAgICAgICAgICAgNDgwLFxuXHR0YWJsZXRQb3J0cmFpdDogICA3NjgsXG5cdHRhYmxldExhbmRzY2FwZTogIDk5Mixcblx0ZGVza3RvcDogICAgICAgICAgMTIwMCxcbn07XG50aGVtZS5icmVha3BvaW50ID0ge1xuXHR0YWJsZXRQb3J0cmFpdE1pbjogICh0aGVtZS5icmVha3BvaW50TnVtZXJpYy5tb2JpbGUgKyAxKSArICdweCcsXG5cdHRhYmxldExhbmRzY2FwZU1pbjogKHRoZW1lLmJyZWFrcG9pbnROdW1lcmljLnRhYmxldFBvcnRyYWl0ICsgMSkgKyAncHgnLFxuXHRkZXNrdG9wTWluOiAgICAgICAgICh0aGVtZS5icmVha3BvaW50TnVtZXJpYy50YWJsZXRMYW5kc2NhcGUgKyAxKSArICdweCcsXG5cdGRlc2t0b3BMYXJnZU1pbjogICAgKHRoZW1lLmJyZWFrcG9pbnROdW1lcmljLmRlc2t0b3AgKyAxKSArICdweCcsXG5cblx0bW9iaWxlTWF4OiAgICAgICAgICAgdGhlbWUuYnJlYWtwb2ludE51bWVyaWMubW9iaWxlICsgJ3B4Jyxcblx0dGFibGV0UG9ydHJhaXRNYXg6ICAgdGhlbWUuYnJlYWtwb2ludE51bWVyaWMudGFibGV0UG9ydHJhaXQgKyAncHgnLFxuXHR0YWJsZXRMYW5kc2NhcGVNYXg6ICB0aGVtZS5icmVha3BvaW50TnVtZXJpYy50YWJsZXRMYW5kc2NhcGUgKyAncHgnLFxuXHRkZXNrdG9wTWF4OiAgICAgICAgICB0aGVtZS5icmVha3BvaW50TnVtZXJpYy5kZXNrdG9wICsgJ3B4Jyxcbn07XG5cbi8vIGNvbnRhaW5lclxuXG50aGVtZS5jb250YWluZXIgPSB7XG5cdGd1dHRlcjogMjAsXG5cdHNpemU6IHtcblx0XHRzbWFsbDogIDc1MCxcblx0XHRtZWRpdW06IDk3MCxcblx0XHRsYXJnZTogMTE3MCxcblx0fSxcbn07XG5cbi8vIGNvbG9yXG5cbnRoZW1lLmNvbG9yID0ge1xuXHRib2R5OiAgICAgICAgICAgICAgICAnI2ZhZmFmYScsXG5cdGxpbms6ICAgICAgICAgICAgICAgICcjMTM4NWU1Jyxcblx0bGlua0hvdmVyOiAgICAgICAgICAgbGlnaHRlbignIzEzODVlNScsIDEwKSxcblx0dGV4dDogICAgICAgICAgICAgICAgJyMxQTFBMUEnLFxuXG5cdC8vIGNvbnRleHR1YWxcblx0c3VjY2VzczogICAgICAgICAgICAgJyMzNGMyNDAnLFxuXHRjcmVhdGU6ICAgICAgICAgICAgICAnIzM0YzI0MCcsIC8vIGFsaWFzIGZvciBzdWNjZXNzXG5cdHByaW1hcnk6ICAgICAgICAgICAgICcjMTM4NWU1Jyxcblx0aW5mbzogICAgICAgICAgICAgICAgJyMxMzg1ZTUnLCAvLyBhbGlhcyBmb3IgcHJpbWFyeVxuXHR3YXJuaW5nOiAgICAgICAgICAgICAnI0ZBMycsXG5cdGRhbmdlcjogICAgICAgICAgICAgICcjZDY0MjQyJyxcblx0ZXJyb3I6ICAgICAgICAgICAgICAgJyNkNjQyNDInLCAvLyBhbGlhcyBmb3IgZGFuZ2VyXG5cblx0Ly8gbmV1dHJhbHNcblx0Z3JheTkwOiAgICAgICAgICAgICAgJyMxQTFBMUEnLFxuXHRncmF5ODA6ICAgICAgICAgICAgICAnIzMzMycsXG5cdGdyYXk3MDogICAgICAgICAgICAgICcjNEQ0RDREJyxcblx0Z3JheTYwOiAgICAgICAgICAgICAgJyM2NjYnLFxuXHRncmF5NTA6ICAgICAgICAgICAgICAnIzdGN0Y3RicsXG5cdGdyYXk0MDogICAgICAgICAgICAgICcjOTk5Jyxcblx0Z3JheTMwOiAgICAgICAgICAgICAgJyNCM0IzQjMnLFxuXHRncmF5MjA6ICAgICAgICAgICAgICAnI0NDQycsXG5cdGdyYXkxNTogICAgICAgICAgICAgICcjRDlEOUQ5Jyxcblx0Z3JheTEwOiAgICAgICAgICAgICAgJyNFNUU1RTUnLFxuXHRncmF5MDU6ICAgICAgICAgICAgICAnI0YyRjJGMicsXG5cblx0Ly8gc29jaWFsXG5cdGZhY2Vib29rOiAgICAgICAgICAgICcjM0I1OTk4Jyxcblx0Z29vZ2xlOiAgICAgICAgICAgICAgJyNEQzRFNDEnLFxuXHRpbnN0YWdyYW06ICAgICAgICAgICAnIzNmNzI5YicsXG5cdHBpbnRlcmVzdDogICAgICAgICAgICcjYmQwODFjJyxcblx0dHVtYmxyOiAgICAgICAgICAgICAgJyMzNTQ2NWMnLFxuXHR0d2l0dGVyOiAgICAgICAgICAgICAnIzU1QUNFRScsXG5cdHlvdXR1YmU6ICAgICAgICAgICAgICcjY2QyMDFmJyxcblx0dmltZW86ICAgICAgICAgICAgICAgJyMxYWI3ZWEnLFxufTtcblxuLy8gYm9yZGVyIHJhZGlpXG5cbnRoZW1lLmJvcmRlclJhZGl1cyA9IHtcblx0c21hbGw6ICcwLjEyNXJlbScsXG5cdGRlZmF1bHQ6ICcwLjNyZW0nLFxuXHRsYXJnZTogJzAuNXJlbScsXG59O1xuXG4vLyBzcGFjaW5nXG5cbnRoZW1lLnNwYWNpbmcgPSB7XG5cdHhzbWFsbDogICAgICA1LFxuXHRzbWFsbDogICAgICAgMTAsXG5cdGRlZmF1bHQ6ICAgICAyMCxcblx0bGFyZ2U6ICAgICAgIDMwLFxuXHR4bGFyZ2U6ICAgICAgNDAsXG5cdHh4bGFyZ2U6ICAgICA2MCxcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRUxFTUVOVEFMIFNQRUNJRklDXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gYnV0dG9uXG5cbnRoZW1lLmJ1dHRvbiA9IHtcblx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuZGVmYXVsdCxcblx0Ym9yZGVyV2lkdGg6IDEsXG5cdGZvbnQ6IHtcblx0XHR3ZWlnaHQ6IDUwMCxcblx0fSxcblx0cGFkZGluZ0hvcml6b250YWw6ICcxZW0nLFxuXHRkZWZhdWx0OiB7XG5cdFx0YmdDb2xvcjogdGhlbWUuY29sb3IucHJpbWFyeSxcblx0XHRib3JkZXJDb2xvcjogYmxlbmQodGhlbWUuY29sb3IucHJpbWFyeSwgdGhlbWUuY29sb3IuYm9keSwgNjApLFxuXHRcdHRleHRDb2xvcjogdGhlbWUuY29sb3IucHJpbWFyeSxcblx0fSxcblx0cHJpbWFyeToge1xuXHRcdGJnQ29sb3I6IHRoZW1lLmNvbG9yLnByaW1hcnksXG5cdFx0Ym9yZGVyQ29sb3I6IGJsZW5kKHRoZW1lLmNvbG9yLnByaW1hcnksIHRoZW1lLmNvbG9yLmJvZHksIDYwKSxcblx0XHR0ZXh0Q29sb3I6IHRoZW1lLmNvbG9yLnByaW1hcnksXG5cdH0sXG5cdHN1Y2Nlc3M6IHtcblx0XHRiZ0NvbG9yOiB0aGVtZS5jb2xvci5zdWNjZXNzLFxuXHRcdGJvcmRlckNvbG9yOiBibGVuZCh0aGVtZS5jb2xvci5zdWNjZXNzLCB0aGVtZS5jb2xvci5ib2R5LCA2MCksXG5cdFx0dGV4dENvbG9yOiB0aGVtZS5jb2xvci5zdWNjZXNzLFxuXHR9LFxuXHR3YXJuaW5nOiB7XG5cdFx0YmdDb2xvcjogdGhlbWUuY29sb3Iud2FybmluZyxcblx0XHRib3JkZXJDb2xvcjogYmxlbmQodGhlbWUuY29sb3Iud2FybmluZywgdGhlbWUuY29sb3IuYm9keSwgNjApLFxuXHRcdHRleHRDb2xvcjogdGhlbWUuY29sb3Iud2FybmluZyxcblx0fSxcblx0ZGFuZ2VyOiB7XG5cdFx0YmdDb2xvcjogdGhlbWUuY29sb3IuZGFuZ2VyLFxuXHRcdGJvcmRlckNvbG9yOiBibGVuZCh0aGVtZS5jb2xvci5kYW5nZXIsIHRoZW1lLmNvbG9yLmJvZHksIDYwKSxcblx0XHR0ZXh0Q29sb3I6IHRoZW1lLmNvbG9yLmRhbmdlcixcblx0fSxcbn07XG5cbi8vIGJsYW5rIHN0YXRlXG5cbnRoZW1lLmJsYW5rc3RhdGUgPSB7XG5cdGJhY2tncm91bmQ6IGRhcmtlbih0aGVtZS5jb2xvci5ib2R5LCA0KSxcblx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuZGVmYXVsdCxcblx0Y29sb3I6IHRoZW1lLmNvbG9yLmdyYXk0MCxcblx0cGFkZGluZ0hvcml6b250YWw6ICcyZW0nLFxuXHRwYWRkaW5nVmVydGljYWw6ICc0ZW0nLFxufTtcblxuLy8gZm9udFxuXG50aGVtZS5mb250ID0ge1xuXHRmYW1pbHk6IHtcblx0XHRtb25vOiAnTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlJyxcblx0XHRzYW5zU2VyaWY6ICdcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnLFxuXHRcdHNlcmlmOiAnR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBUaW1lcywgc2VyaWYnLFxuXHR9LFxuXHRzaXplOiB7XG5cdFx0eHhzbWFsbDogJzAuNjVyZW0nLFxuXHRcdHhzbWFsbDogJzAuNzVyZW0nLFxuXHRcdHNtYWxsOiAnMC44NXJlbScsXG5cdFx0ZGVmYXVsdDogJzFyZW0nLFxuXHRcdG1lZGl1bTogJzEuMnJlbScsXG5cdFx0bGFyZ2U6ICcxLjZyZW0nLFxuXHRcdHhsYXJnZTogJzIuNHJlbScsXG5cdFx0eHhsYXJnZTogJzMuMnJlbScsXG5cdH0sXG59O1xuXG4vLyBmb3JtXG5cbnRoZW1lLmZvcm0gPSB7XG5cdGxhYmVsOiB7XG5cdFx0Y29sb3I6IHRoZW1lLmNvbG9yLmdyYXk1MCxcblx0XHRmb250U2l6ZTogJzFyZW0nLFxuXHRcdGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuXHRcdHdpZHRoOiAxODAsXG5cdH0sXG5cdG5vdGU6IHtcblx0XHRjb2xvcjogdGhlbWUuY29sb3IuZ3JheTQwLFxuXHRcdGZvbnRTaXplOiAnMC45ZW0nLFxuXHR9LFxufTtcblxuLy8gY29tcG9uZW50XG5cbnRoZW1lLmNvbXBvbmVudCA9IHtcblx0bGluZUhlaWdodDogJzIuM2VtJyxcblx0aGVpZ2h0OiAnMi40ZW0nLFxuXHRwYWRkaW5nOiAnMWVtJyxcbn07XG5cbi8vIGlucHV0XG5cbnRoZW1lLmlucHV0ID0ge1xuXHRiYWNrZ3JvdW5kOiB7XG5cdFx0ZGVmYXVsdDogJ3doaXRlJyxcblx0XHRkaXNhYmxlZDogJyNmYWZhZmEnLFxuXHRcdG5vZWRpdDogZGFya2VuKHRoZW1lLmNvbG9yLmJvZHksIDIpLFxuXHR9LFxuXHRwbGFjZWhvbGRlckNvbG9yOiAnI2FhYScsXG5cdGxpbmVIZWlnaHQ6IHRoZW1lLmNvbXBvbmVudC5saW5lSGVpZ2h0LFxuXHRoZWlnaHQ6IHRoZW1lLmNvbXBvbmVudC5oZWlnaHQsXG5cdGJvcmRlcjoge1xuXHRcdGNvbG9yOiB7XG5cdFx0XHRkZWZhdWx0OiAnI2NjYycsXG5cdFx0XHRmb2N1czogdGhlbWUuY29sb3IuaW5mbyxcblx0XHRcdGhvdmVyOiAnI2JiYicsXG5cdFx0XHRub2VkaXQ6IGRhcmtlbih0aGVtZS5jb2xvci5ib2R5LCA4KSxcblx0XHR9LFxuXHRcdHJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmRlZmF1bHQsXG5cdFx0d2lkdGg6IDEsXG5cdH0sXG5cdGJveFNoYWRvdzogJ2luc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KScsXG5cdGJveFNoYWRvd0ZvY3VzOiBgaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgMCAzcHggJHtmYWRlKHRoZW1lLmNvbG9yLmluZm8sIDEwKX1gLFxuXHRwYWRkaW5nSG9yaXpvbnRhbDogJy43NWVtJyxcbn07XG5cbi8vIHNlbGVjdFxuXG50aGVtZS5zZWxlY3QgPSB7XG5cdGJveFNoYWRvdzogJzAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KScsXG59O1xuXG4vLyBhbGVydFxuXG50aGVtZS5hbGVydCA9IHtcblx0cGFkZGluZzogJzAuNzVlbSAgMWVtJyxcblx0bWFyZ2luOiAnMCAwIDFlbScsXG5cdGJvcmRlcldpZHRoOiAxLFxuXHRib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5kZWZhdWx0LFxuXG5cdGNvbG9yOiB7XG5cdFx0ZGFuZ2VyOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBmYWRlKHRoZW1lLmNvbG9yLmRhbmdlciwgMTApLFxuXHRcdFx0Ym9yZGVyOiBmYWRlKHRoZW1lLmNvbG9yLmRhbmdlciwgMTApLFxuXHRcdFx0dGV4dDogdGhlbWUuY29sb3IuZGFuZ2VyLFxuXHRcdH0sXG5cdFx0aW5mbzoge1xuXHRcdFx0YmFja2dyb3VuZDogZmFkZSh0aGVtZS5jb2xvci5wcmltYXJ5LCAxMCksXG5cdFx0XHRib3JkZXI6IGZhZGUodGhlbWUuY29sb3IucHJpbWFyeSwgMTApLFxuXHRcdFx0dGV4dDogdGhlbWUuY29sb3IucHJpbWFyeSxcblx0XHR9LFxuXHRcdHN1Y2Nlc3M6IHtcblx0XHRcdGJhY2tncm91bmQ6IGZhZGUodGhlbWUuY29sb3Iuc3VjY2VzcywgMTApLFxuXHRcdFx0Ym9yZGVyOiBmYWRlKHRoZW1lLmNvbG9yLnN1Y2Nlc3MsIDEwKSxcblx0XHRcdHRleHQ6IHRoZW1lLmNvbG9yLnN1Y2Nlc3MsXG5cdFx0fSxcblx0XHR3YXJuaW5nOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBmYWRlKHRoZW1lLmNvbG9yLndhcm5pbmcsIDEwKSxcblx0XHRcdGJvcmRlcjogZmFkZSh0aGVtZS5jb2xvci53YXJuaW5nLCAxMCksXG5cdFx0XHR0ZXh0OiB0aGVtZS5jb2xvci53YXJuaW5nLFxuXHRcdH0sXG5cdH0sXG59O1xuXG4vLyBnbHlwaFxuXG50aGVtZS5nbHlwaCA9IHtcblx0Y29sb3I6IHtcblx0XHRkYW5nZXI6IHRoZW1lLmNvbG9yLmRhbmdlcixcblx0XHRpbmhlcml0OiAnaW5oZXJpdCcsXG5cdFx0aW52ZXJ0ZWQ6ICd3aGl0ZScsXG5cdFx0cHJpbWFyeTogdGhlbWUuY29sb3IucHJpbWFyeSxcblx0XHRzdWNjZXNzOiB0aGVtZS5jb2xvci5zdWNjZXNzLFxuXHRcdHdhcm5pbmc6IHRoZW1lLmNvbG9yLndhcm5pbmcsXG5cdH0sXG5cdHNpemU6IHtcblx0XHRzbWFsbDogMTYsXG5cdFx0bWVkaXVtOiAzMixcblx0XHRsYXJnZTogNjQsXG5cdH0sXG59O1xuXG4vLyBtb2RhbFxuXG50aGVtZS5tb2RhbCA9IHtcblx0YmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC44KScsXG5cdHpJbmRleDogMTAwLFxuXHRwYWRkaW5nOiB7XG5cdFx0ZGlhbG9nOiB7XG5cdFx0XHRob3Jpem9udGFsOiAnMWVtJyxcblx0XHRcdHZlcnRpY2FsOiAwLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0aG9yaXpvbnRhbDogMCxcblx0XHRcdHZlcnRpY2FsOiAnMWVtJyxcblx0XHR9LFxuXHRcdGZvb3Rlcjoge1xuXHRcdFx0aG9yaXpvbnRhbDogMCxcblx0XHRcdHZlcnRpY2FsOiAnMWVtJyxcblx0XHR9LFxuXHRcdGhlYWRlcjoge1xuXHRcdFx0aG9yaXpvbnRhbDogMCxcblx0XHRcdHZlcnRpY2FsOiAnMC42ZW0nLFxuXHRcdH0sXG5cdH0sXG59O1xuXG4vLyBwYWdpbmF0aW9uXG5cbnRoZW1lLnBhZ2luYXRpb24gPSB7XG5cdGNvbG9yOiB0aGVtZS5jb2xvci5ncmF5NjAsXG5cblx0aG92ZXI6IHtcblx0XHRiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuXHRcdGJvcmRlcjogJ3JnYmEoMCwgMCwgMCwgMC4xKScsXG5cdFx0Y29sb3I6IHRoZW1lLmNvbG9yLmdyYXk2MCxcblx0fSxcblx0c2VsZWN0ZWQ6IHtcblx0XHRiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG5cdFx0Ym9yZGVyOiAndHJhbnNwYXJlbnQnLFxuXHRcdGNvbG9yOiB0aGVtZS5jb2xvci5ncmF5NjAsXG5cdH0sXG5cdGRpc2FibGVkOiB7XG5cdFx0YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jyxcblx0XHRjb2xvcjogdGhlbWUuY29sb3IuZ3JheTQwLFxuXHR9LFxufTtcblxuLy8gc3Bpbm5lclxuXG50aGVtZS5zcGlubmVyID0ge1xuXHRjb2xvcjoge1xuXHRcdGRhbmdlcjogdGhlbWUuY29sb3IuZGFuZ2VyLFxuXHRcdGRlZmF1bHQ6IHRoZW1lLmNvbG9yLmdyYXk0MCxcblx0XHRpbnZlcnRlZDogJ3doaXRlJyxcblx0XHRwcmltYXJ5OiB0aGVtZS5jb2xvci5wcmltYXJ5LFxuXHRcdHN1Y2Nlc3M6IHRoZW1lLmNvbG9yLnN1Y2Nlc3MsXG5cdFx0d2FybmluZzogdGhlbWUuY29sb3Iud2FybmluZyxcblx0fSxcblx0c2l6ZToge1xuXHRcdHNtYWxsOlx0NCxcblx0XHRtZWRpdW06XHQ4LFxuXHRcdGxhcmdlOlx0MTYsXG5cdH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRoZW1lO1xuIiwiLyoqXG5cdFZhbGlkYXRlIEhleFxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHRAcGFyYW0ge1N0cmluZ30gaGV4XG5cblx0MS4gcmVtb3ZlIGhhc2ggaWYgcHJlc2VudFxuXHQyLiBjb252ZXJ0IGZyb20gMyB0byA2IGRpZ2l0IGNvbG9yIGNvZGUgJiBlbnN1cmUgdmFsaWQgaGV4XG4qL1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUhleCAoY29sb3IpIHtcblx0Y29uc3QgaGV4ID0gY29sb3IucmVwbGFjZSgnIycsICcnKTtcblxuXHRpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuXHRcdHJldHVybiBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG5cdH1cblx0aWYgKGhleC5sZW5ndGggIT09IDYpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY29sb3IgdmFsdWUgcHJvdmlkZWQ6IFwiJHtjb2xvcn1cImApO1xuXHR9XG5cblx0cmV0dXJuIGhleDtcbn07XG5cbi8qKlxuXHRGYWRlIENvbG9yXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFRha2VzIGEgaGV4aWRlY2ltYWwgY29sb3IsIGNvbnZlcnRzIGl0IHRvIFJHQiBhbmQgYXBwbGllcyBhbiBhbHBoYSB2YWx1ZS5cblxuXHRAcGFyYW0ge1N0cmluZ30gY29sb3Jcblx0QHBhcmFtIHtOdW1iZXJ9IG9wYWNpdHkgKDAtMTAwKVxuXG5cdDEuIGNvbnZlcnQgaGV4IHRvIFJHQlxuXHQyLiBjb21iaW5lIGFuZCBhZGQgYWxwaGEgY2hhbm5lbFxuKi9cblxuZnVuY3Rpb24gZmFkZSAoY29sb3IsIG9wYWNpdHkgPSAxMDApIHtcblx0Y29uc3QgZGVjaW1hbEZyYWN0aW9uID0gb3BhY2l0eSAvIDEwMDtcblx0Y29uc3QgaGV4ID0gdmFsaWRhdGVIZXgoY29sb3IpO1xuXG5cdC8vIDEuXG5cdGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDAsIDIpLCAxNik7XG5cdGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDIsIDQpLCAxNik7XG5cdGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDQsIDYpLCAxNik7XG5cblx0Ly8gMi5cblx0Y29uc3QgcmVzdWx0ID0gJ3JnYmEoJ1xuXHRcdCsgciArICcsJ1xuXHRcdCsgZyArICcsJ1xuXHRcdCsgYiArICcsJ1xuXHRcdCsgZGVjaW1hbEZyYWN0aW9uXG5cdFx0KyAnKSc7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG5cdFNoYWRlIENvbG9yXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFRha2VzIGEgaGV4aWRlY2ltYWwgY29sb3IsIGNvbnZlcnRzIGl0IHRvIFJHQiBhbmQgbGlnaHRlbnMgb3IgZGFya2Vuc1xuXG5cdEBwYXJhbSB7U3RyaW5nfSBjb2xvclxuXHRAcGFyYW0ge051bWJlcn0gb3BhY2l0eSAoMC0xMDApXG5cblx0MS4gZG8gZmFuY3kgUkdCIGJpdHdpc2Ugb3BlcmF0aW9uc1xuXHQyLiBjb21iaW5lIGJhY2sgaW50byBhIGhleCB2YWx1ZVxuKi9cblxuZnVuY3Rpb24gc2hhZGUgKGNvbG9yLCBwZXJjZW50KSB7XG5cdGNvbnN0IGRlY2ltYWxGcmFjdGlvbiA9IHBlcmNlbnQgLyAxMDA7XG5cdGNvbnN0IGhleCA9IHZhbGlkYXRlSGV4KGNvbG9yKTtcblxuXHQvLyAxLlxuXHRsZXQgZiA9IHBhcnNlSW50KGhleCwgMTYpO1xuXHRsZXQgdCA9IGRlY2ltYWxGcmFjdGlvbiA8IDAgPyAwIDogMjU1O1xuXHRsZXQgcCA9IGRlY2ltYWxGcmFjdGlvbiA8IDAgPyBkZWNpbWFsRnJhY3Rpb24gKiAtMSA6IGRlY2ltYWxGcmFjdGlvbjtcblxuXHRjb25zdCBSID0gZiA+PiAxNjtcblx0Y29uc3QgRyA9IGYgPj4gOCAmIDB4MDBGRjtcblx0Y29uc3QgQiA9IGYgJiAweDAwMDBGRjtcblxuXHQvLyAyLlxuXHRyZXR1cm4gJyMnICsgKDB4MTAwMDAwMFxuXHRcdCsgKE1hdGgucm91bmQoKHQgLSBSKSAqIHApICsgUikgKiAweDEwMDAwXG5cdFx0KyAoTWF0aC5yb3VuZCgodCAtIEcpICogcCkgKyBHKSAqIDB4MTAwXG5cdFx0KyAoTWF0aC5yb3VuZCgodCAtIEIpICogcCkgKyBCKSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xufTtcblxuLy8gc2hhZGUgaGVscGVyc1xuY29uc3QgbGlnaHRlbiA9IHNoYWRlO1xuZnVuY3Rpb24gZGFya2VuIChjb2xvciwgcGVyY2VudCkge1xuXHRyZXR1cm4gc2hhZGUoY29sb3IsIHBlcmNlbnQgKiAtMSk7XG59O1xuXG5cbi8qKlxuXHRCbGVuZCBDb2xvclxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHRUYWtlcyB0d28gaGV4aWRlY2ltYWwgY29sb3JzIGFuZCBibGVuZCB0aGVtIHRvZ2V0aGVyXG5cblx0QHBhcmFtIHtTdHJpbmd9IGNvbG9yMVxuXHRAcGFyYW0ge1N0cmluZ30gY29sb3IyXG5cdEBwYXJhbSB7TnVtYmVyfSBwZXJjZW50ICgwLTEwMClcblxuXHQxLiBkbyBmYW5jeSBSR0IgYml0d2lzZSBvcGVyYXRpb25zXG5cdDIuIGNvbWJpbmUgYmFjayBpbnRvIGEgaGV4IHZhbHVlXG4qL1xuXG5mdW5jdGlvbiBibGVuZCAoY29sb3IxLCBjb2xvcjIsIHBlcmNlbnQpIHtcblx0Y29uc3QgZGVjaW1hbEZyYWN0aW9uID0gcGVyY2VudCAvIDEwMDtcblx0Y29uc3QgaGV4MSA9IHZhbGlkYXRlSGV4KGNvbG9yMSk7XG5cdGNvbnN0IGhleDIgPSB2YWxpZGF0ZUhleChjb2xvcjIpO1xuXG5cdC8vIDEuXG5cdGNvbnN0IGYgPSBwYXJzZUludChoZXgxLCAxNik7XG5cdGNvbnN0IHQgPSBwYXJzZUludChoZXgyLCAxNik7XG5cblx0Y29uc3QgUjEgPSBmID4+IDE2O1xuXHRjb25zdCBHMSA9IGYgPj4gOCAmIDB4MDBGRjtcblx0Y29uc3QgQjEgPSBmICYgMHgwMDAwRkY7XG5cblx0Y29uc3QgUjIgPSB0ID4+IDE2O1xuXHRjb25zdCBHMiA9IHQgPj4gOCAmIDB4MDBGRjtcblx0Y29uc3QgQjIgPSB0ICYgMHgwMDAwRkY7XG5cblx0Ly8gMi5cblx0cmV0dXJuICcjJyArICgweDEwMDAwMDBcblx0XHQrIChNYXRoLnJvdW5kKChSMiAtIFIxKSAqIGRlY2ltYWxGcmFjdGlvbikgKyBSMSkgKiAweDEwMDAwXG5cdFx0KyAoTWF0aC5yb3VuZCgoRzIgLSBHMSkgKiBkZWNpbWFsRnJhY3Rpb24pICsgRzEpICogMHgxMDBcblx0XHQrIChNYXRoLnJvdW5kKChCMiAtIEIxKSAqIGRlY2ltYWxGcmFjdGlvbikgKyBCMSkpLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGJsZW5kLFxuXHRkYXJrZW4sXG5cdGZhZGUsXG5cdGxpZ2h0ZW4sXG59O1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29uY2F0ZW5hdGUgQ2xhc3NuYW1lc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PVxuLy9cbi8vIFN1cHBvcnQgY2xhc3NOYW1lIGFzIGFuIGFycmF5OlxuLy8gZm9yY2UgY2xhc3NuYW1lIHByb3AgaW50byBhbiBhcnJheSAocG9zc2libHkgb2YgYXJyYXlzKSB0aGVuIGZsYXR0ZW5cblxuLypcblx0Ly8gVG8gdXNlIHNwcmVhZCB0aGUgbmV3IGFycmF5IGludG8gZ2xhbW9yJ3MgYGNzc2AgZnVuY3Rpb25cblxuXHRmdW5jdGlvbiBDb21wb25lbnQgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XG5cdFx0cHJvcHMuY2xhc3NOYW1lID0gY3NzKFxuXHRcdFx0Y2xhc3Nlcy5jb21wb25lbnQsXG5cdFx0XHQuLi5jb25jYXRDbGFzc25hbWVzKGNsYXNzTmFtZSlcblx0XHQpO1xuXG5cdFx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcblx0fTtcbiovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29uY2F0Q2xhc3NuYW1lcyAoY2xhc3NOYW1lKSB7XG5cdHJldHVybiBbY2xhc3NOYW1lXS5yZWR1Y2UoKGEsIGIpID0+IHtcblx0XHRyZXR1cm4gYS5jb25jYXQoYik7XG5cdH0sIFtdKTtcbn07XG4iLCIvKipcblx0TGluZWFyIEdyYWRpZW50XG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFNob3J0LWhhbmQgaGVscGVyIGZvciBhZGRpbmcgYSBsaW5lYXIgZ3JhZGllbnQgdG8geW91ciBjb21wb25lbnQuXG5cblx0LSBAcGFyYW0ge1N0cmluZ30gc2lkZU9yQ29ybmVyXG5cdC0gQHBhcmFtIHtTdHJpbmd9IHRvcFxuXHQtIEBwYXJhbSB7U3RyaW5nfSBib3R0b21cblx0LSBAcGFyYW0ge1N0cmluZ30gYmFzZSAob3B0aW9uYWwpXG5cdC0gQHJldHVybnMge09iamVjdH0gY3NzIGxpbmVhciBncmFkaWVudCBkZWNsYXJhdGlvblxuXG5cdFNwcmVhZCB0aGUgZGVjbGFyYXRpb24gaW50byB5b3VyIGNvbXBvbmVudCBjbGFzczpcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0bXlDb21wb25lbnRDbGFzczoge1xuXHRcdC4uLmxpbmVhckdyYWRpZW50KHJlZCwgYmx1ZSksXG5cdH1cbiovXG5cbmZ1bmN0aW9uIGxpbmVhckdyYWRpZW50IChkaXJlY3Rpb24sIHRvcCwgYm90dG9tLCBiYXNlID0gJycpIHtcblx0cmV0dXJuIHtcblx0XHRiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KCR7ZGlyZWN0aW9ufSwgJHt0b3B9IDAlLCAke2JvdHRvbX0gMTAwJSkgJHtiYXNlfWAsXG5cdH07XG59XG5cbi8vIFZlcnRpY2FsIEdyYWRpZW50XG5mdW5jdGlvbiBncmFkaWVudFZlcnRpY2FsICh0b3AsIGJvdHRvbSwgYmFzZSkge1xuXHRyZXR1cm4gbGluZWFyR3JhZGllbnQoJ3RvIGJvdHRvbScsIHRvcCwgYm90dG9tLCBiYXNlKTtcbn1cblxuLy8gSG9yaXpvbnRhbCBHcmFkaWVudFxuZnVuY3Rpb24gZ3JhZGllbnRIb3Jpem9udGFsICh0b3AsIGJvdHRvbSwgYmFzZSkge1xuXHRyZXR1cm4gbGluZWFyR3JhZGllbnQoJ3RvIHJpZ2h0JywgdG9wLCBib3R0b20sIGJhc2UpO1xufVxuXG4vKipcblx0Qm9yZGVyIFJhZGl1c1xuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHRTaG9ydC1oYW5kIGhlbHBlciBmb3IgYm9yZGVyIHJhZGlpXG4qL1xuXG4vLyB0b3BcbmZ1bmN0aW9uIGJvcmRlclRvcFJhZGl1cyAocmFkaXVzKSB7XG5cdHJldHVybiB7XG5cdFx0Ym9yZGVyVG9wTGVmdFJhZGl1czogcmFkaXVzLFxuXHRcdGJvcmRlclRvcFJpZ2h0UmFkaXVzOiByYWRpdXMsXG5cdH07XG59XG5cbi8vIHJpZ2h0XG5mdW5jdGlvbiBib3JkZXJSaWdodFJhZGl1cyAocmFkaXVzKSB7XG5cdHJldHVybiB7XG5cdFx0Ym9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IHJhZGl1cyxcblx0XHRib3JkZXJUb3BSaWdodFJhZGl1czogcmFkaXVzLFxuXHR9O1xufVxuXG4vLyBib3R0b21cbmZ1bmN0aW9uIGJvcmRlckJvdHRvbVJhZGl1cyAocmFkaXVzKSB7XG5cdHJldHVybiB7XG5cdFx0Ym9yZGVyQm90dG9tTGVmdFJhZGl1czogcmFkaXVzLFxuXHRcdGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiByYWRpdXMsXG5cdH07XG59XG5cbi8vIGxlZnRcbmZ1bmN0aW9uIGJvcmRlckxlZnRSYWRpdXMgKHJhZGl1cykge1xuXHRyZXR1cm4ge1xuXHRcdGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IHJhZGl1cyxcblx0XHRib3JkZXJUb3BMZWZ0UmFkaXVzOiByYWRpdXMsXG5cdH07XG59XG5cbi8vIFJldHVyblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Ym9yZGVyVG9wUmFkaXVzLFxuXHRib3JkZXJSaWdodFJhZGl1cyxcblx0Ym9yZGVyQm90dG9tUmFkaXVzLFxuXHRib3JkZXJMZWZ0UmFkaXVzLFxuXG5cdGdyYWRpZW50SG9yaXpvbnRhbCxcblx0Z3JhZGllbnRWZXJ0aWNhbCxcbn07XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBUaGUgc2lnbmluIHBhZ2UsIGl0IHJlbmRlcnMgYSBwYWdlIHdpdGggYSB1c2VybmFtZSBhbmQgcGFzc3dvcmQgaW5wdXQgZm9ybS5cbiAqXG4gKiBUaGlzIGlzIGRlY291cGxlZCBmcm9tIHRoZSBtYWluIGFwcCAoaW4gdGhlIFwiQXBwL1wiIGZvbGRlcikgYmVjYXVzZSB3ZSBpbmplY3RcbiAqIGxvdHMgb2YgZGF0YSBpbnRvIHRoZSBvdGhlciBzY3JlZW5zIChsaWtlIHRoZSBsaXN0cyB0aGF0IGV4aXN0KSB0aGF0IHdlIGRvbid0XG4gKiB3YW50IHRvIGhhdmUgaW5qZWN0ZWQgaGVyZSwgc28gdGhpcyBpcyBhIGNvbXBsZXRlbHkgc2VwYXJhdGUgcm91dGUgYW5kIHRlbXBsYXRlLlxuICovXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNpZ25pbiBmcm9tICcuL1NpZ25pbic7XG5cbi8vIFNhbml0aXplIGZyb20gcGFyYW1cbmNvbnN0IGludGVybmFsRnJvbVJlZ2V4ID0gL15cXC9bXlxcL1xcXFxdXFx3Ky87XG5jb25zdCBwYXJhbXMgPSBxcy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xuY29uc3QgZnJvbSA9IGludGVybmFsRnJvbVJlZ2V4LnRlc3QocGFyYW1zLmZyb20pID8gcGFyYW1zLmZyb20gOiB1bmRlZmluZWQ7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PFNpZ25pblxuXHRcdGJyYW5kPXtLZXlzdG9uZS5icmFuZH1cblx0XHRmcm9tPXtmcm9tfVxuXHRcdGxvZ289e0tleXN0b25lLmxvZ299XG5cdFx0dXNlcj17S2V5c3RvbmUudXNlcn1cblx0XHR1c2VyQ2FuQWNjZXNzS2V5c3RvbmU9e0tleXN0b25lLnVzZXJDYW5BY2Nlc3NLZXlzdG9uZX1cblx0Lz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduaW4tdmlldycpXG4pO1xuIl19
