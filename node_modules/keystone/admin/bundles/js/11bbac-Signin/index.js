(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	danger: _theme2.default.alert.color.danger,
	error: _theme2.default.alert.color.danger,
	info: _theme2.default.alert.color.info,
	success: _theme2.default.alert.color.success,
	warning: _theme2.default.alert.color.warning
};

},{"../../../theme":71}],2:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

// clone children if a class exists for the tagname
var cloneWithClassnames = function cloneWithClassnames(c) {
	var type = c.type && c.type.displayName ? c.type.displayName : c.type || null;

	if (!type || !classes[type]) return c;

	return (0, _react.cloneElement)(c, {
		className: (0, _noImportant.css)(classes[type])
	});
};

function Alert(_ref) {
	var children = _ref.children,
	    className = _ref.className,
	    color = _ref.color,
	    Component = _ref.component,
	    props = _objectWithoutProperties(_ref, ['children', 'className', 'color', 'component']);

	props.className = (0, _noImportant.css)(classes.alert, classes[color], className);
	props.children = _react.Children.map(children, cloneWithClassnames);

	return _react2.default.createElement(Component, _extends({}, props, { 'data-alert-type': color }));
};

Alert.propTypes = {
	color: _react.PropTypes.oneOf(Object.keys(_colors2.default)).isRequired,
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string])
};
Alert.defaultProps = {
	component: 'div'
};

module.exports = Alert;

},{"./colors":1,"./styles":3,"aphrodite/no-important":undefined,"react":undefined}],3:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors2.default).forEach(function (color) {
	colorVariants[color] = {
		backgroundColor: _colors2.default[color].background,
		borderColor: _colors2.default[color].border,
		color: _colors2.default[color].text
	};
});

// Prepare headings
var headingTagnames = {};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (tag) {
	headingTagnames[tag] = { color: 'inherit' };
});

var linkStyles = {
	color: 'inherit',
	textDecoration: 'underline',

	':hover': { color: 'inherit' },
	':focus': { color: 'inherit' }
};

module.exports = _extends({
	alert: {
		borderColor: 'transparent',
		borderRadius: _theme2.default.alert.borderRadius,
		borderStyle: 'solid',
		borderWidth: _theme2.default.alert.borderWidth,
		margin: _theme2.default.alert.margin,
		padding: _theme2.default.alert.padding
	},

	// tagnames
	a: linkStyles,
	Link: linkStyles,
	strong: {
		fontWeight: 500
	}

}, headingTagnames, colorVariants);

},{"../../../theme":71,"./colors":1}],4:[function(require,module,exports){
'use strict';

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function BlankState(_ref) {
	var className = _ref.className,
	    children = _ref.children,
	    heading = _ref.heading,
	    Component = _ref.component,
	    props = _objectWithoutProperties(_ref, ['className', 'children', 'heading', 'component']);

	props.className = (0, _noImportant.css)(classes.container, className);

	return _react2.default.createElement(
		Component,
		props,
		!!heading && _react2.default.createElement(
			'h2',
			{ 'data-e2e-blank-state-heading': true, className: (0, _noImportant.css)(classes.heading) },
			heading
		),
		children
	);
};

BlankState.propTypes = {
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	heading: _react.PropTypes.string
};
BlankState.defaultProps = {
	component: 'div'
};

/* eslint quote-props: ["error", "as-needed"] */

var classes = _noImportant.StyleSheet.create({
	container: {
		backgroundColor: _theme2.default.blankstate.background,
		borderRadius: _theme2.default.blankstate.borderRadius,
		color: _theme2.default.blankstate.color,
		paddingBottom: _theme2.default.blankstate.paddingVertical,
		paddingLeft: _theme2.default.blankstate.paddingHorizontal,
		paddingRight: _theme2.default.blankstate.paddingHorizontal,
		paddingTop: _theme2.default.blankstate.paddingVertical,
		textAlign: 'center'
	},

	heading: {
		color: 'inherit',

		':last-child': {
			marginBottom: 0
		}
	}
});

module.exports = BlankState;

},{"../../../theme":71,"aphrodite/no-important":undefined,"react":undefined}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var commonClasses = _noImportant.StyleSheet.create(_styles2.default.common);
var stylesheetCache = {};
function getStyleSheet(variant, color) {
	var cacheKey = variant + '-' + color;
	if (!stylesheetCache[cacheKey]) {
		var variantStyles = _styles2.default[variant](color);
		stylesheetCache[cacheKey] = _noImportant.StyleSheet.create(variantStyles);
	}
	return stylesheetCache[cacheKey];
}

var BUTTON_SIZES = ['large', 'medium', 'small', 'xsmall'];
var BUTTON_VARIANTS = ['fill', 'hollow', 'link'];
var BUTTON_COLORS = ['default', 'primary', 'success', 'warning', 'danger', 'cancel', 'delete'];

// NOTE must NOT be functional component to allow `refs`

var Button = function (_Component) {
	_inherits(Button, _Component);

	function Button() {
		_classCallCheck(this, Button);

		return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	}

	_createClass(Button, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    active = _props.active,
			    aphroditeStyles = _props.aphroditeStyles,
			    block = _props.block,
			    className = _props.className,
			    color = _props.color,
			    Tag = _props.component,
			    disabled = _props.disabled,
			    size = _props.size,
			    variant = _props.variant,
			    props = _objectWithoutProperties(_props, ['active', 'aphroditeStyles', 'block', 'className', 'color', 'component', 'disabled', 'size', 'variant']);

			// get the styles


			var variantClasses = getStyleSheet(variant, color);
			props.className = _noImportant.css.apply(undefined, [commonClasses.base, commonClasses[size], variantClasses.base, block ? commonClasses.block : null, disabled ? commonClasses.disabled : null, active ? variantClasses.active : null].concat(_toConsumableArray(aphroditeStyles)));
			if (className) {
				props.className += ' ' + className;
			}

			// return an anchor or button
			if (!Tag) {
				Tag = props.href ? 'a' : 'button';
			}
			// Ensure buttons don't submit by default
			if (Tag === 'button' && !props.type) {
				props.type = 'button';
			}

			return _react2.default.createElement(Tag, props);
		}
	}]);

	return Button;
}(_react.Component);

;

Button.propTypes = {
	active: _react.PropTypes.bool,
	aphroditeStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		_definition: _react.PropTypes.object,
		_name: _react.PropTypes.string
	})),
	block: _react.PropTypes.bool,
	color: _react.PropTypes.oneOf(BUTTON_COLORS),
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
	disabled: _react.PropTypes.bool,
	href: _react.PropTypes.string,
	size: _react.PropTypes.oneOf(BUTTON_SIZES),
	variant: _react.PropTypes.oneOf(BUTTON_VARIANTS)
};
Button.defaultProps = {
	aphroditeStyles: [],
	color: 'default',
	variant: 'fill'
};

module.exports = Button;

},{"./styles":6,"aphrodite/no-important":undefined,"react":undefined}],6:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Button
// ==============================

var _css = require('../../../utils/css');

var _color = require('../../../utils/color');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Common Styles
// ----------------

exports.common = {
	// Base Button
	// ----------------
	base: {
		'appearance': 'none',
		'background': 'none',
		'borderWidth': _theme2.default.button.borderWidth,
		'borderStyle': 'solid',
		'borderColor': 'transparent',
		'borderRadius': _theme2.default.button.borderRadius,
		'cursor': 'pointer',
		'display': 'inline-block',
		'fontWeight': _theme2.default.button.font.weight,
		'height': _theme2.default.component.height,
		'lineHeight': _theme2.default.component.lineHeight,
		'marginBottom': 0,
		'padding': '0 ' + _theme2.default.button.paddingHorizontal,
		'outline': 0,
		'textAlign': 'center',
		'touchAction': 'manipulation',
		'userSelect': 'none',
		'verticalAlign': 'middle',
		'whiteSpace': 'nowrap',

		':hover': {
			color: _theme2.default.button.default.textColor,
			textDecoration: 'none'
		},
		':focus': {
			color: _theme2.default.button.default.textColor,
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
		fontSize: _theme2.default.font.size.large
	},
	default: {
		fontSize: _theme2.default.font.size.default
	},
	small: {
		fontSize: _theme2.default.font.size.small
	},
	xsmall: {
		fontSize: _theme2.default.font.size.xsmall,
		lineHeight: '1.9',
		paddingLeft: '.66em',
		paddingRight: '.66em'
	}
};

// Fill Variant
// ----------------
function buttonFillVariant(textColor, bgColor) {
	var hoverStyles = _extends({}, (0, _css.gradientVertical)((0, _color.lighten)(bgColor, 10), (0, _color.darken)(bgColor, 5)), {
		borderColor: (0, _color.darken)(bgColor, 5) + ' ' + (0, _color.darken)(bgColor, 10) + ' ' + (0, _color.darken)(bgColor, 15),
		boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
		color: textColor,
		outline: 'none'
	});
	var focusStyles = _extends({}, (0, _css.gradientVertical)((0, _color.lighten)(bgColor, 10), (0, _color.darken)(bgColor, 5)), {
		borderColor: (0, _color.darken)(bgColor, 5) + ' ' + (0, _color.darken)(bgColor, 10) + ' ' + (0, _color.darken)(bgColor, 15),
		boxShadow: '0 0 0 3px ' + (0, _color.fade)(bgColor, 25),
		color: textColor,
		outline: 'none'
	});
	var activeStyles = {
		backgroundColor: (0, _color.darken)(bgColor, 10),
		backgroundImage: 'none',
		borderColor: (0, _color.darken)(bgColor, 25) + ' ' + (0, _color.darken)(bgColor, 15) + ' ' + (0, _color.darken)(bgColor, 10),
		boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
	};
	return {
		base: _extends({}, (0, _css.gradientVertical)((0, _color.lighten)(bgColor, 5), (0, _color.darken)(bgColor, 10), bgColor), {
			'borderColor': (0, _color.darken)(bgColor, 10) + ' ' + (0, _color.darken)(bgColor, 20) + ' ' + (0, _color.darken)(bgColor, 25),
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
}
// TODO: This is pretty hacky, needs to be consolidated with the Variant() method
// above (needs more theme variables to be implemented though)
function buttonFillDefault() {
	var borderColor = _theme2.default.input.border.color.default;
	var hoverStyles = _extends({}, (0, _css.gradientVertical)('#fff', '#eee'), {
		borderColor: (0, _color.darken)(borderColor, 5) + ' ' + (0, _color.darken)(borderColor, 5) + ' ' + (0, _color.darken)(borderColor, 10),
		boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
		color: _theme2.default.color.text
	});
	var focusStyles = {
		borderColor: _theme2.default.color.primary,
		boxShadow: '0 0 0 3px ' + (0, _color.fade)(_theme2.default.color.primary, 10),
		color: _theme2.default.color.text,
		outline: 'none'
	};
	var activeStyles = {
		background: '#e6e6e6',
		borderColor: (0, _color.darken)(borderColor, 10),
		boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
		color: _theme2.default.color.text
	};
	return {
		base: _extends({}, (0, _css.gradientVertical)('#fafafa', '#eaeaea'), {
			'borderColor': borderColor + ' ' + (0, _color.darken)(borderColor, 6) + ' ' + (0, _color.darken)(borderColor, 12),
			'color': _theme2.default.color.text,
			'textShadow': '0 1px 0 white',

			':hover': hoverStyles,
			':focus': focusStyles,
			':active': activeStyles
		}),

		// gross hack
		active: _extends({}, activeStyles, {

			':hover': activeStyles,
			':focus': _extends({}, activeStyles, focusStyles, {
				boxShadow: '0 0 0 3px ' + (0, _color.fade)(_theme2.default.color.primary, 10) + ', inset 0 1px 2px rgba(0, 0, 0, 0.1)'
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
			return buttonFillVariant('white', _theme2.default.button.danger.bgColor);
		default:
			return buttonFillVariant('white', _theme2.default.button[color].bgColor);
	}
};

// Hollow Variant
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
		boxShadow: '0 0 0 3px ' + (0, _color.fade)(borderColor, 10)
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
			':focus ': _extends({}, focusAndHoverStyles, focusOnlyStyles),
			':active': activeStyles
		},
		active: activeStyles
	};
};
exports.hollow = function (color) {
	// TODO: better handling of cancel and delete colors
	if (color === 'cancel' || color === 'delete') color = 'danger';

	return buttonHollowVariant(_theme2.default.button[color].bgColor, _theme2.default.button[color].borderColor);
};

// Link Variant
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
};
function buttonLinkDelete() {
	var styles = buttonLinkVariant(_theme2.default.color.gray40, _theme2.default.color.danger);
	var hoverStyles = _extends({}, (0, _css.gradientVertical)((0, _color.lighten)(_theme2.default.color.danger, 10), (0, _color.darken)(_theme2.default.color.danger, 10)), {
		backgroundColor: _theme2.default.color.danger,
		borderColor: (0, _color.darken)(_theme2.default.color.danger, 4) + ' ' + (0, _color.darken)(_theme2.default.color.danger, 8) + ' ' + (0, _color.darken)(_theme2.default.color.danger, 12),
		boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
		color: 'white',
		textDecoration: 'none'
	});
	var activeStyles = {
		backgroundColor: (0, _color.darken)(_theme2.default.color.danger, 4),
		backgroundImage: 'none',
		borderColor: (0, _color.darken)(_theme2.default.color.danger, 12) + ' ' + (0, _color.darken)(_theme2.default.color.danger, 8) + ' ' + (0, _color.darken)(_theme2.default.color.danger, 8),
		boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
		color: 'white'
	};
	return {
		base: _extends({}, styles.base, {
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
			return buttonLinkVariant(_theme2.default.color.link, _theme2.default.color.linkHover);
		case 'cancel':
			return buttonLinkVariant(_theme2.default.color.gray40, _theme2.default.color.danger);
		case 'delete':
			return buttonLinkDelete();
		default:
			return buttonLinkVariant(_theme2.default.color[color], _theme2.default.color[color]);
	}
};

},{"../../../theme":71,"../../../utils/color":72,"../../../utils/css":74}],7:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

function Center(_ref) {
	var className = _ref.className,
	    Component = _ref.component,
	    height = _ref.height,
	    style = _ref.style,
	    props = _objectWithoutProperties(_ref, ['className', 'component', 'height', 'style']);

	props.className = (0, _noImportant.css)(classes.center, className);
	props.style = _extends({ height: height }, style);

	return _react2.default.createElement(Component, props);
};
Center.propTypes = {
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
	height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
Center.defaultProps = {
	component: 'div',
	height: 'auto'
};

module.exports = Center;

},{"./styles":8,"aphrodite/no-important":undefined,"react":undefined}],8:[function(require,module,exports){
'use strict';

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
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _color = require('../../../utils/color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(function (color) {
	baseColors[color] = {
		background: (0, _color.fade)(_theme2.default.color[color], 10),
		backgroundActive: (0, _color.fade)(_theme2.default.color[color], 20),
		backgroundHover: (0, _color.fade)(_theme2.default.color[color], 15),
		text: _theme2.default.color[color]
	};
});
var invertedColors = {};
['danger', 'info', 'primary', 'success', 'warning'].forEach(function (color) {
	invertedColors[color + '__inverted'] = {
		background: _theme2.default.color[color],
		backgroundActive: (0, _color.lighten)(_theme2.default.color[color], 5),
		backgroundHover: (0, _color.lighten)(_theme2.default.color[color], 15),
		text: 'white'
	};
});

module.exports = _extends({
	default: {
		background: _theme2.default.color.gray10,
		backgroundActive: _theme2.default.color.gray20,
		backgroundHover: _theme2.default.color.gray15,
		text: _theme2.default.color.gray60
	}
}, baseColors, {

	// inverted
	default__inverted: {
		background: _theme2.default.color.gray60,
		backgroundActive: (0, _color.lighten)(_theme2.default.color.gray60, 5),
		backgroundHover: (0, _color.lighten)(_theme2.default.color.gray60, 15),
		text: 'white'
	}
}, invertedColors);

},{"../../../theme":71,"../../../utils/color":72}],10:[function(require,module,exports){
'use strict';

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

function Chip(_ref) {
	var className = _ref.className,
	    children = _ref.children,
	    color = _ref.color,
	    inverted = _ref.inverted,
	    label = _ref.label,
	    onClear = _ref.onClear,
	    onClick = _ref.onClick,
	    props = _objectWithoutProperties(_ref, ['className', 'children', 'color', 'inverted', 'label', 'onClear', 'onClick']);

	props.className = (0, _noImportant.css)(classes.chip, className);
	var labelClassName = (0, _noImportant.css)(classes.button, classes.label, classes['button__' + color + (inverted ? '__inverted' : '')]);
	var clearClassName = (0, _noImportant.css)(classes.button, classes.clear, classes['button__' + color + (inverted ? '__inverted' : '')]);

	return _react2.default.createElement(
		'div',
		props,
		_react2.default.createElement(
			'button',
			{ type: 'button', onClick: onClick, className: labelClassName },
			label,
			children
		),
		!!onClear && _react2.default.createElement(
			'button',
			{ type: 'button', onClick: onClear, className: clearClassName },
			'\xD7'
		)
	);
};

Chip.propTypes = {
	color: _react.PropTypes.oneOf(Object.keys(_colors2.default)).isRequired,
	inverted: _react.PropTypes.bool,
	label: _react2.default.PropTypes.string.isRequired,
	onClear: _react2.default.PropTypes.func,
	onClick: _react2.default.PropTypes.func
};
Chip.defaultProps = {
	color: 'default'
};

module.exports = Chip;

},{"./colors":9,"./styles":11,"aphrodite/no-important":undefined,"react":undefined}],11:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _css = require('../../../utils/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors2.default).forEach(function (color) {
	var hoverStyles = {
		backgroundColor: _colors2.default[color].backgroundHover
	};

	colorVariants['button__' + color] = {
		backgroundColor: _colors2.default[color].background,
		color: _colors2.default[color].text,

		':hover': hoverStyles,
		':focus': hoverStyles,
		':active': {
			backgroundColor: _colors2.default[color].backgroundActive
		}
	};
});

module.exports = _extends({
	chip: {
		display: 'inline-block',
		fontSize: _theme2.default.font.size.small,
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
		float: 'left',
		padding: '0 .9em',
		outline: 'none',

		// make pills - exaggerate the padding toward the radii so it looks even
		':first-child': _extends({}, (0, _css.borderLeftRadius)('3em'), {
			paddingLeft: '1.1em'
		}),
		':last-child': _extends({}, (0, _css.borderRightRadius)('3em'), {
			paddingRight: '1.1em'
		})
	},

	// provide separation between the label and clear buttons
	// floating stops the margins from collapsing into eaching

	label: { marginRight: 1 },
	clear: { marginLeft: 1 }

}, colorVariants);

},{"../../../theme":71,"../../../utils/css":74,"./colors":9}],12:[function(require,module,exports){
'use strict';

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

function Container(_ref) {
	var className = _ref.className,
	    clearFloatingChildren = _ref.clearFloatingChildren,
	    Component = _ref.component,
	    width = _ref.width,
	    props = _objectWithoutProperties(_ref, ['className', 'clearFloatingChildren', 'component', 'width']);

	props.className = (0, _noImportant.css)(classes.container, classes[width], clearFloatingChildren ? classes.clearfix : null, className);

	return _react2.default.createElement(Component, props);
};

Container.propTypes = {
	clearFloatingChildren: _react.PropTypes.bool,
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	width: _react.PropTypes.oneOf(Object.keys(_sizes2.default)).isRequired
};
Container.defaultProps = {
	component: 'div',
	width: 'large'
};

module.exports = Container;

},{"./sizes":13,"./styles":14,"aphrodite/no-important":undefined,"react":undefined}],13:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	small: _theme2.default.container.size.small,
	medium: _theme2.default.container.size.medium,
	large: _theme2.default.container.size.large
};

},{"../../../theme":71}],14:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Container
// ==============================

/* eslint quote-props: ["error", "as-needed"] */

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare sizes
var sizeVariants = {};
Object.keys(_sizes2.default).forEach(function (size) {
	sizeVariants[size] = {
		maxWidth: _sizes2.default[size]
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
	content: '" "', // 1
	display: 'table' };

module.exports = _extends({
	container: {
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: _theme2.default.container.gutter,
		paddingRight: _theme2.default.container.gutter
	},

	// clear floating children
	clearfix: {
		':before': clearfixStyles,
		':after': clearfixStyles
	}

}, sizeVariants);

},{"../../../theme":71,"./sizes":13}],15:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint quote-props: ["error", "as-needed"] */

function DropdownButton(_ref) {
	var children = _ref.children,
	    props = _objectWithoutProperties(_ref, ['children']);

	return _react2.default.createElement(
		_Button2.default,
		props,
		children,
		_react2.default.createElement('span', { className: (0, _noImportant.css)(classes.arrow) })
	);
};

// NOTE
// 1: take advantage of `currentColor` by leaving border top color undefined
// 2: even though the arrow is vertically centered, visually it appears too low
//    because of lowercase characters beside it
var classes = _noImportant.StyleSheet.create({
	arrow: {
		borderLeft: '0.3em solid transparent',
		borderRight: '0.3em solid transparent',
		borderTop: '0.3em solid', // 1
		display: 'inline-block',
		height: 0,
		marginTop: '-0.125em', // 2
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
});

module.exports = DropdownButton;

},{"../Button":5,"aphrodite/no-important":undefined,"react":undefined}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

var Form = function (_Component) {
	_inherits(Form, _Component);

	function Form() {
		_classCallCheck(this, Form);

		return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
	}

	_createClass(Form, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				formLayout: this.props.layout,
				labelWidth: this.props.labelWidth
			};
		}
	}, {
		key: 'render',
		value: function render() {
			// NOTE `labelWidth` is declared to remove it from `props`, though never used
			var _props = this.props,
			    className = _props.className,
			    Component = _props.component,
			    labelWidth = _props.labelWidth,
			    layout = _props.layout,
			    props = _objectWithoutProperties(_props, ['className', 'component', 'labelWidth', 'layout']);

			props.className = (0, _noImportant.css)(classes.Form, classes['Form__' + layout], className);

			return _react2.default.createElement(Component, props);
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

},{"./styles":17,"aphrodite/no-important":undefined,"react":undefined}],17:[function(require,module,exports){
"use strict";

// ==============================
// Form
// ==============================

module.exports = {
	Form: {}
};

},{}],18:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _FormLabel = require('../FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

var FormField = function (_Component) {
	_inherits(FormField, _Component);

	function FormField() {
		_classCallCheck(this, FormField);

		var _this = _possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).call(this));

		_this.formFieldId = generateId();
		return _this;
	}

	_createClass(FormField, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				formFieldId: this.formFieldId
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _context = this.context,
			    _context$formLayout = _context.formLayout,
			    formLayout = _context$formLayout === undefined ? 'basic' : _context$formLayout,
			    labelWidth = _context.labelWidth;

			var _props = this.props,
			    aphroditeStyles = _props.aphroditeStyles,
			    children = _props.children,
			    className = _props.className,
			    cropLabel = _props.cropLabel,
			    htmlFor = _props.htmlFor,
			    label = _props.label,
			    offsetAbsentLabel = _props.offsetAbsentLabel,
			    props = _objectWithoutProperties(_props, ['aphroditeStyles', 'children', 'className', 'cropLabel', 'htmlFor', 'label', 'offsetAbsentLabel']);

			props.className = (0, _noImportant.css)(classes.FormField, classes['FormField--form-layout-' + formLayout], offsetAbsentLabel ? classes['FormField--offset-absent-label'] : null, aphroditeStyles);
			if (className) {
				props.className += ' ' + className;
			}
			if (offsetAbsentLabel && labelWidth) {
				props.style = _extends({
					paddingLeft: labelWidth
				}, props.style);
			}

			// elements
			var componentLabel = label ? _react2.default.createElement(
				_FormLabel2.default,
				{ htmlFor: htmlFor, cropText: cropLabel },
				label
			) : null;

			return _react2.default.createElement(
				'div',
				_extends({}, props, { htmlFor: htmlFor }),
				componentLabel,
				children
			);
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
	aphroditeStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
	children: _react.PropTypes.node,
	cropLabel: _react.PropTypes.bool,
	htmlFor: _react2.default.PropTypes.string,
	label: _react2.default.PropTypes.string,
	offsetAbsentLabel: _react2.default.PropTypes.bool
};

function generateId() {
	return Math.random().toString(36).substr(2, 9);
};

module.exports = FormField;

},{"../FormLabel":23,"./styles":19,"aphrodite/no-important":undefined,"react":undefined}],19:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // ==============================
// Form Field
// ==============================

module.exports = {
	'FormField': {
		marginBottom: '1em',
		position: 'relative'
	},

	// when inside a horizontal form

	'FormField--form-layout-horizontal': _defineProperty({}, '@media (min-width: ' + _theme2.default.breakpoint.tabletLandscapeMin + ')', {
		display: 'table',
		tableLayout: 'fixed',
		width: '100%'
	}),

	// inside horizontal form
	// typically for use with submit button inside
	'FormField--offset-absent-label': {
		paddingLeft: _theme2.default.form.label.width
	},

	// when inside an inline form

	'FormField--form-layout-inline': {
		'display': 'inline-block',
		'paddingLeft': '0.25em',
		'paddingRight': '0.25em',
		'verticalAlign': 'top',

		':first-child': { paddingLeft: 0 },
		':last-child': { paddingRight: 0 }
	}
};

},{"../../../theme":71}],20:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _concatClassnames = require('../../../utils/concatClassnames');

var _concatClassnames2 = _interopRequireDefault(_concatClassnames);

var _noedit = require('./noedit');

var _noedit2 = _interopRequireDefault(_noedit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

// NOTE must NOT be functional component to allow `refs`

var FormInput = function (_Component) {
	_inherits(FormInput, _Component);

	function FormInput() {
		_classCallCheck(this, FormInput);

		return _possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).apply(this, arguments));
	}

	_createClass(FormInput, [{
		key: 'blur',
		value: function blur() {
			this.target.blur();
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.target.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    aphroditeStyles = _props.aphroditeStyles,
			    className = _props.className,
			    disabled = _props.disabled,
			    id = _props.id,
			    multiline = _props.multiline,
			    noedit = _props.noedit,
			    size = _props.size,
			    props = _objectWithoutProperties(_props, ['aphroditeStyles', 'className', 'disabled', 'id', 'multiline', 'noedit', 'size']);

			// NOTE return a different component for `noedit`


			if (noedit) return _react2.default.createElement(_noedit2.default, this.props);

			var _context = this.context,
			    formFieldId = _context.formFieldId,
			    formLayout = _context.formLayout;


			props.id = id || formFieldId;
			props.className = _noImportant.css.apply(undefined, [classes.FormInput, classes['FormInput__size--' + size], disabled ? classes['FormInput--disabled'] : null, formLayout ? classes['FormInput--form-layout-' + formLayout] : null].concat(_toConsumableArray((0, _concatClassnames2.default)(aphroditeStyles))));
			if (className) {
				props.className += ' ' + className;
			}

			var setRef = function setRef(n) {
				return _this2.target = n;
			};
			var Tag = multiline ? 'textarea' : 'input';

			return _react2.default.createElement(Tag, _extends({
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
	aphroditeStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
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

},{"../../../utils/concatClassnames":73,"./noedit":21,"./styles":22,"aphrodite/no-important":undefined,"react":undefined}],21:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _color = require('../../../utils/color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint quote-props: ["error", "as-needed"] */

function FormInputNoedit(_ref) {
	var className = _ref.className,
	    Component = _ref.component,
	    cropText = _ref.cropText,
	    multiline = _ref.multiline,
	    noedit = _ref.noedit,
	    type = _ref.type,
	    props = _objectWithoutProperties(_ref, ['className', 'component', 'cropText', 'multiline', 'noedit', 'type']);

	props.className = (0, _noImportant.css)(classes.noedit, cropText ? classes.cropText : null, multiline ? classes.multiline : null, props.href || props.onClick ? classes.anchor : null, className);

	return _react2.default.createElement(Component, props);
};

FormInputNoedit.propTypes = {
	component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	cropText: _react.PropTypes.bool
};
FormInputNoedit.defaultProps = {
	component: 'span'
};

var anchorHoverAndFocusStyles = {
	backgroundColor: (0, _color.fade)(_theme2.default.color.link, 10),
	borderColor: (0, _color.fade)(_theme2.default.color.link, 10),
	color: _theme2.default.color.link,
	outline: 'none',
	textDecoration: 'underline'
};

var classes = _noImportant.StyleSheet.create({
	noedit: {
		appearance: 'none',
		backgroundColor: _theme2.default.input.background.noedit,
		backgroundImage: 'none',
		borderColor: _theme2.default.input.border.color.noedit,
		borderRadius: _theme2.default.input.border.radius,
		borderStyle: 'solid',
		borderWidth: _theme2.default.input.border.width,
		color: _theme2.default.color.gray80,
		display: 'inline-block',
		height: _theme2.default.input.height,
		lineHeight: _theme2.default.input.lineHeight,
		padding: '0 ' + _theme2.default.input.paddingHorizontal,
		transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
		verticalAlign: 'middle',

		// prevent empty inputs from collapsing by adding content
		':empty:before': {
			color: _theme2.default.color.gray40,
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
		backgroundColor: (0, _color.fade)(_theme2.default.color.link, 5),
		borderColor: (0, _color.fade)(_theme2.default.color.link, 10),
		color: _theme2.default.color.link,
		marginRight: 5,
		minWidth: 0,
		textDecoration: 'none',

		':hover': anchorHoverAndFocusStyles,
		':focus': anchorHoverAndFocusStyles
	}
});

module.exports = FormInputNoedit;

},{"../../../theme":71,"../../../utils/color":72,"aphrodite/no-important":undefined,"react":undefined}],22:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	'FormInput': {
		'appearance': 'none',
		'backgroundColor': _theme2.default.input.background.default,
		'backgroundImage': 'none',
		'borderColor': _theme2.default.input.border.color.default,
		'borderRadius': _theme2.default.input.border.radius,
		'borderStyle': 'solid',
		'borderWidth': _theme2.default.input.border.width,
		'boxShadow': _theme2.default.input.boxShadow,
		'color': 'inherit', // FIXME
		'display': 'block',
		'height': _theme2.default.input.height,
		'lineHeight': _theme2.default.input.lineHeight,
		'padding': '0 ' + _theme2.default.input.paddingHorizontal,
		'transition': 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
		'width': '100%',

		':hover': {
			borderColor: _theme2.default.input.border.color.hover,
			outline: 0
		},
		':focus': {
			borderColor: _theme2.default.input.border.color.focus,
			boxShadow: _theme2.default.input.boxShadowFocus,
			outline: 0
		}
	},
	'FormInput--disabled': {
		backgroundColor: _theme2.default.input.background.disabled,
		pointerEvents: 'none'
	},

	// sizes
	'FormInput__size--small': {
		fontSize: _theme2.default.font.size.small
	},
	'FormInput__size--large': {
		fontSize: _theme2.default.font.size.large
	}
}; // ==============================
// Form Input
// ==============================

},{"../../../theme":71}],23:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

function FormLabel(_ref, _ref2) {
	var formFieldId = _ref2.formFieldId,
	    formLayout = _ref2.formLayout,
	    labelWidth = _ref2.labelWidth;

	var aphroditeStyles = _ref.aphroditeStyles,
	    className = _ref.className,
	    Component = _ref.component,
	    cropText = _ref.cropText,
	    htmlFor = _ref.htmlFor,
	    props = _objectWithoutProperties(_ref, ['aphroditeStyles', 'className', 'component', 'cropText', 'htmlFor']);

	props.htmlFor = htmlFor || formFieldId;
	props.className = (0, _noImportant.css)(classes.FormLabel, formLayout ? classes['FormLabel--form-layout-' + formLayout] : null, cropText ? classes['FormLabel--crop-text'] : null, aphroditeStyles);
	if (className) {
		props.className += ' ' + className;
	}
	if (labelWidth) {
		props.style = _extends({
			width: labelWidth
		}, props.style);
	}

	return _react2.default.createElement(Component, props);
};

var stylesShape = {
	_definition: _react.PropTypes.object,
	_name: _react.PropTypes.string
};

FormLabel.propTypes = {
	aphroditeStyles: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape(stylesShape)), _react.PropTypes.shape(stylesShape)]),
	component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	cropText: _react.PropTypes.bool
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

},{"./styles":24,"aphrodite/no-important":undefined,"react":undefined}],24:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // ==============================
// Form Label
// ==============================

module.exports = {
	'FormLabel': {
		color: _theme2.default.form.label.color,
		fontSize: _theme2.default.form.label.fontSize,
		fontWeight: _theme2.default.form.label.fontWeight,
		display: 'inline-block',
		marginBottom: '0.5em'
	},

	// when inside a horizontal form

	'FormLabel--form-layout-horizontal': _defineProperty({}, '@media (min-width: ' + _theme2.default.breakpoint.tabletLandscapeMin + ')', {
		display: 'table-cell',
		lineHeight: _theme2.default.component.lineHeight, // fix
		marginBottom: 0,
		paddingRight: 5,
		verticalAlign: 'top',
		width: _theme2.default.form.label.width
	}),

	// crop long text

	'FormLabel--crop-text': {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	}
};

},{"../../../theme":71}],25:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

function FormNote(_ref) {
	var className = _ref.className,
	    children = _ref.children,
	    Component = _ref.component,
	    html = _ref.html,
	    props = _objectWithoutProperties(_ref, ['className', 'children', 'component', 'html']);

	props.className = (0, _noImportant.css)(classes.note, className);

	// Property Violation
	if (children && html) {
		console.error('Warning: FormNote cannot render `children` and `html`. You must provide one or the other.');
	}

	return html ? _react2.default.createElement(Component, _extends({}, props, { dangerouslySetInnerHTML: { __html: html } })) : _react2.default.createElement(
		Component,
		props,
		children
	);
};
FormNote.propTypes = {
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
	html: _react.PropTypes.string
};
FormNote.defaultProps = {
	component: 'div'
};

module.exports = FormNote;

},{"./styles":26,"aphrodite/no-important":undefined,"react":undefined}],26:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	note: {
		color: _theme2.default.form.note.color,
		fontSize: _theme2.default.form.note.fontSize,
		marginTop: _theme2.default.spacing.small
	}
}; // ==============================
// Form Note
// ==============================

},{"../../../theme":71}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

var FormSelect = function (_Component) {
	_inherits(FormSelect, _Component);

	function FormSelect() {
		_classCallCheck(this, FormSelect);

		return _possibleConstructorReturn(this, (FormSelect.__proto__ || Object.getPrototypeOf(FormSelect)).apply(this, arguments));
	}

	_createClass(FormSelect, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    id = _props.id,
			    options = _props.options,
			    props = _objectWithoutProperties(_props, ['children', 'id', 'options']);

			var formFieldId = this.context.formFieldId;


			props.className = (0, _noImportant.css)(classes.select, props.disabled ? classes['select--disabled'] : null);
			props.id = id || formFieldId;

			// Property Violation
			if (options && children) {
				console.error('Warning: FormSelect cannot render `children` and `options`. You must provide one or the other.');
			}

			return _react2.default.createElement(
				'div',
				{ className: (0, _noImportant.css)(classes.container) },
				options ? _react2.default.createElement(
					'select',
					props,
					options.map(function (opt) {
						return _react2.default.createElement(
							'option',
							{ key: opt.value, value: opt.value },
							opt.label
						);
					})
				) : _react2.default.createElement(
					'select',
					props,
					children
				),
				_react2.default.createElement(
					'span',
					{ className: (0, _noImportant.css)(classes.arrows, props.disabled ? classes['arrows--disabled'] : null) },
					_react2.default.createElement('span', { className: (0, _noImportant.css)(classes.arrow, classes.arrowTop) }),
					_react2.default.createElement('span', { className: (0, _noImportant.css)(classes.arrow, classes.arrowBottom) })
				)
			);
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
	options: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
		label: _react2.default.PropTypes.string,
		value: _react2.default.PropTypes.string
	})),
	value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};

module.exports = FormSelect;

},{"./styles":28,"aphrodite/no-important":undefined,"react":undefined}],28:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _color = require('../../../utils/color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		backgroundColor: _theme2.default.input.background.default,
		backgroundImage: 'none',
		borderColor: _theme2.default.input.border.color.default,
		borderBottomColor: (0, _color.darken)(_theme2.default.input.border.color.default, 4),
		borderTopColor: (0, _color.lighten)(_theme2.default.input.border.color.default, 4),
		borderRadius: _theme2.default.input.border.radius,
		borderStyle: 'solid',
		borderWidth: _theme2.default.input.border.width,
		boxShadow: _theme2.default.select.boxShadow,
		color: 'inherit', // FIXME
		display: 'block',
		height: _theme2.default.input.height,
		lineHeight: _theme2.default.input.lineHeight,
		padding: '0 ' + _theme2.default.input.paddingHorizontal,
		transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
		width: '100%',

		':hover': {
			borderColor: _theme2.default.input.border.color.hover,
			outline: 0
		},
		':focus': {
			borderColor: _theme2.default.input.border.color.focus,
			boxShadow: _theme2.default.input.boxShadowFocus,
			outline: 0
		}
	},
	'select--disabled': {
		backgroundColor: _theme2.default.input.background.disabled,
		pointerEvents: 'none'
	},

	// arrows
	arrows: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		height: _theme2.default.input.height,
		justifyContent: 'center',
		pointerEvents: 'none',
		position: 'absolute',
		right: 0,
		top: 0,
		width: _theme2.default.input.height
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

},{"../../../theme":71,"../../../utils/color":72}],29:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	danger: _theme2.default.glyph.color.danger,
	inherit: _theme2.default.glyph.color.inherit,
	inverted: _theme2.default.glyph.color.inverted,
	primary: _theme2.default.glyph.color.primary,
	success: _theme2.default.glyph.color.success,
	warning: _theme2.default.glyph.color.warning
};

},{"../../../theme":71}],30:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _octicons = require('./octicons');

var _octicons2 = _interopRequireDefault(_octicons);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

// FIXME static octicon classes leaning on Elemental to avoid duplicate
// font and CSS; inflating the project size

function Glyph(_ref) {
	var aphroditeStyles = _ref.aphroditeStyles,
	    className = _ref.className,
	    color = _ref.color,
	    Component = _ref.component,
	    name = _ref.name,
	    size = _ref.size,
	    style = _ref.style,
	    props = _objectWithoutProperties(_ref, ['aphroditeStyles', 'className', 'color', 'component', 'name', 'size', 'style']);

	var colorIsValidType = Object.keys(_colors2.default).includes(color);
	props.className = (0, _noImportant.css)(classes.glyph, colorIsValidType && classes['color__' + color], classes['size__' + size], aphroditeStyles) + (' ' + _octicons2.default[name]);
	if (className) {
		props.className += ' ' + className;
	}

	// support random color strings
	props.style = _extends({
		color: !colorIsValidType ? color : null
	}, style);

	return _react2.default.createElement(Component, props);
};

Glyph.propTypes = {
	aphroditeStyles: _react.PropTypes.shape({
		_definition: _react.PropTypes.object,
		_name: _react.PropTypes.string
	}),
	color: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(Object.keys(_colors2.default)), _react.PropTypes.string]),
	name: _react.PropTypes.oneOf(Object.keys(_octicons2.default)).isRequired,
	size: _react.PropTypes.oneOf(Object.keys(_sizes2.default))
};
Glyph.defaultProps = {
	component: 'i',
	color: 'inherit',
	size: 'small'
};

module.exports = Glyph;

},{"./colors":29,"./octicons":31,"./sizes":32,"./styles":33,"aphrodite/no-important":undefined,"react":undefined}],31:[function(require,module,exports){
'use strict';

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
	package: 'octicon octicon-package',
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
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	small: _theme2.default.glyph.size.small,
	medium: _theme2.default.glyph.size.medium,
	large: _theme2.default.glyph.size.large
};

},{"../../../theme":71}],33:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Glyph
// ==============================

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors2.default).forEach(function (color) {
	colorVariants['color__' + color] = {
		color: _colors2.default[color]
	};
});

// Prepare sizes
var sizeVariants = {};
Object.keys(_sizes2.default).forEach(function (size) {
	sizeVariants['size__' + size] = {
		fontSize: _sizes2.default[size]
	};
});

module.exports = _extends({
	glyph: {}

}, colorVariants, sizeVariants);

},{"./colors":29,"./sizes":32}],34:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Glyph = require('../Glyph');

var _Glyph2 = _interopRequireDefault(_Glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint quote-props: ["error", "as-needed"] */

function GlyphButton(_ref) {
	var children = _ref.children,
	    glyph = _ref.glyph,
	    glyphColor = _ref.glyphColor,
	    glyphSize = _ref.glyphSize,
	    glyphStyle = _ref.glyphStyle,
	    position = _ref.position,
	    props = _objectWithoutProperties(_ref, ['children', 'glyph', 'glyphColor', 'glyphSize', 'glyphStyle', 'position']);

	var isDefault = position === 'default';
	var isLeft = position === 'left';
	var isRight = position === 'right';

	var offset = {};
	if (isLeft) offset.marginRight = '0.5em';
	if (isRight) offset.marginLeft = '0.5em';

	var glyphStyles = _extends({}, offset, glyphStyle);

	var icon = _react2.default.createElement(_Glyph2.default, {
		aphroditeStyles: classes.glyph,
		color: glyphColor,
		name: glyph,
		size: glyphSize,
		style: glyphStyles
	});

	return _react2.default.createElement(
		_Button2.default,
		props,
		(isDefault || isLeft) && icon,
		children,
		isRight && icon
	);
};

// For props "glyph", "glyphColor", and "glyphSize":
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
	position: 'default' };

var classes = _noImportant.StyleSheet.create({
	glyph: {
		display: 'inline-block',
		marginTop: '-0.125em', // fix icon alignment
		verticalAlign: 'middle'
	}
});

module.exports = GlyphButton;

},{"../Button":5,"../Glyph":30,"aphrodite/no-important":undefined,"react":undefined}],35:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _FormField = require('../FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _Glyph = require('../Glyph');

var _Glyph2 = _interopRequireDefault(_Glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint quote-props: ["error", "as-needed"] */

function GlyphField(_ref) {
	var children = _ref.children,
	    glyph = _ref.glyph,
	    glyphColor = _ref.glyphColor,
	    glyphSize = _ref.glyphSize,
	    position = _ref.position,
	    props = _objectWithoutProperties(_ref, ['children', 'glyph', 'glyphColor', 'glyphSize', 'position']);

	var isLeft = position === 'left';
	var isRight = position === 'right';

	var glyphStyles = {};
	if (isLeft) glyphStyles.marginRight = '0.5em';
	if (isRight) glyphStyles.marginLeft = '0.5em';

	var icon = _react2.default.createElement(_Glyph2.default, {
		aphroditeStyles: classes.glyph,
		color: glyphColor,
		name: glyph,
		size: glyphSize,
		style: glyphStyles
	});

	return _react2.default.createElement(
		_FormField2.default,
		_extends({ aphroditeStyles: classes.wrapper }, props),
		isLeft && icon,
		children,
		isRight && icon
	);
};

// For props "glyph", "glyphColor", and "glyphSize":
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

var classes = _noImportant.StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		display: 'flex'
	},
	glyph: {
		display: 'inline-block',
		marginTop: '-0.125em', // fix icon alignment
		verticalAlign: 'middle'
	}
});

module.exports = GlyphField;

},{"../FormField":18,"../Glyph":30,"aphrodite/no-important":undefined,"react":undefined}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Col = undefined;

var _GridCol = require('../GridCol');

var _GridCol2 = _interopRequireDefault(_GridCol);

var _GridRow = require('../GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Col = _GridCol2.default;
exports.Row = _GridRow2.default;

},{"../GridCol":37,"../GridRow":38}],37:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	var className = (0, _noImportant.css)(classes['xsmall-' + xsmall], classes['small-' + small], classes['medium-' + medium], classes['large-' + large]);

	var componentClassName = '' + className + (props.className ? ' ' + props.className : '');
	var componentStyles = gutter ? {
		paddingLeft: gutter / 2,
		paddingRight: gutter / 2
	} : {};

	return _react2.default.createElement(
		'div',
		{ className: componentClassName, style: componentStyles },
		props.children
	);
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

var classes = _noImportant.StyleSheet.create(_extends({}, prepareWidths('xsmall', WIDTHS), prepareWidths('small', WIDTHS), prepareWidths('medium', WIDTHS), prepareWidths('large', WIDTHS)));

/* eslint-disable guard-for-in */
function prepareWidths(prefix, obj) {
	var classes = {};
	switch (prefix) {
		case 'small':
			for (var prop in obj) {
				classes[prefix + '-' + prop] = _defineProperty({}, '@media (min-width: ' + _theme2.default.breakpoint.tabletPortraitMin + ')', {
					width: obj[prop]
				});
			}
			break;
		case 'medium':
			for (var _prop in obj) {
				classes[prefix + '-' + _prop] = _defineProperty({}, '@media (min-width: ' + _theme2.default.breakpoint.tabletLandscapeMin + ')', {
					width: obj[_prop]
				});
			}
			break;
		case 'large':
			for (var _prop2 in obj) {
				classes[prefix + '-' + _prop2] = _defineProperty({}, '@media (min-width: ' + _theme2.default.breakpoint.desktopMin + ')', {
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
};

module.exports = GridCol;

},{"../../../theme":71,"aphrodite/no-important":undefined,"react":undefined}],38:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridRow = function (_Component) {
	_inherits(GridRow, _Component);

	function GridRow() {
		_classCallCheck(this, GridRow);

		return _possibleConstructorReturn(this, (GridRow.__proto__ || Object.getPrototypeOf(GridRow)).apply(this, arguments));
	}

	_createClass(GridRow, [{
		key: 'getChildContext',
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
		key: 'render',
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    className = _props.className,
			    gutter = _props.gutter,
			    _props$styles = _props.styles,
			    styles = _props$styles === undefined ? {} : _props$styles;


			var componentClassName = '' + (0, _noImportant.css)(classes.grid) + (className ? ' ' + className : '');
			var componentStyles = _extends(styles, {
				marginLeft: gutter / -2,
				marginRight: gutter / -2
			});

			return _react2.default.createElement(
				'div',
				{ className: componentClassName, style: componentStyles },
				children
			);
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

var classes = _noImportant.StyleSheet.create({
	grid: {
		display: 'flex',
		flexWrap: 'wrap'
	}
});

module.exports = GridRow;

},{"aphrodite/no-important":undefined,"react":undefined}],39:[function(require,module,exports){
'use strict';

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// NOTE: only accepts InlineGroupSection as a single child

function InlineGroup(_ref) {
	var aphroditeStyles = _ref.aphroditeStyles,
	    block = _ref.block,
	    children = _ref.children,
	    className = _ref.className,
	    Component = _ref.component,
	    contiguous = _ref.contiguous,
	    props = _objectWithoutProperties(_ref, ['aphroditeStyles', 'block', 'children', 'className', 'component', 'contiguous']);

	// prepare group className
	props.className = (0, _noImportant.css)(classes.group, !!block && classes.block, aphroditeStyles);
	if (className) {
		props.className += ' ' + className;
	}

	// convert children to an array and filter out falsey values
	var buttons = _react.Children.toArray(children).filter(function (i) {
		return i;
	});

	// normalize the count
	var count = buttons.length - 1;

	// clone children and apply classNames that aphrodite can target
	props.children = buttons.map(function (c, idx) {
		if (!c) return null;

		var isOnlyChild = !count;
		var isFirstChild = !isOnlyChild && idx === 0;
		var isLastChild = !isOnlyChild && idx === count;
		var isMiddleChild = !isOnlyChild && !isFirstChild && !isLastChild;

		var position = void 0;
		if (isOnlyChild) position = 'only';
		if (isFirstChild) position = 'first';
		if (isLastChild) position = 'last';
		if (isMiddleChild) position = 'middle';

		return (0, _react.cloneElement)(c, {
			contiguous: contiguous,
			position: position
		});
	});

	return _react2.default.createElement(Component, props);
};

InlineGroup.propTypes = {
	aphroditeStyles: _react.PropTypes.shape({
		_definition: _react.PropTypes.object,
		_name: _react.PropTypes.string
	}),
	block: _react.PropTypes.bool,
	component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
	contiguous: _react.PropTypes.bool
};
InlineGroup.defaultProps = {
	component: 'div'
};

var classes = _noImportant.StyleSheet.create({
	group: {
		display: 'inline-flex'
	},
	block: {
		display: 'flex'
	}
});

module.exports = InlineGroup;

},{"aphrodite/no-important":undefined,"react":undefined}],40:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

// NOTE: Inline Group Section accepts a single child

function InlineGroupSection(_ref) {
	var active = _ref.active,
	    aphroditeStyles = _ref.aphroditeStyles,
	    children = _ref.children,
	    className = _ref.className,
	    contiguous = _ref.contiguous,
	    grow = _ref.grow,
	    position = _ref.position,
	    props = _objectWithoutProperties(_ref, ['active', 'aphroditeStyles', 'children', 'className', 'contiguous', 'grow', 'position']);

	// evaluate position
	var separate = position === 'last' || position === 'middle';

	// A `contiguous` section must manipulate it's child directly
	// A separate (default) section just wraps the child
	return contiguous ? (0, _react.cloneElement)(children, _extends({
		aphroditeStyles: [classes.contiguous, classes['contiguous__' + position], active ? classes.active : null, grow ? classes.grow : null, aphroditeStyles]
	}, props)) : _react2.default.createElement(
		'div',
		_extends({ className: (0, _noImportant.css)(!!grow && classes.grow, !!separate && classes.separate, aphroditeStyles) }, props),
		children
	);
};

InlineGroupSection.propTypes = {
	active: _react.PropTypes.bool, // buttons only
	children: _react.PropTypes.element.isRequired,
	contiguous: _react.PropTypes.bool,
	grow: _react.PropTypes.bool,
	position: _react.PropTypes.oneOf(['first', 'last', 'middle', 'only'])
};

module.exports = InlineGroupSection;

},{"./styles":41,"aphrodite/no-important":undefined,"react":undefined}],41:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Inline Group: Section
// ==============================

// Takes only FormInput and Button as children, rendering them as a
// tidy inline array

var _css = require('../../../utils/css');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		marginLeft: _theme2.default.button.borderWidth * -1
	},
	contiguous__first: _extends({}, (0, _css.borderRightRadius)(0)),
	contiguous__last: _extends({}, (0, _css.borderLeftRadius)(0), {
		marginLeft: _theme2.default.button.borderWidth * -1
	})
};

},{"../../../theme":71,"../../../utils/css":74}],42:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

function LabelledControl(_ref) {
	var className = _ref.className,
	    inline = _ref.inline,
	    label = _ref.label,
	    title = _ref.title,
	    props = _objectWithoutProperties(_ref, ['className', 'inline', 'label', 'title']);

	var labelClassName = (0, _noImportant.css)(classes.wrapper, inline && classes.wrapper__inline, className);

	return _react2.default.createElement(
		'label',
		{ title: title, className: labelClassName },
		_react2.default.createElement('input', _extends({}, props, { className: (0, _noImportant.css)(classes.control) })),
		_react2.default.createElement(
			'span',
			{ className: (0, _noImportant.css)(classes.label) },
			label
		)
	);
};

LabelledControl.propTypes = {
	inline: _react.PropTypes.bool,
	title: _react.PropTypes.string,
	type: _react.PropTypes.oneOf(['checkbox', 'radio']).isRequired
};

module.exports = LabelledControl;

},{"./styles":43,"aphrodite/no-important":undefined,"react":undefined}],43:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	wrapper: {
		display: 'block',
		height: _theme2.default.input.height,
		lineHeight: _theme2.default.input.lineHeight
	},
	wrapper__inline: {
		display: 'inline'
	},

	// checkbox or radio
	control: {
		marginRight: '0.5em'
	}
}; // ==============================
// Alert
// ==============================

/* eslint quote-props: ["error", "as-needed"] */

},{"../../../theme":71}],44:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function LoadingButton(_ref) {
	var children = _ref.children,
	    loading = _ref.loading,
	    props = _objectWithoutProperties(_ref, ['children', 'loading']);

	// determine the correct variant for the spinner,
	// fill is the default variant on Button
	var variant = props.variant || 'fill';

	// determine the correct color for the spinner,
	// cancel and delete alias to "danger"
	var color = void 0;
	if (props.color === 'cancel' || props.color === 'delete') color = 'danger';

	// merge all the variant/color together
	var formattedColor = variant === 'fill' && props.color !== 'default' ? 'inverted' : color;

	// render the spinner if required
	var spinner = loading && _react2.default.createElement(_Spinner2.default, {
		size: 'small',
		color: formattedColor
	});

	// slide the spinner in and out of view
	var spinnerStyles = {
		width: loading ? _theme2.default.spinner.size.small * 5 + _theme2.default.spacing.small : 0
	};

	// render all that shit
	return _react2.default.createElement(
		_Button2.default,
		props,
		_react2.default.createElement(
			'span',
			{ className: (0, _noImportant.css)(classes.spinner), style: spinnerStyles },
			spinner
		),
		children
	);
};

LoadingButton.propTypes = {
	loading: _react.PropTypes.bool
};
LoadingButton.defaultProps = {
	loading: false
};

var classes = _noImportant.StyleSheet.create({
	spinner: {
		display: 'inline-block',
		overflow: 'hidden',
		textAlign: 'left',
		transition: 'width 200ms ease-out',
		verticalAlign: 'middle'
	}
});

module.exports = LoadingButton;

},{"../../../theme":71,"../Button":5,"../Spinner":61,"aphrodite/no-important":undefined,"react":undefined}],45:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ModalBody(_ref) {
	var className = _ref.className,
	    props = _objectWithoutProperties(_ref, ['className']);

	return _react2.default.createElement('div', _extends({
		className: (0, _noImportant.css)(classes.body, className)
	}, props));
};

var classes = _noImportant.StyleSheet.create({
	body: {
		paddingBottom: _theme2.default.modal.padding.body.vertical,
		paddingLeft: _theme2.default.modal.padding.body.horizontal,
		paddingRight: _theme2.default.modal.padding.body.horizontal,
		paddingTop: _theme2.default.modal.padding.body.vertical
	}
});

module.exports = ModalBody;

},{"../../../theme":71,"aphrodite/no-important":undefined,"react":undefined}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _ScrollLock = require('../ScrollLock');

var _ScrollLock2 = _interopRequireDefault(_ScrollLock);

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var ModalDialog = function (_Component) {
	_inherits(ModalDialog, _Component);

	function ModalDialog() {
		_classCallCheck(this, ModalDialog);

		var _this = _possibleConstructorReturn(this, (ModalDialog.__proto__ || Object.getPrototypeOf(ModalDialog)).call(this));

		_this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
		_this.handleKeyboardInput = _this.handleKeyboardInput.bind(_this);
		return _this;
	}

	_createClass(ModalDialog, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				onClose: this.props.onClose
			};
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!canUseDom) return;

			// add event listeners
			if (nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.addEventListener('keydown', this.handleKeyboardInput);
			}
			if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.props.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}

		// ==============================
		// Methods
		// ==============================

	}, {
		key: 'handleKeyboardInput',
		value: function handleKeyboardInput(event) {
			if (event.keyCode === 27) this.props.onClose();

			return false;
		}
	}, {
		key: 'handleBackdropClick',
		value: function handleBackdropClick(e) {
			if (e.target !== this.refs.container) return;

			this.props.onClose();
		}

		// ==============================
		// Renderers
		// ==============================

	}, {
		key: 'renderDialog',
		value: function renderDialog() {
			var _props = this.props,
			    backdropClosesModal = _props.backdropClosesModal,
			    children = _props.children,
			    isOpen = _props.isOpen,
			    width = _props.width;


			if (!isOpen) return _react2.default.createElement('span', { key: 'closed' });

			return _react2.default.createElement(
				'div',
				{
					className: (0, _noImportant.css)(classes.container),
					key: 'open',
					ref: 'container',
					onClick: !!backdropClosesModal && this.handleBackdropClick,
					onTouchEnd: !!backdropClosesModal && this.handleBackdropClick
				},
				_react2.default.createElement(
					'div',
					{ className: (0, _noImportant.css)(classes.dialog), style: { width: width }, 'data-screen-id': 'modal-dialog' },
					children
				),
				_react2.default.createElement(_ScrollLock2.default, null)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_Portal2.default,
				null,
				this.renderDialog()
			);
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

var classes = _noImportant.StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: _theme2.default.modal.background,
		boxSizing: 'border-box',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		left: 0,
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: _theme2.default.modal.zIndex
	},
	dialog: {
		backgroundColor: 'white',
		borderRadius: _theme2.default.borderRadius.default,
		paddingBottom: _theme2.default.modal.padding.dialog.vertical,
		paddingLeft: _theme2.default.modal.padding.dialog.horizontal,
		paddingRight: _theme2.default.modal.padding.dialog.horizontal,
		paddingTop: _theme2.default.modal.padding.dialog.vertical,
		position: 'relative'
	}
});

exports.default = ModalDialog;

},{"../../../theme":71,"../Portal":53,"../ScrollLock":56,"aphrodite/no-important":undefined,"react":undefined}],47:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ModalFooter(_ref) {
	var align = _ref.align,
	    className = _ref.className,
	    props = _objectWithoutProperties(_ref, ['align', 'className']);

	return _react2.default.createElement('div', _extends({}, props, { className: (0, _noImportant.css)(classes.footer, classes['align__' + align], className) }));
};

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

var classes = _noImportant.StyleSheet.create({
	footer: {
		borderTop: '2px solid ' + _theme2.default.color.gray10,
		display: 'flex',
		paddingBottom: _theme2.default.modal.padding.footer.vertical,
		paddingLeft: _theme2.default.modal.padding.footer.horizontal,
		paddingRight: _theme2.default.modal.padding.footer.horizontal,
		paddingTop: _theme2.default.modal.padding.footer.vertical
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
});

module.exports = ModalFooter;

},{"../../../theme":71,"aphrodite/no-important":undefined,"react":undefined}],48:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _GlyphButton = require('../GlyphButton');

var _GlyphButton2 = _interopRequireDefault(_GlyphButton);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ModalHeader(_ref, _ref2) {
	var onClose = _ref2.onClose;

	var children = _ref.children,
	    className = _ref.className,
	    showCloseButton = _ref.showCloseButton,
	    text = _ref.text,
	    props = _objectWithoutProperties(_ref, ['children', 'className', 'showCloseButton', 'text']);

	// Property Violation
	if (children && text) {
		console.error('Warning: ModalHeader cannot render `children` and `text`. You must provide one or the other.');
	}

	return _react2.default.createElement(
		'div',
		_extends({}, props, { className: (0, _noImportant.css)(classes.header, className) }),
		_react2.default.createElement(
			'div',
			{ className: (0, _noImportant.css)(classes.grow) },
			text ? _react2.default.createElement(
				'h4',
				{ className: (0, _noImportant.css)(classes.text) },
				text
			) : children
		),
		!!onClose && showCloseButton && _react2.default.createElement(_GlyphButton2.default, {
			aphroditeStyles: classes.close,
			color: 'cancel',
			glyph: 'x',
			onClick: onClose,
			variant: 'link'
		})
	);
};

ModalHeader.propTypes = {
	children: _react.PropTypes.node,
	onClose: _react.PropTypes.func,
	showCloseButton: _react.PropTypes.bool,
	text: _react.PropTypes.string
};
ModalHeader.contextTypes = {
	onClose: _react.PropTypes.func.isRequired
};

var classes = _noImportant.StyleSheet.create({
	header: {
		alignItems: 'center',
		borderBottom: '2px solid ' + _theme2.default.color.gray10,
		display: 'flex',
		paddingBottom: _theme2.default.modal.padding.header.vertical,
		paddingLeft: _theme2.default.modal.padding.header.horizontal,
		paddingRight: _theme2.default.modal.padding.header.horizontal,
		paddingTop: _theme2.default.modal.padding.header.vertical
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
});

module.exports = ModalHeader;

},{"../../../theme":71,"../GlyphButton":34,"aphrodite/no-important":undefined,"react":undefined}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Header = exports.Footer = exports.Dialog = exports.Body = undefined;

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Body = _body2.default;
exports.Dialog = _dialog2.default;
exports.Footer = _footer2.default;
exports.Header = _header2.default;

},{"./body":45,"./dialog":46,"./footer":47,"./header":48}],50:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
	_inherits(Pagination, _Component);

	function Pagination() {
		_classCallCheck(this, Pagination);

		return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
	}

	_createClass(Pagination, [{
		key: 'renderCount',
		value: function renderCount() {
			var count = '';
			var _props = this.props,
			    currentPage = _props.currentPage,
			    pageSize = _props.pageSize,
			    plural = _props.plural,
			    singular = _props.singular,
			    total = _props.total;

			if (!total) {
				count = 'No ' + (plural || 'records');
			} else if (total > pageSize) {
				var start = pageSize * (currentPage - 1) + 1;
				var end = Math.min(start + pageSize - 1, total);
				count = 'Showing ' + start + ' to ' + end + ' of ' + total;
			} else {
				count = 'Showing ' + total;
				if (total > 1 && plural) {
					count += ' ' + plural;
				} else if (total === 1 && singular) {
					count += ' ' + singular;
				}
			}
			return _react2.default.createElement(
				'div',
				{ className: (0, _noImportant.css)(classes.count), 'data-e2e-pagination-count': true },
				count
			);
		}
	}, {
		key: 'renderPages',
		value: function renderPages() {
			var _props2 = this.props,
			    currentPage = _props2.currentPage,
			    limit = _props2.limit,
			    onPageSelect = _props2.onPageSelect,
			    pageSize = _props2.pageSize,
			    total = _props2.total;


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
				pages.push(_react2.default.createElement(
					_page2.default,
					{ key: 'page_start', onClick: function onClick() {
							return onPageSelect(1);
						} },
					'...'
				));
			}

			var _loop = function _loop(page) {
				var selected = page === currentPage;
				/* eslint-disable no-loop-func */
				pages.push(_react2.default.createElement(
					_page2.default,
					{ key: 'page_' + page, selected: selected, onClick: function onClick() {
							return onPageSelect(page);
						} },
					page
				));
				/* eslint-enable */
			};

			for (var page = minPage; page <= maxPage; page++) {
				_loop(page);
			}
			if (maxPage < totalPages) {
				pages.push(_react2.default.createElement(
					_page2.default,
					{ key: 'page_end', onClick: function onClick() {
							return onPageSelect(totalPages);
						} },
					'...'
				));
			}
			return _react2.default.createElement(
				'div',
				{ className: (0, _noImportant.css)(classes.list) },
				pages
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var className = (0, _noImportant.css)(classes.container, this.props.className);
			return _react2.default.createElement(
				'div',
				{ className: className, style: this.props.style },
				this.renderCount(),
				this.renderPages()
			);
		}
	}]);

	return Pagination;
}(_react.Component);

;

var classes = _noImportant.StyleSheet.create({
	container: {
		display: 'block',
		lineHeight: _theme2.default.component.lineHeight,
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
});

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

},{"../../../theme":71,"./page":51,"aphrodite/no-important":undefined,"react":undefined}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _noImportant = require('aphrodite/no-important');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Page(_ref) {
	var disabled = _ref.disabled,
	    selected = _ref.selected,
	    props = _objectWithoutProperties(_ref, ['disabled', 'selected']);

	props.className = (0, _noImportant.css)(classes.page, !!disabled && classes.disabled, !!selected && classes.selected);
	return _react2.default.createElement('button', props);
};

Page.propTypes = {
	disabled: _react.PropTypes.bool,
	onClick: _react.PropTypes.func.isRequired,
	selected: _react.PropTypes.bool
};

/* eslint quote-props: ["error", "as-needed"] */

var selectedStyle = {
	backgroundColor: _theme2.default.pagination.selected.background,
	borderColor: _theme2.default.pagination.selected.border,
	color: _theme2.default.pagination.selected.color,
	cursor: 'default',
	zIndex: 2
};
var pseudoStyle = {
	backgroundColor: _theme2.default.pagination.hover.background,
	borderColor: _theme2.default.pagination.hover.border,
	color: _theme2.default.pagination.hover.color,
	outline: 'none'
};

var classes = _noImportant.StyleSheet.create({
	page: {
		appearance: 'none',
		background: 'none',
		border: '1px solid transparent',
		borderRadius: _theme2.default.borderRadius.default,
		color: _theme2.default.pagination.color,
		cursor: 'pointer',
		display: 'inline-block',
		float: 'left', // Collapse white-space
		marginRight: '0.25em',
		padding: '0 .7em',
		position: 'relative',
		textDecoration: 'none',

		// handle hover and focus
		':hover': pseudoStyle,
		':focus': pseudoStyle
	},

	// selected page
	selected: _extends({}, selectedStyle, {

		':hover': selectedStyle,
		':focus': selectedStyle
	}),

	// disabled page

	disabled: {
		backgroundColor: _theme2.default.pagination.disabled.background,
		borderColor: _theme2.default.pagination.disabled.background,
		color: _theme2.default.pagination.disabled.color,
		cursor: 'default'
	}
});

exports.default = Page;

},{"../../../theme":71,"aphrodite/no-important":undefined,"react":undefined}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9

var PassContext = function (_Component) {
	_inherits(PassContext, _Component);

	function PassContext() {
		_classCallCheck(this, PassContext);

		return _possibleConstructorReturn(this, (PassContext.__proto__ || Object.getPrototypeOf(PassContext)).apply(this, arguments));
	}

	_createClass(PassContext, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return this.props.context;
		}
	}, {
		key: 'render',
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

exports.default = PassContext;

},{"react":undefined}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactDom = require('react-dom');

var _PassContext = require('../PassContext');

var _PassContext2 = _interopRequireDefault(_PassContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_Component) {
	_inherits(Portal, _Component);

	function Portal() {
		_classCallCheck(this, Portal);

		var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this));

		_this.portalElement = null;
		return _this;
	}

	_createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var p = document.createElement('div');
			document.body.appendChild(p);
			this.portalElement = p;
			this.componentDidUpdate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// Animate fade on mount/unmount
			var duration = 200;
			var styles = '\n\t\t\t\t.fade-enter { opacity: 0.01; }\n\t\t\t\t.fade-enter.fade-enter-active { opacity: 1; transition: opacity ' + duration + 'ms; }\n\t\t\t\t.fade-leave { opacity: 1; }\n\t\t\t\t.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity ' + duration + 'ms; }\n\t\t';
			(0, _reactDom.render)(_react2.default.createElement(
				_PassContext2.default,
				{ context: this.context },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'style',
						null,
						styles
					),
					_react2.default.createElement(_reactAddonsCssTransitionGroup2.default, _extends({
						component: 'div',
						transitionName: 'fade',
						transitionEnterTimeout: duration,
						transitionLeaveTimeout: duration
					}, this.props))
				)
			), this.portalElement);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.body.removeChild(this.portalElement);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return Portal;
}(_react.Component);

exports.default = Portal;


Portal.contextTypes = {
	onClose: _react.PropTypes.func
};

},{"../PassContext":52,"react":undefined,"react-addons-css-transition-group":undefined,"react-dom":undefined}],54:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Using window.innerWidth and state instead of CSS media breakpoints
// because we want to render null rather than an empty span. Allowing for
// CSS pseudo classes like :only-child to behave as expected.

// Return true if window + document
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var ResponsiveText = function (_Component) {
	_inherits(ResponsiveText, _Component);

	function ResponsiveText() {
		_classCallCheck(this, ResponsiveText);

		var _this = _possibleConstructorReturn(this, (ResponsiveText.__proto__ || Object.getPrototypeOf(ResponsiveText)).call(this));

		_this.handleResize = _this.handleResize.bind(_this);
		_this.state = {
			windowWidth: canUseDOM ? window.innerWidth : 0
		};
		return _this;
	}

	_createClass(ResponsiveText, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (canUseDOM) {
				window.addEventListener('resize', this.handleResize);
				this.handleResize();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (canUseDOM) {
				window.removeEventListener('resize', this.handleResize);
			}
		}
	}, {
		key: 'handleResize',
		value: function handleResize() {
			this.setState({
				windowWidth: canUseDOM ? window.innerWidth : 0
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    Component = _props.component,
			    hiddenLG = _props.hiddenLG,
			    hiddenMD = _props.hiddenMD,
			    hiddenSM = _props.hiddenSM,
			    hiddenXS = _props.hiddenXS,
			    visibleLG = _props.visibleLG,
			    visibleMD = _props.visibleMD,
			    visibleSM = _props.visibleSM,
			    visibleXS = _props.visibleXS,
			    props = _objectWithoutProperties(_props, ['component', 'hiddenLG', 'hiddenMD', 'hiddenSM', 'hiddenXS', 'visibleLG', 'visibleMD', 'visibleSM', 'visibleXS']);

			var windowWidth = this.state.windowWidth;


			var text = void 0;

			// set text value from breakpoint; attempt XS --> LG
			if (windowWidth < _theme2.default.breakpointNumeric.mobile) {
				text = visibleXS || hiddenSM || hiddenMD || hiddenLG;
			} else if (windowWidth < _theme2.default.breakpointNumeric.tabletPortrait) {
				text = hiddenXS || visibleSM || hiddenMD || hiddenLG;
			} else if (windowWidth < _theme2.default.breakpointNumeric.tabletLandscape) {
				text = hiddenXS || hiddenSM || visibleMD || hiddenLG;
			} else {
				text = hiddenXS || hiddenSM || hiddenMD || visibleLG;
			}

			return text ? _react2.default.createElement(
				Component,
				props,
				text
			) : null;
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

},{"../../../theme":71,"react":undefined}],55:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ScreenReaderOnly(_ref) {
	var className = _ref.className,
	    props = _objectWithoutProperties(_ref, ['className']);

	props.className = (0, _noImportant.css)(classes.srOnly, className);

	return _react2.default.createElement('span', props);
};

var classes = _noImportant.StyleSheet.create({
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
});

module.exports = ScreenReaderOnly;

},{"aphrodite/no-important":undefined,"react":undefined}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollLock = function (_Component) {
	_inherits(ScrollLock, _Component);

	function ScrollLock() {
		_classCallCheck(this, ScrollLock);

		var _this = _possibleConstructorReturn(this, (ScrollLock.__proto__ || Object.getPrototypeOf(ScrollLock)).call(this));

		_this.lockCount = 0;
		return _this;
	}

	_createClass(ScrollLock, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (typeof window === 'undefined') return;

			this.lockCount++;
			if (this.lockCount > 1) return;

			//	FIXME iOS ignores overflow on body
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
		key: 'componentWillUnmount',
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
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return ScrollLock;
}(_react.Component);

exports.default = ScrollLock;

},{"react":undefined}],57:[function(require,module,exports){
'use strict';

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	danger: _theme2.default.color.danger,
	default: _theme2.default.color.gray80,
	error: _theme2.default.color.danger,
	info: _theme2.default.color.info,
	primary: _theme2.default.color.primary,
	success: _theme2.default.color.success,
	warning: _theme2.default.color.warning
};

},{"../../../theme":71}],58:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classes = _noImportant.StyleSheet.create(_styles2.default);

function SegmentedControl(_ref) {
	var className = _ref.className,
	    color = _ref.color,
	    cropText = _ref.cropText,
	    equalWidthSegments = _ref.equalWidthSegments,
	    inline = _ref.inline,
	    onChange = _ref.onChange,
	    options = _ref.options,
	    value = _ref.value,
	    props = _objectWithoutProperties(_ref, ['className', 'color', 'cropText', 'equalWidthSegments', 'inline', 'onChange', 'options', 'value']);

	props.className = (0, _noImportant.css)(classes.control, inline ? classes.control__inline : null, className);

	return _react2.default.createElement(
		'div',
		props,
		options.map(function (opt) {
			var buttonClassName = (0, _noImportant.css)(classes.button, opt.disabled ? classes.button__disabled : null, opt.value === value ? classes['button__' + color] : null, cropText ? classes.button__cropText : null, equalWidthSegments ? classes.button__equalWidth : null);

			return _react2.default.createElement(
				'button',
				{
					className: buttonClassName,
					key: opt.value,
					onClick: !opt.disabled && function () {
						return onChange(opt.value);
					},
					type: 'button',
					title: cropText ? opt.label : null,
					tabIndex: opt.disabled ? '-1' : ''
				},
				opt.label
			);
		})
	);
};

var valuePropShape = [_react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.string];

SegmentedControl.propTypes = {
	color: _react.PropTypes.oneOf(Object.keys(_colors2.default)),
	cropText: _react.PropTypes.bool, // when `inline && equalWidthSegments` crops to the next largest option length
	equalWidthSegments: _react.PropTypes.bool, // only relevant when `inline === false`
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

},{"./colors":57,"./styles":59,"aphrodite/no-important":undefined,"react":undefined}],59:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Segmented Control
// ==============================

/* eslint quote-props: ["error", "as-needed"] */

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare variants
var colorVariants = {};
Object.keys(_colors2.default).forEach(function (color) {
	var pseudoStyles = {
		backgroundColor: _colors2.default[color],
		color: 'white'
	};
	colorVariants['button__' + color] = {
		backgroundColor: _colors2.default[color],
		color: 'white',

		':hover': pseudoStyles,
		':focus': pseudoStyles,
		':active': pseudoStyles
	};
});

module.exports = _extends({
	control: {
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: _theme2.default.input.border.color.default,
		borderRadius: '0.4em',
		display: 'flex',
		fontSize: _theme2.default.font.size.small,
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

		':hover': { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
		':focus': { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
		':active': { backgroundColor: 'rgba(0, 0, 0, 0.1)' }
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

},{"../../../theme":71,"./colors":57}],60:[function(require,module,exports){
'use strict';

module.exports = ['danger', 'default', 'inverted', 'primary', 'success', 'warning'];

},{}],61:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ScreenReaderOnly = require('../ScreenReaderOnly');

var _ScreenReaderOnly2 = _interopRequireDefault(_ScreenReaderOnly);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Spinner(_ref) {
	var className = _ref.className,
	    size = _ref.size,
	    color = _ref.color,
	    props = _objectWithoutProperties(_ref, ['className', 'size', 'color']);

	props.className = (0, _noImportant.css)(classes.base, classes[size], className);

	return _react2.default.createElement(
		'div',
		props,
		_react2.default.createElement('span', { className: '' + (0, _noImportant.css)(classes.dot, classes['size__' + size], classes['color__' + color], classes.dot__first) }),
		_react2.default.createElement('span', { className: '' + (0, _noImportant.css)(classes.dot, classes['size__' + size], classes['color__' + color], classes.dot__second) }),
		_react2.default.createElement('span', { className: '' + (0, _noImportant.css)(classes.dot, classes['size__' + size], classes['color__' + color], classes.dot__third) }),
		_react2.default.createElement(
			_ScreenReaderOnly2.default,
			null,
			'Loading...'
		)
	);
};

Spinner.propTypes = {
	color: _react.PropTypes.oneOf(_colors2.default),
	size: _react.PropTypes.oneOf(_sizes2.default)
};
Spinner.defaultProps = {
	size: 'medium',
	color: 'default'
};

var classes = _noImportant.StyleSheet.create(_styles2.default);

module.exports = Spinner;

},{"../ScreenReaderOnly":55,"./colors":60,"./sizes":62,"./styles":63,"aphrodite/no-important":undefined,"react":undefined}],62:[function(require,module,exports){
'use strict';

module.exports = ['small', 'medium', 'large'];

},{}],63:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ==============================
// Spinner
// ==============================

var _theme = require('../../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare variants
var colorVariants = {};
_colors2.default.forEach(function (color) {
	colorVariants['color__' + color] = {
		backgroundColor: _theme2.default.spinner.color[color]
	};
});

// Prepare sizes
var sizeVariants = {};
_sizes2.default.forEach(function (size) {
	sizeVariants['size__' + size] = {
		fontSize: _theme2.default.spinner.size[size]
	};
});

// Declare animation keyframes
var pulse = {
	'0%, 80%, 100%': { opacity: 0 },
	'40%': { opacity: 1 }
};

module.exports = _extends({
	base: {
		display: 'inline-block',
		lineHeight: 1,
		textAlign: 'center',
		verticalAlign: 'middle',
		width: '5em'
	},
	small: { fontSize: 4 },
	medium: { fontSize: 8 },
	large: { fontSize: 16 },

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
		animationName: pulse,
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

},{"../../../theme":71,"./colors":60,"./sizes":62}],64:[function(require,module,exports){
'use strict';

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
'use strict';

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xhr = require('xhr');

var _xhr2 = _interopRequireDefault(_xhr);

var _Alert = require('./components/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _Brand = require('./components/Brand');

var _Brand2 = _interopRequireDefault(_Brand);

var _UserInfo = require('./components/UserInfo');

var _UserInfo2 = _interopRequireDefault(_UserInfo);

var _LoginForm = require('./components/LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The actual Sign In view, with the login form
 */

var SigninView = _react2.default.createClass({
	displayName: 'SigninView',
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
	},
	handleInputChange: function handleInputChange(e) {
		// Set the new state when the input changes
		var newState = {};
		newState[e.target.name] = e.target.value;
		this.setState(newState);
	},
	handleSubmit: function handleSubmit(e) {
		var _this = this;

		e.preventDefault();
		// If either password or mail are missing, show an error
		if (!this.state.email || !this.state.password) {
			return this.displayError('Please enter an email address and password to sign in.');
		}

		(0, _xhr2.default)({
			url: Keystone.adminPath + '/api/session/signin',
			method: 'post',
			json: {
				email: this.state.email,
				password: this.state.password
			},
			headers: (0, _objectAssign2.default)({}, Keystone.csrf.header)
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
		// TODO isMounted was deprecated, find out if we need this guard
		if (!this.isMounted()) return;
		if (this.refs.email) {
			this.refs.email.select();
		}
		this.setState({
			isAnimating: false
		});
	},
	render: function render() {
		var boxClassname = (0, _classnames2.default)('auth-box', {
			'auth-box--has-errors': this.state.isAnimating
		});
		return _react2.default.createElement(
			'div',
			{ className: 'auth-wrapper' },
			_react2.default.createElement(_Alert2.default, {
				isInvalid: this.state.isInvalid,
				signedOut: this.state.signedOut,
				invalidMessage: this.state.invalidMessage
			}),
			_react2.default.createElement(
				'div',
				{ className: boxClassname },
				_react2.default.createElement(
					'h1',
					{ className: 'u-hidden-visually' },
					this.props.brand ? this.props.brand : 'Keystone',
					' Sign In '
				),
				_react2.default.createElement(
					'div',
					{ className: 'auth-box__inner' },
					_react2.default.createElement(_Brand2.default, {
						logo: this.props.logo,
						brand: this.props.brand
					}),
					this.props.user ? _react2.default.createElement(_UserInfo2.default, {
						adminPath: this.props.from ? this.props.from : Keystone.adminPath,
						signoutPath: Keystone.adminPath + '/signout',
						userCanAccessKeystone: this.props.userCanAccessKeystone,
						userName: this.props.user.name
					}) : _react2.default.createElement(_LoginForm2.default, {
						email: this.state.email,
						handleInputChange: this.handleInputChange,
						handleSubmit: this.handleSubmit,
						isAnimating: this.state.isAnimating,
						password: this.state.password
					})
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'auth-footer' },
				_react2.default.createElement(
					'span',
					null,
					'Powered by '
				),
				_react2.default.createElement(
					'a',
					{ href: 'http://keystonejs.com', target: '_blank', title: 'The Node.js CMS and web application platform (new window)' },
					'KeystoneJS'
				)
			)
		);
	}
});

module.exports = SigninView;

},{"./components/Alert":66,"./components/Brand":67,"./components/LoginForm":68,"./components/UserInfo":69,"classnames":undefined,"object-assign":75,"react":undefined,"xhr":undefined}],66:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../../App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders an Alert. Pass either an isInvalid and invalidMessage prop, or set
 * the signedOut prop to true to show the standard signed out message
 */

var AlertView = function AlertView(props) {
	if (props.isInvalid) {
		return _react2.default.createElement(
			_elemental.Alert,
			{ key: 'error', color: 'danger', style: { textAlign: 'center' } },
			props.invalidMessage
		);
	} else if (props.signedOut) {
		return _react2.default.createElement(
			_elemental.Alert,
			{ key: 'signed-out', color: 'info', style: { textAlign: 'center' } },
			'You have been signed out.'
		);
	} else {
		// Can't return "null" from stateless components
		return _react2.default.createElement('span', null);
	}
};

AlertView.propTypes = {
	invalidMessage: _react2.default.PropTypes.string,
	isInvalid: _react2.default.PropTypes.bool,
	signedOut: _react2.default.PropTypes.bool
};

module.exports = AlertView;

},{"../../App/elemental":64,"react":undefined}],67:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Brand = function Brand(props) {
	// Default to the KeystoneJS logo
	var logo = { src: Keystone.adminPath + '/images/logo.png', width: 205, height: 68 };
	if (props.logo) {
		// If the logo is set to a string, it's a direct link
		logo = typeof props.logo === 'string' ? { src: props.logo } : props.logo;
		// Optionally one can specify the logo as an array, also stating the
		// wanted width and height of the logo
		// TODO: Deprecate this
		if (Array.isArray(logo)) {
			logo = { src: logo[0], width: logo[1], height: logo[2] };
		}
	}
	return _react2.default.createElement(
		'div',
		{ className: 'auth-box__col' },
		_react2.default.createElement(
			'div',
			{ className: 'auth-box__brand' },
			_react2.default.createElement(
				'a',
				{ href: '/', className: 'auth-box__brand__logo' },
				_react2.default.createElement('img', {
					src: logo.src,
					width: logo.width ? logo.width : null,
					height: logo.height ? logo.height : null,
					alt: props.brand
				})
			)
		)
	);
}; /**
    * Renders a logo, defaulting to the Keystone logo if no brand is specified in
    * the configuration
    */

module.exports = Brand;

},{"react":undefined}],68:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../../App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The login form of the signin screen
 */

var LoginForm = function LoginForm(_ref) {
	var email = _ref.email,
	    handleInputChange = _ref.handleInputChange,
	    handleSubmit = _ref.handleSubmit,
	    isAnimating = _ref.isAnimating,
	    password = _ref.password;

	return _react2.default.createElement(
		'div',
		{ className: 'auth-box__col' },
		_react2.default.createElement(
			_elemental.Form,
			{ onSubmit: handleSubmit, noValidate: true },
			_react2.default.createElement(
				_elemental.FormField,
				{ label: 'Email', htmlFor: 'email' },
				_react2.default.createElement(_elemental.FormInput, {
					autoFocus: true,
					type: 'email',
					name: 'email',
					onChange: handleInputChange,
					value: email
				})
			),
			_react2.default.createElement(
				_elemental.FormField,
				{ label: 'Password', htmlFor: 'password' },
				_react2.default.createElement(_elemental.FormInput, {
					type: 'password',
					name: 'password',
					onChange: handleInputChange,
					value: password
				})
			),
			_react2.default.createElement(
				_elemental.Button,
				{ disabled: isAnimating, color: 'primary', type: 'submit' },
				'Sign In'
			)
		)
	);
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
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elemental = require('../../App/elemental');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO Figure out if we should change "Keystone" to "Admin area"

var UserInfo = function UserInfo(_ref) {
	var adminPath = _ref.adminPath,
	    signoutPath = _ref.signoutPath,
	    userCanAccessKeystone = _ref.userCanAccessKeystone,
	    userName = _ref.userName;

	var adminButton = userCanAccessKeystone ? _react2.default.createElement(
		_elemental.Button,
		{ href: adminPath, color: 'primary' },
		'Open Keystone'
	) : null;

	return _react2.default.createElement(
		'div',
		{ className: 'auth-box__col' },
		_react2.default.createElement(
			'p',
			null,
			'Hi ',
			userName,
			','
		),
		_react2.default.createElement(
			'p',
			null,
			'You\'re already signed in.'
		),
		adminButton,
		_react2.default.createElement(
			_elemental.Button,
			{ href: signoutPath, variant: 'link', color: 'cancel' },
			'Sign Out'
		)
	);
};

UserInfo.propTypes = {
	adminPath: _react.PropTypes.string.isRequired,
	signoutPath: _react.PropTypes.string.isRequired,
	userCanAccessKeystone: _react.PropTypes.bool,
	userName: _react.PropTypes.string.isRequired
};

module.exports = UserInfo;

},{"../../App/elemental":64,"react":undefined}],70:[function(require,module,exports){
'use strict';

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Signin = require('./Signin');

var _Signin2 = _interopRequireDefault(_Signin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The signin page, it renders a page with a username and password input form.
 *
 * This is decoupled from the main app (in the "App/" folder) because we inject
 * lots of data into the other screens (like the lists that exist) that we don't
 * want to have injected here, so this is a completely separate route and template.
 */
var params = _qs2.default.parse(window.location.search.replace(/^\?/, ''));
var from = typeof params.from === 'string' && params.from.charAt(0) === '/' ? params.from : undefined;

_reactDom2.default.render(_react2.default.createElement(_Signin2.default, {
	brand: Keystone.brand,
	from: from,
	logo: Keystone.logo,
	user: Keystone.user,
	userCanAccessKeystone: Keystone.userCanAccessKeystone
}), document.getElementById('signin-view'));

},{"./Signin":65,"qs":undefined,"react":undefined,"react-dom":undefined}],71:[function(require,module,exports){
'use strict';

/* eslint-disable key-spacing */
var theme = {};

var _require = require('./utils/color'),
    blend = _require.blend,
    darken = _require.darken,
    fade = _require.fade,
    lighten = _require.lighten;

// ==============================
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
};

// container

theme.container = {
	gutter: 20,
	size: {
		small: 750,
		medium: 970,
		large: 1170
	}
};

// color

theme.color = {
	body: '#fafafa',
	link: '#1385e5',
	linkHover: lighten('#1385e5', 10),
	text: '#1A1A1A',

	// contextual
	success: '#34c240',
	create: '#34c240', // alias for success
	primary: '#1385e5',
	info: '#1385e5', // alias for primary
	warning: '#FA3',
	danger: '#d64242',
	error: '#d64242', // alias for danger

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
};

// border radii

theme.borderRadius = {
	small: '0.125rem',
	default: '0.3rem',
	large: '0.5rem'
};

// spacing

theme.spacing = {
	xsmall: 5,
	small: 10,
	default: 20,
	large: 30,
	xlarge: 40,
	xxlarge: 60
};

// ==============================
// ELEMENTAL SPECIFIC
// ==============================

// button

theme.button = {
	borderRadius: theme.borderRadius.default,
	borderWidth: 1,
	font: {
		weight: 500
	},
	paddingHorizontal: '1em',
	default: {
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
};

// blank state

theme.blankstate = {
	background: darken(theme.color.body, 4),
	borderRadius: theme.borderRadius.default,
	color: theme.color.gray40,
	paddingHorizontal: '2em',
	paddingVertical: '4em'
};

// font

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
		default: '1rem',
		medium: '1.2rem',
		large: '1.6rem',
		xlarge: '2.4rem',
		xxlarge: '3.2rem'
	}
};

// form

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
};

// component

theme.component = {
	lineHeight: '2.3em',
	height: '2.4em',
	padding: '1em'
};

// input

theme.input = {
	background: {
		default: 'white',
		disabled: '#fafafa',
		noedit: darken(theme.color.body, 2)
	},
	placeholderColor: '#aaa',
	lineHeight: theme.component.lineHeight,
	height: theme.component.height,
	border: {
		color: {
			default: '#ccc',
			focus: theme.color.info,
			hover: '#bbb',
			noedit: darken(theme.color.body, 8)
		},
		radius: theme.borderRadius.default,
		width: 1
	},
	boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
	boxShadowFocus: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px ' + fade(theme.color.info, 10),
	paddingHorizontal: '.75em'
};

// select

theme.select = {
	boxShadow: '0 1px 1px rgba(0, 0, 0, 0.075)'
};

// alert

theme.alert = {
	padding: '0.75em  1em',
	margin: '0 0 1em',
	borderWidth: 1,
	borderRadius: theme.borderRadius.default,

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
};

// glyph

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
};

// modal

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
};

// pagination

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
};

// spinner

theme.spinner = {
	color: {
		danger: theme.color.danger,
		default: theme.color.gray40,
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

},{"./utils/color":72}],72:[function(require,module,exports){
'use strict';

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
		throw new Error('Invalid color value provided: "' + color + '"');
	}

	return hex;
};

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
	var hex = validateHex(color);

	// 1.
	var r = parseInt(hex.substring(0, 2), 16);
	var g = parseInt(hex.substring(2, 4), 16);
	var b = parseInt(hex.substring(4, 6), 16);

	// 2.
	var result = 'rgba(' + r + ',' + g + ',' + b + ',' + decimalFraction + ')';

	return result;
};

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
	var hex = validateHex(color);

	// 1.
	var f = parseInt(hex, 16);
	var t = decimalFraction < 0 ? 0 : 255;
	var p = decimalFraction < 0 ? decimalFraction * -1 : decimalFraction;

	var R = f >> 16;
	var G = f >> 8 & 0x00FF;
	var B = f & 0x0000FF;

	// 2.
	return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
};

// shade helpers
var lighten = shade;
function darken(color, percent) {
	return shade(color, percent * -1);
};

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
	var hex2 = validateHex(color2);

	// 1.
	var f = parseInt(hex1, 16);
	var t = parseInt(hex2, 16);

	var R1 = f >> 16;
	var G1 = f >> 8 & 0x00FF;
	var B1 = f & 0x0000FF;

	var R2 = t >> 16;
	var G2 = t >> 8 & 0x00FF;
	var B2 = t & 0x0000FF;

	// 2.
	return '#' + (0x1000000 + (Math.round((R2 - R1) * decimalFraction) + R1) * 0x10000 + (Math.round((G2 - G1) * decimalFraction) + G1) * 0x100 + (Math.round((B2 - B1) * decimalFraction) + B1)).toString(16).slice(1);
}

module.exports = {
	blend: blend,
	darken: darken,
	fade: fade,
	lighten: lighten
};

},{}],73:[function(require,module,exports){
"use strict";

// ======================
// Concatenate Classnames
// ======================
//
// Support className as an array:
// force classname prop into an array (possibly of arrays) then flatten

/*
	// To use spread the new array into aphrodite's `css` function

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

},{}],74:[function(require,module,exports){
'use strict';

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
		background: 'linear-gradient(' + direction + ', ' + top + ' 0%, ' + bottom + ' 100%) ' + base
	};
}

// Vertical Gradient
function gradientVertical(top, bottom, base) {
	return linearGradient('to bottom', top, bottom, base);
}

// Horizontal Gradient
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
}

// right
function borderRightRadius(radius) {
	return {
		borderBottomRightRadius: radius,
		borderTopRightRadius: radius
	};
}

// bottom
function borderBottomRadius(radius) {
	return {
		borderBottomLeftRadius: radius,
		borderBottomRightRadius: radius
	};
}

// left
function borderLeftRadius(radius) {
	return {
		borderBottomLeftRadius: radius,
		borderTopLeftRadius: radius
	};
}

// Return

module.exports = {
	borderTopRadius: borderTopRadius,
	borderRightRadius: borderRightRadius,
	borderBottomRadius: borderBottomRadius,
	borderLeftRadius: borderLeftRadius,

	gradientHorizontal: gradientHorizontal,
	gradientVertical: gradientVertical
};

},{}],75:[function(require,module,exports){
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

},{}]},{},[70])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJBcHAvZWxlbWVudGFsL0FsZXJ0L2NvbG9ycy5qcyIsIkFwcC9lbGVtZW50YWwvQWxlcnQvaW5kZXguanMiLCJBcHAvZWxlbWVudGFsL0FsZXJ0L3N0eWxlcy5qcyIsIkFwcC9lbGVtZW50YWwvQmxhbmtTdGF0ZS9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvQnV0dG9uL2luZGV4LmpzIiwiQXBwL2VsZW1lbnRhbC9CdXR0b24vc3R5bGVzLmpzIiwiQXBwL2VsZW1lbnRhbC9DZW50ZXIvaW5kZXguanMiLCJBcHAvZWxlbWVudGFsL0NlbnRlci9zdHlsZXMuanMiLCJBcHAvZWxlbWVudGFsL0NoaXAvY29sb3JzLmpzIiwiQXBwL2VsZW1lbnRhbC9DaGlwL2luZGV4LmpzIiwiQXBwL2VsZW1lbnRhbC9DaGlwL3N0eWxlcy5qcyIsIkFwcC9lbGVtZW50YWwvQ29udGFpbmVyL2luZGV4LmpzIiwiQXBwL2VsZW1lbnRhbC9Db250YWluZXIvc2l6ZXMuanMiLCJBcHAvZWxlbWVudGFsL0NvbnRhaW5lci9zdHlsZXMuanMiLCJBcHAvZWxlbWVudGFsL0Ryb3Bkb3duQnV0dG9uL2luZGV4LmpzIiwiQXBwL2VsZW1lbnRhbC9Gb3JtL2luZGV4LmpzIiwiQXBwL2VsZW1lbnRhbC9Gb3JtL3N0eWxlcy5qcyIsIkFwcC9lbGVtZW50YWwvRm9ybUZpZWxkL2luZGV4LmpzIiwiQXBwL2VsZW1lbnRhbC9Gb3JtRmllbGQvc3R5bGVzLmpzIiwiQXBwL2VsZW1lbnRhbC9Gb3JtSW5wdXQvaW5kZXguanMiLCJBcHAvZWxlbWVudGFsL0Zvcm1JbnB1dC9ub2VkaXQuanMiLCJBcHAvZWxlbWVudGFsL0Zvcm1JbnB1dC9zdHlsZXMuanMiLCJBcHAvZWxlbWVudGFsL0Zvcm1MYWJlbC9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvRm9ybUxhYmVsL3N0eWxlcy5qcyIsIkFwcC9lbGVtZW50YWwvRm9ybU5vdGUvaW5kZXguanMiLCJBcHAvZWxlbWVudGFsL0Zvcm1Ob3RlL3N0eWxlcy5qcyIsIkFwcC9lbGVtZW50YWwvRm9ybVNlbGVjdC9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvRm9ybVNlbGVjdC9zdHlsZXMuanMiLCJBcHAvZWxlbWVudGFsL0dseXBoL2NvbG9ycy5qcyIsIkFwcC9lbGVtZW50YWwvR2x5cGgvaW5kZXguanMiLCJBcHAvZWxlbWVudGFsL0dseXBoL29jdGljb25zLmpzIiwiQXBwL2VsZW1lbnRhbC9HbHlwaC9zaXplcy5qcyIsIkFwcC9lbGVtZW50YWwvR2x5cGgvc3R5bGVzLmpzIiwiQXBwL2VsZW1lbnRhbC9HbHlwaEJ1dHRvbi9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvR2x5cGhGaWVsZC9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvR3JpZC9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvR3JpZENvbC9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvR3JpZFJvdy9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvSW5saW5lR3JvdXAvaW5kZXguanMiLCJBcHAvZWxlbWVudGFsL0lubGluZUdyb3VwU2VjdGlvbi9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvSW5saW5lR3JvdXBTZWN0aW9uL3N0eWxlcy5qcyIsIkFwcC9lbGVtZW50YWwvTGFiZWxsZWRDb250cm9sL2luZGV4LmpzIiwiQXBwL2VsZW1lbnRhbC9MYWJlbGxlZENvbnRyb2wvc3R5bGVzLmpzIiwiQXBwL2VsZW1lbnRhbC9Mb2FkaW5nQnV0dG9uL2luZGV4LmpzIiwiQXBwL2VsZW1lbnRhbC9Nb2RhbC9ib2R5LmpzIiwiQXBwL2VsZW1lbnRhbC9Nb2RhbC9kaWFsb2cuanMiLCJBcHAvZWxlbWVudGFsL01vZGFsL2Zvb3Rlci5qcyIsIkFwcC9lbGVtZW50YWwvTW9kYWwvaGVhZGVyLmpzIiwiQXBwL2VsZW1lbnRhbC9Nb2RhbC9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvUGFnaW5hdGlvbi9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvUGFnaW5hdGlvbi9wYWdlLmpzIiwiQXBwL2VsZW1lbnRhbC9QYXNzQ29udGV4dC9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvUG9ydGFsL2luZGV4LmpzIiwiQXBwL2VsZW1lbnRhbC9SZXNwb25zaXZlVGV4dC9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvU2NyZWVuUmVhZGVyT25seS9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvU2Nyb2xsTG9jay9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvU2VnbWVudGVkQ29udHJvbC9jb2xvcnMuanMiLCJBcHAvZWxlbWVudGFsL1NlZ21lbnRlZENvbnRyb2wvaW5kZXguanMiLCJBcHAvZWxlbWVudGFsL1NlZ21lbnRlZENvbnRyb2wvc3R5bGVzLmpzIiwiQXBwL2VsZW1lbnRhbC9TcGlubmVyL2NvbG9ycy5qcyIsIkFwcC9lbGVtZW50YWwvU3Bpbm5lci9pbmRleC5qcyIsIkFwcC9lbGVtZW50YWwvU3Bpbm5lci9zaXplcy5qcyIsIkFwcC9lbGVtZW50YWwvU3Bpbm5lci9zdHlsZXMuanMiLCJBcHAvZWxlbWVudGFsL2luZGV4LmpzIiwiU2lnbmluL1NpZ25pbi5qcyIsIlNpZ25pbi9jb21wb25lbnRzL0FsZXJ0LmpzIiwiU2lnbmluL2NvbXBvbmVudHMvQnJhbmQuanMiLCJTaWduaW4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJTaWduaW4vY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIlNpZ25pbi9pbmRleC5qcyIsInRoZW1lLmpzIiwidXRpbHMvY29sb3IuanMiLCJ1dGlscy9jb25jYXRDbGFzc25hbWVzLmpzIiwidXRpbHMvY3NzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxPQUFPLE9BQVAsR0FBaUI7QUFDaEIsU0FBUSxnQkFBTSxLQUFOLENBQVksS0FBWixDQUFrQixNQURWO0FBRWhCLFFBQU8sZ0JBQU0sS0FB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QUFPLE9BQVAsR0FBaUI7QUFDaEIsaUNBRGdCO0FBRWhCLHFDQUZnQjtBQUdoQix1Q0FIZ0I7QUFJaEIsbUNBSmdCOztBQU1oQix1Q0FOZ0I7QUFPaEI7QUFQZ0IsQ0FBakI7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGFuZ2VyOiB0aGVtZS5hbGVydC5jb2xvci5kYW5nZXIsXG5cdGVycm9yOiB0aGVtZS5hbGVydC5jb2xvci5kYW5nZXIsXG5cdGluZm86IHRoZW1lLmFsZXJ0LmNvbG9yLmluZm8sXG5cdHN1Y2Nlc3M6IHRoZW1lLmFsZXJ0LmNvbG9yLnN1Y2Nlc3MsXG5cdHdhcm5pbmc6IHRoZW1lLmFsZXJ0LmNvbG9yLndhcm5pbmcsXG59O1xuIiwiaW1wb3J0IHsgY3NzLCBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgUmVhY3QsIHsgY2xvbmVFbGVtZW50LCBDaGlsZHJlbiwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHN0eWxlcyk7XG5cbi8vIGNsb25lIGNoaWxkcmVuIGlmIGEgY2xhc3MgZXhpc3RzIGZvciB0aGUgdGFnbmFtZVxuY29uc3QgY2xvbmVXaXRoQ2xhc3NuYW1lcyA9IChjKSA9PiB7XG5cdGNvbnN0IHR5cGUgPSBjLnR5cGUgJiYgYy50eXBlLmRpc3BsYXlOYW1lXG5cdFx0PyBjLnR5cGUuZGlzcGxheU5hbWVcblx0XHQ6IGMudHlwZSB8fCBudWxsO1xuXG5cdGlmICghdHlwZSB8fCAhY2xhc3Nlc1t0eXBlXSkgcmV0dXJuIGM7XG5cblx0cmV0dXJuIGNsb25lRWxlbWVudChjLCB7XG5cdFx0Y2xhc3NOYW1lOiBjc3MoY2xhc3Nlc1t0eXBlXSksXG5cdH0pO1xufTtcblxuZnVuY3Rpb24gQWxlcnQgKHtcblx0Y2hpbGRyZW4sXG5cdGNsYXNzTmFtZSxcblx0Y29sb3IsXG5cdGNvbXBvbmVudDogQ29tcG9uZW50LFxuXHQuLi5wcm9wc1xufSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlcy5hbGVydCxcblx0XHRjbGFzc2VzW2NvbG9yXSxcblx0XHRjbGFzc05hbWVcblx0KTtcblx0cHJvcHMuY2hpbGRyZW4gPSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNsb25lV2l0aENsYXNzbmFtZXMpO1xuXG5cdHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gZGF0YS1hbGVydC10eXBlPXtjb2xvcn0gLz47XG59O1xuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG5cdGNvbG9yOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoY29sb3JzKSkuaXNSZXF1aXJlZCxcblx0Y29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuZnVuYyxcblx0XHRQcm9wVHlwZXMuc3RyaW5nLFxuXHRdKSxcbn07XG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XG5cdGNvbXBvbmVudDogJ2RpdicsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFsZXJ0O1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBbGVydFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJhcy1uZWVkZWRcIl0gKi9cblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG4vLyBQcmVwYXJlIHZhcmlhbnRzXG5jb25zdCBjb2xvclZhcmlhbnRzID0ge307XG5PYmplY3Qua2V5cyhjb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuXHRjb2xvclZhcmlhbnRzW2NvbG9yXSA9IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1tjb2xvcl0uYmFja2dyb3VuZCxcblx0XHRib3JkZXJDb2xvcjogY29sb3JzW2NvbG9yXS5ib3JkZXIsXG5cdFx0Y29sb3I6IGNvbG9yc1tjb2xvcl0udGV4dCxcblx0fTtcbn0pO1xuXG4vLyBQcmVwYXJlIGhlYWRpbmdzXG5jb25zdCBoZWFkaW5nVGFnbmFtZXMgPSB7fTtcblsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXS5mb3JFYWNoKHRhZyA9PiB7XG5cdGhlYWRpbmdUYWduYW1lc1t0YWddID0geyBjb2xvcjogJ2luaGVyaXQnIH07XG59KTtcblxuY29uc3QgbGlua1N0eWxlcyA9IHtcblx0Y29sb3I6ICdpbmhlcml0Jyxcblx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuXG5cdCc6aG92ZXInOiB7IGNvbG9yOiAnaW5oZXJpdCcgfSxcblx0Jzpmb2N1cyc6IHsgY29sb3I6ICdpbmhlcml0JyB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGFsZXJ0OiB7XG5cdFx0Ym9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5hbGVydC5ib3JkZXJSYWRpdXMsXG5cdFx0Ym9yZGVyU3R5bGU6ICdzb2xpZCcsXG5cdFx0Ym9yZGVyV2lkdGg6IHRoZW1lLmFsZXJ0LmJvcmRlcldpZHRoLFxuXHRcdG1hcmdpbjogdGhlbWUuYWxlcnQubWFyZ2luLFxuXHRcdHBhZGRpbmc6IHRoZW1lLmFsZXJ0LnBhZGRpbmcsXG5cdH0sXG5cblx0Ly8gdGFnbmFtZXNcblx0YTogbGlua1N0eWxlcyxcblx0TGluazogbGlua1N0eWxlcyxcblx0c3Ryb25nOiB7XG5cdFx0Zm9udFdlaWdodDogNTAwLFxuXHR9LFxuXG5cdC8vIGhlYWRpbmdzXG5cdC4uLmhlYWRpbmdUYWduYW1lcyxcblxuXHQvLyBjb2xvcnNcblx0Li4uY29sb3JWYXJpYW50cyxcbn07XG4iLCJpbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5mdW5jdGlvbiBCbGFua1N0YXRlICh7XG5cdGNsYXNzTmFtZSxcblx0Y2hpbGRyZW4sXG5cdGhlYWRpbmcsXG5cdGNvbXBvbmVudDogQ29tcG9uZW50LFxuXHQuLi5wcm9wc1xufSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlcy5jb250YWluZXIsXG5cdFx0Y2xhc3NOYW1lXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8Q29tcG9uZW50IHsuLi5wcm9wc30+XG5cdFx0XHR7ISFoZWFkaW5nICYmIDxoMiBkYXRhLWUyZS1ibGFuay1zdGF0ZS1oZWFkaW5nIGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuaGVhZGluZyl9PntoZWFkaW5nfTwvaDI+fVxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvQ29tcG9uZW50PlxuXHQpO1xufTtcblxuQmxhbmtTdGF0ZS5wcm9wVHlwZXMgPSB7XG5cdGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLmZ1bmMsXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XSkuaXNSZXF1aXJlZCxcblx0aGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5CbGFua1N0YXRlLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnZGl2Jyxcbn07XG5cbi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJhcy1uZWVkZWRcIl0gKi9cblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcblx0Y29udGFpbmVyOiB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5ibGFua3N0YXRlLmJhY2tncm91bmQsXG5cdFx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5ibGFua3N0YXRlLmJvcmRlclJhZGl1cyxcblx0XHRjb2xvcjogdGhlbWUuYmxhbmtzdGF0ZS5jb2xvcixcblx0XHRwYWRkaW5nQm90dG9tOiB0aGVtZS5ibGFua3N0YXRlLnBhZGRpbmdWZXJ0aWNhbCxcblx0XHRwYWRkaW5nTGVmdDogdGhlbWUuYmxhbmtzdGF0ZS5wYWRkaW5nSG9yaXpvbnRhbCxcblx0XHRwYWRkaW5nUmlnaHQ6IHRoZW1lLmJsYW5rc3RhdGUucGFkZGluZ0hvcml6b250YWwsXG5cdFx0cGFkZGluZ1RvcDogdGhlbWUuYmxhbmtzdGF0ZS5wYWRkaW5nVmVydGljYWwsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0fSxcblxuXHRoZWFkaW5nOiB7XG5cdFx0Y29sb3I6ICdpbmhlcml0JyxcblxuXHRcdCc6bGFzdC1jaGlsZCc6IHtcblx0XHRcdG1hcmdpbkJvdHRvbTogMCxcblx0XHR9LFxuXHR9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmxhbmtTdGF0ZTtcbiIsImltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IGNvbW1vbkNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShzdHlsZXMuY29tbW9uKTtcbmNvbnN0IHN0eWxlc2hlZXRDYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0U3R5bGVTaGVldCAodmFyaWFudCwgY29sb3IpIHtcblx0Y29uc3QgY2FjaGVLZXkgPSBgJHt2YXJpYW50fS0ke2NvbG9yfWA7XG5cdGlmICghc3R5bGVzaGVldENhY2hlW2NhY2hlS2V5XSkge1xuXHRcdGNvbnN0IHZhcmlhbnRTdHlsZXMgPSBzdHlsZXNbdmFyaWFudF0oY29sb3IpO1xuXHRcdHN0eWxlc2hlZXRDYWNoZVtjYWNoZUtleV0gPSBTdHlsZVNoZWV0LmNyZWF0ZSh2YXJpYW50U3R5bGVzKTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzaGVldENhY2hlW2NhY2hlS2V5XTtcbn1cblxuY29uc3QgQlVUVE9OX1NJWkVTID0gWydsYXJnZScsICdtZWRpdW0nLCAnc21hbGwnLCAneHNtYWxsJ107XG5jb25zdCBCVVRUT05fVkFSSUFOVFMgPSBbJ2ZpbGwnLCAnaG9sbG93JywgJ2xpbmsnXTtcbmNvbnN0IEJVVFRPTl9DT0xPUlMgPSBbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2NhbmNlbCcsICdkZWxldGUnXTtcblxuLy8gTk9URSBtdXN0IE5PVCBiZSBmdW5jdGlvbmFsIGNvbXBvbmVudCB0byBhbGxvdyBgcmVmc2BcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyICgpIHtcblx0XHR2YXIge1xuXHRcdFx0YWN0aXZlLFxuXHRcdFx0YXBocm9kaXRlU3R5bGVzLFxuXHRcdFx0YmxvY2ssXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRjb2xvcixcblx0XHRcdGNvbXBvbmVudDogVGFnLFxuXHRcdFx0ZGlzYWJsZWQsXG5cdFx0XHRzaXplLFxuXHRcdFx0dmFyaWFudCxcblx0XHRcdC4uLnByb3BzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHQvLyBnZXQgdGhlIHN0eWxlc1xuXHRcdGNvbnN0IHZhcmlhbnRDbGFzc2VzID0gZ2V0U3R5bGVTaGVldCh2YXJpYW50LCBjb2xvcik7XG5cdFx0cHJvcHMuY2xhc3NOYW1lID0gY3NzKFxuXHRcdFx0Y29tbW9uQ2xhc3Nlcy5iYXNlLFxuXHRcdFx0Y29tbW9uQ2xhc3Nlc1tzaXplXSxcblx0XHRcdHZhcmlhbnRDbGFzc2VzLmJhc2UsXG5cdFx0XHRibG9jayA/IGNvbW1vbkNsYXNzZXMuYmxvY2sgOiBudWxsLFxuXHRcdFx0ZGlzYWJsZWQgPyBjb21tb25DbGFzc2VzLmRpc2FibGVkIDogbnVsbCxcblx0XHRcdGFjdGl2ZSA/IHZhcmlhbnRDbGFzc2VzLmFjdGl2ZSA6IG51bGwsXG5cdFx0XHQuLi5hcGhyb2RpdGVTdHlsZXNcblx0XHQpO1xuXHRcdGlmIChjbGFzc05hbWUpIHtcblx0XHRcdHByb3BzLmNsYXNzTmFtZSArPSAoJyAnICsgY2xhc3NOYW1lKTtcblx0XHR9XG5cblx0XHQvLyByZXR1cm4gYW4gYW5jaG9yIG9yIGJ1dHRvblxuXHRcdGlmICghVGFnKSB7XG5cdFx0XHRUYWcgPSBwcm9wcy5ocmVmID8gJ2EnIDogJ2J1dHRvbic7XG5cdFx0fVxuXHRcdC8vIEVuc3VyZSBidXR0b25zIGRvbid0IHN1Ym1pdCBieSBkZWZhdWx0XG5cdFx0aWYgKFRhZyA9PT0gJ2J1dHRvbicgJiYgIXByb3BzLnR5cGUpIHtcblx0XHRcdHByb3BzLnR5cGUgPSAnYnV0dG9uJztcblx0XHR9XG5cblx0XHRyZXR1cm4gPFRhZyB7Li4ucHJvcHN9IC8+O1xuXHR9XG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXHRhcGhyb2RpdGVTdHlsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0X2RlZmluaXRpb246IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdH0pKSxcblx0YmxvY2s6IFByb3BUeXBlcy5ib29sLFxuXHRjb2xvcjogUHJvcFR5cGVzLm9uZU9mKEJVVFRPTl9DT0xPUlMpLFxuXHRjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5mdW5jLFxuXHRcdFByb3BUeXBlcy5zdHJpbmcsXG5cdF0pLFxuXHRkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cdGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHNpemU6IFByb3BUeXBlcy5vbmVPZihCVVRUT05fU0laRVMpLFxuXHR2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoQlVUVE9OX1ZBUklBTlRTKSxcbn07XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuXHRhcGhyb2RpdGVTdHlsZXM6IFtdLFxuXHRjb2xvcjogJ2RlZmF1bHQnLFxuXHR2YXJpYW50OiAnZmlsbCcsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQnV0dG9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgZ3JhZGllbnRWZXJ0aWNhbCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nzcyc7XG5pbXBvcnQgeyBkYXJrZW4sIGZhZGUsIGxpZ2h0ZW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb2xvcic7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5cbi8vIENvbW1vbiBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0cy5jb21tb24gPSB7XG5cdC8vIEJhc2UgQnV0dG9uXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS1cblx0YmFzZToge1xuXHRcdCdhcHBlYXJhbmNlJzogJ25vbmUnLFxuXHRcdCdiYWNrZ3JvdW5kJzogJ25vbmUnLFxuXHRcdCdib3JkZXJXaWR0aCc6IHRoZW1lLmJ1dHRvbi5ib3JkZXJXaWR0aCxcblx0XHQnYm9yZGVyU3R5bGUnOiAnc29saWQnLFxuXHRcdCdib3JkZXJDb2xvcic6ICd0cmFuc3BhcmVudCcsXG5cdFx0J2JvcmRlclJhZGl1cyc6IHRoZW1lLmJ1dHRvbi5ib3JkZXJSYWRpdXMsXG5cdFx0J2N1cnNvcic6ICdwb2ludGVyJyxcblx0XHQnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snLFxuXHRcdCdmb250V2VpZ2h0JzogdGhlbWUuYnV0dG9uLmZvbnQud2VpZ2h0LFxuXHRcdCdoZWlnaHQnOiB0aGVtZS5jb21wb25lbnQuaGVpZ2h0LFxuXHRcdCdsaW5lSGVpZ2h0JzogdGhlbWUuY29tcG9uZW50LmxpbmVIZWlnaHQsXG5cdFx0J21hcmdpbkJvdHRvbSc6IDAsXG5cdFx0J3BhZGRpbmcnOiBgMCAke3RoZW1lLmJ1dHRvbi5wYWRkaW5nSG9yaXpvbnRhbH1gLFxuXHRcdCdvdXRsaW5lJzogMCxcblx0XHQndGV4dEFsaWduJzogJ2NlbnRlcicsXG5cdFx0J3RvdWNoQWN0aW9uJzogJ21hbmlwdWxhdGlvbicsXG5cdFx0J3VzZXJTZWxlY3QnOiAnbm9uZScsXG5cdFx0J3ZlcnRpY2FsQWxpZ24nOiAnbWlkZGxlJyxcblx0XHQnd2hpdGVTcGFjZSc6ICdub3dyYXAnLFxuXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdGNvbG9yOiB0aGVtZS5idXR0b24uZGVmYXVsdC50ZXh0Q29sb3IsXG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHRcdH0sXG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdGNvbG9yOiB0aGVtZS5idXR0b24uZGVmYXVsdC50ZXh0Q29sb3IsXG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHRcdH0sXG5cdH0sXG5cdC8vIEJsb2NrIERpc3BsYXlcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLVxuXHRibG9jazoge1xuXHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0fSxcblx0Ly8gRGlzYWJsZWRcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLVxuXHRkaXNhYmxlZDoge1xuXHRcdG9wYWNpdHk6IDAuNCxcblx0XHRwb2ludGVyRXZlbnRzOiAnbm9uZScsXG5cdH0sXG5cdC8vIFNpemVzXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS1cblx0bGFyZ2U6IHtcblx0XHRmb250U2l6ZTogdGhlbWUuZm9udC5zaXplLmxhcmdlLFxuXHR9LFxuXHRkZWZhdWx0OiB7XG5cdFx0Zm9udFNpemU6IHRoZW1lLmZvbnQuc2l6ZS5kZWZhdWx0LFxuXHR9LFxuXHRzbWFsbDoge1xuXHRcdGZvbnRTaXplOiB0aGVtZS5mb250LnNpemUuc21hbGwsXG5cdH0sXG5cdHhzbWFsbDoge1xuXHRcdGZvbnRTaXplOiB0aGVtZS5mb250LnNpemUueHNtYWxsLFxuXHRcdGxpbmVIZWlnaHQ6ICcxLjknLFxuXHRcdHBhZGRpbmdMZWZ0OiAnLjY2ZW0nLFxuXHRcdHBhZGRpbmdSaWdodDogJy42NmVtJyxcblx0fSxcbn07XG5cblxuLy8gRmlsbCBWYXJpYW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBidXR0b25GaWxsVmFyaWFudCAodGV4dENvbG9yLCBiZ0NvbG9yKSB7XG5cdGNvbnN0IGhvdmVyU3R5bGVzID0ge1xuXHRcdC4uLmdyYWRpZW50VmVydGljYWwobGlnaHRlbihiZ0NvbG9yLCAxMCksIGRhcmtlbihiZ0NvbG9yLCA1KSksXG5cdFx0Ym9yZGVyQ29sb3I6IGAke2RhcmtlbihiZ0NvbG9yLCA1KX0gJHtkYXJrZW4oYmdDb2xvciwgMTApfSAke2RhcmtlbihiZ0NvbG9yLCAxNSl9YCxcblx0XHRib3hTaGFkb3c6ICcwIDFweCAwIHJnYmEoMCwwLDAsMC4xKScsXG5cdFx0Y29sb3I6IHRleHRDb2xvcixcblx0XHRvdXRsaW5lOiAnbm9uZScsXG5cdH07XG5cdGNvbnN0IGZvY3VzU3R5bGVzID0ge1xuXHRcdC4uLmdyYWRpZW50VmVydGljYWwobGlnaHRlbihiZ0NvbG9yLCAxMCksIGRhcmtlbihiZ0NvbG9yLCA1KSksXG5cdFx0Ym9yZGVyQ29sb3I6IGAke2RhcmtlbihiZ0NvbG9yLCA1KX0gJHtkYXJrZW4oYmdDb2xvciwgMTApfSAke2RhcmtlbihiZ0NvbG9yLCAxNSl9YCxcblx0XHRib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtmYWRlKGJnQ29sb3IsIDI1KX1gLFxuXHRcdGNvbG9yOiB0ZXh0Q29sb3IsXG5cdFx0b3V0bGluZTogJ25vbmUnLFxuXHR9O1xuXHRjb25zdCBhY3RpdmVTdHlsZXMgPSB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBkYXJrZW4oYmdDb2xvciwgMTApLFxuXHRcdGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuXHRcdGJvcmRlckNvbG9yOiBgJHtkYXJrZW4oYmdDb2xvciwgMjUpfSAke2RhcmtlbihiZ0NvbG9yLCAxNSl9ICR7ZGFya2VuKGJnQ29sb3IsIDEwKX1gLFxuXHRcdGJveFNoYWRvdzogJ2luc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSknLFxuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdGJhc2U6IHtcblx0XHRcdC4uLmdyYWRpZW50VmVydGljYWwobGlnaHRlbihiZ0NvbG9yLCA1KSwgZGFya2VuKGJnQ29sb3IsIDEwKSwgYmdDb2xvciksXG5cdFx0XHQnYm9yZGVyQ29sb3InOiBgJHtkYXJrZW4oYmdDb2xvciwgMTApfSAke2RhcmtlbihiZ0NvbG9yLCAyMCl9ICR7ZGFya2VuKGJnQ29sb3IsIDI1KX1gLFxuXHRcdFx0J2JveFNoYWRvdyc6ICdpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKScsXG5cdFx0XHQnY29sb3InOiB0ZXh0Q29sb3IsXG5cdFx0XHQnZm9udFdlaWdodCc6IDQwMCxcblx0XHRcdCd0ZXh0U2hhZG93JzogJzAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSknLFxuXG5cdFx0XHQnOmhvdmVyJzogaG92ZXJTdHlsZXMsXG5cdFx0XHQnOmZvY3VzJzogZm9jdXNTdHlsZXMsXG5cdFx0XHQnOmFjdGl2ZSc6IGFjdGl2ZVN0eWxlcyxcblx0XHR9LFxuXHRcdGFjdGl2ZTogYWN0aXZlU3R5bGVzLFxuXHR9O1xufVxuLy8gVE9ETzogVGhpcyBpcyBwcmV0dHkgaGFja3ksIG5lZWRzIHRvIGJlIGNvbnNvbGlkYXRlZCB3aXRoIHRoZSBWYXJpYW50KCkgbWV0aG9kXG4vLyBhYm92ZSAobmVlZHMgbW9yZSB0aGVtZSB2YXJpYWJsZXMgdG8gYmUgaW1wbGVtZW50ZWQgdGhvdWdoKVxuZnVuY3Rpb24gYnV0dG9uRmlsbERlZmF1bHQgKCkge1xuXHRjb25zdCBib3JkZXJDb2xvciA9IHRoZW1lLmlucHV0LmJvcmRlci5jb2xvci5kZWZhdWx0O1xuXHRjb25zdCBob3ZlclN0eWxlcyA9IHtcblx0XHQuLi5ncmFkaWVudFZlcnRpY2FsKCcjZmZmJywgJyNlZWUnKSxcblx0XHRib3JkZXJDb2xvcjogYCR7ZGFya2VuKGJvcmRlckNvbG9yLCA1KX0gJHtkYXJrZW4oYm9yZGVyQ29sb3IsIDUpfSAke2Rhcmtlbihib3JkZXJDb2xvciwgMTApfWAsXG5cdFx0Ym94U2hhZG93OiAnMCAxcHggMCByZ2JhKDAsMCwwLDAuMSknLFxuXHRcdGNvbG9yOiB0aGVtZS5jb2xvci50ZXh0LFxuXHR9O1xuXHRjb25zdCBmb2N1c1N0eWxlcyA9IHtcblx0XHRib3JkZXJDb2xvcjogdGhlbWUuY29sb3IucHJpbWFyeSxcblx0XHRib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtmYWRlKHRoZW1lLmNvbG9yLnByaW1hcnksIDEwKX1gLFxuXHRcdGNvbG9yOiB0aGVtZS5jb2xvci50ZXh0LFxuXHRcdG91dGxpbmU6ICdub25lJyxcblx0fTtcblx0Y29uc3QgYWN0aXZlU3R5bGVzID0ge1xuXHRcdGJhY2tncm91bmQ6ICcjZTZlNmU2Jyxcblx0XHRib3JkZXJDb2xvcjogZGFya2VuKGJvcmRlckNvbG9yLCAxMCksXG5cdFx0Ym94U2hhZG93OiAnaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKScsXG5cdFx0Y29sb3I6IHRoZW1lLmNvbG9yLnRleHQsXG5cdH07XG5cdHJldHVybiB7XG5cdFx0YmFzZToge1xuXHRcdFx0Li4uZ3JhZGllbnRWZXJ0aWNhbCgnI2ZhZmFmYScsICcjZWFlYWVhJyksXG5cdFx0XHQnYm9yZGVyQ29sb3InOiBgJHtib3JkZXJDb2xvcn0gJHtkYXJrZW4oYm9yZGVyQ29sb3IsIDYpfSAke2Rhcmtlbihib3JkZXJDb2xvciwgMTIpfWAsXG5cdFx0XHQnY29sb3InOiB0aGVtZS5jb2xvci50ZXh0LFxuXHRcdFx0J3RleHRTaGFkb3cnOiAnMCAxcHggMCB3aGl0ZScsXG5cblx0XHRcdCc6aG92ZXInOiBob3ZlclN0eWxlcyxcblx0XHRcdCc6Zm9jdXMnOiBmb2N1c1N0eWxlcyxcblx0XHRcdCc6YWN0aXZlJzogYWN0aXZlU3R5bGVzLFxuXHRcdH0sXG5cblx0XHQvLyBncm9zcyBoYWNrXG5cdFx0YWN0aXZlOiB7XG5cdFx0XHQuLi5hY3RpdmVTdHlsZXMsXG5cblx0XHRcdCc6aG92ZXInOiBhY3RpdmVTdHlsZXMsXG5cdFx0XHQnOmZvY3VzJzoge1xuXHRcdFx0XHQuLi5hY3RpdmVTdHlsZXMsXG5cdFx0XHRcdC4uLmZvY3VzU3R5bGVzLFxuXHRcdFx0XHRib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtmYWRlKHRoZW1lLmNvbG9yLnByaW1hcnksIDEwKX0sIGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSlgLFxuXHRcdFx0fSxcblx0XHRcdCc6YWN0aXZlJzogYWN0aXZlU3R5bGVzLFxuXHRcdH0sXG5cdH07XG59XG5leHBvcnRzLmZpbGwgPSAoY29sb3IpID0+IHtcblx0c3dpdGNoIChjb2xvcikge1xuXHRcdGNhc2UgJ2RlZmF1bHQnOlxuXHRcdFx0cmV0dXJuIGJ1dHRvbkZpbGxEZWZhdWx0KCk7XG5cdFx0Y2FzZSAnY2FuY2VsJzpcblx0XHRjYXNlICdkZWxldGUnOlxuXHRcdFx0cmV0dXJuIGJ1dHRvbkZpbGxWYXJpYW50KCd3aGl0ZScsIHRoZW1lLmJ1dHRvbi5kYW5nZXIuYmdDb2xvcik7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBidXR0b25GaWxsVmFyaWFudCgnd2hpdGUnLCB0aGVtZS5idXR0b25bY29sb3JdLmJnQ29sb3IpO1xuXHR9XG59O1xuXG5cbi8vIEhvbGxvdyBWYXJpYW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBidXR0b25Ib2xsb3dWYXJpYW50ICh0ZXh0Q29sb3IsIGJvcmRlckNvbG9yKSB7XG5cdGNvbnN0IGZvY3VzQW5kSG92ZXJTdHlsZXMgPSB7XG5cdFx0YmFja2dyb3VuZEltYWdlOiAnbm9uZScsXG5cdFx0YmFja2dyb3VuZENvbG9yOiBmYWRlKGJvcmRlckNvbG9yLCAxNSksXG5cdFx0Ym9yZGVyQ29sb3I6IGRhcmtlbihib3JkZXJDb2xvciwgMTUpLFxuXHRcdGJveFNoYWRvdzogJ25vbmUnLFxuXHRcdGNvbG9yOiB0ZXh0Q29sb3IsXG5cdFx0b3V0bGluZTogJ25vbmUnLFxuXHR9O1xuXHRjb25zdCBmb2N1c09ubHlTdHlsZXMgPSB7XG5cdFx0Ym94U2hhZG93OiBgMCAwIDAgM3B4ICR7ZmFkZShib3JkZXJDb2xvciwgMTApfWAsXG5cdH07XG5cdGNvbnN0IGFjdGl2ZVN0eWxlcyA9IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoYm9yZGVyQ29sb3IsIDM1KSxcblx0XHRib3JkZXJDb2xvcjogZGFya2VuKGJvcmRlckNvbG9yLCAyNSksXG5cdFx0Ym94U2hhZG93OiAnbm9uZScsXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRiYXNlOiB7XG5cdFx0XHQnYmFja2dyb3VuZCc6ICdub25lJyxcblx0XHRcdCdib3JkZXJDb2xvcic6IGJvcmRlckNvbG9yLFxuXHRcdFx0J2NvbG9yJzogdGV4dENvbG9yLFxuXG5cdFx0XHQnOmhvdmVyJzogZm9jdXNBbmRIb3ZlclN0eWxlcyxcblx0XHRcdCc6Zm9jdXMgJzogT2JqZWN0LmFzc2lnbih7fSwgZm9jdXNBbmRIb3ZlclN0eWxlcywgZm9jdXNPbmx5U3R5bGVzKSxcblx0XHRcdCc6YWN0aXZlJzogYWN0aXZlU3R5bGVzLFxuXHRcdH0sXG5cdFx0YWN0aXZlOiBhY3RpdmVTdHlsZXMsXG5cdH07XG59O1xuZXhwb3J0cy5ob2xsb3cgPSAoY29sb3IpID0+IHtcblx0Ly8gVE9ETzogYmV0dGVyIGhhbmRsaW5nIG9mIGNhbmNlbCBhbmQgZGVsZXRlIGNvbG9yc1xuXHRpZiAoY29sb3IgPT09ICdjYW5jZWwnIHx8IGNvbG9yID09PSAnZGVsZXRlJykgY29sb3IgPSAnZGFuZ2VyJztcblxuXHRyZXR1cm4gYnV0dG9uSG9sbG93VmFyaWFudCh0aGVtZS5idXR0b25bY29sb3JdLmJnQ29sb3IsIHRoZW1lLmJ1dHRvbltjb2xvcl0uYm9yZGVyQ29sb3IpO1xufTtcblxuXG4vLyBMaW5rIFZhcmlhbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGJ1dHRvbkxpbmtWYXJpYW50ICh0ZXh0Q29sb3IsIGhvdmVyQ29sb3IpIHtcblx0Y29uc3QgaG92ZXJTdHlsZXMgPSB7XG5cdFx0Y29sb3I6IGhvdmVyQ29sb3IsXG5cdFx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuXHR9O1xuXHRyZXR1cm4ge1xuXHRcdGJhc2U6IHtcblx0XHRcdCdiYWNrZ3JvdW5kJzogJ25vbmUnLFxuXHRcdFx0J2JvcmRlcic6IDAsXG5cdFx0XHQnYm94U2hhZG93JzogJ25vbmUnLFxuXHRcdFx0J2NvbG9yJzogdGV4dENvbG9yLFxuXHRcdFx0J2ZvbnRXZWlnaHQnOiAnbm9ybWFsJyxcblx0XHRcdCdvdXRsaW5lJzogJ25vbmUnLFxuXG5cdFx0XHQnOmhvdmVyJzogaG92ZXJTdHlsZXMsXG5cdFx0XHQnOmZvY3VzJzogaG92ZXJTdHlsZXMsXG5cdFx0XHQnOmFjdGl2ZSc6IGhvdmVyU3R5bGVzLFxuXHRcdH0sXG5cdFx0YWN0aXZlOiBob3ZlclN0eWxlcyxcblx0fTtcbn07XG5mdW5jdGlvbiBidXR0b25MaW5rRGVsZXRlICgpIHtcblx0Y29uc3Qgc3R5bGVzID0gYnV0dG9uTGlua1ZhcmlhbnQodGhlbWUuY29sb3IuZ3JheTQwLCB0aGVtZS5jb2xvci5kYW5nZXIpO1xuXHRjb25zdCBob3ZlclN0eWxlcyA9IHtcblx0XHQuLi5ncmFkaWVudFZlcnRpY2FsKGxpZ2h0ZW4odGhlbWUuY29sb3IuZGFuZ2VyLCAxMCksIGRhcmtlbih0aGVtZS5jb2xvci5kYW5nZXIsIDEwKSksXG5cdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvci5kYW5nZXIsXG5cdFx0Ym9yZGVyQ29sb3I6IGAke2Rhcmtlbih0aGVtZS5jb2xvci5kYW5nZXIsIDQpfSAke2Rhcmtlbih0aGVtZS5jb2xvci5kYW5nZXIsIDgpfSAke2Rhcmtlbih0aGVtZS5jb2xvci5kYW5nZXIsIDEyKX1gLFxuXHRcdGJveFNoYWRvdzogJzAgMXB4IDAgcmdiYSgwLDAsMCwwLjEpJyxcblx0XHRjb2xvcjogJ3doaXRlJyxcblx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHR9O1xuXHRjb25zdCBhY3RpdmVTdHlsZXMgPSB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBkYXJrZW4odGhlbWUuY29sb3IuZGFuZ2VyLCA0KSxcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6ICdub25lJyxcblx0XHRib3JkZXJDb2xvcjogYCR7ZGFya2VuKHRoZW1lLmNvbG9yLmRhbmdlciwgMTIpfSAke2Rhcmtlbih0aGVtZS5jb2xvci5kYW5nZXIsIDgpfSAke2Rhcmtlbih0aGVtZS5jb2xvci5kYW5nZXIsIDgpfWAsXG5cdFx0Ym94U2hhZG93OiAnaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKScsXG5cdFx0Y29sb3I6ICd3aGl0ZScsXG5cdH07XG5cdHJldHVybiB7XG5cdFx0YmFzZToge1xuXHRcdFx0Li4uc3R5bGVzLmJhc2UsXG5cdFx0XHQnOmhvdmVyJzogaG92ZXJTdHlsZXMsXG5cdFx0XHQnOmZvY3VzJzogaG92ZXJTdHlsZXMsXG5cdFx0XHQnOmFjdGl2ZSc6IGFjdGl2ZVN0eWxlcyxcblx0XHR9LFxuXHRcdGFjdGl2ZTogYWN0aXZlU3R5bGVzLFxuXHR9O1xufVxuXG5leHBvcnRzLmxpbmsgPSAoY29sb3IpID0+IHtcblx0c3dpdGNoIChjb2xvcikge1xuXHRcdGNhc2UgJ2RlZmF1bHQnOlxuXHRcdFx0cmV0dXJuIGJ1dHRvbkxpbmtWYXJpYW50KHRoZW1lLmNvbG9yLmxpbmssIHRoZW1lLmNvbG9yLmxpbmtIb3Zlcik7XG5cdFx0Y2FzZSAnY2FuY2VsJzpcblx0XHRcdHJldHVybiBidXR0b25MaW5rVmFyaWFudCh0aGVtZS5jb2xvci5ncmF5NDAsIHRoZW1lLmNvbG9yLmRhbmdlcik7XG5cdFx0Y2FzZSAnZGVsZXRlJzpcblx0XHRcdHJldHVybiBidXR0b25MaW5rRGVsZXRlKCk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBidXR0b25MaW5rVmFyaWFudCh0aGVtZS5jb2xvcltjb2xvcl0sIHRoZW1lLmNvbG9yW2NvbG9yXSk7XG5cdH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHN0eWxlcyk7XG5cbmZ1bmN0aW9uIENlbnRlciAoe1xuXHRjbGFzc05hbWUsXG5cdGNvbXBvbmVudDogQ29tcG9uZW50LFxuXHRoZWlnaHQsXG5cdHN0eWxlLFxuXHQuLi5wcm9wc1xufSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoY2xhc3Nlcy5jZW50ZXIsIGNsYXNzTmFtZSk7XG5cdHByb3BzLnN0eWxlID0geyBoZWlnaHQsIC4uLnN0eWxlIH07XG5cblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbn07XG5DZW50ZXIucHJvcFR5cGVzID0ge1xuXHRjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5mdW5jLFxuXHRcdFByb3BUeXBlcy5zdHJpbmcsXG5cdF0pLFxuXHRoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5udW1iZXIsXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XSksXG59O1xuQ2VudGVyLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnZGl2Jyxcblx0aGVpZ2h0OiAnYXV0bycsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENlbnRlcjtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2VudGVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNlbnRlcjoge1xuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdH0sXG59O1xuIiwiaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcbmltcG9ydCB7IGZhZGUsIGxpZ2h0ZW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb2xvcic7XG5cbmNvbnN0IGJhc2VDb2xvcnMgPSB7fTtcblsnZGFuZ2VyJywgJ2luZm8nLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnXS5mb3JFYWNoKGNvbG9yID0+IHtcblx0YmFzZUNvbG9yc1tjb2xvcl0gPSB7XG5cdFx0YmFja2dyb3VuZDogZmFkZSh0aGVtZS5jb2xvcltjb2xvcl0sIDEwKSxcblx0XHRiYWNrZ3JvdW5kQWN0aXZlOiBmYWRlKHRoZW1lLmNvbG9yW2NvbG9yXSwgMjApLFxuXHRcdGJhY2tncm91bmRIb3ZlcjogZmFkZSh0aGVtZS5jb2xvcltjb2xvcl0sIDE1KSxcblx0XHR0ZXh0OiB0aGVtZS5jb2xvcltjb2xvcl0sXG5cdH07XG59KTtcbmNvbnN0IGludmVydGVkQ29sb3JzID0ge307XG5bJ2RhbmdlcicsICdpbmZvJywgJ3ByaW1hcnknLCAnc3VjY2VzcycsICd3YXJuaW5nJ10uZm9yRWFjaChjb2xvciA9PiB7XG5cdGludmVydGVkQ29sb3JzW2NvbG9yICsgJ19faW52ZXJ0ZWQnXSA9IHtcblx0XHRiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcltjb2xvcl0sXG5cdFx0YmFja2dyb3VuZEFjdGl2ZTogbGlnaHRlbih0aGVtZS5jb2xvcltjb2xvcl0sIDUpLFxuXHRcdGJhY2tncm91bmRIb3ZlcjogbGlnaHRlbih0aGVtZS5jb2xvcltjb2xvcl0sIDE1KSxcblx0XHR0ZXh0OiAnd2hpdGUnLFxuXHR9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkZWZhdWx0OiB7XG5cdFx0YmFja2dyb3VuZDogdGhlbWUuY29sb3IuZ3JheTEwLFxuXHRcdGJhY2tncm91bmRBY3RpdmU6IHRoZW1lLmNvbG9yLmdyYXkyMCxcblx0XHRiYWNrZ3JvdW5kSG92ZXI6IHRoZW1lLmNvbG9yLmdyYXkxNSxcblx0XHR0ZXh0OiB0aGVtZS5jb2xvci5ncmF5NjAsXG5cdH0sXG5cdC4uLmJhc2VDb2xvcnMsXG5cblx0Ly8gaW52ZXJ0ZWRcblx0ZGVmYXVsdF9faW52ZXJ0ZWQ6IHtcblx0XHRiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvci5ncmF5NjAsXG5cdFx0YmFja2dyb3VuZEFjdGl2ZTogbGlnaHRlbih0aGVtZS5jb2xvci5ncmF5NjAsIDUpLFxuXHRcdGJhY2tncm91bmRIb3ZlcjogbGlnaHRlbih0aGVtZS5jb2xvci5ncmF5NjAsIDE1KSxcblx0XHR0ZXh0OiAnd2hpdGUnLFxuXHR9LFxuXHQuLi5pbnZlcnRlZENvbG9ycyxcbn07XG4iLCJpbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuXG5jb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoc3R5bGVzKTtcblxuZnVuY3Rpb24gQ2hpcCAoe1xuXHRjbGFzc05hbWUsXG5cdGNoaWxkcmVuLFxuXHRjb2xvcixcblx0aW52ZXJ0ZWQsXG5cdGxhYmVsLFxuXHRvbkNsZWFyLFxuXHRvbkNsaWNrLFxuXHQuLi5wcm9wc1xufSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlcy5jaGlwLFxuXHRcdGNsYXNzTmFtZVxuXHQpO1xuXHRjb25zdCBsYWJlbENsYXNzTmFtZSA9IGNzcyhcblx0XHRjbGFzc2VzLmJ1dHRvbixcblx0XHRjbGFzc2VzLmxhYmVsLFxuXHRcdGNsYXNzZXNbJ2J1dHRvbl9fJyArIGNvbG9yICsgKGludmVydGVkID8gJ19faW52ZXJ0ZWQnIDogJycpXVxuXHQpO1xuXHRjb25zdCBjbGVhckNsYXNzTmFtZSA9IGNzcyhcblx0XHRjbGFzc2VzLmJ1dHRvbixcblx0XHRjbGFzc2VzLmNsZWFyLFxuXHRcdGNsYXNzZXNbJ2J1dHRvbl9fJyArIGNvbG9yICsgKGludmVydGVkID8gJ19faW52ZXJ0ZWQnIDogJycpXVxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiB7Li4ucHJvcHN9PlxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtsYWJlbENsYXNzTmFtZX0+XG5cdFx0XHRcdHtsYWJlbH1cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHR7ISFvbkNsZWFyICYmIChcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGVhcn0gY2xhc3NOYW1lPXtjbGVhckNsYXNzTmFtZX0+XG5cdFx0XHRcdFx0JnRpbWVzO1xuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5DaGlwLnByb3BUeXBlcyA9IHtcblx0Y29sb3I6IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhjb2xvcnMpKS5pc1JlcXVpcmVkLFxuXHRpbnZlcnRlZDogUHJvcFR5cGVzLmJvb2wsXG5cdGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdG9uQ2xlYXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuXHRvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbn07XG5DaGlwLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29sb3I6ICdkZWZhdWx0Jyxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hpcDtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQWxlcnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiBlc2xpbnQgcXVvdGUtcHJvcHM6IFtcImVycm9yXCIsIFwiYXMtbmVlZGVkXCJdICovXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcbmltcG9ydCB7IGJvcmRlckxlZnRSYWRpdXMsIGJvcmRlclJpZ2h0UmFkaXVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY3NzJztcblxuLy8gUHJlcGFyZSB2YXJpYW50c1xuY29uc3QgY29sb3JWYXJpYW50cyA9IHt9O1xuT2JqZWN0LmtleXMoY29sb3JzKS5mb3JFYWNoKGNvbG9yID0+IHtcblx0Y29uc3QgaG92ZXJTdHlsZXMgPSB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcnNbY29sb3JdLmJhY2tncm91bmRIb3Zlcixcblx0fTtcblxuXHRjb2xvclZhcmlhbnRzWydidXR0b25fXycgKyBjb2xvcl0gPSB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcnNbY29sb3JdLmJhY2tncm91bmQsXG5cdFx0Y29sb3I6IGNvbG9yc1tjb2xvcl0udGV4dCxcblxuXHRcdCc6aG92ZXInOiBob3ZlclN0eWxlcyxcblx0XHQnOmZvY3VzJzogaG92ZXJTdHlsZXMsXG5cdFx0JzphY3RpdmUnOiB7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1tjb2xvcl0uYmFja2dyb3VuZEFjdGl2ZSxcblx0XHR9LFxuXHR9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRjaGlwOiB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0Zm9udFNpemU6IHRoZW1lLmZvbnQuc2l6ZS5zbWFsbCxcblx0XHRmb250V2VpZ2h0OiA1MDAsXG5cdFx0bWFyZ2luUmlnaHQ6ICcwLjVlbScsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdGxpbmVIZWlnaHQ6ICcyLjJlbScsXG5cdH0sXG5cblx0Ly8gdGFnbmFtZXNcblx0YnV0dG9uOiB7XG5cdFx0YXBwZWFyYW5jZTogJ25vbmUnLFxuXHRcdGJhY2tncm91bmQ6ICdub25lJyxcblx0XHRib3JkZXI6ICdub25lJyxcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdGZsb2F0OiAnbGVmdCcsXG5cdFx0cGFkZGluZzogJzAgLjllbScsXG5cdFx0b3V0bGluZTogJ25vbmUnLFxuXG5cdFx0Ly8gbWFrZSBwaWxscyAtIGV4YWdnZXJhdGUgdGhlIHBhZGRpbmcgdG93YXJkIHRoZSByYWRpaSBzbyBpdCBsb29rcyBldmVuXG5cdFx0JzpmaXJzdC1jaGlsZCc6IHtcblx0XHRcdC4uLmJvcmRlckxlZnRSYWRpdXMoJzNlbScpLFxuXHRcdFx0cGFkZGluZ0xlZnQ6ICcxLjFlbScsXG5cdFx0fSxcblx0XHQnOmxhc3QtY2hpbGQnOiB7XG5cdFx0XHQuLi5ib3JkZXJSaWdodFJhZGl1cygnM2VtJyksXG5cdFx0XHRwYWRkaW5nUmlnaHQ6ICcxLjFlbScsXG5cdFx0fSxcblx0fSxcblxuXG5cdC8vIHByb3ZpZGUgc2VwYXJhdGlvbiBiZXR3ZWVuIHRoZSBsYWJlbCBhbmQgY2xlYXIgYnV0dG9uc1xuXHQvLyBmbG9hdGluZyBzdG9wcyB0aGUgbWFyZ2lucyBmcm9tIGNvbGxhcHNpbmcgaW50byBlYWNoaW5nXG5cblx0bGFiZWw6IHsgbWFyZ2luUmlnaHQ6IDEgfSxcblx0Y2xlYXI6IHsgbWFyZ2luTGVmdDogMSB9LFxuXG5cdC8vIGNvbG9yc1xuXHQuLi5jb2xvclZhcmlhbnRzLFxufTtcbiIsImltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHNpemVzIGZyb20gJy4vc2l6ZXMnO1xuXG5jb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoc3R5bGVzKTtcblxuZnVuY3Rpb24gQ29udGFpbmVyICh7XG5cdGNsYXNzTmFtZSxcblx0Y2xlYXJGbG9hdGluZ0NoaWxkcmVuLFxuXHRjb21wb25lbnQ6IENvbXBvbmVudCxcblx0d2lkdGgsXG5cdC4uLnByb3BzXG59KSB7XG5cdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRjbGFzc2VzLmNvbnRhaW5lcixcblx0XHRjbGFzc2VzW3dpZHRoXSxcblx0XHRjbGVhckZsb2F0aW5nQ2hpbGRyZW4gPyBjbGFzc2VzLmNsZWFyZml4IDogbnVsbCxcblx0XHRjbGFzc05hbWVcblx0KTtcblxuXHRyZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xufTtcblxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcblx0Y2xlYXJGbG9hdGluZ0NoaWxkcmVuOiBQcm9wVHlwZXMuYm9vbCxcblx0Y29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuZnVuYyxcblx0XHRQcm9wVHlwZXMuc3RyaW5nLFxuXHRdKS5pc1JlcXVpcmVkLFxuXHR3aWR0aDogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKHNpemVzKSkuaXNSZXF1aXJlZCxcbn07XG5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuXHRjb21wb25lbnQ6ICdkaXYnLFxuXHR3aWR0aDogJ2xhcmdlJyxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFpbmVyO1xuIiwiaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHNtYWxsOiB0aGVtZS5jb250YWluZXIuc2l6ZS5zbWFsbCxcblx0bWVkaXVtOiB0aGVtZS5jb250YWluZXIuc2l6ZS5tZWRpdW0sXG5cdGxhcmdlOiB0aGVtZS5jb250YWluZXIuc2l6ZS5sYXJnZSxcbn07XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJhcy1uZWVkZWRcIl0gKi9cblxuaW1wb3J0IHNpemVzIGZyb20gJy4vc2l6ZXMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxuLy8gUHJlcGFyZSBzaXplc1xuY29uc3Qgc2l6ZVZhcmlhbnRzID0ge307XG5PYmplY3Qua2V5cyhzaXplcykuZm9yRWFjaChzaXplID0+IHtcblx0c2l6ZVZhcmlhbnRzW3NpemVdID0ge1xuXHRcdG1heFdpZHRoOiBzaXplc1tzaXplXSxcblx0fTtcbn0pO1xuXG4vKlxuXHRNaWNybyBjbGVhcmZpeCBoYWNrXG5cdDEuXHRUaGUgc3BhY2UgY29udGVudCBpcyBvbmUgd2F5IHRvIGF2b2lkIGFuIE9wZXJhIGJ1ZyB3aGVuIHRoZVxuXHRcdFx0Y29udGVudGVkaXRhYmxlIGF0dHJpYnV0ZSBpcyBpbmNsdWRlZCBhbnl3aGVyZSBlbHNlIGluIHRoZSBkb2N1bWVudC5cblx0XHRcdE90aGVyd2lzZSBpdCBjYXVzZXMgc3BhY2UgdG8gYXBwZWFyIGF0IHRoZSB0b3AgYW5kIGJvdHRvbSBvZiBlbGVtZW50c1xuXHRcdFx0dGhhdCBhcmUgY2xlYXJmaXhlZC5cblx0Mi5cdFRoZSB1c2Ugb2YgYHRhYmxlYCByYXRoZXIgdGhhbiBgYmxvY2tgIGlzIG9ubHkgbmVjZXNzYXJ5IGlmIHVzaW5nXG5cdFx0XHRgOmJlZm9yZWAgdG8gY29udGFpbiB0aGUgdG9wLW1hcmdpbnMgb2YgY2hpbGQgZWxlbWVudHMuXG4qL1xuY29uc3QgY2xlYXJmaXhTdHlsZXMgPSB7XG5cdGNsZWFyOiAnYm90aCcsXG5cdGNvbnRlbnQ6ICdcIiBcIicsIC8vIDFcblx0ZGlzcGxheTogJ3RhYmxlJywgLy8gMlxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdG1hcmdpbkxlZnQ6ICdhdXRvJyxcblx0XHRtYXJnaW5SaWdodDogJ2F1dG8nLFxuXHRcdHBhZGRpbmdMZWZ0OiB0aGVtZS5jb250YWluZXIuZ3V0dGVyLFxuXHRcdHBhZGRpbmdSaWdodDogdGhlbWUuY29udGFpbmVyLmd1dHRlcixcblx0fSxcblxuXHQvLyBjbGVhciBmbG9hdGluZyBjaGlsZHJlblxuXHRjbGVhcmZpeDoge1xuXHRcdCc6YmVmb3JlJzogY2xlYXJmaXhTdHlsZXMsXG5cdFx0JzphZnRlcic6IGNsZWFyZml4U3R5bGVzLFxuXHR9LFxuXG5cdC8vIHNpemVzXG5cdC4uLnNpemVWYXJpYW50cyxcbn07XG4iLCIvKiBlc2xpbnQgcXVvdGUtcHJvcHM6IFtcImVycm9yXCIsIFwiYXMtbmVlZGVkXCJdICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcblxuZnVuY3Rpb24gRHJvcGRvd25CdXR0b24gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8QnV0dG9uIHsuLi5wcm9wc30+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmFycm93KX0gLz5cblx0XHQ8L0J1dHRvbj5cblx0KTtcbn07XG5cbi8vIE5PVEVcbi8vIDE6IHRha2UgYWR2YW50YWdlIG9mIGBjdXJyZW50Q29sb3JgIGJ5IGxlYXZpbmcgYm9yZGVyIHRvcCBjb2xvciB1bmRlZmluZWRcbi8vIDI6IGV2ZW4gdGhvdWdoIHRoZSBhcnJvdyBpcyB2ZXJ0aWNhbGx5IGNlbnRlcmVkLCB2aXN1YWxseSBpdCBhcHBlYXJzIHRvbyBsb3dcbi8vICAgIGJlY2F1c2Ugb2YgbG93ZXJjYXNlIGNoYXJhY3RlcnMgYmVzaWRlIGl0XG5jb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuXHRhcnJvdzoge1xuXHRcdGJvcmRlckxlZnQ6ICcwLjNlbSBzb2xpZCB0cmFuc3BhcmVudCcsXG5cdFx0Ym9yZGVyUmlnaHQ6ICcwLjNlbSBzb2xpZCB0cmFuc3BhcmVudCcsXG5cdFx0Ym9yZGVyVG9wOiAnMC4zZW0gc29saWQnLCAvLyAxXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0aGVpZ2h0OiAwLFxuXHRcdG1hcmdpblRvcDogJy0wLjEyNWVtJywgLy8gMlxuXHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdHdpZHRoOiAwLFxuXG5cdFx0Ly8gYWRkIHNwYWNpbmdcblx0XHQnOmZpcnN0LWNoaWxkJzoge1xuXHRcdFx0bWFyZ2luUmlnaHQ6ICcwLjVlbScsXG5cdFx0fSxcblx0XHQnOmxhc3QtY2hpbGQnOiB7XG5cdFx0XHRtYXJnaW5MZWZ0OiAnMC41ZW0nLFxuXHRcdH0sXG5cdH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEcm9wZG93bkJ1dHRvbjtcbiIsImltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShzdHlsZXMpO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Z2V0Q2hpbGRDb250ZXh0ICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Zm9ybUxheW91dDogdGhpcy5wcm9wcy5sYXlvdXQsXG5cdFx0XHRsYWJlbFdpZHRoOiB0aGlzLnByb3BzLmxhYmVsV2lkdGgsXG5cdFx0fTtcblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdC8vIE5PVEUgYGxhYmVsV2lkdGhgIGlzIGRlY2xhcmVkIHRvIHJlbW92ZSBpdCBmcm9tIGBwcm9wc2AsIHRob3VnaCBuZXZlciB1c2VkXG5cdFx0Y29uc3Qge1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0Y29tcG9uZW50OiBDb21wb25lbnQsXG5cdFx0XHRsYWJlbFdpZHRoLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdFx0XHRsYXlvdXQsXG5cdFx0XHQuLi5wcm9wc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cHJvcHMuY2xhc3NOYW1lID0gY3NzKFxuXHRcdFx0Y2xhc3Nlcy5Gb3JtLFxuXHRcdFx0Y2xhc3Nlc1snRm9ybV9fJyArIGxheW91dF0sXG5cdFx0XHRjbGFzc05hbWVcblx0XHQpO1xuXG5cdFx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcblx0fVxufTtcblxuRm9ybS5jaGlsZENvbnRleHRUeXBlcyA9IHtcblx0Zm9ybUxheW91dDogUHJvcFR5cGVzLm9uZU9mKFsnYmFzaWMnLCAnaG9yaXpvbnRhbCcsICdpbmxpbmUnXSksXG5cdGxhYmVsV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5udW1iZXIsXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XSksXG59O1xuRm9ybS5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXHRjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0UHJvcFR5cGVzLmZ1bmMsXG5cdF0pLFxuXHRsYXlvdXQ6IFByb3BUeXBlcy5vbmVPZihbJ2Jhc2ljJywgJ2hvcml6b250YWwnLCAnaW5saW5lJ10pLFxufTtcbkZvcm0uZGVmYXVsdFByb3BzID0ge1xuXHRjb21wb25lbnQ6ICdmb3JtJyxcblx0bGF5b3V0OiAnYmFzaWMnLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGb3JtXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdEZvcm06IHt9LFxufTtcbiIsImltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnLi4vRm9ybUxhYmVsJztcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHN0eWxlcyk7XG5cbmNsYXNzIEZvcm1GaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZm9ybUZpZWxkSWQgPSBnZW5lcmF0ZUlkKCk7XG5cdH1cblx0Z2V0Q2hpbGRDb250ZXh0ICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Zm9ybUZpZWxkSWQ6IHRoaXMuZm9ybUZpZWxkSWQsXG5cdFx0fTtcblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdGNvbnN0IHsgZm9ybUxheW91dCA9ICdiYXNpYycsIGxhYmVsV2lkdGggfSA9IHRoaXMuY29udGV4dDtcblx0XHRjb25zdCB7XG5cdFx0XHRhcGhyb2RpdGVTdHlsZXMsXG5cdFx0XHRjaGlsZHJlbixcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGNyb3BMYWJlbCxcblx0XHRcdGh0bWxGb3IsXG5cdFx0XHRsYWJlbCxcblx0XHRcdG9mZnNldEFic2VudExhYmVsLFxuXHRcdFx0Li4ucHJvcHNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRcdGNsYXNzZXMuRm9ybUZpZWxkLFxuXHRcdFx0Y2xhc3Nlc1snRm9ybUZpZWxkLS1mb3JtLWxheW91dC0nICsgZm9ybUxheW91dF0sXG5cdFx0XHRvZmZzZXRBYnNlbnRMYWJlbCA/IGNsYXNzZXNbJ0Zvcm1GaWVsZC0tb2Zmc2V0LWFic2VudC1sYWJlbCddIDogbnVsbCxcblx0XHRcdGFwaHJvZGl0ZVN0eWxlc1xuXHRcdCk7XG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0cHJvcHMuY2xhc3NOYW1lICs9ICgnICcgKyBjbGFzc05hbWUpO1xuXHRcdH1cblx0XHRpZiAob2Zmc2V0QWJzZW50TGFiZWwgJiYgbGFiZWxXaWR0aCkge1xuXHRcdFx0cHJvcHMuc3R5bGUgPSB7XG5cdFx0XHRcdHBhZGRpbmdMZWZ0OiBsYWJlbFdpZHRoLFxuXHRcdFx0XHQuLi5wcm9wcy5zdHlsZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gZWxlbWVudHNcblx0XHRjb25zdCBjb21wb25lbnRMYWJlbCA9IGxhYmVsID8gKFxuXHRcdFx0PEZvcm1MYWJlbCBodG1sRm9yPXtodG1sRm9yfSBjcm9wVGV4dD17Y3JvcExhYmVsfT5cblx0XHRcdFx0e2xhYmVsfVxuXHRcdFx0PC9Gb3JtTGFiZWw+XG5cdFx0KSA6IG51bGw7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiB7Li4ucHJvcHN9IGh0bWxGb3I9e2h0bWxGb3J9PlxuXHRcdFx0XHR7Y29tcG9uZW50TGFiZWx9XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn07XG5cbmNvbnN0IHN0eWxlc1NoYXBlID0ge1xuXHRfZGVmaW5pdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcblx0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Gb3JtRmllbGQuY29udGV4dFR5cGVzID0ge1xuXHRmb3JtTGF5b3V0OiBQcm9wVHlwZXMub25lT2YoWydiYXNpYycsICdob3Jpem9udGFsJywgJ2lubGluZSddKSxcblx0bGFiZWxXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLm51bWJlcixcblx0XHRQcm9wVHlwZXMuc3RyaW5nLFxuXHRdKSxcbn07XG5Gb3JtRmllbGQuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG5cdGZvcm1GaWVsZElkOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkZvcm1GaWVsZC5wcm9wVHlwZXMgPSB7XG5cdGFwaHJvZGl0ZVN0eWxlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHN0eWxlc1NoYXBlKSksXG5cdFx0UHJvcFR5cGVzLnNoYXBlKHN0eWxlc1NoYXBlKSxcblx0XSksXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblx0Y3JvcExhYmVsOiBQcm9wVHlwZXMuYm9vbCxcblx0aHRtbEZvcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0bGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdG9mZnNldEFic2VudExhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSWQgKCkge1xuXHRyZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtRmllbGQ7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZvcm0gRmllbGRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0J0Zvcm1GaWVsZCc6IHtcblx0XHRtYXJnaW5Cb3R0b206ICcxZW0nLFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHR9LFxuXG5cdC8vIHdoZW4gaW5zaWRlIGEgaG9yaXpvbnRhbCBmb3JtXG5cblx0J0Zvcm1GaWVsZC0tZm9ybS1sYXlvdXQtaG9yaXpvbnRhbCc6IHtcblx0XHRbYEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnQudGFibGV0TGFuZHNjYXBlTWlufSlgXToge1xuXHRcdFx0ZGlzcGxheTogJ3RhYmxlJyxcblx0XHRcdHRhYmxlTGF5b3V0OiAnZml4ZWQnLFxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIGluc2lkZSBob3Jpem9udGFsIGZvcm1cblx0Ly8gdHlwaWNhbGx5IGZvciB1c2Ugd2l0aCBzdWJtaXQgYnV0dG9uIGluc2lkZVxuXHQnRm9ybUZpZWxkLS1vZmZzZXQtYWJzZW50LWxhYmVsJzoge1xuXHRcdHBhZGRpbmdMZWZ0OiB0aGVtZS5mb3JtLmxhYmVsLndpZHRoLFxuXHR9LFxuXG5cdC8vIHdoZW4gaW5zaWRlIGFuIGlubGluZSBmb3JtXG5cblx0J0Zvcm1GaWVsZC0tZm9ybS1sYXlvdXQtaW5saW5lJzoge1xuXHRcdCdkaXNwbGF5JzogJ2lubGluZS1ibG9jaycsXG5cdFx0J3BhZGRpbmdMZWZ0JzogJzAuMjVlbScsXG5cdFx0J3BhZGRpbmdSaWdodCc6ICcwLjI1ZW0nLFxuXHRcdCd2ZXJ0aWNhbEFsaWduJzogJ3RvcCcsXG5cblx0XHQnOmZpcnN0LWNoaWxkJzogeyBwYWRkaW5nTGVmdDogMCB9LFxuXHRcdCc6bGFzdC1jaGlsZCc6IHsgcGFkZGluZ1JpZ2h0OiAwIH0sXG5cdH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBjb25jYXRDbGFzc25hbWVzIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbmNhdENsYXNzbmFtZXMnO1xuaW1wb3J0IElucHV0Tm9lZGl0IGZyb20gJy4vbm9lZGl0JztcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHN0eWxlcyk7XG5cbi8vIE5PVEUgbXVzdCBOT1QgYmUgZnVuY3Rpb25hbCBjb21wb25lbnQgdG8gYWxsb3cgYHJlZnNgXG5cbmNsYXNzIEZvcm1JbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGJsdXIgKCkge1xuXHRcdHRoaXMudGFyZ2V0LmJsdXIoKTtcblx0fVxuXHRmb2N1cyAoKSB7XG5cdFx0dGhpcy50YXJnZXQuZm9jdXMoKTtcblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGFwaHJvZGl0ZVN0eWxlcyxcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGRpc2FibGVkLFxuXHRcdFx0aWQsXG5cdFx0XHRtdWx0aWxpbmUsXG5cdFx0XHRub2VkaXQsXG5cdFx0XHRzaXplLFxuXHRcdFx0Li4ucHJvcHNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdC8vIE5PVEUgcmV0dXJuIGEgZGlmZmVyZW50IGNvbXBvbmVudCBmb3IgYG5vZWRpdGBcblx0XHRpZiAobm9lZGl0KSByZXR1cm4gPElucHV0Tm9lZGl0IHsuLi50aGlzLnByb3BzfSAvPjtcblxuXHRcdGNvbnN0IHsgZm9ybUZpZWxkSWQsIGZvcm1MYXlvdXQgfSA9IHRoaXMuY29udGV4dDtcblxuXHRcdHByb3BzLmlkID0gaWQgfHwgZm9ybUZpZWxkSWQ7XG5cdFx0cHJvcHMuY2xhc3NOYW1lID0gY3NzKFxuXHRcdFx0Y2xhc3Nlcy5Gb3JtSW5wdXQsXG5cdFx0XHRjbGFzc2VzWydGb3JtSW5wdXRfX3NpemUtLScgKyBzaXplXSxcblx0XHRcdGRpc2FibGVkID8gY2xhc3Nlc1snRm9ybUlucHV0LS1kaXNhYmxlZCddIDogbnVsbCxcblx0XHRcdGZvcm1MYXlvdXQgPyBjbGFzc2VzWydGb3JtSW5wdXQtLWZvcm0tbGF5b3V0LScgKyBmb3JtTGF5b3V0XSA6IG51bGwsXG5cdFx0XHQuLi5jb25jYXRDbGFzc25hbWVzKGFwaHJvZGl0ZVN0eWxlcylcblx0XHQpO1xuXHRcdGlmIChjbGFzc05hbWUpIHtcblx0XHRcdHByb3BzLmNsYXNzTmFtZSArPSAoJyAnICsgY2xhc3NOYW1lKTtcblx0XHR9XG5cblx0XHRjb25zdCBzZXRSZWYgPSAobikgPT4gKHRoaXMudGFyZ2V0ID0gbik7XG5cdFx0Y29uc3QgVGFnID0gbXVsdGlsaW5lID8gJ3RleHRhcmVhJyA6ICdpbnB1dCc7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFRhZ1xuXHRcdFx0XHRyZWY9e3NldFJlZn1cblx0XHRcdFx0ZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuXHRcdFx0XHR7Li4ucHJvcHN9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cbn07XG5cbmNvbnN0IHN0eWxlc1NoYXBlID0ge1xuXHRfZGVmaW5pdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcblx0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Gb3JtSW5wdXQucHJvcFR5cGVzID0ge1xuXHRhcGhyb2RpdGVTdHlsZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZShzdHlsZXNTaGFwZSkpLFxuXHRcdFByb3BUeXBlcy5zaGFwZShzdHlsZXNTaGFwZSksXG5cdF0pLFxuXHRtdWx0aWxpbmU6IFByb3BUeXBlcy5ib29sLFxuXHRzaXplOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3NtYWxsJywgJ2xhcmdlJ10pLFxuXHR0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkZvcm1JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdHNpemU6ICdkZWZhdWx0Jyxcblx0dHlwZTogJ3RleHQnLFxufTtcbkZvcm1JbnB1dC5jb250ZXh0VHlwZXMgPSB7XG5cdGZvcm1MYXlvdXQ6IFByb3BUeXBlcy5vbmVPZihbJ2Jhc2ljJywgJ2hvcml6b250YWwnLCAnaW5saW5lJ10pLFxuXHRmb3JtRmllbGRJZDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUlucHV0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuaW1wb3J0IHsgZmFkZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbG9yJztcblxuLyogZXNsaW50IHF1b3RlLXByb3BzOiBbXCJlcnJvclwiLCBcImFzLW5lZWRlZFwiXSAqL1xuXG5mdW5jdGlvbiBGb3JtSW5wdXROb2VkaXQgKHtcblx0Y2xhc3NOYW1lLFxuXHRjb21wb25lbnQ6IENvbXBvbmVudCxcblx0Y3JvcFRleHQsXG5cdG11bHRpbGluZSxcblx0bm9lZGl0LCAvLyBOT1RFIG5vdCB1c2VkLCBqdXN0IHJlbW92ZWQgZnJvbSBwcm9wc1xuXHR0eXBlLFxuXHQuLi5wcm9wc1xufSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlcy5ub2VkaXQsXG5cdFx0Y3JvcFRleHQgPyBjbGFzc2VzLmNyb3BUZXh0IDogbnVsbCxcblx0XHRtdWx0aWxpbmUgPyBjbGFzc2VzLm11bHRpbGluZSA6IG51bGwsXG5cdFx0KHByb3BzLmhyZWYgfHwgcHJvcHMub25DbGljaykgPyBjbGFzc2VzLmFuY2hvciA6IG51bGwsXG5cdFx0Y2xhc3NOYW1lXG5cdCk7XG5cblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbn07XG5cbkZvcm1JbnB1dE5vZWRpdC5wcm9wVHlwZXMgPSB7XG5cdGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XHRQcm9wVHlwZXMuZnVuYyxcblx0XSksXG5cdGNyb3BUZXh0OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5Gb3JtSW5wdXROb2VkaXQuZGVmYXVsdFByb3BzID0ge1xuXHRjb21wb25lbnQ6ICdzcGFuJyxcbn07XG5cbmNvbnN0IGFuY2hvckhvdmVyQW5kRm9jdXNTdHlsZXMgPSB7XG5cdGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5jb2xvci5saW5rLCAxMCksXG5cdGJvcmRlckNvbG9yOiBmYWRlKHRoZW1lLmNvbG9yLmxpbmssIDEwKSxcblx0Y29sb3I6IHRoZW1lLmNvbG9yLmxpbmssXG5cdG91dGxpbmU6ICdub25lJyxcblx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxufTtcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcblx0bm9lZGl0OiB7XG5cdFx0YXBwZWFyYW5jZTogJ25vbmUnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUuaW5wdXQuYmFja2dyb3VuZC5ub2VkaXQsXG5cdFx0YmFja2dyb3VuZEltYWdlOiAnbm9uZScsXG5cdFx0Ym9yZGVyQ29sb3I6IHRoZW1lLmlucHV0LmJvcmRlci5jb2xvci5ub2VkaXQsXG5cdFx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5pbnB1dC5ib3JkZXIucmFkaXVzLFxuXHRcdGJvcmRlclN0eWxlOiAnc29saWQnLFxuXHRcdGJvcmRlcldpZHRoOiB0aGVtZS5pbnB1dC5ib3JkZXIud2lkdGgsXG5cdFx0Y29sb3I6IHRoZW1lLmNvbG9yLmdyYXk4MCxcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRoZWlnaHQ6IHRoZW1lLmlucHV0LmhlaWdodCxcblx0XHRsaW5lSGVpZ2h0OiB0aGVtZS5pbnB1dC5saW5lSGVpZ2h0LFxuXHRcdHBhZGRpbmc6IGAwICR7dGhlbWUuaW5wdXQucGFkZGluZ0hvcml6b250YWx9YCxcblx0XHR0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzJyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblxuXHRcdC8vIHByZXZlbnQgZW1wdHkgaW5wdXRzIGZyb20gY29sbGFwc2luZyBieSBhZGRpbmcgY29udGVudFxuXHRcdCc6ZW1wdHk6YmVmb3JlJzoge1xuXHRcdFx0Y29sb3I6IHRoZW1lLmNvbG9yLmdyYXk0MCxcblx0XHRcdGNvbnRlbnQ6ICdcIihubyB2YWx1ZSlcIicsXG5cdFx0fSxcblx0fSxcblxuXHRtdWx0aWxpbmU6IHtcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdGhlaWdodDogJ2F1dG8nLFxuXHRcdGxpbmVIZWlnaHQ6ICcxLjQnLFxuXHRcdHBhZGRpbmdCb3R0b206ICcwLjZlbScsXG5cdFx0cGFkZGluZ1RvcDogJzAuNmVtJyxcblx0fSxcblxuXHQvLyBpbmRpY2F0ZSBjbGlja2FiaWxpdHkgd2hlbiB1c2luZyBhbiBhbmNob3Jcblx0YW5jaG9yOiB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLmNvbG9yLmxpbmssIDUpLFxuXHRcdGJvcmRlckNvbG9yOiBmYWRlKHRoZW1lLmNvbG9yLmxpbmssIDEwKSxcblx0XHRjb2xvcjogdGhlbWUuY29sb3IubGluayxcblx0XHRtYXJnaW5SaWdodDogNSxcblx0XHRtaW5XaWR0aDogMCxcblx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXG5cdFx0Jzpob3Zlcic6IGFuY2hvckhvdmVyQW5kRm9jdXNTdHlsZXMsXG5cdFx0Jzpmb2N1cyc6IGFuY2hvckhvdmVyQW5kRm9jdXNTdHlsZXMsXG5cdH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSW5wdXROb2VkaXQ7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZvcm0gSW5wdXRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0J0Zvcm1JbnB1dCc6IHtcblx0XHQnYXBwZWFyYW5jZSc6ICdub25lJyxcblx0XHQnYmFja2dyb3VuZENvbG9yJzogdGhlbWUuaW5wdXQuYmFja2dyb3VuZC5kZWZhdWx0LFxuXHRcdCdiYWNrZ3JvdW5kSW1hZ2UnOiAnbm9uZScsXG5cdFx0J2JvcmRlckNvbG9yJzogdGhlbWUuaW5wdXQuYm9yZGVyLmNvbG9yLmRlZmF1bHQsXG5cdFx0J2JvcmRlclJhZGl1cyc6IHRoZW1lLmlucHV0LmJvcmRlci5yYWRpdXMsXG5cdFx0J2JvcmRlclN0eWxlJzogJ3NvbGlkJyxcblx0XHQnYm9yZGVyV2lkdGgnOiB0aGVtZS5pbnB1dC5ib3JkZXIud2lkdGgsXG5cdFx0J2JveFNoYWRvdyc6IHRoZW1lLmlucHV0LmJveFNoYWRvdyxcblx0XHQnY29sb3InOiAnaW5oZXJpdCcsIC8vIEZJWE1FXG5cdFx0J2Rpc3BsYXknOiAnYmxvY2snLFxuXHRcdCdoZWlnaHQnOiB0aGVtZS5pbnB1dC5oZWlnaHQsXG5cdFx0J2xpbmVIZWlnaHQnOiB0aGVtZS5pbnB1dC5saW5lSGVpZ2h0LFxuXHRcdCdwYWRkaW5nJzogYDAgJHt0aGVtZS5pbnB1dC5wYWRkaW5nSG9yaXpvbnRhbH1gLFxuXHRcdCd0cmFuc2l0aW9uJzogJ2JvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cycsXG5cdFx0J3dpZHRoJzogJzEwMCUnLFxuXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuaG92ZXIsXG5cdFx0XHRvdXRsaW5lOiAwLFxuXHRcdH0sXG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuZm9jdXMsXG5cdFx0XHRib3hTaGFkb3c6IHRoZW1lLmlucHV0LmJveFNoYWRvd0ZvY3VzLFxuXHRcdFx0b3V0bGluZTogMCxcblx0XHR9LFxuXHR9LFxuXHQnRm9ybUlucHV0LS1kaXNhYmxlZCc6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmlucHV0LmJhY2tncm91bmQuZGlzYWJsZWQsXG5cdFx0cG9pbnRlckV2ZW50czogJ25vbmUnLFxuXHR9LFxuXG5cdC8vIHNpemVzXG5cdCdGb3JtSW5wdXRfX3NpemUtLXNtYWxsJzoge1xuXHRcdGZvbnRTaXplOiB0aGVtZS5mb250LnNpemUuc21hbGwsXG5cdH0sXG5cdCdGb3JtSW5wdXRfX3NpemUtLWxhcmdlJzoge1xuXHRcdGZvbnRTaXplOiB0aGVtZS5mb250LnNpemUubGFyZ2UsXG5cdH0sXG59O1xuIiwiaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShzdHlsZXMpO1xuXG5mdW5jdGlvbiBGb3JtTGFiZWwgKHtcblx0YXBocm9kaXRlU3R5bGVzLFxuXHRjbGFzc05hbWUsXG5cdGNvbXBvbmVudDogQ29tcG9uZW50LFxuXHRjcm9wVGV4dCxcblx0aHRtbEZvcixcblx0Li4ucHJvcHNcbn0sXG57XG5cdGZvcm1GaWVsZElkLFxuXHRmb3JtTGF5b3V0LFxuXHRsYWJlbFdpZHRoLFxufSkge1xuXHRwcm9wcy5odG1sRm9yID0gaHRtbEZvciB8fCBmb3JtRmllbGRJZDtcblx0cHJvcHMuY2xhc3NOYW1lID0gY3NzKFxuXHRcdGNsYXNzZXMuRm9ybUxhYmVsLFxuXHRcdGZvcm1MYXlvdXQgPyBjbGFzc2VzWydGb3JtTGFiZWwtLWZvcm0tbGF5b3V0LScgKyBmb3JtTGF5b3V0XSA6IG51bGwsXG5cdFx0Y3JvcFRleHQgPyBjbGFzc2VzWydGb3JtTGFiZWwtLWNyb3AtdGV4dCddIDogbnVsbCxcblx0XHRhcGhyb2RpdGVTdHlsZXNcblx0KTtcblx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdHByb3BzLmNsYXNzTmFtZSArPSAoJyAnICsgY2xhc3NOYW1lKTtcblx0fVxuXHRpZiAobGFiZWxXaWR0aCkge1xuXHRcdHByb3BzLnN0eWxlID0ge1xuXHRcdFx0d2lkdGg6IGxhYmVsV2lkdGgsXG5cdFx0XHQuLi5wcm9wcy5zdHlsZSxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbn07XG5cbmNvbnN0IHN0eWxlc1NoYXBlID0ge1xuXHRfZGVmaW5pdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcblx0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Gb3JtTGFiZWwucHJvcFR5cGVzID0ge1xuXHRhcGhyb2RpdGVTdHlsZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZShzdHlsZXNTaGFwZSkpLFxuXHRcdFByb3BUeXBlcy5zaGFwZShzdHlsZXNTaGFwZSksXG5cdF0pLFxuXHRjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0UHJvcFR5cGVzLmZ1bmMsXG5cdF0pLFxuXHRjcm9wVGV4dDogUHJvcFR5cGVzLmJvb2wsXG59O1xuRm9ybUxhYmVsLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnbGFiZWwnLFxufTtcbkZvcm1MYWJlbC5jb250ZXh0VHlwZXMgPSB7XG5cdGZvcm1MYXlvdXQ6IFByb3BUeXBlcy5vbmVPZihbJ2Jhc2ljJywgJ2hvcml6b250YWwnLCAnaW5saW5lJ10pLFxuXHRmb3JtRmllbGRJZDogUHJvcFR5cGVzLnN0cmluZyxcblx0bGFiZWxXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLm51bWJlcixcblx0XHRQcm9wVHlwZXMuc3RyaW5nLFxuXHRdKSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUxhYmVsO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGb3JtIExhYmVsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdCdGb3JtTGFiZWwnOiB7XG5cdFx0Y29sb3I6IHRoZW1lLmZvcm0ubGFiZWwuY29sb3IsXG5cdFx0Zm9udFNpemU6IHRoZW1lLmZvcm0ubGFiZWwuZm9udFNpemUsXG5cdFx0Zm9udFdlaWdodDogdGhlbWUuZm9ybS5sYWJlbC5mb250V2VpZ2h0LFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpbkJvdHRvbTogJzAuNWVtJyxcblx0fSxcblxuXHQvLyB3aGVuIGluc2lkZSBhIGhvcml6b250YWwgZm9ybVxuXG5cdCdGb3JtTGFiZWwtLWZvcm0tbGF5b3V0LWhvcml6b250YWwnOiB7XG5cdFx0W2BAbWVkaWEgKG1pbi13aWR0aDogJHt0aGVtZS5icmVha3BvaW50LnRhYmxldExhbmRzY2FwZU1pbn0pYF06IHtcblx0XHRcdGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcblx0XHRcdGxpbmVIZWlnaHQ6IHRoZW1lLmNvbXBvbmVudC5saW5lSGVpZ2h0LCAvLyBmaXhcblx0XHRcdG1hcmdpbkJvdHRvbTogMCxcblx0XHRcdHBhZGRpbmdSaWdodDogNSxcblx0XHRcdHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuXHRcdFx0d2lkdGg6IHRoZW1lLmZvcm0ubGFiZWwud2lkdGgsXG5cdFx0fSxcblx0fSxcblxuXHQvLyBjcm9wIGxvbmcgdGV4dFxuXG5cdCdGb3JtTGFiZWwtLWNyb3AtdGV4dCc6IHtcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0dGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuXHRcdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuXHR9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBjc3MgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoc3R5bGVzKTtcblxuZnVuY3Rpb24gRm9ybU5vdGUgKHtcblx0Y2xhc3NOYW1lLFxuXHRjaGlsZHJlbixcblx0Y29tcG9uZW50OiBDb21wb25lbnQsXG5cdGh0bWwsXG5cdC4uLnByb3BzXG59KSB7XG5cdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhjbGFzc2VzLm5vdGUsIGNsYXNzTmFtZSk7XG5cblx0Ly8gUHJvcGVydHkgVmlvbGF0aW9uXG5cdGlmIChjaGlsZHJlbiAmJiBodG1sKSB7XG5cdFx0Y29uc29sZS5lcnJvcignV2FybmluZzogRm9ybU5vdGUgY2Fubm90IHJlbmRlciBgY2hpbGRyZW5gIGFuZCBgaHRtbGAuIFlvdSBtdXN0IHByb3ZpZGUgb25lIG9yIHRoZSBvdGhlci4nKTtcblx0fVxuXG5cdHJldHVybiBodG1sID8gKFxuXHRcdDxDb21wb25lbnQgey4uLnByb3BzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz5cblx0KSA6IChcblx0XHQ8Q29tcG9uZW50IHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQ29tcG9uZW50PlxuXHQpO1xufTtcbkZvcm1Ob3RlLnByb3BUeXBlcyA9IHtcblx0Y29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuZnVuYyxcblx0XHRQcm9wVHlwZXMuc3RyaW5nLFxuXHRdKSxcblx0aHRtbDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5Gb3JtTm90ZS5kZWZhdWx0UHJvcHMgPSB7XG5cdGNvbXBvbmVudDogJ2RpdicsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1Ob3RlO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGb3JtIE5vdGVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0bm90ZToge1xuXHRcdGNvbG9yOiB0aGVtZS5mb3JtLm5vdGUuY29sb3IsXG5cdFx0Zm9udFNpemU6IHRoZW1lLmZvcm0ubm90ZS5mb250U2l6ZSxcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcuc21hbGwsXG5cdH0sXG59O1xuIiwiaW1wb3J0IHsgU3R5bGVTaGVldCwgY3NzIH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoc3R5bGVzKTtcblxuY2xhc3MgRm9ybVNlbGVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlciAoKSB7XG5cdFx0Y29uc3QgeyBjaGlsZHJlbiwgaWQsIG9wdGlvbnMsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgZm9ybUZpZWxkSWQgfSA9IHRoaXMuY29udGV4dDtcblxuXHRcdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRcdGNsYXNzZXMuc2VsZWN0LFxuXHRcdFx0cHJvcHMuZGlzYWJsZWQgPyBjbGFzc2VzWydzZWxlY3QtLWRpc2FibGVkJ10gOiBudWxsXG5cdFx0KTtcblx0XHRwcm9wcy5pZCA9IGlkIHx8IGZvcm1GaWVsZElkO1xuXG5cdFx0Ly8gUHJvcGVydHkgVmlvbGF0aW9uXG5cdFx0aWYgKG9wdGlvbnMgJiYgY2hpbGRyZW4pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6IEZvcm1TZWxlY3QgY2Fubm90IHJlbmRlciBgY2hpbGRyZW5gIGFuZCBgb3B0aW9uc2AuIFlvdSBtdXN0IHByb3ZpZGUgb25lIG9yIHRoZSBvdGhlci4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmNvbnRhaW5lcil9PlxuXHRcdFx0XHR7b3B0aW9ucyA/IChcblx0XHRcdFx0XHQ8c2VsZWN0IHsuLi5wcm9wc30+e29wdGlvbnMubWFwKG9wdCA9PiAoXG5cdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17b3B0LnZhbHVlfSB2YWx1ZT17b3B0LnZhbHVlfT5cblx0XHRcdFx0XHRcdFx0e29wdC5sYWJlbH1cblx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHQpIDogPHNlbGVjdCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L3NlbGVjdD59XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuYXJyb3dzLCBwcm9wcy5kaXNhYmxlZCA/IGNsYXNzZXNbJ2Fycm93cy0tZGlzYWJsZWQnXSA6IG51bGwpfT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmFycm93LCBjbGFzc2VzLmFycm93VG9wKX0gLz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmFycm93LCBjbGFzc2VzLmFycm93Qm90dG9tKX0gLz5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcblxuRm9ybVNlbGVjdC5jb250ZXh0VHlwZXMgPSB7XG5cdGZvcm1GaWVsZElkOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkZvcm1TZWxlY3QucHJvcFR5cGVzID0ge1xuXHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0b3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoXG5cdFx0UmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRcdFx0dmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdFx0fSlcblx0KSxcblx0dmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5udW1iZXIsXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XSksXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1TZWxlY3Q7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZvcm0gU2VsZWN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyogZXNsaW50IHF1b3RlLXByb3BzOiBbXCJlcnJvclwiLCBcImFzLW5lZWRlZFwiXSAqL1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuaW1wb3J0IHsgZGFya2VuLCBsaWdodGVuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29sb3InO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdH0sXG5cblx0Ly8gc2VsZWN0IG5vZGVcblx0c2VsZWN0OiB7XG5cdFx0YXBwZWFyYW5jZTogJ25vbmUnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUuaW5wdXQuYmFja2dyb3VuZC5kZWZhdWx0LFxuXHRcdGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuXHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuZGVmYXVsdCxcblx0XHRib3JkZXJCb3R0b21Db2xvcjogZGFya2VuKHRoZW1lLmlucHV0LmJvcmRlci5jb2xvci5kZWZhdWx0LCA0KSxcblx0XHRib3JkZXJUb3BDb2xvcjogbGlnaHRlbih0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuZGVmYXVsdCwgNCksXG5cdFx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5pbnB1dC5ib3JkZXIucmFkaXVzLFxuXHRcdGJvcmRlclN0eWxlOiAnc29saWQnLFxuXHRcdGJvcmRlcldpZHRoOiB0aGVtZS5pbnB1dC5ib3JkZXIud2lkdGgsXG5cdFx0Ym94U2hhZG93OiB0aGVtZS5zZWxlY3QuYm94U2hhZG93LFxuXHRcdGNvbG9yOiAnaW5oZXJpdCcsIC8vIEZJWE1FXG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRoZWlnaHQ6IHRoZW1lLmlucHV0LmhlaWdodCxcblx0XHRsaW5lSGVpZ2h0OiB0aGVtZS5pbnB1dC5saW5lSGVpZ2h0LFxuXHRcdHBhZGRpbmc6IGAwICR7dGhlbWUuaW5wdXQucGFkZGluZ0hvcml6b250YWx9YCxcblx0XHR0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzJyxcblx0XHR3aWR0aDogJzEwMCUnLFxuXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuaG92ZXIsXG5cdFx0XHRvdXRsaW5lOiAwLFxuXHRcdH0sXG5cdFx0Jzpmb2N1cyc6IHtcblx0XHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuZm9jdXMsXG5cdFx0XHRib3hTaGFkb3c6IHRoZW1lLmlucHV0LmJveFNoYWRvd0ZvY3VzLFxuXHRcdFx0b3V0bGluZTogMCxcblx0XHR9LFxuXHR9LFxuXHQnc2VsZWN0LS1kaXNhYmxlZCc6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmlucHV0LmJhY2tncm91bmQuZGlzYWJsZWQsXG5cdFx0cG9pbnRlckV2ZW50czogJ25vbmUnLFxuXHR9LFxuXG5cdC8vIGFycm93c1xuXHRhcnJvd3M6IHtcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0aGVpZ2h0OiB0aGVtZS5pbnB1dC5oZWlnaHQsXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRyaWdodDogMCxcblx0XHR0b3A6IDAsXG5cdFx0d2lkdGg6IHRoZW1lLmlucHV0LmhlaWdodCxcblx0fSxcblx0YXJyb3c6IHtcblx0XHRib3JkZXJMZWZ0OiAnMC4zZW0gc29saWQgdHJhbnNwYXJlbnQnLFxuXHRcdGJvcmRlclJpZ2h0OiAnMC4zZW0gc29saWQgdHJhbnNwYXJlbnQnLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdGhlaWdodDogMCxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHR3aWR0aDogMCxcblx0XHR6SW5kZXg6IDEsXG5cdH0sXG5cdGFycm93VG9wOiB7XG5cdFx0Ym9yZGVyQm90dG9tOiAnMC4zZW0gc29saWQnLFxuXHRcdG1hcmdpbkJvdHRvbTogJzAuMWVtJyxcblx0fSxcblx0YXJyb3dCb3R0b206IHtcblx0XHRib3JkZXJUb3A6ICcwLjNlbSBzb2xpZCcsXG5cdFx0bWFyZ2luVG9wOiAnMC4xZW0nLFxuXHR9LFxufTtcbiIsImltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkYW5nZXI6IHRoZW1lLmdseXBoLmNvbG9yLmRhbmdlcixcblx0aW5oZXJpdDogdGhlbWUuZ2x5cGguY29sb3IuaW5oZXJpdCxcblx0aW52ZXJ0ZWQ6IHRoZW1lLmdseXBoLmNvbG9yLmludmVydGVkLFxuXHRwcmltYXJ5OiB0aGVtZS5nbHlwaC5jb2xvci5wcmltYXJ5LFxuXHRzdWNjZXNzOiB0aGVtZS5nbHlwaC5jb2xvci5zdWNjZXNzLFxuXHR3YXJuaW5nOiB0aGVtZS5nbHlwaC5jb2xvci53YXJuaW5nLFxufTtcbiIsImltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IG9jdGljb25zIGZyb20gJy4vb2N0aWNvbnMnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgc2l6ZXMgZnJvbSAnLi9zaXplcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHN0eWxlcyk7XG5cbi8vIEZJWE1FIHN0YXRpYyBvY3RpY29uIGNsYXNzZXMgbGVhbmluZyBvbiBFbGVtZW50YWwgdG8gYXZvaWQgZHVwbGljYXRlXG4vLyBmb250IGFuZCBDU1M7IGluZmxhdGluZyB0aGUgcHJvamVjdCBzaXplXG5cbmZ1bmN0aW9uIEdseXBoICh7XG5cdGFwaHJvZGl0ZVN0eWxlcyxcblx0Y2xhc3NOYW1lLFxuXHRjb2xvcixcblx0Y29tcG9uZW50OiBDb21wb25lbnQsXG5cdG5hbWUsXG5cdHNpemUsXG5cdHN0eWxlLFxuXHQuLi5wcm9wc1xufSkge1xuXHRjb25zdCBjb2xvcklzVmFsaWRUeXBlID0gT2JqZWN0LmtleXMoY29sb3JzKS5pbmNsdWRlcyhjb2xvcik7XG5cdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRjbGFzc2VzLmdseXBoLFxuXHRcdGNvbG9ySXNWYWxpZFR5cGUgJiYgY2xhc3Nlc1snY29sb3JfXycgKyBjb2xvcl0sXG5cdFx0Y2xhc3Nlc1snc2l6ZV9fJyArIHNpemVdLFxuXHRcdGFwaHJvZGl0ZVN0eWxlc1xuXHQpICsgYCAke29jdGljb25zW25hbWVdfWA7XG5cdGlmIChjbGFzc05hbWUpIHtcblx0XHRwcm9wcy5jbGFzc05hbWUgKz0gKCcgJyArIGNsYXNzTmFtZSk7XG5cdH1cblxuXHQvLyBzdXBwb3J0IHJhbmRvbSBjb2xvciBzdHJpbmdzXG5cdHByb3BzLnN0eWxlID0ge1xuXHRcdGNvbG9yOiAhY29sb3JJc1ZhbGlkVHlwZSA/IGNvbG9yIDogbnVsbCxcblx0XHQuLi5zdHlsZSxcblx0fTtcblxuXHRyZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xufTtcblxuR2x5cGgucHJvcFR5cGVzID0ge1xuXHRhcGhyb2RpdGVTdHlsZXM6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0X2RlZmluaXRpb246IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0X25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdH0pLFxuXHRjb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0UHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKGNvbG9ycykpLFxuXHRcdFByb3BUeXBlcy5zdHJpbmcsIC8vIHN1cHBvcnQgcmFuZG9tIGNvbG9yIHN0cmluZ3Ncblx0XSksXG5cdG5hbWU6IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhvY3RpY29ucykpLmlzUmVxdWlyZWQsXG5cdHNpemU6IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhzaXplcykpLFxufTtcbkdseXBoLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnaScsXG5cdGNvbG9yOiAnaW5oZXJpdCcsXG5cdHNpemU6ICdzbWFsbCcsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdseXBoO1xuIiwiLyogZXNsaW50IHF1b3RlLXByb3BzOiBbXCJlcnJvclwiLCBcImFzLW5lZWRlZFwiXSAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YWxlcnQ6ICdvY3RpY29uIG9jdGljb24tYWxlcnQnLFxuXHQnYXJyb3ctZG93bic6ICdvY3RpY29uIG9jdGljb24tYXJyb3ctZG93bicsXG5cdCdhcnJvdy1sZWZ0JzogJ29jdGljb24gb2N0aWNvbi1hcnJvdy1sZWZ0Jyxcblx0J2Fycm93LXJpZ2h0JzogJ29jdGljb24gb2N0aWNvbi1hcnJvdy1yaWdodCcsXG5cdCdhcnJvdy1zbWFsbC1kb3duJzogJ29jdGljb24gb2N0aWNvbi1hcnJvdy1zbWFsbC1kb3duJyxcblx0J2Fycm93LXNtYWxsLWxlZnQnOiAnb2N0aWNvbiBvY3RpY29uLWFycm93LXNtYWxsLWxlZnQnLFxuXHQnYXJyb3ctc21hbGwtcmlnaHQnOiAnb2N0aWNvbiBvY3RpY29uLWFycm93LXNtYWxsLXJpZ2h0Jyxcblx0J2Fycm93LXNtYWxsLXVwJzogJ29jdGljb24gb2N0aWNvbi1hcnJvdy1zbWFsbC11cCcsXG5cdCdhcnJvdy11cCc6ICdvY3RpY29uIG9jdGljb24tYXJyb3ctdXAnLFxuXHRtaWNyb3Njb3BlOiAnb2N0aWNvbiBvY3RpY29uLW1pY3Jvc2NvcGUnLFxuXHRiZWFrZXI6ICdvY3RpY29uIG9jdGljb24tYmVha2VyJyxcblx0YmVsbDogJ29jdGljb24gb2N0aWNvbi1iZWxsJyxcblx0Ym9vazogJ29jdGljb24gb2N0aWNvbi1ib29rJyxcblx0Ym9va21hcms6ICdvY3RpY29uIG9jdGljb24tYm9va21hcmsnLFxuXHRicmllZmNhc2U6ICdvY3RpY29uIG9jdGljb24tYnJpZWZjYXNlJyxcblx0YnJvYWRjYXN0OiAnb2N0aWNvbiBvY3RpY29uLWJyb2FkY2FzdCcsXG5cdGJyb3dzZXI6ICdvY3RpY29uIG9jdGljb24tYnJvd3NlcicsXG5cdGJ1ZzogJ29jdGljb24gb2N0aWNvbi1idWcnLFxuXHRjYWxlbmRhcjogJ29jdGljb24gb2N0aWNvbi1jYWxlbmRhcicsXG5cdGNoZWNrOiAnb2N0aWNvbiBvY3RpY29uLWNoZWNrJyxcblx0Y2hlY2tsaXN0OiAnb2N0aWNvbiBvY3RpY29uLWNoZWNrbGlzdCcsXG5cdCdjaGV2cm9uLWRvd24nOiAnb2N0aWNvbiBvY3RpY29uLWNoZXZyb24tZG93bicsXG5cdCdjaGV2cm9uLWxlZnQnOiAnb2N0aWNvbiBvY3RpY29uLWNoZXZyb24tbGVmdCcsXG5cdCdjaGV2cm9uLXJpZ2h0JzogJ29jdGljb24gb2N0aWNvbi1jaGV2cm9uLXJpZ2h0Jyxcblx0J2NoZXZyb24tdXAnOiAnb2N0aWNvbiBvY3RpY29uLWNoZXZyb24tdXAnLFxuXHQnY2lyY2xlLXNsYXNoJzogJ29jdGljb24gb2N0aWNvbi1jaXJjbGUtc2xhc2gnLFxuXHQnY2lyY3VpdC1ib2FyZCc6ICdvY3RpY29uIG9jdGljb24tY2lyY3VpdC1ib2FyZCcsXG5cdGNsaXBweTogJ29jdGljb24gb2N0aWNvbi1jbGlwcHknLFxuXHRjbG9jazogJ29jdGljb24gb2N0aWNvbi1jbG9jaycsXG5cdCdjbG91ZC1kb3dubG9hZCc6ICdvY3RpY29uIG9jdGljb24tY2xvdWQtZG93bmxvYWQnLFxuXHQnY2xvdWQtdXBsb2FkJzogJ29jdGljb24gb2N0aWNvbi1jbG91ZC11cGxvYWQnLFxuXHRjb2RlOiAnb2N0aWNvbiBvY3RpY29uLWNvZGUnLFxuXHQnY29sb3ItbW9kZSc6ICdvY3RpY29uIG9jdGljb24tY29sb3ItbW9kZScsXG5cdCdjb21tZW50LWFkZCc6ICdvY3RpY29uIG9jdGljb24tY29tbWVudC1hZGQnLFxuXHRjb21tZW50OiAnb2N0aWNvbiBvY3RpY29uLWNvbW1lbnQnLFxuXHQnY29tbWVudC1kaXNjdXNzaW9uJzogJ29jdGljb24gb2N0aWNvbi1jb21tZW50LWRpc2N1c3Npb24nLFxuXHQnY3JlZGl0LWNhcmQnOiAnb2N0aWNvbiBvY3RpY29uLWNyZWRpdC1jYXJkJyxcblx0ZGFzaDogJ29jdGljb24gb2N0aWNvbi1kYXNoJyxcblx0ZGFzaGJvYXJkOiAnb2N0aWNvbiBvY3RpY29uLWRhc2hib2FyZCcsXG5cdGRhdGFiYXNlOiAnb2N0aWNvbiBvY3RpY29uLWRhdGFiYXNlJyxcblx0Y2xvbmU6ICdvY3RpY29uIG9jdGljb24tY2xvbmUnLFxuXHQnZGVza3RvcC1kb3dubG9hZCc6ICdvY3RpY29uIG9jdGljb24tZGVza3RvcC1kb3dubG9hZCcsXG5cdCdkZXZpY2UtY2FtZXJhJzogJ29jdGljb24gb2N0aWNvbi1kZXZpY2UtY2FtZXJhJyxcblx0J2RldmljZS1jYW1lcmEtdmlkZW8nOiAnb2N0aWNvbiBvY3RpY29uLWRldmljZS1jYW1lcmEtdmlkZW8nLFxuXHQnZGV2aWNlLWRlc2t0b3AnOiAnb2N0aWNvbiBvY3RpY29uLWRldmljZS1kZXNrdG9wJyxcblx0J2RldmljZS1tb2JpbGUnOiAnb2N0aWNvbiBvY3RpY29uLWRldmljZS1tb2JpbGUnLFxuXHRkaWZmOiAnb2N0aWNvbiBvY3RpY29uLWRpZmYnLFxuXHQnZGlmZi1hZGRlZCc6ICdvY3RpY29uIG9jdGljb24tZGlmZi1hZGRlZCcsXG5cdCdkaWZmLWlnbm9yZWQnOiAnb2N0aWNvbiBvY3RpY29uLWRpZmYtaWdub3JlZCcsXG5cdCdkaWZmLW1vZGlmaWVkJzogJ29jdGljb24gb2N0aWNvbi1kaWZmLW1vZGlmaWVkJyxcblx0J2RpZmYtcmVtb3ZlZCc6ICdvY3RpY29uIG9jdGljb24tZGlmZi1yZW1vdmVkJyxcblx0J2RpZmYtcmVuYW1lZCc6ICdvY3RpY29uIG9jdGljb24tZGlmZi1yZW5hbWVkJyxcblx0ZWxsaXBzaXM6ICdvY3RpY29uIG9jdGljb24tZWxsaXBzaXMnLFxuXHQnZXllLXVud2F0Y2gnOiAnb2N0aWNvbiBvY3RpY29uLWV5ZS11bndhdGNoJyxcblx0J2V5ZS13YXRjaCc6ICdvY3RpY29uIG9jdGljb24tZXllLXdhdGNoJyxcblx0ZXllOiAnb2N0aWNvbiBvY3RpY29uLWV5ZScsXG5cdCdmaWxlLWJpbmFyeSc6ICdvY3RpY29uIG9jdGljb24tZmlsZS1iaW5hcnknLFxuXHQnZmlsZS1jb2RlJzogJ29jdGljb24gb2N0aWNvbi1maWxlLWNvZGUnLFxuXHQnZmlsZS1kaXJlY3RvcnknOiAnb2N0aWNvbiBvY3RpY29uLWZpbGUtZGlyZWN0b3J5Jyxcblx0J2ZpbGUtbWVkaWEnOiAnb2N0aWNvbiBvY3RpY29uLWZpbGUtbWVkaWEnLFxuXHQnZmlsZS1wZGYnOiAnb2N0aWNvbiBvY3RpY29uLWZpbGUtcGRmJyxcblx0J2ZpbGUtc3VibW9kdWxlJzogJ29jdGljb24gb2N0aWNvbi1maWxlLXN1Ym1vZHVsZScsXG5cdCdmaWxlLXN5bWxpbmstZGlyZWN0b3J5JzogJ29jdGljb24gb2N0aWNvbi1maWxlLXN5bWxpbmstZGlyZWN0b3J5Jyxcblx0J2ZpbGUtc3ltbGluay1maWxlJzogJ29jdGljb24gb2N0aWNvbi1maWxlLXN5bWxpbmstZmlsZScsXG5cdCdmaWxlLXRleHQnOiAnb2N0aWNvbiBvY3RpY29uLWZpbGUtdGV4dCcsXG5cdCdmaWxlLXppcCc6ICdvY3RpY29uIG9jdGljb24tZmlsZS16aXAnLFxuXHRmbGFtZTogJ29jdGljb24gb2N0aWNvbi1mbGFtZScsXG5cdGZvbGQ6ICdvY3RpY29uIG9jdGljb24tZm9sZCcsXG5cdGdlYXI6ICdvY3RpY29uIG9jdGljb24tZ2VhcicsXG5cdGdpZnQ6ICdvY3RpY29uIG9jdGljb24tZ2lmdCcsXG5cdGdpc3Q6ICdvY3RpY29uIG9jdGljb24tZ2lzdCcsXG5cdCdnaXN0LXNlY3JldCc6ICdvY3RpY29uIG9jdGljb24tZ2lzdC1zZWNyZXQnLFxuXHQnZ2l0LWJyYW5jaC1jcmVhdGUnOiAnb2N0aWNvbiBvY3RpY29uLWdpdC1icmFuY2gtY3JlYXRlJyxcblx0J2dpdC1icmFuY2gtZGVsZXRlJzogJ29jdGljb24gb2N0aWNvbi1naXQtYnJhbmNoLWRlbGV0ZScsXG5cdCdnaXQtYnJhbmNoJzogJ29jdGljb24gb2N0aWNvbi1naXQtYnJhbmNoJyxcblx0J2dpdC1jb21taXQnOiAnb2N0aWNvbiBvY3RpY29uLWdpdC1jb21taXQnLFxuXHQnZ2l0LWNvbXBhcmUnOiAnb2N0aWNvbiBvY3RpY29uLWdpdC1jb21wYXJlJyxcblx0J2dpdC1tZXJnZSc6ICdvY3RpY29uIG9jdGljb24tZ2l0LW1lcmdlJyxcblx0J2dpdC1wdWxsLXJlcXVlc3QtYWJhbmRvbmVkJzogJ29jdGljb24gb2N0aWNvbi1naXQtcHVsbC1yZXF1ZXN0LWFiYW5kb25lZCcsXG5cdCdnaXQtcHVsbC1yZXF1ZXN0JzogJ29jdGljb24gb2N0aWNvbi1naXQtcHVsbC1yZXF1ZXN0Jyxcblx0Z2xvYmU6ICdvY3RpY29uIG9jdGljb24tZ2xvYmUnLFxuXHRncmFwaDogJ29jdGljb24gb2N0aWNvbi1ncmFwaCcsXG5cdGhlYXJ0OiAnb2N0aWNvbiBvY3RpY29uLWhlYXJ0Jyxcblx0aGlzdG9yeTogJ29jdGljb24gb2N0aWNvbi1oaXN0b3J5Jyxcblx0aG9tZTogJ29jdGljb24gb2N0aWNvbi1ob21lJyxcblx0J2hvcml6b250YWwtcnVsZSc6ICdvY3RpY29uIG9jdGljb24taG9yaXpvbnRhbC1ydWxlJyxcblx0aHVib3Q6ICdvY3RpY29uIG9jdGljb24taHVib3QnLFxuXHRpbmJveDogJ29jdGljb24gb2N0aWNvbi1pbmJveCcsXG5cdGluZm86ICdvY3RpY29uIG9jdGljb24taW5mbycsXG5cdCdpc3N1ZS1jbG9zZWQnOiAnb2N0aWNvbiBvY3RpY29uLWlzc3VlLWNsb3NlZCcsXG5cdCdpc3N1ZS1vcGVuZWQnOiAnb2N0aWNvbiBvY3RpY29uLWlzc3VlLW9wZW5lZCcsXG5cdCdpc3N1ZS1yZW9wZW5lZCc6ICdvY3RpY29uIG9jdGljb24taXNzdWUtcmVvcGVuZWQnLFxuXHRqZXJzZXk6ICdvY3RpY29uIG9jdGljb24tamVyc2V5Jyxcblx0a2V5OiAnb2N0aWNvbiBvY3RpY29uLWtleScsXG5cdGtleWJvYXJkOiAnb2N0aWNvbiBvY3RpY29uLWtleWJvYXJkJyxcblx0bGF3OiAnb2N0aWNvbiBvY3RpY29uLWxhdycsXG5cdCdsaWdodC1idWxiJzogJ29jdGljb24gb2N0aWNvbi1saWdodC1idWxiJyxcblx0bGluazogJ29jdGljb24gb2N0aWNvbi1saW5rJyxcblx0J2xpbmstZXh0ZXJuYWwnOiAnb2N0aWNvbiBvY3RpY29uLWxpbmstZXh0ZXJuYWwnLFxuXHQnbGlzdC1vcmRlcmVkJzogJ29jdGljb24gb2N0aWNvbi1saXN0LW9yZGVyZWQnLFxuXHQnbGlzdC11bm9yZGVyZWQnOiAnb2N0aWNvbiBvY3RpY29uLWxpc3QtdW5vcmRlcmVkJyxcblx0bG9jYXRpb246ICdvY3RpY29uIG9jdGljb24tbG9jYXRpb24nLFxuXHQnZ2lzdC1wcml2YXRlJzogJ29jdGljb24gb2N0aWNvbi1naXN0LXByaXZhdGUnLFxuXHQnbWlycm9yLXByaXZhdGUnOiAnb2N0aWNvbiBvY3RpY29uLW1pcnJvci1wcml2YXRlJyxcblx0J2dpdC1mb3JrLXByaXZhdGUnOiAnb2N0aWNvbiBvY3RpY29uLWdpdC1mb3JrLXByaXZhdGUnLFxuXHRsb2NrOiAnb2N0aWNvbiBvY3RpY29uLWxvY2snLFxuXHQnbG9nby1naXRodWInOiAnb2N0aWNvbiBvY3RpY29uLWxvZ28tZ2l0aHViJyxcblx0bWFpbDogJ29jdGljb24gb2N0aWNvbi1tYWlsJyxcblx0J21haWwtcmVhZCc6ICdvY3RpY29uIG9jdGljb24tbWFpbC1yZWFkJyxcblx0J21haWwtcmVwbHknOiAnb2N0aWNvbiBvY3RpY29uLW1haWwtcmVwbHknLFxuXHQnbWFyay1naXRodWInOiAnb2N0aWNvbiBvY3RpY29uLW1hcmstZ2l0aHViJyxcblx0bWFya2Rvd246ICdvY3RpY29uIG9jdGljb24tbWFya2Rvd24nLFxuXHRtZWdhcGhvbmU6ICdvY3RpY29uIG9jdGljb24tbWVnYXBob25lJyxcblx0bWVudGlvbjogJ29jdGljb24gb2N0aWNvbi1tZW50aW9uJyxcblx0bWlsZXN0b25lOiAnb2N0aWNvbiBvY3RpY29uLW1pbGVzdG9uZScsXG5cdCdtaXJyb3ItcHVibGljJzogJ29jdGljb24gb2N0aWNvbi1taXJyb3ItcHVibGljJyxcblx0bWlycm9yOiAnb2N0aWNvbiBvY3RpY29uLW1pcnJvcicsXG5cdCdtb3J0YXItYm9hcmQnOiAnb2N0aWNvbiBvY3RpY29uLW1vcnRhci1ib2FyZCcsXG5cdG11dGU6ICdvY3RpY29uIG9jdGljb24tbXV0ZScsXG5cdCduby1uZXdsaW5lJzogJ29jdGljb24gb2N0aWNvbi1uby1uZXdsaW5lJyxcblx0b2N0b2ZhY2U6ICdvY3RpY29uIG9jdGljb24tb2N0b2ZhY2UnLFxuXHRvcmdhbml6YXRpb246ICdvY3RpY29uIG9jdGljb24tb3JnYW5pemF0aW9uJyxcblx0cGFja2FnZTogJ29jdGljb24gb2N0aWNvbi1wYWNrYWdlJyxcblx0cGFpbnRjYW46ICdvY3RpY29uIG9jdGljb24tcGFpbnRjYW4nLFxuXHRwZW5jaWw6ICdvY3RpY29uIG9jdGljb24tcGVuY2lsJyxcblx0J3BlcnNvbi1hZGQnOiAnb2N0aWNvbiBvY3RpY29uLXBlcnNvbi1hZGQnLFxuXHQncGVyc29uLWZvbGxvdyc6ICdvY3RpY29uIG9jdGljb24tcGVyc29uLWZvbGxvdycsXG5cdHBlcnNvbjogJ29jdGljb24gb2N0aWNvbi1wZXJzb24nLFxuXHRwaW46ICdvY3RpY29uIG9jdGljb24tcGluJyxcblx0cGx1ZzogJ29jdGljb24gb2N0aWNvbi1wbHVnJyxcblx0J3JlcG8tY3JlYXRlJzogJ29jdGljb24gb2N0aWNvbi1yZXBvLWNyZWF0ZScsXG5cdCdnaXN0LW5ldyc6ICdvY3RpY29uIG9jdGljb24tZ2lzdC1uZXcnLFxuXHQnZmlsZS1kaXJlY3RvcnktY3JlYXRlJzogJ29jdGljb24gb2N0aWNvbi1maWxlLWRpcmVjdG9yeS1jcmVhdGUnLFxuXHQnZmlsZS1hZGQnOiAnb2N0aWNvbiBvY3RpY29uLWZpbGUtYWRkJyxcblx0cGx1czogJ29jdGljb24gb2N0aWNvbi1wbHVzJyxcblx0J3ByaW1pdGl2ZS1kb3QnOiAnb2N0aWNvbiBvY3RpY29uLXByaW1pdGl2ZS1kb3QnLFxuXHQncHJpbWl0aXZlLXNxdWFyZSc6ICdvY3RpY29uIG9jdGljb24tcHJpbWl0aXZlLXNxdWFyZScsXG5cdHB1bHNlOiAnb2N0aWNvbiBvY3RpY29uLXB1bHNlJyxcblx0cXVlc3Rpb246ICdvY3RpY29uIG9jdGljb24tcXVlc3Rpb24nLFxuXHRxdW90ZTogJ29jdGljb24gb2N0aWNvbi1xdW90ZScsXG5cdCdyYWRpby10b3dlcic6ICdvY3RpY29uIG9jdGljb24tcmFkaW8tdG93ZXInLFxuXHQncmVwby1kZWxldGUnOiAnb2N0aWNvbiBvY3RpY29uLXJlcG8tZGVsZXRlJyxcblx0cmVwbzogJ29jdGljb24gb2N0aWNvbi1yZXBvJyxcblx0J3JlcG8tY2xvbmUnOiAnb2N0aWNvbiBvY3RpY29uLXJlcG8tY2xvbmUnLFxuXHQncmVwby1mb3JjZS1wdXNoJzogJ29jdGljb24gb2N0aWNvbi1yZXBvLWZvcmNlLXB1c2gnLFxuXHQnZ2lzdC1mb3JrJzogJ29jdGljb24gb2N0aWNvbi1naXN0LWZvcmsnLFxuXHQncmVwby1mb3JrZWQnOiAnb2N0aWNvbiBvY3RpY29uLXJlcG8tZm9ya2VkJyxcblx0J3JlcG8tcHVsbCc6ICdvY3RpY29uIG9jdGljb24tcmVwby1wdWxsJyxcblx0J3JlcG8tcHVzaCc6ICdvY3RpY29uIG9jdGljb24tcmVwby1wdXNoJyxcblx0cm9ja2V0OiAnb2N0aWNvbiBvY3RpY29uLXJvY2tldCcsXG5cdHJzczogJ29jdGljb24gb2N0aWNvbi1yc3MnLFxuXHRydWJ5OiAnb2N0aWNvbiBvY3RpY29uLXJ1YnknLFxuXHQnc2NyZWVuLWZ1bGwnOiAnb2N0aWNvbiBvY3RpY29uLXNjcmVlbi1mdWxsJyxcblx0J3NjcmVlbi1ub3JtYWwnOiAnb2N0aWNvbiBvY3RpY29uLXNjcmVlbi1ub3JtYWwnLFxuXHQnc2VhcmNoLXNhdmUnOiAnb2N0aWNvbiBvY3RpY29uLXNlYXJjaC1zYXZlJyxcblx0c2VhcmNoOiAnb2N0aWNvbiBvY3RpY29uLXNlYXJjaCcsXG5cdHNlcnZlcjogJ29jdGljb24gb2N0aWNvbi1zZXJ2ZXInLFxuXHRzZXR0aW5nczogJ29jdGljb24gb2N0aWNvbi1zZXR0aW5ncycsXG5cdHNoaWVsZDogJ29jdGljb24gb2N0aWNvbi1zaGllbGQnLFxuXHQnbG9nLWluJzogJ29jdGljb24gb2N0aWNvbi1sb2ctaW4nLFxuXHQnc2lnbi1pbic6ICdvY3RpY29uIG9jdGljb24tc2lnbi1pbicsXG5cdCdsb2ctb3V0JzogJ29jdGljb24gb2N0aWNvbi1sb2ctb3V0Jyxcblx0J3NpZ24tb3V0JzogJ29jdGljb24gb2N0aWNvbi1zaWduLW91dCcsXG5cdHNxdWlycmVsOiAnb2N0aWNvbiBvY3RpY29uLXNxdWlycmVsJyxcblx0J3N0YXItYWRkJzogJ29jdGljb24gb2N0aWNvbi1zdGFyLWFkZCcsXG5cdCdzdGFyLWRlbGV0ZSc6ICdvY3RpY29uIG9jdGljb24tc3Rhci1kZWxldGUnLFxuXHRzdGFyOiAnb2N0aWNvbiBvY3RpY29uLXN0YXInLFxuXHRzdG9wOiAnb2N0aWNvbiBvY3RpY29uLXN0b3AnLFxuXHQncmVwby1zeW5jJzogJ29jdGljb24gb2N0aWNvbi1yZXBvLXN5bmMnLFxuXHRzeW5jOiAnb2N0aWNvbiBvY3RpY29uLXN5bmMnLFxuXHQndGFnLXJlbW92ZSc6ICdvY3RpY29uIG9jdGljb24tdGFnLXJlbW92ZScsXG5cdCd0YWctYWRkJzogJ29jdGljb24gb2N0aWNvbi10YWctYWRkJyxcblx0dGFnOiAnb2N0aWNvbiBvY3RpY29uLXRhZycsXG5cdHRlbGVzY29wZTogJ29jdGljb24gb2N0aWNvbi10ZWxlc2NvcGUnLFxuXHR0ZXJtaW5hbDogJ29jdGljb24gb2N0aWNvbi10ZXJtaW5hbCcsXG5cdCd0aHJlZS1iYXJzJzogJ29jdGljb24gb2N0aWNvbi10aHJlZS1iYXJzJyxcblx0dGh1bWJzZG93bjogJ29jdGljb24gb2N0aWNvbi10aHVtYnNkb3duJyxcblx0dGh1bWJzdXA6ICdvY3RpY29uIG9jdGljb24tdGh1bWJzdXAnLFxuXHR0b29sczogJ29jdGljb24gb2N0aWNvbi10b29scycsXG5cdHRyYXNoY2FuOiAnb2N0aWNvbiBvY3RpY29uLXRyYXNoY2FuJyxcblx0J3RyaWFuZ2xlLWRvd24nOiAnb2N0aWNvbiBvY3RpY29uLXRyaWFuZ2xlLWRvd24nLFxuXHQndHJpYW5nbGUtbGVmdCc6ICdvY3RpY29uIG9jdGljb24tdHJpYW5nbGUtbGVmdCcsXG5cdCd0cmlhbmdsZS1yaWdodCc6ICdvY3RpY29uIG9jdGljb24tdHJpYW5nbGUtcmlnaHQnLFxuXHQndHJpYW5nbGUtdXAnOiAnb2N0aWNvbiBvY3RpY29uLXRyaWFuZ2xlLXVwJyxcblx0dW5mb2xkOiAnb2N0aWNvbiBvY3RpY29uLXVuZm9sZCcsXG5cdHVubXV0ZTogJ29jdGljb24gb2N0aWNvbi11bm11dGUnLFxuXHR2ZXJzaW9uczogJ29jdGljb24gb2N0aWNvbi12ZXJzaW9ucycsXG5cdHdhdGNoOiAnb2N0aWNvbiBvY3RpY29uLXdhdGNoJyxcblx0J3JlbW92ZS1jbG9zZSc6ICdvY3RpY29uIG9jdGljb24tcmVtb3ZlLWNsb3NlJyxcblx0eDogJ29jdGljb24gb2N0aWNvbi14Jyxcblx0emFwOiAnb2N0aWNvbiBvY3RpY29uLXphcCcsXG59O1xuIiwiaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHNtYWxsOiB0aGVtZS5nbHlwaC5zaXplLnNtYWxsLFxuXHRtZWRpdW06IHRoZW1lLmdseXBoLnNpemUubWVkaXVtLFxuXHRsYXJnZTogdGhlbWUuZ2x5cGguc2l6ZS5sYXJnZSxcbn07XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdseXBoXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgc2l6ZXMgZnJvbSAnLi9zaXplcyc7XG5cbi8vIFByZXBhcmUgdmFyaWFudHNcbmNvbnN0IGNvbG9yVmFyaWFudHMgPSB7fTtcbk9iamVjdC5rZXlzKGNvbG9ycykuZm9yRWFjaChjb2xvciA9PiB7XG5cdGNvbG9yVmFyaWFudHNbYGNvbG9yX18ke2NvbG9yfWBdID0ge1xuXHRcdGNvbG9yOiBjb2xvcnNbY29sb3JdLFxuXHR9O1xufSk7XG5cbi8vIFByZXBhcmUgc2l6ZXNcbmNvbnN0IHNpemVWYXJpYW50cyA9IHt9O1xuT2JqZWN0LmtleXMoc2l6ZXMpLmZvckVhY2goc2l6ZSA9PiB7XG5cdHNpemVWYXJpYW50c1tgc2l6ZV9fJHtzaXplfWBdID0ge1xuXHRcdGZvbnRTaXplOiBzaXplc1tzaXplXSxcblx0fTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Z2x5cGg6IHt9LFxuXG5cdC8vIENvbG9yc1xuXHQuLi5jb2xvclZhcmlhbnRzLFxuXG5cdC8vIFNpemVzXG5cdC4uLnNpemVWYXJpYW50cyxcbn07XG4iLCIvKiBlc2xpbnQgcXVvdGUtcHJvcHM6IFtcImVycm9yXCIsIFwiYXMtbmVlZGVkXCJdICovXG5cbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgR2x5cGggZnJvbSAnLi4vR2x5cGgnO1xuXG5mdW5jdGlvbiBHbHlwaEJ1dHRvbiAoe1xuXHRjaGlsZHJlbixcblx0Z2x5cGgsXG5cdGdseXBoQ29sb3IsXG5cdGdseXBoU2l6ZSxcblx0Z2x5cGhTdHlsZSxcblx0cG9zaXRpb24sXG5cdC4uLnByb3BzXG59KSB7XG5cdGNvbnN0IGlzRGVmYXVsdCA9IHBvc2l0aW9uID09PSAnZGVmYXVsdCc7XG5cdGNvbnN0IGlzTGVmdCA9IHBvc2l0aW9uID09PSAnbGVmdCc7XG5cdGNvbnN0IGlzUmlnaHQgPSBwb3NpdGlvbiA9PT0gJ3JpZ2h0JztcblxuXHRjb25zdCBvZmZzZXQgPSB7fTtcblx0aWYgKGlzTGVmdCkgb2Zmc2V0Lm1hcmdpblJpZ2h0ID0gJzAuNWVtJztcblx0aWYgKGlzUmlnaHQpIG9mZnNldC5tYXJnaW5MZWZ0ID0gJzAuNWVtJztcblxuXHRjb25zdCBnbHlwaFN0eWxlcyA9IHtcblx0XHQuLi5vZmZzZXQsXG5cdFx0Li4uZ2x5cGhTdHlsZSxcblx0fTtcblxuXHRjb25zdCBpY29uID0gKFxuXHRcdDxHbHlwaFxuXHRcdFx0YXBocm9kaXRlU3R5bGVzPXtjbGFzc2VzLmdseXBofVxuXHRcdFx0Y29sb3I9e2dseXBoQ29sb3J9XG5cdFx0XHRuYW1lPXtnbHlwaH1cblx0XHRcdHNpemU9e2dseXBoU2l6ZX1cblx0XHRcdHN0eWxlPXtnbHlwaFN0eWxlc31cblx0XHQvPlxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PEJ1dHRvbiB7Li4ucHJvcHN9PlxuXHRcdFx0eyhpc0RlZmF1bHQgfHwgaXNMZWZ0KSAmJiBpY29ufVxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0e2lzUmlnaHQgJiYgaWNvbn1cblx0XHQ8L0J1dHRvbj5cblx0KTtcbn07XG5cbi8vIEZvciBwcm9wcyBcImdseXBoXCIsIFwiZ2x5cGhDb2xvclwiLCBhbmQgXCJnbHlwaFNpemVcIjpcbi8vIHByb3AgdHlwZSB2YWxpZGF0aW9uIHdpbGwgb2NjdXIgd2l0aGluIHRoZSBHbHlwaCBjb21wb25lbnQsIG5vIG5lZWQgdG9cbi8vIGR1cGxpY2F0ZSwganVzdCBwYXNzIGl0IHRocm91Z2guXG5HbHlwaEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG5cdGdseXBoOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRnbHlwaENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRnbHlwaFNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGdseXBoU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cdHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2xlZnQnLCAncmlnaHQnXSksXG59O1xuR2x5cGhCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuXHRnbHlwaFN0eWxlOiB7fSxcblx0cG9zaXRpb246ICdkZWZhdWx0JywgLy8gbm8gbWFyZ2luLCBhc3N1bWVzIG5vIGNoaWxkcmVuXG59O1xuXG5jb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuXHRnbHlwaDoge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpblRvcDogJy0wLjEyNWVtJywgLy8gZml4IGljb24gYWxpZ25tZW50XG5cdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBHbHlwaEJ1dHRvbjtcbiIsIi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJhcy1uZWVkZWRcIl0gKi9cblxuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcbmltcG9ydCBGaWVsZCBmcm9tICcuLi9Gb3JtRmllbGQnO1xuaW1wb3J0IEdseXBoIGZyb20gJy4uL0dseXBoJztcblxuZnVuY3Rpb24gR2x5cGhGaWVsZCAoe1xuXHRjaGlsZHJlbixcblx0Z2x5cGgsXG5cdGdseXBoQ29sb3IsXG5cdGdseXBoU2l6ZSxcblx0cG9zaXRpb24sXG5cdC4uLnByb3BzXG59KSB7XG5cdGNvbnN0IGlzTGVmdCA9IHBvc2l0aW9uID09PSAnbGVmdCc7XG5cdGNvbnN0IGlzUmlnaHQgPSBwb3NpdGlvbiA9PT0gJ3JpZ2h0JztcblxuXHRjb25zdCBnbHlwaFN0eWxlcyA9IHt9O1xuXHRpZiAoaXNMZWZ0KSBnbHlwaFN0eWxlcy5tYXJnaW5SaWdodCA9ICcwLjVlbSc7XG5cdGlmIChpc1JpZ2h0KSBnbHlwaFN0eWxlcy5tYXJnaW5MZWZ0ID0gJzAuNWVtJztcblxuXHRjb25zdCBpY29uID0gKFxuXHRcdDxHbHlwaFxuXHRcdFx0YXBocm9kaXRlU3R5bGVzPXtjbGFzc2VzLmdseXBofVxuXHRcdFx0Y29sb3I9e2dseXBoQ29sb3J9XG5cdFx0XHRuYW1lPXtnbHlwaH1cblx0XHRcdHNpemU9e2dseXBoU2l6ZX1cblx0XHRcdHN0eWxlPXtnbHlwaFN0eWxlc31cblx0XHQvPlxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PEZpZWxkIGFwaHJvZGl0ZVN0eWxlcz17Y2xhc3Nlcy53cmFwcGVyfSB7Li4ucHJvcHN9PlxuXHRcdFx0e2lzTGVmdCAmJiBpY29ufVxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0e2lzUmlnaHQgJiYgaWNvbn1cblx0XHQ8L0ZpZWxkPlxuXHQpO1xufTtcblxuLy8gRm9yIHByb3BzIFwiZ2x5cGhcIiwgXCJnbHlwaENvbG9yXCIsIGFuZCBcImdseXBoU2l6ZVwiOlxuLy8gcHJvcCB0eXBlIHZhbGlkYXRpb24gd2lsbCBvY2N1ciB3aXRoaW4gdGhlIEdseXBoIGNvbXBvbmVudCwgbm8gbmVlZCB0b1xuLy8gZHVwbGljYXRlLCBqdXN0IHBhc3MgaXQgdGhyb3VnaC5cbkdseXBoRmllbGQucHJvcFR5cGVzID0ge1xuXHRnbHlwaDogUHJvcFR5cGVzLnN0cmluZyxcblx0Z2x5cGhDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblx0Z2x5cGhTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbn07XG5HbHlwaEZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcblx0cG9zaXRpb246ICdsZWZ0Jyxcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG5cdHdyYXBwZXI6IHtcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdH0sXG5cdGdseXBoOiB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luVG9wOiAnLTAuMTI1ZW0nLCAvLyBmaXggaWNvbiBhbGlnbm1lbnRcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0fSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdseXBoRmllbGQ7XG4iLCJpbXBvcnQgQ29sIGZyb20gJy4uL0dyaWRDb2wnO1xuaW1wb3J0IFJvdyBmcm9tICcuLi9HcmlkUm93JztcblxuZXhwb3J0IHsgQ29sLCBSb3cgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFN0eWxlU2hlZXQsIGNzcyB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5jb25zdCBXSURUSFMgPSB7XG5cdCdvbmUtd2hvbGUnOiAnMTAwJScsXG5cdCdvbmUtaGFsZic6ICc1MCUnLFxuXHQnb25lLXRoaXJkJzogJzMzLjMzJScsXG5cdCd0d28tdGhpcmRzJzogJzY2LjY2JScsXG5cdCdvbmUtcXVhcnRlcic6ICcyNSUnLFxuXHQndGhyZWUtcXVhcnRlcnMnOiAnNzUlJyxcblxuXHQnb25lLWZpZnRoJzogJzIwJScsXG5cdCd0d28tZmlmdGhzJzogJzQwJScsXG5cdCd0aHJlZS1maWZ0aHMnOiAnNjAlJyxcblx0J2ZvdXItZmlmdGhzJzogJzgwJScsXG5cblx0J29uZS1zaXh0aCc6ICcxNi42NiUnLFxuXHQnZml2ZS1zaXh0aHMnOiAnODMuMzMlJyxcbn07XG5cbmNvbnN0IEdyaWRDb2wgPSAocHJvcHMsIGNvbnRleHQpID0+IHtcblx0Y29uc3QgZ3V0dGVyID0gcHJvcHMuZ3V0dGVyIHx8IGNvbnRleHQuZ3V0dGVyO1xuXHRjb25zdCB4c21hbGwgPSBwcm9wcy54c21hbGwgfHwgY29udGV4dC54c21hbGw7XG5cdGNvbnN0IHNtYWxsID0gcHJvcHMuc21hbGwgfHwgY29udGV4dC5zbWFsbDtcblx0Y29uc3QgbWVkaXVtID0gcHJvcHMubWVkaXVtIHx8IGNvbnRleHQubWVkaXVtO1xuXHRjb25zdCBsYXJnZSA9IHByb3BzLmxhcmdlIHx8IGNvbnRleHQubGFyZ2U7XG5cblx0Y29uc3QgY2xhc3NOYW1lID0gY3NzKFxuXHRcdGNsYXNzZXNbJ3hzbWFsbC0nICsgeHNtYWxsXSxcblx0XHRjbGFzc2VzWydzbWFsbC0nICsgc21hbGxdLFxuXHRcdGNsYXNzZXNbJ21lZGl1bS0nICsgbWVkaXVtXSxcblx0XHRjbGFzc2VzWydsYXJnZS0nICsgbGFyZ2VdXG5cdCk7XG5cblx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSR7cHJvcHMuY2xhc3NOYW1lID8gKCcgJyArIHByb3BzLmNsYXNzTmFtZSkgOiAnJ31gO1xuXHRjb25zdCBjb21wb25lbnRTdHlsZXMgPSBndXR0ZXIgPyB7XG5cdFx0cGFkZGluZ0xlZnQ6IGd1dHRlciAvIDIsXG5cdFx0cGFkZGluZ1JpZ2h0OiBndXR0ZXIgLyAyLFxuXHR9IDoge307XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50Q2xhc3NOYW1lfSBzdHlsZT17Y29tcG9uZW50U3R5bGVzfT5cblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkdyaWRDb2wuY29udGV4dFR5cGVzID0ge1xuXHRndXR0ZXI6IFByb3BUeXBlcy5udW1iZXIsXG5cdGxhcmdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRtZWRpdW06IFByb3BUeXBlcy5zdHJpbmcsXG5cdHNtYWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR4c21hbGw6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5HcmlkQ29sLnByb3BUeXBlcyA9IHtcblx0Z3V0dGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRsYXJnZTogUHJvcFR5cGVzLnN0cmluZyxcblx0bWVkaXVtOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRzbWFsbDogUHJvcFR5cGVzLnN0cmluZyxcblx0eHNtYWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcblx0Li4ucHJlcGFyZVdpZHRocygneHNtYWxsJywgV0lEVEhTKSxcblx0Li4ucHJlcGFyZVdpZHRocygnc21hbGwnLCBXSURUSFMpLFxuXHQuLi5wcmVwYXJlV2lkdGhzKCdtZWRpdW0nLCBXSURUSFMpLFxuXHQuLi5wcmVwYXJlV2lkdGhzKCdsYXJnZScsIFdJRFRIUyksXG59KTtcblxuLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG5mdW5jdGlvbiBwcmVwYXJlV2lkdGhzIChwcmVmaXgsIG9iaikge1xuXHRsZXQgY2xhc3NlcyA9IHt9O1xuXHRzd2l0Y2ggKHByZWZpeCkge1xuXHRcdGNhc2UgJ3NtYWxsJzpcblx0XHRcdGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG5cdFx0XHRcdGNsYXNzZXNbcHJlZml4ICsgJy0nICsgcHJvcF0gPSB7XG5cdFx0XHRcdFx0W2BAbWVkaWEgKG1pbi13aWR0aDogJHt0aGVtZS5icmVha3BvaW50LnRhYmxldFBvcnRyYWl0TWlufSlgXToge1xuXHRcdFx0XHRcdFx0d2lkdGg6IG9ialtwcm9wXSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG5cdFx0XHRcdGNsYXNzZXNbcHJlZml4ICsgJy0nICsgcHJvcF0gPSB7XG5cdFx0XHRcdFx0W2BAbWVkaWEgKG1pbi13aWR0aDogJHt0aGVtZS5icmVha3BvaW50LnRhYmxldExhbmRzY2FwZU1pbn0pYF06IHtcblx0XHRcdFx0XHRcdHdpZHRoOiBvYmpbcHJvcF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xhcmdlJzpcblx0XHRcdGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG5cdFx0XHRcdGNsYXNzZXNbcHJlZml4ICsgJy0nICsgcHJvcF0gPSB7XG5cdFx0XHRcdFx0W2BAbWVkaWEgKG1pbi13aWR0aDogJHt0aGVtZS5icmVha3BvaW50LmRlc2t0b3BNaW59KWBdOiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogb2JqW3Byb3BdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0Zm9yIChsZXQgcHJvcCBpbiBvYmopIHtcblx0XHRcdFx0Y2xhc3Nlc1twcmVmaXggKyAnLScgKyBwcm9wXSA9IHtcblx0XHRcdFx0XHR3aWR0aDogb2JqW3Byb3BdLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR3JpZENvbDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuXG5jbGFzcyBHcmlkUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Z2V0Q2hpbGRDb250ZXh0ICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z3V0dGVyOiB0aGlzLnByb3BzLmd1dHRlcixcblx0XHRcdHhzbWFsbDogdGhpcy5wcm9wcy54c21hbGwsXG5cdFx0XHRzbWFsbDogdGhpcy5wcm9wcy5zbWFsbCxcblx0XHRcdG1lZGl1bTogdGhpcy5wcm9wcy5tZWRpdW0sXG5cdFx0XHRsYXJnZTogdGhpcy5wcm9wcy5sYXJnZSxcblx0XHR9O1xuXHR9XG5cdHJlbmRlciAoKSB7XG5cdFx0Y29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBndXR0ZXIsIHN0eWxlcyA9IHt9IH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50Q2xhc3NOYW1lID0gYCR7Y3NzKGNsYXNzZXMuZ3JpZCl9JHtjbGFzc05hbWUgPyAoJyAnICsgY2xhc3NOYW1lKSA6ICcnfWA7XG5cdFx0Y29uc3QgY29tcG9uZW50U3R5bGVzID0gT2JqZWN0LmFzc2lnbihzdHlsZXMsIHtcblx0XHRcdG1hcmdpbkxlZnQ6IGd1dHRlciAvIC0yLFxuXHRcdFx0bWFyZ2luUmlnaHQ6IGd1dHRlciAvIC0yLFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRDbGFzc05hbWV9IHN0eWxlPXtjb21wb25lbnRTdHlsZXN9PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59O1xuXG5HcmlkUm93LmNoaWxkQ29udGV4dFR5cGVzID0ge1xuXHRndXR0ZXI6IFByb3BUeXBlcy5udW1iZXIsXG5cdHhzbWFsbDogUHJvcFR5cGVzLnN0cmluZyxcblx0c21hbGw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdG1lZGl1bTogUHJvcFR5cGVzLnN0cmluZyxcblx0bGFyZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5HcmlkUm93LnByb3BUeXBlcyA9IHtcblx0Z3V0dGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRsYXJnZTogUHJvcFR5cGVzLnN0cmluZyxcblx0bWVkaXVtOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRzbWFsbDogUHJvcFR5cGVzLnN0cmluZyxcblx0eHNtYWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuR3JpZFJvdy5kZWZhdWx0UHJvcHMgPSB7XG5cdGd1dHRlcjogMCxcblx0eHNtYWxsOiAnb25lLXdob2xlJyxcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG5cdGdyaWQ6IHtcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0ZmxleFdyYXA6ICd3cmFwJyxcblx0fSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdyaWRSb3c7XG4iLCJpbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQsIENoaWxkcmVuLCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbi8vIE5PVEU6IG9ubHkgYWNjZXB0cyBJbmxpbmVHcm91cFNlY3Rpb24gYXMgYSBzaW5nbGUgY2hpbGRcblxuZnVuY3Rpb24gSW5saW5lR3JvdXAgKHtcblx0YXBocm9kaXRlU3R5bGVzLFxuXHRibG9jayxcblx0Y2hpbGRyZW4sXG5cdGNsYXNzTmFtZSxcblx0Y29tcG9uZW50OiBDb21wb25lbnQsXG5cdGNvbnRpZ3VvdXMsXG5cdC4uLnByb3BzXG59KSB7XG5cdC8vIHByZXBhcmUgZ3JvdXAgY2xhc3NOYW1lXG5cdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRjbGFzc2VzLmdyb3VwLFxuXHRcdCEhYmxvY2sgJiYgY2xhc3Nlcy5ibG9jayxcblx0XHRhcGhyb2RpdGVTdHlsZXNcblx0KTtcblx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdHByb3BzLmNsYXNzTmFtZSArPSAoJyAnICsgY2xhc3NOYW1lKTtcblx0fVxuXG5cdC8vIGNvbnZlcnQgY2hpbGRyZW4gdG8gYW4gYXJyYXkgYW5kIGZpbHRlciBvdXQgZmFsc2V5IHZhbHVlc1xuXHRjb25zdCBidXR0b25zID0gQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikuZmlsdGVyKGkgPT4gaSk7XG5cblx0Ly8gbm9ybWFsaXplIHRoZSBjb3VudFxuXHRjb25zdCBjb3VudCA9IGJ1dHRvbnMubGVuZ3RoIC0gMTtcblxuXHQvLyBjbG9uZSBjaGlsZHJlbiBhbmQgYXBwbHkgY2xhc3NOYW1lcyB0aGF0IGFwaHJvZGl0ZSBjYW4gdGFyZ2V0XG5cdHByb3BzLmNoaWxkcmVuID0gYnV0dG9ucy5tYXAoKGMsIGlkeCkgPT4ge1xuXHRcdGlmICghYykgcmV0dXJuIG51bGw7XG5cblx0XHRjb25zdCBpc09ubHlDaGlsZCA9ICFjb3VudDtcblx0XHRjb25zdCBpc0ZpcnN0Q2hpbGQgPSAhaXNPbmx5Q2hpbGQgJiYgaWR4ID09PSAwO1xuXHRcdGNvbnN0IGlzTGFzdENoaWxkID0gIWlzT25seUNoaWxkICYmIGlkeCA9PT0gY291bnQ7XG5cdFx0Y29uc3QgaXNNaWRkbGVDaGlsZCA9ICFpc09ubHlDaGlsZCAmJiAhaXNGaXJzdENoaWxkICYmICFpc0xhc3RDaGlsZDtcblxuXHRcdGxldCBwb3NpdGlvbjtcblx0XHRpZiAoaXNPbmx5Q2hpbGQpIHBvc2l0aW9uID0gJ29ubHknO1xuXHRcdGlmIChpc0ZpcnN0Q2hpbGQpIHBvc2l0aW9uID0gJ2ZpcnN0Jztcblx0XHRpZiAoaXNMYXN0Q2hpbGQpIHBvc2l0aW9uID0gJ2xhc3QnO1xuXHRcdGlmIChpc01pZGRsZUNoaWxkKSBwb3NpdGlvbiA9ICdtaWRkbGUnO1xuXG5cdFx0cmV0dXJuIGNsb25lRWxlbWVudChjLCB7XG5cdFx0XHRjb250aWd1b3VzOiBjb250aWd1b3VzLFxuXHRcdFx0cG9zaXRpb24sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG59O1xuXG5JbmxpbmVHcm91cC5wcm9wVHlwZXMgPSB7XG5cdGFwaHJvZGl0ZVN0eWxlczogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRfZGVmaW5pdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0fSksXG5cdGJsb2NrOiBQcm9wVHlwZXMuYm9vbCxcblx0Y29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuZnVuYyxcblx0XHRQcm9wVHlwZXMuc3RyaW5nLFxuXHRdKSxcblx0Y29udGlndW91czogUHJvcFR5cGVzLmJvb2wsXG59O1xuSW5saW5lR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuXHRjb21wb25lbnQ6ICdkaXYnLFxufTtcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcblx0Z3JvdXA6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuXHR9LFxuXHRibG9jazoge1xuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0fSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElubGluZUdyb3VwO1xuIiwiaW1wb3J0IHsgY3NzLCBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgUmVhY3QsIHsgY2xvbmVFbGVtZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHN0eWxlcyk7XG5cbi8vIE5PVEU6IElubGluZSBHcm91cCBTZWN0aW9uIGFjY2VwdHMgYSBzaW5nbGUgY2hpbGRcblxuZnVuY3Rpb24gSW5saW5lR3JvdXBTZWN0aW9uICh7XG5cdGFjdGl2ZSxcblx0YXBocm9kaXRlU3R5bGVzLFxuXHRjaGlsZHJlbixcblx0Y2xhc3NOYW1lLFxuXHRjb250aWd1b3VzLFxuXHRncm93LFxuXHRwb3NpdGlvbixcblx0Li4ucHJvcHNcbn0pIHtcblx0Ly8gZXZhbHVhdGUgcG9zaXRpb25cblx0Y29uc3Qgc2VwYXJhdGUgPSBwb3NpdGlvbiA9PT0gJ2xhc3QnIHx8IHBvc2l0aW9uID09PSAnbWlkZGxlJztcblxuXHQvLyBBIGBjb250aWd1b3VzYCBzZWN0aW9uIG11c3QgbWFuaXB1bGF0ZSBpdCdzIGNoaWxkIGRpcmVjdGx5XG5cdC8vIEEgc2VwYXJhdGUgKGRlZmF1bHQpIHNlY3Rpb24ganVzdCB3cmFwcyB0aGUgY2hpbGRcblx0cmV0dXJuIGNvbnRpZ3VvdXMgPyBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcblx0XHRhcGhyb2RpdGVTdHlsZXM6IFtcblx0XHRcdGNsYXNzZXMuY29udGlndW91cyxcblx0XHRcdGNsYXNzZXNbJ2NvbnRpZ3VvdXNfXycgKyBwb3NpdGlvbl0sXG5cdFx0XHRhY3RpdmUgPyBjbGFzc2VzLmFjdGl2ZSA6IG51bGwsXG5cdFx0XHRncm93ID8gY2xhc3Nlcy5ncm93IDogbnVsbCxcblx0XHRcdGFwaHJvZGl0ZVN0eWxlcyxcblx0XHRdLFxuXHRcdC4uLnByb3BzLFxuXHR9KSA6IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3NzKFxuXHRcdFx0ISFncm93ICYmIGNsYXNzZXMuZ3Jvdyxcblx0XHRcdCEhc2VwYXJhdGUgJiYgY2xhc3Nlcy5zZXBhcmF0ZSxcblx0XHRcdGFwaHJvZGl0ZVN0eWxlc1xuXHRcdCl9IHsuLi5wcm9wc30+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5JbmxpbmVHcm91cFNlY3Rpb24ucHJvcFR5cGVzID0ge1xuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLCAvLyBidXR0b25zIG9ubHlcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG5cdGNvbnRpZ3VvdXM6IFByb3BUeXBlcy5ib29sLFxuXHRncm93OiBQcm9wVHlwZXMuYm9vbCxcblx0cG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2ZpcnN0JywgJ2xhc3QnLCAnbWlkZGxlJywgJ29ubHknXSksXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElubGluZUdyb3VwU2VjdGlvbjtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW5saW5lIEdyb3VwOiBTZWN0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gVGFrZXMgb25seSBGb3JtSW5wdXQgYW5kIEJ1dHRvbiBhcyBjaGlsZHJlbiwgcmVuZGVyaW5nIHRoZW0gYXMgYVxuLy8gdGlkeSBpbmxpbmUgYXJyYXlcblxuaW1wb3J0IHsgYm9yZGVyTGVmdFJhZGl1cywgYm9yZGVyUmlnaHRSYWRpdXMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jc3MnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdC8vIHB1bGwgYWN0aXZlIGVsZW1lbnRzIHVwXG5cdGFjdGl2ZToge1xuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHR9LFxuXG5cdC8vIHN0cmV0Y2ggdG8gZmlsbCBhdmFpbGFibGUgd2lkdGhcblx0Z3Jvdzoge1xuXHRcdGZsZXg6ICcxIDEgMCcsXG5cdH0sXG5cblx0Ly8gc2VwYXJhdGUgYXBwbGljYWJsZSBub24tY29udGlndW91cyBlbGVtZW50c1xuXHRzZXBhcmF0ZToge1xuXHRcdHBhZGRpbmdMZWZ0OiAnMC43NWVtJyxcblx0fSxcblxuXHQvLyBDb250aWd1b3VzOiBtYW5pcHVsYXRlIGNoaWxkcmVuIGRpcmVjdGx5XG5cblx0Ly8gcHVsbCBmb2N1c2VkIGNvbnRpZ3VvdXMgZWxlbWVudHMgdXBcblx0Y29udGlndW91czoge1xuXHRcdCc6Zm9jdXMnOiB7XG5cdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHRcdHpJbmRleDogMSxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIHBvc2l0aW9uXG5cdGNvbnRpZ3VvdXNfX21pZGRsZToge1xuXHRcdGJvcmRlclJhZGl1czogMCxcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5idXR0b24uYm9yZGVyV2lkdGggKiAtMSxcblx0fSxcblx0Y29udGlndW91c19fZmlyc3Q6IHtcblx0XHQuLi5ib3JkZXJSaWdodFJhZGl1cygwKSxcblx0fSxcblx0Y29udGlndW91c19fbGFzdDoge1xuXHRcdC4uLmJvcmRlckxlZnRSYWRpdXMoMCksXG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuYnV0dG9uLmJvcmRlcldpZHRoICogLTEsXG5cdH0sXG59O1xuIiwiaW1wb3J0IHsgY3NzLCBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShzdHlsZXMpO1xuXG5mdW5jdGlvbiBMYWJlbGxlZENvbnRyb2wgKHtcblx0Y2xhc3NOYW1lLFxuXHRpbmxpbmUsXG5cdGxhYmVsLFxuXHR0aXRsZSxcblx0Li4ucHJvcHNcbn0pIHtcblx0Y29uc3QgbGFiZWxDbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlcy53cmFwcGVyLFxuXHRcdGlubGluZSAmJiBjbGFzc2VzLndyYXBwZXJfX2lubGluZSxcblx0XHRjbGFzc05hbWVcblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxsYWJlbCB0aXRsZT17dGl0bGV9IGNsYXNzTmFtZT17bGFiZWxDbGFzc05hbWV9PlxuXHRcdFx0PGlucHV0IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy5jb250cm9sKX0gLz5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMubGFiZWwpfT57bGFiZWx9PC9zcGFuPlxuXHRcdDwvbGFiZWw+XG5cdCk7XG59O1xuXG5MYWJlbGxlZENvbnRyb2wucHJvcFR5cGVzID0ge1xuXHRpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuXHR0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcblx0dHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnY2hlY2tib3gnLCAncmFkaW8nXSkuaXNSZXF1aXJlZCxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGFiZWxsZWRDb250cm9sO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBbGVydFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qIGVzbGludCBxdW90ZS1wcm9wczogW1wiZXJyb3JcIiwgXCJhcy1uZWVkZWRcIl0gKi9cblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHdyYXBwZXI6IHtcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdGhlaWdodDogdGhlbWUuaW5wdXQuaGVpZ2h0LFxuXHRcdGxpbmVIZWlnaHQ6IHRoZW1lLmlucHV0LmxpbmVIZWlnaHQsXG5cdH0sXG5cdHdyYXBwZXJfX2lubGluZToge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUnLFxuXHR9LFxuXG5cdC8vIGNoZWNrYm94IG9yIHJhZGlvXG5cdGNvbnRyb2w6IHtcblx0XHRtYXJnaW5SaWdodDogJzAuNWVtJyxcblx0fSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9TcGlubmVyJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbmZ1bmN0aW9uIExvYWRpbmdCdXR0b24gKHsgY2hpbGRyZW4sIGxvYWRpbmcsIC4uLnByb3BzIH0pIHtcblx0Ly8gZGV0ZXJtaW5lIHRoZSBjb3JyZWN0IHZhcmlhbnQgZm9yIHRoZSBzcGlubmVyLFxuXHQvLyBmaWxsIGlzIHRoZSBkZWZhdWx0IHZhcmlhbnQgb24gQnV0dG9uXG5cdGNvbnN0IHZhcmlhbnQgPSBwcm9wcy52YXJpYW50IHx8ICdmaWxsJztcblxuXHQvLyBkZXRlcm1pbmUgdGhlIGNvcnJlY3QgY29sb3IgZm9yIHRoZSBzcGlubmVyLFxuXHQvLyBjYW5jZWwgYW5kIGRlbGV0ZSBhbGlhcyB0byBcImRhbmdlclwiXG5cdGxldCBjb2xvcjtcblx0aWYgKHByb3BzLmNvbG9yID09PSAnY2FuY2VsJyB8fCBwcm9wcy5jb2xvciA9PT0gJ2RlbGV0ZScpIGNvbG9yID0gJ2Rhbmdlcic7XG5cblx0Ly8gbWVyZ2UgYWxsIHRoZSB2YXJpYW50L2NvbG9yIHRvZ2V0aGVyXG5cdGNvbnN0IGZvcm1hdHRlZENvbG9yID0gdmFyaWFudCA9PT0gJ2ZpbGwnICYmIHByb3BzLmNvbG9yICE9PSAnZGVmYXVsdCdcblx0XHQ/ICdpbnZlcnRlZCdcblx0XHQ6IGNvbG9yO1xuXG5cdC8vIHJlbmRlciB0aGUgc3Bpbm5lciBpZiByZXF1aXJlZFxuXHRjb25zdCBzcGlubmVyID0gbG9hZGluZyAmJiAoXG5cdFx0PFNwaW5uZXJcblx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRjb2xvcj17Zm9ybWF0dGVkQ29sb3J9XG5cdFx0Lz5cblx0KTtcblxuXHQvLyBzbGlkZSB0aGUgc3Bpbm5lciBpbiBhbmQgb3V0IG9mIHZpZXdcblx0Y29uc3Qgc3Bpbm5lclN0eWxlcyA9IHtcblx0XHR3aWR0aDogbG9hZGluZ1xuXHRcdFx0PyAodGhlbWUuc3Bpbm5lci5zaXplLnNtYWxsICogNSArIHRoZW1lLnNwYWNpbmcuc21hbGwpXG5cdFx0XHQ6IDAsXG5cdH07XG5cblx0Ly8gcmVuZGVyIGFsbCB0aGF0IHNoaXRcblx0cmV0dXJuIChcblx0XHQ8QnV0dG9uIHsuLi5wcm9wc30+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLnNwaW5uZXIpfSBzdHlsZT17c3Bpbm5lclN0eWxlc30+XG5cdFx0XHRcdHtzcGlubmVyfVxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvQnV0dG9uPlxuXHQpO1xufTtcblxuTG9hZGluZ0J1dHRvbi5wcm9wVHlwZXMgPSB7XG5cdGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxufTtcbkxvYWRpbmdCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuXHRsb2FkaW5nOiBmYWxzZSxcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG5cdHNwaW5uZXI6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0dGV4dEFsaWduOiAnbGVmdCcsXG5cdFx0dHJhbnNpdGlvbjogJ3dpZHRoIDIwMG1zIGVhc2Utb3V0Jyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0fSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvYWRpbmdCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5mdW5jdGlvbiBNb2RhbEJvZHkgKHtcblx0Y2xhc3NOYW1lLFxuXHQuLi5wcm9wc1xufSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuYm9keSwgY2xhc3NOYW1lKX1cblx0XHRcdHsuLi5wcm9wc31cblx0XHQvPlxuXHQpO1xufTtcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcblx0Ym9keToge1xuXHRcdHBhZGRpbmdCb3R0b206IHRoZW1lLm1vZGFsLnBhZGRpbmcuYm9keS52ZXJ0aWNhbCxcblx0XHRwYWRkaW5nTGVmdDogdGhlbWUubW9kYWwucGFkZGluZy5ib2R5Lmhvcml6b250YWwsXG5cdFx0cGFkZGluZ1JpZ2h0OiB0aGVtZS5tb2RhbC5wYWRkaW5nLmJvZHkuaG9yaXpvbnRhbCxcblx0XHRwYWRkaW5nVG9wOiB0aGVtZS5tb2RhbC5wYWRkaW5nLmJvZHkudmVydGljYWwsXG5cdH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbEJvZHk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcbmltcG9ydCBTY3JvbGxMb2NrIGZyb20gJy4uL1Njcm9sbExvY2snO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi9Qb3J0YWwnO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5jb25zdCBjYW5Vc2VEb20gPSAhIShcblx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblx0JiYgd2luZG93LmRvY3VtZW50XG5cdCYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG4pO1xuXG5jbGFzcyBNb2RhbERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrID0gdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oYW5kbGVLZXlib2FyZElucHV0ID0gdGhpcy5oYW5kbGVLZXlib2FyZElucHV0LmJpbmQodGhpcyk7XG5cdH1cblx0Z2V0Q2hpbGRDb250ZXh0ICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0b25DbG9zZTogdGhpcy5wcm9wcy5vbkNsb3NlLFxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG5cdFx0aWYgKCFjYW5Vc2VEb20pIHJldHVybjtcblxuXHRcdC8vIGFkZCBldmVudCBsaXN0ZW5lcnNcblx0XHRpZiAobmV4dFByb3BzLmlzT3BlbiAmJiBuZXh0UHJvcHMuZW5hYmxlS2V5Ym9hcmRJbnB1dCkge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWJvYXJkSW5wdXQpO1xuXHRcdH1cblx0XHRpZiAoIW5leHRQcm9wcy5pc09wZW4gJiYgbmV4dFByb3BzLmVuYWJsZUtleWJvYXJkSW5wdXQpIHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlib2FyZElucHV0KTtcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmVuYWJsZUtleWJvYXJkSW5wdXQpIHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlib2FyZElucHV0KTtcblx0XHR9XG5cdH1cblxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gTWV0aG9kc1xuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHRoYW5kbGVLZXlib2FyZElucHV0IChldmVudCkge1xuXHRcdGlmIChldmVudC5rZXlDb2RlID09PSAyNykgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aGFuZGxlQmFja2Ryb3BDbGljayAoZSkge1xuXHRcdGlmIChlLnRhcmdldCAhPT0gdGhpcy5yZWZzLmNvbnRhaW5lcikgcmV0dXJuO1xuXG5cdFx0dGhpcy5wcm9wcy5vbkNsb3NlKCk7XG5cdH1cblxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gUmVuZGVyZXJzXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdHJlbmRlckRpYWxvZyAoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YmFja2Ryb3BDbG9zZXNNb2RhbCxcblx0XHRcdGNoaWxkcmVuLFxuXHRcdFx0aXNPcGVuLFxuXHRcdFx0d2lkdGgsXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZiAoIWlzT3BlbikgcmV0dXJuIDxzcGFuIGtleT1cImNsb3NlZFwiIC8+O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy5jb250YWluZXIpfVxuXHRcdFx0XHRrZXk9XCJvcGVuXCJcblx0XHRcdFx0cmVmPVwiY29udGFpbmVyXCJcblx0XHRcdFx0b25DbGljaz17ISFiYWNrZHJvcENsb3Nlc01vZGFsICYmIHRoaXMuaGFuZGxlQmFja2Ryb3BDbGlja31cblx0XHRcdFx0b25Ub3VjaEVuZD17ISFiYWNrZHJvcENsb3Nlc01vZGFsICYmIHRoaXMuaGFuZGxlQmFja2Ryb3BDbGlja31cblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmRpYWxvZyl9IHN0eWxlPXt7IHdpZHRoIH19IGRhdGEtc2NyZWVuLWlkPVwibW9kYWwtZGlhbG9nXCI+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PFNjcm9sbExvY2sgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBvcnRhbD5cblx0XHRcdFx0e3RoaXMucmVuZGVyRGlhbG9nKCl9XG5cdFx0XHQ8L1BvcnRhbD5cblx0XHQpO1xuXHR9XG59O1xuXG5Nb2RhbERpYWxvZy5wcm9wVHlwZXMgPSB7XG5cdGJhY2tkcm9wQ2xvc2VzTW9kYWw6IFByb3BUeXBlcy5ib29sLFxuXHRlbmFibGVLZXlib2FyZElucHV0OiBQcm9wVHlwZXMuYm9vbCxcblx0aXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblx0b25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0d2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuTW9kYWxEaWFsb2cuZGVmYXVsdFByb3BzID0ge1xuXHRlbmFibGVLZXlib2FyZElucHV0OiB0cnVlLFxuXHR3aWR0aDogNzY4LFxufTtcbk1vZGFsRGlhbG9nLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuXHRvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcblx0Y29udGFpbmVyOiB7XG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5tb2RhbC5iYWNrZ3JvdW5kLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0bGVmdDogMCxcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHR0b3A6IDAsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHR6SW5kZXg6IHRoZW1lLm1vZGFsLnpJbmRleCxcblx0fSxcblx0ZGlhbG9nOiB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuXHRcdGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmRlZmF1bHQsXG5cdFx0cGFkZGluZ0JvdHRvbTogdGhlbWUubW9kYWwucGFkZGluZy5kaWFsb2cudmVydGljYWwsXG5cdFx0cGFkZGluZ0xlZnQ6IHRoZW1lLm1vZGFsLnBhZGRpbmcuZGlhbG9nLmhvcml6b250YWwsXG5cdFx0cGFkZGluZ1JpZ2h0OiB0aGVtZS5tb2RhbC5wYWRkaW5nLmRpYWxvZy5ob3Jpem9udGFsLFxuXHRcdHBhZGRpbmdUb3A6IHRoZW1lLm1vZGFsLnBhZGRpbmcuZGlhbG9nLnZlcnRpY2FsLFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHR9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsRGlhbG9nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxuZnVuY3Rpb24gTW9kYWxGb290ZXIgKHtcblx0YWxpZ24sXG5cdGNsYXNzTmFtZSxcblx0Li4ucHJvcHNcbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy5mb290ZXIsIGNsYXNzZXNbJ2FsaWduX18nICsgYWxpZ25dLCBjbGFzc05hbWUpfSAvPlxuXHQpO1xufTtcblxuTW9kYWxGb290ZXIucHJvcFR5cGVzID0ge1xuXHRhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnY2VudGVyJywgJ2xlZnQnLCAncmlnaHQnXSksXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblx0b25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cdHNob3dDbG9zZUJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXG5cdHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuTW9kYWxGb290ZXIuZGVmYXVsdFByb3BzID0ge1xuXHRhbGlnbjogJ2xlZnQnLFxufTtcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcblx0Zm9vdGVyOiB7XG5cdFx0Ym9yZGVyVG9wOiBgMnB4IHNvbGlkICR7dGhlbWUuY29sb3IuZ3JheTEwfWAsXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdHBhZGRpbmdCb3R0b206IHRoZW1lLm1vZGFsLnBhZGRpbmcuZm9vdGVyLnZlcnRpY2FsLFxuXHRcdHBhZGRpbmdMZWZ0OiB0aGVtZS5tb2RhbC5wYWRkaW5nLmZvb3Rlci5ob3Jpem9udGFsLFxuXHRcdHBhZGRpbmdSaWdodDogdGhlbWUubW9kYWwucGFkZGluZy5mb290ZXIuaG9yaXpvbnRhbCxcblx0XHRwYWRkaW5nVG9wOiB0aGVtZS5tb2RhbC5wYWRkaW5nLmZvb3Rlci52ZXJ0aWNhbCxcblx0fSxcblxuXHQvLyBhbGlnbm1lbnRcblx0YWxpZ25fX2xlZnQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuXHR9LFxuXHRhbGlnbl9fY2VudGVyOiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHR9LFxuXHRhbGlnbl9fcmlnaHQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcblx0fSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGFsRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuaW1wb3J0IEdseXBoQnV0dG9uIGZyb20gJy4uL0dseXBoQnV0dG9uJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbmZ1bmN0aW9uIE1vZGFsSGVhZGVyICh7XG5cdGNoaWxkcmVuLFxuXHRjbGFzc05hbWUsXG5cdHNob3dDbG9zZUJ1dHRvbixcblx0dGV4dCxcblx0Li4ucHJvcHNcbn0sIHtcblx0b25DbG9zZSxcbn0pIHtcblx0Ly8gUHJvcGVydHkgVmlvbGF0aW9uXG5cdGlmIChjaGlsZHJlbiAmJiB0ZXh0KSB7XG5cdFx0Y29uc29sZS5lcnJvcignV2FybmluZzogTW9kYWxIZWFkZXIgY2Fubm90IHJlbmRlciBgY2hpbGRyZW5gIGFuZCBgdGV4dGAuIFlvdSBtdXN0IHByb3ZpZGUgb25lIG9yIHRoZSBvdGhlci4nKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuaGVhZGVyLCBjbGFzc05hbWUpfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy5ncm93KX0+XG5cdFx0XHRcdHt0ZXh0ID8gKFxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLnRleHQpfT5cblx0XHRcdFx0XHRcdHt0ZXh0fVxuXHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdCkgOiBjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdFx0eyEhb25DbG9zZSAmJiBzaG93Q2xvc2VCdXR0b24gJiYgKFxuXHRcdFx0XHQ8R2x5cGhCdXR0b25cblx0XHRcdFx0XHRhcGhyb2RpdGVTdHlsZXM9e2NsYXNzZXMuY2xvc2V9XG5cdFx0XHRcdFx0Y29sb3I9XCJjYW5jZWxcIlxuXHRcdFx0XHRcdGdseXBoPVwieFwiXG5cdFx0XHRcdFx0b25DbGljaz17b25DbG9zZX1cblx0XHRcdFx0XHR2YXJpYW50PVwibGlua1wiXG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTW9kYWxIZWFkZXIucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cdG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXHRzaG93Q2xvc2VCdXR0b246IFByb3BUeXBlcy5ib29sLFxuXHR0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbk1vZGFsSGVhZGVyLmNvbnRleHRUeXBlcyA9IHtcblx0b25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG5cdGhlYWRlcjoge1xuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAke3RoZW1lLmNvbG9yLmdyYXkxMH1gLFxuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRwYWRkaW5nQm90dG9tOiB0aGVtZS5tb2RhbC5wYWRkaW5nLmhlYWRlci52ZXJ0aWNhbCxcblx0XHRwYWRkaW5nTGVmdDogdGhlbWUubW9kYWwucGFkZGluZy5oZWFkZXIuaG9yaXpvbnRhbCxcblx0XHRwYWRkaW5nUmlnaHQ6IHRoZW1lLm1vZGFsLnBhZGRpbmcuaGVhZGVyLmhvcml6b250YWwsXG5cdFx0cGFkZGluZ1RvcDogdGhlbWUubW9kYWwucGFkZGluZy5oZWFkZXIudmVydGljYWwsXG5cdH0sXG5cblx0Ly8gZmlsbCBzcGFjZSB0byBwdXNoIHRoZSBjbG9zZSBidXR0b24gcmlnaHRcblx0Z3Jvdzoge1xuXHRcdGZsZXhHcm93OiAxLFxuXHR9LFxuXG5cdC8vIHRpdGxlIHRleHRcblx0dGV4dDoge1xuXHRcdGNvbG9yOiAnaW5oZXJpdCcsXG5cdFx0Zm9udFNpemU6IDE4LFxuXHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRsaW5lSGVpZ2h0OiAxLFxuXHRcdG1hcmdpbjogMCxcblx0fSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGFsSGVhZGVyO1xuIiwiaW1wb3J0IEJvZHkgZnJvbSAnLi9ib2R5JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9kaWFsb2cnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcblxuZXhwb3J0IHtcblx0Qm9keSxcblx0RGlhbG9nLFxuXHRGb290ZXIsXG5cdEhlYWRlcixcbn07XG4iLCJpbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vLi4vdGhlbWUnO1xuXG5jbGFzcyBQYWdpbmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyQ291bnQgKCkge1xuXHRcdGxldCBjb3VudCA9ICcnO1xuXHRcdGNvbnN0IHsgY3VycmVudFBhZ2UsIHBhZ2VTaXplLCBwbHVyYWwsIHNpbmd1bGFyLCB0b3RhbCB9ID0gdGhpcy5wcm9wcztcblx0XHRpZiAoIXRvdGFsKSB7XG5cdFx0XHRjb3VudCA9ICdObyAnICsgKHBsdXJhbCB8fCAncmVjb3JkcycpO1xuXHRcdH0gZWxzZSBpZiAodG90YWwgPiBwYWdlU2l6ZSkge1xuXHRcdFx0bGV0IHN0YXJ0ID0gKHBhZ2VTaXplICogKGN1cnJlbnRQYWdlIC0gMSkpICsgMTtcblx0XHRcdGxldCBlbmQgPSBNYXRoLm1pbihzdGFydCArIHBhZ2VTaXplIC0gMSwgdG90YWwpO1xuXHRcdFx0Y291bnQgPSBgU2hvd2luZyAke3N0YXJ0fSB0byAke2VuZH0gb2YgJHt0b3RhbH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb3VudCA9ICdTaG93aW5nICcgKyB0b3RhbDtcblx0XHRcdGlmICh0b3RhbCA+IDEgJiYgcGx1cmFsKSB7XG5cdFx0XHRcdGNvdW50ICs9ICcgJyArIHBsdXJhbDtcblx0XHRcdH0gZWxzZSBpZiAodG90YWwgPT09IDEgJiYgc2luZ3VsYXIpIHtcblx0XHRcdFx0Y291bnQgKz0gJyAnICsgc2luZ3VsYXI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuY291bnQpfSBkYXRhLWUyZS1wYWdpbmF0aW9uLWNvdW50Pntjb3VudH08L2Rpdj5cblx0XHQpO1xuXHR9XG5cdHJlbmRlclBhZ2VzICgpIHtcblx0XHRjb25zdCB7IGN1cnJlbnRQYWdlLCBsaW1pdCwgb25QYWdlU2VsZWN0LCBwYWdlU2l6ZSwgdG90YWwgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZiAodG90YWwgPD0gcGFnZVNpemUpIHJldHVybiBudWxsO1xuXG5cdFx0bGV0IHBhZ2VzID0gW107XG5cdFx0bGV0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSk7XG5cdFx0bGV0IG1pblBhZ2UgPSAxO1xuXHRcdGxldCBtYXhQYWdlID0gdG90YWxQYWdlcztcblxuXHRcdGlmIChsaW1pdCAmJiAobGltaXQgPCB0b3RhbFBhZ2VzKSkge1xuXHRcdFx0bGV0IHJpZ2h0TGltaXQgPSBNYXRoLmZsb29yKGxpbWl0IC8gMik7XG5cdFx0XHRsZXQgbGVmdExpbWl0ID0gcmlnaHRMaW1pdCArIChsaW1pdCAlIDIpIC0gMTtcblx0XHRcdG1pblBhZ2UgPSBjdXJyZW50UGFnZSAtIGxlZnRMaW1pdDtcblx0XHRcdG1heFBhZ2UgPSBjdXJyZW50UGFnZSArIHJpZ2h0TGltaXQ7XG5cblx0XHRcdGlmIChtaW5QYWdlIDwgMSkge1xuXHRcdFx0XHRtYXhQYWdlID0gbGltaXQ7XG5cdFx0XHRcdG1pblBhZ2UgPSAxO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1heFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XG5cdFx0XHRcdG1pblBhZ2UgPSB0b3RhbFBhZ2VzIC0gbGltaXQgKyAxO1xuXHRcdFx0XHRtYXhQYWdlID0gdG90YWxQYWdlcztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG1pblBhZ2UgPiAxKSB7XG5cdFx0XHRwYWdlcy5wdXNoKDxQYWdlIGtleT1cInBhZ2Vfc3RhcnRcIiBvbkNsaWNrPXsoKSA9PiBvblBhZ2VTZWxlY3QoMSl9Pi4uLjwvUGFnZT4pO1xuXHRcdH1cblx0XHRmb3IgKGxldCBwYWdlID0gbWluUGFnZTsgcGFnZSA8PSBtYXhQYWdlOyBwYWdlKyspIHtcblx0XHRcdGxldCBzZWxlY3RlZCA9IChwYWdlID09PSBjdXJyZW50UGFnZSk7XG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cblx0XHRcdHBhZ2VzLnB1c2goPFBhZ2Uga2V5PXsncGFnZV8nICsgcGFnZX0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBvbkNsaWNrPXsoKSA9PiBvblBhZ2VTZWxlY3QocGFnZSl9PntwYWdlfTwvUGFnZT4pO1xuXHRcdFx0LyogZXNsaW50LWVuYWJsZSAqL1xuXHRcdH1cblx0XHRpZiAobWF4UGFnZSA8IHRvdGFsUGFnZXMpIHtcblx0XHRcdHBhZ2VzLnB1c2goPFBhZ2Uga2V5PVwicGFnZV9lbmRcIiBvbkNsaWNrPXsoKSA9PiBvblBhZ2VTZWxlY3QodG90YWxQYWdlcyl9Pi4uLjwvUGFnZT4pO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmxpc3QpfT5cblx0XHRcdFx0e3BhZ2VzfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IGNzcyhjbGFzc2VzLmNvbnRhaW5lciwgdGhpcy5wcm9wcy5jbGFzc05hbWUpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdHt0aGlzLnJlbmRlckNvdW50KCl9XG5cdFx0XHRcdHt0aGlzLnJlbmRlclBhZ2VzKCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59O1xuXG5jb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuXHRjb250YWluZXI6IHtcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdGxpbmVIZWlnaHQ6IHRoZW1lLmNvbXBvbmVudC5saW5lSGVpZ2h0LFxuXHRcdG1hcmdpbkJvdHRvbTogJzJlbScsXG5cdH0sXG5cdGNvdW50OiB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luUmlnaHQ6ICcxZW0nLFxuXHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHR9LFxuXHRsaXN0OiB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdH0sXG59KTtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0Y3VycmVudFBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0bGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG5cdG9uUGFnZVNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cdHBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdHBsdXJhbDogUHJvcFR5cGVzLnN0cmluZyxcblx0c2luZ3VsYXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXHR0b3RhbDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWdpbmF0aW9uO1xuIiwiaW1wb3J0IHsgY3NzLCBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxuZnVuY3Rpb24gUGFnZSAoe1xuXHRkaXNhYmxlZCxcblx0c2VsZWN0ZWQsXG5cdC4uLnByb3BzXG59KSB7XG5cdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRjbGFzc2VzLnBhZ2UsXG5cdFx0ISFkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLFxuXHRcdCEhc2VsZWN0ZWQgJiYgY2xhc3Nlcy5zZWxlY3RlZFxuXHQpO1xuXHRyZXR1cm4gKFxuXHRcdDxidXR0b24gey4uLnByb3BzfSAvPlxuXHQpO1xufTtcblxuUGFnZS5wcm9wVHlwZXMgPSB7XG5cdGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0c2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcblxuLyogZXNsaW50IHF1b3RlLXByb3BzOiBbXCJlcnJvclwiLCBcImFzLW5lZWRlZFwiXSAqL1xuXG5jb25zdCBzZWxlY3RlZFN0eWxlID0ge1xuXHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhZ2luYXRpb24uc2VsZWN0ZWQuYmFja2dyb3VuZCxcblx0Ym9yZGVyQ29sb3I6IHRoZW1lLnBhZ2luYXRpb24uc2VsZWN0ZWQuYm9yZGVyLFxuXHRjb2xvcjogdGhlbWUucGFnaW5hdGlvbi5zZWxlY3RlZC5jb2xvcixcblx0Y3Vyc29yOiAnZGVmYXVsdCcsXG5cdHpJbmRleDogMixcbn07XG5jb25zdCBwc2V1ZG9TdHlsZSA9IHtcblx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWdpbmF0aW9uLmhvdmVyLmJhY2tncm91bmQsXG5cdGJvcmRlckNvbG9yOiB0aGVtZS5wYWdpbmF0aW9uLmhvdmVyLmJvcmRlcixcblx0Y29sb3I6IHRoZW1lLnBhZ2luYXRpb24uaG92ZXIuY29sb3IsXG5cdG91dGxpbmU6ICdub25lJyxcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG5cdHBhZ2U6IHtcblx0XHRhcHBlYXJhbmNlOiAnbm9uZScsXG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG5cdFx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuZGVmYXVsdCxcblx0XHRjb2xvcjogdGhlbWUucGFnaW5hdGlvbi5jb2xvcixcblx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRmbG9hdDogJ2xlZnQnLCAvLyBDb2xsYXBzZSB3aGl0ZS1zcGFjZVxuXHRcdG1hcmdpblJpZ2h0OiAnMC4yNWVtJyxcblx0XHRwYWRkaW5nOiAnMCAuN2VtJyxcblx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXG5cdFx0Ly8gaGFuZGxlIGhvdmVyIGFuZCBmb2N1c1xuXHRcdCc6aG92ZXInOiBwc2V1ZG9TdHlsZSxcblx0XHQnOmZvY3VzJzogcHNldWRvU3R5bGUsXG5cdH0sXG5cblx0Ly8gc2VsZWN0ZWQgcGFnZVxuXHRzZWxlY3RlZDoge1xuXHRcdC4uLnNlbGVjdGVkU3R5bGUsXG5cblx0XHQnOmhvdmVyJzogc2VsZWN0ZWRTdHlsZSxcblx0XHQnOmZvY3VzJzogc2VsZWN0ZWRTdHlsZSxcblx0fSxcblxuXHQvLyBkaXNhYmxlZCBwYWdlXG5cblx0ZGlzYWJsZWQ6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhZ2luYXRpb24uZGlzYWJsZWQuYmFja2dyb3VuZCxcblx0XHRib3JkZXJDb2xvcjogdGhlbWUucGFnaW5hdGlvbi5kaXNhYmxlZC5iYWNrZ3JvdW5kLFxuXHRcdGNvbG9yOiB0aGVtZS5wYWdpbmF0aW9uLmRpc2FibGVkLmNvbG9yLFxuXHRcdGN1cnNvcjogJ2RlZmF1bHQnLFxuXHR9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCJpbXBvcnQgeyBDaGlsZHJlbiwgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFBhc3MgdGhlIExpZ2h0Ym94IGNvbnRleHQgdGhyb3VnaCB0byB0aGUgUG9ydGFsJ3MgZGVzY2VuZGVudHNcbi8vIFN0YWNrT3ZlcmZsb3cgZGlzY3Vzc2lvbiBodHRwOi8vZ29vLmdsL29jbHJKOVxuXG5jbGFzcyBQYXNzQ29udGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGdldENoaWxkQ29udGV4dCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuY29udGV4dDtcblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiBDaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXHR9XG59O1xuXG5QYXNzQ29udGV4dC5wcm9wVHlwZXMgPSB7XG5cdGNvbnRleHQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5QYXNzQ29udGV4dC5jaGlsZENvbnRleHRUeXBlcyA9IHtcblx0b25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXNzQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFBhc3NDb250ZXh0IGZyb20gJy4uL1Bhc3NDb250ZXh0JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3J0YWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnBvcnRhbEVsZW1lbnQgPSBudWxsO1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcblx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwKTtcblx0XHR0aGlzLnBvcnRhbEVsZW1lbnQgPSBwO1xuXHRcdHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCk7XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlICgpIHtcblx0XHQvLyBBbmltYXRlIGZhZGUgb24gbW91bnQvdW5tb3VudFxuXHRcdGNvbnN0IGR1cmF0aW9uID0gMjAwO1xuXHRcdGNvbnN0IHN0eWxlcyA9IGBcblx0XHRcdFx0LmZhZGUtZW50ZXIgeyBvcGFjaXR5OiAwLjAxOyB9XG5cdFx0XHRcdC5mYWRlLWVudGVyLmZhZGUtZW50ZXItYWN0aXZlIHsgb3BhY2l0eTogMTsgdHJhbnNpdGlvbjogb3BhY2l0eSAke2R1cmF0aW9ufW1zOyB9XG5cdFx0XHRcdC5mYWRlLWxlYXZlIHsgb3BhY2l0eTogMTsgfVxuXHRcdFx0XHQuZmFkZS1sZWF2ZS5mYWRlLWxlYXZlLWFjdGl2ZSB7IG9wYWNpdHk6IDAuMDE7IHRyYW5zaXRpb246IG9wYWNpdHkgJHtkdXJhdGlvbn1tczsgfVxuXHRcdGA7XG5cdFx0cmVuZGVyKFxuXHRcdFx0PFBhc3NDb250ZXh0IGNvbnRleHQ9e3RoaXMuY29udGV4dH0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cblx0XHRcdFx0XHQ8VHJhbnNpdGlvblxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PVwiZGl2XCJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb25OYW1lPVwiZmFkZVwiXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXtkdXJhdGlvbn1cblx0XHRcdFx0XHRcdHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9e2R1cmF0aW9ufVxuXHRcdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1Bhc3NDb250ZXh0Pixcblx0XHRcdHRoaXMucG9ydGFsRWxlbWVudFxuXHRcdCk7XG5cdH1cblx0Y29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5wb3J0YWxFbGVtZW50KTtcblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cblBvcnRhbC5jb250ZXh0VHlwZXMgPSB7XG5cdG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5cbi8vIFVzaW5nIHdpbmRvdy5pbm5lcldpZHRoIGFuZCBzdGF0ZSBpbnN0ZWFkIG9mIENTUyBtZWRpYSBicmVha3BvaW50c1xuLy8gYmVjYXVzZSB3ZSB3YW50IHRvIHJlbmRlciBudWxsIHJhdGhlciB0aGFuIGFuIGVtcHR5IHNwYW4uIEFsbG93aW5nIGZvclxuLy8gQ1NTIHBzZXVkbyBjbGFzc2VzIGxpa2UgOm9ubHktY2hpbGQgdG8gYmVoYXZlIGFzIGV4cGVjdGVkLlxuXG4vLyBSZXR1cm4gdHJ1ZSBpZiB3aW5kb3cgKyBkb2N1bWVudFxuY29uc3QgY2FuVXNlRE9NID0gISEoXG5cdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5cdCYmIHdpbmRvdy5kb2N1bWVudFxuXHQmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuKTtcblxuY2xhc3MgUmVzcG9uc2l2ZVRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHdpbmRvd1dpZHRoOiBjYW5Vc2VET00gPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDAsXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCAoKSB7XG5cdFx0aWYgKGNhblVzZURPTSkge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcblx0XHRcdHRoaXMuaGFuZGxlUmVzaXplKCk7XG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblx0XHRpZiAoY2FuVXNlRE9NKSB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuXHRcdH1cblx0fVxuXHRoYW5kbGVSZXNpemUgKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0d2luZG93V2lkdGg6IGNhblVzZURPTSA/IHdpbmRvdy5pbm5lcldpZHRoIDogMCxcblx0XHR9KTtcblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGNvbXBvbmVudDogQ29tcG9uZW50LFxuXHRcdFx0aGlkZGVuTEcsXG5cdFx0XHRoaWRkZW5NRCxcblx0XHRcdGhpZGRlblNNLFxuXHRcdFx0aGlkZGVuWFMsXG5cdFx0XHR2aXNpYmxlTEcsXG5cdFx0XHR2aXNpYmxlTUQsXG5cdFx0XHR2aXNpYmxlU00sXG5cdFx0XHR2aXNpYmxlWFMsXG5cdFx0XHQuLi5wcm9wc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgd2luZG93V2lkdGggfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRsZXQgdGV4dDtcblxuXHRcdC8vIHNldCB0ZXh0IHZhbHVlIGZyb20gYnJlYWtwb2ludDsgYXR0ZW1wdCBYUyAtLT4gTEdcblx0XHRpZiAod2luZG93V2lkdGggPCB0aGVtZS5icmVha3BvaW50TnVtZXJpYy5tb2JpbGUpIHtcblx0XHRcdHRleHQgPSB2aXNpYmxlWFMgfHwgaGlkZGVuU00gfHwgaGlkZGVuTUQgfHwgaGlkZGVuTEc7XG5cdFx0fSBlbHNlIGlmICh3aW5kb3dXaWR0aCA8IHRoZW1lLmJyZWFrcG9pbnROdW1lcmljLnRhYmxldFBvcnRyYWl0KSB7XG5cdFx0XHR0ZXh0ID0gaGlkZGVuWFMgfHwgdmlzaWJsZVNNIHx8IGhpZGRlbk1EIHx8IGhpZGRlbkxHO1xuXHRcdH0gZWxzZSBpZiAod2luZG93V2lkdGggPCB0aGVtZS5icmVha3BvaW50TnVtZXJpYy50YWJsZXRMYW5kc2NhcGUpIHtcblx0XHRcdHRleHQgPSBoaWRkZW5YUyB8fCBoaWRkZW5TTSB8fCB2aXNpYmxlTUQgfHwgaGlkZGVuTEc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRleHQgPSBoaWRkZW5YUyB8fCBoaWRkZW5TTSB8fCBoaWRkZW5NRCB8fCB2aXNpYmxlTEc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRleHQgPyA8Q29tcG9uZW50IHsuLi5wcm9wc30+e3RleHR9PC9Db21wb25lbnQ+IDogbnVsbDtcblx0fVxufTtcblxuUmVzcG9uc2l2ZVRleHQucHJvcFR5cGVzID0ge1xuXHRoaWRkZW5MRzogUHJvcFR5cGVzLnN0cmluZyxcblx0aGlkZGVuTUQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGhpZGRlblNNOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRoaWRkZW5YUzogUHJvcFR5cGVzLnN0cmluZyxcblx0dmlzaWJsZUxHOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR2aXNpYmxlTUQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHZpc2libGVTTTogUHJvcFR5cGVzLnN0cmluZyxcblx0dmlzaWJsZVhTOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblJlc3BvbnNpdmVUZXh0LmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnc3BhbicsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3BvbnNpdmVUZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuXG5mdW5jdGlvbiBTY3JlZW5SZWFkZXJPbmx5ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoY2xhc3Nlcy5zck9ubHksIGNsYXNzTmFtZSk7XG5cblx0cmV0dXJuIDxzcGFuIHsuLi5wcm9wc30gLz47XG59O1xuXG5jb25zdCBjbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuXHRzck9ubHk6IHtcblx0XHRib3JkZXI6IDAsXG5cdFx0Y2xpcDogJ3JlY3QoMCwwLDAsMCknLFxuXHRcdGhlaWdodDogMSxcblx0XHRtYXJnaW46IC0xLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHdpZHRoOiAxLFxuXHR9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2NyZWVuUmVhZGVyT25seTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsTG9jayBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubG9ja0NvdW50ID0gMDtcblx0fVxuXHRjb21wb25lbnRXaWxsTW91bnQgKCkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG5cdFx0dGhpcy5sb2NrQ291bnQrKztcblx0XHRpZiAodGhpcy5sb2NrQ291bnQgPiAxKSByZXR1cm47XG5cblx0XHQvL1x0RklYTUUgaU9TIGlnbm9yZXMgb3ZlcmZsb3cgb24gYm9keVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBzY3JvbGxCYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcblxuXHRcdFx0dGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9IHNjcm9sbEJhcldpZHRoICsgJ3B4Jztcblx0XHRcdHRhcmdldC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmaW5kIGJvZHkgZWxlbWVudC4gRXJyOicsIGVycik7XG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5sb2NrQ291bnQgPT09IDApIHJldHVybjtcblxuXHRcdHRoaXMubG9ja0NvdW50LS07XG5cdFx0aWYgKHRoaXMubG9ja0NvdW50ID4gMCkgcmV0dXJuOyAvLyBTdGlsbCBsb2NrZWRcblxuXHRcdC8vXHRGSVhNRSBpT1MgaWdub3JlcyBvdmVyZmxvdyBvbiBib2R5XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG5cblx0XHRcdHRhcmdldC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcblx0XHRcdHRhcmdldC5zdHlsZS5vdmVyZmxvd1kgPSAnJztcblxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZpbmQgYm9keSBlbGVtZW50LiBFcnI6JywgZXJyKTtcblx0XHR9XG5cdH1cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuIiwiaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRhbmdlcjogdGhlbWUuY29sb3IuZGFuZ2VyLFxuXHRkZWZhdWx0OiB0aGVtZS5jb2xvci5ncmF5ODAsXG5cdGVycm9yOiB0aGVtZS5jb2xvci5kYW5nZXIsXG5cdGluZm86IHRoZW1lLmNvbG9yLmluZm8sXG5cdHByaW1hcnk6IHRoZW1lLmNvbG9yLnByaW1hcnksXG5cdHN1Y2Nlc3M6IHRoZW1lLmNvbG9yLnN1Y2Nlc3MsXG5cdHdhcm5pbmc6IHRoZW1lLmNvbG9yLndhcm5pbmcsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHN0eWxlcyk7XG5cbmZ1bmN0aW9uIFNlZ21lbnRlZENvbnRyb2wgKHtcblx0Y2xhc3NOYW1lLFxuXHRjb2xvcixcblx0Y3JvcFRleHQsXG5cdGVxdWFsV2lkdGhTZWdtZW50cyxcblx0aW5saW5lLFxuXHRvbkNoYW5nZSxcblx0b3B0aW9ucyxcblx0dmFsdWUsXG5cdC4uLnByb3BzXG59KSB7XG5cdHByb3BzLmNsYXNzTmFtZSA9IGNzcyhcblx0XHRjbGFzc2VzLmNvbnRyb2wsXG5cdFx0aW5saW5lID8gY2xhc3Nlcy5jb250cm9sX19pbmxpbmUgOiBudWxsLFxuXHRcdGNsYXNzTmFtZVxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiB7Li4ucHJvcHN9PlxuXHRcdFx0e29wdGlvbnMubWFwKChvcHQpID0+IHtcblx0XHRcdFx0Y29uc3QgYnV0dG9uQ2xhc3NOYW1lID0gY3NzKFxuXHRcdFx0XHRcdGNsYXNzZXMuYnV0dG9uLFxuXHRcdFx0XHRcdG9wdC5kaXNhYmxlZCA/IGNsYXNzZXMuYnV0dG9uX19kaXNhYmxlZCA6IG51bGwsXG5cdFx0XHRcdFx0b3B0LnZhbHVlID09PSB2YWx1ZSA/IGNsYXNzZXNbJ2J1dHRvbl9fJyArIGNvbG9yXSA6IG51bGwsXG5cdFx0XHRcdFx0Y3JvcFRleHQgPyBjbGFzc2VzLmJ1dHRvbl9fY3JvcFRleHQgOiBudWxsLFxuXHRcdFx0XHRcdGVxdWFsV2lkdGhTZWdtZW50cyA/IGNsYXNzZXMuYnV0dG9uX19lcXVhbFdpZHRoIDogbnVsbFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XG5cdFx0XHRcdFx0XHRrZXk9e29wdC52YWx1ZX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyFvcHQuZGlzYWJsZWQgJiYgKCgpID0+IG9uQ2hhbmdlKG9wdC52YWx1ZSkpfVxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHR0aXRsZT17Y3JvcFRleHQgPyBvcHQubGFiZWwgOiBudWxsfVxuXHRcdFx0XHRcdFx0dGFiSW5kZXg9e29wdC5kaXNhYmxlZCA/ICctMScgOiAnJ31cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtvcHQubGFiZWx9XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L2Rpdj4pO1xufTtcblxuY29uc3QgdmFsdWVQcm9wU2hhcGUgPSBbXG5cdFByb3BUeXBlcy5ib29sLFxuXHRQcm9wVHlwZXMubnVtYmVyLFxuXHRQcm9wVHlwZXMuc3RyaW5nLFxuXTtcblxuU2VnbWVudGVkQ29udHJvbC5wcm9wVHlwZXMgPSB7XG5cdGNvbG9yOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoY29sb3JzKSksXG5cdGNyb3BUZXh0OiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hlbiBgaW5saW5lICYmIGVxdWFsV2lkdGhTZWdtZW50c2AgY3JvcHMgdG8gdGhlIG5leHQgbGFyZ2VzdCBvcHRpb24gbGVuZ3RoXG5cdGVxdWFsV2lkdGhTZWdtZW50czogUHJvcFR5cGVzLmJvb2wsIC8vIG9ubHkgcmVsZXZhbnQgd2hlbiBgaW5saW5lID09PSBmYWxzZWBcblx0aW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcblx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuXHRcdFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHRkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cdFx0XHRsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRcdHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKHZhbHVlUHJvcFNoYXBlKSxcblx0XHR9KVxuXHQpLmlzUmVxdWlyZWQsXG5cdHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKHZhbHVlUHJvcFNoYXBlKSxcbn07XG5TZWdtZW50ZWRDb250cm9sLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29sb3I6ICdkZWZhdWx0Jyxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VnbWVudGVkQ29udHJvbDtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VnbWVudGVkIENvbnRyb2xcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKiBlc2xpbnQgcXVvdGUtcHJvcHM6IFtcImVycm9yXCIsIFwiYXMtbmVlZGVkXCJdICovXG5cbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uLy4uL3RoZW1lJztcblxuLy8gUHJlcGFyZSB2YXJpYW50c1xuY29uc3QgY29sb3JWYXJpYW50cyA9IHt9O1xuT2JqZWN0LmtleXMoY29sb3JzKS5mb3JFYWNoKGNvbG9yID0+IHtcblx0Y29uc3QgcHNldWRvU3R5bGVzID0ge1xuXHRcdGJhY2tncm91bmRDb2xvcjogY29sb3JzW2NvbG9yXSxcblx0XHRjb2xvcjogJ3doaXRlJyxcblx0fTtcblx0Y29sb3JWYXJpYW50c1snYnV0dG9uX18nICsgY29sb3JdID0ge1xuXHRcdGJhY2tncm91bmRDb2xvcjogY29sb3JzW2NvbG9yXSxcblx0XHRjb2xvcjogJ3doaXRlJyxcblxuXHRcdCc6aG92ZXInOiBwc2V1ZG9TdHlsZXMsXG5cdFx0Jzpmb2N1cyc6IHBzZXVkb1N0eWxlcyxcblx0XHQnOmFjdGl2ZSc6IHBzZXVkb1N0eWxlcyxcblx0fTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y29udHJvbDoge1xuXHRcdGJvcmRlcldpZHRoOiAxLFxuXHRcdGJvcmRlclN0eWxlOiAnc29saWQnLFxuXHRcdGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXIuY29sb3IuZGVmYXVsdCxcblx0XHRib3JkZXJSYWRpdXM6ICcwLjRlbScsXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGZvbnRTaXplOiB0aGVtZS5mb250LnNpemUuc21hbGwsXG5cdFx0cGFkZGluZ0xlZnQ6IDEsXG5cdFx0cGFkZGluZ1JpZ2h0OiAxLFxuXHR9LFxuXHRjb250cm9sX19pbmxpbmU6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuXHR9LFxuXG5cdC8vIGJ1dHRvbnNcblx0YnV0dG9uOiB7XG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdGJvcmRlcjogMCxcblx0XHRib3JkZXJSYWRpdXM6ICcwLjI1ZW0nLFxuXHRcdGZsZXhHcm93OiAxLFxuXHRcdG1hcmdpbjogJzJweCAxcHgnLFxuXHRcdHBhZGRpbmc6ICcwLjNlbSAwLjllbScsXG5cdFx0b3V0bGluZTogMCxcblxuXHRcdCc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNSknIH0sXG5cdFx0Jzpmb2N1cyc6IHsgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjA1KScgfSxcblx0XHQnOmFjdGl2ZSc6IHsgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjEpJyB9LFxuXHR9LFxuXHRidXR0b25fX2VxdWFsV2lkdGg6IHtcblx0XHRmbGV4OiAnMSAxIDAnLFxuXHR9LFxuXHRidXR0b25fX2Nyb3BUZXh0OiB7XG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcblx0XHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcblx0fSxcblx0YnV0dG9uX19kaXNhYmxlZDoge1xuXHRcdG9wYWNpdHk6IDAuNixcblx0XHRwb2ludGVyRXZlbnRzOiAnbm9uZScsXG5cdH0sXG5cblx0Ly8gY29sb3JzXG5cdC4uLmNvbG9yVmFyaWFudHMsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBbJ2RhbmdlcicsICdkZWZhdWx0JywgJ2ludmVydGVkJywgJ3ByaW1hcnknLCAnc3VjY2VzcycsICd3YXJuaW5nJ107XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBTY3JlZW5SZWFkZXJPbmx5IGZyb20gJy4uL1NjcmVlblJlYWRlck9ubHknO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgc2l6ZXMgZnJvbSAnLi9zaXplcyc7XG5cbmZ1bmN0aW9uIFNwaW5uZXIgKHsgY2xhc3NOYW1lLCBzaXplLCBjb2xvciwgLi4ucHJvcHMgfSkge1xuXHRwcm9wcy5jbGFzc05hbWUgPSBjc3MoXG5cdFx0Y2xhc3Nlcy5iYXNlLFxuXHRcdGNsYXNzZXNbc2l6ZV0sXG5cdFx0Y2xhc3NOYW1lXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHsuLi5wcm9wc30+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2Ake2NzcyhjbGFzc2VzLmRvdCwgY2xhc3Nlc1snc2l6ZV9fJyArIHNpemVdLCBjbGFzc2VzWydjb2xvcl9fJyArIGNvbG9yXSwgY2xhc3Nlcy5kb3RfX2ZpcnN0KX1gfSAvPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtgJHtjc3MoY2xhc3Nlcy5kb3QsIGNsYXNzZXNbJ3NpemVfXycgKyBzaXplXSwgY2xhc3Nlc1snY29sb3JfXycgKyBjb2xvcl0sIGNsYXNzZXMuZG90X19zZWNvbmQpfWB9IC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2Ake2NzcyhjbGFzc2VzLmRvdCwgY2xhc3Nlc1snc2l6ZV9fJyArIHNpemVdLCBjbGFzc2VzWydjb2xvcl9fJyArIGNvbG9yXSwgY2xhc3Nlcy5kb3RfX3RoaXJkKX1gfSAvPlxuXHRcdFx0PFNjcmVlblJlYWRlck9ubHk+TG9hZGluZy4uLjwvU2NyZWVuUmVhZGVyT25seT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuXHRjb2xvcjogUHJvcFR5cGVzLm9uZU9mKGNvbG9ycyksXG5cdHNpemU6IFByb3BUeXBlcy5vbmVPZihzaXplcyksXG59O1xuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7XG5cdHNpemU6ICdtZWRpdW0nLFxuXHRjb2xvcjogJ2RlZmF1bHQnLFxufTtcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHN0eWxlcyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3Bpbm5lcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3Bpbm5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCBzaXplcyBmcm9tICcuL3NpemVzJztcblxuLy8gUHJlcGFyZSB2YXJpYW50c1xuY29uc3QgY29sb3JWYXJpYW50cyA9IHt9O1xuY29sb3JzLmZvckVhY2goY29sb3IgPT4ge1xuXHRjb2xvclZhcmlhbnRzW2Bjb2xvcl9fJHtjb2xvcn1gXSA9IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnNwaW5uZXIuY29sb3JbY29sb3JdLFxuXHR9O1xufSk7XG5cbi8vIFByZXBhcmUgc2l6ZXNcbmNvbnN0IHNpemVWYXJpYW50cyA9IHt9O1xuc2l6ZXMuZm9yRWFjaChzaXplID0+IHtcblx0c2l6ZVZhcmlhbnRzW2BzaXplX18ke3NpemV9YF0gPSB7XG5cdFx0Zm9udFNpemU6IHRoZW1lLnNwaW5uZXIuc2l6ZVtzaXplXSxcblx0fTtcbn0pO1xuXG4vLyBEZWNsYXJlIGFuaW1hdGlvbiBrZXlmcmFtZXNcbmNvbnN0IHB1bHNlID0ge1xuXHQnMCUsIDgwJSwgMTAwJSc6IHsgb3BhY2l0eTogMCB9LFxuXHQnNDAlJzogeyBvcGFjaXR5OiAxIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YmFzZToge1xuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdGxpbmVIZWlnaHQ6IDEsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHR3aWR0aDogJzVlbScsXG5cdH0sXG5cdHNtYWxsOlx0eyBmb250U2l6ZTogNCB9LFxuXHRtZWRpdW06XHR7IGZvbnRTaXplOiA4IH0sXG5cdGxhcmdlOlx0eyBmb250U2l6ZTogMTYgfSxcblxuXHQvLyB0ZXh0XG5cdHRleHQ6IHtcblx0XHRib3JkZXI6IDAsXG5cdFx0Y2xpcDogJ3JlY3QoMCwwLDAsMCknLFxuXHRcdGhlaWdodDogMSxcblx0XHRtYXJnaW46IC0xLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHdpZHRoOiAxLFxuXHR9LFxuXG5cdC8vIGRvdHNcblx0ZG90OiB7XG5cdFx0YW5pbWF0aW9uTmFtZTogcHVsc2UsXG5cdFx0YW5pbWF0aW9uRHVyYXRpb246ICcxcycsXG5cdFx0YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMWVtJyxcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRoZWlnaHQ6ICcxZW0nLFxuXHRcdHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuXHRcdHdpZHRoOiAnMWVtJyxcblx0fSxcblx0ZG90X19zZWNvbmQ6IHtcblx0XHRhbmltYXRpb25EZWxheTogJzE2MG1zJyxcblx0XHRtYXJnaW5MZWZ0OiAnMWVtJyxcblx0fSxcblx0ZG90X190aGlyZDoge1xuXHRcdGFuaW1hdGlvbkRlbGF5OiAnMzIwbXMnLFxuXHRcdG1hcmdpbkxlZnQ6ICcxZW0nLFxuXHR9LFxuXG5cdC8vIENvbG9yc1xuXHQuLi5jb2xvclZhcmlhbnRzLFxuXG5cdC8vIFNpemVzXG5cdC4uLnNpemVWYXJpYW50cyxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0QWxlcnQ6IHJlcXVpcmUoJy4vQWxlcnQnKSxcblx0QmxhbmtTdGF0ZTogcmVxdWlyZSgnLi9CbGFua1N0YXRlJyksXG5cdEJ1dHRvbjogcmVxdWlyZSgnLi9CdXR0b24nKSxcblx0Q2VudGVyOiByZXF1aXJlKCcuL0NlbnRlcicpLFxuXHRDaGlwOiByZXF1aXJlKCcuL0NoaXAnKSxcblx0Q29udGFpbmVyOiByZXF1aXJlKCcuL0NvbnRhaW5lcicpLFxuXHREcm9wZG93bkJ1dHRvbjogcmVxdWlyZSgnLi9Ecm9wZG93bkJ1dHRvbicpLFxuXHRGb3JtOiByZXF1aXJlKCcuL0Zvcm0nKSxcblx0Rm9ybUZpZWxkOiByZXF1aXJlKCcuL0Zvcm1GaWVsZCcpLFxuXHRGb3JtSW5wdXQ6IHJlcXVpcmUoJy4vRm9ybUlucHV0JyksXG5cdEZvcm1MYWJlbDogcmVxdWlyZSgnLi9Gb3JtTGFiZWwnKSxcblx0Rm9ybU5vdGU6IHJlcXVpcmUoJy4vRm9ybU5vdGUnKSxcblx0Rm9ybVNlbGVjdDogcmVxdWlyZSgnLi9Gb3JtU2VsZWN0JyksXG5cdEdseXBoOiByZXF1aXJlKCcuL0dseXBoJyksXG5cdEdseXBoQnV0dG9uOiByZXF1aXJlKCcuL0dseXBoQnV0dG9uJyksXG5cdEdseXBoRmllbGQ6IHJlcXVpcmUoJy4vR2x5cGhGaWVsZCcpLFxuXHRHcmlkOiByZXF1aXJlKCcuL0dyaWQnKSxcblx0SW5saW5lR3JvdXA6IHJlcXVpcmUoJy4vSW5saW5lR3JvdXAnKSxcblx0SW5saW5lR3JvdXBTZWN0aW9uOiByZXF1aXJlKCcuL0lubGluZUdyb3VwU2VjdGlvbicpLFxuXHRMYWJlbGxlZENvbnRyb2w6IHJlcXVpcmUoJy4vTGFiZWxsZWRDb250cm9sJyksXG5cdExvYWRpbmdCdXR0b246IHJlcXVpcmUoJy4vTG9hZGluZ0J1dHRvbicpLFxuXHRNb2RhbDogcmVxdWlyZSgnLi9Nb2RhbCcpLFxuXHRQYWdpbmF0aW9uOiByZXF1aXJlKCcuL1BhZ2luYXRpb24nKSxcblx0UmVzcG9uc2l2ZVRleHQ6IHJlcXVpcmUoJy4vUmVzcG9uc2l2ZVRleHQnKSxcblx0U2NyZWVuUmVhZGVyT25seTogcmVxdWlyZSgnLi9TY3JlZW5SZWFkZXJPbmx5JyksXG5cdFNlZ21lbnRlZENvbnRyb2w6IHJlcXVpcmUoJy4vU2VnbWVudGVkQ29udHJvbCcpLFxuXHRTcGlubmVyOiByZXF1aXJlKCcuL1NwaW5uZXInKSxcbn07XG4iLCIvKipcbiAqIFRoZSBhY3R1YWwgU2lnbiBJbiB2aWV3LCB3aXRoIHRoZSBsb2dpbiBmb3JtXG4gKi9cblxuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB4aHIgZnJvbSAneGhyJztcblxuaW1wb3J0IEFsZXJ0IGZyb20gJy4vY29tcG9uZW50cy9BbGVydCc7XG5pbXBvcnQgQnJhbmQgZnJvbSAnLi9jb21wb25lbnRzL0JyYW5kJztcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuL2NvbXBvbmVudHMvVXNlckluZm8nO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcblxudmFyIFNpZ25pblZpZXcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdHBhc3N3b3JkOiAnJyxcblx0XHRcdGlzQW5pbWF0aW5nOiBmYWxzZSxcblx0XHRcdGlzSW52YWxpZDogZmFsc2UsXG5cdFx0XHRpbnZhbGlkTWVzc2FnZTogJycsXG5cdFx0XHRzaWduZWRPdXQ6IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggPT09ICc/c2lnbmVkb3V0Jyxcblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudCAoKSB7XG5cdFx0Ly8gRm9jdXMgdGhlIGVtYWlsIGZpZWxkIHdoZW4gd2UncmUgbW91bnRlZFxuXHRcdGlmICh0aGlzLnJlZnMuZW1haWwpIHtcblx0XHRcdHRoaXMucmVmcy5lbWFpbC5zZWxlY3QoKTtcblx0XHR9XG5cdH0sXG5cdGhhbmRsZUlucHV0Q2hhbmdlIChlKSB7XG5cdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGUgd2hlbiB0aGUgaW5wdXQgY2hhbmdlc1xuXHRcdGNvbnN0IG5ld1N0YXRlID0ge307XG5cdFx0bmV3U3RhdGVbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblx0fSxcblx0aGFuZGxlU3VibWl0IChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vIElmIGVpdGhlciBwYXNzd29yZCBvciBtYWlsIGFyZSBtaXNzaW5nLCBzaG93IGFuIGVycm9yXG5cdFx0aWYgKCF0aGlzLnN0YXRlLmVtYWlsIHx8ICF0aGlzLnN0YXRlLnBhc3N3b3JkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kaXNwbGF5RXJyb3IoJ1BsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZCB0byBzaWduIGluLicpO1xuXHRcdH1cblxuXHRcdHhocih7XG5cdFx0XHR1cmw6IGAke0tleXN0b25lLmFkbWluUGF0aH0vYXBpL3Nlc3Npb24vc2lnbmluYCxcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0anNvbjoge1xuXHRcdFx0XHRlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcblx0XHRcdFx0cGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsXG5cdFx0XHR9LFxuXHRcdFx0aGVhZGVyczogYXNzaWduKHt9LCBLZXlzdG9uZS5jc3JmLmhlYWRlciksXG5cdFx0fSwgKGVyciwgcmVzcCwgYm9keSkgPT4ge1xuXHRcdFx0aWYgKGVyciB8fCBib2R5ICYmIGJvZHkuZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIGJvZHkuZXJyb3IgPT09ICdpbnZhbGlkIGNzcmYnXG5cdFx0XHRcdFx0PyB0aGlzLmRpc3BsYXlFcnJvcignU29tZXRoaW5nIHdlbnQgd3Jvbmc7IHBsZWFzZSByZWZyZXNoIHlvdXIgYnJvd3NlciBhbmQgdHJ5IGFnYWluLicpXG5cdFx0XHRcdFx0OiB0aGlzLmRpc3BsYXlFcnJvcignVGhlIGVtYWlsIGFuZCBwYXNzd29yZCB5b3UgZW50ZXJlZCBhcmUgbm90IHZhbGlkLicpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gUmVkaXJlY3QgdG8gd2hlcmUgd2UgY2FtZSBmcm9tIG9yIHRvIHRoZSBkZWZhdWx0IGFkbWluIHBhdGhcblx0XHRcdFx0aWYgKEtleXN0b25lLnJlZGlyZWN0KSB7XG5cdFx0XHRcdFx0dG9wLmxvY2F0aW9uLmhyZWYgPSBLZXlzdG9uZS5yZWRpcmVjdDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0b3AubG9jYXRpb24uaHJlZiA9IHRoaXMucHJvcHMuZnJvbSA/IHRoaXMucHJvcHMuZnJvbSA6IEtleXN0b25lLmFkbWluUGF0aDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHQvKipcblx0ICogRGlzcGxheSBhbiBlcnJvciBtZXNzYWdlXG5cdCAqXG5cdCAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB5b3Ugd2FudCB0byBzaG93XG5cdCAqL1xuXHRkaXNwbGF5RXJyb3IgKG1lc3NhZ2UpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlzQW5pbWF0aW5nOiB0cnVlLFxuXHRcdFx0aXNJbnZhbGlkOiB0cnVlLFxuXHRcdFx0aW52YWxpZE1lc3NhZ2U6IG1lc3NhZ2UsXG5cdFx0fSk7XG5cdFx0c2V0VGltZW91dCh0aGlzLmZpbmlzaEFuaW1hdGlvbiwgNzUwKTtcblx0fSxcblx0Ly8gRmluaXNoIHRoZSBhbmltYXRpb24gYW5kIHNlbGVjdCB0aGUgZW1haWwgZmllbGRcblx0ZmluaXNoQW5pbWF0aW9uICgpIHtcblx0XHQvLyBUT0RPIGlzTW91bnRlZCB3YXMgZGVwcmVjYXRlZCwgZmluZCBvdXQgaWYgd2UgbmVlZCB0aGlzIGd1YXJkXG5cdFx0aWYgKCF0aGlzLmlzTW91bnRlZCgpKSByZXR1cm47XG5cdFx0aWYgKHRoaXMucmVmcy5lbWFpbCkge1xuXHRcdFx0dGhpcy5yZWZzLmVtYWlsLnNlbGVjdCgpO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlzQW5pbWF0aW5nOiBmYWxzZSxcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyICgpIHtcblx0XHRjb25zdCBib3hDbGFzc25hbWUgPSBjbGFzc25hbWVzKCdhdXRoLWJveCcsIHtcblx0XHRcdCdhdXRoLWJveC0taGFzLWVycm9ycyc6IHRoaXMuc3RhdGUuaXNBbmltYXRpbmcsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aC13cmFwcGVyXCI+XG5cdFx0XHRcdDxBbGVydFxuXHRcdFx0XHRcdGlzSW52YWxpZD17dGhpcy5zdGF0ZS5pc0ludmFsaWR9XG5cdFx0XHRcdFx0c2lnbmVkT3V0PXt0aGlzLnN0YXRlLnNpZ25lZE91dH1cblx0XHRcdFx0XHRpbnZhbGlkTWVzc2FnZT17dGhpcy5zdGF0ZS5pbnZhbGlkTWVzc2FnZX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2JveENsYXNzbmFtZX0+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInUtaGlkZGVuLXZpc3VhbGx5XCI+e3RoaXMucHJvcHMuYnJhbmQgPyB0aGlzLnByb3BzLmJyYW5kIDogJ0tleXN0b25lJ30gU2lnbiBJbiA8L2gxPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1ib3hfX2lubmVyXCI+XG5cdFx0XHRcdFx0XHQ8QnJhbmRcblx0XHRcdFx0XHRcdFx0bG9nbz17dGhpcy5wcm9wcy5sb2dvfVxuXHRcdFx0XHRcdFx0XHRicmFuZD17dGhpcy5wcm9wcy5icmFuZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy51c2VyID8gKFxuXHRcdFx0XHRcdFx0XHQ8VXNlckluZm9cblx0XHRcdFx0XHRcdFx0XHRhZG1pblBhdGg9e3RoaXMucHJvcHMuZnJvbSA/IHRoaXMucHJvcHMuZnJvbSA6IEtleXN0b25lLmFkbWluUGF0aH1cblx0XHRcdFx0XHRcdFx0XHRzaWdub3V0UGF0aD17YCR7S2V5c3RvbmUuYWRtaW5QYXRofS9zaWdub3V0YH1cblx0XHRcdFx0XHRcdFx0XHR1c2VyQ2FuQWNjZXNzS2V5c3RvbmU9e3RoaXMucHJvcHMudXNlckNhbkFjY2Vzc0tleXN0b25lfVxuXHRcdFx0XHRcdFx0XHRcdHVzZXJOYW1lPXt0aGlzLnByb3BzLnVzZXIubmFtZX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxMb2dpbkZvcm1cblx0XHRcdFx0XHRcdFx0XHRlbWFpbD17dGhpcy5zdGF0ZS5lbWFpbH1cblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVJbnB1dENoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuXHRcdFx0XHRcdFx0XHRcdGlzQW5pbWF0aW5nPXt0aGlzLnN0YXRlLmlzQW5pbWF0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdHBhc3N3b3JkPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1mb290ZXJcIj5cblx0XHRcdFx0XHQ8c3Bhbj5Qb3dlcmVkIGJ5IDwvc3Bhbj5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL2tleXN0b25lanMuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJUaGUgTm9kZS5qcyBDTVMgYW5kIHdlYiBhcHBsaWNhdGlvbiBwbGF0Zm9ybSAobmV3IHdpbmRvdylcIj5LZXlzdG9uZUpTPC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG59KTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pblZpZXc7XG4iLCIvKipcbiAqIFJlbmRlcnMgYW4gQWxlcnQuIFBhc3MgZWl0aGVyIGFuIGlzSW52YWxpZCBhbmQgaW52YWxpZE1lc3NhZ2UgcHJvcCwgb3Igc2V0XG4gKiB0aGUgc2lnbmVkT3V0IHByb3AgdG8gdHJ1ZSB0byBzaG93IHRoZSBzdGFuZGFyZCBzaWduZWQgb3V0IG1lc3NhZ2VcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICcuLi8uLi9BcHAvZWxlbWVudGFsJztcblxuY29uc3QgQWxlcnRWaWV3ID0gZnVuY3Rpb24gKHByb3BzKSB7XG5cdGlmIChwcm9wcy5pc0ludmFsaWQpIHtcblx0XHRyZXR1cm4gPEFsZXJ0IGtleT1cImVycm9yXCIgY29sb3I9XCJkYW5nZXJcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pntwcm9wcy5pbnZhbGlkTWVzc2FnZX08L0FsZXJ0Pjtcblx0fSBlbHNlIGlmIChwcm9wcy5zaWduZWRPdXQpIHtcblx0XHRyZXR1cm4gPEFsZXJ0IGtleT1cInNpZ25lZC1vdXRcIiBjb2xvcj1cImluZm9cIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PllvdSBoYXZlIGJlZW4gc2lnbmVkIG91dC48L0FsZXJ0Pjtcblx0fSBlbHNlIHtcblx0XHQvLyBDYW4ndCByZXR1cm4gXCJudWxsXCIgZnJvbSBzdGF0ZWxlc3MgY29tcG9uZW50c1xuXHRcdHJldHVybiA8c3BhbiAvPjtcblx0fVxufTtcblxuQWxlcnRWaWV3LnByb3BUeXBlcyA9IHtcblx0aW52YWxpZE1lc3NhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdGlzSW52YWxpZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cdHNpZ25lZE91dDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFsZXJ0VmlldztcbiIsIi8qKlxuICogUmVuZGVycyBhIGxvZ28sIGRlZmF1bHRpbmcgdG8gdGhlIEtleXN0b25lIGxvZ28gaWYgbm8gYnJhbmQgaXMgc3BlY2lmaWVkIGluXG4gKiB0aGUgY29uZmlndXJhdGlvblxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJyYW5kID0gZnVuY3Rpb24gKHByb3BzKSB7XG5cdC8vIERlZmF1bHQgdG8gdGhlIEtleXN0b25lSlMgbG9nb1xuXHRsZXQgbG9nbyA9IHsgc3JjOiBgJHtLZXlzdG9uZS5hZG1pblBhdGh9L2ltYWdlcy9sb2dvLnBuZ2AsIHdpZHRoOiAyMDUsIGhlaWdodDogNjggfTtcblx0aWYgKHByb3BzLmxvZ28pIHtcblx0XHQvLyBJZiB0aGUgbG9nbyBpcyBzZXQgdG8gYSBzdHJpbmcsIGl0J3MgYSBkaXJlY3QgbGlua1xuXHRcdGxvZ28gPSB0eXBlb2YgcHJvcHMubG9nbyA9PT0gJ3N0cmluZycgPyB7IHNyYzogcHJvcHMubG9nbyB9IDogcHJvcHMubG9nbztcblx0XHQvLyBPcHRpb25hbGx5IG9uZSBjYW4gc3BlY2lmeSB0aGUgbG9nbyBhcyBhbiBhcnJheSwgYWxzbyBzdGF0aW5nIHRoZVxuXHRcdC8vIHdhbnRlZCB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBsb2dvXG5cdFx0Ly8gVE9ETzogRGVwcmVjYXRlIHRoaXNcblx0XHRpZiAoQXJyYXkuaXNBcnJheShsb2dvKSkge1xuXHRcdFx0bG9nbyA9IHsgc3JjOiBsb2dvWzBdLCB3aWR0aDogbG9nb1sxXSwgaGVpZ2h0OiBsb2dvWzJdIH07XG5cdFx0fVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRoLWJveF9fY29sXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGgtYm94X19icmFuZFwiPlxuXHRcdFx0XHQ8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImF1dGgtYm94X19icmFuZF9fbG9nb1wiPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz17bG9nby5zcmN9XG5cdFx0XHRcdFx0XHR3aWR0aD17bG9nby53aWR0aCA/IGxvZ28ud2lkdGggOiBudWxsfVxuXHRcdFx0XHRcdFx0aGVpZ2h0PXtsb2dvLmhlaWdodCA/IGxvZ28uaGVpZ2h0IDogbnVsbH1cblx0XHRcdFx0XHRcdGFsdD17cHJvcHMuYnJhbmR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJyYW5kO1xuIiwiLyoqXG4gKiBUaGUgbG9naW4gZm9ybSBvZiB0aGUgc2lnbmluIHNjcmVlblxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1GaWVsZCwgRm9ybUlucHV0IH0gZnJvbSAnLi4vLi4vQXBwL2VsZW1lbnRhbCc7XG5cbmNvbnN0IExvZ2luRm9ybSA9ICh7XG5cdGVtYWlsLFxuXHRoYW5kbGVJbnB1dENoYW5nZSxcblx0aGFuZGxlU3VibWl0LFxuXHRpc0FuaW1hdGluZyxcblx0cGFzc3dvcmQsXG59KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRoLWJveF9fY29sXCI+XG5cdFx0XHQ8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlPlxuXHRcdFx0XHQ8Rm9ybUZpZWxkIGxhYmVsPVwiRW1haWxcIiBodG1sRm9yPVwiZW1haWxcIj5cblx0XHRcdFx0XHQ8Rm9ybUlucHV0XG5cdFx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvRm9ybUZpZWxkPlxuXHRcdFx0XHQ8Rm9ybUZpZWxkIGxhYmVsPVwiUGFzc3dvcmRcIiBodG1sRm9yPVwicGFzc3dvcmRcIj5cblx0XHRcdFx0XHQ8Rm9ybUlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Zvcm1GaWVsZD5cblx0XHRcdFx0PEJ1dHRvbiBkaXNhYmxlZD17aXNBbmltYXRpbmd9IGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHRTaWduIEluXG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTG9naW5Gb3JtLnByb3BUeXBlcyA9IHtcblx0ZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGhhbmRsZUlucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdGlzQW5pbWF0aW5nOiBQcm9wVHlwZXMuYm9vbCxcblx0cGFzc3dvcmQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gTG9naW5Gb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL0FwcC9lbGVtZW50YWwnO1xuXG4vLyBUT0RPIEZpZ3VyZSBvdXQgaWYgd2Ugc2hvdWxkIGNoYW5nZSBcIktleXN0b25lXCIgdG8gXCJBZG1pbiBhcmVhXCJcblxuY29uc3QgVXNlckluZm8gPSAoe1xuXHRhZG1pblBhdGgsXG5cdHNpZ25vdXRQYXRoLFxuXHR1c2VyQ2FuQWNjZXNzS2V5c3RvbmUsXG5cdHVzZXJOYW1lLFxufSkgPT4ge1xuXHRjb25zdCBhZG1pbkJ1dHRvbiA9IHVzZXJDYW5BY2Nlc3NLZXlzdG9uZSA/IChcblx0XHQ8QnV0dG9uIGhyZWY9e2FkbWluUGF0aH0gY29sb3I9XCJwcmltYXJ5XCI+XG5cdFx0XHRPcGVuIEtleXN0b25lXG5cdFx0PC9CdXR0b24+XG5cdCkgOiBudWxsO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhdXRoLWJveF9fY29sXCI+XG5cdFx0XHQ8cD5IaSB7dXNlck5hbWV9LDwvcD5cblx0XHRcdDxwPllvdSdyZSBhbHJlYWR5IHNpZ25lZCBpbi48L3A+XG5cdFx0XHR7YWRtaW5CdXR0b259XG5cdFx0XHQ8QnV0dG9uIGhyZWY9e3NpZ25vdXRQYXRofSB2YXJpYW50PVwibGlua1wiIGNvbG9yPVwiY2FuY2VsXCI+XG5cdFx0XHRcdFNpZ24gT3V0XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblVzZXJJbmZvLnByb3BUeXBlcyA9IHtcblx0YWRtaW5QYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHNpZ25vdXRQYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHVzZXJDYW5BY2Nlc3NLZXlzdG9uZTogUHJvcFR5cGVzLmJvb2wsXG5cdHVzZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbmZvO1xuIiwiLyoqXG4gKiBUaGUgc2lnbmluIHBhZ2UsIGl0IHJlbmRlcnMgYSBwYWdlIHdpdGggYSB1c2VybmFtZSBhbmQgcGFzc3dvcmQgaW5wdXQgZm9ybS5cbiAqXG4gKiBUaGlzIGlzIGRlY291cGxlZCBmcm9tIHRoZSBtYWluIGFwcCAoaW4gdGhlIFwiQXBwL1wiIGZvbGRlcikgYmVjYXVzZSB3ZSBpbmplY3RcbiAqIGxvdHMgb2YgZGF0YSBpbnRvIHRoZSBvdGhlciBzY3JlZW5zIChsaWtlIHRoZSBsaXN0cyB0aGF0IGV4aXN0KSB0aGF0IHdlIGRvbid0XG4gKiB3YW50IHRvIGhhdmUgaW5qZWN0ZWQgaGVyZSwgc28gdGhpcyBpcyBhIGNvbXBsZXRlbHkgc2VwYXJhdGUgcm91dGUgYW5kIHRlbXBsYXRlLlxuICovXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNpZ25pbiBmcm9tICcuL1NpZ25pbic7XG5cbmNvbnN0IHBhcmFtcyA9IHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG5jb25zdCBmcm9tID0gdHlwZW9mIHBhcmFtcy5mcm9tID09PSAnc3RyaW5nJyAmJiBwYXJhbXMuZnJvbS5jaGFyQXQoMCkgPT09ICcvJ1xuXHQ/IHBhcmFtcy5mcm9tIDogdW5kZWZpbmVkO1xuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxTaWduaW5cblx0XHRicmFuZD17S2V5c3RvbmUuYnJhbmR9XG5cdFx0ZnJvbT17ZnJvbX1cblx0XHRsb2dvPXtLZXlzdG9uZS5sb2dvfVxuXHRcdHVzZXI9e0tleXN0b25lLnVzZXJ9XG5cdFx0dXNlckNhbkFjY2Vzc0tleXN0b25lPXtLZXlzdG9uZS51c2VyQ2FuQWNjZXNzS2V5c3RvbmV9XG5cdC8+LFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbmluLXZpZXcnKVxuKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGtleS1zcGFjaW5nICovXG5jb25zdCB0aGVtZSA9IHt9O1xuY29uc3QgeyBibGVuZCwgZGFya2VuLCBmYWRlLCBsaWdodGVuIH0gPSByZXF1aXJlKCcuL3V0aWxzL2NvbG9yJyk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09NTU9OXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gYnJlYWtwb2ludFxuXG50aGVtZS5icmVha3BvaW50TnVtZXJpYyA9IHtcblx0bW9iaWxlOiAgICAgICAgICAgNDgwLFxuXHR0YWJsZXRQb3J0cmFpdDogICA3NjgsXG5cdHRhYmxldExhbmRzY2FwZTogIDk5Mixcblx0ZGVza3RvcDogICAgICAgICAgMTIwMCxcbn07XG50aGVtZS5icmVha3BvaW50ID0ge1xuXHR0YWJsZXRQb3J0cmFpdE1pbjogICh0aGVtZS5icmVha3BvaW50TnVtZXJpYy5tb2JpbGUgKyAxKSArICdweCcsXG5cdHRhYmxldExhbmRzY2FwZU1pbjogKHRoZW1lLmJyZWFrcG9pbnROdW1lcmljLnRhYmxldFBvcnRyYWl0ICsgMSkgKyAncHgnLFxuXHRkZXNrdG9wTWluOiAgICAgICAgICh0aGVtZS5icmVha3BvaW50TnVtZXJpYy50YWJsZXRMYW5kc2NhcGUgKyAxKSArICdweCcsXG5cdGRlc2t0b3BMYXJnZU1pbjogICAgKHRoZW1lLmJyZWFrcG9pbnROdW1lcmljLmRlc2t0b3AgKyAxKSArICdweCcsXG5cblx0bW9iaWxlTWF4OiAgICAgICAgICAgdGhlbWUuYnJlYWtwb2ludE51bWVyaWMubW9iaWxlICsgJ3B4Jyxcblx0dGFibGV0UG9ydHJhaXRNYXg6ICAgdGhlbWUuYnJlYWtwb2ludE51bWVyaWMudGFibGV0UG9ydHJhaXQgKyAncHgnLFxuXHR0YWJsZXRMYW5kc2NhcGVNYXg6ICB0aGVtZS5icmVha3BvaW50TnVtZXJpYy50YWJsZXRMYW5kc2NhcGUgKyAncHgnLFxuXHRkZXNrdG9wTWF4OiAgICAgICAgICB0aGVtZS5icmVha3BvaW50TnVtZXJpYy5kZXNrdG9wICsgJ3B4Jyxcbn07XG5cbi8vIGNvbnRhaW5lclxuXG50aGVtZS5jb250YWluZXIgPSB7XG5cdGd1dHRlcjogMjAsXG5cdHNpemU6IHtcblx0XHRzbWFsbDogIDc1MCxcblx0XHRtZWRpdW06IDk3MCxcblx0XHRsYXJnZTogMTE3MCxcblx0fSxcbn07XG5cbi8vIGNvbG9yXG5cbnRoZW1lLmNvbG9yID0ge1xuXHRib2R5OiAgICAgICAgICAgICAgICAnI2ZhZmFmYScsXG5cdGxpbms6ICAgICAgICAgICAgICAgICcjMTM4NWU1Jyxcblx0bGlua0hvdmVyOiAgICAgICAgICAgbGlnaHRlbignIzEzODVlNScsIDEwKSxcblx0dGV4dDogICAgICAgICAgICAgICAgJyMxQTFBMUEnLFxuXG5cdC8vIGNvbnRleHR1YWxcblx0c3VjY2VzczogICAgICAgICAgICAgJyMzNGMyNDAnLFxuXHRjcmVhdGU6ICAgICAgICAgICAgICAnIzM0YzI0MCcsIC8vIGFsaWFzIGZvciBzdWNjZXNzXG5cdHByaW1hcnk6ICAgICAgICAgICAgICcjMTM4NWU1Jyxcblx0aW5mbzogICAgICAgICAgICAgICAgJyMxMzg1ZTUnLCAvLyBhbGlhcyBmb3IgcHJpbWFyeVxuXHR3YXJuaW5nOiAgICAgICAgICAgICAnI0ZBMycsXG5cdGRhbmdlcjogICAgICAgICAgICAgICcjZDY0MjQyJyxcblx0ZXJyb3I6ICAgICAgICAgICAgICAgJyNkNjQyNDInLCAvLyBhbGlhcyBmb3IgZGFuZ2VyXG5cblx0Ly8gbmV1dHJhbHNcblx0Z3JheTkwOiAgICAgICAgICAgICAgJyMxQTFBMUEnLFxuXHRncmF5ODA6ICAgICAgICAgICAgICAnIzMzMycsXG5cdGdyYXk3MDogICAgICAgICAgICAgICcjNEQ0RDREJyxcblx0Z3JheTYwOiAgICAgICAgICAgICAgJyM2NjYnLFxuXHRncmF5NTA6ICAgICAgICAgICAgICAnIzdGN0Y3RicsXG5cdGdyYXk0MDogICAgICAgICAgICAgICcjOTk5Jyxcblx0Z3JheTMwOiAgICAgICAgICAgICAgJyNCM0IzQjMnLFxuXHRncmF5MjA6ICAgICAgICAgICAgICAnI0NDQycsXG5cdGdyYXkxNTogICAgICAgICAgICAgICcjRDlEOUQ5Jyxcblx0Z3JheTEwOiAgICAgICAgICAgICAgJyNFNUU1RTUnLFxuXHRncmF5MDU6ICAgICAgICAgICAgICAnI0YyRjJGMicsXG5cblx0Ly8gc29jaWFsXG5cdGZhY2Vib29rOiAgICAgICAgICAgICcjM0I1OTk4Jyxcblx0Z29vZ2xlOiAgICAgICAgICAgICAgJyNEQzRFNDEnLFxuXHRpbnN0YWdyYW06ICAgICAgICAgICAnIzNmNzI5YicsXG5cdHBpbnRlcmVzdDogICAgICAgICAgICcjYmQwODFjJyxcblx0dHVtYmxyOiAgICAgICAgICAgICAgJyMzNTQ2NWMnLFxuXHR0d2l0dGVyOiAgICAgICAgICAgICAnIzU1QUNFRScsXG5cdHlvdXR1YmU6ICAgICAgICAgICAgICcjY2QyMDFmJyxcblx0dmltZW86ICAgICAgICAgICAgICAgJyMxYWI3ZWEnLFxufTtcblxuLy8gYm9yZGVyIHJhZGlpXG5cbnRoZW1lLmJvcmRlclJhZGl1cyA9IHtcblx0c21hbGw6ICcwLjEyNXJlbScsXG5cdGRlZmF1bHQ6ICcwLjNyZW0nLFxuXHRsYXJnZTogJzAuNXJlbScsXG59O1xuXG4vLyBzcGFjaW5nXG5cbnRoZW1lLnNwYWNpbmcgPSB7XG5cdHhzbWFsbDogICAgICA1LFxuXHRzbWFsbDogICAgICAgMTAsXG5cdGRlZmF1bHQ6ICAgICAyMCxcblx0bGFyZ2U6ICAgICAgIDMwLFxuXHR4bGFyZ2U6ICAgICAgNDAsXG5cdHh4bGFyZ2U6ICAgICA2MCxcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRUxFTUVOVEFMIFNQRUNJRklDXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gYnV0dG9uXG5cbnRoZW1lLmJ1dHRvbiA9IHtcblx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuZGVmYXVsdCxcblx0Ym9yZGVyV2lkdGg6IDEsXG5cdGZvbnQ6IHtcblx0XHR3ZWlnaHQ6IDUwMCxcblx0fSxcblx0cGFkZGluZ0hvcml6b250YWw6ICcxZW0nLFxuXHRkZWZhdWx0OiB7XG5cdFx0YmdDb2xvcjogdGhlbWUuY29sb3IucHJpbWFyeSxcblx0XHRib3JkZXJDb2xvcjogYmxlbmQodGhlbWUuY29sb3IucHJpbWFyeSwgdGhlbWUuY29sb3IuYm9keSwgNjApLFxuXHRcdHRleHRDb2xvcjogdGhlbWUuY29sb3IucHJpbWFyeSxcblx0fSxcblx0cHJpbWFyeToge1xuXHRcdGJnQ29sb3I6IHRoZW1lLmNvbG9yLnByaW1hcnksXG5cdFx0Ym9yZGVyQ29sb3I6IGJsZW5kKHRoZW1lLmNvbG9yLnByaW1hcnksIHRoZW1lLmNvbG9yLmJvZHksIDYwKSxcblx0XHR0ZXh0Q29sb3I6IHRoZW1lLmNvbG9yLnByaW1hcnksXG5cdH0sXG5cdHN1Y2Nlc3M6IHtcblx0XHRiZ0NvbG9yOiB0aGVtZS5jb2xvci5zdWNjZXNzLFxuXHRcdGJvcmRlckNvbG9yOiBibGVuZCh0aGVtZS5jb2xvci5zdWNjZXNzLCB0aGVtZS5jb2xvci5ib2R5LCA2MCksXG5cdFx0dGV4dENvbG9yOiB0aGVtZS5jb2xvci5zdWNjZXNzLFxuXHR9LFxuXHR3YXJuaW5nOiB7XG5cdFx0YmdDb2xvcjogdGhlbWUuY29sb3Iud2FybmluZyxcblx0XHRib3JkZXJDb2xvcjogYmxlbmQodGhlbWUuY29sb3Iud2FybmluZywgdGhlbWUuY29sb3IuYm9keSwgNjApLFxuXHRcdHRleHRDb2xvcjogdGhlbWUuY29sb3Iud2FybmluZyxcblx0fSxcblx0ZGFuZ2VyOiB7XG5cdFx0YmdDb2xvcjogdGhlbWUuY29sb3IuZGFuZ2VyLFxuXHRcdGJvcmRlckNvbG9yOiBibGVuZCh0aGVtZS5jb2xvci5kYW5nZXIsIHRoZW1lLmNvbG9yLmJvZHksIDYwKSxcblx0XHR0ZXh0Q29sb3I6IHRoZW1lLmNvbG9yLmRhbmdlcixcblx0fSxcbn07XG5cbi8vIGJsYW5rIHN0YXRlXG5cbnRoZW1lLmJsYW5rc3RhdGUgPSB7XG5cdGJhY2tncm91bmQ6IGRhcmtlbih0aGVtZS5jb2xvci5ib2R5LCA0KSxcblx0Ym9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuZGVmYXVsdCxcblx0Y29sb3I6IHRoZW1lLmNvbG9yLmdyYXk0MCxcblx0cGFkZGluZ0hvcml6b250YWw6ICcyZW0nLFxuXHRwYWRkaW5nVmVydGljYWw6ICc0ZW0nLFxufTtcblxuLy8gZm9udFxuXG50aGVtZS5mb250ID0ge1xuXHRmYW1pbHk6IHtcblx0XHRtb25vOiAnTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlJyxcblx0XHRzYW5zU2VyaWY6ICdcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnLFxuXHRcdHNlcmlmOiAnR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBUaW1lcywgc2VyaWYnLFxuXHR9LFxuXHRzaXplOiB7XG5cdFx0eHhzbWFsbDogJzAuNjVyZW0nLFxuXHRcdHhzbWFsbDogJzAuNzVyZW0nLFxuXHRcdHNtYWxsOiAnMC44NXJlbScsXG5cdFx0ZGVmYXVsdDogJzFyZW0nLFxuXHRcdG1lZGl1bTogJzEuMnJlbScsXG5cdFx0bGFyZ2U6ICcxLjZyZW0nLFxuXHRcdHhsYXJnZTogJzIuNHJlbScsXG5cdFx0eHhsYXJnZTogJzMuMnJlbScsXG5cdH0sXG59O1xuXG4vLyBmb3JtXG5cbnRoZW1lLmZvcm0gPSB7XG5cdGxhYmVsOiB7XG5cdFx0Y29sb3I6IHRoZW1lLmNvbG9yLmdyYXk1MCxcblx0XHRmb250U2l6ZTogJzFyZW0nLFxuXHRcdGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuXHRcdHdpZHRoOiAxODAsXG5cdH0sXG5cdG5vdGU6IHtcblx0XHRjb2xvcjogdGhlbWUuY29sb3IuZ3JheTQwLFxuXHRcdGZvbnRTaXplOiAnMC45ZW0nLFxuXHR9LFxufTtcblxuLy8gY29tcG9uZW50XG5cbnRoZW1lLmNvbXBvbmVudCA9IHtcblx0bGluZUhlaWdodDogJzIuM2VtJyxcblx0aGVpZ2h0OiAnMi40ZW0nLFxuXHRwYWRkaW5nOiAnMWVtJyxcbn07XG5cbi8vIGlucHV0XG5cbnRoZW1lLmlucHV0ID0ge1xuXHRiYWNrZ3JvdW5kOiB7XG5cdFx0ZGVmYXVsdDogJ3doaXRlJyxcblx0XHRkaXNhYmxlZDogJyNmYWZhZmEnLFxuXHRcdG5vZWRpdDogZGFya2VuKHRoZW1lLmNvbG9yLmJvZHksIDIpLFxuXHR9LFxuXHRwbGFjZWhvbGRlckNvbG9yOiAnI2FhYScsXG5cdGxpbmVIZWlnaHQ6IHRoZW1lLmNvbXBvbmVudC5saW5lSGVpZ2h0LFxuXHRoZWlnaHQ6IHRoZW1lLmNvbXBvbmVudC5oZWlnaHQsXG5cdGJvcmRlcjoge1xuXHRcdGNvbG9yOiB7XG5cdFx0XHRkZWZhdWx0OiAnI2NjYycsXG5cdFx0XHRmb2N1czogdGhlbWUuY29sb3IuaW5mbyxcblx0XHRcdGhvdmVyOiAnI2JiYicsXG5cdFx0XHRub2VkaXQ6IGRhcmtlbih0aGVtZS5jb2xvci5ib2R5LCA4KSxcblx0XHR9LFxuXHRcdHJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmRlZmF1bHQsXG5cdFx0d2lkdGg6IDEsXG5cdH0sXG5cdGJveFNoYWRvdzogJ2luc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KScsXG5cdGJveFNoYWRvd0ZvY3VzOiBgaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgMCAzcHggJHtmYWRlKHRoZW1lLmNvbG9yLmluZm8sIDEwKX1gLFxuXHRwYWRkaW5nSG9yaXpvbnRhbDogJy43NWVtJyxcbn07XG5cbi8vIHNlbGVjdFxuXG50aGVtZS5zZWxlY3QgPSB7XG5cdGJveFNoYWRvdzogJzAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KScsXG59O1xuXG4vLyBhbGVydFxuXG50aGVtZS5hbGVydCA9IHtcblx0cGFkZGluZzogJzAuNzVlbSAgMWVtJyxcblx0bWFyZ2luOiAnMCAwIDFlbScsXG5cdGJvcmRlcldpZHRoOiAxLFxuXHRib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5kZWZhdWx0LFxuXG5cdGNvbG9yOiB7XG5cdFx0ZGFuZ2VyOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBmYWRlKHRoZW1lLmNvbG9yLmRhbmdlciwgMTApLFxuXHRcdFx0Ym9yZGVyOiBmYWRlKHRoZW1lLmNvbG9yLmRhbmdlciwgMTApLFxuXHRcdFx0dGV4dDogdGhlbWUuY29sb3IuZGFuZ2VyLFxuXHRcdH0sXG5cdFx0aW5mbzoge1xuXHRcdFx0YmFja2dyb3VuZDogZmFkZSh0aGVtZS5jb2xvci5wcmltYXJ5LCAxMCksXG5cdFx0XHRib3JkZXI6IGZhZGUodGhlbWUuY29sb3IucHJpbWFyeSwgMTApLFxuXHRcdFx0dGV4dDogdGhlbWUuY29sb3IucHJpbWFyeSxcblx0XHR9LFxuXHRcdHN1Y2Nlc3M6IHtcblx0XHRcdGJhY2tncm91bmQ6IGZhZGUodGhlbWUuY29sb3Iuc3VjY2VzcywgMTApLFxuXHRcdFx0Ym9yZGVyOiBmYWRlKHRoZW1lLmNvbG9yLnN1Y2Nlc3MsIDEwKSxcblx0XHRcdHRleHQ6IHRoZW1lLmNvbG9yLnN1Y2Nlc3MsXG5cdFx0fSxcblx0XHR3YXJuaW5nOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBmYWRlKHRoZW1lLmNvbG9yLndhcm5pbmcsIDEwKSxcblx0XHRcdGJvcmRlcjogZmFkZSh0aGVtZS5jb2xvci53YXJuaW5nLCAxMCksXG5cdFx0XHR0ZXh0OiB0aGVtZS5jb2xvci53YXJuaW5nLFxuXHRcdH0sXG5cdH0sXG59O1xuXG4vLyBnbHlwaFxuXG50aGVtZS5nbHlwaCA9IHtcblx0Y29sb3I6IHtcblx0XHRkYW5nZXI6IHRoZW1lLmNvbG9yLmRhbmdlcixcblx0XHRpbmhlcml0OiAnaW5oZXJpdCcsXG5cdFx0aW52ZXJ0ZWQ6ICd3aGl0ZScsXG5cdFx0cHJpbWFyeTogdGhlbWUuY29sb3IucHJpbWFyeSxcblx0XHRzdWNjZXNzOiB0aGVtZS5jb2xvci5zdWNjZXNzLFxuXHRcdHdhcm5pbmc6IHRoZW1lLmNvbG9yLndhcm5pbmcsXG5cdH0sXG5cdHNpemU6IHtcblx0XHRzbWFsbDogMTYsXG5cdFx0bWVkaXVtOiAzMixcblx0XHRsYXJnZTogNjQsXG5cdH0sXG59O1xuXG4vLyBtb2RhbFxuXG50aGVtZS5tb2RhbCA9IHtcblx0YmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC44KScsXG5cdHpJbmRleDogMTAwLFxuXHRwYWRkaW5nOiB7XG5cdFx0ZGlhbG9nOiB7XG5cdFx0XHRob3Jpem9udGFsOiAnMWVtJyxcblx0XHRcdHZlcnRpY2FsOiAwLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0aG9yaXpvbnRhbDogMCxcblx0XHRcdHZlcnRpY2FsOiAnMWVtJyxcblx0XHR9LFxuXHRcdGZvb3Rlcjoge1xuXHRcdFx0aG9yaXpvbnRhbDogMCxcblx0XHRcdHZlcnRpY2FsOiAnMWVtJyxcblx0XHR9LFxuXHRcdGhlYWRlcjoge1xuXHRcdFx0aG9yaXpvbnRhbDogMCxcblx0XHRcdHZlcnRpY2FsOiAnMC42ZW0nLFxuXHRcdH0sXG5cdH0sXG59O1xuXG4vLyBwYWdpbmF0aW9uXG5cbnRoZW1lLnBhZ2luYXRpb24gPSB7XG5cdGNvbG9yOiB0aGVtZS5jb2xvci5ncmF5NjAsXG5cblx0aG92ZXI6IHtcblx0XHRiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuXHRcdGJvcmRlcjogJ3JnYmEoMCwgMCwgMCwgMC4xKScsXG5cdFx0Y29sb3I6IHRoZW1lLmNvbG9yLmdyYXk2MCxcblx0fSxcblx0c2VsZWN0ZWQ6IHtcblx0XHRiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjA1KScsXG5cdFx0Ym9yZGVyOiAndHJhbnNwYXJlbnQnLFxuXHRcdGNvbG9yOiB0aGVtZS5jb2xvci5ncmF5NjAsXG5cdH0sXG5cdGRpc2FibGVkOiB7XG5cdFx0YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jyxcblx0XHRjb2xvcjogdGhlbWUuY29sb3IuZ3JheTQwLFxuXHR9LFxufTtcblxuLy8gc3Bpbm5lclxuXG50aGVtZS5zcGlubmVyID0ge1xuXHRjb2xvcjoge1xuXHRcdGRhbmdlcjogdGhlbWUuY29sb3IuZGFuZ2VyLFxuXHRcdGRlZmF1bHQ6IHRoZW1lLmNvbG9yLmdyYXk0MCxcblx0XHRpbnZlcnRlZDogJ3doaXRlJyxcblx0XHRwcmltYXJ5OiB0aGVtZS5jb2xvci5wcmltYXJ5LFxuXHRcdHN1Y2Nlc3M6IHRoZW1lLmNvbG9yLnN1Y2Nlc3MsXG5cdFx0d2FybmluZzogdGhlbWUuY29sb3Iud2FybmluZyxcblx0fSxcblx0c2l6ZToge1xuXHRcdHNtYWxsOlx0NCxcblx0XHRtZWRpdW06XHQ4LFxuXHRcdGxhcmdlOlx0MTYsXG5cdH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRoZW1lO1xuIiwiLyoqXG5cdFZhbGlkYXRlIEhleFxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHRAcGFyYW0ge1N0cmluZ30gaGV4XG5cblx0MS4gcmVtb3ZlIGhhc2ggaWYgcHJlc2VudFxuXHQyLiBjb252ZXJ0IGZyb20gMyB0byA2IGRpZ2l0IGNvbG9yIGNvZGUgJiBlbnN1cmUgdmFsaWQgaGV4XG4qL1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUhleCAoY29sb3IpIHtcblx0Y29uc3QgaGV4ID0gY29sb3IucmVwbGFjZSgnIycsICcnKTtcblxuXHRpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuXHRcdHJldHVybiBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG5cdH1cblx0aWYgKGhleC5sZW5ndGggIT09IDYpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY29sb3IgdmFsdWUgcHJvdmlkZWQ6IFwiJHtjb2xvcn1cImApO1xuXHR9XG5cblx0cmV0dXJuIGhleDtcbn07XG5cbi8qKlxuXHRGYWRlIENvbG9yXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFRha2VzIGEgaGV4aWRlY2ltYWwgY29sb3IsIGNvbnZlcnRzIGl0IHRvIFJHQiBhbmQgYXBwbGllcyBhbiBhbHBoYSB2YWx1ZS5cblxuXHRAcGFyYW0ge1N0cmluZ30gY29sb3Jcblx0QHBhcmFtIHtOdW1iZXJ9IG9wYWNpdHkgKDAtMTAwKVxuXG5cdDEuIGNvbnZlcnQgaGV4IHRvIFJHQlxuXHQyLiBjb21iaW5lIGFuZCBhZGQgYWxwaGEgY2hhbm5lbFxuKi9cblxuZnVuY3Rpb24gZmFkZSAoY29sb3IsIG9wYWNpdHkgPSAxMDApIHtcblx0Y29uc3QgZGVjaW1hbEZyYWN0aW9uID0gb3BhY2l0eSAvIDEwMDtcblx0Y29uc3QgaGV4ID0gdmFsaWRhdGVIZXgoY29sb3IpO1xuXG5cdC8vIDEuXG5cdGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDAsIDIpLCAxNik7XG5cdGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDIsIDQpLCAxNik7XG5cdGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDQsIDYpLCAxNik7XG5cblx0Ly8gMi5cblx0Y29uc3QgcmVzdWx0ID0gJ3JnYmEoJ1xuXHRcdCsgciArICcsJ1xuXHRcdCsgZyArICcsJ1xuXHRcdCsgYiArICcsJ1xuXHRcdCsgZGVjaW1hbEZyYWN0aW9uXG5cdFx0KyAnKSc7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG5cdFNoYWRlIENvbG9yXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFRha2VzIGEgaGV4aWRlY2ltYWwgY29sb3IsIGNvbnZlcnRzIGl0IHRvIFJHQiBhbmQgbGlnaHRlbnMgb3IgZGFya2Vuc1xuXG5cdEBwYXJhbSB7U3RyaW5nfSBjb2xvclxuXHRAcGFyYW0ge051bWJlcn0gb3BhY2l0eSAoMC0xMDApXG5cblx0MS4gZG8gZmFuY3kgUkdCIGJpdHdpc2Ugb3BlcmF0aW9uc1xuXHQyLiBjb21iaW5lIGJhY2sgaW50byBhIGhleCB2YWx1ZVxuKi9cblxuZnVuY3Rpb24gc2hhZGUgKGNvbG9yLCBwZXJjZW50KSB7XG5cdGNvbnN0IGRlY2ltYWxGcmFjdGlvbiA9IHBlcmNlbnQgLyAxMDA7XG5cdGNvbnN0IGhleCA9IHZhbGlkYXRlSGV4KGNvbG9yKTtcblxuXHQvLyAxLlxuXHRsZXQgZiA9IHBhcnNlSW50KGhleCwgMTYpO1xuXHRsZXQgdCA9IGRlY2ltYWxGcmFjdGlvbiA8IDAgPyAwIDogMjU1O1xuXHRsZXQgcCA9IGRlY2ltYWxGcmFjdGlvbiA8IDAgPyBkZWNpbWFsRnJhY3Rpb24gKiAtMSA6IGRlY2ltYWxGcmFjdGlvbjtcblxuXHRjb25zdCBSID0gZiA+PiAxNjtcblx0Y29uc3QgRyA9IGYgPj4gOCAmIDB4MDBGRjtcblx0Y29uc3QgQiA9IGYgJiAweDAwMDBGRjtcblxuXHQvLyAyLlxuXHRyZXR1cm4gJyMnICsgKDB4MTAwMDAwMFxuXHRcdCsgKE1hdGgucm91bmQoKHQgLSBSKSAqIHApICsgUikgKiAweDEwMDAwXG5cdFx0KyAoTWF0aC5yb3VuZCgodCAtIEcpICogcCkgKyBHKSAqIDB4MTAwXG5cdFx0KyAoTWF0aC5yb3VuZCgodCAtIEIpICogcCkgKyBCKSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xufTtcblxuLy8gc2hhZGUgaGVscGVyc1xuY29uc3QgbGlnaHRlbiA9IHNoYWRlO1xuZnVuY3Rpb24gZGFya2VuIChjb2xvciwgcGVyY2VudCkge1xuXHRyZXR1cm4gc2hhZGUoY29sb3IsIHBlcmNlbnQgKiAtMSk7XG59O1xuXG5cbi8qKlxuXHRCbGVuZCBDb2xvclxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHRUYWtlcyB0d28gaGV4aWRlY2ltYWwgY29sb3JzIGFuZCBibGVuZCB0aGVtIHRvZ2V0aGVyXG5cblx0QHBhcmFtIHtTdHJpbmd9IGNvbG9yMVxuXHRAcGFyYW0ge1N0cmluZ30gY29sb3IyXG5cdEBwYXJhbSB7TnVtYmVyfSBwZXJjZW50ICgwLTEwMClcblxuXHQxLiBkbyBmYW5jeSBSR0IgYml0d2lzZSBvcGVyYXRpb25zXG5cdDIuIGNvbWJpbmUgYmFjayBpbnRvIGEgaGV4IHZhbHVlXG4qL1xuXG5mdW5jdGlvbiBibGVuZCAoY29sb3IxLCBjb2xvcjIsIHBlcmNlbnQpIHtcblx0Y29uc3QgZGVjaW1hbEZyYWN0aW9uID0gcGVyY2VudCAvIDEwMDtcblx0Y29uc3QgaGV4MSA9IHZhbGlkYXRlSGV4KGNvbG9yMSk7XG5cdGNvbnN0IGhleDIgPSB2YWxpZGF0ZUhleChjb2xvcjIpO1xuXG5cdC8vIDEuXG5cdGNvbnN0IGYgPSBwYXJzZUludChoZXgxLCAxNik7XG5cdGNvbnN0IHQgPSBwYXJzZUludChoZXgyLCAxNik7XG5cblx0Y29uc3QgUjEgPSBmID4+IDE2O1xuXHRjb25zdCBHMSA9IGYgPj4gOCAmIDB4MDBGRjtcblx0Y29uc3QgQjEgPSBmICYgMHgwMDAwRkY7XG5cblx0Y29uc3QgUjIgPSB0ID4+IDE2O1xuXHRjb25zdCBHMiA9IHQgPj4gOCAmIDB4MDBGRjtcblx0Y29uc3QgQjIgPSB0ICYgMHgwMDAwRkY7XG5cblx0Ly8gMi5cblx0cmV0dXJuICcjJyArICgweDEwMDAwMDBcblx0XHQrIChNYXRoLnJvdW5kKChSMiAtIFIxKSAqIGRlY2ltYWxGcmFjdGlvbikgKyBSMSkgKiAweDEwMDAwXG5cdFx0KyAoTWF0aC5yb3VuZCgoRzIgLSBHMSkgKiBkZWNpbWFsRnJhY3Rpb24pICsgRzEpICogMHgxMDBcblx0XHQrIChNYXRoLnJvdW5kKChCMiAtIEIxKSAqIGRlY2ltYWxGcmFjdGlvbikgKyBCMSkpLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGJsZW5kLFxuXHRkYXJrZW4sXG5cdGZhZGUsXG5cdGxpZ2h0ZW4sXG59O1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29uY2F0ZW5hdGUgQ2xhc3NuYW1lc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PVxuLy9cbi8vIFN1cHBvcnQgY2xhc3NOYW1lIGFzIGFuIGFycmF5OlxuLy8gZm9yY2UgY2xhc3NuYW1lIHByb3AgaW50byBhbiBhcnJheSAocG9zc2libHkgb2YgYXJyYXlzKSB0aGVuIGZsYXR0ZW5cblxuLypcblx0Ly8gVG8gdXNlIHNwcmVhZCB0aGUgbmV3IGFycmF5IGludG8gYXBocm9kaXRlJ3MgYGNzc2AgZnVuY3Rpb25cblxuXHRmdW5jdGlvbiBDb21wb25lbnQgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XG5cdFx0cHJvcHMuY2xhc3NOYW1lID0gY3NzKFxuXHRcdFx0Y2xhc3Nlcy5jb21wb25lbnQsXG5cdFx0XHQuLi5jb25jYXRDbGFzc25hbWVzKGNsYXNzTmFtZSlcblx0XHQpO1xuXG5cdFx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcblx0fTtcbiovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29uY2F0Q2xhc3NuYW1lcyAoY2xhc3NOYW1lKSB7XG5cdHJldHVybiBbY2xhc3NOYW1lXS5yZWR1Y2UoKGEsIGIpID0+IHtcblx0XHRyZXR1cm4gYS5jb25jYXQoYik7XG5cdH0sIFtdKTtcbn07XG4iLCIvKipcblx0TGluZWFyIEdyYWRpZW50XG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdFNob3J0LWhhbmQgaGVscGVyIGZvciBhZGRpbmcgYSBsaW5lYXIgZ3JhZGllbnQgdG8geW91ciBjb21wb25lbnQuXG5cblx0LSBAcGFyYW0ge1N0cmluZ30gc2lkZU9yQ29ybmVyXG5cdC0gQHBhcmFtIHtTdHJpbmd9IHRvcFxuXHQtIEBwYXJhbSB7U3RyaW5nfSBib3R0b21cblx0LSBAcGFyYW0ge1N0cmluZ30gYmFzZSAob3B0aW9uYWwpXG5cdC0gQHJldHVybnMge09iamVjdH0gY3NzIGxpbmVhciBncmFkaWVudCBkZWNsYXJhdGlvblxuXG5cdFNwcmVhZCB0aGUgZGVjbGFyYXRpb24gaW50byB5b3VyIGNvbXBvbmVudCBjbGFzczpcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0bXlDb21wb25lbnRDbGFzczoge1xuXHRcdC4uLmxpbmVhckdyYWRpZW50KHJlZCwgYmx1ZSksXG5cdH1cbiovXG5cbmZ1bmN0aW9uIGxpbmVhckdyYWRpZW50IChkaXJlY3Rpb24sIHRvcCwgYm90dG9tLCBiYXNlID0gJycpIHtcblx0cmV0dXJuIHtcblx0XHRiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KCR7ZGlyZWN0aW9ufSwgJHt0b3B9IDAlLCAke2JvdHRvbX0gMTAwJSkgJHtiYXNlfWAsXG5cdH07XG59XG5cbi8vIFZlcnRpY2FsIEdyYWRpZW50XG5mdW5jdGlvbiBncmFkaWVudFZlcnRpY2FsICh0b3AsIGJvdHRvbSwgYmFzZSkge1xuXHRyZXR1cm4gbGluZWFyR3JhZGllbnQoJ3RvIGJvdHRvbScsIHRvcCwgYm90dG9tLCBiYXNlKTtcbn1cblxuLy8gSG9yaXpvbnRhbCBHcmFkaWVudFxuZnVuY3Rpb24gZ3JhZGllbnRIb3Jpem9udGFsICh0b3AsIGJvdHRvbSwgYmFzZSkge1xuXHRyZXR1cm4gbGluZWFyR3JhZGllbnQoJ3RvIHJpZ2h0JywgdG9wLCBib3R0b20sIGJhc2UpO1xufVxuXG4vKipcblx0Qm9yZGVyIFJhZGl1c1xuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHRTaG9ydC1oYW5kIGhlbHBlciBmb3IgYm9yZGVyIHJhZGlpXG4qL1xuXG4vLyB0b3BcbmZ1bmN0aW9uIGJvcmRlclRvcFJhZGl1cyAocmFkaXVzKSB7XG5cdHJldHVybiB7XG5cdFx0Ym9yZGVyVG9wTGVmdFJhZGl1czogcmFkaXVzLFxuXHRcdGJvcmRlclRvcFJpZ2h0UmFkaXVzOiByYWRpdXMsXG5cdH07XG59XG5cbi8vIHJpZ2h0XG5mdW5jdGlvbiBib3JkZXJSaWdodFJhZGl1cyAocmFkaXVzKSB7XG5cdHJldHVybiB7XG5cdFx0Ym9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IHJhZGl1cyxcblx0XHRib3JkZXJUb3BSaWdodFJhZGl1czogcmFkaXVzLFxuXHR9O1xufVxuXG4vLyBib3R0b21cbmZ1bmN0aW9uIGJvcmRlckJvdHRvbVJhZGl1cyAocmFkaXVzKSB7XG5cdHJldHVybiB7XG5cdFx0Ym9yZGVyQm90dG9tTGVmdFJhZGl1czogcmFkaXVzLFxuXHRcdGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiByYWRpdXMsXG5cdH07XG59XG5cbi8vIGxlZnRcbmZ1bmN0aW9uIGJvcmRlckxlZnRSYWRpdXMgKHJhZGl1cykge1xuXHRyZXR1cm4ge1xuXHRcdGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IHJhZGl1cyxcblx0XHRib3JkZXJUb3BMZWZ0UmFkaXVzOiByYWRpdXMsXG5cdH07XG59XG5cbi8vIFJldHVyblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Ym9yZGVyVG9wUmFkaXVzLFxuXHRib3JkZXJSaWdodFJhZGl1cyxcblx0Ym9yZGVyQm90dG9tUmFkaXVzLFxuXHRib3JkZXJMZWZ0UmFkaXVzLFxuXG5cdGdyYWRpZW50SG9yaXpvbnRhbCxcblx0Z3JhZGllbnRWZXJ0aWNhbCxcbn07XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIl19
