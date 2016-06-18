webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(254);


/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcSelect = __webpack_require__(169);
	
	var _rcSelect2 = _interopRequireDefault(_rcSelect);
	
	__webpack_require__(243);
	
	var _rcDialog = __webpack_require__(255);
	
	var _rcDialog2 = _interopRequireDefault(_rcDialog);
	
	__webpack_require__(259);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Test = _react2.default.createClass({
	  displayName: 'Test',
	  getInitialState: function getInitialState() {
	    return {
	      open: false,
	      destroy: false
	    };
	  },
	  getPopupContainer: function getPopupContainer(node) {
	    return node.parentNode;
	  },
	  setVisible: function setVisible(open) {
	    this.setState({
	      open: open
	    });
	  },
	  open: function open() {
	    this.setVisible(true);
	  },
	  close: function close() {
	    this.setVisible(false);
	  },
	  destroy: function destroy() {
	    this.setState({
	      destroy: true
	    });
	  },
	  render: function render() {
	    if (this.state.destroy) {
	      return null;
	    }
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: this.open },
	        'open'
	      ),
	      ' ',
	      _react2.default.createElement(
	        'button',
	        { onClick: this.destroy },
	        'destroy'
	      ),
	      _react2.default.createElement(
	        _rcDialog2.default,
	        { visible: this.state.open, onClose: this.close },
	        _react2.default.createElement(
	          'div',
	          { style: { marginTop: 20, position: 'relative' } },
	          _react2.default.createElement(
	            _rcSelect2.default,
	            {
	              placeholder: 'placeholder',
	              style: { width: 200 },
	              getPopupContainer: this.getPopupContainer
	            },
	            _react2.default.createElement(
	              _rcSelect.Option,
	              { value: '1' },
	              '1'
	            ),
	            _react2.default.createElement(
	              _rcSelect.Option,
	              { value: '2' },
	              '2'
	            ),
	            _react2.default.createElement(
	              _rcSelect.Option,
	              { value: '3' },
	              '3'
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(256);

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Dialog = __webpack_require__(257);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function noop() {}
	
	function copy(obj, fields) {
	  var ret = {};
	  fields.forEach(function (f) {
	    if (obj[f] !== undefined) {
	      ret[f] = obj[f];
	    }
	  });
	  return ret;
	}
	
	var DialogWrap = (function (_React$Component) {
	  _inherits(DialogWrap, _React$Component);
	
	  function DialogWrap(props) {
	    var _this = this;
	
	    _classCallCheck(this, DialogWrap);
	
	    _get(Object.getPrototypeOf(DialogWrap.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      visible: props.visible
	    };
	    ['onClose', 'cleanDialogContainer'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _createClass(DialogWrap, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.componentDidUpdate();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      if ('visible' in props) {
	        this.setState({
	          visible: props.visible
	        });
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !!(this.state.visible || nextState.visible);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.dialogRendered) {
	        this.dialogInstance = _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, this.getDialogElement(), this.getDialogContainer());
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.dialogContainer) {
	        if (this.state.visible) {
	          _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, this.getDialogElement({
	            onAfterClose: this.cleanDialogContainer,
	            onClose: noop,
	            visible: false
	          }), this.dialogContainer);
	        } else {
	          this.cleanDialogContainer();
	        }
	      }
	    }
	  }, {
	    key: 'onClose',
	    value: function onClose(e) {
	      this.props.onClose(e);
	    }
	  }, {
	    key: 'getDialogContainer',
	    value: function getDialogContainer() {
	      if (!this.dialogContainer) {
	        this.dialogContainer = document.createElement('div');
	        this.dialogContainer.className = this.props.prefixCls + '-container';
	        document.body.appendChild(this.dialogContainer);
	      }
	      return this.dialogContainer;
	    }
	  }, {
	    key: 'getDialogElement',
	    value: function getDialogElement(extra) {
	      var props = this.props;
	      var dialogProps = copy(props, ['className', 'closable', 'maskClosable', 'align', 'title', 'footer', 'mask', 'animation', 'transitionName', 'maskAnimation', 'maskTransitionName', 'mousePosition', 'prefixCls', 'style', 'width', 'height', 'zIndex', 'bodyStyle']);
	      dialogProps = _extends({}, dialogProps, {
	        onClose: this.onClose,
	        visible: this.state.visible
	      }, extra);
	      return _react2['default'].createElement(
	        _Dialog2['default'],
	        _extends({}, dialogProps, { key: 'dialog' }),
	        props.children
	      );
	    }
	  }, {
	    key: 'getElement',
	    value: function getElement(part) {
	      return this.dialogInstance.getElement(part);
	    }
	  }, {
	    key: 'cleanDialogContainer',
	    value: function cleanDialogContainer() {
	      _reactDom2['default'].unmountComponentAtNode(this.getDialogContainer());
	      document.body.removeChild(this.dialogContainer);
	      this.dialogContainer = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.dialogRendered = this.dialogRendered || this.state.visible;
	      return null;
	    }
	  }]);
	
	  return DialogWrap;
	})(_react2['default'].Component);
	
	DialogWrap.defaultProps = {
	  className: '',
	  align: {
	    points: ['tc', 'tc'],
	    offset: [0, 100]
	  },
	  mask: true,
	  closable: true,
	  maskClosable: true,
	  prefixCls: 'rc-dialog',
	  onClose: noop
	};
	
	DialogWrap.propTypes = {
	  className: _react2['default'].PropTypes.string,
	  align: _react2['default'].PropTypes.shape({
	    align: _react2['default'].PropTypes.array,
	    offset: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number)
	  }),
	  mask: _react2['default'].PropTypes.bool,
	  closable: _react2['default'].PropTypes.bool,
	  maskClosable: _react2['default'].PropTypes.bool,
	  prefixCls: _react2['default'].PropTypes.string,
	  visible: _react2['default'].PropTypes.bool,
	  onClose: _react2['default'].PropTypes.func
	};
	
	exports['default'] = DialogWrap;
	module.exports = exports['default'];

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAlign = __webpack_require__(225);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcUtilLibKeyCode = __webpack_require__(178);
	
	var _rcUtilLibKeyCode2 = _interopRequireDefault(_rcUtilLibKeyCode);
	
	var _rcAnimate = __webpack_require__(197);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _DOMWrap = __webpack_require__(258);
	
	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);
	
	var _classnames = __webpack_require__(176);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function noop() {}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function setTransformOrigin(node, value) {
	  var style = node.style;
	  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
	    style[prefix + 'TransformOrigin'] = value;
	  });
	  style['transformOrigin'] = value;
	}
	
	function offset(el) {
	  var rect = el.getBoundingClientRect();
	  var pos = {
	    left: rect.left,
	    top: rect.top
	  };
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScroll(w);
	  pos.top += getScroll(w, 1);
	  return pos;
	}
	
	var Dialog = _react2['default'].createClass({
	  displayName: 'Dialog',
	
	  propTypes: {
	    onAfterClose: _react.PropTypes.func,
	    onClose: _react.PropTypes.func,
	    closable: _react.PropTypes.bool,
	    maskClosable: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    mousePosition: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onAfterClose: noop,
	      onClose: noop
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate({});
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var props = this.props;
	    if (props.visible) {
	      // first show
	      if (!prevProps.visible) {
	        this.lastOutSideFocusNode = document.activeElement;
	        _reactDom2['default'].findDOMNode(this.refs.dialog).focus();
	      }
	    } else if (prevProps.visible) {
	      if (props.mask && this.lastOutSideFocusNode) {
	        try {
	          this.lastOutSideFocusNode.focus();
	        } catch (e) {
	          this.lastOutSideFocusNode = null;
	        }
	        this.lastOutSideFocusNode = null;
	      }
	    }
	  },
	
	  onAnimateLeave: function onAnimateLeave() {
	    this.props.onAfterClose();
	  },
	
	  onMaskClick: function onMaskClick(e) {
	    if (this.props.closable && this.props.maskClosable) {
	      this.close(e);
	    }
	    _reactDom2['default'].findDOMNode(this.refs.dialog).focus();
	  },
	
	  onKeyDown: function onKeyDown(e) {
	    var props = this.props;
	    if (props.closable) {
	      if (e.keyCode === _rcUtilLibKeyCode2['default'].ESC) {
	        this.close(e);
	      }
	    }
	    // keep focus inside dialog
	    if (props.visible) {
	      if (e.keyCode === _rcUtilLibKeyCode2['default'].TAB) {
	        var activeElement = document.activeElement;
	        var dialogRoot = _reactDom2['default'].findDOMNode(this.refs.dialog);
	        var sentinel = this.refs.sentinel;
	        if (e.shiftKey) {
	          if (activeElement === dialogRoot) {
	            sentinel.focus();
	          }
	        } else if (activeElement === this.refs.sentinel) {
	          dialogRoot.focus();
	        }
	      }
	    }
	  },
	
	  onAlign: function onAlign(dialogNode) {
	    var mousePosition = this.props.mousePosition;
	    if (this.props.visible) {
	      if (mousePosition) {
	        var elOffset = offset(dialogNode);
	        setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
	      } else {
	        setTransformOrigin(dialogNode, '');
	      }
	    }
	  },
	
	  getDialogElement: function getDialogElement() {
	    var props = this.props;
	    var closable = props.closable;
	    var prefixCls = props.prefixCls;
	    var dest = {};
	    if (props.width !== undefined) {
	      dest.width = props.width;
	    }
	    if (props.height !== undefined) {
	      dest.height = props.height;
	    }
	    if (props.zIndex !== undefined) {
	      dest.zIndex = props.zIndex;
	    }
	
	    var footer = undefined;
	    if (props.footer) {
	      footer = _react2['default'].createElement(
	        'div',
	        { className: prefixCls + '-footer', ref: 'footer' },
	        props.footer
	      );
	    }
	
	    var header = undefined;
	    if (props.title) {
	      header = _react2['default'].createElement(
	        'div',
	        { className: prefixCls + '-header', ref: 'header' },
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-title' },
	          props.title
	        )
	      );
	    }
	
	    var closer = undefined;
	    if (closable) {
	      closer = _react2['default'].createElement(
	        'a',
	        { tabIndex: '0', onClick: this.close, className: prefixCls + '-close' },
	        _react2['default'].createElement('span', { className: prefixCls + '-close-x' })
	      );
	    }
	
	    var style = _extends({}, props.style, dest);
	    var dialogProps = {
	      className: [props.prefixCls, props.className].join(' '),
	      tabIndex: '0',
	      role: 'dialog',
	      ref: 'dialog',
	      style: style,
	      onKeyDown: this.onKeyDown
	    };
	    var transitionName = this.getTransitionName();
	    var dialogElement = _react2['default'].createElement(
	      _DOMWrap2['default'],
	      _extends({}, dialogProps, {
	        hiddenClassName: prefixCls + '-hidden' }),
	      _react2['default'].createElement(
	        'div',
	        { className: prefixCls + '-content' },
	        closer,
	        header,
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-body', style: props.bodyStyle, ref: 'body' },
	          props.children
	        ),
	        footer
	      ),
	      _react2['default'].createElement(
	        'div',
	        { tabIndex: '0', ref: 'sentinel', style: { width: 0, height: 0, overflow: 'hidden' } },
	        'sentinel'
	      )
	    );
	    // add key for align to keep animate children stable
	    return _react2['default'].createElement(
	      _rcAnimate2['default'],
	      { key: 'dialog',
	        showProp: 'dialogVisible',
	        onLeave: this.onAnimateLeave,
	        transitionName: transitionName,
	        component: '',
	        transitionAppear: true },
	      _react2['default'].createElement(
	        _rcAlign2['default'],
	        { align: props.align,
	          key: 'dialog',
	          onAlign: this.onAlign,
	          dialogVisible: props.visible,
	          childrenProps: {
	            visible: 'dialogVisible'
	          },
	          monitorBufferTime: 80,
	          monitorWindowResize: true,
	          disabled: !props.visible },
	        dialogElement
	      )
	    );
	  },
	
	  getMaskElement: function getMaskElement() {
	    var props = this.props;
	    var maskProps = {
	      onClick: this.onMaskClick
	    };
	
	    if (props.zIndex) {
	      maskProps.style = { zIndex: props.zIndex };
	    }
	    var maskElement = undefined;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = _react2['default'].createElement(_DOMWrap2['default'], _extends({}, maskProps, { key: 'mask',
	        className: props.prefixCls + '-mask',
	        visible: props.visible,
	        hiddenClassName: props.prefixCls + '-mask-hidden' }));
	      if (maskTransition) {
	        maskElement = _react2['default'].createElement(
	          _rcAnimate2['default'],
	          { key: 'mask', showProp: 'visible',
	            transitionAppear: true, component: '',
	            transitionName: maskTransition },
	          maskElement
	        );
	      }
	    }
	    return maskElement;
	  },
	
	  getMaskTransitionName: function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  },
	
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var animation = props.animation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  },
	
	  getElement: function getElement(part) {
	    return this.refs[part];
	  },
	
	  close: function close(e) {
	    this.props.onClose(e);
	  },
	
	  render: function render() {
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var className = _defineProperty({}, prefixCls + '-wrap', 1);
	
	    return _react2['default'].createElement(
	      'div',
	      { className: (0, _classnames2['default'])(className), ref: 'root' },
	      [this.getMaskElement(), this.getDialogElement()]
	    );
	  }
	});
	
	exports['default'] = Dialog;
	module.exports = exports['default'];

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var DOMWrap = _react2['default'].createClass({
	  displayName: 'DOMWrap',
	
	  propTypes: {
	    tag: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tag: 'div'
	    };
	  },
	
	  render: function render() {
	    var props = _extends({}, this.props);
	    if (!props.visible) {
	      props.className = props.className || '';
	      props.className += ' ' + props.hiddenClassName;
	    }
	    var Tag = props.tag;
	    return _react2['default'].createElement(Tag, props);
	  }
	});
	
	exports['default'] = DOMWrap;
	module.exports = exports['default'];

/***/ },

/***/ 259:
243

});
//# sourceMappingURL=getPopupContainer.js.map