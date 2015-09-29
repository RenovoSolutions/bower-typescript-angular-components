this["rl_components"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var behaviors = __webpack_require__(2);
	exports.behaviors = behaviors;
	var components = __webpack_require__(5);
	exports.components = components;
	var services = __webpack_require__(88);
	exports.services = services;
	exports.moduleName = 'rl.ui';
	angular.module(exports.moduleName, [
	    behaviors.moduleName,
	    components.moduleName,
	    services.moduleName,
	]);
	//# sourceMappingURL=ui.module.js.map

/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() { module.exports = this["angular"]; }());

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);
	var autosave = __webpack_require__(3);
	exports.autosave = autosave;
	exports.moduleName = 'rl.ui.behaviors';
	angular.module(exports.moduleName, [
	    autosave.moduleName,
	]);
	//# sourceMappingURL=behaviors.module.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	exports.moduleName = 'rl.ui.behaviors.autosave';
	exports.directiveName = 'rlAutosave';
	exports.controllerName = 'AutosaveController';
	var __autosave = typescript_angular_utilities_1.services.autosave;
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var __objectUtility = typescript_angular_utilities_1.services.object;
	var __autosaveAction = typescript_angular_utilities_1.services.autosaveAction;
	var AutosaveController = (function () {
	    function AutosaveController($scope, $attrs, $parse, $element, autosaveFactory, parentChildBehavior, objectUtility) {
	        this.$scope = $scope;
	        var contentForm = $element.controller('form');
	        var hasValidator = objectUtility.isNullOrWhitespace($attrs.validate) === false;
	        var validateExpression = $parse($attrs.validate);
	        var validate;
	        if (hasValidator) {
	            validate = function () {
	                return validateExpression($scope);
	            };
	        }
	        var saveExpression = $parse($attrs.save);
	        var save = function () {
	            return saveExpression($scope);
	        };
	        var autosave = autosaveFactory.getInstance(save, contentForm, validate);
	        var behavior = {
	            autosave: autosave.autosave,
	        };
	        // register autosave behavior and assign the value back to the parent
	        var childLink = $parse($attrs.rlAutosave)($scope);
	        parentChildBehavior.registerChildBehavior(childLink, behavior);
	    }
	    AutosaveController.$inject = ['$scope',
	        '$attrs',
	        '$parse',
	        '$element',
	        __autosave.factoryName,
	        __parentChild.serviceName,
	        __objectUtility.serviceName,
	        __autosaveAction.serviceName];
	    return AutosaveController;
	})();
	exports.AutosaveController = AutosaveController;
	function autosave() {
	    'use strict';
	    return {
	        restrict: 'A',
	        require: '?ngForm',
	        controller: exports.controllerName,
	    };
	}
	exports.autosave = autosave;
	angular.module(exports.moduleName, [
	    __autosave.moduleName,
	    __autosaveAction.moduleName,
	    __objectUtility.moduleName,
	    __parentChild.moduleName,
	])
	    .directive(exports.directiveName, autosave)
	    .controller(exports.controllerName, AutosaveController);
	//# sourceMappingURL=autosave.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	(function() { module.exports = this["rl.utilities"]; }());

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var autosaveDialogFooter = __webpack_require__(6);
	exports.autosaveDialogFooter = autosaveDialogFooter;
	var busy = __webpack_require__(8);
	exports.busy = busy;
	var button = __webpack_require__(9);
	exports.button = button;
	var buttonToggle = __webpack_require__(12);
	exports.buttonToggle = buttonToggle;
	var cardContainer = __webpack_require__(14);
	exports.cardContainer = cardContainer;
	var commaList = __webpack_require__(58);
	exports.commaList = commaList;
	var dateTime = __webpack_require__(59);
	exports.dateTime = dateTime;
	var genericContainer = __webpack_require__(61);
	exports.genericContainer = genericContainer;
	var lazyLoad = __webpack_require__(63);
	exports.lazyLoad = lazyLoad;
	var longClickButton = __webpack_require__(64);
	exports.longClickButton = longClickButton;
	var messageLog = __webpack_require__(65);
	exports.messageLog = messageLog;
	var multiStepIndicator = __webpack_require__(68);
	exports.multiStepIndicator = multiStepIndicator;
	var ratingBar = __webpack_require__(69);
	exports.ratingBar = ratingBar;
	var responsiveCardGrid = __webpack_require__(72);
	exports.responsiveCardGrid = responsiveCardGrid;
	var richTextEditor = __webpack_require__(79);
	exports.richTextEditor = richTextEditor;
	var signaturePad = __webpack_require__(80);
	exports.signaturePad = signaturePad;
	var simpleCardList = __webpack_require__(81);
	exports.simpleCardList = simpleCardList;
	var spinner = __webpack_require__(84);
	exports.spinner = spinner;
	var stringWithWatermark = __webpack_require__(85);
	exports.stringWithWatermark = stringWithWatermark;
	var typeahead = __webpack_require__(86);
	exports.typeahead = typeahead;
	var userRating = __webpack_require__(87);
	exports.userRating = userRating;
	exports.moduleName = 'rl.ui.components';
	angular.module(exports.moduleName, [
	    autosaveDialogFooter.moduleName,
	    busy.moduleName,
	    button.moduleName,
	    buttonToggle.moduleName,
	    cardContainer.moduleName,
	    commaList.moduleName,
	    dateTime.moduleName,
	    genericContainer.moduleName,
	    lazyLoad.moduleName,
	    longClickButton.moduleName,
	    messageLog.moduleName,
	    multiStepIndicator.moduleName,
	    ratingBar.moduleName,
	    responsiveCardGrid.moduleName,
	    richTextEditor.moduleName,
	    signaturePad.moduleName,
	    simpleCardList.moduleName,
	    spinner.moduleName,
	    stringWithWatermark.moduleName,
	    typeahead.moduleName,
	    userRating.moduleName,
	]);
	//# sourceMappingURL=components.module.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.autosaveDialogFooter';
	exports.directiveName = 'rlAutosaveDialogFooter';
	function autosaveDialogFooter() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(7),
	    };
	}
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, autosaveDialogFooter);
	//# sourceMappingURL=autosaveDialogFooter.js.map

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-footer\">\r\n\t<button class=\"btn btn-default\" type=\"button\" ng-click=\"$close()\">Cancel</button>\r\n\t<button class=\"btn btn-primary\" type=\"button\" ng-click=\"$dismiss()\">Save</button>\r\n</div>"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.busy';
	exports.directiveName = 'rlBusy';
	function busy() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: '<i class="fa fa-spin fa-spinner fa-{{size}}" ng-show="loading"></i>',
	        scope: {
	            loading: '=',
	            // Valid values are:
	            // `lg`, `2x`, `3x`, `4x`, and `5x`
	            size: '@',
	        },
	    };
	}
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, busy);
	//# sourceMappingURL=busy.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __promiseUtility = typescript_angular_utilities_1.services.promise;
	exports.moduleName = 'rl.ui.components.button';
	exports.directiveName = 'rlButton';
	exports.controllerName = 'ButtonController';
	var ButtonController = (function () {
	    function ButtonController($scope, promiseUtility) {
	        var _this = this;
	        this.$scope = $scope;
	        this.promiseUtility = promiseUtility;
	        this.busy = $scope.busy;
	        this.sizeClass = $scope.size != null ? 'btn-' + $scope.size : null;
	        if (!_.isUndefined($scope.busy)) {
	            $scope.$watch('busy', function (value) {
	                if (value !== _this.busy) {
	                    _this.busy = value;
	                }
	            });
	            $scope.$watch(function () { return _this.busy; }, function (value) {
	                if (value !== $scope.busy) {
	                    $scope.busy = value;
	                }
	            });
	        }
	    }
	    ButtonController.prototype.trigger = function () {
	        var _this = this;
	        if (!this.busy) {
	            this.busy = true;
	            var result = this.$scope.action();
	            if (this.promiseUtility.isPromise(result) && _.isFunction(result.finally)) {
	                result.finally(function () {
	                    _this.busy = false;
	                });
	            }
	        }
	    };
	    ButtonController.$inject = ['$scope', __promiseUtility.serviceName];
	    return ButtonController;
	})();
	function button() {
	    'use strict';
	    return {
	        restrict: 'E',
	        transclude: true,
	        template: __webpack_require__(11),
	        scope: {
	            busy: '=',
	            action: '&',
	            type: '@',
	            ngDisabled: '=',
	            buttonRightAligned: '=',
	            size: '@',
	        },
	        controller: exports.controllerName,
	        controllerAs: 'button',
	    };
	}
	angular.module(exports.moduleName, [__promiseUtility.moduleName])
	    .directive(exports.directiveName, button)
	    .controller(exports.controllerName, ButtonController);
	//# sourceMappingURL=button.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	(function() { module.exports = this["_"]; }());

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"btn btn-{{type}} {{button.sizeClass}}\" ng-click=\"button.trigger()\" ng-disabled=\"button.busy || ngDisabled\">\r\n\t<rl-busy ng-show=\"buttonRightAligned\" loading=\"button.busy\"></rl-busy>\r\n\t<span ng-transclude></span>\r\n\t<rl-busy ng-hide=\"buttonRightAligned\" loading=\"button.busy\"></rl-busy>\r\n</button>"

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __boolean = typescript_angular_utilities_1.services.boolean;
	exports.moduleName = 'rl.ui.components.buttonToggle';
	exports.directiveName = 'rlButtonToggle';
	exports.controllerName = 'ButtonToggleController';
	var ButtonToggleController = (function () {
	    function ButtonToggleController($scope, bool) {
	        var _this = this;
	        this.$scope = $scope;
	        this.buttonClass = $scope.type != null ? $scope.type : 'default';
	        this.buttonSize = $scope.size != null ? 'btn-' + $scope.size : null;
	        $scope.$watch('ngModel.$modelValue', function (value) {
	            _this.isActive = bool.toBool(value);
	            if (value != null && _.isFunction($scope.onToggle)) {
	                $scope.onToggle({ value: value });
	            }
	        });
	    }
	    ButtonToggleController.prototype.clicked = function () {
	        this.$scope.ngModel.$setViewValue(!this.$scope.ngModel.$viewValue);
	    };
	    ButtonToggleController.$inject = ['$scope', __boolean.serviceName];
	    return ButtonToggleController;
	})();
	function buttonToggle() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: '^ngModel',
	        transclude: true,
	        templateUrl: __webpack_require__(13),
	        controller: exports.controllerName,
	        controllerAs: 'buttonToggle',
	        scope: {
	            type: '@',
	            size: '@',
	            onToggle: '&',
	            disabled: '=ngDisabled',
	        },
	        link: function (scope, element, attrs, ngModel) {
	            scope.ngModel = ngModel;
	        }
	    };
	}
	angular.module(exports.moduleName, [__boolean.moduleName])
	    .directive(exports.directiveName, buttonToggle)
	    .controller(exports.controllerName, ButtonToggleController);
	//# sourceMappingURL=buttonToggle.js.map

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"btn btn-{{buttonToggle.buttonClass}} {{buttonToggle.buttonSize}}\" \r\n\t\tng-class=\"{ active : buttonToggle.isActive }\" ng-click=\"buttonToggle.clicked()\" ng-disabled=\"disabled\">\r\n\t<i ng-show=\"buttonToggle.isActive\" class=\"fa fa-check completed\"></i> <span ng-transclude></span>\r\n</button>"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __object = typescript_angular_utilities_1.services.object;
	var __array = typescript_angular_utilities_1.services.array;
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var card = __webpack_require__(15);
	exports.card = card;
	var cardSearch = __webpack_require__(21);
	exports.cardSearch = cardSearch;
	var columnHeader = __webpack_require__(23);
	exports.columnHeader = columnHeader;
	var dataSources = __webpack_require__(25);
	exports.dataSources = dataSources;
	var filters = __webpack_require__(36);
	exports.filters = filters;
	var itemCount = __webpack_require__(46);
	exports.itemCount = itemCount;
	var pager = __webpack_require__(47);
	exports.pager = pager;
	var pageSize = __webpack_require__(49);
	exports.pageSize = pageSize;
	var selectionControl = __webpack_require__(51);
	exports.selectionControl = selectionControl;
	var sorts = __webpack_require__(26);
	exports.sorts = sorts;
	var cardContainer_1 = __webpack_require__(53);
	__export(__webpack_require__(53));
	__export(__webpack_require__(57));
	exports.moduleName = 'rl.ui.components.cardContainer';
	angular.module(exports.moduleName, [
	    // dependencies
	    dataSources.dataPager.moduleName,
	    __object.moduleName,
	    __array.moduleName,
	    __parentChild.moduleName,
	    // components
	    card.moduleName,
	    cardSearch.moduleName,
	    columnHeader.moduleName,
	    itemCount.moduleName,
	    pager.moduleName,
	    pageSize.moduleName,
	    selectionControl.moduleName,
	    // submodules
	    dataSources.moduleName,
	    filters.moduleName,
	    sorts.moduleName,
	])
	    .directive(cardContainer_1.directiveName, cardContainer_1.cardContainer)
	    .controller(cardContainer_1.controllerName, cardContainer_1.CardContainerController);
	//# sourceMappingURL=cardContainer.module.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var __object = typescript_angular_utilities_1.services.object;
	var headerColumn_module_1 = __webpack_require__(16);
	exports.moduleName = 'rl.ui.components.cardContainer.card';
	exports.directiveName = 'rlCard';
	exports.controllerName = 'CardController';
	var CardController = (function () {
	    function CardController($scope, $controller, $q, parentChild, object) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$q = $q;
	        this.parentChild = parentChild;
	        this.showContent = false;
	        this.dirty = false;
	        this.autosaveLink = {};
	        this.autosave = function () {
	            if (_this.showContent === false) {
	                return true;
	            }
	            return _this.parentChild.triggerChildBehavior(_this.autosaveLink, function (behavior) {
	                if (behavior.autosave()) {
	                    _this.showContent = false;
	                    return true;
	                }
	                else {
	                    return false;
	                }
	            });
	        };
	        if (this.cardAs) {
	            $scope[this.cardAs] = this.item;
	        }
	        if (object.isNullOrWhitespace(this.cardController) === false) {
	            var controller = $controller(this.cardController, { $scope: $scope });
	            if (object.isNullOrWhitespace(this.cardControllerAs) === false) {
	                $scope[this.cardControllerAs] = controller;
	            }
	        }
	        parentChild.registerChildBehavior(this.item, {
	            close: this.autosave,
	        });
	        $scope.initContents = function (hasBody, hasFooter) {
	            _this.hasBody = hasBody;
	            _this.hasFooter = hasFooter;
	        };
	    }
	    CardController.prototype.toggleContent = function () {
	        if (!this.showContent) {
	            this.open();
	        }
	        else {
	            this.autosave();
	        }
	    };
	    CardController.prototype.setSelected = function (value) {
	        if (_.isUndefined(this.item.viewData)) {
	            this.item.viewData = {};
	        }
	        this.item.viewData.selected = value;
	        this.selectionChanged();
	    };
	    CardController.prototype.validateCard = function () {
	        var behavior = this.parentChild.getChildBehavior(this.item);
	        if (_.isFunction(behavior.validateCard)) {
	            return behavior.validateCard();
	        }
	        else {
	            return true;
	        }
	    };
	    CardController.prototype.saveCard = function () {
	        var behavior = this.parentChild.getChildBehavior(this.item);
	        if (_.isFunction(behavior.saveCard)) {
	            return behavior.saveCard();
	        }
	        else {
	            return this.$q.when();
	        }
	    };
	    CardController.prototype.clickCard = function () {
	        this.parentChild.triggerChildBehavior(this.item, function (behavior) {
	            if (_.isFunction(behavior.clickCard)) {
	                return behavior.clickCard();
	            }
	        });
	    };
	    CardController.prototype.open = function () {
	        this.parentChild.triggerChildBehavior(this.item, function (behavior) {
	            if (_.isFunction(behavior.initCard)) {
	                behavior.initCard();
	            }
	        });
	        if (this.$scope.rlCardContainer.openCard()) {
	            this.showContent = true;
	        }
	    };
	    CardController.$inject = ['$scope', '$controller', '$q', __parentChild.serviceName, __object.serviceName];
	    return CardController;
	})();
	exports.CardController = CardController;
	function card() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(20),
	        require: '^^rlCardContainer',
	        controller: exports.controllerName,
	        controllerAs: 'card',
	        scope: {},
	        bindToController: {
	            columns: '=',
	            item: '=',
	            clickable: '=',
	            source: '=',
	            containerData: '=',
	            cardController: '=',
	            cardControllerAs: '=',
	            cardAs: '=',
	            permanentFooter: '=',
	            selectable: '=',
	            selectionChanged: '&',
	        },
	        compile: function () {
	            var content;
	            var footer;
	            return {
	                pre: function (scope, element, attrs, rlCardContainer) {
	                    scope.rlCardContainer = rlCardContainer;
	                    rlCardContainer.makeCard(scope, function (clone) {
	                        content = clone.filter('rl-card-content');
	                        footer = clone.filter('rl-card-footer');
	                    });
	                },
	                post: function (scope, element) {
	                    var contentArea = element.find('.content-template');
	                    contentArea.append(content);
	                    var hasBody = content.length > 0;
	                    var hasFooter = (footer.length > 0);
	                    if (hasFooter) {
	                        var footerArea = element.find('.footer-template');
	                        footerArea.append(footer);
	                    }
	                    scope.initContents(hasBody, hasFooter);
	                },
	            };
	        },
	    };
	}
	exports.card = card;
	angular.module(exports.moduleName, [
	    __parentChild.moduleName,
	    __object.moduleName,
	    headerColumn_module_1.moduleName,
	])
	    .directive(exports.directiveName, card)
	    .controller(exports.controllerName, CardController);
	//# sourceMappingURL=card.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var headerColumn_1 = __webpack_require__(17);
	var sizeForBreakpoints_1 = __webpack_require__(18);
	exports.moduleName = 'rl.ui.components.cardContainer.card.headerColumn';
	angular.module(exports.moduleName, [
	    typescript_angular_utilities_1.services.string.moduleName,
	])
	    .directive(sizeForBreakpoints_1.sizeForBreakpointsName, sizeForBreakpoints_1.sizeForBreakpoints)
	    .directive(headerColumn_1.directiveName, headerColumn_1.headerColumn)
	    .controller(headerColumn_1.controllerName, headerColumn_1.HeaderColumnController);
	//# sourceMappingURL=headerColumn.module.js.map

/***/ },
/* 17 */
/***/ function(module, exports) {

	// /// <reference path='../../../../../typings/jquery/jquery.d.ts' />
	'use strict';
	exports.directiveName = 'rlCardHeaderColumn';
	exports.controllerName = 'CardHeaderColumnController';
	var HeaderColumnController = (function () {
	    function HeaderColumnController($scope) {
	        var _this = this;
	        this.$scope = $scope;
	        this.update = function () {
	            _this.value = _this.column.getValue(_this.item);
	        };
	        this.update();
	        $scope.$on('card.refresh', this.update); //*event?
	    }
	    HeaderColumnController.$inject = ['$scope'];
	    return HeaderColumnController;
	})();
	exports.HeaderColumnController = HeaderColumnController;
	headerColumn.$inject = ['$compile'];
	function headerColumn($compile) {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<div size-for-breakpoints=\"column.size\" title=\"{{::header.column.description}}\">\n\t\t\t\t<div class=\"template-container\" style=\"display: inline-block\"></div>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'header',
	        scope: {},
	        bindToController: {
	            column: '=',
	            item: '=',
	        },
	        compile: function () {
	            return {
	                pre: function (scope, element, attrs, header) {
	                    var column = header.column;
	                    if (column.templateUrl != null) {
	                        header.renderedTemplate = $compile('<div ng-include="\'' + column.templateUrl + '\'"></div>')(scope);
	                    }
	                    else if (column.template != null) {
	                        header.renderedTemplate = $compile(column.template)(scope);
	                    }
	                    else {
	                        header.renderedTemplate = $compile('<span>{{header.value}}</span>')(scope);
	                    }
	                },
	                post: function (scope, element, attrs, header) {
	                    var container = element.find('.template-container');
	                    container.append(header.renderedTemplate);
	                },
	            };
	        },
	    };
	}
	exports.headerColumn = headerColumn;
	//# sourceMappingURL=headerColumn.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __string = typescript_angular_utilities_1.services.string;
	var breakpoint_1 = __webpack_require__(19);
	exports.sizeForBreakpointsName = 'sizeForBreakpoints';
	sizeForBreakpoints.$inject = ['$parse', __string.serviceName];
	function sizeForBreakpoints($parse, stringUtility) {
	    'use strict';
	    return {
	        restrict: 'A',
	        link: linkDirective,
	    };
	    function linkDirective(scope, element, attributes) {
	        var sizes = $parse(attributes.sizeForBreakpoints)(scope);
	        var classes = [];
	        classes.push(getColumnClass(sizes, breakpoint_1.xs));
	        classes.push(getColumnClass(sizes, breakpoint_1.sm));
	        classes.push(getColumnClass(sizes, breakpoint_1.md));
	        classes.push(getColumnClass(sizes, breakpoint_1.lg));
	        element.addClass(classes.join(' '));
	    }
	    function getColumnClass(columnSizes, breakpoint) {
	        var value = columnSizes[breakpoint];
	        if (value > 0 && value !== 'hidden') {
	            return stringUtility.substitute('col-{0}-{1}', breakpoint, value);
	        }
	        else {
	            return 'hidden-' + breakpoint;
	        }
	    }
	}
	exports.sizeForBreakpoints = sizeForBreakpoints;
	//# sourceMappingURL=sizeForBreakpoints.js.map

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	exports.lg = 'lg';
	exports.md = 'md';
	exports.sm = 'sm';
	exports.xs = 'xs';
	//# sourceMappingURL=breakpoint.js.map

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<rl-generic-container selector=\"card.selectable\">\r\n\t<template when-selector=\"false\" default>\r\n\t\t<div class=\"card\" ng-class=\"{ 'selected': card.item.viewData.selected }\">\r\n\t\t\t<div class=\"header\" ng-click=\"card.toggleContent()\" ng-class=\"{ 'active': card.hasBody || !card.permanentFooter }\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div ng-repeat=\"column in card.columns\">\r\n\t\t\t\t\t\t<rl-card-header-column column=\"column\" item=\"card.item\"></rl-card-header-column>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div ng-show=\"card.showContent\">\r\n\t\t\t\t<ng-form rl-autosave=\"card.autosaveLink\" save=\"card.saveCard()\" validate=\"card.validateCard()\">\r\n\t\t\t\t\t<div class=\"body\" ng-class=\"{ 'active': card.clickable }\" ng-click=\"card.clickCard()\">\r\n\t\t\t\t\t\t<div class=\"content-template\"></div>\r\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-form>\r\n\t\t\t</div>\r\n\t\t\t<div ng-show=\"card.hasFooter && (card.showContent || card.permanentFooter)\">\r\n\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t<div class=\"footer-template\"></div>\r\n\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</template>\r\n\t<template when-selector=\"true\">\r\n\t\t<div class=\"select-group\">\r\n\t\t\t<div class=\"select-column\">\r\n\t\t\t\t<input type=\"checkbox\" class=\"stand-alone-checkbox\" ng-model=\"card.item.viewData.selected\" ng-change=\"card.selectionChanged()\"\r\n\t\t\t\t\t   ng-disabled=\"card.item.viewData.disabledSelection\" title=\"{{card.item.viewData.selectionTitle}}\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"select-content\">\r\n\r\n\t\t\t\t<div class=\"card selectable\" ng-class=\"{ 'selected': card.item.viewData.selected }\">\r\n\t\t\t\t\t<div class=\"header active\" ng-click=\"card.toggleContent()\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div ng-repeat=\"column in card.columns\">\r\n\t\t\t\t\t\t\t\t<rl-card-header-column column=\"column\" item=\"card.item\"></rl-card-header-column>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div ng-show=\"card.showContent\">\r\n\t\t\t\t\t\t<ng-form rl-autosave=\"card.autosaveLink\" save=\"card.saveCard()\" validate=\"card.validateCard()\">\r\n\t\t\t\t\t\t\t<div class=\"body\" ng-class=\"{ 'active': card.clickable }\" ng-click=\"card.clickCard()\">\r\n\t\t\t\t\t\t\t\t<div class=\"content-template\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div ng-show=\"card.hasFooter && (card.showContent || card.permanentFooter)\">\r\n\t\t\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t\t\t<div class=\"footer-template\"></div>\r\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</template>\r\n</rl-generic-container>"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __genericSearchFilter = typescript_angular_utilities_1.services.genericSearchFilter;
	exports.moduleName = 'rl.ui.components.cardContainer.cardSearch';
	exports.directiveName = 'rlCardSearch';
	exports.controllerName = 'CardSearchController';
	exports.defaultSearchPlaceholder = 'Search';
	exports.defaultSearchDelay = 1000;
	var CardSearchController = (function () {
	    function CardSearchController($scope, $timeout, $element) {
	        var _this = this;
	        this.searchLengthError = false;
	        this.hasSearchFilter = true;
	        this.cardContainerController = $element.controller('rlCardContainer');
	        this.searchFilter = this.cardContainerController.lookupFilter(__genericSearchFilter.filterName);
	        if (this.searchFilter == null) {
	            this.hasSearchFilter = false;
	        }
	        else {
	            this.searchPlaceholder = exports.defaultSearchPlaceholder;
	            var dataSource = this.cardContainerController.dataSource;
	            var delay = this.delay != null
	                ? this.delay
	                : exports.defaultSearchDelay;
	            var timer;
	            $scope.$watch(function () { return _this.searchText; }, function (search) {
	                _this.searchFilter.searchText = search;
	                _this.minSearchLength = _this.searchFilter.minSearchLength;
	                _this.validateSearchLength(search, _this.minSearchLength);
	                if (timer != null) {
	                    $timeout.cancel(timer);
	                }
	                timer = $timeout(dataSource.refresh, delay);
	            });
	        }
	    }
	    CardSearchController.prototype.validateSearchLength = function (search, minLength) {
	        // show error if search string exists but is below minimum size
	        this.searchLengthError = search != null
	            && search.length > 0
	            && search.length < minLength;
	    };
	    CardSearchController.$inject = ['$scope', '$timeout', '$element'];
	    return CardSearchController;
	})();
	exports.CardSearchController = CardSearchController;
	function cardSearch() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: '^^rlCardContainer',
	        template: __webpack_require__(22),
	        controller: exports.controllerName,
	        controllerAs: 'cardSearch',
	        scope: {},
	        bindToController: {
	            delay: '=searchDelay',
	        },
	    };
	}
	exports.cardSearch = cardSearch;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, cardSearch)
	    .controller(exports.controllerName, CardSearchController);
	//# sourceMappingURL=cardSearch.js.map

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-group\" ng-show=\"cardSearch.hasSearchFilter\">\r\n\t<input class=\"form-control\" type=\"text\" placeholder=\"{{cardSearch.searchPlaceholder}}\" ng-model=\"cardSearch.searchText\"\r\n\t\t\tpopover=\"You must enter at least {{cardSearch.minSearchLength}} characters to perform a search\" popover-trigger=\"mouseenter\" popover-enable=\"cardSearch.searchLengthError\" />\r\n\t<div class=\"input-group-btn\">\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-disabled=\"cardSearch.searchText | isEmpty\" ng-click=\"cardSearch.searchText = null\">\r\n\t\t\t<i class=\"fa fa-times\"></i>\r\n\t\t</button>\r\n\t</div>\r\n</div>"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='../../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var sortDirection_1 = __webpack_require__(24);
	exports.moduleName = 'rl.ui.components.cardContainer.columnHeader';
	exports.directiveName = 'rlColumnHeader';
	cardColumnHeader.$inject = ['$compile'];
	function cardColumnHeader($compile) {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: '^^rlCardContainer',
	        template: "\n\t\t\t<div size-for-breakpoints=\"column.size\" ng-click=\"sort()\" title=\"{{::column.description}}\"\n\t\t\t\t\tclass=\"column-header\">\n\t\t\t\t<div class=\"template-container\" style=\"display: inline-block\"></div>\n\t\t\t\t<i ng-show=\"sorting === sortDirection.ascending\" class=\"fa fa-sort-asc\"></i>\n\t\t\t\t<i ng-show=\"sorting === sortDirection.descending\" class=\"fa fa-sort-desc\"></i>\n\t\t\t</div>\n\t\t",
	        scope: {
	            column: '=',
	            sorting: '=',
	            sort: '&',
	        },
	        compile: function () {
	            return {
	                pre: function (scope) {
	                    var column = scope.column;
	                    if (column.headerTemplateUrl != null) {
	                        scope.renderedTemplate = $compile('<div ng-include="\'' + column.headerTemplateUrl + '\'"></div>')(scope);
	                    }
	                    else if (column.headerTemplate != null) {
	                        scope.renderedTemplate = $compile(column.headerTemplate)(scope);
	                    }
	                    else {
	                        scope.renderedTemplate = ('<h5>' + column.label + '</h5');
	                    }
	                },
	                post: function (scope, element) {
	                    var container = element.find('.template-container');
	                    container.append(scope.renderedTemplate);
	                    scope.sortDirection = sortDirection_1.SortDirection;
	                },
	            };
	        }
	    };
	}
	exports.cardColumnHeader = cardColumnHeader;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, cardColumnHeader);
	//# sourceMappingURL=columnHeader.js.map

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	var SortDirection = (function () {
	    function SortDirection(value) {
	        this.value = value;
	    }
	    SortDirection.toggle = function (direction) {
	        if (direction === SortDirection.ascending) {
	            return SortDirection.descending;
	        }
	        else if (direction === SortDirection.descending) {
	            return SortDirection.none;
	        }
	        else {
	            return SortDirection.ascending;
	        }
	    };
	    SortDirection.getFullName = function (direction) {
	        'use strict';
	        if (direction === SortDirection.ascending) {
	            return 'ascending';
	        }
	        else if (direction === SortDirection.descending) {
	            return 'descending';
	        }
	        else {
	            return 'none';
	        }
	    };
	    SortDirection.none = new SortDirection(0);
	    SortDirection.ascending = new SortDirection(1);
	    SortDirection.descending = new SortDirection(2);
	    return SortDirection;
	})();
	exports.SortDirection = SortDirection;
	//# sourceMappingURL=sortDirection.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var sorts_module_1 = __webpack_require__(26);
	var dataPager = __webpack_require__(30);
	exports.dataPager = dataPager;
	var dataServiceDataSource = __webpack_require__(31);
	exports.dataServiceDataSource = dataServiceDataSource;
	var simpleDataSource = __webpack_require__(34);
	exports.simpleDataSource = simpleDataSource;
	var dataSourceProcessor = __webpack_require__(33);
	exports.dataSourceProcessor = dataSourceProcessor;
	var dataSourceBase = __webpack_require__(32);
	exports.dataSourceBase = dataSourceBase;
	__export(__webpack_require__(35));
	exports.moduleName = 'rl.ui.components.cardContainer.dataSources';
	angular.module(exports.moduleName, [
	    typescript_angular_utilities_1.services.object.moduleName,
	    sorts_module_1.moduleName,
	    dataPager.moduleName,
	    dataServiceDataSource.moduleName,
	    simpleDataSource.moduleName,
	])
	    .service(dataSourceProcessor.processorServiceName, dataSourceProcessor.DataSourceProcessor);
	//# sourceMappingURL=dataSources.module.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var mergeSort = __webpack_require__(27);
	exports.mergeSort = mergeSort;
	var sorter = __webpack_require__(28);
	exports.sorter = sorter;
	__export(__webpack_require__(29));
	__export(__webpack_require__(24));
	exports.moduleName = 'rl.ui.components.cardContainer.sorts';
	angular.module(exports.moduleName, [
	    mergeSort.moduleName,
	    sorter.moduleName,
	]);
	//# sourceMappingURL=sorts.module.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	exports.moduleName = 'rl.ui.components.cardContainer.sorts.mergeSort';
	exports.serviceName = 'mergeSort';
	var MergeSort = (function () {
	    function MergeSort() {
	    }
	    MergeSort.prototype.sort = function (data, compare) {
	        if (data.length < 2) {
	            return data;
	        }
	        if (compare == null) {
	            compare = this.defaultCompare;
	        }
	        var mid;
	        var left;
	        var right;
	        mid = data.length / 2;
	        left = this.sort(data.slice(0, mid), compare);
	        right = this.sort(data.slice(mid, data.length), compare);
	        return this.merge(left, right, compare);
	    };
	    MergeSort.prototype.defaultCompare = function (a, b) {
	        return a < b
	            ? typescript_angular_utilities_1.types.CompareResult.less
	            : (a > b ? typescript_angular_utilities_1.types.CompareResult.greater : typescript_angular_utilities_1.types.CompareResult.equal);
	    };
	    MergeSort.prototype.merge = function (left, right, compare) {
	        var result = [];
	        while (left.length && right.length) {
	            if (compare(left[0], right[0]) === typescript_angular_utilities_1.types.CompareResult.greater) {
	                result.push(right.shift());
	            }
	            else {
	                // if equal it should preserve same order (stable)
	                result.push(left.shift());
	            }
	        }
	        if (left.length) {
	            result.push.apply(result, left);
	        }
	        if (right.length) {
	            result.push.apply(result, right);
	        }
	        return result;
	    };
	    return MergeSort;
	})();
	exports.MergeSort = MergeSort;
	angular.module(exports.moduleName, [])
	    .service(exports.serviceName, MergeSort);
	//# sourceMappingURL=mergeSort.service.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var sortDirection_1 = __webpack_require__(24);
	var mergeSort_service_1 = __webpack_require__(27);
	exports.moduleName = 'rl.ui.components.cardContainer.sorts.sorter';
	exports.serviceName = 'sorter';
	var Sorter = (function () {
	    function Sorter(mergeSort) {
	        this.mergeSort = mergeSort;
	    }
	    Sorter.prototype.sort = function (data, sort) {
	        var _this = this;
	        if (sort === null) {
	            return data;
	        }
	        if (_.isArray(sort)) {
	            var reverseSorts = _.clone(sort);
	            reverseSorts.reverse();
	            return _.reduce(reverseSorts, function (sortedData, nextSort) {
	                return _this.singleSort(sortedData, nextSort);
	            }, data);
	        }
	        return this.singleSort(data, sort);
	    };
	    Sorter.prototype.singleSort = function (data, sort) {
	        var compareFunction = this.buildSortFunction(sort);
	        return this.mergeSort.sort(data, compareFunction);
	    };
	    Sorter.prototype.buildSortFunction = function (sort) {
	        return function (a, b) {
	            if (sort.direction === sortDirection_1.SortDirection.none) {
	                return typescript_angular_utilities_1.types.CompareResult.equal;
	            }
	            var valueOfA = sort.column.getValue(a);
	            var valueOfB = sort.column.getValue(b);
	            var greaterResult = typescript_angular_utilities_1.types.CompareResult.greater;
	            var lessResult = typescript_angular_utilities_1.types.CompareResult.less;
	            var descendingSort = (sort.direction === sortDirection_1.SortDirection.descending);
	            var flip = sort.column.flipSort;
	            // Exclusive OR... if flipping a descending sort, you get an ascending sort
	            if ((descendingSort || flip) && !(descendingSort && flip)) {
	                greaterResult = typescript_angular_utilities_1.types.CompareResult.less;
	                lessResult = typescript_angular_utilities_1.types.CompareResult.greater;
	            }
	            return valueOfA > valueOfB
	                ? greaterResult
	                : (valueOfA < valueOfB ? lessResult : typescript_angular_utilities_1.types.CompareResult.equal);
	        };
	    };
	    Sorter.$inject = [mergeSort_service_1.serviceName];
	    return Sorter;
	})();
	exports.Sorter = Sorter;
	angular.module(exports.moduleName, [])
	    .service(exports.serviceName, Sorter);
	//# sourceMappingURL=sorter.service.js.map

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	//# sourceMappingURL=sort.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../../typings/lodashTypeExtensions.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	exports.moduleName = 'rl.ui.components.cardContainer.dataSources.dataPager';
	exports.factoryName = 'dataPager';
	exports.defaultPageSize = 10;
	var DataPager = (function () {
	    function DataPager() {
	        this.pageNumber = 1;
	        this.pageSize = exports.defaultPageSize;
	    }
	    DataPager.prototype.filter = function (dataSet) {
	        var size = this.pageSize;
	        var start = (this.pageNumber - 1) * size;
	        return _(dataSet)
	            .drop(start)
	            .take(size)
	            .value();
	    };
	    return DataPager;
	})();
	exports.DataPager = DataPager;
	function dataPagerFactory() {
	    'use strict';
	    return {
	        getInstance: function () {
	            return new DataPager();
	        },
	    };
	}
	exports.dataPagerFactory = dataPagerFactory;
	angular.module(exports.moduleName, [])
	    .factory(exports.factoryName, dataPagerFactory);
	//# sourceMappingURL=dataPager.service.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __observable = typescript_angular_utilities_1.services.observable;
	var __array = typescript_angular_utilities_1.services.array;
	var dataSourceBase_service_1 = __webpack_require__(32);
	var dataSourceProcessor_service_1 = __webpack_require__(33);
	exports.moduleName = 'rl.ui.components.cardContainer.dataSources.dataServiceDataSource';
	exports.factoryName = 'dataServiceDataSource';
	var DataServiceDataSource = (function (_super) {
	    __extends(DataServiceDataSource, _super);
	    function DataServiceDataSource(getDataSet, $q, observableFactory, dataSourceProcessor, array) {
	        _super.call(this, observableFactory, dataSourceProcessor, array);
	        this.getDataSet = getDataSet;
	        this.$q = $q;
	        this.countFilterGroups = true;
	        if (_.isFunction(this.getDataSet)) {
	            this.reload();
	        }
	    }
	    DataServiceDataSource.prototype.reload = function () {
	        var _this = this;
	        this.dataSet = null;
	        this.rawDataSet = null;
	        this.loadingDataSet = true;
	        this.$q.when(this.getDataSet()).then(function (data) {
	            _this.loadingDataSet = false;
	            _this.rawDataSet = data;
	            _this.refresh();
	            _this.observable.fire('reloaded');
	            _this.observable.fire('changed');
	        });
	    };
	    return DataServiceDataSource;
	})(dataSourceBase_service_1.DataSourceBase);
	exports.DataServiceDataSource = DataServiceDataSource;
	dataServiceDataSourceFactory.$inject = [__observable.factoryName, dataSourceProcessor_service_1.processorServiceName, __array.serviceName, '$q'];
	function dataServiceDataSourceFactory(observableFactory, dataSourceProcessor, array, $q) {
	    'use strict';
	    return {
	        getInstance: function (getDataSet) {
	            return new DataServiceDataSource(getDataSet, $q, observableFactory, dataSourceProcessor, array);
	        },
	    };
	}
	exports.dataServiceDataSourceFactory = dataServiceDataSourceFactory;
	angular.module(exports.moduleName, [__observable.moduleName, __array.moduleName])
	    .factory(exports.factoryName, dataServiceDataSourceFactory);
	//# sourceMappingURL=dataServiceDataSource.service.js.map

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	var DataSourceBase = (function () {
	    function DataSourceBase(observableFactory, dataSourceProcessor, array) {
	        var _this = this;
	        this.dataSourceProcessor = dataSourceProcessor;
	        this.array = array;
	        this.sorts = [];
	        this.filters = {};
	        this.count = 0;
	        this.countFilterGroups = false;
	        this.loadingDataSet = false;
	        this.refresh = function () {
	            if (!_this.loadingDataSet) {
	                _this.processData();
	                _this.observable.fire('redrawing');
	            }
	        };
	        this.observable = observableFactory.getInstance();
	    }
	    DataSourceBase.prototype.watch = function (action, event) {
	        return this.observable.register(action, event);
	    };
	    DataSourceBase.prototype.processData = function () {
	        var processedData;
	        if (this.countFilterGroups) {
	            processedData = this.dataSourceProcessor.processAndCount(this.sorts, this.filters, this.pager, this.rawDataSet);
	        }
	        else {
	            processedData = this.dataSourceProcessor.process(this.sorts, this.filters, this.pager, this.rawDataSet);
	        }
	        this.count = processedData.count;
	        this.dataSet = processedData.dataSet;
	        this.filteredDataSet = processedData.filteredDataSet;
	    };
	    DataSourceBase.prototype.remove = function (data) {
	        var item = this.array.remove(this.rawDataSet, data);
	        if (item != null) {
	            this.observable.fire('removed');
	            this.observable.fire('changed');
	            if (this.pager) {
	                this.refresh();
	            }
	        }
	    };
	    DataSourceBase.prototype.push = function (data) {
	        this.rawDataSet.push(data);
	        this.observable.fire('added');
	        this.observable.fire('changed');
	        this.refresh();
	    };
	    DataSourceBase.prototype.replace = function (oldData, newData) {
	        var locationOfOldData = this.rawDataSet.indexOf(oldData);
	        if (locationOfOldData >= 0) {
	            this.array.replace(this.rawDataSet, oldData, newData);
	            this.observable.fire('replaced');
	            this.observable.fire('changed');
	            this.refresh();
	        }
	    };
	    return DataSourceBase;
	})();
	exports.DataSourceBase = DataSourceBase;
	//# sourceMappingURL=dataSourceBase.service.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __object = typescript_angular_utilities_1.services.object;
	var sorter_service_1 = __webpack_require__(28);
	exports.processorServiceName = 'dataSourceProcessor';
	var DataSourceProcessor = (function () {
	    function DataSourceProcessor(object, sorter) {
	        this.object = object;
	        this.sorter = sorter;
	    }
	    DataSourceProcessor.prototype.process = function (sorts, filters, pager, data) {
	        var processedData = data;
	        if (this.object.isNullOrEmpty(sorts) === false) {
	            processedData = this.sorter.sort(processedData, sorts);
	        }
	        if (this.object.isNullOrEmpty(filters) === false) {
	            processedData = _.reduce(filters, function (filteredData, filter) {
	                // Filter the data set using the filter function on the filter
	                return _.filter(filteredData, filter.filter, filter);
	            }, processedData);
	        }
	        var result = {
	            count: (processedData != null ? processedData.length : 0),
	            filteredDataSet: processedData,
	            dataSet: processedData,
	        };
	        if (pager != null) {
	            result.dataSet = pager.filter(processedData);
	        }
	        return result;
	    };
	    DataSourceProcessor.prototype.processAndCount = function (sorts, filters, pager, data) {
	        var _this = this;
	        // If there are no filters that need to updated option counts, use the normal processor
	        if (this.object.isNullOrEmpty(filters)
	            || _.any(filters, function (filter) { return _.isFunction(filter.updateOptionCounts); }) === false) {
	            return this.process(sorts, filters, pager, data);
	        }
	        var processedData = data;
	        if (this.object.isNullOrEmpty(sorts) === false) {
	            processedData = this.sorter.sort(processedData, sorts);
	        }
	        var wrappedData = this.wrapData(processedData);
	        // Run filtration logic and compute visible items
	        _.each(filters, function (filter) {
	            _.each(wrappedData, function (item) {
	                item.filterData[filter.type] = filter.filter(item.data);
	            });
	        });
	        // Give each filter a chance to update option counts
	        _.each(filters, function (filter) {
	            if (_.isFunction(filter.updateOptionCounts)) {
	                var otherFiltersApplied = _.filter(wrappedData, function (item) {
	                    // Omit the true or false of the current filter an
	                    //  only filter out items removed by other filters
	                    var filterData = _.omit(item.filterData, filter.type); //*filterData
	                    return _.all(_.values(filterData));
	                });
	                filter.updateOptionCounts(_this.unwrapData(otherFiltersApplied));
	            }
	        });
	        // Filter down to final data set by removing items that don't match all filters
	        wrappedData = _.filter(wrappedData, function (item) {
	            return _.all(_.values(item.filterData));
	        });
	        processedData = this.unwrapData(wrappedData);
	        var result = {
	            count: processedData.length,
	            filteredDataSet: processedData,
	            dataSet: processedData,
	        };
	        if (pager != null) {
	            result.dataSet = pager.filter(processedData);
	        }
	        return result;
	    };
	    DataSourceProcessor.prototype.wrapData = function (data) {
	        return _.map(data, function (item) {
	            return {
	                data: item,
	                filterData: {},
	            };
	        });
	    };
	    DataSourceProcessor.prototype.unwrapData = function (data) {
	        return _.map(data, function (item) {
	            return item.data;
	        });
	    };
	    DataSourceProcessor.$inject = [__object.serviceName, sorter_service_1.serviceName];
	    return DataSourceProcessor;
	})();
	exports.DataSourceProcessor = DataSourceProcessor;
	//# sourceMappingURL=dataSourceProcessor.service.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __observable = typescript_angular_utilities_1.services.observable;
	var __array = typescript_angular_utilities_1.services.array;
	var dataSourceBase_service_1 = __webpack_require__(32);
	var dataSourceProcessor_service_1 = __webpack_require__(33);
	exports.moduleName = 'rl.ui.components.cardContainer.dataSources.simpleDataSource';
	exports.factoryName = 'simpleDataSource';
	var SimpleDataSource = (function (_super) {
	    __extends(SimpleDataSource, _super);
	    function SimpleDataSource(data, observableFactory, dataSourceProcessor, array) {
	        _super.call(this, observableFactory, dataSourceProcessor, array);
	        this.countFilterGroups = false;
	        this.rawDataSet = data;
	        this.processData();
	    }
	    return SimpleDataSource;
	})(dataSourceBase_service_1.DataSourceBase);
	exports.SimpleDataSource = SimpleDataSource;
	simpleDataSourceFactory.$inject = [__observable.factoryName, dataSourceProcessor_service_1.processorServiceName, __array.serviceName];
	function simpleDataSourceFactory(observableFactory, dataSourceProcessor, array) {
	    'use strict';
	    return {
	        getInstance: function (data) {
	            return new SimpleDataSource(data, observableFactory, dataSourceProcessor, array);
	        },
	    };
	}
	exports.simpleDataSourceFactory = simpleDataSourceFactory;
	angular.module(exports.moduleName, [__observable.moduleName, __array.moduleName])
	    .factory(exports.factoryName, simpleDataSourceFactory);
	//# sourceMappingURL=simpleDataSource.service.js.map

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	//# sourceMappingURL=dataSource.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var columnSearchFilter = __webpack_require__(37);
	exports.columnSearchFilter = columnSearchFilter;
	var filterGroup = __webpack_require__(38);
	exports.filterGroup = filterGroup;
	exports.moduleName = 'rl.ui.components.cardContainer.filters';
	angular.module(exports.moduleName, [
	    columnSearchFilter.moduleName,
	    filterGroup.moduleName,
	]);
	//# sourceMappingURL=filters.module.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __object = typescript_angular_utilities_1.services.object;
	var __string = typescript_angular_utilities_1.services.string;
	exports.moduleName = 'rl.ui.components.cardContainer.filters.columnSearchFilter';
	exports.factoryName = 'columnSearchFilter';
	exports.filterName = 'column-search';
	var ColumnSearchFilter = (function () {
	    function ColumnSearchFilter(object, string) {
	        this.object = object;
	        this.string = string;
	        this.type = exports.filterName;
	    }
	    ColumnSearchFilter.prototype.filter = function (item) {
	        if (this.column == null) {
	            return true;
	        }
	        var value = this.object.toString(this.column.getValue(item));
	        var search = this.searchText;
	        if (!this.caseSensitive) {
	            search = search.toLowerCase();
	            value = value.toLowerCase();
	        }
	        return this.string.contains(value, search);
	    };
	    return ColumnSearchFilter;
	})();
	exports.ColumnSearchFilter = ColumnSearchFilter;
	columnSearchFilterFactory.$inject = [__object.serviceName, __string.serviceName];
	function columnSearchFilterFactory(object, string) {
	    'use strict';
	    return {
	        getInstance: function () {
	            return new ColumnSearchFilter(object, string);
	        },
	    };
	}
	exports.columnSearchFilterFactory = columnSearchFilterFactory;
	angular.module(exports.moduleName, [__object.moduleName, __string.moduleName])
	    .factory(exports.factoryName, columnSearchFilterFactory);
	//# sourceMappingURL=columnSearchFilter.service.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var filterOption = __webpack_require__(39);
	exports.filterOption = filterOption;
	var modeFilterGroup = __webpack_require__(41);
	exports.modeFilterGroup = modeFilterGroup;
	var rangeFilterGroup = __webpack_require__(43);
	exports.rangeFilterGroup = rangeFilterGroup;
	var filterGroup_service_1 = __webpack_require__(42);
	var filterGroup_directive_1 = __webpack_require__(44);
	__export(__webpack_require__(44));
	__export(__webpack_require__(42));
	exports.moduleName = 'rl.ui.components.cardContainer.filters.filterGroup';
	angular.module(exports.moduleName, [
	    typescript_angular_utilities_1.services.object.moduleName,
	    filterOption.moduleName,
	    modeFilterGroup.moduleName,
	    rangeFilterGroup.moduleName,
	])
	    .factory(filterGroup_service_1.factoryName, filterGroup_service_1.filterGroupFactory)
	    .directive(filterGroup_directive_1.directiveName, filterGroup_directive_1.filterGroup)
	    .controller(filterGroup_directive_1.controllerName, filterGroup_directive_1.FilterGroupController);
	//# sourceMappingURL=filterGroup.module.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.cardContainer.filters.filterGroup.filterOption';
	exports.directiveName = 'rlFilterOption';
	function filterOption() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(40),
	        scope: {
	            activate: '&',
	            isActive: '=active',
	            option: '=',
	        },
	    };
	}
	exports.filterOption = filterOption;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, filterOption);
	//# sourceMappingURL=filterOption.js.map

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row filter-option\" ng-class=\"{ 'active': isActive }\" ng-click=\"activate()\">\r\n\t<div class=\"col-sm-1\">\r\n\t\t<i class='fa fa-arrow-right' ng-show=\"isActive == true\"></i>\r\n\t</div>\r\n\t<div class=\"col-sm-1\" ng-if=\"hasIcon\" ng-bind-html=\"option.icon\"></div>\r\n\t<div ng-class=\"{ 'col-sm-6': hasIcon, 'col-sm-7': !hasIcon }\">\r\n\t\t{{option.label}}\r\n\t</div>\r\n\t<div class=\"col-sm-3 text-right\" ng-show=\"option.count != null\">\r\n\t\t({{option.count}})\r\n\t</div>\r\n</div>"

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __object = typescript_angular_utilities_1.services.object;
	var filterGroup_service_1 = __webpack_require__(42);
	exports.moduleName = 'rl.ui.components.cardContainer.filters.filterGroup.modeFilterGroup';
	exports.factoryName = 'modeFilterGroup';
	var ModeFilterGroup = (function (_super) {
	    __extends(ModeFilterGroup, _super);
	    function ModeFilterGroup(settings, object) {
	        this.getValue = settings.getValue;
	        settings.options = _.map(settings.options, this.buildModeOption, this);
	        _super.call(this, settings, object);
	    }
	    ModeFilterGroup.prototype.buildModeOption = function (option) {
	        var _this = this;
	        var modeOption = option;
	        modeOption.filter = function (item) {
	            if (modeOption.displayAll) {
	                return true;
	            }
	            return _this.getValue(item) === modeOption.value;
	        };
	        return modeOption;
	    };
	    return ModeFilterGroup;
	})(filterGroup_service_1.FilterGroup);
	exports.ModeFilterGroup = ModeFilterGroup;
	modeFilterGroupFactory.$inject = [__object.serviceName];
	function modeFilterGroupFactory(object) {
	    'use strict';
	    return {
	        getInstance: function (settings) {
	            return new ModeFilterGroup(settings, object);
	        },
	    };
	}
	exports.modeFilterGroupFactory = modeFilterGroupFactory;
	angular.module(exports.moduleName, [__object.moduleName])
	    .factory(exports.factoryName, modeFilterGroupFactory);
	//# sourceMappingURL=modeFilterGroup.service.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __object = typescript_angular_utilities_1.services.object;
	exports.factoryName = 'filterGroup';
	var FilterGroup = (function () {
	    function FilterGroup(settings, object) {
	        this.label = settings.label;
	        this.type = settings.type != null ? settings.type : settings.label;
	        this.options = settings.options;
	        this.activeOption = this.options[0];
	        _.each(this.options, function (option) {
	            if (_.isUndefined(option.type)) {
	                option.type = option.label;
	            }
	            option.type = object.toString(option.type).toLowerCase();
	        });
	    }
	    FilterGroup.prototype.filter = function (item) {
	        return this.activeOption.filter(item);
	    };
	    FilterGroup.prototype.setActiveOption = function (index) {
	        if (index >= 0 && index < this.options.length) {
	            this.activeOption = this.options[index];
	        }
	    };
	    FilterGroup.prototype.setOptionCounts = function (counts) {
	        _.each(this.options, function (option) {
	            if (_.has(counts, option.type)) {
	                option.count = counts[option.type];
	            }
	        });
	    };
	    FilterGroup.prototype.updateOptionCounts = function (filteredDataSet) {
	        _.each(this.options, function (option) {
	            option.count = _.filter(filteredDataSet, option.filter, option).length;
	        });
	    };
	    return FilterGroup;
	})();
	exports.FilterGroup = FilterGroup;
	filterGroupFactory.$inject = [__object.serviceName];
	function filterGroupFactory(object) {
	    'use strict';
	    return {
	        getInstance: function (settings) {
	            return new FilterGroup(settings, object);
	        },
	    };
	}
	exports.filterGroupFactory = filterGroupFactory;
	//# sourceMappingURL=filterGroup.service.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __object = typescript_angular_utilities_1.services.object;
	var filterGroup_service_1 = __webpack_require__(42);
	exports.moduleName = 'rl.ui.components.cardContainer.filters.filterGroup.rangeFilterGroup';
	exports.factoryName = 'rangeFilterGroup';
	var RangeFilterGroup = (function (_super) {
	    __extends(RangeFilterGroup, _super);
	    function RangeFilterGroup(settings, object) {
	        this.getValue = settings.getValue;
	        settings.options = _.map(settings.options, this.buildRangeOption, this);
	        _super.call(this, settings, object);
	    }
	    RangeFilterGroup.prototype.buildRangeOption = function (option) {
	        var _this = this;
	        var modeOption = option;
	        modeOption.filter = function (item) {
	            var value = _this.getValue(item);
	            var result = true;
	            if (_.isUndefined(option.highExclusive) === false) {
	                result = value < option.highExclusive;
	            }
	            else if (_.isUndefined(option.highInclusive) === false) {
	                result = value <= option.highInclusive;
	            }
	            if (_.isUndefined(option.lowExclusive) === false) {
	                result = result && value > option.lowExclusive;
	            }
	            else if (_.isUndefined(option.lowInclusive) === false) {
	                result = result && value >= option.lowInclusive;
	            }
	            return result;
	        };
	        return modeOption;
	    };
	    return RangeFilterGroup;
	})(filterGroup_service_1.FilterGroup);
	rangeFilterGroupFactory.$inject = [__object.serviceName];
	function rangeFilterGroupFactory(object) {
	    'use strict';
	    return {
	        getInstance: function (settings) {
	            return new RangeFilterGroup(settings, object);
	        },
	    };
	}
	exports.rangeFilterGroupFactory = rangeFilterGroupFactory;
	angular.module(exports.moduleName, [__object.moduleName])
	    .factory(exports.factoryName, rangeFilterGroupFactory);
	//# sourceMappingURL=rangeFilterGroup.service.js.map

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../../typings/commonjs.d.ts' />
	'use strict';
	exports.directiveName = 'rlFilterGroup';
	exports.controllerName = 'FilterGroupController';
	var FilterGroupController = (function () {
	    function FilterGroupController($scope) {
	        this.$scope = $scope;
	        this.hasIcon = $scope.icon != null && $scope.icon !== '';
	        this.showChildren = true;
	    }
	    FilterGroupController.prototype.toggleChildren = function () {
	        this.showChildren = !this.showChildren;
	    };
	    FilterGroupController.prototype.selectOption = function (option) {
	        this.$scope.filterGroup.activeOption = option;
	        this.showChildren = false;
	        if (this.$scope.source != null) {
	            this.$scope.source.refresh();
	        }
	        else {
	            this.$scope.$emit('dataSource.requestRefresh'); //*event?
	        }
	    };
	    FilterGroupController.$inject = ['$scope'];
	    return FilterGroupController;
	})();
	exports.FilterGroupController = FilterGroupController;
	function filterGroup() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(45),
	        controller: exports.controllerName,
	        controllerAs: 'controller',
	        scope: {},
	        bindToController: {
	            icon: '=',
	            filterGroup: '=',
	            source: '=',
	        },
	    };
	}
	exports.filterGroup = filterGroup;
	//# sourceMappingURL=filterGroup.directive.js.map

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"filter-group\">\r\n\t<div class=\"row filter-header\" ng-click=\"controller.toggleChildren()\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<i class=\"collapse-icon fa fa-caret-down fa-2x\" ng-show=\"controller.showChildren\" title=\"Hide filter list\"></i>\r\n\t\t\t<i class=\"collapse-icon fa fa-caret-right fa-2x\" ng-hide=\"controller.showChildren\" title=\"Show filter list\"></i>\r\n\t\t\t<div class=\"filter-option\">\r\n\t\t\t\t<div style=\"display:inline-block\" ng-show=\"controller.hasIcon\" ng-bind-html=\"controller.icon\"></div>\r\n\t\t\t\t<h4 style=\"display: inline-block\">{{controller.filterGroup.label}}: {{controller.filterGroup.activeOption.label}}</h4>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div ng-show=\"controller.showChildren\" ng-repeat=\"filterOption in controller.filterGroup.options\">\r\n\t\t<rl-filter-option option=\"filterOption\" active=\"filterGroup.activeOption === filterOption\" activate=\"controller.selectOption(filterOption)\"></rl-filter-option>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.cardContainer.itemCount';
	exports.directiveName = 'rlItemCount';
	function itemCount() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: '^^rlCardContainer',
	        template: "\n<p ng-show=\"!source.loadingDataSet\">\n\tShowing <strong>{{source.dataSet.length}} of {{source.count}}</strong> total items\n</p>",
	        scope: true,
	        link: function (scope, element, attrs, cardContainerController) {
	            scope.source = cardContainerController.dataSource;
	        }
	    };
	}
	exports.itemCount = itemCount;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, itemCount);
	//# sourceMappingURL=itemCount.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	exports.moduleName = 'rl.ui.components.cardContainer.pager';
	exports.directiveName = 'rlPager';
	exports.controllerName = 'PagerController';
	exports.defaultVisiblePageCount = 5;
	var PagerController = (function () {
	    function PagerController($scope, $element) {
	        var _this = this;
	        this.canGoBack = false;
	        this.canGoForward = false;
	        this.hasPageFilter = true;
	        this.updatePageCount = function () {
	            var totalItems = _this.dataSource.count;
	            var newLastPage = Math.ceil(totalItems / _this.pager.pageSize);
	            if (newLastPage !== _this.lastPage) {
	                _this.lastPage = newLastPage;
	                _this.currentPage = 1;
	            }
	            _this.updatePaging();
	        };
	        var cardContainerController = $element.controller('rlCardContainer');
	        this.pager = cardContainerController.pager;
	        if (pager == null) {
	            this.hasPageFilter = false;
	        }
	        else {
	            this.visiblePageCount = this.pageCount != null ? this.pageCount : exports.defaultVisiblePageCount;
	            this.lastPage = 1;
	            this.dataSource = cardContainerController.dataSource;
	            $scope.$watch(function () { return _this.dataSource.count; }, this.updatePageCount);
	            $scope.$watch(function () { return _this.pager.pageSize; }, this.updatePageCount);
	            $scope.$watch(function () { return _this.currentPage; }, function (page) {
	                _this.updatePaging();
	                _this.pager.pageNumber = page;
	                _this.dataSource.refresh();
	            });
	        }
	    }
	    PagerController.prototype.updatePaging = function () {
	        var page = this.currentPage;
	        this.canGoBack = page > 1;
	        this.canGoForward = page < this.lastPage;
	        var nonCurrentVisiblePages = this.visiblePageCount - 1;
	        var before = Math.floor(nonCurrentVisiblePages / 2);
	        var after = Math.ceil(nonCurrentVisiblePages / 2);
	        var startPage = page - before;
	        var endPage = page + after;
	        if (startPage < 1) {
	            startPage = 1;
	            endPage = Math.min(this.visiblePageCount, this.lastPage);
	        }
	        else if (endPage > this.lastPage) {
	            endPage = this.lastPage;
	            startPage = Math.max(this.lastPage - nonCurrentVisiblePages, 1);
	        }
	        this.pages = _.range(startPage, endPage + 1);
	    };
	    PagerController.prototype.first = function () {
	        this.currentPage = 1;
	    };
	    PagerController.prototype.previous = function () {
	        if (this.currentPage > 1) {
	            this.currentPage--;
	        }
	    };
	    PagerController.prototype.goto = function (page) {
	        if (page >= 1 && page <= this.lastPage) {
	            this.currentPage = page;
	        }
	    };
	    PagerController.prototype.next = function () {
	        if (this.currentPage < this.lastPage) {
	            this.currentPage++;
	        }
	    };
	    PagerController.prototype.last = function () {
	        this.currentPage = this.lastPage;
	    };
	    PagerController.$inject = ['$scope', '$element'];
	    return PagerController;
	})();
	exports.PagerController = PagerController;
	function pager() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: '^^rlCardContainer',
	        template: __webpack_require__(48),
	        scope: {},
	        bindToController: {
	            pageCount: '=visiblePages',
	        },
	    };
	}
	exports.pager = pager;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, pager)
	    .controller(exports.controllerName, PagerController);
	//# sourceMappingURL=pager.js.map

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<nav ng-if=\"pager.hasPageFilter\">\r\n\t<ul class=\"pagination\">\r\n\t\t<li title=\"Go to first page\" ng-click=\"pager.first()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoBack }\">\r\n\t\t\t<a><i class=\"fa fa-angle-double-left\"></i></a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to previous page\" ng-click=\"pager.previous()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoBack }\">\r\n\t\t\t<a><i class=\"fa fa-angle-left\"></i></a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to page {{pager.page}}\" ng-click=\"pager.goto(page)\"\r\n\t\t\tng-repeat=\"page in pager.pages\"\r\n\t\t\tng-class=\"{ 'active': pager.currentPage == page }\">\r\n\t\t\t<a>{{page}}</a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to next page\" ng-click=\"pager.next()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoForward }\">\r\n\t\t\t<a><i class=\"fa fa-angle-right\"></i></a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to last page\" ng-click=\"pager.last()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoForward }\">\r\n\t\t\t<a><i class=\"fa fa-angle-double-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>\r\n"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.cardContainer.pageSize';
	exports.directiveName = 'rlPageSize';
	exports.controllerName = 'PageSizeController';
	exports.availablePageSizes = [10, 25, 50, 100];
	exports.defaultPageSize = 10;
	var PageSizeController = (function () {
	    function PageSizeController($scope, $element) {
	        var _this = this;
	        this.selectedPageSize = exports.defaultPageSize;
	        this.pageSizes = exports.availablePageSizes;
	        this.hasPageFilter = true;
	        this.cardContainerController = $element.controller('rlCardContainer');
	        var pager = this.cardContainerController.pager;
	        if (pager == null) {
	            this.hasPageFilter = false;
	        }
	        else {
	            $scope.$watch(function () { return _this.selectedPageSize; }, function (newPageSize) {
	                if (pager != null) {
	                    pager.pageSize = newPageSize;
	                    _this.cardContainerController.dataSource.refresh();
	                }
	            });
	        }
	    }
	    PageSizeController.$inject = ['$scope', '$element'];
	    return PageSizeController;
	})();
	exports.PageSizeController = PageSizeController;
	function pageSize() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: '^^rlCardContainer',
	        template: __webpack_require__(50),
	        controller: exports.controllerName,
	        controllerAs: 'controller',
	    };
	}
	exports.pageSize = pageSize;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, pageSize)
	    .controller(exports.controllerName, PageSizeController);
	//# sourceMappingURL=pageSize.js.map

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div ng-show=\"controller.hasPageFilter\">\r\n\t<select class=\"form-control\" title=\"Cards per page\" ng-model=\"controller.selectedPageSize\"\r\n\t\t\tng-options=\"pageSize for pageSize in controller.pageSizes\"></select>\r\n</div>\r\n"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __boolean = typescript_angular_utilities_1.services.boolean;
	exports.moduleName = 'rl.ui.components.cardContainer.selectionControl';
	exports.directiveName = 'rlCardContainer';
	exports.controllerName = 'CardContainerController';
	var SelectionControlController = (function () {
	    function SelectionControlController($scope, $element, bool) {
	        var _this = this;
	        this.$scope = $scope;
	        this.cardContainerController = $element.controller('rlCardContainer');
	        this.selectedItems = this.cardContainerController.numberSelected;
	        this.pagingEnabled = bool.toBool(this.cardContainerController.pager);
	        this.dataSource = this.cardContainerController.dataSource;
	        $scope.$watch(function () { return _this.cardContainerController.numberSelected; }, function (value) {
	            _this.selectedItems = value;
	        });
	    }
	    SelectionControlController.prototype.selectPage = function () {
	        _.each(this.dataSource.dataSet, function (item) {
	            item.viewData.selected = true;
	        });
	        this.$scope.$emit('selectionChanged'); //*events?
	    };
	    SelectionControlController.prototype.selectAll = function () {
	        _.each(this.dataSource.filteredDataSet, function (item) {
	            item.viewData.selected = true;
	        });
	        this.$scope.$emit('selectionChanged'); //*events?
	    };
	    SelectionControlController.prototype.clearPage = function () {
	        _.each(this.dataSource.dataSet, function (item) {
	            item.viewData.selected = false;
	        });
	        this.$scope.$emit('selectionChanged'); //*events?
	    };
	    SelectionControlController.prototype.clearAll = function () {
	        _.each(this.dataSource.filteredDataSet, function (item) {
	            item.viewData.selected = false;
	        });
	        this.$scope.$emit('selectionChanged'); //*events?
	    };
	    SelectionControlController.$inject = ['$scope', '$element', __boolean.serviceName];
	    return SelectionControlController;
	})();
	exports.SelectionControlController = SelectionControlController;
	function selectionControl() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: '^^rlCardContainer',
	        template: __webpack_require__(52),
	        controller: exports.controllerName,
	        controllerAs: 'selection',
	    };
	}
	exports.selectionControl = selectionControl;
	angular.module(exports.moduleName, [__boolean.moduleName])
	    .directive(exports.directiveName, selectionControl)
	    .controller(exports.controllerName, SelectionControlController);
	//# sourceMappingURL=selectionControl.js.map

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n\t<div style=\"margin-bottom: 5px\">\r\n\t\t<span><strong>{{selection.selectedItems}}</strong> items selected</span>\r\n\t</div>\r\n\t<div style=\"margin-bottom: 5px\" ng-if=\"selection.pagingEnabled\">\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.selectPage()\">Select page</button>\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.clearPage()\">Clear page</button>\r\n\t</div>\r\n\t<div>\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.selectAll()\">Select all</button>\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.clearAll()\">Clear all</button>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	// /// <reference path='../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __object = typescript_angular_utilities_1.services.object;
	var __array = typescript_angular_utilities_1.services.array;
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var dataSources_module_1 = __webpack_require__(25);
	var sorts_module_1 = __webpack_require__(26);
	var breakpoint_1 = __webpack_require__(19);
	exports.directiveName = 'rlCardContainer';
	exports.controllerName = 'CardContainerController';
	exports.defaultMaxColumnSorts = 2;
	exports.defaultSelectionTitle = 'Select card';
	var CardContainerController = (function () {
	    function CardContainerController($scope, $attrs, object, array, dataPagerFactory, parentChild) {
	        var _this = this;
	        this.$scope = $scope;
	        this.object = object;
	        this.array = array;
	        this.dataPagerFactory = dataPagerFactory;
	        this.parentChild = parentChild;
	        this.numberSelected = 0;
	        this.addViewData = function () {
	            _.each(_this.dataSource.rawDataSet, function (item) {
	                if (_.isUndefined(item.viewData)) {
	                    item.viewData = {
	                        selected: false,
	                    };
	                }
	            });
	            _this.updateDisabledSelections();
	        };
	        this.clearFilteredSelections = function () {
	            var nonVisibleItems = _.difference(_this.dataSource.rawDataSet, _this.dataSource.filteredDataSet);
	            _.each(nonVisibleItems, function (item) {
	                if (_.isUndefined(item.viewData)) {
	                    item.viewData = {
	                        selected: false,
	                    };
	                }
	                item.viewData.selected = false;
	                item.viewData.selectionTitle = exports.defaultSelectionTitle;
	            });
	            _this.updateSelected();
	        };
	        this.updateSelected = function () {
	            _this.numberSelected = _.filter(_this.dataSource.filteredDataSet, function (item) {
	                return item.viewData.selected;
	            }).length;
	        };
	        this.updateDisabledSelections = function () {
	            if (_this.disablingSelections) {
	                _.each(_this.dataSource.rawDataSet, function (item) {
	                    var disabledReason = _this.disableSelection({ item: item });
	                    item.viewData.disabledSelection = (disabledReason != null);
	                    item.viewData.selectionTitle = (item.viewData.disabledSelection ? disabledReason : exports.defaultSelectionTitle);
	                });
	            }
	        };
	        this.dataSource = this.source;
	        this.permanentFooters = _.isUndefined(this.permanentFooters) ? false : this.permanentFooters;
	        this.maxColSorts = this.maxColumnSorts != null ? this.maxColumnSorts : exports.defaultMaxColumnSorts;
	        this.disablingSelections = object.isNullOrWhitespace($attrs.disableSelection) === false;
	        this.sortDirection = sorts_module_1.SortDirection;
	        this.syncFilters();
	        this.setupPaging();
	        this.buildColumnSizes();
	        if (this.selectableCards) {
	            //*use card container event service?
	            $scope.$on('selectionChanged', this.updateSelected);
	            $scope.$on('updateDisabledSelections', this.updateDisabledSelections);
	            this.dataSource.watch(this.addViewData, 'changed');
	            this.dataSource.watch(this.clearFilteredSelections, 'redrawing');
	            this.addViewData();
	            this.selectionColumn = {
	                label: null,
	                size: null,
	                getValue: function (item) {
	                    return item.viewData.selected;
	                },
	                flipSort: true,
	            };
	        }
	        if (this.dataSource.sorts == null) {
	            this.dataSource.sorts = [];
	        }
	    }
	    CardContainerController.prototype.lookupFilter = function (type) {
	        return this.filters[type];
	    };
	    CardContainerController.prototype.sortSelected = function () {
	        this.sort(this.selectionColumn);
	    };
	    CardContainerController.prototype.openCard = function () {
	        var behaviors = this.parentChild.getAllChildBehaviors(this.dataSource.dataSet);
	        return _.all(_.map(behaviors, function (behavior) { return behavior.close(); }));
	    };
	    CardContainerController.prototype.sort = function (column) {
	        var sortList = this.dataSource.sorts;
	        var firstSort = sortList[0];
	        // If column is already the primary sort, change the direction
	        if (firstSort != null
	            && firstSort.column === column) {
	            firstSort.direction = sorts_module_1.SortDirection.toggle(firstSort.direction);
	            // Clear sort
	            if (firstSort.direction === sorts_module_1.SortDirection.none) {
	                this.clearVisualSortIndicator(firstSort);
	                firstSort = null;
	                // If the column has secondary sorts don't fall back to a
	                //  secondary sort, instead just clear all sorts
	                if (column.secondarySorts != null) {
	                    sortList.length = 0;
	                }
	                else {
	                    sortList.shift();
	                }
	            }
	        }
	        else {
	            // Else make column primary ascending sort
	            // Remove any existing non-primary sorts on column
	            this.array.remove(sortList, function (sort) {
	                return column === sort.column;
	            });
	            // Build ascending sort for column
	            var newSort = {
	                column: column,
	                direction: sorts_module_1.SortDirection.ascending,
	            };
	            sortList.unshift(newSort);
	            firstSort = newSort;
	        }
	        this.updateVisualColumnSorting();
	        // If column has secondary sorts, wipe the sort order and just apply the secondary sorts
	        if (firstSort != null && column.secondarySorts != null) {
	            sortList.length = 0;
	            var secondarySorts = this.buildSecondarySorts(firstSort.direction, column.secondarySorts);
	            sortList.push(firstSort);
	            sortList.push.apply(sortList, secondarySorts);
	        }
	        else {
	            // If not using column secondary sorts, limit the maximum number
	            //  of sorts applied to the maximum number of sorts
	            this.dataSource.sorts = _.take(sortList, this.maxColSorts);
	        }
	        this.dataSource.refresh();
	    };
	    CardContainerController.prototype.selectionChanged = function () {
	        this.updateSelected();
	        this.$scope.$emit('selectionChanged');
	    };
	    CardContainerController.prototype.syncFilters = function () {
	        if (this.filters != null) {
	            // Convert filter array to dictionary if necessary
	            if (_.isArray(this.filters)) {
	                this.filters = this.array.toDictionary(this.filters, function (filter) { return filter.type; });
	            }
	            this.dataSource.filters = this.filters;
	            this.dataSource.refresh();
	        }
	        else if (this.dataSource.filters != null) {
	            this.filters = this.dataSource.filters;
	        }
	    };
	    CardContainerController.prototype.setupPaging = function () {
	        // If paging flag is specified, card container controls pager instance
	        if (this.paging != null) {
	            if (this.paging === false) {
	                this.dataSource.pager = null;
	            }
	            else {
	                this.pager = this.dataPagerFactory.getInstance();
	                this.dataSource.pager = this.pager;
	            }
	        }
	        else if (this.dataSource.pager) {
	            // If the paging flag is not set and the dataSource has a pager, save a reference here
	            this.pager = this.dataSource.pager;
	        }
	    };
	    CardContainerController.prototype.buildColumnSizes = function () {
	        var _this = this;
	        _.each(this.columns, function (column) {
	            var sizes = column.size;
	            if (_.isObject(sizes)) {
	                sizes[breakpoint_1.xs] = _this.object.valueOrDefault(sizes[breakpoint_1.xs], 0);
	                sizes[breakpoint_1.sm] = _this.object.valueOrDefault(sizes[breakpoint_1.sm], sizes[breakpoint_1.xs]);
	                sizes[breakpoint_1.md] = _this.object.valueOrDefault(sizes[breakpoint_1.md], sizes[breakpoint_1.sm]);
	                sizes[breakpoint_1.lg] = _this.object.valueOrDefault(sizes[breakpoint_1.lg], sizes[breakpoint_1.md]);
	            }
	            else {
	                column.size = {
	                    xs: sizes,
	                    sm: sizes,
	                    md: sizes,
	                    lg: sizes,
	                };
	            }
	        });
	    };
	    CardContainerController.prototype.lookupColumn = function (label) {
	        return _.find(this.columns, function (column) {
	            return column.label === label;
	        });
	    };
	    CardContainerController.prototype.buildSecondarySorts = function (direction, secondarySorts) {
	        var _this = this;
	        var sortList = secondarySorts[sorts_module_1.SortDirection.getFullName(direction)];
	        return _.map(sortList, function (sort) {
	            return {
	                direction: sort.direction,
	                column: _this.lookupColumn(sort.column),
	            };
	        });
	    };
	    CardContainerController.prototype.updateVisualColumnSorting = function () {
	        var _this = this;
	        _.each(this.dataSource.sorts, function (sort, index) {
	            // Only first sort should have visible direction
	            if (index === 0) {
	                _this.updateVisualSortIndicator(sort);
	            }
	            else {
	                _this.clearVisualSortIndicator(sort);
	            }
	        });
	    };
	    CardContainerController.prototype.updateVisualSortIndicator = function (sort) {
	        sort.column.sortDirection = sort.direction;
	    };
	    CardContainerController.prototype.clearVisualSortIndicator = function (sort) {
	        sort.column.sortDirection = null;
	    };
	    CardContainerController.$inject = ['$scope', '$attrs', __object.serviceName, __array.serviceName, dataSources_module_1.dataPager.factoryName, __parentChild.serviceName];
	    return CardContainerController;
	})();
	exports.CardContainerController = CardContainerController;
	cardContainer.$inject = ['$compile'];
	function cardContainer($compile) {
	    'use strict';
	    return {
	        restrict: 'E',
	        transclude: true,
	        template: __webpack_require__(54),
	        controller: exports.controllerName,
	        controllerAs: 'cardContainer',
	        scope: {},
	        bindToController: {
	            // summary: The data source for the card container
	            // remarks: Can be an array of objects, or an implementation of the data source contract: {
	            //     sorts: A list of sorts to apply to the data. Sorts should be in this format: {
	            //         column: The name of the column to sort on,
	            //         direction: Sort ascending or descending (sortDirection.js)
	            //     },
	            //     filters: A list of filters to apply to the data source,
	            //     pager: A pager that can be optionally used to page the data: {
	            //         filter: function(dataSet) {
	            //             Takes the data set and filters it down to pages
	            //         }
	            //     },
	            //     refresh: [function] Call to trigger the data source to refresh,
	            //     dataSet: Will contain the resulting data provided by the source, after sorts and filters are applied,
	            //     count: The number of items available in the data set (used for paging).
	            //     loadingDataSet: A boolean indicating if the dataSet is being refreshed / loaded,
	            // }
	            source: '=',
	            // summary: A list of filters to be applied to the data source
	            // remarks: Each filter should implement the data filter contract: {
	            //     type: A name that can be used to look up the filter,
	            //     filter: function(item) { takes an item and returns false if it should be removed from the data set },
	            // }
	            filters: '=',
	            // summary: Turn paging on or off (true / false)
	            paging: '=',
	            // summary: A list of the columns for building the column header and card headers.
	            // remarks: Each column object should be in the following format: {
	            //     label: The label for the column header,
	            //     description: A description for the column; shown in tooltips,
	            //     size: A description of the column size at breakpoints; either a constant int (for constant size) or breakpoint detail object: {
	            //         [xs]: optional size for xs breakpoint (defaults to 0),
	            //         [sm]: optional size for sm breakpoint (defaults to xs),
	            //         [md]: optional size for md breakpoint (defaults to sm),
	            //         [lg]: optional size for lg breakpoint (defaults to md),
	            //     },
	            //     getValue: A function that takes a data record and retrieves the value for the column,
	            //     headerTemplateUrl: The path to an HTML template for the column header,
	            //     headerTemplate: An HTML template string for the column header (overriden by headerTemplateUrl if present),
	            //     templateUrl: The path to an HTML template for the card header,
	            //     template: An HTML template string for the card header (overriden by templateUrl if present),
	            //     secondarySorts: A set of secondary sorts to apply on other columns when this column is sorted (ascending and / or descending): {
	            //        sortDirection.ascending ('asc'):  [
	            //             {
	            //                 column: The label of another column to sort on,
	            //                 direction: The direction to sort the column,
	            //             },
	            //             ...
	            //        ],
	            //        sortDirection.descending ('desc'): [
	            //             {
	            //                 column: The label of another column to sort on,
	            //                 direction: The direction to sort the column,
	            //             },
	            //             ...
	            //        ],
	            //     }
	            // }
	            columns: '=',
	            // summary: container-wide data available in cards
	            containerData: '=',
	            // summary: controller shared by all components on a card
	            // remarks: this controller cannot override any of the following variable names:
	            //          columns
	            //          item
	            //          contentTemplate
	            //          footerTemplate
	            //          clickable
	            //          cardController
	            //          cardControllerAs
	            //          cardAs
	            //          showContent
	            //          toggleContent
	            //          collapse
	            //          selected
	            //          setSelected
	            cardController: '@',
	            // summary: controller alias specified using controllerAs syntax
	            cardControllerAs: '@',
	            // summary: name used to access the card data
	            cardAs: '@',
	            // summary: Indicates if cards should show active state on mouse over
	            clickableCards: '=',
	            // summary: The number of sorts that can be applied at a time.
	            maxColumnSorts: '=',
	            permanentFooters: '=',
	            // summary: If true, turns on selection for cards via the cardData.viewData.selected property
	            selectableCards: '=',
	            // summary: Function called with each item. If true is returned selection is disabled for this item.
	            //          If function is not defined, selection is enabled for all by default.
	            disableSelection: '&',
	        },
	        link: function (scope, element, attrs, controller, transclude) {
	            var headerArea = element.find('.container-header-template');
	            var footerArea = element.find('.container-footer-template');
	            controller.makeCard = transclude;
	            transclude(scope, function (clone) {
	                var header = clone.filter('container-header');
	                if (header.length === 0) {
	                    var defaultHeader = __webpack_require__(55);
	                    header = $compile(defaultHeader)(scope);
	                }
	                headerArea.append(header);
	                var footer = clone.filter('container-footer');
	                if (footer.length === 0) {
	                    var defaultFooter = __webpack_require__(56);
	                    footer = $compile(defaultFooter)(scope);
	                }
	                footerArea.append(footer);
	            });
	        }
	    };
	}
	exports.cardContainer = cardContainer;
	//# sourceMappingURL=cardContainer.js.map

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card-container\">\r\n\t<div>\r\n\t\t<div class=\"card-container-header\">\r\n\t\t\t<div class=\"container-header-template\"></div>\r\n\t\t</div>\r\n\r\n\t\t<rl-generic-container selector=\"cardContainer.selectableCards\">\r\n\t\t\t<template when-selector=\"false\" default>\r\n\t\t\t\t<div class=\"card-columns-header\">\r\n\t\t\t\t\t<div ng-repeat=\"column in cardContainer.columns\">\r\n\t\t\t\t\t\t<rl-column-header sort=\"cardContainer.sort(column)\" sorting=\"column.sortDirection\" column=\"column\"></rl-column-header>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\t\t\t<template when-selector=\"true\">\r\n\t\t\t\t<div class=\"card-columns-header\">\r\n\t\t\t\t\t<div class=\"select-group\">\r\n\t\t\t\t\t\t<div class=\"select-column\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-check\" style=\"margin-left: 6px; cursor: pointer\" ng-click=\"cardContainer.sortSelected()\"></i>\r\n\t\t\t\t\t\t\t<i ng-show=\"cardContainer.sortColumn.sortDirection === cardContainer.sortDirection.ascending\" class=\"fa fa-sort-asc\"></i>\r\n\t\t\t\t\t\t\t<i ng-show=\"cardContainer.sortColumn.sortDirection === cardContainer.sortDirection.descending\" class=\"fa fa-sort-desc\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"select-content\">\r\n\t\t\t\t\t\t\t<div ng-repeat=\"column in cardContainer.columns\">\r\n\t\t\t\t\t\t\t\t<rl-column-header sort=\"cardContainer.sort(column)\" sorting=\"column.sortDirection\" column=\"column\"></rl-column-header>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\t\t</rl-generic-container>\r\n\r\n\t\t<div ng-repeat=\"card in cardContainer.dataSource.dataSet\">\r\n\t\t\t<rl-card columns=\"cardContainer.columns\" item=\"card\"\r\n\t\t\t\t\t clickable=\"cardContainer.clickableCards\"\r\n\t\t\t\t\t selectable=\"cardContainer.selectableCards\"\r\n\t\t\t\t\t selection-changed=\"cardContainer.selectionChanged()\"\r\n\t\t\t\t\t container-data=\"cardContainer.containerData\"\r\n\t\t\t\t\t source=\"cardContainer.dataSource\"\r\n\t\t\t\t\t permanent-footer=\"cardContainer.permanentFooters\"\r\n\t\t\t\t\t card-controller=\"cardContainer.cardController\"\r\n\t\t\t\t\t card-controller-as=\"cardContainer.cardControllerAs\"\r\n\t\t\t\t\t card-as=\"cardContainer.cardAs\"></rl-card>\r\n\t\t</div>\r\n\r\n\t\t<div>\r\n\t\t\t<rl-busy loading=\"cardContainer.dataSource.loadingDataSet\" size=\"2x\"></rl-busy>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card-container-footer\">\r\n\t\t\t<div class=\"container-footer-template\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-9\">\r\n\t\t<rl-card-search></rl-card-search>\r\n\t</div>\r\n\t<div class=\"col-sm-3\">\r\n\t\t<rl-page-size></rl-page-size>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n\t<div ng-if=\"!cardContainer.selectableCards\" class=\"col-sm-6\">\r\n\t\t<rl-item-count></rl-item-count>\r\n\t</div>\r\n\t<span ng-if=\"cardContainer.selectableCards\">\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t\t<rl-selection-control></rl-selection-control>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t\t<rl-item-count></rl-item-count>\r\n\t\t</div>\r\n\t</span>\r\n\t<div class=\"col-sm-6\">\r\n\t\t<rl-pager class=\"pull-right\"></rl-pager>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	//# sourceMappingURL=column.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __object = typescript_angular_utilities_1.services.object;
	exports.moduleName = 'rl.ui.components.commaList';
	exports.directiveName = 'rlCommaList';
	exports.controllerName = 'CommaListController';
	var CommaListController = (function () {
	    function CommaListController($attrs, object) {
	        this.remainingItems = 0;
	        this.hasTransform = object.isNullOrWhitespace($attrs.transform) === false;
	        this.list = this.getFirstItems(this.inList);
	    }
	    CommaListController.prototype.getFirstItems = function (list) {
	        var _this = this;
	        if (this.hasTransform) {
	            list = _.map(list, function (item) {
	                return _this.transform({ item: item });
	            });
	        }
	        ;
	        var newList;
	        if (this.max != null) {
	            newList = _.take(list, this.max);
	            this.remainingItems = list.length - this.max;
	        }
	        else {
	            newList = _.clone(list);
	        }
	        return newList;
	    };
	    CommaListController.$inject = ['$attrs', __object.serviceName];
	    return CommaListController;
	})();
	exports.CommaListController = CommaListController;
	function commaList() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<span>\n\t\t\t\t<span ng-repeat=\"item in commaList.list track by $index\">\n\t\t\t\t\t<span>{{item}}</span><span ng-hide=\"$last\">, </span>\n\t\t\t\t</span>\n\t\t\t\t<span ng-show=\"commaList.remainingItems > 0\">... {{commaList.remainingItems}} more items</span>\n\t\t\t</span>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'commaList',
	        scope: {},
	        bindToController: {
	            inList: '=list',
	            max: '=',
	            transform: '&',
	        },
	    };
	}
	angular.module(exports.moduleName, [__object.moduleName])
	    .directive(exports.directiveName, commaList)
	    .controller(exports.controllerName, CommaListController);
	//# sourceMappingURL=commaList.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// /// <reference path='../../../typings/bootstrapDateTimePicker.d.ts' />
	var angular = __webpack_require__(1);
	var $ = __webpack_require__(60);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	exports.moduleName = 'rl.ui.components.dateTime';
	exports.directiveName = 'rlDateTime';
	var __dateTimeFormatStrings = typescript_angular_utilities_1.services.date;
	dateTime.$inject = [typescript_angular_utilities_1.services.moment.serviceName, __dateTimeFormatStrings.dateTimeFormatServiceName];
	function dateTime(moment, dateTimeFormatStrings) {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<div class=\"input-group\" ng-class=\"{ 'has-warning': !validFormat}\" id=\"{{inputId}}\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" ng-model=\"ngModel\" />\n\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-default show-date-picker\" ng-click=\"toggle()\"><i class=\"fa fa-calendar\"></i></button>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t",
	        require: '?^ngModel',
	        scope: {
	            minuteStepping: '=',
	            ngModel: '=',
	            useDate: '=',
	            useTime: '=',
	            min: '=',
	            max: '=',
	        },
	        link: function (scope, element, attrs, ngModel) {
	            // defaults to true
	            var hasDate = scope.useDate != null ? scope.useDate : true;
	            var hasTime = scope.useTime != null ? scope.useTime : true;
	            var defaults = element.datetimepicker.defaults;
	            var min = scope.min != null ? scope.min : defaults.minDate;
	            var max = scope.max != null ? scope.max : defaults.maxDate;
	            scope.$watch('ngModel', function (newValue) {
	                if (newValue !== '') {
	                    scope.validFormat = moment(newValue).isValid();
	                }
	            });
	            // --- Implementation ---
	            element.datetimepicker({
	                stepping: scope.minuteStepping || 1,
	                format: scope.format || defaultFormat(hasDate, hasTime),
	                direction: 'bottom',
	                elementHeight: 32,
	                pickDate: hasDate,
	                pickTime: hasTime,
	                minDate: min,
	                maxDate: max,
	            }).on('change.dp', function () {
	                var newValue = $(this).find('input').val();
	                ngModel.$setViewValue(newValue);
	                scope.$apply();
	            });
	            function defaultFormat(hasDate, hasTime) {
	                if (hasDate && hasTime) {
	                    return dateTimeFormatStrings.dateTimeFormat;
	                }
	                else if (hasDate) {
	                    return dateTimeFormatStrings.dateFormat;
	                }
	                else if (hasTime) {
	                    return dateTimeFormatStrings.timeFormat;
	                }
	                else {
	                    // revert to default format
	                    return false;
	                }
	            }
	        },
	    };
	}
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, dateTime);
	//# sourceMappingURL=dateTime.js.map

/***/ },
/* 60 */
/***/ function(module, exports) {

	(function() { module.exports = this["$"]; }());

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var jquery_service_1 = __webpack_require__(62);
	exports.moduleName = 'rl.ui.components.genericContainer';
	exports.directiveName = 'rlGenericContainer';
	exports.controllerName = 'GenericContainerController';
	var __object = typescript_angular_utilities_1.services.object;
	var GenericContainerController = (function () {
	    function GenericContainerController($scope, object) {
	        var _this = this;
	        this.object = object;
	        $scope.$watch(function () { return _this.selector; }, function (newType, oldType) {
	            if (_this.object.areEqual(newType, oldType)) {
	                return;
	            }
	            var template = _this.resolveTemplate(newType);
	            _this.swapTemplates(template);
	        });
	    }
	    GenericContainerController.prototype.refresh = function () {
	        var template = this.resolveTemplate(this.selector);
	        this.swapTemplates(template);
	    };
	    GenericContainerController.prototype.resolveTemplate = function (type) {
	        var templateObject;
	        if (_.has(this.templates, type)) {
	            templateObject = this.templates[type];
	        }
	        else {
	            templateObject = this.default;
	        }
	        var template = templateObject;
	        if (!_.isUndefined(template.templateUrl)) {
	            return '<ng-include src="\'' + template.templateUrl + '\'"></ng-include>';
	        }
	        else if (!_.isUndefined(template.template)) {
	            return template.template;
	        }
	        else {
	            return templateObject;
	        }
	    };
	    GenericContainerController.$inject = ['$scope', __object.serviceName];
	    return GenericContainerController;
	})();
	exports.GenericContainerController = GenericContainerController;
	genericContainer.$inject = ['$compile', '$interpolate', jquery_service_1.serviceName, __object.serviceName];
	function genericContainer($compile, $interpolate, jquery, object) {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: '<div id="container"></div>',
	        transclude: true,
	        controller: exports.controllerName,
	        controllerAs: 'genericContainer',
	        scope: {},
	        bindToController: {
	            selector: '=',
	            configuredTemplates: '=templates',
	            defaultTemplate: '=',
	        },
	        link: function (scope, element, attributes, controller, transclude) {
	            initDefaults(controller);
	            var container = element.find('#container');
	            var templateScope;
	            // Load templates from the DOM
	            transclude(function (clone, transclusionScope) {
	                var templates = clone.filter('template');
	                templates.each(function (index, template) {
	                    var templateElement = angular.element(template);
	                    var templateHtml = templateElement.html();
	                    var triggerAttribute = templateElement.attr('when-selector');
	                    if (!object.isNullOrWhitespace(triggerAttribute)) {
	                        var trigger = $interpolate(triggerAttribute)(transclusionScope);
	                        controller.templates[trigger] = templateHtml;
	                    }
	                    var isDefault = templateElement.attr('default');
	                    if (!_.isUndefined(isDefault) && isDefault.toLowerCase() !== 'false') {
	                        controller.default = templateHtml;
	                    }
	                });
	                templateScope = transclusionScope;
	            });
	            if (!controller.default) {
	                controller.default = {
	                    template: '<div></div>',
	                };
	            }
	            controller.refresh();
	            function initDefaults(controller) {
	                controller.default = controller.defaultTemplate;
	                controller.templates = controller.configuredTemplates ? controller.configuredTemplates : {};
	                controller.swapTemplates = swapTemplates;
	            }
	            function swapTemplates(template) {
	                var content = $compile(template)(templateScope);
	                jquery.replaceContent(container, content);
	            }
	        }
	    };
	}
	angular.module(exports.moduleName, [jquery_service_1.moduleName, __object.moduleName])
	    .directive(exports.directiveName, genericContainer)
	    .controller(exports.controllerName, GenericContainerController);
	//# sourceMappingURL=genericContainer.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path="../../../typings/jquery/jquery.d.ts" />
	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.utilities.services.jquery';
	exports.serviceName = 'jqueryUtility';
	var JQueryUtility = (function () {
	    function JQueryUtility() {
	    }
	    JQueryUtility.prototype.replaceContent = function (contentArea, newContent) {
	        contentArea.empty();
	        contentArea.append(newContent);
	    };
	    return JQueryUtility;
	})();
	angular.module(exports.moduleName, [])
	    .service(exports.serviceName, JQueryUtility);
	//# sourceMappingURL=jquery.service.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.lazyLoad';
	exports.directiveName = 'rlLazyLoad';
	exports.controllerName = 'LazyLoadController';
	var LazyLoadController = (function () {
	    function LazyLoadController($scope) {
	        var _this = this;
	        this.init = false;
	        var unbind = $scope.$watch(function () { return _this.show; }, function (value) {
	            if (value) {
	                _this.init = true;
	                unbind();
	            }
	        });
	    }
	    LazyLoadController.$inject = ['$scope'];
	    return LazyLoadController;
	})();
	exports.LazyLoadController = LazyLoadController;
	function lazyLoad() {
	    'use strict';
	    return {
	        restrict: 'E',
	        transclude: true,
	        template: "\n\t\t\t<div ng-if=\"lazyLoad.init\">\n\t\t\t\t<div ng-show=\"lazyLoad.show\">\n\t\t\t\t\t<div ng-transclude></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'lazyLoad',
	        scope: {},
	        bindToController: {
	            show: '=',
	        },
	    };
	}
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, lazyLoad)
	    .controller(exports.controllerName, LazyLoadController);
	//# sourceMappingURL=lazyLoad.js.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var $ = __webpack_require__(60);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	exports.moduleName = 'rl.ui.components.longClickButton';
	exports.directiveName = 'rlLongClickButton';
	exports.controllerName = 'LongClickButtonController';
	var __object = typescript_angular_utilities_1.services.object;
	var LongClickButtonController = (function () {
	    function LongClickButtonController($scope, $interval, $timeout, objectUtility) {
	        var _this = this;
	        this.$interval = $interval;
	        this.$timeout = $timeout;
	        this.objectUtility = objectUtility;
	        this.interval = 25;
	        this.duration = 1500;
	        this.buttonText = this.text;
	        if (this.buttonType != null) {
	            this.buttonClass = this.buttonType;
	        }
	        else {
	            this.buttonClass = 'default';
	        }
	        $scope.$watch(function () { return _this.buttonText; }, function () {
	            $timeout(function () {
	                _this.width = $('#actionButton').outerWidth();
	            });
	        });
	    }
	    LongClickButtonController.prototype.startAction = function () {
	        var _this = this;
	        if (this.active) {
	            return;
	        }
	        this.actionProgress = 0;
	        this.active = true;
	        this.actionInterval = this.$interval(function () {
	            _this.actionProgress += _this.interval;
	            if (_this.actionProgress >= _this.duration) {
	                _this.cleanup();
	                _this.buttonText = _this.text;
	                _this.onTriggered();
	            }
	        }, this.interval);
	    };
	    LongClickButtonController.prototype.stopAction = function () {
	        if (this.active) {
	            if (this.actionProgress < this.duration) {
	                this.warn();
	            }
	            this.cleanup();
	        }
	    };
	    LongClickButtonController.prototype.cleanup = function () {
	        this.$interval.cancel(this.actionInterval);
	        this.actionProgress = 0;
	        this.active = false;
	    };
	    LongClickButtonController.prototype.warn = function () {
	        if (this.objectUtility.isNullOrEmpty(this.onShortClickText) === false) {
	            this.buttonText = this.onShortClickText;
	        }
	    };
	    LongClickButtonController.$inject = ['$scope', '$interval', '$timeout', __object.serviceName];
	    return LongClickButtonController;
	})();
	exports.LongClickButtonController = LongClickButtonController;
	function longClickButton() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<div class=\"long-click-button\">\n\t\t\t\t<button id=\"actionButton\" class=\"btn btn-{{button.buttonClass}}\" ng-mousedown=\"button.startAction()\" ng-mouseleave=\"button.stopAction()\">\n\t\t\t\t\t<rl-busy loading=\"button.spinner\" ng-if=\"button.rightAligned\"></rl-busy>\n\t\t\t\t\t<i ng-show=\"button.buttonIcon != null\" class=\"fa fa-{{button.buttonIcon}}\"></i> {{button.buttonText}}\n\t\t\t\t\t<rl-busy loading=\"button.spinner\" ng-if=\"!button.rightAligned\"></rl-busy>\n\t\t\t\t</button>\n\t\t\t\t<rl-rating-bar ng-if=\"button.active\" width=\"button.width\" height=\"5\" min=\"0\" max=\"button.duration\"\n\t\t\t\t\t\t\tvalue=\"button.actionProgress\" background=\"transparent\"></rl-rating-bar>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'button',
	        scope: {},
	        bindToController: {
	            onTriggered: '&',
	            text: '@',
	            onShortClickText: '@',
	            buttonIcon: '@',
	            spinner: '=',
	            rightAligned: '=',
	            type: '@',
	        },
	    };
	}
	angular.module(exports.moduleName, [__object.moduleName])
	    .directive(exports.directiveName, longClickButton)
	    .controller(exports.controllerName, LongClickButtonController);
	//# sourceMappingURL=longClickButton.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var messageLog_service_1 = __webpack_require__(66);
	var messageLog_directive_1 = __webpack_require__(67);
	__export(__webpack_require__(66));
	__export(__webpack_require__(67));
	exports.moduleName = 'rl.ui.components.messageLog';
	angular.module(exports.moduleName, [])
	    .factory(messageLog_service_1.factoryName, messageLog_service_1.messageLogFactory)
	    .directive(messageLog_directive_1.directiveName, messageLog_directive_1.messageLog)
	    .controller(messageLog_directive_1.controllerName, messageLog_directive_1.MessageLogController);
	//# sourceMappingURL=messageLog.module.js.map

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';
	exports.factoryName = 'messageLog';
	exports.defaultPageSize = 10;
	var MessageLog = (function () {
	    function MessageLog() {
	        this.currentStartingMessage = 0;
	        this._hasForwardMessages = false;
	        this._hasBackwardMessages = false;
	        this._pageSize = exports.defaultPageSize;
	    }
	    Object.defineProperty(MessageLog.prototype, "pageSize", {
	        get: function () {
	            return this._pageSize;
	        },
	        /* tslint:disable */
	        set: function (value) {
	            this._pageSize = value;
	            this.updateCurrentPage();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MessageLog.prototype, "hasForwardMessages", {
	        /* tslint:enable */
	        get: function () {
	            return this._hasForwardMessages;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MessageLog.prototype, "hasBackwardMessages", {
	        get: function () {
	            return this._hasBackwardMessages;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MessageLog.prototype, "dataService", {
	        get: function () {
	            return this._dataService;
	        },
	        /* tslint:disable */
	        set: function (value) {
	            this._dataService = value;
	            if (value != null) {
	                this.updateCurrentPage();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /* tslint:enable */
	    MessageLog.prototype.addMessage = function (message) {
	        var _this = this;
	        return this.dataService.saveMessage(message).then(function () {
	            _this.getTopPage();
	        });
	    };
	    MessageLog.prototype.getNextPage = function () {
	        if (!this.hasForwardMessages) {
	            return;
	        }
	        this.currentStartingMessage += this.pageSize;
	        return this.updateCurrentPage();
	    };
	    MessageLog.prototype.getPreviousPage = function () {
	        if (!this.hasBackwardMessages) {
	            return;
	        }
	        this.currentStartingMessage -= this.pageSize;
	        if (this.currentStartingMessage < 0) {
	            this.currentStartingMessage = 0;
	        }
	        return this.updateCurrentPage();
	    };
	    MessageLog.prototype.getTopPage = function () {
	        this.currentStartingMessage = 0;
	        return this.updateCurrentPage();
	    };
	    MessageLog.prototype.refresh = function () {
	        return this.updateCurrentPage();
	    };
	    MessageLog.prototype.updateCurrentPage = function () {
	        var _this = this;
	        if (this.dataService == null) {
	            return null;
	        }
	        this.busy = true;
	        return this.dataService.getMessages(this.currentStartingMessage, this.pageSize).then(function (result) {
	            _this.visibleMessages = result.messages;
	            _this._hasForwardMessages = result.hasMoreMessages;
	            _this._hasBackwardMessages = (_this.currentStartingMessage > 0);
	            _this.busy = false;
	        });
	    };
	    return MessageLog;
	})();
	exports.MessageLog = MessageLog;
	function messageLogFactory() {
	    'use strict';
	    return {
	        getInstance: function () {
	            return new MessageLog();
	        },
	    };
	}
	exports.messageLogFactory = messageLogFactory;
	//# sourceMappingURL=messageLog.service.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var messageLog_service_1 = __webpack_require__(66);
	exports.directiveName = 'rlMessageLog';
	exports.controllerName = 'MessageLogController';
	var MessageLogController = (function () {
	    function MessageLogController($scope, messageLogFactory) {
	        var _this = this;
	        this.messageLog = this.messageLogBinding != null ? this.messageLogBinding : messageLogFactory.getInstance();
	        this.loadingInitial = true;
	        $scope.$watch(function () { return _this.messageLog.visibleMessages; }, function (value) {
	            _this.messages = value;
	        });
	        $scope.$watch(function () { return _this.messageLog.hasForwardMessages; }, function (value) {
	            _this.hasNextPage = value;
	        });
	        $scope.$watch(function () { return _this.messageLog.hasBackwardMessages; }, function (value) {
	            _this.hasPreviousPage = value;
	        });
	        $scope.$watch(function () { return _this.messageLog.busy; }, function (value) {
	            if (!value) {
	                _this.loading = false;
	                _this.loadingInitial = false;
	            }
	            else {
	                _this.loading = true;
	            }
	        });
	        this.messageLog.pageSize = this.pageSize != null ? this.pageSize : 8;
	        this.messageLog.dataService = this.service;
	    }
	    MessageLogController.prototype.getOlder = function () {
	        return this.messageLog.getNextPage();
	    };
	    MessageLogController.prototype.getTop = function () {
	        return this.messageLog.getTopPage();
	    };
	    MessageLogController.$inject = ['$scope', messageLog_service_1.factoryName];
	    return MessageLogController;
	})();
	exports.MessageLogController = MessageLogController;
	function messageLog() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<div>\n\t\t\t\t<rl-busy loading=\"log.loadingInitial\" size=\"2x\"></rl-busy>\n\t\t\t\t<div class=\"content-group\" ng-repeat=\"entry in log.messages\">\n\t\t\t\t\t<div ng-bind-html=\"entry.message\"></div>\n\t\t\t\t\t<div class=\"byline\">{{entry.createdBy}}</div>\n\t\t\t\t\t<div class=\"byline\">{{entry.createdDate}} {{entry.createdTime}} UTC</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<rl-button type=\"default\" action=\"log.getTopPage()\" ng-disabled=\"log.loading\" button-right-aligned=\"true\">\n\t\t\t\t\t\t\t\t<span ng-show=\"log.hasPreviousPage\">Top</span>\n\t\t\t\t\t\t\t\t<span ng-hide=\"log.hasPreviousPage\">Refresh</span>\n\t\t\t\t\t\t\t</rl-button>\n\t\t\t\t\t\t\t<rl-button type=\"default\" ng-disabled=\"log.hasNextPage == false || log.loading\" action=\"log.getNextPage()\">\n\t\t\t\t\t\t\t\tOlder <i class=\"fa fa-chevron-right\"></i>\n\t\t\t\t\t\t\t</rl-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'log',
	        scope: {},
	        bindToController: {
	            service: '=',
	            pageSize: '=',
	            messageLogBinding: '=messageLog',
	        },
	    };
	}
	exports.messageLog = messageLog;
	//# sourceMappingURL=messageLog.directive.js.map

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	exports.moduleName = 'rl.ui.components.multiStepIndicator';
	exports.directiveName = 'rlMultiStepIndicator';
	exports.controllerName = 'MultiStepIndicatorController';
	var __object = typescript_angular_utilities_1.services.object;
	var MultiStepIndicatorController = (function () {
	    function MultiStepIndicatorController($state, object) {
	        var _this = this;
	        this.$state = $state;
	        this.object = object;
	        this.redirectToState = function (step) {
	            _this.clearCurrentState();
	            _this.$state.go(step.stateName);
	            step.isCurrent = true;
	        };
	        this.configureSteps();
	    }
	    MultiStepIndicatorController.prototype.configureSteps = function () {
	        var _this = this;
	        _.each(this.steps, function (step) {
	            if (!_.isFunction(step.onClick)) {
	                if (_this.object.isNullOrWhitespace(step.stateName)) {
	                    step.inactive = true;
	                }
	                else {
	                    step.onClick = function () { _this.redirectToState(step); };
	                    if (_this.$state.includes(step.stateName)) {
	                        step.isCurrent = true;
	                    }
	                }
	            }
	        });
	    };
	    MultiStepIndicatorController.prototype.clearCurrentState = function () {
	        _.each(this.steps, function (step) {
	            step.isCurrent = false;
	        });
	    };
	    MultiStepIndicatorController.$inject = ['$state', __object.serviceName];
	    return MultiStepIndicatorController;
	})();
	exports.MultiStepIndicatorController = MultiStepIndicatorController;
	function multiStepIndicator() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<div class=\"multi-step\" ng-class=\"{ 'numbered': breadcrumb.numbered }\">\n\t\t\t\t<ol>\n\t\t\t\t\t<li ng-repeat=\"step in breadcrumb.steps\" ng-click=\"step.onClick()\"\n\t\t\t\t\t\tng-class=\"{ 'completed': step.isCompleted, 'current': step.isCurrent, 'active': !step.inactive }\">\n\t\t\t\t\t\t<div class=\"wrap\">\n\t\t\t\t\t\t\t<p class=\"title\">{{step.title}}</p>\n\t\t\t\t\t\t\t<p class=\"subtitle\">{{step.subtitle}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ol>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'breadcrumb',
	        scope: {},
	        bindToController: {
	            steps: '=',
	            numbered: '=',
	        },
	    };
	}
	angular.module(exports.moduleName, [__object.moduleName])
	    .directive(exports.directiveName, multiStepIndicator)
	    .controller(exports.controllerName, MultiStepIndicatorController);
	//# sourceMappingURL=multiStepIndicator.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var ratingBarBackgrounds_service_1 = __webpack_require__(70);
	var ratingBarClass_service_1 = __webpack_require__(71);
	exports.moduleName = 'rl.ui.components.ratingBar';
	exports.directiveName = 'rlRatingBar';
	exports.controllerName = 'RatingBarController';
	var RatingBarController = (function () {
	    function RatingBarController($scope) {
	        var _this = this;
	        this.$scope = $scope;
	        var ratingBarBackgrounds = new ratingBarBackgrounds_service_1.RatingBarBackgroundService;
	        this.ratingBarClass = new ratingBarClass_service_1.RatingBarClassService;
	        this.backgroundClass = ratingBarBackgrounds.getBackground(this.background);
	        if (this.value == null) {
	            this.value = 0;
	        }
	        $scope.$watch(function () { return _this.value; }, function (newValue) {
	            _this.updateValue(newValue);
	        });
	        $scope.$watch(function () { return _this.totalWidth; }, function (newWidth) {
	            _this.dimensions = {
	                width: newWidth + 2,
	                height: _this.height + 2,
	            };
	            _this.updateValue(_this.value);
	        });
	    }
	    RatingBarController.prototype.updateValue = function (newValue) {
	        var confidenceScore = (newValue - this.min) / (this.max - this.min);
	        this.barClass = this.ratingBarClass.getClass(confidenceScore);
	        this.width = Math.round(confidenceScore * this.totalWidth);
	    };
	    RatingBarController.$inject = ['$scope'];
	    return RatingBarController;
	})();
	exports.RatingBarController = RatingBarController;
	function ratingBar() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<div class=\"rating-bar\">\n\t\t\t\t<div class=\"{{ratingBar.backgroundClass}}\" ng-class=\"{ empty: ratingBar.value == min }\" ng-style=\"ratingBar.dimensions\">\n\t\t\t\t\t<div ng-class=\"ratingBar.barClass\" ng-style=\"{ width: ratingBar.width, height: ratingBar.height }\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'ratingBar',
	        scope: {},
	        bindToController: {
	            totalWidth: '=width',
	            height: '=',
	            value: '=',
	            min: '=',
	            max: '=',
	            background: '=',
	        },
	    };
	}
	exports.ratingBar = ratingBar;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, ratingBar)
	    .controller(exports.controllerName, RatingBarController);
	//# sourceMappingURL=ratingBar.js.map

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';
	var RatingBarBackgroundService = (function () {
	    function RatingBarBackgroundService() {
	        this.standard = {
	            type: 'standard',
	            class: 'background',
	        };
	        this.dark = {
	            type: 'dark',
	            class: 'background-dark',
	        };
	        this.transparent = {
	            type: 'transparent',
	            class: 'background-transparent',
	        };
	    }
	    RatingBarBackgroundService.prototype.getBackground = function (type) {
	        if (type === this.dark.type) {
	            return this.dark.class;
	        }
	        else if (type === this.transparent.type) {
	            return this.transparent.class;
	        }
	        else {
	            return this.standard.class;
	        }
	    };
	    return RatingBarBackgroundService;
	})();
	exports.RatingBarBackgroundService = RatingBarBackgroundService;
	//# sourceMappingURL=ratingBarBackgrounds.service.js.map

/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';
	var RatingBarClassService = (function () {
	    function RatingBarClassService() {
	    }
	    RatingBarClassService.prototype.getClass = function (confidence) {
	        if (confidence >= 0.8) {
	            return 'very-high';
	        }
	        else if (confidence >= 0.6) {
	            return 'high';
	        }
	        else if (confidence >= 0.4) {
	            return 'medium';
	        }
	        else if (confidence >= 0.2) {
	            return 'low';
	        }
	        else {
	            return 'very-low';
	        }
	    };
	    return RatingBarClassService;
	})();
	exports.RatingBarClassService = RatingBarClassService;
	//# sourceMappingURL=ratingBarClass.service.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __parentChildBehavior = typescript_angular_utilities_1.services.parentChildBehavior;
	var __observable = typescript_angular_utilities_1.services.observable;
	var __promiseUtility = typescript_angular_utilities_1.services.promise;
	var __numberUtility = typescript_angular_utilities_1.services.number;
	var jquery_service_1 = __webpack_require__(62);
	var grid = __webpack_require__(73);
	exports.responsiveCardGrid = grid;
	var card = __webpack_require__(78);
	exports.responsiveCard = card;
	exports.moduleName = 'rl.ui.components.responsiveCardGrid';
	angular.module(exports.moduleName, [
	    jquery_service_1.moduleName,
	    __parentChildBehavior.moduleName,
	    __observable.moduleName,
	    __promiseUtility.moduleName,
	    __numberUtility.moduleName,
	])
	    .directive(grid.directiveName, grid.responsiveCardGrid)
	    .controller(grid.controllerName, grid.ResponsiveCardGridController)
	    .directive(card.directiveName, card.responsiveCard)
	    .controller(card.controllerName, card.ResponsiveCardController);
	//# sourceMappingURL=responsiveCardGrid.module.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var breakpoints_module_1 = __webpack_require__(74);
	exports.directiveName = 'rlResponsiveCardGrid';
	exports.controllerName = 'ResponsiveCardGridController';
	var __observable = typescript_angular_utilities_1.services.observable;
	var __numberUtility = typescript_angular_utilities_1.services.number;
	var ResponsiveCardGridController = (function () {
	    function ResponsiveCardGridController(observableFactory, $q, breakpoints, numberUtility) {
	        var _this = this;
	        this.$q = $q;
	        this.breakpoints = breakpoints;
	        this.numberUtility = numberUtility;
	        this.emptyCards = [];
	        this.behaviors = [];
	        this.updateCardEndOfRowStatus = function () {
	            _this.observable.fire('updateEndOfRowStatus');
	        };
	        this.observable = observableFactory.getInstance();
	        if (this.startingIndex != null) {
	            this.emptyCards = _.range(this.startingIndex);
	        }
	        breakpoints.register(this.updateCardEndOfRowStatus);
	    }
	    ResponsiveCardGridController.prototype.registerCard = function (behavior, element) {
	        var index = this.findPosition(element);
	        index = this.startingIndex != null ? index + this.startingIndex : index;
	        var unregisterFunctions = [];
	        unregisterFunctions.push(this.observable.register(behavior.autosave, 'autosave'));
	        unregisterFunctions.push(this.observable.register(behavior.close, 'close'));
	        unregisterFunctions.push(this.observable.register(behavior.hoverOut, 'hoverOut'));
	        unregisterFunctions.push(this.observable.register(behavior.updateEndOfRowStatus, 'updateEndOfRowStatus'));
	        var indexedBehavior = behavior;
	        indexedBehavior.index = index;
	        this.behaviors.push(indexedBehavior);
	        return function () {
	            _.each(unregisterFunctions, function (unregister) {
	                unregister();
	            });
	        };
	    };
	    ResponsiveCardGridController.prototype.openCard = function (openingCard) {
	        if (this.autosaveCard()) {
	            _.each(this.getCurrentRow(openingCard.index), function (card) {
	                card.open();
	            });
	        }
	    };
	    ResponsiveCardGridController.prototype.closeCard = function () {
	        this.autosaveCard();
	    };
	    ResponsiveCardGridController.prototype.autosaveCard = function () {
	        var results = this.observable.fire('autosave');
	        if (_.all(results)) {
	            this.observable.fire('close');
	            return true;
	        }
	        return false;
	    };
	    ResponsiveCardGridController.prototype.hoverIn = function (currentCard) {
	        _.each(this.getCurrentRow(currentCard.index), function (card) {
	            card.hoverIn();
	        });
	    };
	    ResponsiveCardGridController.prototype.hoverOut = function () {
	        this.observable.fire('hoverOut');
	    };
	    ResponsiveCardGridController.prototype.cardIsEndOfRow = function (currentCard) {
	        return (currentCard.index + 1) % this.cardsPerRow === 0;
	    };
	    ResponsiveCardGridController.prototype.getCurrentRow = function (index) {
	        var _this = this;
	        // cache the value of cardsPerRow to avoid cases where the breakpoint updates in the middle of this function
	        var cardsPerRow = this.cardsPerRow;
	        var currentRow = this.numberUtility.integerDivide(index, cardsPerRow);
	        return _.filter(this.behaviors, function (behavior) {
	            return currentRow === _this.numberUtility.integerDivide(behavior.index, cardsPerRow);
	        });
	    };
	    Object.defineProperty(ResponsiveCardGridController.prototype, "cardsPerRow", {
	        get: function () {
	            var currentBreakpoint = this.breakpoints.currentBreakpoint;
	            return this.breakpointRowDictionary[currentBreakpoint];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ResponsiveCardGridController.prototype, "breakpointRowDictionary", {
	        get: function () {
	            var list = [];
	            list[breakpoints_module_1.xs] = 1;
	            list[breakpoints_module_1.sm] = 1;
	            list[breakpoints_module_1.md] = 2;
	            list[breakpoints_module_1.lg] = 3;
	            return list;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ResponsiveCardGridController.$inject = [__observable.factoryName, '$q', breakpoints_module_1.breakpointServiceName, __numberUtility.serviceName];
	    return ResponsiveCardGridController;
	})();
	exports.ResponsiveCardGridController = ResponsiveCardGridController;
	function responsiveCardGrid() {
	    'use strict';
	    return {
	        restrict: 'E',
	        transclude: true,
	        template: "\n\t\t\t<div>\n\t\t\t\t<div class=\"col-lg-4 col-md-6 col-sm-12 smallCardsList\" ng-repeat=\"emptyCard in grid.emptyCards\" ng-if=\"grid.fillEmptySpace\"></div>\n\t\t\t\t<div ng-transclude></div>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'grid',
	        scope: {},
	        bindToController: {
	            startingIndex: '=',
	            fillEmptySpace: '=',
	        },
	        link: {
	            pre: function (scope, element, attrs, grid) {
	                grid.findPosition = function (cardElement) {
	                    // find the position of the specified element by iterating over the cards and finding a matching element
	                    var cards = element.find('rl-responsive-card');
	                    var num;
	                    cards.each(function (index, elem) {
	                        if (cardElement[0] === elem) {
	                            num = index;
	                            return false;
	                        }
	                    });
	                    return num;
	                };
	            },
	        },
	    };
	}
	exports.responsiveCardGrid = responsiveCardGrid;
	//# sourceMappingURL=responsiveCardGrid.js.map

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var windowWrapper_service_1 = __webpack_require__(75);
	var visibleBreakpoint_service_1 = __webpack_require__(76);
	var breakpoints_service_1 = __webpack_require__(77);
	__export(__webpack_require__(19));
	__export(__webpack_require__(76));
	__export(__webpack_require__(77));
	exports.moduleName = 'rl.ui.services.breakpoints';
	angular.module(exports.moduleName, [
	    typescript_angular_utilities_1.services.observable.moduleName,
	    windowWrapper_service_1.moduleName,
	])
	    .constant('resizeDebounceMilliseconds', 500)
	    .service(visibleBreakpoint_service_1.visibleBreakpointServiceName, visibleBreakpoint_service_1.VisibleBreakpointService)
	    .service(breakpoints_service_1.breakpointServiceName, breakpoints_service_1.BreakpointService);
	//# sourceMappingURL=breakpoints.module.js.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var $ = __webpack_require__(60);
	exports.moduleName = 'rl.ui.services.windowWrapper';
	exports.serviceName = 'windowWrapper';
	var WindowService = (function () {
	    function WindowService() {
	        this.windowControl = $(window);
	    }
	    WindowService.prototype.resize = function (callback) {
	        this.windowControl.resize(callback);
	    };
	    return WindowService;
	})();
	angular.module(exports.moduleName, [])
	    .service(exports.serviceName, WindowService);
	//# sourceMappingURL=windowWrapper.service.js.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(60);
	/*
	 * Implementation also requires the following elements to be inserted on the page:
	 *   <div class="device-xs visible-xs"></div>
	 *   <div class="device-sm visible-sm"></div>
	 *   <div class="device-md visible-md"></div>
	 *   <div class="device-lg visible-lg"></div>
	 * They have been inserted into index.html for your convenience.
	 */
	exports.visibleBreakpointServiceName = 'visibleBreakpoint';
	var VisibleBreakpointService = (function () {
	    function VisibleBreakpointService() {
	    }
	    VisibleBreakpointService.prototype.isVisible = function (breakpoint) {
	        // jquery gets the breakpoint trigger directives listed above on line 3
	        return $('.device-' + breakpoint).is(':visible');
	    };
	    return VisibleBreakpointService;
	})();
	exports.VisibleBreakpointService = VisibleBreakpointService;
	//# sourceMappingURL=visibleBreakpoint.service.js.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var windowWrapper_service_1 = __webpack_require__(75);
	var visibleBreakpoint_service_1 = __webpack_require__(76);
	var breakpoint_1 = __webpack_require__(19);
	exports.breakpointServiceName = 'breakpoints';
	var __observable = typescript_angular_utilities_1.services.observable;
	var BreakpointService = (function () {
	    function BreakpointService(visibleBreakpoints, resizeDebounceMilliseconds, windowService, observableFactory) {
	        var _this = this;
	        this.visibleBreakpoints = visibleBreakpoints;
	        this.updateBreakpoint = function () {
	            var newBreakPoint = _this.getBreakpoint();
	            if (newBreakPoint !== _this.currentBreakpoint) {
	                _this.currentBreakpoint = newBreakPoint;
	                _this.observable.fire('window.breakpointChanged', _this.currentBreakpoint);
	            }
	        };
	        this.currentBreakpoint = this.getBreakpoint();
	        this.observable = observableFactory.getInstance();
	        var efficientResize = _.debounce(this.updateBreakpoint, resizeDebounceMilliseconds, {
	            leading: true,
	            trailing: true,
	            maxWait: resizeDebounceMilliseconds,
	        });
	        windowService.resize(efficientResize);
	    }
	    BreakpointService.prototype.getBreakpoint = function () {
	        if (this.visibleBreakpoints.isVisible(breakpoint_1.lg)) {
	            return breakpoint_1.lg;
	        }
	        else if (this.visibleBreakpoints.isVisible(breakpoint_1.md)) {
	            return breakpoint_1.md;
	        }
	        else if (this.visibleBreakpoints.isVisible(breakpoint_1.sm)) {
	            return breakpoint_1.sm;
	        }
	        else {
	            return breakpoint_1.xs;
	        }
	    };
	    BreakpointService.prototype.isBreakpoint = function (breakpoint) {
	        return this.currentBreakpoint === breakpoint;
	    };
	    BreakpointService.prototype.register = function (action) {
	        return this.observable.register(action, 'window.breakpointChanged');
	    };
	    BreakpointService.$inject = [visibleBreakpoint_service_1.visibleBreakpointServiceName, 'resizeDebounceMilliseconds', windowWrapper_service_1.serviceName, __observable.factoryName];
	    return BreakpointService;
	})();
	exports.BreakpointService = BreakpointService;
	//# sourceMappingURL=breakpoints.service.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var jquery_service_1 = __webpack_require__(62);
	exports.directiveName = 'rlResponsiveCard';
	exports.controllerName = 'ResponsiveCardController';
	var __parentChildBehavior = typescript_angular_utilities_1.services.parentChildBehavior;
	var __promiseUtility = typescript_angular_utilities_1.services.promise;
	var ResponsiveCardController = (function () {
	    function ResponsiveCardController($scope, $q, $element, parentChildBehavior, promiseUtility) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$q = $q;
	        this.$element = $element;
	        this.parentChildBehavior = parentChildBehavior;
	        this.promiseUtility = promiseUtility;
	        this.autosaveLink = { viewData: null };
	        // behavior functions
	        this.autosave = function () {
	            if (_this.showDetails === false) {
	                return true;
	            }
	            var behavior = _this.parentChildBehavior.getChildBehavior(_this.autosaveLink);
	            return behavior.autosave();
	        };
	        this.close = function () {
	            _this.showDetails = false;
	        };
	        this.open = function () {
	            _this.showDetails = true;
	        };
	        this.hoverIn = function () {
	            _this.isHovering = true;
	        };
	        this.hoverOut = function () {
	            _this.isHovering = false;
	        };
	        this.updateEndOfRowStatus = function () {
	            _this.isEndOfRow = _this.cardGridController.cardIsEndOfRow(_this.behavior);
	        };
	        this.behavior = {
	            autosave: this.autosave,
	            close: this.close,
	            open: this.open,
	            hoverIn: this.hoverIn,
	            hoverOut: this.hoverOut,
	            updateEndOfRowStatus: this.updateEndOfRowStatus,
	        };
	        this.summary = this.header.summary != null ? this.header.summary : function () { return ''; };
	        this.summaryLength = this.header.summaryLength != null ? this.header.summaryLength : 25;
	        this.showIcon = this.header.showIcon != null ? this.header.showIcon : function () { return false; };
	        this.cardGridController = $element.controller('rlResponsiveCardGrid');
	        this.unregister = this.cardGridController.registerCard(this.behavior, $element);
	        this.isEndOfRow = this.cardGridController.cardIsEndOfRow(this.behavior);
	        $scope.$on('$destroy', function () {
	            _this.unregister();
	        });
	    }
	    ResponsiveCardController.prototype.toggle = function () {
	        if (this.showDetails) {
	            this.cardGridController.closeCard();
	        }
	        else {
	            this.cardGridController.openCard(this.behavior);
	        }
	    };
	    ResponsiveCardController.prototype.triggerHoverIn = function () {
	        this.cardGridController.hoverIn(this.behavior);
	    };
	    ResponsiveCardController.prototype.triggerHoverOut = function () {
	        this.cardGridController.hoverOut();
	    };
	    ResponsiveCardController.$inject = ['$scope', '$q', '$element', __parentChildBehavior.serviceName, __promiseUtility.serviceName];
	    return ResponsiveCardController;
	})();
	exports.ResponsiveCardController = ResponsiveCardController;
	responsiveCard.$inject = [jquery_service_1.serviceName];
	function responsiveCard(jqueryHelper) {
	    'use strict';
	    return {
	        restrict: 'E',
	        transclude: true,
	        require: '^^rlResponsiveCardGrid',
	        template: "\n\t\t\t<div class=\"smallCardsList col-lg-4 col-md-6 col-sm-12\">\n\t\t\t\t<div class=\"small-card\">\n\t\t\t\t\t<div class=\"small-card-header\" ng-class=\"{ 'smallCardHeaderHover': card.isHovering }\"\n\t\t\t\t\t\tng-click=\"card.toggle()\" ng-mouseover=\"card.triggerHoverIn()\" ng-mouseleave=\"card.triggerHoverOut()\">\n\t\t\t\t\t\t<div class=\"small-card-header-card-name\">\n\t\t\t\t\t\t\t<span ng-bind-html=\"card.header.name\"></span>\n\t\t\t\t\t\t\t<span ng-if=\"card.summary() | isEmpty:false\"> - </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"small-card-header-summary-text\" ng-bind-html=\"card.summary()|truncate:card.summaryLength:true\"></div>\n\t\t\t\t\t\t<span class=\"small-card-header-item-count\" ng-if=\"card.header.count != null\"><span class=\"badge\">{{card.header.count()}}</span></span>\n\t\t\t\t\t\t<span class=\"small-card-header-item-count\" ng-if=\"card.header.status != null\"><span class=\"badge\">{{card.header.status()}}</span></span>\n\t\t\t\t\t\t<span class=\"small-card-header-icon\" ng-if=\"card.showIcon()\"> <i class=\"small-card-indicator fa fa-2x fa-{{card.header.icon}}\" title=\"{{card.header.iconTooltip}}\" /></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ng-form rl-autosave=\"card.autosaveLink\" validate=\"card.validate()\" save=\"card.save()\">\n\t\t\t\t\t\t<div ng-if=\"card.showDetails\">\n\t\t\t\t\t\t\t<div class=\"small-card-content\">\n\t\t\t\t\t\t\t\t<div ng-transclude></div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"clearfix\" ng-if=\"card.isEndOfRow\"></div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'card',
	        scope: {},
	        bindToController: {
	            header: '=',
	            validate: '&',
	            save: '&',
	        },
	    };
	}
	exports.responsiveCard = responsiveCard;
	//# sourceMappingURL=responsiveCard.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	exports.moduleName = 'rl.ui.components.richTextEditor';
	exports.directiveName = 'rlRichTextEditor';
	exports.controllerName = 'RichTextEditorController';
	var RichTextEditorController = (function () {
	    function RichTextEditorController() {
	        var _this = this;
	        this.toolbar = [
	            ['h1', 'bold', 'italics', 'underline', 'ul', 'ol', 'indent', 'outdent'],
	            ['html'],
	        ];
	        _.each(this.customButtons, function (button) {
	            _this.toolbar[1].push(button);
	        });
	    }
	    return RichTextEditorController;
	})();
	exports.RichTextEditorController = RichTextEditorController;
	function richTextEditor() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<div class=\"rich-text-editor\">\n\t\t\t\t<text-angular ng-model=\"editor.ngModel\" ta-toolbar=\"editor.toolbar\"></text-angular>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'editor',
	        scope: {},
	        bindToController: {
	            ngModel: '=',
	            customButtons: '=',
	        },
	    };
	}
	exports.richTextEditor = richTextEditor;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, richTextEditor)
	    .controller(exports.controllerName, RichTextEditorController);
	//# sourceMappingURL=richTextEditor.js.map

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/signature_pad/signature_pad.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.signaturePad';
	exports.directiveName = 'rlSignaturePad';
	function signaturePad() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<canvas class=\"signature-pad\"></canvas>\n\t\t",
	        scope: {
	            signature: '=',
	            initial: '=',
	            height: '=',
	            width: '=',
	        },
	        link: function (scope, element) {
	            var canvas = element.find('.signature-pad').get(0);
	            var options = {
	                backgroundColor: 'rgb(255, 255, 255)',
	            };
	            scope.signature = new SignaturePad(canvas, options);
	            canvas.height = scope.height != null ? scope.height : 100;
	            canvas.width = scope.width != null ? scope.width : 200;
	            if (scope.initial != null) {
	                scope.signature.fromDataURL(scope.initial);
	            }
	        },
	    };
	}
	exports.signaturePad = signaturePad;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, signaturePad);
	//# sourceMappingURL=signaturePad.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __observable = typescript_angular_utilities_1.services.observable;
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var card = __webpack_require__(82);
	exports.simpleCard = card;
	var list = __webpack_require__(83);
	exports.simpleCardList = list;
	exports.moduleName = 'rl.ui.components.simpleCardList';
	angular.module(exports.moduleName, [__observable.moduleName, __parentChild.moduleName])
	    .directive(list.directiveName, list.simpleCardList)
	    .controller(list.controllerName, list.SimpleCardListController)
	    .directive(card.directiveName, card.simpleCard)
	    .controller(card.controllerName, card.SimpleCardController);
	//# sourceMappingURL=simpleCardList.module.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	exports.directiveName = 'rlSimpleCard';
	exports.controllerName = 'SimpleCardController';
	var SimpleCardController = (function () {
	    function SimpleCardController($scope, $element, parentChild) {
	        var _this = this;
	        this.$scope = $scope;
	        this.parentChild = parentChild;
	        this.showContent = false;
	        this.autosaveLink = {};
	        this.close = function () {
	            if (_this.showContent === false) {
	                return true;
	            }
	            return _this.parentChild.triggerChildBehavior(_this.autosaveLink, function (behavior) {
	                var canClose = behavior.autosave();
	                if (canClose) {
	                    _this.showContent = false;
	                }
	                return canClose;
	            });
	        };
	        if (this.canOpen == null) {
	            this.canOpen = true;
	        }
	        this.listController = $element.controller('rlSimpleCardList');
	        if (this.listController == null) {
	            this.listController = this.noList();
	        }
	        var behavior = {
	            close: this.close,
	        };
	        this.listController.registerCard(behavior);
	        parentChild.registerChildBehavior(this.childLink, behavior);
	    }
	    SimpleCardController.prototype.toggleContent = function () {
	        if (this.showContent) {
	            this.close();
	        }
	        else {
	            this.open();
	        }
	    };
	    SimpleCardController.prototype.open = function () {
	        if (this.canOpen && this.listController.openCard()) {
	            this.showContent = true;
	            this.onOpen();
	        }
	    };
	    SimpleCardController.prototype.noList = function () {
	        return {
	            openCard: function () {
	                return true;
	            },
	            registerCard: function (behavior) {
	                return null;
	            },
	        };
	    };
	    SimpleCardController.$inject = ['$scope', '$element', __parentChild.serviceName];
	    return SimpleCardController;
	})();
	exports.SimpleCardController = SimpleCardController;
	function simpleCard() {
	    'use strict';
	    return {
	        restrict: 'E',
	        transclude: true,
	        require: '?^^rlSimpleCardList',
	        template: "\n\t\t\t<div class=\"card col-xs-12\">\n\t\t\t\t<div class=\"header row\" ng-class=\"{ 'active': card.canOpen }\" ng-click=\"card.toggleContent()\">\n\t\t\t\t\t<div class=\"header-template\"></div>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t</div>\n\n\t\t\t\t<ng-form rl-autosave=\"card.autosaveLink\" validate=\"card.validate()\" save=\"card.save()\">\n\t\t\t\t\t<div ng-show=\"card.showContent\">\n\t\t\t\t\t\t<div class=\"body row\">\n\t\t\t\t\t\t\t<div class=\"content-template\"></div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-form>\n\t\t\t\t<div ng-show=\"hasFooter && card.showContent\">\n\t\t\t\t\t<div class=\"footer row\">\n\t\t\t\t\t\t<div class=\"footer-template\"></div>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'card',
	        scope: {},
	        bindToController: {
	            onOpen: '&',
	            canOpen: '=',
	            childLink: '=',
	            validate: '&',
	            save: '&',
	        },
	        compile: function () {
	            var header;
	            var content;
	            var footer;
	            return {
	                pre: function (scope, element, attrs, controller, transclude) {
	                    transclude(function (clone) {
	                        header = clone.filter('rl-card-header');
	                        content = clone.filter('rl-card-content');
	                        footer = clone.filter('rl-card-footer');
	                    });
	                },
	                post: function (scope, element) {
	                    var headerArea = element.find('.header-template');
	                    headerArea.append(header);
	                    var contentArea = element.find('.content-template');
	                    contentArea.append(content);
	                    scope.hasFooter = (footer.length > 0);
	                    if (scope.hasFooter) {
	                        var footerArea = element.find('.footer-template');
	                        footerArea.append(footer);
	                    }
	                },
	            };
	        },
	    };
	}
	exports.simpleCard = simpleCard;
	//# sourceMappingURL=simpleCard.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __observable = typescript_angular_utilities_1.services.observable;
	exports.directiveName = 'rlSimpleCardList';
	exports.controllerName = 'SimpleCardListController';
	var SimpleCardListController = (function () {
	    function SimpleCardListController(observableFactory) {
	        this.observable = observableFactory.getInstance();
	    }
	    SimpleCardListController.prototype.registerCard = function (behavior) {
	        return this.observable.register(behavior.close, 'close');
	    };
	    SimpleCardListController.prototype.openCard = function () {
	        return _.all(this.observable.fire('close'));
	    };
	    SimpleCardListController.$inject = [__observable.factoryName];
	    return SimpleCardListController;
	})();
	exports.SimpleCardListController = SimpleCardListController;
	function simpleCardList() {
	    'use strict';
	    return {
	        restrict: 'AE',
	        controller: exports.controllerName,
	    };
	}
	exports.simpleCardList = simpleCardList;
	//# sourceMappingURL=simpleCardList.js.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/bootstrap-touchspin/bootstrap-touchspin.d.ts' />
	// /// <reference path='../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __string = typescript_angular_utilities_1.services.string;
	var __number = typescript_angular_utilities_1.services.number;
	exports.moduleName = 'rl.ui.components.spinner';
	exports.directiveName = 'rlSpinner';
	exports.controllerName = 'SpinnerController';
	spinner.$inject = ['$timeout', __string.serviceName, __number.serviceName];
	function spinner($timeout, stringUtility, numberUtility) {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<rl-generic-container selector=\"ngDisabled\">\n\t\t\t\t<template default>\n\t\t\t\t\t<input name=\"{{name}}\" class=\"spinner\" ng-hide=\"ngDisabled\" id=\"{{spinnerId}}\" type=\"text\" />\n\t\t\t\t</template>\n\t\t\t\t<template when-selector=\"true\">\n\t\t\t\t\t<div class=\"input-group\" ng-show=\"prefix != null && postfix != null\">\n\t\t\t\t\t\t<span class=\"input-group-addon\">{{prefix}}</span>\n\t\t\t\t\t\t<input ng-disabled=\"ngDisabled\" type=\"text\" ng-model=\"ngModel\" class=\"form-control\" />\n\t\t\t\t\t\t<span class=\"input-group-addon\">{{postfix}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group\" ng-show=\"prefix != null && postfix == null\">\n\t\t\t\t\t\t<span class=\"input-group-addon\">{{prefix}}</span>\n\t\t\t\t\t\t<input ng-disabled=\"ngDisabled\" type=\"text\" ng-model=\"ngModel\" class=\"form-control\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group\" ng-show=\"prefix == null && postfix != null\">\n\t\t\t\t\t\t<input ng-disabled=\"ngDisabled\" type=\"text\" ng-model=\"ngModel\" class=\"form-control\" />\n\t\t\t\t\t\t<span class=\"input-group-addon\">{{postfix}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div ng-show=\"prefix == null && postfix == null\">\n\t\t\t\t\t\t<input ng-disabled=\"ngDisabled\" type=\"text\" ng-model=\"ngModel\" class=\"form-control\" />\n\t\t\t\t\t</div>\n\t\t\t\t</template>\n\t\t\t</rl-generic-container>\n\t\t",
	        require: '?^ngModel',
	        scope: {
	            min: '=',
	            max: '=',
	            step: '=',
	            decimals: '=',
	            prefix: '@',
	            postfix: '@',
	            roundToStep: '=',
	            ngDisabled: '=',
	            ngModel: '=',
	            spinnerId: '@',
	            name: '@',
	        },
	        link: function (scope, element, attrs, ngModel) {
	            var unbindWatches;
	            scope.$watch('ngDisabled', function (disabled) {
	                if (disabled) {
	                    if (_.isFunction(unbindWatches)) {
	                        unbindWatches();
	                    }
	                }
	                else {
	                    // Initialize the spinner after $timeout to give angular a chance initialize ngModel
	                    $timeout(function () {
	                        var touchspin = element.find('input.spinner').TouchSpin({
	                            min: (scope.min != null ? scope.min : Number.MIN_VALUE),
	                            max: (scope.max != null ? scope.max : Number.MAX_VALUE),
	                            step: scope.step,
	                            prefix: scope.prefix,
	                            postfix: scope.postfix,
	                            decimals: scope.decimals,
	                            initval: ngModel.$viewValue,
	                            forcestepdivisibility: scope.roundToStep ? 'round' : 'none',
	                        });
	                        touchspin.on('change', function () {
	                            scope.$apply(function () {
	                                var spinValue = touchspin.val();
	                                ngModel.$setViewValue(stringUtility.toNumber(spinValue));
	                            });
	                        });
	                        var unbindViewWatch = scope.$watch(function () {
	                            return ngModel.$viewValue;
	                        }, function (newValue) {
	                            touchspin.val(newValue != null ? newValue.toString() : '');
	                        });
	                        var unbindModelWatch = scope.$watch(function () {
	                            return ngModel.$modelValue;
	                        }, function (newModel) {
	                            scope.ngModel = round(newModel);
	                        });
	                        unbindWatches = function () {
	                            unbindViewWatch();
	                            unbindModelWatch();
	                        };
	                    });
	                }
	            });
	            function round(num) {
	                if (num != null && scope.roundToStep) {
	                    num = numberUtility.roundToStep(num, scope.step);
	                    num = numberUtility.preciseRound(num, scope.decimals);
	                }
	                return num;
	            }
	        }
	    };
	}
	angular.module(exports.moduleName, [__string.moduleName])
	    .directive(exports.directiveName, spinner);
	//# sourceMappingURL=spinner.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __object = typescript_angular_utilities_1.services.object;
	exports.moduleName = 'rl.ui.components.stringWithWatermark';
	exports.directiveName = 'rlStringWithWatermark';
	exports.controllerName = 'StringWithWatermarkController';
	var StringWithWatermarkController = (function () {
	    function StringWithWatermarkController($scope, objectUtility) {
	        var _this = this;
	        $scope.$watch(function () { return _this.string; }, function (value) {
	            _this.hasString = objectUtility.isNullOrEmpty(value) === false;
	        });
	    }
	    StringWithWatermarkController.$inject = ['$scope', __object.serviceName];
	    return StringWithWatermarkController;
	})();
	exports.StringWithWatermarkController = StringWithWatermarkController;
	function stringWithWatermark() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<span>\n\t\t\t\t<span ng-show=\"controller.hasString\">{{controller.string}}</span>\n\t\t\t\t<span ng-hide=\"controller.hasString\" class=\"watermark\">{{controller.watermark}}</span>\n\t\t\t</span>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'controller',
	        scope: {},
	        bindToController: {
	            string: '@',
	            watermark: '@',
	        }
	    };
	}
	exports.stringWithWatermark = stringWithWatermark;
	angular.module(exports.moduleName, [__object.moduleName])
	    .directive(exports.directiveName, stringWithWatermark)
	    .controller(exports.controllerName, StringWithWatermarkController);
	//# sourceMappingURL=stringWithWatermark.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var __genericSearch = typescript_angular_utilities_1.services.genericSearchFilter;
	var __objectUtility = typescript_angular_utilities_1.services.object;
	var __arrayUtility = typescript_angular_utilities_1.services.array;
	var __promiseUtility = typescript_angular_utilities_1.services.promise;
	exports.moduleName = 'rl.ui.components.typeahead';
	exports.directiveName = 'rlTypeahead';
	exports.controllerName = 'TypeaheadController';
	var TypeaheadController = (function () {
	    function TypeaheadController($scope, $attrs, $q, parentChild, genericSearchFactory, object, array, promise) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$q = $q;
	        this.parentChild = parentChild;
	        this.array = array;
	        this.promise = promise;
	        this.loading = false;
	        this.addItem = function (item) {
	            if (_this.cachedItems != null) {
	                _this.cachedItems.push(item);
	            }
	        };
	        this.removeItem = function (item) {
	            if (_this.cachedItems != null) {
	                _this.array.remove(_this.cachedItems, item);
	            }
	        };
	        this.searchFilter = genericSearchFactory.getInstance();
	        this.loadDelay = this.useClientSearching ? 100 : 500;
	        this.selection = this.selectionBinding;
	        if (this.hasSelection == null) {
	            this.hasSelection = false;
	        }
	        if (this.placeholder == null) {
	            this.placeholder = 'Search';
	        }
	        if (this.showSearch == null) {
	            this.showSearch = true;
	        }
	        this.useScopeSelection = object.isNullOrEmpty($attrs.selection) === false;
	        this.hasTransform = object.isNullOrEmpty($attrs.transform) === false;
	        this.useApply = object.isNullOrEmpty($attrs.apply) === false;
	        this.parentChild.registerChildBehavior(this.childLink, {
	            add: this.addItem,
	            remove: this.removeItem,
	        });
	        $scope.$watch(function () { return _this.selection; }, function (value) {
	            _this.hasSelection = _.isObject(value);
	            _this.setSelection(value);
	        });
	        $scope.$watch(function () { return _this.selectionBinding; }, function (value) {
	            if (value == null) {
	                _this.selection = null;
	            }
	        });
	    }
	    TypeaheadController.prototype.setSelection = function (object) {
	        if (this.hasSelection != null) {
	            this.hasSelection = this.hasSelection;
	        }
	        if (this.useScopeSelection) {
	            this.selection = object;
	        }
	        if (_.isFunction(this.select)) {
	            this.select({ value: object, hasSelection: this.hasSelection });
	        }
	    };
	    TypeaheadController.prototype.transform = function (object) {
	        if (this.hasTransform && object != null) {
	            return this.transformInParent({
	                value: object,
	            });
	        }
	        return object;
	    };
	    TypeaheadController.prototype.getItems = function (search) {
	        var _this = this;
	        if (!this.useClientSearching) {
	            return this.getItemsInParent({
	                search: search,
	            });
	        }
	        else {
	            this.searchFilter.searchText = search;
	            if (this.cachedItems != null) {
	                return this.$q.when(this.filter(this.cachedItems));
	            }
	            else {
	                return this.$q.when(this.getItemsInParent()).then(function (data) {
	                    _this.cachedItems = data;
	                    return _this.filter(data);
	                });
	            }
	        }
	    };
	    TypeaheadController.prototype.applyItem = function () {
	        var _this = this;
	        if (this.useApply && this.hasSelection) {
	            var request = this.apply({ value: this.selection });
	            if (this.promise.isPromise(request)) {
	                return request.then(function () {
	                    _this.removeItem(_this.selection);
	                    _this.selection = null;
	                });
	            }
	            else if (!_.isUndefined(request)) {
	                this.removeItem(this.selection);
	                this.selection = null;
	            }
	        }
	        return this.$q.when();
	    };
	    TypeaheadController.prototype.filter = function (list) {
	        var _this = this;
	        return _.filter(list, function (item) { return _this.searchFilter.filter(item); });
	    };
	    TypeaheadController.$inject = ['$scope',
	        '$attrs',
	        '$q',
	        __parentChild.serviceName,
	        __genericSearch.factoryName,
	        __objectUtility.serviceName,
	        __arrayUtility.serviceName,
	        __promiseUtility.serviceName];
	    return TypeaheadController;
	})();
	exports.TypeaheadController = TypeaheadController;
	function typeahead() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<div class=\"input-group\" ng-class=\"{ 'has-error': typeahead.hasError }\">\n\t\t\t\t<input type=\"text\" ng-model=\"typeahead.selection\" class=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{typeahead.placeholder}}\" typeahead=\"object as typeahead.transform(object) for object in typeahead.getItems($viewValue)\"\n\t\t\t\t\ttypeahead-loading=\"typeahead.loading\" typeahead-wait-ms=\"typeahead.loadDelay\" />\n\t\t\t\t<div class=\"input-group-addon\" ng-if=\"typeahead.showSearch\">\n\t\t\t\t\t<rl-busy loading=\"typeahead.loading\"></rl-busy>\n\t\t\t\t\t<span ng-hide=\"typeahead.loading\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" ng-hide=\"typeahead.hasSelection\"></i>\n\t\t\t\t\t\t<i class=\"fa fa-check\" ng-show=\"typeahead.hasSelection\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group-btn\" ng-if=\"typeahead.useApply\">\n\t\t\t\t\t<rl-button type=\"default\" action=\"typeahead.applyItem()\" button-right-aligned=\"true\" ng-disabled=\"!typeahead.hasSelection\">\n\t\t\t\t\t\t<i class=\"fa fa-plus new\"></i>\n\t\t\t\t\t</rl-button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'typeahead',
	        scope: {},
	        bindToController: {
	            childLink: '=',
	            selectionBinding: '=selection',
	            hasSelection: '=',
	            select: '&',
	            transformInParent: '&transform',
	            getItemsInParent: '&getItems',
	            placeholder: '@',
	            useClientSearching: '=',
	            hasError: '=',
	            showSearch: '=',
	            apply: '&',
	        },
	    };
	}
	exports.typeahead = typeahead;
	angular.module(exports.moduleName, [
	    __parentChild.moduleName,
	    __genericSearch.moduleName,
	    __objectUtility.moduleName,
	    __arrayUtility.moduleName,
	    __promiseUtility.moduleName])
	    .directive(exports.directiveName, typeahead)
	    .controller(exports.controllerName, TypeaheadController);
	//# sourceMappingURL=typeahead.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(10);
	exports.moduleName = 'rl.components.userRating';
	exports.directiveName = 'rlUserRating';
	exports.controllerName = 'UserRatingController';
	var UserRatingController = (function () {
	    function UserRatingController($scope) {
	        var _this = this;
	        this.$scope = $scope;
	        this.stars = [];
	        var rangeSize = this.$scope.range != null ? this.$scope.range : 5;
	        // css style requires the stars to show right to left. Reverse the list so the highest value is first
	        var range = _.range(1, rangeSize + 1).reverse();
	        _.each(range, function (rating) {
	            _this.stars.push({
	                value: rating,
	                filled: false,
	            });
	        });
	        var unbind = this.$scope.$watch('ngModel', function (value) {
	            _this.updateStarView(_this.$scope.ngModel.$viewValue);
	            unbind();
	        });
	    }
	    UserRatingController.prototype.setRating = function (rating) {
	        this.$scope.ngModel.$setViewValue(rating);
	        this.updateStarView(rating);
	    };
	    UserRatingController.prototype.updateStarView = function (rating) {
	        _.each(this.stars, function (star) {
	            if (star.value <= rating) {
	                star.filled = true;
	            }
	            else {
	                star.filled = false;
	            }
	        });
	    };
	    UserRatingController.$inject = ['$scope'];
	    return UserRatingController;
	})();
	exports.UserRatingController = UserRatingController;
	function userRating() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: 'ngModel',
	        template: "\n\t\t\t<span class=\"rating\">\n\t\t\t\t<span class=\"star\" ng-repeat=\"star in userRating.stars\" ng-class=\"{ 'filled': star.filled }\" ng-click=\"userRating.setRating(star.value)\"></span>\n\t\t\t</span>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'userRating',
	        scope: {
	            range: '=',
	        },
	        link: function (scope, element, attrs, ngModel) {
	            scope.ngModel = ngModel;
	        },
	    };
	}
	exports.userRating = userRating;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, userRating)
	    .controller(exports.controllerName, UserRatingController);
	//# sourceMappingURL=userRating.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var autosaveDialog = __webpack_require__(89);
	exports.autosaveDialog = autosaveDialog;
	var breakpoints = __webpack_require__(74);
	exports.breakpoints = breakpoints;
	var contentProvider = __webpack_require__(96);
	exports.contentProvider = contentProvider;
	var dialog = __webpack_require__(91);
	exports.dialog = dialog;
	var jquery = __webpack_require__(62);
	exports.jquery = jquery;
	var windowWrapper = __webpack_require__(75);
	exports.windowWrapper = windowWrapper;
	exports.moduleName = 'rl.ui.services';
	angular.module(exports.moduleName, [
	    autosaveDialog.moduleName,
	    breakpoints.moduleName,
	    contentProvider.moduleName,
	    dialog.moduleName,
	    jquery.moduleName,
	    windowWrapper.moduleName,
	]);
	//# sourceMappingURL=services.module.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var autosaveDialog_service_1 = __webpack_require__(90);
	var autosaveDialog_controller_1 = __webpack_require__(95);
	__export(__webpack_require__(90));
	__export(__webpack_require__(95));
	exports.moduleName = 'rl.ui.services.autosaveDialog';
	angular.module(exports.moduleName, [])
	    .service(autosaveDialog_service_1.serviceName, autosaveDialog_service_1.AutosaveDialogService)
	    .controller(autosaveDialog_controller_1.controllerName, autosaveDialog_controller_1.AutosaveDialogController);
	//# sourceMappingURL=autosaveDialog.module.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var dialog_service_1 = __webpack_require__(91);
	var autosaveDialog_controller_1 = __webpack_require__(95);
	exports.serviceName = 'autosaveDialog';
	var __autosave = typescript_angular_utilities_1.services.autosave;
	var AutosaveDialogService = (function () {
	    function AutosaveDialogService($rootScope, dialog, autosaveFactory) {
	        var _this = this;
	        this.$rootScope = $rootScope;
	        this.dialog = dialog;
	        this.autosaveFactory = autosaveFactory;
	        this.autosaveCloseHandler = function (explicit) {
	            if (explicit) {
	                return true;
	            }
	            return _this.autosave.autosave(_this.data);
	        };
	        this.setForm = function (form) {
	            _this.autosave.contentForm = form;
	        };
	    }
	    AutosaveDialogService.prototype.open = function (options) {
	        var scope = options.scope;
	        if (scope == null) {
	            scope = this.$rootScope.$new();
	            options.scope = scope;
	        }
	        this.autosave = this.autosaveFactory.getInstance(options.save, null, options.validate);
	        scope.form = options.form;
	        scope.formGetter = options.formGetter;
	        scope.setForm = this.setForm;
	        this.data = options.data;
	        scope.dialog = options.data;
	        var dialogOptions = options;
	        dialogOptions.controller = autosaveDialog_controller_1.controllerName;
	        dialogOptions.controllerAs = 'controller';
	        return this.dialog.open(options, this.autosaveCloseHandler);
	    };
	    AutosaveDialogService.$inject = ['$rootScope', dialog_service_1.serviceName, __autosave.factoryName];
	    return AutosaveDialogService;
	})();
	exports.AutosaveDialogService = AutosaveDialogService;
	//# sourceMappingURL=autosaveDialog.service.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ng = __webpack_require__(1);
	var baseDialog_module_1 = __webpack_require__(92);
	exports.moduleName = 'rl.ui.services.dialog';
	exports.serviceName = 'dialog';
	var DialogService = (function () {
	    function DialogService(dialog) {
	        this.dialog = dialog;
	    }
	    DialogService.prototype.open = function (options, closeHandler) {
	        this.dialog.open(options, closeHandler);
	    };
	    return DialogService;
	})();
	exports.DialogService = DialogService;
	function dialogServiceProvider() {
	    'use strict';
	    var _this = this;
	    var provider = {
	        setImplementation: function (dialogImplementation) {
	            _this.dialogImplementation = dialogImplementation;
	        },
	        $get: function (baseDialog) {
	            var dialogImplementation = _this.dialogImplementation != null
	                ? _this.dialogImplementation
	                : baseDialog;
	            return new DialogService(dialogImplementation);
	        },
	    };
	    provider.$get.$inject = [baseDialog_module_1.serviceName];
	    return provider;
	}
	exports.dialogServiceProvider = dialogServiceProvider;
	ng.module(exports.moduleName, [baseDialog_module_1.moduleName])
	    .provider(exports.serviceName, dialogServiceProvider);
	//# sourceMappingURL=dialog.service.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var baseDialog_controller_1 = __webpack_require__(93);
	var baseDialog_service_1 = __webpack_require__(94);
	__export(__webpack_require__(93));
	__export(__webpack_require__(94));
	exports.moduleName = 'rl.ui.services.dialog.baseDialog';
	angular.module(exports.moduleName, [])
	    .controller(baseDialog_controller_1.controllerName, baseDialog_controller_1.BaseDialogController)
	    .service(baseDialog_service_1.serviceName, baseDialog_service_1.BaseDialogService);
	//# sourceMappingURL=baseDialog.module.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var baseDialog_service_1 = __webpack_require__(94);
	exports.controllerName = 'BaseDialogController';
	var BaseDialogController = (function () {
	    function BaseDialogController($scope, $controller, baseDialog) {
	        var controller;
	        if ($scope.modalController != null) {
	            controller = $controller($scope.modalController, { $scope: $scope });
	        }
	        $scope.$on('modal.closing', baseDialog.modalClosing);
	        return controller;
	    }
	    BaseDialogController.$inject = ['$scope', '$controller', baseDialog_service_1.serviceName];
	    return BaseDialogController;
	})();
	exports.BaseDialogController = BaseDialogController;
	//# sourceMappingURL=baseDialog.controller.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(10);
	var baseDialog_controller_1 = __webpack_require__(93);
	exports.serviceName = 'baseDialog';
	var BaseDialogService = (function () {
	    function BaseDialogService($modal, $rootScope) {
	        var _this = this;
	        this.$modal = $modal;
	        this.$rootScope = $rootScope;
	        this.modalClosing = function (event, reason, explicitlyClosed) {
	            var canClose = true;
	            if (_.isFunction(_this.closeHandler)) {
	                canClose = _this.closeHandler(explicitlyClosed);
	            }
	            if (!canClose) {
	                event.preventDefault();
	            }
	        };
	    }
	    BaseDialogService.prototype.open = function (options, closeHandler) {
	        this.closeHandler = closeHandler;
	        options = this.configureModalSettings(options);
	        this.$modal.open(options);
	    };
	    BaseDialogService.prototype.configureModalSettings = function (options) {
	        if (options == null) {
	            options = {};
	        }
	        var modalScope = options.scope;
	        if (modalScope == null) {
	            modalScope = this.$rootScope.$new();
	        }
	        modalScope.modalController = options.controller;
	        options.controller = baseDialog_controller_1.controllerName;
	        options.scope = modalScope;
	        return options;
	    };
	    BaseDialogService.$inject = ['$modal', '$rootScope'];
	    return BaseDialogService;
	})();
	exports.BaseDialogService = BaseDialogService;
	//# sourceMappingURL=baseDialog.service.js.map

/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';
	exports.controllerName = 'AutosaveDialogController';
	var AutosaveDialogController = (function () {
	    function AutosaveDialogController($scope) {
	        this.$scope = $scope;
	        if ($scope.form != null) {
	            var unbind = $scope.$watch($scope.form, function (form) {
	                if (form != null) {
	                    $scope.setForm(form);
	                    unbind();
	                }
	            });
	        }
	        else if ($scope.formGetter != null) {
	            var unbind = $scope.$watch(function () { return $scope.formGetter($scope); }, function (form) {
	                if (form != null) {
	                    $scope.setForm(form);
	                    unbind();
	                }
	            });
	        }
	    }
	    AutosaveDialogController.$inject = ['$scope'];
	    return AutosaveDialogController;
	})();
	exports.AutosaveDialogController = AutosaveDialogController;
	//# sourceMappingURL=autosaveDialog.controller.js.map

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/jquery/jquery.d.ts" />
	'use strict';
	var ng = __webpack_require__(1);
	var _ = __webpack_require__(10);
	var typescript_angular_utilities_1 = __webpack_require__(4);
	var __observable = typescript_angular_utilities_1.services.observable;
	exports.moduleName = 'rl.utilities.services.contentProvider';
	exports.serviceName = 'contentProviderFactory';
	var ContentProviderService = (function () {
	    function ContentProviderService(observableFactory) {
	        var _this = this;
	        this.setTranscludeContent = function (transcludeFunction) {
	            if (_.isFunction(transcludeFunction)) {
	                transcludeFunction(function (clone) {
	                    _this.setContent(clone);
	                });
	            }
	            else {
	                _this.setContent(null);
	            }
	        };
	        this.observable = observableFactory.getInstance();
	    }
	    ContentProviderService.prototype.setContent = function (content) {
	        this.content = content;
	        this.observable.fire('contentChanged');
	    };
	    ContentProviderService.prototype.register = function (action, selector) {
	        var _this = this;
	        if (this.content != null) {
	            action(this.getContent(selector));
	        }
	        return this.observable.register(function () {
	            action(_this.getContent(selector));
	        }, 'contentChanged');
	    };
	    ContentProviderService.prototype.getContent = function (selector) {
	        if (selector != null) {
	            return this.content.filter(selector);
	        }
	        return this.content;
	    };
	    return ContentProviderService;
	})();
	contentProviderServiceFactory.$inject = [__observable.factoryName];
	function contentProviderServiceFactory(observableFactory) {
	    'use strict';
	    return {
	        getInstance: function () {
	            return new ContentProviderService(observableFactory);
	        }
	    };
	}
	ng.module(exports.moduleName, [__observable.moduleName])
	    .factory(exports.serviceName, contentProviderServiceFactory);
	//# sourceMappingURL=contentProvider.service.js.map

/***/ }
/******/ ]);