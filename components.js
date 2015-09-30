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
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(16);
	var behaviors = __webpack_require__(17);
	exports.behaviors = behaviors;
	var components = __webpack_require__(20);
	exports.components = components;
	var services = __webpack_require__(102);
	exports.services = services;
	exports.moduleName = 'rl.ui';
	angular.module(exports.moduleName, [
	    'ui.bootstrap',
	    'ngSanitize',
	    'textAngular',
	    behaviors.moduleName,
	    components.moduleName,
	    services.moduleName,
	]);


/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() { module.exports = this["angular"]; }());

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = 'ui.bootstrap';


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/

	 * Version: 0.13.4 - 2015-09-03
	 * License: MIT
	 */
	angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.transition","ui.bootstrap.typeahead"]);
	angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]);
	angular.module('ui.bootstrap.collapse', [])

	  .directive('collapse', ['$animate', function($animate) {
	    return {
	      link: function(scope, element, attrs) {
	        function expand() {
	          element.removeClass('collapse')
	            .addClass('collapsing')
	            .attr('aria-expanded', true)
	            .attr('aria-hidden', false);

	          $animate.addClass(element, 'in', {
	            to: { height: element[0].scrollHeight + 'px' }
	          }).then(expandDone);
	        }

	        function expandDone() {
	          element.removeClass('collapsing');
	          element.css({height: 'auto'});
	        }

	        function collapse() {
	          if (!element.hasClass('collapse') && !element.hasClass('in')) {
	            return collapseDone();
	          }

	          element
	            // IMPORTANT: The height must be set before adding "collapsing" class.
	            // Otherwise, the browser attempts to animate from height 0 (in
	            // collapsing class) to the given height here.
	            .css({height: element[0].scrollHeight + 'px'})
	            // initially all panel collapse have the collapse class, this removal
	            // prevents the animation from jumping to collapsed state
	            .removeClass('collapse')
	            .addClass('collapsing')
	            .attr('aria-expanded', false)
	            .attr('aria-hidden', true);

	          $animate.removeClass(element, 'in', {
	            to: {height: '0'}
	          }).then(collapseDone);
	        }

	        function collapseDone() {
	          element.css({height: '0'}); // Required so that collapse works when animation is disabled
	          element.removeClass('collapsing');
	          element.addClass('collapse');
	        }

	        scope.$watch(attrs.collapse, function(shouldCollapse) {
	          if (shouldCollapse) {
	            collapse();
	          } else {
	            expand();
	          }
	        });
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

	.constant('accordionConfig', {
	  closeOthers: true
	})

	.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function($scope, $attrs, accordionConfig) {
	  // This array keeps track of the accordion groups
	  this.groups = [];

	  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
	  this.closeOthers = function(openGroup) {
	    var closeOthers = angular.isDefined($attrs.closeOthers) ?
	      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
	    if (closeOthers) {
	      angular.forEach(this.groups, function(group) {
	        if (group !== openGroup) {
	          group.isOpen = false;
	        }
	      });
	    }
	  };

	  // This is called from the accordion-group directive to add itself to the accordion
	  this.addGroup = function(groupScope) {
	    var that = this;
	    this.groups.push(groupScope);

	    groupScope.$on('$destroy', function(event) {
	      that.removeGroup(groupScope);
	    });
	  };

	  // This is called from the accordion-group directive when to remove itself
	  this.removeGroup = function(group) {
	    var index = this.groups.indexOf(group);
	    if (index !== -1) {
	      this.groups.splice(index, 1);
	    }
	  };

	}])

	// The accordion directive simply sets up the directive controller
	// and adds an accordion CSS class to itself element.
	.directive('accordion', function() {
	  return {
	    restrict: 'EA',
	    controller: 'AccordionController',
	    controllerAs: 'accordion',
	    transclude: true,
	    replace: false,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/accordion/accordion.html';
	    }
	  };
	})

	// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
	.directive('accordionGroup', function() {
	  return {
	    require: '^accordion',         // We need this directive to be inside an accordion
	    restrict: 'EA',
	    transclude: true,              // It transcludes the contents of the directive into the template
	    replace: true,                // The element containing the directive will be replaced with the template
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/accordion/accordion-group.html';
	    },
	    scope: {
	      heading: '@',               // Interpolate the heading attribute onto this scope
	      isOpen: '=?',
	      isDisabled: '=?'
	    },
	    controller: function() {
	      this.setHeading = function(element) {
	        this.heading = element;
	      };
	    },
	    link: function(scope, element, attrs, accordionCtrl) {
	      accordionCtrl.addGroup(scope);

	      scope.openClass = attrs.openClass || 'panel-open';
	      scope.panelClass = attrs.panelClass;
	      scope.$watch('isOpen', function(value) {
	        element.toggleClass(scope.openClass, value);
	        if (value) {
	          accordionCtrl.closeOthers(scope);
	        }
	      });

	      scope.toggleOpen = function($event) {
	        if (!scope.isDisabled) {
	          if (!$event || $event.which === 32) {
	            scope.isOpen = !scope.isOpen;
	          }
	        }
	      };
	    }
	  };
	})

	// Use accordion-heading below an accordion-group to provide a heading containing HTML
	// <accordion-group>
	//   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
	// </accordion-group>
	.directive('accordionHeading', function() {
	  return {
	    restrict: 'EA',
	    transclude: true,   // Grab the contents to be used as the heading
	    template: '',       // In effect remove this element!
	    replace: true,
	    require: '^accordionGroup',
	    link: function(scope, element, attr, accordionGroupCtrl, transclude) {
	      // Pass the heading to the accordion-group controller
	      // so that it can be transcluded into the right place in the template
	      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
	    }
	  };
	})

	// Use in the accordion-group template to indicate where you want the heading to be transcluded
	// You must provide the property on the accordion-group controller that will hold the transcluded element
	// <div class="accordion-group">
	//   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
	//   ...
	// </div>
	.directive('accordionTransclude', function() {
	  return {
	    require: '^accordionGroup',
	    link: function(scope, element, attr, controller) {
	      scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
	        if (heading) {
	          element.find('span').html('');
	          element.find('span').append(heading);
	        }
	      });
	    }
	  };
	})

	;

	angular.module('ui.bootstrap.alert', [])

	.controller('AlertController', ['$scope', '$attrs', function($scope, $attrs) {
	  $scope.closeable = !!$attrs.close;
	  this.close = $scope.close;
	}])

	.directive('alert', function() {
	  return {
	    controller: 'AlertController',
	    controllerAs: 'alert',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/alert/alert.html';
	    },
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@',
	      close: '&'
	    }
	  };
	})

	.directive('dismissOnTimeout', ['$timeout', function($timeout) {
	  return {
	    require: 'alert',
	    link: function(scope, element, attrs, alertCtrl) {
	      $timeout(function() {
	        alertCtrl.close();
	      }, parseInt(attrs.dismissOnTimeout, 10));
	    }
	  };
	}]);

	angular.module('ui.bootstrap.bindHtml', [])

	  .value('$bindHtmlUnsafeSuppressDeprecated', false)

	  .directive('bindHtmlUnsafe', ['$log', '$bindHtmlUnsafeSuppressDeprecated', function ($log, $bindHtmlUnsafeSuppressDeprecated) {
	    return function (scope, element, attr) {
	      if (!$bindHtmlUnsafeSuppressDeprecated) {
	        $log.warn('bindHtmlUnsafe is now deprecated. Use ngBindHtml instead');
	      }
	      element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
	      scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
	        element.html(value || '');
	      });
	    };
	  }]);
	angular.module('ui.bootstrap.buttons', [])

	.constant('buttonConfig', {
	  activeClass: 'active',
	  toggleEvent: 'click'
	})

	.controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
	  this.activeClass = buttonConfig.activeClass || 'active';
	  this.toggleEvent = buttonConfig.toggleEvent || 'click';
	}])

	.directive('btnRadio', function() {
	  return {
	    require: ['btnRadio', 'ngModel'],
	    controller: 'ButtonsController',
	    controllerAs: 'buttons',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      element.find('input').css({display: 'none'});

	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
	      };

	      //ui->model
	      element.bind(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }

	        var isActive = element.hasClass(buttonsCtrl.activeClass);

	        if (!isActive || angular.isDefined(attrs.uncheckable)) {
	          scope.$apply(function() {
	            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
	            ngModelCtrl.$render();
	          });
	        }
	      });
	    }
	  };
	})

	.directive('btnCheckbox', ['$document', function($document) {
	  return {
	    require: ['btnCheckbox', 'ngModel'],
	    controller: 'ButtonsController',
	    controllerAs: 'button',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      element.find('input').css({display: 'none'});

	      function getTrueValue() {
	        return getCheckboxValue(attrs.btnCheckboxTrue, true);
	      }

	      function getFalseValue() {
	        return getCheckboxValue(attrs.btnCheckboxFalse, false);
	      }

	      function getCheckboxValue(attributeValue, defaultValue) {
	        var val = scope.$eval(attributeValue);
	        return angular.isDefined(val) ? val : defaultValue;
	      }

	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	      };

	      //ui->model
	      element.bind(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }

	        scope.$apply(function() {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });

	      //accessibility
	      element.on('keypress', function(e) {
	        if (attrs.disabled || e.which !== 32 || $document[0].activeElement !== element[0]) {
	          return;
	        }

	        scope.$apply(function() {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	    }
	  };
	}]);

	/**
	* @ngdoc overview
	* @name ui.bootstrap.carousel
	*
	* @description
	* AngularJS version of an image carousel.
	*
	*/
	angular.module('ui.bootstrap.carousel', [])
	.controller('CarouselController', ['$scope', '$element', '$interval', '$animate', function ($scope, $element, $interval, $animate) {
	  var self = this,
	    slides = self.slides = $scope.slides = [],
	    NEW_ANIMATE = angular.version.minor >= 4,
	    NO_TRANSITION = 'uib-noTransition',
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    currentIndex = -1,
	    currentInterval, isPlaying;
	  self.currentSlide = null;

	  var destroyed = false;
	  /* direction: "prev" or "next" */
	  self.select = $scope.select = function(nextSlide, direction) {
	    var nextIndex = $scope.indexOfSlide(nextSlide);
	    //Decide direction if it's not given
	    if (direction === undefined) {
	      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	    }
	    //Prevent this user-triggered transition from occurring if there is already one in progress
	    if (nextSlide && nextSlide !== self.currentSlide && !$scope.$currentTransition) {
	      goNext(nextSlide, nextIndex, direction);
	    }
	  };

	  function goNext(slide, index, direction) {
	    // Scope has been destroyed, stop here.
	    if (destroyed) { return; }

	    angular.extend(slide, {direction: direction, active: true});
	    angular.extend(self.currentSlide || {}, {direction: direction, active: false});
	    if ($animate.enabled() && !$scope.noTransition && !$scope.$currentTransition &&
	      slide.$element && self.slides.length > 1) {
	      slide.$element.data(SLIDE_DIRECTION, slide.direction);
	      if (self.currentSlide && self.currentSlide.$element) {
	        self.currentSlide.$element.data(SLIDE_DIRECTION, slide.direction);
	      }

	      $scope.$currentTransition = true;
	      if (NEW_ANIMATE) {
	        $animate.on('addClass', slide.$element, function (element, phase) {
	          if (phase === 'close') {
	            $scope.$currentTransition = null;
	            $animate.off('addClass', element);
	          }
	        });
	      } else {
	        slide.$element.one('$animate:close', function closeFn() {
	          $scope.$currentTransition = null;
	        });
	      }
	    }

	    self.currentSlide = slide;
	    currentIndex = index;

	    //every time you change slides, reset the timer
	    restartTimer();
	  }

	  $scope.$on('$destroy', function () {
	    destroyed = true;
	  });

	  function getSlideByIndex(index) {
	    if (angular.isUndefined(slides[index].index)) {
	      return slides[index];
	    }
	    var i, len = slides.length;
	    for (i = 0; i < slides.length; ++i) {
	      if (slides[i].index == index) {
	        return slides[i];
	      }
	    }
	  }

	  self.getCurrentIndex = function() {
	    if (self.currentSlide && angular.isDefined(self.currentSlide.index)) {
	      return +self.currentSlide.index;
	    }
	    return currentIndex;
	  };

	  /* Allow outside people to call indexOf on slides array */
	  $scope.indexOfSlide = function(slide) {
	    return angular.isDefined(slide.index) ? +slide.index : slides.indexOf(slide);
	  };

	  $scope.next = function() {
	    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

	    if (newIndex === 0 && $scope.noWrap()) {
	      $scope.pause();
	      return;
	    }

	    return self.select(getSlideByIndex(newIndex), 'next');
	  };

	  $scope.prev = function() {
	    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

	    if ($scope.noWrap() && newIndex === slides.length - 1){
	      $scope.pause();
	      return;
	    }

	    return self.select(getSlideByIndex(newIndex), 'prev');
	  };

	  $scope.isActive = function(slide) {
	     return self.currentSlide === slide;
	  };

	  $scope.$watch('interval', restartTimer);
	  $scope.$on('$destroy', resetTimer);

	  function restartTimer() {
	    resetTimer();
	    var interval = +$scope.interval;
	    if (!isNaN(interval) && interval > 0) {
	      currentInterval = $interval(timerFn, interval);
	    }
	  }

	  function resetTimer() {
	    if (currentInterval) {
	      $interval.cancel(currentInterval);
	      currentInterval = null;
	    }
	  }

	  function timerFn() {
	    var interval = +$scope.interval;
	    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
	      $scope.next();
	    } else {
	      $scope.pause();
	    }
	  }

	  $scope.play = function() {
	    if (!isPlaying) {
	      isPlaying = true;
	      restartTimer();
	    }
	  };
	  $scope.pause = function() {
	    if (!$scope.noPause) {
	      isPlaying = false;
	      resetTimer();
	    }
	  };

	  self.addSlide = function(slide, element) {
	    slide.$element = element;
	    slides.push(slide);
	    //if this is the first slide or the slide is set to active, select it
	    if(slides.length === 1 || slide.active) {
	      self.select(slides[slides.length-1]);
	      if (slides.length == 1) {
	        $scope.play();
	      }
	    } else {
	      slide.active = false;
	    }
	  };

	  self.removeSlide = function(slide) {
	    if (angular.isDefined(slide.index)) {
	      slides.sort(function(a, b) {
	        return +a.index > +b.index;
	      });
	    }
	    //get the index of the slide inside the carousel
	    var index = slides.indexOf(slide);
	    slides.splice(index, 1);
	    if (slides.length > 0 && slide.active) {
	      if (index >= slides.length) {
	        self.select(slides[index-1]);
	      } else {
	        self.select(slides[index]);
	      }
	    } else if (currentIndex > index) {
	      currentIndex--;
	    }
	    
	    //clean the currentSlide when no more slide
	    if (slides.length === 0) {
	      self.currentSlide = null;
	    }
	  };

	  $scope.$watch('noTransition', function(noTransition) {
	    $element.data(NO_TRANSITION, noTransition);
	  });

	}])

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.carousel.directive:carousel
	 * @restrict EA
	 *
	 * @description
	 * Carousel is the outer container for a set of image 'slides' to showcase.
	 *
	 * @param {number=} interval The time, in milliseconds, that it will take the carousel to go to the next slide.
	 * @param {boolean=} noTransition Whether to disable transitions on the carousel.
	 * @param {boolean=} noPause Whether to disable pausing on the carousel (by default, the carousel interval pauses on hover).
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <carousel>
	      <slide>
	        <img src="http://placekitten.com/150/150" style="margin:auto;">
	        <div class="carousel-caption">
	          <p>Beautiful!</p>
	        </div>
	      </slide>
	      <slide>
	        <img src="http://placekitten.com/100/150" style="margin:auto;">
	        <div class="carousel-caption">
	          <p>D'aww!</p>
	        </div>
	      </slide>
	    </carousel>
	  </file>
	  <file name="demo.css">
	    .carousel-indicators {
	      top: auto;
	      bottom: 15px;
	    }
	  </file>
	</example>
	 */
	.directive('carousel', [function() {
	  return {
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    controller: 'CarouselController',
	    controllerAs: 'carousel',
	    require: 'carousel',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/carousel/carousel.html';
	    },
	    scope: {
	      interval: '=',
	      noTransition: '=',
	      noPause: '=',
	      noWrap: '&'
	    }
	  };
	}])

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.carousel.directive:slide
	 * @restrict EA
	 *
	 * @description
	 * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.
	 *
	 * @param {boolean=} active Model binding, whether or not this slide is currently active.
	 * @param {number=} index The index of the slide. The slides will be sorted by this parameter.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	<div ng-controller="CarouselDemoCtrl">
	  <carousel>
	    <slide ng-repeat="slide in slides" active="slide.active" index="$index">
	      <img ng-src="{{slide.image}}" style="margin:auto;">
	      <div class="carousel-caption">
	        <h4>Slide {{$index}}</h4>
	        <p>{{slide.text}}</p>
	      </div>
	    </slide>
	  </carousel>
	  Interval, in milliseconds: <input type="number" ng-model="myInterval">
	  <br />Enter a negative number to stop the interval.
	</div>
	  </file>
	  <file name="script.js">
	function CarouselDemoCtrl($scope) {
	  $scope.myInterval = 5000;
	}
	  </file>
	  <file name="demo.css">
	    .carousel-indicators {
	      top: auto;
	      bottom: 15px;
	    }
	  </file>
	</example>
	*/

	.directive('slide', function() {
	  return {
	    require: '^carousel',
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/carousel/slide.html';
	    },
	    scope: {
	      active: '=?',
	      actual: '=?',
	      index: '=?'
	    },
	    link: function (scope, element, attrs, carouselCtrl) {
	      carouselCtrl.addSlide(scope, element);
	      //when the scope is destroyed then remove the slide from the current slides array
	      scope.$on('$destroy', function() {
	        carouselCtrl.removeSlide(scope);
	      });

	      scope.$watch('active', function(active) {
	        if (active) {
	          carouselCtrl.select(scope);
	        }
	      });
	    }
	  };
	})

	.animation('.item', [
	         '$injector', '$animate',
	function ($injector, $animate) {
	  var NO_TRANSITION = 'uib-noTransition',
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    $animateCss = null;

	  if ($injector.has('$animateCss')) {
	    $animateCss = $injector.get('$animateCss');
	  }

	  function removeClass(element, className, callback) {
	    element.removeClass(className);
	    if (callback) {
	      callback();
	    }
	  }

	  return {
	    beforeAddClass: function (element, className, done) {
	      // Due to transclusion, noTransition property is on parent's scope
	      if (className == 'active' && element.parent() &&
	          !element.parent().data(NO_TRANSITION)) {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction == 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element,
	          directionClass + ' ' + direction, done);
	        element.addClass(direction);

	        if ($animateCss) {
	          $animateCss(element, {addClass: directionClass})
	            .start()
	            .done(removeClassFn);
	        } else {
	          $animate.addClass(element, directionClass).then(function () {
	            if (!stopped) {
	              removeClassFn();
	            }
	            done();
	          });
	        }

	        return function () {
	          stopped = true;
	        };
	      }
	      done();
	    },
	    beforeRemoveClass: function (element, className, done) {
	      // Due to transclusion, noTransition property is on parent's scope
	      if (className === 'active' && element.parent() &&
	          !element.parent().data(NO_TRANSITION)) {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction == 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element, directionClass, done);

	        if ($animateCss) {
	          $animateCss(element, {addClass: directionClass})
	            .start()
	            .done(removeClassFn);
	        } else {
	          $animate.addClass(element, directionClass).then(function () {
	            if (!stopped) {
	              removeClassFn();
	            }
	            done();
	          });
	        }
	        return function () {
	          stopped = true;
	        };
	      }
	      done();
	    }
	  };

	}])


	;

	angular.module('ui.bootstrap.dateparser', [])

	.service('dateParser', ['$log', '$locale', 'orderByFilter', function($log, $locale, orderByFilter) {
	  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
	  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

	  this.parsers = {};

	  var formatCodeToRegex = {
	    'yyyy': {
	      regex: '\\d{4}',
	      apply: function(value) { this.year = +value; }
	    },
	    'yy': {
	      regex: '\\d{2}',
	      apply: function(value) { this.year = +value + 2000; }
	    },
	    'y': {
	      regex: '\\d{1,4}',
	      apply: function(value) { this.year = +value; }
	    },
	    'MMMM': {
	      regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
	      apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
	    },
	    'MMM': {
	      regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
	      apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
	    },
	    'MM': {
	      regex: '0[1-9]|1[0-2]',
	      apply: function(value) { this.month = value - 1; }
	    },
	    'M': {
	      regex: '[1-9]|1[0-2]',
	      apply: function(value) { this.month = value - 1; }
	    },
	    'dd': {
	      regex: '[0-2][0-9]{1}|3[0-1]{1}',
	      apply: function(value) { this.date = +value; }
	    },
	    'd': {
	      regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
	      apply: function(value) { this.date = +value; }
	    },
	    'EEEE': {
	      regex: $locale.DATETIME_FORMATS.DAY.join('|')
	    },
	    'EEE': {
	      regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
	    },
	    'HH': {
	      regex: '(?:0|1)[0-9]|2[0-3]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'hh': {
	      regex: '0[0-9]|1[0-2]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'H': {
	      regex: '1?[0-9]|2[0-3]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'h': {
	      regex: '[0-9]|1[0-2]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'mm': {
	      regex: '[0-5][0-9]',
	      apply: function(value) { this.minutes = +value; }
	    },
	    'm': {
	      regex: '[0-9]|[1-5][0-9]',
	      apply: function(value) { this.minutes = +value; }
	    },
	    'sss': {
	      regex: '[0-9][0-9][0-9]',
	      apply: function(value) { this.milliseconds = +value; }
	    },
	    'ss': {
	      regex: '[0-5][0-9]',
	      apply: function(value) { this.seconds = +value; }
	    },
	    's': {
	      regex: '[0-9]|[1-5][0-9]',
	      apply: function(value) { this.seconds = +value; }
	    },
	    'a': {
	      regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
	      apply: function(value) {
	        if (this.hours === 12) {
	          this.hours = 0;
	        }

	        if (value === 'PM') {
	          this.hours += 12;
	        }
	      }
	    }
	  };

	  function createParser(format) {
	    var map = [], regex = format.split('');

	    angular.forEach(formatCodeToRegex, function(data, code) {
	      var index = format.indexOf(code);

	      if (index > -1) {
	        format = format.split('');

	        regex[index] = '(' + data.regex + ')';
	        format[index] = '$'; // Custom symbol to define consumed part of format
	        for (var i = index + 1, n = index + code.length; i < n; i++) {
	          regex[i] = '';
	          format[i] = '$';
	        }
	        format = format.join('');

	        map.push({ index: index, apply: data.apply });
	      }
	    });

	    return {
	      regex: new RegExp('^' + regex.join('') + '$'),
	      map: orderByFilter(map, 'index')
	    };
	  }

	  this.parse = function(input, format, baseDate) {
	    if (!angular.isString(input) || !format) {
	      return input;
	    }

	    format = $locale.DATETIME_FORMATS[format] || format;
	    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

	    if (!this.parsers[format]) {
	      this.parsers[format] = createParser(format);
	    }

	    var parser = this.parsers[format],
	        regex = parser.regex,
	        map = parser.map,
	        results = input.match(regex);

	    if (results && results.length) {
	      var fields, dt;
	      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
	        fields = {
	          year: baseDate.getFullYear(),
	          month: baseDate.getMonth(),
	          date: baseDate.getDate(),
	          hours: baseDate.getHours(),
	          minutes: baseDate.getMinutes(),
	          seconds: baseDate.getSeconds(),
	          milliseconds: baseDate.getMilliseconds()
	        };
	      } else {
	        if (baseDate) {
	          $log.warn('dateparser:', 'baseDate is not a valid date');
	        }
	        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
	      }

	      for (var i = 1, n = results.length; i < n; i++) {
	        var mapper = map[i-1];
	        if (mapper.apply) {
	          mapper.apply.call(fields, results[i]);
	        }
	      }

	      if (isValid(fields.year, fields.month, fields.date)) {
	        dt = new Date(fields.year, fields.month, fields.date,
	          fields.hours, fields.minutes, fields.seconds,
	          fields.milliseconds || 0);
	      }

	      return dt;
	    }
	  };

	  // Check if date is valid for specific month (and year for February).
	  // Month: 0 = Jan, 1 = Feb, etc
	  function isValid(year, month, date) {
	    if (date < 1) {
	      return false;
	    }

	    if (month === 1 && date > 28) {
	      return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	    }

	    if (month === 3 || month === 5 || month === 8 || month === 10) {
	      return date < 31;
	    }

	    return true;
	  }
	}]);

	angular.module('ui.bootstrap.position', [])

	/**
	 * A set of utility methods that can be use to retrieve position of DOM elements.
	 * It is meant to be used where we need to absolute-position DOM elements in
	 * relation to other, existing elements (this is the case for tooltips, popovers,
	 * typeahead suggestions etc.).
	 */
	  .factory('$position', ['$document', '$window', function($document, $window) {
	    function getStyle(el, cssprop) {
	      if (el.currentStyle) { //IE
	        return el.currentStyle[cssprop];
	      } else if ($window.getComputedStyle) {
	        return $window.getComputedStyle(el)[cssprop];
	      }
	      // finally try and get inline style
	      return el.style[cssprop];
	    }

	    /**
	     * Checks if a given element is statically positioned
	     * @param element - raw DOM element
	     */
	    function isStaticPositioned(element) {
	      return (getStyle(element, 'position') || 'static' ) === 'static';
	    }

	    /**
	     * returns the closest, non-statically positioned parentOffset of a given element
	     * @param element
	     */
	    var parentOffsetEl = function(element) {
	      var docDomEl = $document[0];
	      var offsetParent = element.offsetParent || docDomEl;
	      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
	        offsetParent = offsetParent.offsetParent;
	      }
	      return offsetParent || docDomEl;
	    };

	    return {
	      /**
	       * Provides read-only equivalent of jQuery's position function:
	       * http://api.jquery.com/position/
	       */
	      position: function(element) {
	        var elBCR = this.offset(element);
	        var offsetParentBCR = { top: 0, left: 0 };
	        var offsetParentEl = parentOffsetEl(element[0]);
	        if (offsetParentEl != $document[0]) {
	          offsetParentBCR = this.offset(angular.element(offsetParentEl));
	          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
	          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
	        }

	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: elBCR.top - offsetParentBCR.top,
	          left: elBCR.left - offsetParentBCR.left
	        };
	      },

	      /**
	       * Provides read-only equivalent of jQuery's offset function:
	       * http://api.jquery.com/offset/
	       */
	      offset: function(element) {
	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
	          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
	        };
	      },

	      /**
	       * Provides coordinates for the targetEl in relation to hostEl
	       */
	      positionElements: function(hostEl, targetEl, positionStr, appendToBody) {
	        var positionStrParts = positionStr.split('-');
	        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

	        var hostElPos,
	          targetElWidth,
	          targetElHeight,
	          targetElPos;

	        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

	        targetElWidth = targetEl.prop('offsetWidth');
	        targetElHeight = targetEl.prop('offsetHeight');

	        var shiftWidth = {
	          center: function() {
	            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
	          },
	          left: function() {
	            return hostElPos.left;
	          },
	          right: function() {
	            return hostElPos.left + hostElPos.width;
	          }
	        };

	        var shiftHeight = {
	          center: function() {
	            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
	          },
	          top: function() {
	            return hostElPos.top;
	          },
	          bottom: function() {
	            return hostElPos.top + hostElPos.height;
	          }
	        };

	        switch (pos0) {
	          case 'right':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: shiftWidth[pos0]()
	            };
	            break;
	          case 'left':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: hostElPos.left - targetElWidth
	            };
	            break;
	          case 'bottom':
	            targetElPos = {
	              top: shiftHeight[pos0](),
	              left: shiftWidth[pos1]()
	            };
	            break;
	          default:
	            targetElPos = {
	              top: hostElPos.top - targetElHeight,
	              left: shiftWidth[pos1]()
	            };
	            break;
	        }

	        return targetElPos;
	      }
	    };
	  }]);

	angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position'])

	.value('$datepickerSuppressError', false)

	.constant('datepickerConfig', {
	  formatDay: 'dd',
	  formatMonth: 'MMMM',
	  formatYear: 'yyyy',
	  formatDayHeader: 'EEE',
	  formatDayTitle: 'MMMM yyyy',
	  formatMonthTitle: 'yyyy',
	  datepickerMode: 'day',
	  minMode: 'day',
	  maxMode: 'year',
	  showWeeks: true,
	  startingDay: 0,
	  yearRange: 20,
	  minDate: null,
	  maxDate: null,
	  shortcutPropagation: false
	})

	.controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$log', 'dateFilter', 'datepickerConfig', '$datepickerSuppressError', function($scope, $attrs, $parse, $interpolate, $log, dateFilter, datepickerConfig, $datepickerSuppressError) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;

	  // Modes chain
	  this.modes = ['day', 'month', 'year'];

	  // Configuration attributes
	  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
	                   'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation'], function(key, index) {
	    self[key] = angular.isDefined($attrs[key]) ? (index < 6 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
	  });

	  // Watchable date attributes
	  angular.forEach(['minDate', 'maxDate'], function(key) {
	    if ($attrs[key]) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = value ? new Date(value) : null;
	        self.refreshView();
	      });
	    } else {
	      self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
	    }
	  });

	  angular.forEach(['minMode', 'maxMode'], function(key) {
	    if ($attrs[key]) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = angular.isDefined(value) ? value : $attrs[key];
	        $scope[key] = self[key];
	        if ((key == 'minMode' && self.modes.indexOf($scope.datepickerMode) < self.modes.indexOf(self[key])) || (key == 'maxMode' && self.modes.indexOf($scope.datepickerMode) > self.modes.indexOf(self[key]))) {
	          $scope.datepickerMode = self[key];
	        }
	      });
	    } else {
	      self[key] = datepickerConfig[key] || null;
	      $scope[key] = self[key];
	    }
	  });

	  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

	  if (angular.isDefined($attrs.initDate)) {
	    this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
	    $scope.$parent.$watch($attrs.initDate, function(initDate) {
	      if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
	        self.activeDate = initDate;
	        self.refreshView();
	      }
	    });
	  } else {
	    this.activeDate = new Date();
	  }

	  $scope.isActive = function(dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;

	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	  };

	  this.render = function() {
	    if (ngModelCtrl.$viewValue) {
	      var date = new Date(ngModelCtrl.$viewValue),
	          isValid = !isNaN(date);

	      if (isValid) {
	        this.activeDate = date;
	      } else if (!$datepickerSuppressError) {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	      }
	    }
	    this.refreshView();
	  };

	  this.refreshView = function() {
	    if (this.element) {
	      this._refreshView();

	      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	      ngModelCtrl.$setValidity('dateDisabled', !date || (this.element && !this.isDisabled(date)));
	    }
	  };

	  this.createDateObject = function(date, format) {
	    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	    return {
	      date: date,
	      label: dateFilter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      current: this.compare(date, new Date()) === 0,
	      customClass: this.customClass(date)
	    };
	  };

	  this.isDisabled = function(date) {
	    return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode})));
	  };

	  this.customClass = function(date) {
	    return $scope.customClass({date: date, mode: $scope.datepickerMode});
	  };

	  // Split array into smaller arrays
	  this.split = function(arr, size) {
	    var arrays = [];
	    while (arr.length > 0) {
	      arrays.push(arr.splice(0, size));
	    }
	    return arrays;
	  };

	  // Fix a hard-reprodusible bug with timezones
	  // The bug depends on OS, browser, current timezone and current date
	  // i.e.
	  // var date = new Date(2014, 0, 1);
	  // console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
	  // can result in "2013 11 31 23" because of the bug.
	  this.fixTimeZone = function(date) {
	    var hours = date.getHours();
	    date.setHours(hours === 23 ? hours + 2 : 0);
	  };

	  $scope.select = function(date) {
	    if ($scope.datepickerMode === self.minMode) {
	      var dt = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	      ngModelCtrl.$setViewValue(dt);
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
	    }
	  };

	  $scope.move = function(direction) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };

	  $scope.toggleMode = function(direction) {
	    direction = direction || 1;

	    if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
	      return;
	    }

	    $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
	  };

	  // Key event mapper
	  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

	  var focusElement = function() {
	    self.element[0].focus();
	  };

	  // Listen for focus requests from popup directive
	  $scope.$on('datepicker.focus', focusElement);

	  $scope.keydown = function(evt) {
	    var key = $scope.keys[evt.which];

	    if (!key || evt.shiftKey || evt.altKey) {
	      return;
	    }

	    evt.preventDefault();
	    if (!self.shortcutPropagation) {
	      evt.stopPropagation();
	    }

	    if (key === 'enter' || key === 'space') {
	      if (self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	      focusElement();
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	      focusElement();
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };
	}])

	.directive('datepicker', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/datepicker.html';
	    },
	    scope: {
	      datepickerMode: '=?',
	      dateDisabled: '&',
	      customClass: '&',
	      shortcutPropagation: '&?'
	    },
	    require: ['datepicker', '^ngModel'],
	    controller: 'DatepickerController',
	    controllerAs: 'datepicker',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      datepickerCtrl.init(ngModelCtrl);
	    }
	  };
	})

	.directive('daypicker', ['dateFilter', function(dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/day.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      scope.showWeeks = ctrl.showWeeks;

	      ctrl.step = { months: 1 };
	      ctrl.element = element;

	      var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      function getDaysInMonth(year, month) {
	        return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
	      }

	      function getDates(startDate, n) {
	        var dates = new Array(n), current = new Date(startDate), i = 0, date;
	        while (i < n) {
	          date = new Date(current);
	          ctrl.fixTimeZone(date);
	          dates[i++] = date;
	          current.setDate(current.getDate() + 1);
	        }
	        return dates;
	      }

	      ctrl._refreshView = function() {
	        var year = ctrl.activeDate.getFullYear(),
	          month = ctrl.activeDate.getMonth(),
	          firstDayOfMonth = new Date(year, month, 1),
	          difference = ctrl.startingDay - firstDayOfMonth.getDay(),
	          numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
	          firstDate = new Date(firstDayOfMonth);

	        if (numDisplayedFromPreviousMonth > 0) {
	          firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
	        }

	        // 42 is the number of days on a six-month calendar
	        var days = getDates(firstDate, 42);
	        for (var i = 0; i < 42; i ++) {
	          days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
	            secondary: days[i].getMonth() !== month,
	            uid: scope.uniqueId + '-' + i
	          });
	        }

	        scope.labels = new Array(7);
	        for (var j = 0; j < 7; j++) {
	          scope.labels[j] = {
	            abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
	            full: dateFilter(days[j].date, 'EEEE')
	          };
	        }

	        scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
	        scope.rows = ctrl.split(days, 7);

	        if (scope.showWeeks) {
	          scope.weekNumbers = [];
	          var thursdayIndex = (4 + 7 - ctrl.startingDay) % 7,
	              numWeeks = scope.rows.length;
	          for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
	            scope.weekNumbers.push(
	              getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
	          }
	        }
	      };

	      ctrl.compare = function(date1, date2) {
	        return (new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate()));
	      };

	      function getISO8601WeekNumber(date) {
	        var checkDate = new Date(date);
	        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
	        var time = checkDate.getTime();
	        checkDate.setMonth(0); // Compare with Jan 1
	        checkDate.setDate(1);
	        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	      }

	      ctrl.handleKeyDown = function(key, evt) {
	        var date = ctrl.activeDate.getDate();

	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 7;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 7;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
	          ctrl.activeDate.setMonth(month, 1);
	          date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
	        } else if (key === 'home') {
	          date = 1;
	        } else if (key === 'end') {
	          date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
	        }
	        ctrl.activeDate.setDate(date);
	      };

	      ctrl.refreshView();
	    }
	  };
	}])

	.directive('monthpicker', ['dateFilter', function(dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/month.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      ctrl.step = { years: 1 };
	      ctrl.element = element;

	      ctrl._refreshView = function() {
	        var months = new Array(12),
	            year = ctrl.activeDate.getFullYear(),
	            date;

	        for (var i = 0; i < 12; i++) {
	          date = new Date(year, i, 1);
	          ctrl.fixTimeZone(date);
	          months[i] = angular.extend(ctrl.createDateObject(date, ctrl.formatMonth), {
	            uid: scope.uniqueId + '-' + i
	          });
	        }

	        scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
	        scope.rows = ctrl.split(months, 3);
	      };

	      ctrl.compare = function(date1, date2) {
	        return new Date(date1.getFullYear(), date1.getMonth()) - new Date(date2.getFullYear(), date2.getMonth());
	      };

	      ctrl.handleKeyDown = function(key, evt) {
	        var date = ctrl.activeDate.getMonth();

	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 3;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 3;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
	          ctrl.activeDate.setFullYear(year);
	        } else if (key === 'home') {
	          date = 0;
	        } else if (key === 'end') {
	          date = 11;
	        }
	        ctrl.activeDate.setMonth(date);
	      };

	      ctrl.refreshView();
	    }
	  };
	}])

	.directive('yearpicker', ['dateFilter', function(dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/year.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      var range = ctrl.yearRange;

	      ctrl.step = { years: range };
	      ctrl.element = element;

	      function getStartingYear( year ) {
	        return parseInt((year - 1) / range, 10) * range + 1;
	      }

	      ctrl._refreshView = function() {
	        var years = new Array(range), date;

	        for (var i = 0, start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++) {
	          date = new Date(start + i, 0, 1);
	          ctrl.fixTimeZone(date);
	          years[i] = angular.extend(ctrl.createDateObject(date, ctrl.formatYear), {
	            uid: scope.uniqueId + '-' + i
	          });
	        }

	        scope.title = [years[0].label, years[range - 1].label].join(' - ');
	        scope.rows = ctrl.split(years, 5);
	      };

	      ctrl.compare = function(date1, date2) {
	        return date1.getFullYear() - date2.getFullYear();
	      };

	      ctrl.handleKeyDown = function(key, evt) {
	        var date = ctrl.activeDate.getFullYear();

	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 5;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 5;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          date += (key === 'pageup' ? - 1 : 1) * ctrl.step.years;
	        } else if (key === 'home') {
	          date = getStartingYear(ctrl.activeDate.getFullYear());
	        } else if (key === 'end') {
	          date = getStartingYear(ctrl.activeDate.getFullYear()) + range - 1;
	        }
	        ctrl.activeDate.setFullYear(date);
	      };

	      ctrl.refreshView();
	    }
	  };
	}])

	.constant('datepickerPopupConfig', {
	  datepickerPopup: 'yyyy-MM-dd',
	  datepickerPopupTemplateUrl: 'template/datepicker/popup.html',
	  datepickerTemplateUrl: 'template/datepicker/datepicker.html',
	  html5Types: {
	    date: 'yyyy-MM-dd',
	    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
	    'month': 'yyyy-MM'
	  },
	  currentText: 'Today',
	  clearText: 'Clear',
	  closeText: 'Done',
	  closeOnDateSelection: true,
	  appendToBody: false,
	  showButtonBar: true,
	  onOpenFocus: true
	})

	.directive('datepickerPopup', ['$compile', '$parse', '$document', '$rootScope', '$position', 'dateFilter', 'dateParser', 'datepickerPopupConfig', '$timeout',
	function($compile, $parse, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout) {
	  return {
	    restrict: 'EA',
	    require: 'ngModel',
	    scope: {
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@',
	      dateDisabled: '&',
	      customClass: '&'
	    },
	    link: function(scope, element, attrs, ngModel) {
	      var dateFormat,
	          closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
	          appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody,
	          onOpenFocus = angular.isDefined(attrs.onOpenFocus) ? scope.$parent.$eval(attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus,
	          datepickerPopupTemplateUrl = angular.isDefined(attrs.datepickerPopupTemplateUrl) ? attrs.datepickerPopupTemplateUrl : datepickerPopupConfig.datepickerPopupTemplateUrl,
	          datepickerTemplateUrl = angular.isDefined(attrs.datepickerTemplateUrl) ? attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl,
	          cache = {};

	      scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;

	      scope.getText = function(key) {
	        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
	      };

	      scope.isDisabled = function(date) {
	        if (date === 'today') {
	          date = new Date();
	        }

	        return ((scope.watchData.minDate && scope.compare(date, cache.minDate) < 0) ||
	          (scope.watchData.maxDate && scope.compare(date, cache.maxDate) > 0));
	      };

	      scope.compare = function(date1, date2) {
	        return (new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate()));
	      };

	      var isHtml5DateInput = false;
	      if (datepickerPopupConfig.html5Types[attrs.type]) {
	        dateFormat = datepickerPopupConfig.html5Types[attrs.type];
	        isHtml5DateInput = true;
	      } else {
	        dateFormat = attrs.datepickerPopup || datepickerPopupConfig.datepickerPopup;
	        attrs.$observe('datepickerPopup', function(value, oldValue) {
	            var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
	            // Invalidate the $modelValue to ensure that formatters re-run
	            // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
	            if (newDateFormat !== dateFormat) {
	              dateFormat = newDateFormat;
	              ngModel.$modelValue = null;

	              if (!dateFormat) {
	                throw new Error('datepickerPopup must have a date format specified.');
	              }
	            }
	        });
	      }

	      if (!dateFormat) {
	        throw new Error('datepickerPopup must have a date format specified.');
	      }

	      if (isHtml5DateInput && attrs.datepickerPopup) {
	        throw new Error('HTML5 date input types do not support custom formats.');
	      }

	      // popup element used to display calendar
	      var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
	      popupEl.attr({
	        'ng-model': 'date',
	        'ng-change': 'dateSelection(date)',
	        'template-url': datepickerPopupTemplateUrl
	      });

	      function cameltoDash(string) {
	        return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
	      }

	      // datepicker element
	      var datepickerEl = angular.element(popupEl.children()[0]);
	      datepickerEl.attr('template-url', datepickerTemplateUrl);

	      if (isHtml5DateInput) {
	        if (attrs.type === 'month') {
	          datepickerEl.attr('datepicker-mode', '"month"');
	          datepickerEl.attr('min-mode', 'month');
	        }
	      }

	      if (attrs.datepickerOptions) {
	        var options = scope.$parent.$eval(attrs.datepickerOptions);
	        if (options && options.initDate) {
	          scope.initDate = options.initDate;
	          datepickerEl.attr('init-date', 'initDate');
	          delete options.initDate;
	        }
	        angular.forEach(options, function(value, option) {
	          datepickerEl.attr( cameltoDash(option), value );
	        });
	      }

	      scope.watchData = {};
	      angular.forEach(['minMode', 'maxMode', 'minDate', 'maxDate', 'datepickerMode', 'initDate', 'shortcutPropagation'], function(key) {
	        if (attrs[key]) {
	          var getAttribute = $parse(attrs[key]);
	          scope.$parent.$watch(getAttribute, function(value) {
	            scope.watchData[key] = value;
	            if (key === 'minDate' || key === 'maxDate') {
	              cache[key] = new Date(value);
	            }
	          });
	          datepickerEl.attr(cameltoDash(key), 'watchData.' + key);

	          // Propagate changes from datepicker to outside
	          if (key === 'datepickerMode') {
	            var setAttribute = getAttribute.assign;
	            scope.$watch('watchData.' + key, function(value, oldvalue) {
	              if (angular.isFunction(setAttribute) && value !== oldvalue) {
	                setAttribute(scope.$parent, value);
	              }
	            });
	          }
	        }
	      });
	      if (attrs.dateDisabled) {
	        datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
	      }

	      if (attrs.showWeeks) {
	        datepickerEl.attr('show-weeks', attrs.showWeeks);
	      }

	      if (attrs.customClass) {
	        datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
	      }

	      function parseDate(viewValue) {
	        if (angular.isNumber(viewValue)) {
	          // presumably timestamp to date object
	          viewValue = new Date(viewValue);
	        }

	        if (!viewValue) {
	          return null;
	        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
	          return viewValue;
	        } else if (angular.isString(viewValue)) {
	          var date = dateParser.parse(viewValue, dateFormat, scope.date);
	          if (isNaN(date)) {
	            return undefined;
	          } else {
	            return date;
	          }
	        } else {
	          return undefined;
	        }
	      }

	      function validator(modelValue, viewValue) {
	        var value = modelValue || viewValue;

	        if (!attrs.ngRequired && !value) {
	          return true;
	        }

	        if (angular.isNumber(value)) {
	          value = new Date(value);
	        }
	        if (!value) {
	          return true;
	        } else if (angular.isDate(value) && !isNaN(value)) {
	          return true;
	        } else if (angular.isString(value)) {
	          var date = dateParser.parse(value, dateFormat);
	          return !isNaN(date);
	        } else {
	          return false;
	        }
	      }

	      if (!isHtml5DateInput) {
	        // Internal API to maintain the correct ng-invalid-[key] class
	        ngModel.$$parserName = 'date';
	        ngModel.$validators.date = validator;
	        ngModel.$parsers.unshift(parseDate);
	        ngModel.$formatters.push(function(value) {
	          scope.date = value;
	          return ngModel.$isEmpty(value) ? value : dateFilter(value, dateFormat);
	        });
	      } else {
	        ngModel.$formatters.push(function(value) {
	          scope.date = value;
	          return value;
	        });
	      }

	      // Inner change
	      scope.dateSelection = function(dt) {
	        if (angular.isDefined(dt)) {
	          scope.date = dt;
	        }
	        var date = scope.date ? dateFilter(scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
	        element.val(date);
	        ngModel.$setViewValue(date);

	        if (closeOnDateSelection) {
	          scope.isOpen = false;
	          element[0].focus();
	        }
	      };

	      // Detect changes in the view from the text box
	      ngModel.$viewChangeListeners.push(function() {
	        scope.date = dateParser.parse(ngModel.$viewValue, dateFormat, scope.date);
	      });

	      var documentClickBind = function(event) {
	        if (scope.isOpen && !(element[0].contains(event.target) || popupEl[0].contains(event.target))) {
	          scope.$apply(function() {
	            scope.isOpen = false;
	          });
	        }
	      };

	      var inputKeydownBind = function(evt) {
	        if (evt.which === 27 && scope.isOpen) {
	          evt.preventDefault();
	          evt.stopPropagation();
	          scope.$apply(function() {
	            scope.isOpen = false;
	          });
	          element[0].focus();
	        } else if (evt.which === 40 && !scope.isOpen) {
	          evt.preventDefault();
	          evt.stopPropagation();
	          scope.$apply(function() {
	            scope.isOpen = true;
	          });
	        }
	      };
	      element.bind('keydown', inputKeydownBind);

	      scope.keydown = function(evt) {
	        if (evt.which === 27) {
	          scope.isOpen = false;
	          element[0].focus();
	        }
	      };

	      scope.$watch('isOpen', function(value) {
	        if (value) {
	          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	          scope.position.top = scope.position.top + element.prop('offsetHeight');

	          $timeout(function() {
	            if (onOpenFocus) {
	              scope.$broadcast('datepicker.focus');
	            }
	            $document.bind('click', documentClickBind);
	          }, 0, false);
	        } else {
	          $document.unbind('click', documentClickBind);
	        }
	      });

	      scope.select = function(date) {
	        if (date === 'today') {
	          var today = new Date();
	          if (angular.isDate(scope.date)) {
	            date = new Date(scope.date);
	            date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
	          } else {
	            date = new Date(today.setHours(0, 0, 0, 0));
	          }
	        }
	        scope.dateSelection(date);
	      };

	      scope.close = function() {
	        scope.isOpen = false;
	        element[0].focus();
	      };

	      var $popup = $compile(popupEl)(scope);
	      // Prevent jQuery cache memory leak (template is now redundant after linking)
	      popupEl.remove();

	      if (appendToBody) {
	        $document.find('body').append($popup);
	      } else {
	        element.after($popup);
	      }

	      scope.$on('$destroy', function() {
	        if (scope.isOpen === true) {
	          if (!$rootScope.$$phase) {
	            scope.$apply(function() {
	              scope.isOpen = false;
	            });
	          }
	        }

	        $popup.remove();
	        element.unbind('keydown', inputKeydownBind);
	        $document.unbind('click', documentClickBind);
	      });
	    }
	  };
	}])

	.directive('datepickerPopupWrap', function() {
	  return {
	    restrict:'EA',
	    replace: true,
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/popup.html';
	    }
	  };
	});

	angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])

	.constant('dropdownConfig', {
	  openClass: 'open'
	})

	.service('dropdownService', ['$document', '$rootScope', function($document, $rootScope) {
	  var openScope = null;

	  this.open = function(dropdownScope) {
	    if (!openScope) {
	      $document.bind('click', closeDropdown);
	      $document.bind('keydown', keybindFilter);
	    }

	    if (openScope && openScope !== dropdownScope) {
	      openScope.isOpen = false;
	    }

	    openScope = dropdownScope;
	  };

	  this.close = function(dropdownScope) {
	    if (openScope === dropdownScope) {
	      openScope = null;
	      $document.unbind('click', closeDropdown);
	      $document.unbind('keydown', keybindFilter);
	    }
	  };

	  var closeDropdown = function(evt) {
	    // This method may still be called during the same mouse event that
	    // unbound this event handler. So check openScope before proceeding.
	    if (!openScope) { return; }

	    if (evt && openScope.getAutoClose() === 'disabled')  { return ; }

	    var toggleElement = openScope.getToggleElement();
	    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
	      return;
	    }

	    var dropdownElement = openScope.getDropdownElement();
	    if (evt && openScope.getAutoClose() === 'outsideClick' &&
	      dropdownElement && dropdownElement[0].contains(evt.target)) {
	      return;
	    }

	    openScope.isOpen = false;

	    if (!$rootScope.$$phase) {
	      openScope.$apply();
	    }
	  };

	  var keybindFilter = function(evt) {
	    if (evt.which === 27) {
	      openScope.focusToggleElement();
	      closeDropdown();
	    } else if (openScope.isKeynavEnabled() && /(38|40)/.test(evt.which) && openScope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      openScope.focusDropdownEntry(evt.which);
	    }
	  };
	}])

	.controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', '$position', '$document', '$compile', '$templateRequest', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate, $position, $document, $compile, $templateRequest) {
	  var self = this,
	    scope = $scope.$new(), // create a child scope so we are not polluting original one
	    templateScope,
	    openClass = dropdownConfig.openClass,
	    getIsOpen,
	    setIsOpen = angular.noop,
	    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
	    appendToBody = false,
	    keynavEnabled = false,
	    selectedOption = null,
	    body = $document.find('body');

	  this.init = function(element) {
	    self.$element = element;

	    if ($attrs.isOpen) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;

	      $scope.$watch(getIsOpen, function(value) {
	        scope.isOpen = !!value;
	      });
	    }

	    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
	    keynavEnabled = angular.isDefined($attrs.keyboardNav);

	    if (appendToBody && self.dropdownMenu) {
	      body.append(self.dropdownMenu);
	      body.addClass('dropdown');
	      element.on('$destroy', function handleDestroyEvent() {
	        self.dropdownMenu.remove();
	      });
	    }
	  };

	  this.toggle = function(open) {
	    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
	  };

	  // Allow other directives to watch status
	  this.isOpen = function() {
	    return scope.isOpen;
	  };

	  scope.getToggleElement = function() {
	    return self.toggleElement;
	  };

	  scope.getAutoClose = function() {
	    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
	  };

	  scope.getElement = function() {
	    return self.$element;
	  };

	  scope.isKeynavEnabled = function() {
	    return keynavEnabled;
	  };

	  scope.focusDropdownEntry = function(keyCode) {
	    var elems = self.dropdownMenu ? //If append to body is used.
	      (angular.element(self.dropdownMenu).find('a')) :
	      (angular.element(self.$element).find('ul').eq(0).find('a'));

	    switch (keyCode) {
	      case (40): {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = 0;
	        } else {
	          self.selectedOption = (self.selectedOption === elems.length -1 ?
	            self.selectedOption :
	            self.selectedOption + 1);
	        }
	        break;
	      }
	      case (38): {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = elems.length - 1;
	        } else {
	          self.selectedOption = self.selectedOption === 0 ?
	            0 : self.selectedOption - 1;
	        }
	        break;
	      }
	    }
	    elems[self.selectedOption].focus();
	  };

	  scope.getDropdownElement = function() {
	    return self.dropdownMenu;
	  };

	  scope.focusToggleElement = function() {
	    if (self.toggleElement) {
	      self.toggleElement[0].focus();
	    }
	  };

	  scope.$watch('isOpen', function(isOpen, wasOpen) {
	    if (appendToBody && self.dropdownMenu) {
	      var pos = $position.positionElements(self.$element, self.dropdownMenu, 'bottom-left', true);
	      var css = {
	        top: pos.top + 'px',
	        display: isOpen ? 'block' : 'none'
	      };

	      var rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
	      if (!rightalign) {
	        css.left = pos.left + 'px';
	        css.right = 'auto';
	      } else {
	        css.left = 'auto';
	        css.right = (window.innerWidth - (pos.left + self.$element.prop('offsetWidth'))) + 'px';
	      }

	      self.dropdownMenu.css(css);
	    }

	    var openContainer = appendToBody ? body : self.$element;

	    $animate[isOpen ? 'addClass' : 'removeClass'](openContainer, openClass).then(function() {
	      if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	        toggleInvoker($scope, { open: !!isOpen });
	      }
	    });

	    if (isOpen) {
	      if (self.dropdownMenuTemplateUrl) {
	        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
	          templateScope = scope.$new();
	          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
	            var newEl = dropdownElement;
	            self.dropdownMenu.replaceWith(newEl);
	            self.dropdownMenu = newEl;
	          });
	        });
	      }

	      scope.focusToggleElement();
	      dropdownService.open(scope);
	    } else {
	      if (self.dropdownMenuTemplateUrl) {
	        if (templateScope) {
	          templateScope.$destroy();
	        }
	        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
	        self.dropdownMenu.replaceWith(newEl);
	        self.dropdownMenu = newEl;
	      }

	      dropdownService.close(scope);
	      self.selectedOption = null;
	    }

	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen($scope, isOpen);
	    }
	  });

	  $scope.$on('$locationChangeSuccess', function() {
	    if (scope.getAutoClose() !== 'disabled') {
	      scope.isOpen = false;
	    }
	  });

	  var offDestroy = $scope.$on('$destroy', function() {
	    scope.$destroy();
	  });
	  scope.$on('$destroy', offDestroy);
	}])

	.directive('dropdown', function() {
	  return {
	    controller: 'DropdownController',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      dropdownCtrl.init( element );
	      element.addClass('dropdown');
	    }
	  };
	})

	.directive('dropdownMenu', function() {
	  return {
	    restrict: 'AC',
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl) {
	        return;
	      }
	      var tplUrl = attrs.templateUrl;
	      if (tplUrl) {
	        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
	      }
	      if (!dropdownCtrl.dropdownMenu) {
	        dropdownCtrl.dropdownMenu = element;
	      }
	    }
	  };
	})

	.directive('keyboardNav', function() {
	  return {
	    restrict: 'A',
	    require: '?^dropdown',
	    link: function (scope, element, attrs, dropdownCtrl) {

	      element.bind('keydown', function(e) {
	        if ([38, 40].indexOf(e.which) !== -1) {
	          e.preventDefault();
	          e.stopPropagation();

	          var elems = dropdownCtrl.dropdownMenu.find('a');

	          switch (e.which) {
	            case (40): { // Down
	              if (!angular.isNumber(dropdownCtrl.selectedOption)) {
	                dropdownCtrl.selectedOption = 0;
	              } else {
	                dropdownCtrl.selectedOption = dropdownCtrl.selectedOption === elems.length -1 ?
	                  dropdownCtrl.selectedOption : dropdownCtrl.selectedOption + 1;
	              }
	              break;
	            }
	            case (38): { // Up
	              if (!angular.isNumber(dropdownCtrl.selectedOption)) {
	                dropdownCtrl.selectedOption = elems.length - 1;
	              } else {
	                dropdownCtrl.selectedOption = dropdownCtrl.selectedOption === 0 ?
	                  0 : dropdownCtrl.selectedOption - 1;
	              }
	              break;
	            }
	          }
	          elems[dropdownCtrl.selectedOption].focus();
	        }
	      });
	    }
	  };
	})

	.directive('dropdownToggle', function() {
	  return {
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl) {
	        return;
	      }

	      element.addClass('dropdown-toggle');

	      dropdownCtrl.toggleElement = element;

	      var toggleDropdown = function(event) {
	        event.preventDefault();

	        if (!element.hasClass('disabled') && !attrs.disabled) {
	          scope.$apply(function() {
	            dropdownCtrl.toggle();
	          });
	        }
	      };

	      element.bind('click', toggleDropdown);

	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function( isOpen ) {
	        element.attr('aria-expanded', !!isOpen);
	      });

	      scope.$on('$destroy', function() {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	});

	angular.module('ui.bootstrap.modal', [])

	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	  .factory('$$stackedMap', function() {
	    return {
	      createNew: function() {
	        var stack = [];

	        return {
	          add: function(key, value) {
	            stack.push({
	              key: key,
	              value: value
	            });
	          },
	          get: function(key) {
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                return stack[i];
	              }
	            }
	          },
	          keys: function() {
	            var keys = [];
	            for (var i = 0; i < stack.length; i++) {
	              keys.push(stack[i].key);
	            }
	            return keys;
	          },
	          top: function() {
	            return stack[stack.length - 1];
	          },
	          remove: function(key) {
	            var idx = -1;
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                idx = i;
	                break;
	              }
	            }
	            return stack.splice(idx, 1)[0];
	          },
	          removeTop: function() {
	            return stack.splice(stack.length - 1, 1)[0];
	          },
	          length: function() {
	            return stack.length;
	          }
	        };
	      }
	    };
	  })

	/**
	 * A helper, internal data structure that stores all references attached to key
	 */
	  .factory('$$multiMap', function() {
	    return {
	      createNew: function() {
	        var map = {};

	        return {
	          entries: function() {
	            return Object.keys(map).map(function(key) {
	              return {
	                key: key,
	                value: map[key]
	              };
	            });
	          },
	          get: function(key) {
	            return map[key];
	          },
	          hasKey: function(key) {
	            return !!map[key];
	          },
	          keys: function() {
	            return Object.keys(map);
	          },
	          put: function(key, value) {
	            if (!map[key]) {
	              map[key] = [];
	            }

	            map[key].push(value);
	          },
	          remove: function(key, value) {
	            var values = map[key];

	            if (!values) {
	              return;
	            }

	            var idx = values.indexOf(value);

	            if (idx !== -1) {
	              values.splice(idx, 1);
	            }

	            if (!values.length) {
	              delete map[key];
	            }
	          }
	        };
	      }
	    };
	  })

	/**
	 * A helper directive for the $modal service. It creates a backdrop element.
	 */
	  .directive('modalBackdrop', [
	           '$animate', '$injector', '$modalStack',
	  function($animate ,  $injector,   $modalStack) {
	    var $animateCss = null;

	    if ($injector.has('$animateCss')) {
	      $animateCss = $injector.get('$animateCss');
	    }

	    return {
	      restrict: 'EA',
	      replace: true,
	      templateUrl: 'template/modal/backdrop.html',
	      compile: function(tElement, tAttrs) {
	        tElement.addClass(tAttrs.backdropClass);
	        return linkFn;
	      }
	    };

	    function linkFn(scope, element, attrs) {
	      if (attrs.modalInClass) {
	        if ($animateCss) {
	          $animateCss(element, {
	            addClass: attrs.modalInClass
	          }).start();
	        } else {
	          $animate.addClass(element, attrs.modalInClass);
	        }

	        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	          var done = setIsAsync();
	          if ($animateCss) {
	            $animateCss(element, {
	              removeClass: attrs.modalInClass
	            }).start().then(done);
	          } else {
	            $animate.removeClass(element, attrs.modalInClass).then(done);
	          }
	        });
	      }
	    }
	  }])

	  .directive('modalWindow', [
	           '$modalStack', '$q', '$animate', '$injector',
	  function($modalStack ,  $q ,  $animate,   $injector) {
	    var $animateCss = null;

	    if ($injector.has('$animateCss')) {
	      $animateCss = $injector.get('$animateCss');
	    }

	    return {
	      restrict: 'EA',
	      scope: {
	        index: '@'
	      },
	      replace: true,
	      transclude: true,
	      templateUrl: function(tElement, tAttrs) {
	        return tAttrs.templateUrl || 'template/modal/window.html';
	      },
	      link: function(scope, element, attrs) {
	        element.addClass(attrs.windowClass || '');
	        scope.size = attrs.size;

	        scope.close = function(evt) {
	          var modal = $modalStack.getTop();
	          if (modal && modal.value.backdrop && modal.value.backdrop !== 'static' && (evt.target === evt.currentTarget)) {
	            evt.preventDefault();
	            evt.stopPropagation();
	            $modalStack.dismiss(modal.key, 'backdrop click');
	          }
	        };

	        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
	        // We can detect that by using this property in the template associated with this directive and then use
	        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
	        scope.$isRendered = true;

	        // Deferred object that will be resolved when this modal is render.
	        var modalRenderDeferObj = $q.defer();
	        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
	        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
	        attrs.$observe('modalRender', function(value) {
	          if (value == 'true') {
	            modalRenderDeferObj.resolve();
	          }
	        });

	        modalRenderDeferObj.promise.then(function() {
	          var animationPromise = null;

	          if (attrs.modalInClass) {
	            if ($animateCss) {
	              animationPromise = $animateCss(element, {
	                addClass: attrs.modalInClass
	              }).start();
	            } else {
	              animationPromise = $animate.addClass(element, attrs.modalInClass);
	            }

	            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	              var done = setIsAsync();
	              if ($animateCss) {
	                $animateCss(element, {
	                  removeClass: attrs.modalInClass
	                }).start().then(done);
	              } else {
	                $animate.removeClass(element, attrs.modalInClass).then(done);
	              }
	            });
	          }


	          $q.when(animationPromise).then(function() {
	            var inputsWithAutofocus = element[0].querySelectorAll('[autofocus]');
	            /**
	             * Auto-focusing of a freshly-opened modal element causes any child elements
	             * with the autofocus attribute to lose focus. This is an issue on touch
	             * based devices which will show and then hide the onscreen keyboard.
	             * Attempts to refocus the autofocus element via JavaScript will not reopen
	             * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	             * the modal element if the modal does not contain an autofocus element.
	             */
	            if (inputsWithAutofocus.length) {
	              inputsWithAutofocus[0].focus();
	            } else {
	              element[0].focus();
	            }
	          });

	          // Notify {@link $modalStack} that modal is rendered.
	          var modal = $modalStack.getTop();
	          if (modal) {
	            $modalStack.modalRendered(modal.key);
	          }
	        });
	      }
	    };
	  }])

	  .directive('modalAnimationClass', [
	    function () {
	      return {
	        compile: function(tElement, tAttrs) {
	          if (tAttrs.modalAnimation) {
	            tElement.addClass(tAttrs.modalAnimationClass);
	          }
	        }
	      };
	    }])

	  .directive('modalTransclude', function() {
	    return {
	      link: function($scope, $element, $attrs, controller, $transclude) {
	        $transclude($scope.$parent, function(clone) {
	          $element.empty();
	          $element.append(clone);
	        });
	      }
	    };
	  })

	  .factory('$modalStack', [
	             '$animate', '$timeout', '$document', '$compile', '$rootScope',
	             '$q',
	             '$injector',
	             '$$multiMap',
	             '$$stackedMap',
	    function($animate ,  $timeout ,  $document ,  $compile ,  $rootScope ,
	              $q,
	              $injector,
	              $$multiMap,
	              $$stackedMap) {
	      var $animateCss = null;

	      if ($injector.has('$animateCss')) {
	        $animateCss = $injector.get('$animateCss');
	      }

	      var OPENED_MODAL_CLASS = 'modal-open';

	      var backdropDomEl, backdropScope;
	      var openedWindows = $$stackedMap.createNew();
	      var openedClasses = $$multiMap.createNew();
	      var $modalStack = {
	        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
	      };

	      //Modal focus behavior
	      var focusableElementList;
	      var focusIndex = 0;
	      var tababbleSelector = 'a[href], area[href], input:not([disabled]), ' +
	        'button:not([disabled]),select:not([disabled]), textarea:not([disabled]), ' +
	        'iframe, object, embed, *[tabindex], *[contenteditable=true]';

	      function backdropIndex() {
	        var topBackdropIndex = -1;
	        var opened = openedWindows.keys();
	        for (var i = 0; i < opened.length; i++) {
	          if (openedWindows.get(opened[i]).value.backdrop) {
	            topBackdropIndex = i;
	          }
	        }
	        return topBackdropIndex;
	      }

	      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
	        if (backdropScope) {
	          backdropScope.index = newBackdropIndex;
	        }
	      });

	      function removeModalWindow(modalInstance, elementToReceiveFocus) {
	        var body = $document.find('body').eq(0);
	        var modalWindow = openedWindows.get(modalInstance).value;

	        //clean up the stack
	        openedWindows.remove(modalInstance);

	        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
	          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
	          openedClasses.remove(modalBodyClass, modalInstance);
	          body.toggleClass(modalBodyClass, openedClasses.hasKey(modalBodyClass));
	        });
	        checkRemoveBackdrop();

	        //move focus to specified element if available, or else to body
	        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
	          elementToReceiveFocus.focus();
	        } else {
	          body.focus();
	        }
	      }

	      function checkRemoveBackdrop() {
	          //remove backdrop if no longer needed
	          if (backdropDomEl && backdropIndex() == -1) {
	            var backdropScopeRef = backdropScope;
	            removeAfterAnimate(backdropDomEl, backdropScope, function() {
	              backdropScopeRef = null;
	            });
	            backdropDomEl = undefined;
	            backdropScope = undefined;
	          }
	      }

	      function removeAfterAnimate(domEl, scope, done) {
	        var asyncDeferred;
	        var asyncPromise = null;
	        var setIsAsync = function() {
	          if (!asyncDeferred) {
	            asyncDeferred = $q.defer();
	            asyncPromise = asyncDeferred.promise;
	          }

	          return function asyncDone() {
	            asyncDeferred.resolve();
	          };
	        };
	        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

	        // Note that it's intentional that asyncPromise might be null.
	        // That's when setIsAsync has not been called during the
	        // NOW_CLOSING_EVENT broadcast.
	        return $q.when(asyncPromise).then(afterAnimating);

	        function afterAnimating() {
	          if (afterAnimating.done) {
	            return;
	          }
	          afterAnimating.done = true;

	          if ($animateCss) {
	            $animateCss(domEl, {
	              event: 'leave'
	            }).start().then(function() {
	              domEl.remove();
	            });
	          } else {
	            $animate.leave(domEl);
	          }
	          scope.$destroy();
	          if (done) {
	            done();
	          }
	        }
	      }

	      $document.bind('keydown', function(evt) {
	        if (evt.isDefaultPrevented()) {
	          return evt;
	        }

	        var modal = openedWindows.top();
	        if (modal && modal.value.keyboard) {
	          switch (evt.which){
	            case 27: {
	              evt.preventDefault();
	              $rootScope.$apply(function() {
	                $modalStack.dismiss(modal.key, 'escape key press');
	              });
	              break;
	            }
	            case 9: {
	              $modalStack.loadFocusElementList(modal);
	              var focusChanged = false;
	              if (evt.shiftKey) {
	                if ($modalStack.isFocusInFirstItem(evt)) {
	                  focusChanged = $modalStack.focusLastFocusableElement();
	                }
	              } else {
	                if ($modalStack.isFocusInLastItem(evt)) {
	                  focusChanged = $modalStack.focusFirstFocusableElement();
	                }
	              }

	              if (focusChanged) {
	                evt.preventDefault();
	                evt.stopPropagation();
	              }
	              break;
	            }
	          }
	        }
	      });

	      $modalStack.open = function(modalInstance, modal) {
	        var modalOpener = $document[0].activeElement,
	          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

	        openedWindows.add(modalInstance, {
	          deferred: modal.deferred,
	          renderDeferred: modal.renderDeferred,
	          modalScope: modal.scope,
	          backdrop: modal.backdrop,
	          keyboard: modal.keyboard,
	          openedClass: modal.openedClass
	        });

	        openedClasses.put(modalBodyClass, modalInstance);

	        var body = $document.find('body').eq(0),
	            currBackdropIndex = backdropIndex();

	        if (currBackdropIndex >= 0 && !backdropDomEl) {
	          backdropScope = $rootScope.$new(true);
	          backdropScope.index = currBackdropIndex;
	          var angularBackgroundDomEl = angular.element('<div modal-backdrop="modal-backdrop"></div>');
	          angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
	          if (modal.animation) {
	            angularBackgroundDomEl.attr('modal-animation', 'true');
	          }
	          backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
	          body.append(backdropDomEl);
	        }

	        var angularDomEl = angular.element('<div modal-window="modal-window"></div>');
	        angularDomEl.attr({
	          'template-url': modal.windowTemplateUrl,
	          'window-class': modal.windowClass,
	          'size': modal.size,
	          'index': openedWindows.length() - 1,
	          'animate': 'animate'
	        }).html(modal.content);
	        if (modal.animation) {
	          angularDomEl.attr('modal-animation', 'true');
	        }

	        var modalDomEl = $compile(angularDomEl)(modal.scope);
	        openedWindows.top().value.modalDomEl = modalDomEl;
	        openedWindows.top().value.modalOpener = modalOpener;
	        body.append(modalDomEl);
	        body.addClass(modalBodyClass);

	        $modalStack.clearFocusListCache();
	      };

	      function broadcastClosing(modalWindow, resultOrReason, closing) {
	          return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
	      }

	      $modalStack.close = function(modalInstance, result) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.resolve(result);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismiss = function(modalInstance, reason) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.reject(reason);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };

	      $modalStack.dismissAll = function(reason) {
	        var topModal = this.getTop();
	        while (topModal && this.dismiss(topModal.key, reason)) {
	          topModal = this.getTop();
	        }
	      };

	      $modalStack.getTop = function() {
	        return openedWindows.top();
	      };

	      $modalStack.modalRendered = function(modalInstance) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow) {
	          modalWindow.value.renderDeferred.resolve();
	        }
	      };

	      $modalStack.focusFirstFocusableElement = function() {
	        if (focusableElementList.length > 0) {
	          focusableElementList[0].focus();
	          return true;
	        }
	        return false;
	      };
	      $modalStack.focusLastFocusableElement = function() {
	        if (focusableElementList.length > 0) {
	          focusableElementList[focusableElementList.length - 1].focus();
	          return true;
	        }
	        return false;
	      };

	      $modalStack.isFocusInFirstItem = function(evt) {
	        if (focusableElementList.length > 0) {
	          return (evt.target || evt.srcElement) == focusableElementList[0];
	        }
	        return false;
	      };

	      $modalStack.isFocusInLastItem = function(evt) {
	        if (focusableElementList.length > 0) {
	          return (evt.target || evt.srcElement) == focusableElementList[focusableElementList.length - 1];
	        }
	        return false;
	      };

	      $modalStack.clearFocusListCache = function() {
	        focusableElementList = [];
	        focusIndex = 0;
	      };

	      $modalStack.loadFocusElementList = function(modalWindow) {
	        if (focusableElementList === undefined || !focusableElementList.length0) {
	          if (modalWindow) {
	            var modalDomE1 = modalWindow.value.modalDomEl;
	            if (modalDomE1 && modalDomE1.length) {
	              focusableElementList = modalDomE1[0].querySelectorAll(tababbleSelector);
	            }
	          }
	        }
	      };

	      return $modalStack;
	    }])

	  .provider('$modal', function() {
	    var $modalProvider = {
	      options: {
	        animation: true,
	        backdrop: true, //can also be false or 'static'
	        keyboard: true
	      },
	      $get: ['$injector', '$rootScope', '$q', '$templateRequest', '$controller', '$modalStack',
	        function ($injector, $rootScope, $q, $templateRequest, $controller, $modalStack) {
	          var $modal = {};

	          function getTemplatePromise(options) {
	            return options.template ? $q.when(options.template) :
	              $templateRequest(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl);
	          }

	          function getResolvePromises(resolves) {
	            var promisesArr = [];
	            angular.forEach(resolves, function(value) {
	              if (angular.isFunction(value) || angular.isArray(value)) {
	                promisesArr.push($q.when($injector.invoke(value)));
	              } else if (angular.isString(value)) {
	                promisesArr.push($q.when($injector.get(value)));
	              } else {
	                promisesArr.push($q.when(value));
	              }
	            });
	            return promisesArr;
	          }

	          var promiseChain = null;
	          $modal.getPromiseChain = function() {
	            return promiseChain;
	          };

	          $modal.open = function (modalOptions) {

	            var modalResultDeferred = $q.defer();
	            var modalOpenedDeferred = $q.defer();
	            var modalRenderDeferred = $q.defer();

	            //prepare an instance of a modal to be injected into controllers and returned to a caller
	            var modalInstance = {
	              result: modalResultDeferred.promise,
	              opened: modalOpenedDeferred.promise,
	              rendered: modalRenderDeferred.promise,
	              close: function (result) {
	                return $modalStack.close(modalInstance, result);
	              },
	              dismiss: function (reason) {
	                return $modalStack.dismiss(modalInstance, reason);
	              }
	            };

	            //merge and clean up options
	            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
	            modalOptions.resolve = modalOptions.resolve || {};

	            //verify options
	            if (!modalOptions.template && !modalOptions.templateUrl) {
	              throw new Error('One of template or templateUrl options is required.');
	            }

	            var templateAndResolvePromise =
	              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));

	            // Wait for the resolution of the existing promise chain.
	            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
	            // Then add to $modalStack and resolve opened.
	            // Finally clean up the chain variable if no subsequent modal has overwritten it.
	            var samePromise;
	            samePromise = promiseChain = $q.all([promiseChain])
	              .then(function() { return templateAndResolvePromise; }, function() { return templateAndResolvePromise; })
	              .then(function resolveSuccess(tplAndVars) {

	                var modalScope = (modalOptions.scope || $rootScope).$new();
	                modalScope.$close = modalInstance.close;
	                modalScope.$dismiss = modalInstance.dismiss;

	                modalScope.$on('$destroy', function() {
	                  if (!modalScope.$$uibDestructionScheduled) {
	                    modalScope.$dismiss('$uibUnscheduledDestruction');
	                  }
	                });

	                var ctrlInstance, ctrlLocals = {};
	                var resolveIter = 1;

	                //controllers
	                if (modalOptions.controller) {
	                  ctrlLocals.$scope = modalScope;
	                  ctrlLocals.$modalInstance = modalInstance;
	                  angular.forEach(modalOptions.resolve, function(value, key) {
	                    ctrlLocals[key] = tplAndVars[resolveIter++];
	                  });

	                  ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
	                  if (modalOptions.controllerAs) {
	                    if (modalOptions.bindToController) {
	                      angular.extend(ctrlInstance, modalScope);
	                    }

	                    modalScope[modalOptions.controllerAs] = ctrlInstance;
	                  }
	                }

	                $modalStack.open(modalInstance, {
	                  scope: modalScope,
	                  deferred: modalResultDeferred,
	                  renderDeferred: modalRenderDeferred,
	                  content: tplAndVars[0],
	                  animation: modalOptions.animation,
	                  backdrop: modalOptions.backdrop,
	                  keyboard: modalOptions.keyboard,
	                  backdropClass: modalOptions.backdropClass,
	                  windowClass: modalOptions.windowClass,
	                  windowTemplateUrl: modalOptions.windowTemplateUrl,
	                  size: modalOptions.size,
	                  openedClass: modalOptions.openedClass
	                });
	                modalOpenedDeferred.resolve(true);

	            }, function resolveError(reason) {
	              modalOpenedDeferred.reject(reason);
	              modalResultDeferred.reject(reason);
	            })
	            .finally(function() {
	              if (promiseChain === samePromise) {
	                promiseChain = null;
	              }
	            });

	            return modalInstance;
	          };

	          return $modal;
	        }]
	    };

	    return $modalProvider;
	  });

	angular.module('ui.bootstrap.pagination', [])
	.controller('PaginationController', ['$scope', '$attrs', '$parse', function($scope, $attrs, $parse) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

	  this.init = function(ngModelCtrl_, config) {
	    ngModelCtrl = ngModelCtrl_;
	    this.config = config;

	    ngModelCtrl.$render = function() {
	      self.render();
	    };

	    if ($attrs.itemsPerPage) {
	      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
	        self.itemsPerPage = parseInt(value, 10);
	        $scope.totalPages = self.calculateTotalPages();
	      });
	    } else {
	      this.itemsPerPage = config.itemsPerPage;
	    }

	    $scope.$watch('totalItems', function() {
	      $scope.totalPages = self.calculateTotalPages();
	    });

	    $scope.$watch('totalPages', function(value) {
	      setNumPages($scope.$parent, value); // Readonly variable

	      if ( $scope.page > value ) {
	        $scope.selectPage(value);
	      } else {
	        ngModelCtrl.$render();
	      }
	    });
	  };

	  this.calculateTotalPages = function() {
	    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
	    return Math.max(totalPages || 0, 1);
	  };

	  this.render = function() {
	    $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
	  };

	  $scope.selectPage = function(page, evt) {
	    if (evt) {
	      evt.preventDefault();
	    }

	    var clickAllowed = !$scope.ngDisabled || !evt;
	    if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
	      if (evt && evt.target) {
	        evt.target.blur();
	      }
	      ngModelCtrl.$setViewValue(page);
	      ngModelCtrl.$render();
	    }
	  };

	  $scope.getText = function(key) {
	    return $scope[key + 'Text'] || self.config[key + 'Text'];
	  };

	  $scope.noPrevious = function() {
	    return $scope.page === 1;
	  };

	  $scope.noNext = function() {
	    return $scope.page === $scope.totalPages;
	  };
	}])

	.constant('paginationConfig', {
	  itemsPerPage: 10,
	  boundaryLinks: false,
	  directionLinks: true,
	  firstText: 'First',
	  previousText: 'Previous',
	  nextText: 'Next',
	  lastText: 'Last',
	  rotate: true
	})

	.directive('pagination', ['$parse', 'paginationConfig', function($parse, paginationConfig) {
	  return {
	    restrict: 'EA',
	    scope: {
	      totalItems: '=',
	      firstText: '@',
	      previousText: '@',
	      nextText: '@',
	      lastText: '@',
	      ngDisabled:'='
	    },
	    require: ['pagination', '?ngModel'],
	    controller: 'PaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/pagination/pagination.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }

	      // Setup configuration parameters
	      var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
	          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
	      scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
	      scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;

	      paginationCtrl.init(ngModelCtrl, paginationConfig);

	      if (attrs.maxSize) {
	        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
	          maxSize = parseInt(value, 10);
	          paginationCtrl.render();
	        });
	      }

	      // Create page object used in template
	      function makePage(number, text, isActive) {
	        return {
	          number: number,
	          text: text,
	          active: isActive
	        };
	      }

	      function getPages(currentPage, totalPages) {
	        var pages = [];

	        // Default page limits
	        var startPage = 1, endPage = totalPages;
	        var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;

	        // recompute if maxSize
	        if (isMaxSized) {
	          if (rotate) {
	            // Current page is displayed in the middle of the visible ones
	            startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
	            endPage   = startPage + maxSize - 1;

	            // Adjust if limit is exceeded
	            if (endPage > totalPages) {
	              endPage   = totalPages;
	              startPage = endPage - maxSize + 1;
	            }
	          } else {
	            // Visible pages are paginated with maxSize
	            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

	            // Adjust last page if limit is exceeded
	            endPage = Math.min(startPage + maxSize - 1, totalPages);
	          }
	        }

	        // Add page number links
	        for (var number = startPage; number <= endPage; number++) {
	          var page = makePage(number, number, number === currentPage);
	          pages.push(page);
	        }

	        // Add links to move between page sets
	        if (isMaxSized && ! rotate) {
	          if (startPage > 1) {
	            var previousPageSet = makePage(startPage - 1, '...', false);
	            pages.unshift(previousPageSet);
	          }

	          if (endPage < totalPages) {
	            var nextPageSet = makePage(endPage + 1, '...', false);
	            pages.push(nextPageSet);
	          }
	        }

	        return pages;
	      }

	      var originalRender = paginationCtrl.render;
	      paginationCtrl.render = function() {
	        originalRender();
	        if (scope.page > 0 && scope.page <= scope.totalPages) {
	          scope.pages = getPages(scope.page, scope.totalPages);
	        }
	      };
	    }
	  };
	}])

	.constant('pagerConfig', {
	  itemsPerPage: 10,
	  previousText: '« Previous',
	  nextText: 'Next »',
	  align: true
	})

	.directive('pager', ['pagerConfig', function(pagerConfig) {
	  return {
	    restrict: 'EA',
	    scope: {
	      totalItems: '=',
	      previousText: '@',
	      nextText: '@',
	      ngDisabled: '='
	    },
	    require: ['pager', '?ngModel'],
	    controller: 'PaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/pagination/pager.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }

	      scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
	      paginationCtrl.init(ngModelCtrl, pagerConfig);
	    }
	  };
	}]);

	/**
	 * The following features are still outstanding: animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, html tooltips, and selector delegation.
	 */
	angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])

	/**
	 * The $tooltip service creates tooltip- and popover-like directives as well as
	 * houses global options for them.
	 */
	.provider('$tooltip', function() {
	  // The default options tooltip and popover.
	  var defaultOptions = {
	    placement: 'top',
	    animation: true,
	    popupDelay: 0,
	    useContentExp: false
	  };

	  // Default hide triggers for each show trigger
	  var triggerMap = {
	    'mouseenter': 'mouseleave',
	    'click': 'click',
	    'focus': 'blur',
	    'none': ''
	  };

	  // The options specified to the provider globally.
	  var globalOptions = {};

	  /**
	   * `options({})` allows global configuration of all tooltips in the
	   * application.
	   *
	   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
	   *     // place tooltips left instead of top by default
	   *     $tooltipProvider.options( { placement: 'left' } );
	   *   });
	   */
		this.options = function(value) {
			angular.extend(globalOptions, value);
		};

	  /**
	   * This allows you to extend the set of trigger mappings available. E.g.:
	   *
	   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
	   */
	  this.setTriggers = function setTriggers(triggers) {
	    angular.extend(triggerMap, triggers);
	  };

	  /**
	   * This is a helper function for translating camel-case to snake-case.
	   */
	  function snake_case(name) {
	    var regexp = /[A-Z]/g;
	    var separator = '-';
	    return name.replace(regexp, function(letter, pos) {
	      return (pos ? separator : '') + letter.toLowerCase();
	    });
	  }

	  /**
	   * Returns the actual instance of the $tooltip service.
	   * TODO support multiple triggers
	   */
	  this.$get = ['$window', '$compile', '$timeout', '$document', '$position', '$interpolate', '$rootScope', '$parse', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse) {
	    return function $tooltip(type, prefix, defaultTriggerShow, options) {
	      options = angular.extend({}, defaultOptions, globalOptions, options);

	      /**
	       * Returns an object of show and hide triggers.
	       *
	       * If a trigger is supplied,
	       * it is used to show the tooltip; otherwise, it will use the `trigger`
	       * option passed to the `$tooltipProvider.options` method; else it will
	       * default to the trigger supplied to this directive factory.
	       *
	       * The hide trigger is based on the show trigger. If the `trigger` option
	       * was passed to the `$tooltipProvider.options` method, it will use the
	       * mapped trigger from `triggerMap` or the passed trigger if the map is
	       * undefined; otherwise, it uses the `triggerMap` value of the show
	       * trigger; else it will just use the show trigger.
	       */
	      function getTriggers(trigger) {
	        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
	        var hide = show.map(function(trigger) {
	          return triggerMap[trigger] || trigger;
	        });
	        return {
	          show: show,
	          hide: hide
	        };
	      }

	      var directiveName = snake_case(type);

	      var startSym = $interpolate.startSymbol();
	      var endSym = $interpolate.endSymbol();
	      var template =
	        '<div '+ directiveName +'-popup '+
	          'title="'+startSym+'title'+endSym+'" '+
	          (options.useContentExp ?
	            'content-exp="contentExp()" ' :
	            'content="'+startSym+'content'+endSym+'" ') +
	          'placement="'+startSym+'placement'+endSym+'" '+
	          'popup-class="'+startSym+'popupClass'+endSym+'" '+
	          'animation="animation" '+
	          'is-open="isOpen"'+
	          'origin-scope="origScope" '+
	          '>'+
	        '</div>';

	      return {
	        restrict: 'EA',
	        compile: function(tElem, tAttrs) {
	          var tooltipLinker = $compile( template );

	          return function link(scope, element, attrs, tooltipCtrl) {
	            var tooltip;
	            var tooltipLinkedScope;
	            var transitionTimeout;
	            var popupTimeout;
	            var positionTimeout;
	            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
	            var triggers = getTriggers(undefined);
	            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
	            var ttScope = scope.$new(true);
	            var repositionScheduled = false;
	            var isOpenExp = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;

	            var positionTooltip = function() {
	              if (!tooltip) { return; }

	              if (!positionTimeout) {
	                positionTimeout = $timeout(function() {
	                  // Reset the positioning and box size for correct width and height values.
	                  tooltip.css({ top: 0, left: 0, width: 'auto', height: 'auto' });

	                  var ttBox = $position.position(tooltip);
	                  var ttCss = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
	                  ttCss.top += 'px';
	                  ttCss.left += 'px';

	                  ttCss.width = ttBox.width + 'px';
	                  ttCss.height = ttBox.height + 'px';

	                  // Now set the calculated positioning and size.
	                  tooltip.css(ttCss);

	                  positionTimeout = null;

	                }, 0, false);
	              }
	            };

	            // Set up the correct scope to allow transclusion later
	            ttScope.origScope = scope;

	            // By default, the tooltip is not open.
	            // TODO add ability to start tooltip opened
	            ttScope.isOpen = false;

	            function toggleTooltipBind() {
	              if (!ttScope.isOpen) {
	                showTooltipBind();
	              } else {
	                hideTooltipBind();
	              }
	            }

	            // Show the tooltip with delay if specified, otherwise show it immediately
	            function showTooltipBind() {
	              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
	                return;
	              }

	              prepareTooltip();

	              if (ttScope.popupDelay) {
	                // Do nothing if the tooltip was already scheduled to pop-up.
	                // This happens if show is triggered multiple times before any hide is triggered.
	                if (!popupTimeout) {
	                  popupTimeout = $timeout(show, ttScope.popupDelay, false);
	                }
	              } else {
	                show();
	              }
	            }

	            function hideTooltipBind () {
	              hide();
	              if (!$rootScope.$$phase) {
	                $rootScope.$digest();
	              }
	            }

	            // Show the tooltip popup element.
	            function show() {
	              popupTimeout = null;

	              // If there is a pending remove transition, we must cancel it, lest the
	              // tooltip be mysteriously removed.
	              if (transitionTimeout) {
	                $timeout.cancel(transitionTimeout);
	                transitionTimeout = null;
	              }

	              // Don't show empty tooltips.
	              if (!(options.useContentExp ? ttScope.contentExp() : ttScope.content)) {
	                return angular.noop;
	              }

	              createTooltip();

	              // And show the tooltip.
	              ttScope.isOpen = true;
	              if (isOpenExp) {
	                isOpenExp.assign(ttScope.origScope, ttScope.isOpen);
	              }

	              if (!$rootScope.$$phase) {
	                ttScope.$apply(); // digest required as $apply is not called
	              }

	              tooltip.css({ display: 'block' });

	              positionTooltip();
	            }

	            // Hide the tooltip popup element.
	            function hide() {
	              // First things first: we don't show it anymore.
	              ttScope.isOpen = false;
	              if (isOpenExp) {
	                isOpenExp.assign(ttScope.origScope, ttScope.isOpen);
	              }

	              //if tooltip is going to be shown after delay, we must cancel this
	              $timeout.cancel(popupTimeout);
	              popupTimeout = null;

	              $timeout.cancel(positionTimeout);
	              positionTimeout = null;

	              // And now we remove it from the DOM. However, if we have animation, we
	              // need to wait for it to expire beforehand.
	              // FIXME: this is a placeholder for a port of the transitions library.
	              if (ttScope.animation) {
	                if (!transitionTimeout) {
	                  transitionTimeout = $timeout(removeTooltip, 500);
	                }
	              } else {
	                removeTooltip();
	              }
	            }

	            function createTooltip() {
	              // There can only be one tooltip element per directive shown at once.
	              if (tooltip) {
	                removeTooltip();
	              }
	              tooltipLinkedScope = ttScope.$new();
	              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
	                if (appendToBody) {
	                  $document.find('body').append(tooltip);
	                } else {
	                  element.after(tooltip);
	                }
	              });

	              if (options.useContentExp) {
	                tooltipLinkedScope.$watch('contentExp()', function(val) {
	                  if (!val && ttScope.isOpen) {
	                    hide();
	                  }
	                });

	                tooltipLinkedScope.$watch(function() {
	                  if (!repositionScheduled) {
	                    repositionScheduled = true;
	                    tooltipLinkedScope.$$postDigest(function() {
	                      repositionScheduled = false;
	                      if (ttScope.isOpen) {
	                        positionTooltip();
	                      }
	                    });
	                  }
	                });

	              }
	            }

	            function removeTooltip() {
	              transitionTimeout = null;
	              if (tooltip) {
	                tooltip.remove();
	                tooltip = null;
	              }
	              if (tooltipLinkedScope) {
	                tooltipLinkedScope.$destroy();
	                tooltipLinkedScope = null;
	              }
	            }

	            function prepareTooltip() {
	              prepPopupClass();
	              prepPlacement();
	              prepPopupDelay();
	            }

	            ttScope.contentExp = function() {
	              return scope.$eval(attrs[type]);
	            };

	            /**
	             * Observe the relevant attributes.
	             */
	            if (!options.useContentExp) {
	              attrs.$observe(type, function(val) {
	                ttScope.content = val;

	                if (!val && ttScope.isOpen) {
	                  hide();
	                } else {
	                  positionTooltip();
	                }
	              });
	            }

	            attrs.$observe('disabled', function(val) {
	              if (popupTimeout && val) {
	                $timeout.cancel(popupTimeout);
	                popupTimeout = null;
	              }

	              if (val && ttScope.isOpen) {
	                hide();
	              }
	            });

	            attrs.$observe(prefix + 'Title', function(val) {
	              ttScope.title = val;
	              positionTooltip();
	            });

	            attrs.$observe(prefix + 'Placement', function() {
	              if (ttScope.isOpen) {
	                prepPlacement();
	                positionTooltip();
	              }
	            });

	            if (isOpenExp) {
	              scope.$watch(isOpenExp, function(val) {
	                if (val !== ttScope.isOpen) {
	                  toggleTooltipBind();
	                }
	              });
	            }

	            function prepPopupClass() {
	              ttScope.popupClass = attrs[prefix + 'Class'];
	            }

	            function prepPlacement() {
	              var val = attrs[prefix + 'Placement'];
	              ttScope.placement = angular.isDefined(val) ? val : options.placement;
	            }

	            function prepPopupDelay() {
	              var val = attrs[prefix + 'PopupDelay'];
	              var delay = parseInt(val, 10);
	              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
	            }

	            var unregisterTriggers = function() {
	              triggers.show.forEach(function(trigger) {
	                element.unbind(trigger, showTooltipBind);
	              });
	              triggers.hide.forEach(function(trigger) {
	                element.unbind(trigger, hideTooltipBind);
	              });
	            };

	            function prepTriggers() {
	              var val = attrs[prefix + 'Trigger'];
	              unregisterTriggers();

	              triggers = getTriggers(val);

	              if (triggers.show !== 'none') {
	                triggers.show.forEach(function(trigger, idx) {
	                  // Using raw addEventListener due to jqLite/jQuery bug - #4060
	                  if (trigger === triggers.hide[idx]) {
	                    element[0].addEventListener(trigger, toggleTooltipBind);
	                  } else if (trigger) {
	                    element[0].addEventListener(trigger, showTooltipBind);
	                    element[0].addEventListener(triggers.hide[idx], hideTooltipBind);
	                  }
	                });
	              }
	            }
	            prepTriggers();

	            var animation = scope.$eval(attrs[prefix + 'Animation']);
	            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

	            var appendToBodyVal = scope.$eval(attrs[prefix + 'AppendToBody']);
	            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

	            // if a tooltip is attached to <body> we need to remove it on
	            // location change as its parent scope will probably not be destroyed
	            // by the change.
	            if (appendToBody) {
	              scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
	                if (ttScope.isOpen) {
	                  hide();
	                }
	              });
	            }

	            // Make sure tooltip is destroyed and removed.
	            scope.$on('$destroy', function onDestroyTooltip() {
	              $timeout.cancel(transitionTimeout);
	              $timeout.cancel(popupTimeout);
	              $timeout.cancel(positionTimeout);
	              unregisterTriggers();
	              removeTooltip();
	              ttScope = null;
	            });
	          };
	        }
	      };
	    };
	  }];
	})

	// This is mostly ngInclude code but with a custom scope
	.directive('tooltipTemplateTransclude', [
	         '$animate', '$sce', '$compile', '$templateRequest',
	function ($animate ,  $sce ,  $compile ,  $templateRequest) {
	  return {
	    link: function(scope, elem, attrs) {
	      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

	      var changeCounter = 0,
	        currentScope,
	        previousElement,
	        currentElement;

	      var cleanupLastIncludeContent = function() {
	        if (previousElement) {
	          previousElement.remove();
	          previousElement = null;
	        }
	        if (currentScope) {
	          currentScope.$destroy();
	          currentScope = null;
	        }
	        if (currentElement) {
	          $animate.leave(currentElement).then(function() {
	            previousElement = null;
	          });
	          previousElement = currentElement;
	          currentElement = null;
	        }
	      };

	      scope.$watch($sce.parseAsResourceUrl(attrs.tooltipTemplateTransclude), function(src) {
	        var thisChangeId = ++changeCounter;

	        if (src) {
	          //set the 2nd param to true to ignore the template request error so that the inner
	          //contents and scope can be cleaned up.
	          $templateRequest(src, true).then(function(response) {
	            if (thisChangeId !== changeCounter) { return; }
	            var newScope = origScope.$new();
	            var template = response;

	            var clone = $compile(template)(newScope, function(clone) {
	              cleanupLastIncludeContent();
	              $animate.enter(clone, elem);
	            });

	            currentScope = newScope;
	            currentElement = clone;

	            currentScope.$emit('$includeContentLoaded', src);
	          }, function() {
	            if (thisChangeId === changeCounter) {
	              cleanupLastIncludeContent();
	              scope.$emit('$includeContentError', src);
	            }
	          });
	          scope.$emit('$includeContentRequested', src);
	        } else {
	          cleanupLastIncludeContent();
	        }
	      });

	      scope.$on('$destroy', cleanupLastIncludeContent);
	    }
	  };
	}])

	/**
	 * Note that it's intentional that these classes are *not* applied through $animate.
	 * They must not be animated as they're expected to be present on the tooltip on
	 * initialization.
	 */
	.directive('tooltipClasses', function() {
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	      if (scope.placement) {
	        element.addClass(scope.placement);
	      }
	      if (scope.popupClass) {
	        element.addClass(scope.popupClass);
	      }
	      if (scope.animation()) {
	        element.addClass(attrs.tooltipAnimationClass);
	      }
	    }
	  };
	})

	.directive('tooltipPopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-popup.html'
	  };
	})

	.directive('tooltip', [ '$tooltip', function($tooltip) {
	  return $tooltip('tooltip', 'tooltip', 'mouseenter');
	}])

	.directive('tooltipTemplatePopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'template/tooltip/tooltip-template-popup.html'
	  };
	})

	.directive('tooltipTemplate', ['$tooltip', function($tooltip) {
	  return $tooltip('tooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])

	.directive('tooltipHtmlPopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-html-popup.html'
	  };
	})

	.directive('tooltipHtml', ['$tooltip', function($tooltip) {
	  return $tooltip('tooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])

	/*
	Deprecated
	*/
	.directive('tooltipHtmlUnsafePopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
	  };
	})

	.value('tooltipHtmlUnsafeSuppressDeprecated', false)
	.directive('tooltipHtmlUnsafe', [
	          '$tooltip', 'tooltipHtmlUnsafeSuppressDeprecated', '$log',
	function($tooltip ,  tooltipHtmlUnsafeSuppressDeprecated ,  $log) {
	  if (!tooltipHtmlUnsafeSuppressDeprecated) {
	    $log.warn('tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead.');
	  }
	  return $tooltip('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
	}]);

	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	angular.module( 'ui.bootstrap.popover', ['ui.bootstrap.tooltip'])

	.directive('popoverTemplatePopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { title: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'template/popover/popover-template.html'
	  };
	})

	.directive('popoverTemplate', ['$tooltip', function($tooltip) {
	  return $tooltip('popoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('popoverHtmlPopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { contentExp: '&', title: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/popover/popover-html.html'
	  };
	})

	.directive('popoverHtml', ['$tooltip', function($tooltip) {
	  return $tooltip( 'popoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}])

	.directive('popoverPopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { title: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/popover/popover.html'
	  };
	})

	.directive('popover', ['$tooltip', function($tooltip) {
	  return $tooltip( 'popover', 'popover', 'click' );
	}]);

	angular.module('ui.bootstrap.progressbar', [])

	.constant('progressConfig', {
	  animate: true,
	  max: 100
	})

	.value('$progressSuppressWarning', false)

	.controller('ProgressController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {
	  var self = this,
	      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

	  this.bars = [];
	  $scope.max = angular.isDefined($scope.max) ? $scope.max : progressConfig.max;

	  this.addBar = function(bar, element) {
	    if (!animate) {
	      element.css({'transition': 'none'});
	    }

	    this.bars.push(bar);

	    bar.max = $scope.max;

	    bar.$watch('value', function(value) {
	      bar.recalculatePercentage();
	    });

	    bar.recalculatePercentage = function() {
	      bar.percent = +(100 * bar.value / bar.max).toFixed(2);

	      var totalPercentage = self.bars.reduce(function(total, bar) {
	        return total + bar.percent;
	      }, 0);

	      if (totalPercentage > 100) {
	        bar.percent -= totalPercentage - 100;
	      }
	    };

	    bar.$on('$destroy', function() {
	      element = null;
	      self.removeBar(bar);
	    });
	  };

	  this.removeBar = function(bar) {
	      this.bars.splice(this.bars.indexOf(bar), 1);
	  };

	  $scope.$watch('max', function(max) {
	    self.bars.forEach(function(bar) {
	      bar.max = $scope.max;
	      bar.recalculatePercentage();
	    });
	  });
	}])

	.directive('uibProgress', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    transclude: true,
	    controller: 'ProgressController',
	    require: 'uibProgress',
	    scope: {
	      max: '=?'
	    },
	    templateUrl: 'template/progressbar/progress.html'
	  };
	})

	.directive('progress', ['$log', '$progressSuppressWarning', function($log, $progressSuppressWarning) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    transclude: true,
	    controller: 'ProgressController',
	    require: 'progress',
	    scope: {
	      max: '=?'
	    },
	    templateUrl: 'template/progressbar/progress.html',
	    link: function() {
	      if ($progressSuppressWarning) {
	        $log.warn('progress is now deprecated. Use uib-progress instead');
	      }
	    }
	  };
	}])

	.directive('uibBar', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    transclude: true,
	    require: '^uibProgress',
	    scope: {
	      value: '=',
	      type: '@'
	    },
	    templateUrl: 'template/progressbar/bar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, element);
	    }
	  };
	})

	.directive('bar', ['$log', '$progressSuppressWarning', function($log, $progressSuppressWarning) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    transclude: true,
	    require: '^progress',
	    scope: {
	      value: '=',
	      type: '@'
	    },
	    templateUrl: 'template/progressbar/bar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      if ($progressSuppressWarning) {
	        $log.warn('bar is now deprecated. Use uib-bar instead');
	      }
	      progressCtrl.addBar(scope, element);
	    }
	  };
	}])

	.directive('progressbar', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    transclude: true,
	    controller: 'ProgressController',
	    scope: {
	      value: '=',
	      max: '=?',
	      type: '@'
	    },
	    templateUrl: 'template/progressbar/progressbar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, angular.element(element.children()[0]));
	    }
	  };
	});

	angular.module('ui.bootstrap.rating', [])

	.constant('ratingConfig', {
	  max: 5,
	  stateOn: null,
	  stateOff: null,
	  titles : ['one', 'two', 'three', 'four', 'five']
	})

	.controller('RatingController', ['$scope', '$attrs', 'ratingConfig', function($scope, $attrs, ratingConfig) {
	  var ngModelCtrl  = { $setViewValue: angular.noop };

	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.push(function(value) {
	      if (angular.isNumber(value) && value << 0 !== value) {
	        value = Math.round(value);
	      }
	      return value;
	    });

	    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
	    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
	    var tmpTitles = angular.isDefined($attrs.titles)  ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles ;    
	    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
	      tmpTitles : ratingConfig.titles;
	    
	    var ratingStates = angular.isDefined($attrs.ratingStates) ?
	      $scope.$parent.$eval($attrs.ratingStates) :
	      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
	    $scope.range = this.buildTemplateObjects(ratingStates);
	  };

	  this.buildTemplateObjects = function(states) {
	    for (var i = 0, n = states.length; i < n; i++) {
	      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
	    }
	    return states;
	  };
	  
	  this.getTitle = function(index) {
	    if (index >= this.titles.length) {
	      return index + 1;
	    } else {
	      return this.titles[index];
	    }
	  };
	  
	  $scope.rate = function(value) {
	    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
	      ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue === value ? 0 : value);
	      ngModelCtrl.$render();
	    }
	  };

	  $scope.enter = function(value) {
	    if (!$scope.readonly) {
	      $scope.value = value;
	    }
	    $scope.onHover({value: value});
	  };

	  $scope.reset = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.onLeave();
	  };

	  $scope.onKeydown = function(evt) {
	    if (/(37|38|39|40)/.test(evt.which)) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
	    }
	  };

	  this.render = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	  };
	}])

	.directive('rating', function() {
	  return {
	    restrict: 'EA',
	    require: ['rating', 'ngModel'],
	    scope: {
	      readonly: '=?',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'RatingController',
	    templateUrl: 'template/rating/rating.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      ratingCtrl.init( ngModelCtrl );
	    }
	  };
	});


	/**
	 * @ngdoc overview
	 * @name ui.bootstrap.tabs
	 *
	 * @description
	 * AngularJS version of the tabs directive.
	 */

	angular.module('ui.bootstrap.tabs', [])

	.controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
	  var ctrl = this,
	      tabs = ctrl.tabs = $scope.tabs = [];

	  ctrl.select = function(selectedTab) {
	    angular.forEach(tabs, function(tab) {
	      if (tab.active && tab !== selectedTab) {
	        tab.active = false;
	        tab.onDeselect();
	        selectedTab.selectCalled = false;
	      }
	    });
	    selectedTab.active = true;
	    // only call select if it has not already been called
	    if (!selectedTab.selectCalled) {
	      selectedTab.onSelect();
	      selectedTab.selectCalled = true;
	    }
	  };

	  ctrl.addTab = function addTab(tab) {
	    tabs.push(tab);
	    // we can't run the select function on the first tab
	    // since that would select it twice
	    if (tabs.length === 1 && tab.active !== false) {
	      tab.active = true;
	    } else if (tab.active) {
	      ctrl.select(tab);
	    } else {
	      tab.active = false;
	    }
	  };

	  ctrl.removeTab = function removeTab(tab) {
	    var index = tabs.indexOf(tab);
	    //Select a new tab if the tab to be removed is selected and not destroyed
	    if (tab.active && tabs.length > 1 && !destroyed) {
	      //If this is the last tab, select the previous tab. else, the next tab.
	      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
	      ctrl.select(tabs[newActiveIndex]);
	    }
	    tabs.splice(index, 1);
	  };

	  var destroyed;
	  $scope.$on('$destroy', function() {
	    destroyed = true;
	  });
	}])

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabset
	 * @restrict EA
	 *
	 * @description
	 * Tabset is the outer container for the tabs directive
	 *
	 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
	 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <tabset>
	      <tab heading="Tab 1"><b>First</b> Content!</tab>
	      <tab heading="Tab 2"><i>Second</i> Content!</tab>
	    </tabset>
	    <hr />
	    <tabset vertical="true">
	      <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
	      <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
	    </tabset>
	    <tabset justified="true">
	      <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
	      <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
	    </tabset>
	  </file>
	</example>
	 */
	.directive('tabset', function() {
	  return {
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@'
	    },
	    controller: 'TabsetController',
	    templateUrl: 'template/tabs/tabset.html',
	    link: function(scope, element, attrs) {
	      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
	      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
	    }
	  };
	})

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tab
	 * @restrict EA
	 *
	 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
	 * @param {string=} select An expression to evaluate when the tab is selected.
	 * @param {boolean=} active A binding, telling whether or not this tab is selected.
	 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
	 *
	 * @description
	 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <div ng-controller="TabsDemoCtrl">
	      <button class="btn btn-small" ng-click="items[0].active = true">
	        Select item 1, using active binding
	      </button>
	      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
	        Enable/disable item 2, using disabled binding
	      </button>
	      <br />
	      <tabset>
	        <tab heading="Tab 1">First Tab</tab>
	        <tab select="alertMe()">
	          <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
	          Second Tab, with alert callback and html heading!
	        </tab>
	        <tab ng-repeat="item in items"
	          heading="{{item.title}}"
	          disabled="item.disabled"
	          active="item.active">
	          {{item.content}}
	        </tab>
	      </tabset>
	    </div>
	  </file>
	  <file name="script.js">
	    function TabsDemoCtrl($scope) {
	      $scope.items = [
	        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
	        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
	      ];

	      $scope.alertMe = function() {
	        setTimeout(function() {
	          alert("You've selected the alert tab!");
	        });
	      };
	    };
	  </file>
	</example>
	 */

	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabHeading
	 * @restrict EA
	 *
	 * @description
	 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <tabset>
	      <tab>
	        <tab-heading><b>HTML</b> in my titles?!</tab-heading>
	        And some content, too!
	      </tab>
	      <tab>
	        <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
	        That's right.
	      </tab>
	    </tabset>
	  </file>
	</example>
	 */
	.directive('tab', ['$parse', '$log', function($parse, $log) {
	  return {
	    require: '^tabset',
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/tabs/tab.html',
	    transclude: true,
	    scope: {
	      active: '=?',
	      heading: '@',
	      onSelect: '&select', //This callback is called in contentHeadingTransclude
	                          //once it inserts the tab's content into the dom
	      onDeselect: '&deselect'
	    },
	    controller: function() {
	      //Empty controller so other directives can require being 'under' a tab
	    },
	    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
	      scope.$watch('active', function(active) {
	        if (active) {
	          tabsetCtrl.select(scope);
	        }
	      });

	      scope.disabled = false;
	      if (attrs.disable) {
	        scope.$parent.$watch($parse(attrs.disable), function(value) {
	          scope.disabled = !! value;
	        });
	      }

	      // Deprecation support of "disabled" parameter
	      // fix(tab): IE9 disabled attr renders grey text on enabled tab #2677
	      // This code is duplicated from the lines above to make it easy to remove once
	      // the feature has been completely deprecated
	      if (attrs.disabled) {
	        $log.warn('Use of "disabled" attribute has been deprecated, please use "disable"');
	        scope.$parent.$watch($parse(attrs.disabled), function(value) {
	          scope.disabled = !! value;
	        });
	      }

	      scope.select = function() {
	        if (!scope.disabled) {
	          scope.active = true;
	        }
	      };

	      tabsetCtrl.addTab(scope);
	      scope.$on('$destroy', function() {
	        tabsetCtrl.removeTab(scope);
	      });

	      //We need to transclude later, once the content container is ready.
	      //when this link happens, we're inside a tab heading.
	      scope.$transcludeFn = transclude;
	    }
	  };
	}])

	.directive('tabHeadingTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^tab',
	    link: function(scope, elm, attrs, tabCtrl) {
	      scope.$watch('headingElement', function updateHeadingElement(heading) {
	        if (heading) {
	          elm.html('');
	          elm.append(heading);
	        }
	      });
	    }
	  };
	})

	.directive('tabContentTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^tabset',
	    link: function(scope, elm, attrs) {
	      var tab = scope.$eval(attrs.tabContentTransclude);

	      //Now our tab is ready to be transcluded: both the tab heading area
	      //and the tab content area are loaded.  Transclude 'em both.
	      tab.$transcludeFn(tab.$parent, function(contents) {
	        angular.forEach(contents, function(node) {
	          if (isTabHeading(node)) {
	            //Let tabHeadingTransclude know.
	            tab.headingElement = node;
	          } else {
	            elm.append(node);
	          }
	        });
	      });
	    }
	  };

	  function isTabHeading(node) {
	    return node.tagName && (
	      node.hasAttribute('tab-heading') ||
	      node.hasAttribute('data-tab-heading') ||
	      node.hasAttribute('x-tab-heading') ||
	      node.tagName.toLowerCase() === 'tab-heading' ||
	      node.tagName.toLowerCase() === 'data-tab-heading' ||
	      node.tagName.toLowerCase() === 'x-tab-heading'
	    );
	  }
	});

	angular.module('ui.bootstrap.timepicker', [])

	.constant('timepickerConfig', {
	  hourStep: 1,
	  minuteStep: 1,
	  showMeridian: true,
	  meridians: null,
	  readonlyInput: false,
	  mousewheel: true,
	  arrowkeys: true,
	  showSpinners: true
	})

	.controller('TimepickerController', ['$scope', '$attrs', '$parse', '$log', '$locale', 'timepickerConfig', function($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
	  var selected = new Date(),
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;

	  this.init = function(ngModelCtrl_, inputs) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;

	    ngModelCtrl.$formatters.unshift(function(modelValue) {
	      return modelValue ? new Date(modelValue) : null;
	    });

	    var hoursInputEl = inputs.eq(0),
	        minutesInputEl = inputs.eq(1);

	    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
	    if (mousewheel) {
	      this.setupMousewheelEvents(hoursInputEl, minutesInputEl);
	    }

	    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
	    if (arrowkeys) {
	      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl);
	    }

	    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
	    this.setupInputEvents(hoursInputEl, minutesInputEl);
	  };

	  var hourStep = timepickerConfig.hourStep;
	  if ($attrs.hourStep) {
	    $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
	      hourStep = parseInt(value, 10);
	    });
	  }

	  var minuteStep = timepickerConfig.minuteStep;
	  if ($attrs.minuteStep) {
	    $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
	      minuteStep = parseInt(value, 10);
	    });
	  }

	  var min;
	  $scope.$parent.$watch($parse($attrs.min), function(value) {
	    var dt = new Date(value);
	    min = isNaN(dt) ? undefined : dt;
	  });

	  var max;
	  $scope.$parent.$watch($parse($attrs.max), function(value) {
	    var dt = new Date(value);
	    max = isNaN(dt) ? undefined : dt;
	  });

	  $scope.noIncrementHours = function() {
	    var incrementedSelected = addMinutes(selected, hourStep * 60);
	    return incrementedSelected > max ||
	      (incrementedSelected < selected && incrementedSelected < min);
	  };

	  $scope.noDecrementHours = function() {
	    var decrementedSelected = addMinutes(selected, -hourStep * 60);
	    return decrementedSelected < min ||
	      (decrementedSelected > selected && decrementedSelected > max);
	  };

	  $scope.noIncrementMinutes = function() {
	    var incrementedSelected = addMinutes(selected, minuteStep);
	    return incrementedSelected > max ||
	      (incrementedSelected < selected && incrementedSelected < min);
	  };

	  $scope.noDecrementMinutes = function() {
	    var decrementedSelected = addMinutes(selected, -minuteStep);
	    return decrementedSelected < min ||
	      (decrementedSelected > selected && decrementedSelected > max);
	  };

	  $scope.noToggleMeridian = function() {
	    if (selected.getHours() < 13) {
	      return addMinutes(selected, 12 * 60) > max;
	    } else {
	      return addMinutes(selected, -12 * 60) < min;
	    }
	  };

	  // 12H / 24H mode
	  $scope.showMeridian = timepickerConfig.showMeridian;
	  if ($attrs.showMeridian) {
	    $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
	      $scope.showMeridian = !!value;

	      if (ngModelCtrl.$error.time) {
	        // Evaluate from template
	        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
	        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	          selected.setHours(hours);
	          refresh();
	        }
	      } else {
	        updateTemplate();
	      }
	    });
	  }

	  // Get $scope.hours in 24H mode if valid
	  function getHoursFromTemplate() {
	    var hours = parseInt($scope.hours, 10);
	    var valid = $scope.showMeridian ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
	    if (!valid) {
	      return undefined;
	    }

	    if ($scope.showMeridian) {
	      if (hours === 12) {
	        hours = 0;
	      }
	      if ($scope.meridian === meridians[1]) {
	        hours = hours + 12;
	      }
	    }
	    return hours;
	  }

	  function getMinutesFromTemplate() {
	    var minutes = parseInt($scope.minutes, 10);
	    return (minutes >= 0 && minutes < 60) ? minutes : undefined;
	  }

	  function pad(value) {
	    return (angular.isDefined(value) && value.toString().length < 2) ? '0' + value : value.toString();
	  }

	  // Respond on mousewheel spin
	  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl) {
	    var isScrollingUp = function(e) {
	      if (e.originalEvent) {
	        e = e.originalEvent;
	      }
	      //pick correct delta variable depending on event
	      var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
	      return (e.detail || delta > 0);
	    };

	    hoursInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
	      e.preventDefault();
	    });

	    minutesInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
	      e.preventDefault();
	    });

	  };

	  // Respond on up/down arrowkeys
	  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl) {
	    hoursInputEl.bind('keydown', function(e) {
	      if (e.which === 38) { // up
	        e.preventDefault();
	        $scope.incrementHours();
	        $scope.$apply();
	      } else if (e.which === 40) { // down
	        e.preventDefault();
	        $scope.decrementHours();
	        $scope.$apply();
	      }
	    });

	    minutesInputEl.bind('keydown', function(e) {
	      if (e.which === 38) { // up
	        e.preventDefault();
	        $scope.incrementMinutes();
	        $scope.$apply();
	      } else if (e.which === 40) { // down
	        e.preventDefault();
	        $scope.decrementMinutes();
	        $scope.$apply();
	      }
	    });
	  };

	  this.setupInputEvents = function(hoursInputEl, minutesInputEl) {
	    if ($scope.readonlyInput) {
	      $scope.updateHours = angular.noop;
	      $scope.updateMinutes = angular.noop;
	      return;
	    }

	    var invalidate = function(invalidHours, invalidMinutes) {
	      ngModelCtrl.$setViewValue(null);
	      ngModelCtrl.$setValidity('time', false);
	      if (angular.isDefined(invalidHours)) {
	        $scope.invalidHours = invalidHours;
	      }
	      if (angular.isDefined(invalidMinutes)) {
	        $scope.invalidMinutes = invalidMinutes;
	      }
	    };

	    $scope.updateHours = function() {
	      var hours = getHoursFromTemplate(),
	        minutes = getMinutesFromTemplate();

	      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	        selected.setHours(hours);
	        if (selected < min || selected > max) {
	          invalidate(true);
	        } else {
	          refresh('h');
	        }
	      } else {
	        invalidate(true);
	      }
	    };

	    hoursInputEl.bind('blur', function(e) {
	      if (!$scope.invalidHours && $scope.hours < 10) {
	        $scope.$apply(function() {
	          $scope.hours = pad($scope.hours);
	        });
	      }
	    });

	    $scope.updateMinutes = function() {
	      var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();

	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(undefined, true);
	        } else {
	          refresh('m');
	        }
	      } else {
	        invalidate(undefined, true);
	      }
	    };

	    minutesInputEl.bind('blur', function(e) {
	      if (!$scope.invalidMinutes && $scope.minutes < 10) {
	        $scope.$apply(function() {
	          $scope.minutes = pad($scope.minutes);
	        });
	      }
	    });

	  };

	  this.render = function() {
	    var date = ngModelCtrl.$viewValue;

	    if (isNaN(date)) {
	      ngModelCtrl.$setValidity('time', false);
	      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	    } else {
	      if (date) {
	        selected = date;
	      }

	      if (selected < min || selected > max) {
	        ngModelCtrl.$setValidity('time', false);
	        $scope.invalidHours = true;
	        $scope.invalidMinutes = true;
	      } else {
	        makeValid();
	      }
	      updateTemplate();
	    }
	  };

	  // Call internally when we know that model is valid.
	  function refresh(keyboardChange) {
	    makeValid();
	    ngModelCtrl.$setViewValue(new Date(selected));
	    updateTemplate(keyboardChange);
	  }

	  function makeValid() {
	    ngModelCtrl.$setValidity('time', true);
	    $scope.invalidHours = false;
	    $scope.invalidMinutes = false;
	  }

	  function updateTemplate(keyboardChange) {
	    var hours = selected.getHours(), minutes = selected.getMinutes();

	    if ($scope.showMeridian) {
	      hours = (hours === 0 || hours === 12) ? 12 : hours % 12; // Convert 24 to 12 hour system
	    }

	    $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
	    if (keyboardChange !== 'm') {
	      $scope.minutes = pad(minutes);
	    }
	    $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	  }

	  function addMinutes(date, minutes) {
	    var dt = new Date(date.getTime() + minutes * 60000);
	    var newDate = new Date(date);
	    newDate.setHours(dt.getHours(), dt.getMinutes());
	    return newDate;
	  }

	  function addMinutesToSelected(minutes) {
	    selected = addMinutes(selected, minutes);
	    refresh();
	  }

	  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
	    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;

	  $scope.incrementHours = function() {
	    if (!$scope.noIncrementHours()) {
	      addMinutesToSelected(hourStep * 60);
	    }
	  };

	  $scope.decrementHours = function() {
	    if (!$scope.noDecrementHours()) {
	      addMinutesToSelected(-hourStep * 60);
	    }
	  };

	  $scope.incrementMinutes = function() {
	    if (!$scope.noIncrementMinutes()) {
	      addMinutesToSelected(minuteStep);
	    }
	  };

	  $scope.decrementMinutes = function() {
	    if (!$scope.noDecrementMinutes()) {
	      addMinutesToSelected(-minuteStep);
	    }
	  };

	  $scope.toggleMeridian = function() {
	    if (!$scope.noToggleMeridian()) {
	      addMinutesToSelected(12 * 60 * (selected.getHours() < 12 ? 1 : -1));
	    }
	  };
	}])

	.directive('timepicker', function() {
	  return {
	    restrict: 'EA',
	    require: ['timepicker', '?^ngModel'],
	    controller:'TimepickerController',
	    controllerAs: 'timepicker',
	    replace: true,
	    scope: {},
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/timepicker/timepicker.html';
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

	      if (ngModelCtrl) {
	        timepickerCtrl.init(ngModelCtrl, element.find('input'));
	      }
	    }
	  };
	});

	angular.module('ui.bootstrap.transition', [])

	.value('$transitionSuppressDeprecated', false)
	/**
	 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
	 * @param  {DOMElement} element  The DOMElement that will be animated.
	 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
	 *   - As a string, it represents the css class to be added to the element.
	 *   - As an object, it represents a hash of style attributes to be applied to the element.
	 *   - As a function, it represents a function to be called that will cause the transition to occur.
	 * @return {Promise}  A promise that is resolved when the transition finishes.
	 */
	.factory('$transition', [
	        '$q', '$timeout', '$rootScope', '$log', '$transitionSuppressDeprecated',
	function($q ,  $timeout ,  $rootScope ,  $log ,  $transitionSuppressDeprecated) {

	  if (!$transitionSuppressDeprecated) {
	    $log.warn('$transition is now deprecated. Use $animate from ngAnimate instead.');
	  }

	  var $transition = function(element, trigger, options) {
	    options = options || {};
	    var deferred = $q.defer();
	    var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];

	    var transitionEndHandler = function(event) {
	      $rootScope.$apply(function() {
	        element.unbind(endEventName, transitionEndHandler);
	        deferred.resolve(element);
	      });
	    };

	    if (endEventName) {
	      element.bind(endEventName, transitionEndHandler);
	    }

	    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
	    $timeout(function() {
	      if ( angular.isString(trigger) ) {
	        element.addClass(trigger);
	      } else if ( angular.isFunction(trigger) ) {
	        trigger(element);
	      } else if ( angular.isObject(trigger) ) {
	        element.css(trigger);
	      }
	      //If browser does not support transitions, instantly resolve
	      if ( !endEventName ) {
	        deferred.resolve(element);
	      }
	    });

	    // Add our custom cancel function to the promise that is returned
	    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
	    // i.e. it will therefore never raise a transitionEnd event for that transition
	    deferred.promise.cancel = function() {
	      if ( endEventName ) {
	        element.unbind(endEventName, transitionEndHandler);
	      }
	      deferred.reject('Transition cancelled');
	    };

	    return deferred.promise;
	  };

	  // Work out the name of the transitionEnd event
	  var transElement = document.createElement('trans');
	  var transitionEndEventNames = {
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'transitionend',
	    'OTransition': 'oTransitionEnd',
	    'transition': 'transitionend'
	  };
	  var animationEndEventNames = {
	    'WebkitTransition': 'webkitAnimationEnd',
	    'MozTransition': 'animationend',
	    'OTransition': 'oAnimationEnd',
	    'transition': 'animationend'
	  };
	  function findEndEventName(endEventNames) {
	    for (var name in endEventNames){
	      if (transElement.style[name] !== undefined) {
	        return endEventNames[name];
	      }
	    }
	  }
	  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
	  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
	  return $transition;
	}]);

	angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position'])

	/**
	 * A helper service that can parse typeahead's syntax (string provided by users)
	 * Extracted to a separate service for ease of unit testing
	 */
	  .factory('typeaheadParser', ['$parse', function($parse) {

	  //                      00000111000000000000022200000000000000003333333333333330000000000044000
	  var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;

	  return {
	    parse: function(input) {
	      var match = input.match(TYPEAHEAD_REGEXP);
	      if (!match) {
	        throw new Error(
	          'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
	            ' but got "' + input + '".');
	      }

	      return {
	        itemName:match[3],
	        source:$parse(match[4]),
	        viewMapper:$parse(match[2] || match[1]),
	        modelMapper:$parse(match[1])
	      };
	    }
	  };
	}])

	  .directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$position', 'typeaheadParser',
	    function($compile, $parse, $q, $timeout, $document, $window, $rootScope, $position, typeaheadParser) {
	    var HOT_KEYS = [9, 13, 27, 38, 40];
	    var eventDebounceTime = 200;

	    return {
	      require: ['ngModel', '^?ngModelOptions'],
	      link: function(originalScope, element, attrs, ctrls) {
	        var modelCtrl = ctrls[0];
	        var ngModelOptions = ctrls[1];
	        //SUPPORTED ATTRIBUTES (OPTIONS)

	        //minimal no of characters that needs to be entered before typeahead kicks-in
	        var minLength = originalScope.$eval(attrs.typeaheadMinLength);
	        if (!minLength && minLength !== 0) {
	          minLength = 1;
	        }

	        //minimal wait time after last character typed before typeahead kicks-in
	        var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

	        //should it restrict model values to the ones selected from the popup only?
	        var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;

	        //binding to a variable that indicates if matches are being retrieved asynchronously
	        var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

	        //a callback executed when a match is selected
	        var onSelectCallback = $parse(attrs.typeaheadOnSelect);

	        //should it select highlighted popup value when losing focus?
	        var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;

	        //binding to a variable that indicates if there were no results after the query is completed
	        var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;

	        var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

	        var appendToBody =  attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

	        var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

	        //If input matches an item of the list exactly, select it automatically
	        var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;

	        //INTERNAL VARIABLES

	        //model setter executed upon match selection
	        var parsedModel = $parse(attrs.ngModel);
	        var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
	        var $setModelValue = function(scope, newValue) {
	          if (angular.isFunction(parsedModel(originalScope)) &&
	            ngModelOptions && ngModelOptions.$options && ngModelOptions.$options.getterSetter) {
	            return invokeModelSetter(scope, {$$$p: newValue});
	          } else {
	            return parsedModel.assign(scope, newValue);
	          }
	        };

	        //expressions used by typeahead
	        var parserResult = typeaheadParser.parse(attrs.typeahead);

	        var hasFocus;

	        //Used to avoid bug in iOS webview where iOS keyboard does not fire
	        //mousedown & mouseup events
	        //Issue #3699
	        var selected;

	        //create a child scope for the typeahead directive so we are not polluting original scope
	        //with typeahead-specific data (matches, query etc.)
	        var scope = originalScope.$new();
	        var offDestroy = originalScope.$on('$destroy', function() {
				    scope.$destroy();
	        });
	        scope.$on('$destroy', offDestroy);

	        // WAI-ARIA
	        var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	        element.attr({
	          'aria-autocomplete': 'list',
	          'aria-expanded': false,
	          'aria-owns': popupId
	        });

	        //pop-up element used to display matches
	        var popUpEl = angular.element('<div typeahead-popup></div>');
	        popUpEl.attr({
	          id: popupId,
	          matches: 'matches',
	          active: 'activeIdx',
	          select: 'select(activeIdx)',
	          'move-in-progress': 'moveInProgress',
	          query: 'query',
	          position: 'position'
	        });
	        //custom item template
	        if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
	          popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
	        }

	        if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
	          popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
	        }

	        var resetMatches = function() {
	          scope.matches = [];
	          scope.activeIdx = -1;
	          element.attr('aria-expanded', false);
	        };

	        var getMatchId = function(index) {
	          return popupId + '-option-' + index;
	        };

	        // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
	        // This attribute is added or removed automatically when the `activeIdx` changes.
	        scope.$watch('activeIdx', function(index) {
	          if (index < 0) {
	            element.removeAttr('aria-activedescendant');
	          } else {
	            element.attr('aria-activedescendant', getMatchId(index));
	          }
	        });

	        var inputIsExactMatch = function(inputValue, index) {
	          if (scope.matches.length > index && inputValue) {
	            return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
	          }

	          return false;
	        };

	        var getMatchesAsync = function(inputValue) {
	          var locals = {$viewValue: inputValue};
	          isLoadingSetter(originalScope, true);
	          isNoResultsSetter(originalScope, false);
	          $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
	            //it might happen that several async queries were in progress if a user were typing fast
	            //but we are interested only in responses that correspond to the current view value
	            var onCurrentRequest = (inputValue === modelCtrl.$viewValue);
	            if (onCurrentRequest && hasFocus) {
	              if (matches && matches.length > 0) {

	                scope.activeIdx = focusFirst ? 0 : -1;
	                isNoResultsSetter(originalScope, false);
	                scope.matches.length = 0;

	                //transform labels
	                for (var i = 0; i < matches.length; i++) {
	                  locals[parserResult.itemName] = matches[i];
	                  scope.matches.push({
	                    id: getMatchId(i),
	                    label: parserResult.viewMapper(scope, locals),
	                    model: matches[i]
	                  });
	                }

	                scope.query = inputValue;
	                //position pop-up with matches - we need to re-calculate its position each time we are opening a window
	                //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
	                //due to other elements being rendered
	                recalculatePosition();

	                element.attr('aria-expanded', true);

	                //Select the single remaining option if user input matches
	                if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
	                  scope.select(0);
	                }
	              } else {
	                resetMatches();
	                isNoResultsSetter(originalScope, true);
	              }
	            }
	            if (onCurrentRequest) {
	              isLoadingSetter(originalScope, false);
	            }
	          }, function() {
	            resetMatches();
	            isLoadingSetter(originalScope, false);
	            isNoResultsSetter(originalScope, true);
	          });
	        };

	        // bind events only if appendToBody params exist - performance feature
	        if (appendToBody) {
	          angular.element($window).bind('resize', fireRecalculating);
	          $document.find('body').bind('scroll', fireRecalculating);
	        }

	        // Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	        var timeoutEventPromise;

	        // Default progress type
	        scope.moveInProgress = false;

	        function fireRecalculating() {
	          if (!scope.moveInProgress) {
	            scope.moveInProgress = true;
	            scope.$digest();
	          }

	          // Cancel previous timeout
	          if (timeoutEventPromise) {
	            $timeout.cancel(timeoutEventPromise);
	          }

	          // Debounced executing recalculate after events fired
	          timeoutEventPromise = $timeout(function() {
	            // if popup is visible
	            if (scope.matches.length) {
	              recalculatePosition();
	            }

	            scope.moveInProgress = false;
	            scope.$digest();
	          }, eventDebounceTime);
	        }

	        // recalculate actual position and set new values to scope
	        // after digest loop is popup in right position
	        function recalculatePosition() {
	          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	          scope.position.top += element.prop('offsetHeight');
	        }

	        resetMatches();

	        //we need to propagate user's query so we can higlight matches
	        scope.query = undefined;

	        //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	        var timeoutPromise;

	        var scheduleSearchWithTimeout = function(inputValue) {
	          timeoutPromise = $timeout(function() {
	            getMatchesAsync(inputValue);
	          }, waitTime);
	        };

	        var cancelPreviousTimeout = function() {
	          if (timeoutPromise) {
	            $timeout.cancel(timeoutPromise);
	          }
	        };

	        //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
	        //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
	        modelCtrl.$parsers.unshift(function(inputValue) {
	          hasFocus = true;

	          if (minLength === 0 || inputValue && inputValue.length >= minLength) {
	            if (waitTime > 0) {
	              cancelPreviousTimeout();
	              scheduleSearchWithTimeout(inputValue);
	            } else {
	              getMatchesAsync(inputValue);
	            }
	          } else {
	            isLoadingSetter(originalScope, false);
	            cancelPreviousTimeout();
	            resetMatches();
	          }

	          if (isEditable) {
	            return inputValue;
	          } else {
	            if (!inputValue) {
	              // Reset in case user had typed something previously.
	              modelCtrl.$setValidity('editable', true);
	              return null;
	            } else {
	              modelCtrl.$setValidity('editable', false);
	              return undefined;
	            }
	          }
	        });

	        modelCtrl.$formatters.push(function(modelValue) {
	          var candidateViewValue, emptyViewValue;
	          var locals = {};

	          // The validity may be set to false via $parsers (see above) if
	          // the model is restricted to selected values. If the model
	          // is set manually it is considered to be valid.
	          if (!isEditable) {
	            modelCtrl.$setValidity('editable', true);
	          }

	          if (inputFormatter) {
	            locals.$model = modelValue;
	            return inputFormatter(originalScope, locals);
	          } else {
	            //it might happen that we don't have enough info to properly render input value
	            //we need to check for this situation and simply return model value if we can't apply custom formatting
	            locals[parserResult.itemName] = modelValue;
	            candidateViewValue = parserResult.viewMapper(originalScope, locals);
	            locals[parserResult.itemName] = undefined;
	            emptyViewValue = parserResult.viewMapper(originalScope, locals);

	            return candidateViewValue!== emptyViewValue ? candidateViewValue : modelValue;
	          }
	        });

	        scope.select = function(activeIdx) {
	          //called from within the $digest() cycle
	          var locals = {};
	          var model, item;

	          selected = true;
	          locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
	          model = parserResult.modelMapper(originalScope, locals);
	          $setModelValue(originalScope, model);
	          modelCtrl.$setValidity('editable', true);
	          modelCtrl.$setValidity('parse', true);

	          onSelectCallback(originalScope, {
	            $item: item,
	            $model: model,
	            $label: parserResult.viewMapper(originalScope, locals)
	          });

	          resetMatches();

	          //return focus to the input element if a match was selected via a mouse click event
	          // use timeout to avoid $rootScope:inprog error
	          if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
	            $timeout(function() { element[0].focus(); }, 0, false);
	          }
	        };

	        //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
	        element.bind('keydown', function(evt) {
	          //typeahead is open and an "interesting" key was pressed
	          if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
	            return;
	          }

	          // if there's nothing selected (i.e. focusFirst) and enter or tab is hit, clear the results
	          if (scope.activeIdx === -1 && (evt.which === 9 || evt.which === 13)) {
	            resetMatches();
	            scope.$digest();
	            return;
	          }

	          evt.preventDefault();

	          if (evt.which === 40) {
	            scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
	            scope.$digest();

	          } else if (evt.which === 38) {
	            scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
	            scope.$digest();

	          } else if (evt.which === 13 || evt.which === 9) {
	            scope.$apply(function () {
	              scope.select(scope.activeIdx);
	            });

	          } else if (evt.which === 27) {
	            evt.stopPropagation();

	            resetMatches();
	            scope.$digest();
	          }
	        });

	        element.bind('blur', function() {
	          if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
	            selected = true;
	            scope.$apply(function() {
	              scope.select(scope.activeIdx);
	            });
	          }
	          hasFocus = false;
	          selected = false;
	        });

	        // Keep reference to click handler to unbind it.
	        var dismissClickHandler = function(evt) {
	          // Issue #3973
	          // Firefox treats right click as a click on document
	          if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
	            resetMatches();
	            if (!$rootScope.$$phase) {
	              scope.$digest();
	            }
	          }
	        };

	        $document.bind('click', dismissClickHandler);

	        originalScope.$on('$destroy', function() {
	          $document.unbind('click', dismissClickHandler);
	          if (appendToBody) {
	            $popup.remove();
	          }
	          // Prevent jQuery cache memory leak
	          popUpEl.remove();
	        });

	        var $popup = $compile(popUpEl)(scope);

	        if (appendToBody) {
	          $document.find('body').append($popup);
	        } else {
	          element.after($popup);
	        }
	      }
	    };

	  }])

	  .directive('typeaheadPopup', function() {
	    return {
	      restrict: 'EA',
	      scope: {
	        matches: '=',
	        query: '=',
	        active: '=',
	        position: '&',
	        moveInProgress: '=',
	        select: '&'
	      },
	      replace: true,
	      templateUrl: function(element, attrs) {
	        return attrs.popupTemplateUrl || 'template/typeahead/typeahead-popup.html';
	      },
	      link: function(scope, element, attrs) {
	        scope.templateUrl = attrs.templateUrl;

	        scope.isOpen = function() {
	          return scope.matches.length > 0;
	        };

	        scope.isActive = function(matchIdx) {
	          return scope.active == matchIdx;
	        };

	        scope.selectActive = function(matchIdx) {
	          scope.active = matchIdx;
	        };

	        scope.selectMatch = function(activeIdx) {
	          scope.select({activeIdx:activeIdx});
	        };
	      }
	    };
	  })

	  .directive('typeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
	    return {
	      restrict: 'EA',
	      scope: {
	        index: '=',
	        match: '=',
	        query: '='
	      },
	      link:function(scope, element, attrs) {
	        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
	        $templateRequest(tplUrl).then(function(tplContent) {
	          $compile(tplContent.trim())(scope, function(clonedElement) {
	            element.replaceWith(clonedElement);
	          });
	        });
	      }
	    };
	  }])

	  .filter('typeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
	    var isSanitizePresent;
	    isSanitizePresent = $injector.has('$sanitize');

	    function escapeRegexp(queryToEscape) {
	      // Regex: capture the whole query string and replace it with the string that will be used to match
	      // the results, for example if the capture is "a" the result will be \a
	      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    }

	    function containsHtml(matchItem) {
	      return /<.*>/g.test(matchItem);
	    }

	    return function(matchItem, query) {
	      if (!isSanitizePresent && containsHtml(matchItem)) {
	        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
	      }
	      matchItem = query? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
	      if (!isSanitizePresent) {
	        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
	      }
	      return matchItem;
	    };
	  }]);

	angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/accordion/accordion-group.html",
	    "<div class=\"panel {{panelClass || 'panel-default'}}\">\n" +
	    "  <div class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" +
	    "    <h4 class=\"panel-title\">\n" +
	    "      <a href tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
	    "    </h4>\n" +
	    "  </div>\n" +
	    "  <div class=\"panel-collapse collapse\" collapse=\"!isOpen\">\n" +
	    "	  <div class=\"panel-body\" ng-transclude></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/accordion/accordion.html",
	    "<div class=\"panel-group\" ng-transclude></div>");
	}]);

	angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/alert/alert.html",
	    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissible' : null]\" role=\"alert\">\n" +
	    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close($event)\">\n" +
	    "        <span aria-hidden=\"true\">&times;</span>\n" +
	    "        <span class=\"sr-only\">Close</span>\n" +
	    "    </button>\n" +
	    "    <div ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/carousel/carousel.html",
	    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
	    "    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
	    "        <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" +
	    "    </ol>\n" +
	    "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
	    "    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n" +
	    "    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/carousel/slide.html",
	    "<div ng-class=\"{\n" +
	    "    'active': active\n" +
	    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/datepicker.html",
	    "<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
	    "  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\n" +
	    "  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\n" +
	    "  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\n" +
	    "</div>");
	}]);

	angular.module("template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/day.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
	    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/month.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/popup.html",
	    "<ul class=\"dropdown-menu\" ng-if=\"isOpen\" style=\"display: block\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
	    "	<li ng-transclude></li>\n" +
	    "	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n" +
	    "		<span class=\"btn-group pull-left\">\n" +
	    "			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select('today')\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
	    "			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" +
	    "		</span>\n" +
	    "		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText('close') }}</button>\n" +
	    "	</li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/year.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"3\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/modal/backdrop.html",
	    "<div class=\"modal-backdrop\"\n" +
	    "     modal-animation-class=\"fade\"\n" +
	    "     modal-in-class=\"in\"\n" +
	    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
	    "></div>\n" +
	    "");
	}]);

	angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/modal/window.html",
	    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
	    "    modal-animation-class=\"fade\"\n" +
	    "    modal-in-class=\"in\"\n" +
	    "	ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
	    "    <div class=\"modal-dialog\" ng-class=\"size ? 'modal-' + size : ''\"><div class=\"modal-content\" modal-transclude></div></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/pagination/pager.html",
	    "<ul class=\"pager\">\n" +
	    "  <li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/pagination/pagination.html",
	    "<ul class=\"pagination\">\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\">{{::getText('first')}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\">{{::getText('last')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);

	angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-html-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-template-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\"\n" +
	    "    tooltip-template-transclude=\"contentExp()\"\n" +
	    "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover-html.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover-template.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\"\n" +
	    "        tooltip-template-transclude=\"contentExp()\"\n" +
	    "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/bar.html",
	    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" style=\"min-width: 0;\" ng-transclude></div>\n" +
	    "");
	}]);

	angular.module("template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/progress.html",
	    "<div class=\"progress\" ng-transclude></div>");
	}]);

	angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/progressbar.html",
	    "<div class=\"progress\">\n" +
	    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" style=\"min-width: 0;\" ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/rating/rating.html",
	    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" +
	    "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
	    "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\" ></i>\n" +
	    "</span>\n" +
	    "");
	}]);

	angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tabs/tab.html",
	    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
	    "  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
	    "</li>\n" +
	    "");
	}]);

	angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tabs/tabset.html",
	    "<div>\n" +
	    "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
	    "  <div class=\"tab-content\">\n" +
	    "    <div class=\"tab-pane\" \n" +
	    "         ng-repeat=\"tab in tabs\" \n" +
	    "         ng-class=\"{active: tab.active}\"\n" +
	    "         tab-content-transclude=\"tab\">\n" +
	    "    </div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);

	angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/timepicker/timepicker.html",
	    "<table>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <td class=\"form-group\" ng-class=\"{'has-error': invalidHours}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\">\n" +
	    "      </td>\n" +
	    "      <td>:</td>\n" +
	    "      <td class=\"form-group\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showMeridian\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n" +
	    "    </tr>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);

	angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/typeahead/typeahead-match.html",
	    "<a href tabindex=\"-1\" ng-bind-html=\"match.label | typeaheadHighlight:query\"></a>\n" +
	    "");
	}]);

	angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/typeahead/typeahead-popup.html",
	    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
	    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{::match.id}}\">\n" +
	    "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
	    "    </li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = 'ngSanitize';


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.4.7
	 * (c) 2010-2015 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular, undefined) {'use strict';

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 *     Any commits to this file should be reviewed with security in mind.  *
	 *   Changes to this file can potentially create security vulnerabilities. *
	 *          An approval from 2 Core members with history of modifying      *
	 *                         this file is required.                          *
	 *                                                                         *
	 *  Does the change somehow allow for arbitrary javascript to be executed? *
	 *    Or allows for someone to change the prototype of built-in objects?   *
	 *     Or gives undesired access to variables likes document or window?    *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	var $sanitizeMinErr = angular.$$minErr('$sanitize');

	/**
	 * @ngdoc module
	 * @name ngSanitize
	 * @description
	 *
	 * # ngSanitize
	 *
	 * The `ngSanitize` module provides functionality to sanitize HTML.
	 *
	 *
	 * <div doc-module-components="ngSanitize"></div>
	 *
	 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
	 */

	/*
	 * HTML Parser By Misko Hevery (misko@hevery.com)
	 * based on:  HTML Parser By John Resig (ejohn.org)
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 *
	 * // Use like so:
	 * htmlParser(htmlString, {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * });
	 *
	 */


	/**
	 * @ngdoc service
	 * @name $sanitize
	 * @kind function
	 *
	 * @description
	 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
	 *   then serialized back to properly escaped html string. This means that no unsafe input can make
	 *   it into the returned string, however, since our parser is more strict than a typical browser
	 *   parser, it's possible that some obscure input, which would be recognized as valid HTML by a
	 *   browser, won't make it through the sanitizer. The input may also contain SVG markup.
	 *   The whitelist is configured using the functions `aHrefSanitizationWhitelist` and
	 *   `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider `$compileProvider`}.
	 *
	 * @param {string} html HTML input.
	 * @returns {string} Sanitized HTML.
	 *
	 * @example
	   <example module="sanitizeExample" deps="angular-sanitize.js">
	   <file name="index.html">
	     <script>
	         angular.module('sanitizeExample', ['ngSanitize'])
	           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
	             $scope.snippet =
	               '<p style="color:blue">an html\n' +
	               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
	               'snippet</p>';
	             $scope.deliberatelyTrustDangerousSnippet = function() {
	               return $sce.trustAsHtml($scope.snippet);
	             };
	           }]);
	     </script>
	     <div ng-controller="ExampleController">
	        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <td>Directive</td>
	           <td>How</td>
	           <td>Source</td>
	           <td>Rendered</td>
	         </tr>
	         <tr id="bind-html-with-sanitize">
	           <td>ng-bind-html</td>
	           <td>Automatically uses $sanitize</td>
	           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind-html="snippet"></div></td>
	         </tr>
	         <tr id="bind-html-with-trust">
	           <td>ng-bind-html</td>
	           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
	           <td>
	           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
	&lt;/div&gt;</pre>
	           </td>
	           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
	         </tr>
	         <tr id="bind-default">
	           <td>ng-bind</td>
	           <td>Automatically escapes</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	       </div>
	   </file>
	   <file name="protractor.js" type="protractor">
	     it('should sanitize the html snippet by default', function() {
	       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
	         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
	     });

	     it('should inline raw snippet if bound to a trusted value', function() {
	       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
	         toBe("<p style=\"color:blue\">an html\n" +
	              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
	              "snippet</p>");
	     });

	     it('should escape snippet without any filter', function() {
	       expect(element(by.css('#bind-default div')).getInnerHtml()).
	         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
	              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
	              "snippet&lt;/p&gt;");
	     });

	     it('should update', function() {
	       element(by.model('snippet')).clear();
	       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
	         toBe('new <b>text</b>');
	       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
	         'new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
	         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
	     });
	   </file>
	   </example>
	 */
	function $SanitizeProvider() {
	  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
	    return function(html) {
	      var buf = [];
	      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
	        return !/^unsafe/.test($$sanitizeUri(uri, isImage));
	      }));
	      return buf.join('');
	    };
	  }];
	}

	function sanitizeText(chars) {
	  var buf = [];
	  var writer = htmlSanitizeWriter(buf, angular.noop);
	  writer.chars(chars);
	  return buf.join('');
	}


	// Regular Expressions for parsing tags and attributes
	var START_TAG_REGEXP =
	       /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
	  END_TAG_REGEXP = /^<\/\s*([\w:-]+)[^>]*>/,
	  ATTR_REGEXP = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
	  BEGIN_TAG_REGEXP = /^</,
	  BEGING_END_TAGE_REGEXP = /^<\//,
	  COMMENT_REGEXP = /<!--(.*?)-->/g,
	  DOCTYPE_REGEXP = /<!DOCTYPE([^>]*?)>/i,
	  CDATA_REGEXP = /<!\[CDATA\[(.*?)]]>/g,
	  SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
	  // Match everything outside of normal chars and " (quote character)
	  NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;


	// Good source of info about elements and attributes
	// http://dev.w3.org/html5/spec/Overview.html#semantics
	// http://simon.html5.org/html-elements

	// Safe Void Elements - HTML5
	// http://dev.w3.org/html5/spec/Overview.html#void-elements
	var voidElements = makeMap("area,br,col,hr,img,wbr");

	// Elements that you can, intentionally, leave open (and which close themselves)
	// http://dev.w3.org/html5/spec/Overview.html#optional-tags
	var optionalEndTagBlockElements = makeMap("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
	    optionalEndTagInlineElements = makeMap("rp,rt"),
	    optionalEndTagElements = angular.extend({},
	                                            optionalEndTagInlineElements,
	                                            optionalEndTagBlockElements);

	// Safe Block Elements - HTML5
	var blockElements = angular.extend({}, optionalEndTagBlockElements, makeMap("address,article," +
	        "aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5," +
	        "h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul"));

	// Inline Elements - HTML5
	var inlineElements = angular.extend({}, optionalEndTagInlineElements, makeMap("a,abbr,acronym,b," +
	        "bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s," +
	        "samp,small,span,strike,strong,sub,sup,time,tt,u,var"));

	// SVG Elements
	// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
	// Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
	// They can potentially allow for arbitrary javascript to be executed. See #11290
	var svgElements = makeMap("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph," +
	        "hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline," +
	        "radialGradient,rect,stop,svg,switch,text,title,tspan,use");

	// Special Elements (can contain anything)
	var specialElements = makeMap("script,style");

	var validElements = angular.extend({},
	                                   voidElements,
	                                   blockElements,
	                                   inlineElements,
	                                   optionalEndTagElements,
	                                   svgElements);

	//Attributes that have href and hence need to be sanitized
	var uriAttrs = makeMap("background,cite,href,longdesc,src,usemap,xlink:href");

	var htmlAttrs = makeMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
	    'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
	    'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
	    'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
	    'valign,value,vspace,width');

	// SVG attributes (without "id" and "name" attributes)
	// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
	var svgAttrs = makeMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
	    'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
	    'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
	    'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
	    'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
	    'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
	    'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
	    'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
	    'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
	    'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
	    'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
	    'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
	    'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
	    'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
	    'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);

	var validAttrs = angular.extend({},
	                                uriAttrs,
	                                svgAttrs,
	                                htmlAttrs);

	function makeMap(str, lowercaseKeys) {
	  var obj = {}, items = str.split(','), i;
	  for (i = 0; i < items.length; i++) {
	    obj[lowercaseKeys ? angular.lowercase(items[i]) : items[i]] = true;
	  }
	  return obj;
	}


	/**
	 * @example
	 * htmlParser(htmlString, {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * });
	 *
	 * @param {string} html string
	 * @param {object} handler
	 */
	function htmlParser(html, handler) {
	  if (typeof html !== 'string') {
	    if (html === null || typeof html === 'undefined') {
	      html = '';
	    } else {
	      html = '' + html;
	    }
	  }
	  var index, chars, match, stack = [], last = html, text;
	  stack.last = function() { return stack[stack.length - 1]; };

	  while (html) {
	    text = '';
	    chars = true;

	    // Make sure we're not in a script or style element
	    if (!stack.last() || !specialElements[stack.last()]) {

	      // Comment
	      if (html.indexOf("<!--") === 0) {
	        // comments containing -- are not allowed unless they terminate the comment
	        index = html.indexOf("--", 4);

	        if (index >= 0 && html.lastIndexOf("-->", index) === index) {
	          if (handler.comment) handler.comment(html.substring(4, index));
	          html = html.substring(index + 3);
	          chars = false;
	        }
	      // DOCTYPE
	      } else if (DOCTYPE_REGEXP.test(html)) {
	        match = html.match(DOCTYPE_REGEXP);

	        if (match) {
	          html = html.replace(match[0], '');
	          chars = false;
	        }
	      // end tag
	      } else if (BEGING_END_TAGE_REGEXP.test(html)) {
	        match = html.match(END_TAG_REGEXP);

	        if (match) {
	          html = html.substring(match[0].length);
	          match[0].replace(END_TAG_REGEXP, parseEndTag);
	          chars = false;
	        }

	      // start tag
	      } else if (BEGIN_TAG_REGEXP.test(html)) {
	        match = html.match(START_TAG_REGEXP);

	        if (match) {
	          // We only have a valid start-tag if there is a '>'.
	          if (match[4]) {
	            html = html.substring(match[0].length);
	            match[0].replace(START_TAG_REGEXP, parseStartTag);
	          }
	          chars = false;
	        } else {
	          // no ending tag found --- this piece should be encoded as an entity.
	          text += '<';
	          html = html.substring(1);
	        }
	      }

	      if (chars) {
	        index = html.indexOf("<");

	        text += index < 0 ? html : html.substring(0, index);
	        html = index < 0 ? "" : html.substring(index);

	        if (handler.chars) handler.chars(decodeEntities(text));
	      }

	    } else {
	      // IE versions 9 and 10 do not understand the regex '[^]', so using a workaround with [\W\w].
	      html = html.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + stack.last() + "[^>]*>", 'i'),
	        function(all, text) {
	          text = text.replace(COMMENT_REGEXP, "$1").replace(CDATA_REGEXP, "$1");

	          if (handler.chars) handler.chars(decodeEntities(text));

	          return "";
	      });

	      parseEndTag("", stack.last());
	    }

	    if (html == last) {
	      throw $sanitizeMinErr('badparse', "The sanitizer was unable to parse the following block " +
	                                        "of html: {0}", html);
	    }
	    last = html;
	  }

	  // Clean up any remaining tags
	  parseEndTag();

	  function parseStartTag(tag, tagName, rest, unary) {
	    tagName = angular.lowercase(tagName);
	    if (blockElements[tagName]) {
	      while (stack.last() && inlineElements[stack.last()]) {
	        parseEndTag("", stack.last());
	      }
	    }

	    if (optionalEndTagElements[tagName] && stack.last() == tagName) {
	      parseEndTag("", tagName);
	    }

	    unary = voidElements[tagName] || !!unary;

	    if (!unary) {
	      stack.push(tagName);
	    }

	    var attrs = {};

	    rest.replace(ATTR_REGEXP,
	      function(match, name, doubleQuotedValue, singleQuotedValue, unquotedValue) {
	        var value = doubleQuotedValue
	          || singleQuotedValue
	          || unquotedValue
	          || '';

	        attrs[name] = decodeEntities(value);
	    });
	    if (handler.start) handler.start(tagName, attrs, unary);
	  }

	  function parseEndTag(tag, tagName) {
	    var pos = 0, i;
	    tagName = angular.lowercase(tagName);
	    if (tagName) {
	      // Find the closest opened tag of the same type
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos] == tagName) break;
	      }
	    }

	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (i = stack.length - 1; i >= pos; i--)
	        if (handler.end) handler.end(stack[i]);

	      // Remove the open elements from the stack
	      stack.length = pos;
	    }
	  }
	}

	var hiddenPre=document.createElement("pre");
	/**
	 * decodes all entities into regular string
	 * @param value
	 * @returns {string} A string with decoded entities.
	 */
	function decodeEntities(value) {
	  if (!value) { return ''; }

	  hiddenPre.innerHTML = value.replace(/</g,"&lt;");
	  // innerText depends on styling as it doesn't display hidden elements.
	  // Therefore, it's better to use textContent not to cause unnecessary reflows.
	  return hiddenPre.textContent;
	}

	/**
	 * Escapes all potentially dangerous characters, so that the
	 * resulting string can be safely inserted into attribute or
	 * element text.
	 * @param value
	 * @returns {string} escaped text
	 */
	function encodeEntities(value) {
	  return value.
	    replace(/&/g, '&amp;').
	    replace(SURROGATE_PAIR_REGEXP, function(value) {
	      var hi = value.charCodeAt(0);
	      var low = value.charCodeAt(1);
	      return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
	    }).
	    replace(NON_ALPHANUMERIC_REGEXP, function(value) {
	      return '&#' + value.charCodeAt(0) + ';';
	    }).
	    replace(/</g, '&lt;').
	    replace(/>/g, '&gt;');
	}

	/**
	 * create an HTML/XML writer which writes to buffer
	 * @param {Array} buf use buf.jain('') to get out sanitized html string
	 * @returns {object} in the form of {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * }
	 */
	function htmlSanitizeWriter(buf, uriValidator) {
	  var ignore = false;
	  var out = angular.bind(buf, buf.push);
	  return {
	    start: function(tag, attrs, unary) {
	      tag = angular.lowercase(tag);
	      if (!ignore && specialElements[tag]) {
	        ignore = tag;
	      }
	      if (!ignore && validElements[tag] === true) {
	        out('<');
	        out(tag);
	        angular.forEach(attrs, function(value, key) {
	          var lkey=angular.lowercase(key);
	          var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
	          if (validAttrs[lkey] === true &&
	            (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
	            out(' ');
	            out(key);
	            out('="');
	            out(encodeEntities(value));
	            out('"');
	          }
	        });
	        out(unary ? '/>' : '>');
	      }
	    },
	    end: function(tag) {
	        tag = angular.lowercase(tag);
	        if (!ignore && validElements[tag] === true) {
	          out('</');
	          out(tag);
	          out('>');
	        }
	        if (tag == ignore) {
	          ignore = false;
	        }
	      },
	    chars: function(chars) {
	        if (!ignore) {
	          out(encodeEntities(chars));
	        }
	      }
	  };
	}


	// define ngSanitize module and register $sanitize service
	angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);

	/* global sanitizeText: false */

	/**
	 * @ngdoc filter
	 * @name linky
	 * @kind function
	 *
	 * @description
	 * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and
	 * plain email address links.
	 *
	 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
	 *
	 * @param {string} text Input text.
	 * @param {string} target Window (_blank|_self|_parent|_top) or named frame to open links in.
	 * @returns {string} Html-linkified text.
	 *
	 * @usage
	   <span ng-bind-html="linky_expression | linky"></span>
	 *
	 * @example
	   <example module="linkyExample" deps="angular-sanitize.js">
	     <file name="index.html">
	       <script>
	         angular.module('linkyExample', ['ngSanitize'])
	           .controller('ExampleController', ['$scope', function($scope) {
	             $scope.snippet =
	               'Pretty text with some links:\n'+
	               'http://angularjs.org/,\n'+
	               'mailto:us@somewhere.org,\n'+
	               'another@somewhere.org,\n'+
	               'and one more: ftp://127.0.0.1/.';
	             $scope.snippetWithTarget = 'http://angularjs.org/';
	           }]);
	       </script>
	       <div ng-controller="ExampleController">
	       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <td>Filter</td>
	           <td>Source</td>
	           <td>Rendered</td>
	         </tr>
	         <tr id="linky-filter">
	           <td>linky filter</td>
	           <td>
	             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
	           </td>
	           <td>
	             <div ng-bind-html="snippet | linky"></div>
	           </td>
	         </tr>
	         <tr id="linky-target">
	          <td>linky target</td>
	          <td>
	            <pre>&lt;div ng-bind-html="snippetWithTarget | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
	          </td>
	          <td>
	            <div ng-bind-html="snippetWithTarget | linky:'_blank'"></div>
	          </td>
	         </tr>
	         <tr id="escaped-html">
	           <td>no filter</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	     </file>
	     <file name="protractor.js" type="protractor">
	       it('should linkify the snippet with urls', function() {
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
	       });

	       it('should not linkify snippet without the linky filter', function() {
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
	       });

	       it('should update', function() {
	         element(by.model('snippet')).clear();
	         element(by.model('snippet')).sendKeys('new http://link.');
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('new http://link.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
	             .toBe('new http://link.');
	       });

	       it('should work with the target property', function() {
	        expect(element(by.id('linky-target')).
	            element(by.binding("snippetWithTarget | linky:'_blank'")).getText()).
	            toBe('http://angularjs.org/');
	        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
	       });
	     </file>
	   </example>
	 */
	angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
	  var LINKY_URL_REGEXP =
	        /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
	      MAILTO_REGEXP = /^mailto:/i;

	  return function(text, target) {
	    if (!text) return text;
	    var match;
	    var raw = text;
	    var html = [];
	    var url;
	    var i;
	    while ((match = raw.match(LINKY_URL_REGEXP))) {
	      // We can not end in these as they are sometimes found at the end of the sentence
	      url = match[0];
	      // if we did not match ftp/http/www/mailto then assume mailto
	      if (!match[2] && !match[4]) {
	        url = (match[3] ? 'http://' : 'mailto:') + url;
	      }
	      i = match.index;
	      addText(raw.substr(0, i));
	      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
	      raw = raw.substring(i + match[0].length);
	    }
	    addText(raw);
	    return $sanitize(html.join(''));

	    function addText(text) {
	      if (!text) {
	        return;
	      }
	      html.push(sanitizeText(text));
	    }

	    function addLink(url, text) {
	      html.push('<a ');
	      if (angular.isDefined(target)) {
	        html.push('target="',
	                  target,
	                  '" ');
	      }
	      html.push('href="',
	                url.replace(/"/g, '&quot;'),
	                '">');
	      addText(text);
	      html.push('</a>');
	    }
	  };
	}]);


	})(window, window.angular);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Rangy, a cross-browser JavaScript range and selection library
	 * https://github.com/timdown/rangy
	 *
	 * Copyright 2015, Tim Down
	 * Licensed under the MIT license.
	 * Version: 1.3.0
	 * Build date: 10 May 2015
	 */

	(function(factory, root) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module != "undefined" && typeof exports == "object") {
	        // Node/CommonJS style
	        module.exports = factory();
	    } else {
	        // No AMD or CommonJS support so we place Rangy in (probably) the global variable
	        root.rangy = factory();
	    }
	})(function() {

	    var OBJECT = "object", FUNCTION = "function", UNDEFINED = "undefined";

	    // Minimal set of properties required for DOM Level 2 Range compliance. Comparison constants such as START_TO_START
	    // are omitted because ranges in KHTML do not have them but otherwise work perfectly well. See issue 113.
	    var domRangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
	        "commonAncestorContainer"];

	    // Minimal set of methods required for DOM Level 2 Range compliance
	    var domRangeMethods = ["setStart", "setStartBefore", "setStartAfter", "setEnd", "setEndBefore",
	        "setEndAfter", "collapse", "selectNode", "selectNodeContents", "compareBoundaryPoints", "deleteContents",
	        "extractContents", "cloneContents", "insertNode", "surroundContents", "cloneRange", "toString", "detach"];

	    var textRangeProperties = ["boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "htmlText", "text"];

	    // Subset of TextRange's full set of methods that we're interested in
	    var textRangeMethods = ["collapse", "compareEndPoints", "duplicate", "moveToElementText", "parentElement", "select",
	        "setEndPoint", "getBoundingClientRect"];

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // Trio of functions taken from Peter Michaux's article:
	    // http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
	    function isHostMethod(o, p) {
	        var t = typeof o[p];
	        return t == FUNCTION || (!!(t == OBJECT && o[p])) || t == "unknown";
	    }

	    function isHostObject(o, p) {
	        return !!(typeof o[p] == OBJECT && o[p]);
	    }

	    function isHostProperty(o, p) {
	        return typeof o[p] != UNDEFINED;
	    }

	    // Creates a convenience function to save verbose repeated calls to tests functions
	    function createMultiplePropertyTest(testFunc) {
	        return function(o, props) {
	            var i = props.length;
	            while (i--) {
	                if (!testFunc(o, props[i])) {
	                    return false;
	                }
	            }
	            return true;
	        };
	    }

	    // Next trio of functions are a convenience to save verbose repeated calls to previous two functions
	    var areHostMethods = createMultiplePropertyTest(isHostMethod);
	    var areHostObjects = createMultiplePropertyTest(isHostObject);
	    var areHostProperties = createMultiplePropertyTest(isHostProperty);

	    function isTextRange(range) {
	        return range && areHostMethods(range, textRangeMethods) && areHostProperties(range, textRangeProperties);
	    }

	    function getBody(doc) {
	        return isHostObject(doc, "body") ? doc.body : doc.getElementsByTagName("body")[0];
	    }

	    var forEach = [].forEach ?
	        function(arr, func) {
	            arr.forEach(func);
	        } :
	        function(arr, func) {
	            for (var i = 0, len = arr.length; i < len; ++i) {
	                func(arr[i], i);
	            }
	        };

	    var modules = {};

	    var isBrowser = (typeof window != UNDEFINED && typeof document != UNDEFINED);

	    var util = {
	        isHostMethod: isHostMethod,
	        isHostObject: isHostObject,
	        isHostProperty: isHostProperty,
	        areHostMethods: areHostMethods,
	        areHostObjects: areHostObjects,
	        areHostProperties: areHostProperties,
	        isTextRange: isTextRange,
	        getBody: getBody,
	        forEach: forEach
	    };

	    var api = {
	        version: "1.3.0",
	        initialized: false,
	        isBrowser: isBrowser,
	        supported: true,
	        util: util,
	        features: {},
	        modules: modules,
	        config: {
	            alertOnFail: false,
	            alertOnWarn: false,
	            preferTextRange: false,
	            autoInitialize: (typeof rangyAutoInitialize == UNDEFINED) ? true : rangyAutoInitialize
	        }
	    };

	    function consoleLog(msg) {
	        if (typeof console != UNDEFINED && isHostMethod(console, "log")) {
	            console.log(msg);
	        }
	    }

	    function alertOrLog(msg, shouldAlert) {
	        if (isBrowser && shouldAlert) {
	            alert(msg);
	        } else  {
	            consoleLog(msg);
	        }
	    }

	    function fail(reason) {
	        api.initialized = true;
	        api.supported = false;
	        alertOrLog("Rangy is not supported in this environment. Reason: " + reason, api.config.alertOnFail);
	    }

	    api.fail = fail;

	    function warn(msg) {
	        alertOrLog("Rangy warning: " + msg, api.config.alertOnWarn);
	    }

	    api.warn = warn;

	    // Add utility extend() method
	    var extend;
	    if ({}.hasOwnProperty) {
	        util.extend = extend = function(obj, props, deep) {
	            var o, p;
	            for (var i in props) {
	                if (props.hasOwnProperty(i)) {
	                    o = obj[i];
	                    p = props[i];
	                    if (deep && o !== null && typeof o == "object" && p !== null && typeof p == "object") {
	                        extend(o, p, true);
	                    }
	                    obj[i] = p;
	                }
	            }
	            // Special case for toString, which does not show up in for...in loops in IE <= 8
	            if (props.hasOwnProperty("toString")) {
	                obj.toString = props.toString;
	            }
	            return obj;
	        };

	        util.createOptions = function(optionsParam, defaults) {
	            var options = {};
	            extend(options, defaults);
	            if (optionsParam) {
	                extend(options, optionsParam);
	            }
	            return options;
	        };
	    } else {
	        fail("hasOwnProperty not supported");
	    }

	    // Test whether we're in a browser and bail out if not
	    if (!isBrowser) {
	        fail("Rangy can only run in a browser");
	    }

	    // Test whether Array.prototype.slice can be relied on for NodeLists and use an alternative toArray() if not
	    (function() {
	        var toArray;

	        if (isBrowser) {
	            var el = document.createElement("div");
	            el.appendChild(document.createElement("span"));
	            var slice = [].slice;
	            try {
	                if (slice.call(el.childNodes, 0)[0].nodeType == 1) {
	                    toArray = function(arrayLike) {
	                        return slice.call(arrayLike, 0);
	                    };
	                }
	            } catch (e) {}
	        }

	        if (!toArray) {
	            toArray = function(arrayLike) {
	                var arr = [];
	                for (var i = 0, len = arrayLike.length; i < len; ++i) {
	                    arr[i] = arrayLike[i];
	                }
	                return arr;
	            };
	        }

	        util.toArray = toArray;
	    })();

	    // Very simple event handler wrapper function that doesn't attempt to solve issues such as "this" handling or
	    // normalization of event properties
	    var addListener;
	    if (isBrowser) {
	        if (isHostMethod(document, "addEventListener")) {
	            addListener = function(obj, eventType, listener) {
	                obj.addEventListener(eventType, listener, false);
	            };
	        } else if (isHostMethod(document, "attachEvent")) {
	            addListener = function(obj, eventType, listener) {
	                obj.attachEvent("on" + eventType, listener);
	            };
	        } else {
	            fail("Document does not have required addEventListener or attachEvent method");
	        }

	        util.addListener = addListener;
	    }

	    var initListeners = [];

	    function getErrorDesc(ex) {
	        return ex.message || ex.description || String(ex);
	    }

	    // Initialization
	    function init() {
	        if (!isBrowser || api.initialized) {
	            return;
	        }
	        var testRange;
	        var implementsDomRange = false, implementsTextRange = false;

	        // First, perform basic feature tests

	        if (isHostMethod(document, "createRange")) {
	            testRange = document.createRange();
	            if (areHostMethods(testRange, domRangeMethods) && areHostProperties(testRange, domRangeProperties)) {
	                implementsDomRange = true;
	            }
	        }

	        var body = getBody(document);
	        if (!body || body.nodeName.toLowerCase() != "body") {
	            fail("No body element found");
	            return;
	        }

	        if (body && isHostMethod(body, "createTextRange")) {
	            testRange = body.createTextRange();
	            if (isTextRange(testRange)) {
	                implementsTextRange = true;
	            }
	        }

	        if (!implementsDomRange && !implementsTextRange) {
	            fail("Neither Range nor TextRange are available");
	            return;
	        }

	        api.initialized = true;
	        api.features = {
	            implementsDomRange: implementsDomRange,
	            implementsTextRange: implementsTextRange
	        };

	        // Initialize modules
	        var module, errorMessage;
	        for (var moduleName in modules) {
	            if ( (module = modules[moduleName]) instanceof Module ) {
	                module.init(module, api);
	            }
	        }

	        // Call init listeners
	        for (var i = 0, len = initListeners.length; i < len; ++i) {
	            try {
	                initListeners[i](api);
	            } catch (ex) {
	                errorMessage = "Rangy init listener threw an exception. Continuing. Detail: " + getErrorDesc(ex);
	                consoleLog(errorMessage);
	            }
	        }
	    }

	    function deprecationNotice(deprecated, replacement, module) {
	        if (module) {
	            deprecated += " in module " + module.name;
	        }
	        api.warn("DEPRECATED: " + deprecated + " is deprecated. Please use " +
	        replacement + " instead.");
	    }

	    function createAliasForDeprecatedMethod(owner, deprecated, replacement, module) {
	        owner[deprecated] = function() {
	            deprecationNotice(deprecated, replacement, module);
	            return owner[replacement].apply(owner, util.toArray(arguments));
	        };
	    }

	    util.deprecationNotice = deprecationNotice;
	    util.createAliasForDeprecatedMethod = createAliasForDeprecatedMethod;

	    // Allow external scripts to initialize this library in case it's loaded after the document has loaded
	    api.init = init;

	    // Execute listener immediately if already initialized
	    api.addInitListener = function(listener) {
	        if (api.initialized) {
	            listener(api);
	        } else {
	            initListeners.push(listener);
	        }
	    };

	    var shimListeners = [];

	    api.addShimListener = function(listener) {
	        shimListeners.push(listener);
	    };

	    function shim(win) {
	        win = win || window;
	        init();

	        // Notify listeners
	        for (var i = 0, len = shimListeners.length; i < len; ++i) {
	            shimListeners[i](win);
	        }
	    }

	    if (isBrowser) {
	        api.shim = api.createMissingNativeApi = shim;
	        createAliasForDeprecatedMethod(api, "createMissingNativeApi", "shim");
	    }

	    function Module(name, dependencies, initializer) {
	        this.name = name;
	        this.dependencies = dependencies;
	        this.initialized = false;
	        this.supported = false;
	        this.initializer = initializer;
	    }

	    Module.prototype = {
	        init: function() {
	            var requiredModuleNames = this.dependencies || [];
	            for (var i = 0, len = requiredModuleNames.length, requiredModule, moduleName; i < len; ++i) {
	                moduleName = requiredModuleNames[i];

	                requiredModule = modules[moduleName];
	                if (!requiredModule || !(requiredModule instanceof Module)) {
	                    throw new Error("required module '" + moduleName + "' not found");
	                }

	                requiredModule.init();

	                if (!requiredModule.supported) {
	                    throw new Error("required module '" + moduleName + "' not supported");
	                }
	            }

	            // Now run initializer
	            this.initializer(this);
	        },

	        fail: function(reason) {
	            this.initialized = true;
	            this.supported = false;
	            throw new Error(reason);
	        },

	        warn: function(msg) {
	            api.warn("Module " + this.name + ": " + msg);
	        },

	        deprecationNotice: function(deprecated, replacement) {
	            api.warn("DEPRECATED: " + deprecated + " in module " + this.name + " is deprecated. Please use " +
	                replacement + " instead");
	        },

	        createError: function(msg) {
	            return new Error("Error in Rangy " + this.name + " module: " + msg);
	        }
	    };

	    function createModule(name, dependencies, initFunc) {
	        var newModule = new Module(name, dependencies, function(module) {
	            if (!module.initialized) {
	                module.initialized = true;
	                try {
	                    initFunc(api, module);
	                    module.supported = true;
	                } catch (ex) {
	                    var errorMessage = "Module '" + name + "' failed to load: " + getErrorDesc(ex);
	                    consoleLog(errorMessage);
	                    if (ex.stack) {
	                        consoleLog(ex.stack);
	                    }
	                }
	            }
	        });
	        modules[name] = newModule;
	        return newModule;
	    }

	    api.createModule = function(name) {
	        // Allow 2 or 3 arguments (second argument is an optional array of dependencies)
	        var initFunc, dependencies;
	        if (arguments.length == 2) {
	            initFunc = arguments[1];
	            dependencies = [];
	        } else {
	            initFunc = arguments[2];
	            dependencies = arguments[1];
	        }

	        var module = createModule(name, dependencies, initFunc);

	        // Initialize the module immediately if the core is already initialized
	        if (api.initialized && api.supported) {
	            module.init();
	        }
	    };

	    api.createCoreModule = function(name, dependencies, initFunc) {
	        createModule(name, dependencies, initFunc);
	    };

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // Ensure rangy.rangePrototype and rangy.selectionPrototype are available immediately

	    function RangePrototype() {}
	    api.RangePrototype = RangePrototype;
	    api.rangePrototype = new RangePrototype();

	    function SelectionPrototype() {}
	    api.selectionPrototype = new SelectionPrototype();

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // DOM utility methods used by Rangy
	    api.createCoreModule("DomUtil", [], function(api, module) {
	        var UNDEF = "undefined";
	        var util = api.util;
	        var getBody = util.getBody;

	        // Perform feature tests
	        if (!util.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"])) {
	            module.fail("document missing a Node creation method");
	        }

	        if (!util.isHostMethod(document, "getElementsByTagName")) {
	            module.fail("document missing getElementsByTagName method");
	        }

	        var el = document.createElement("div");
	        if (!util.areHostMethods(el, ["insertBefore", "appendChild", "cloneNode"] ||
	                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]))) {
	            module.fail("Incomplete Element implementation");
	        }

	        // innerHTML is required for Range's createContextualFragment method
	        if (!util.isHostProperty(el, "innerHTML")) {
	            module.fail("Element is missing innerHTML property");
	        }

	        var textNode = document.createTextNode("test");
	        if (!util.areHostMethods(textNode, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"] ||
	                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]) ||
	                !util.areHostProperties(textNode, ["data"]))) {
	            module.fail("Incomplete Text Node implementation");
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // Removed use of indexOf because of a bizarre bug in Opera that is thrown in one of the Acid3 tests. I haven't been
	        // able to replicate it outside of the test. The bug is that indexOf returns -1 when called on an Array that
	        // contains just the document as a single element and the value searched for is the document.
	        var arrayContains = /*Array.prototype.indexOf ?
	            function(arr, val) {
	                return arr.indexOf(val) > -1;
	            }:*/

	            function(arr, val) {
	                var i = arr.length;
	                while (i--) {
	                    if (arr[i] === val) {
	                        return true;
	                    }
	                }
	                return false;
	            };

	        // Opera 11 puts HTML elements in the null namespace, it seems, and IE 7 has undefined namespaceURI
	        function isHtmlNamespace(node) {
	            var ns;
	            return typeof node.namespaceURI == UNDEF || ((ns = node.namespaceURI) === null || ns == "http://www.w3.org/1999/xhtml");
	        }

	        function parentElement(node) {
	            var parent = node.parentNode;
	            return (parent.nodeType == 1) ? parent : null;
	        }

	        function getNodeIndex(node) {
	            var i = 0;
	            while( (node = node.previousSibling) ) {
	                ++i;
	            }
	            return i;
	        }

	        function getNodeLength(node) {
	            switch (node.nodeType) {
	                case 7:
	                case 10:
	                    return 0;
	                case 3:
	                case 8:
	                    return node.length;
	                default:
	                    return node.childNodes.length;
	            }
	        }

	        function getCommonAncestor(node1, node2) {
	            var ancestors = [], n;
	            for (n = node1; n; n = n.parentNode) {
	                ancestors.push(n);
	            }

	            for (n = node2; n; n = n.parentNode) {
	                if (arrayContains(ancestors, n)) {
	                    return n;
	                }
	            }

	            return null;
	        }

	        function isAncestorOf(ancestor, descendant, selfIsAncestor) {
	            var n = selfIsAncestor ? descendant : descendant.parentNode;
	            while (n) {
	                if (n === ancestor) {
	                    return true;
	                } else {
	                    n = n.parentNode;
	                }
	            }
	            return false;
	        }

	        function isOrIsAncestorOf(ancestor, descendant) {
	            return isAncestorOf(ancestor, descendant, true);
	        }

	        function getClosestAncestorIn(node, ancestor, selfIsAncestor) {
	            var p, n = selfIsAncestor ? node : node.parentNode;
	            while (n) {
	                p = n.parentNode;
	                if (p === ancestor) {
	                    return n;
	                }
	                n = p;
	            }
	            return null;
	        }

	        function isCharacterDataNode(node) {
	            var t = node.nodeType;
	            return t == 3 || t == 4 || t == 8 ; // Text, CDataSection or Comment
	        }

	        function isTextOrCommentNode(node) {
	            if (!node) {
	                return false;
	            }
	            var t = node.nodeType;
	            return t == 3 || t == 8 ; // Text or Comment
	        }

	        function insertAfter(node, precedingNode) {
	            var nextNode = precedingNode.nextSibling, parent = precedingNode.parentNode;
	            if (nextNode) {
	                parent.insertBefore(node, nextNode);
	            } else {
	                parent.appendChild(node);
	            }
	            return node;
	        }

	        // Note that we cannot use splitText() because it is bugridden in IE 9.
	        function splitDataNode(node, index, positionsToPreserve) {
	            var newNode = node.cloneNode(false);
	            newNode.deleteData(0, index);
	            node.deleteData(index, node.length - index);
	            insertAfter(newNode, node);

	            // Preserve positions
	            if (positionsToPreserve) {
	                for (var i = 0, position; position = positionsToPreserve[i++]; ) {
	                    // Handle case where position was inside the portion of node after the split point
	                    if (position.node == node && position.offset > index) {
	                        position.node = newNode;
	                        position.offset -= index;
	                    }
	                    // Handle the case where the position is a node offset within node's parent
	                    else if (position.node == node.parentNode && position.offset > getNodeIndex(node)) {
	                        ++position.offset;
	                    }
	                }
	            }
	            return newNode;
	        }

	        function getDocument(node) {
	            if (node.nodeType == 9) {
	                return node;
	            } else if (typeof node.ownerDocument != UNDEF) {
	                return node.ownerDocument;
	            } else if (typeof node.document != UNDEF) {
	                return node.document;
	            } else if (node.parentNode) {
	                return getDocument(node.parentNode);
	            } else {
	                throw module.createError("getDocument: no document found for node");
	            }
	        }

	        function getWindow(node) {
	            var doc = getDocument(node);
	            if (typeof doc.defaultView != UNDEF) {
	                return doc.defaultView;
	            } else if (typeof doc.parentWindow != UNDEF) {
	                return doc.parentWindow;
	            } else {
	                throw module.createError("Cannot get a window object for node");
	            }
	        }

	        function getIframeDocument(iframeEl) {
	            if (typeof iframeEl.contentDocument != UNDEF) {
	                return iframeEl.contentDocument;
	            } else if (typeof iframeEl.contentWindow != UNDEF) {
	                return iframeEl.contentWindow.document;
	            } else {
	                throw module.createError("getIframeDocument: No Document object found for iframe element");
	            }
	        }

	        function getIframeWindow(iframeEl) {
	            if (typeof iframeEl.contentWindow != UNDEF) {
	                return iframeEl.contentWindow;
	            } else if (typeof iframeEl.contentDocument != UNDEF) {
	                return iframeEl.contentDocument.defaultView;
	            } else {
	                throw module.createError("getIframeWindow: No Window object found for iframe element");
	            }
	        }

	        // This looks bad. Is it worth it?
	        function isWindow(obj) {
	            return obj && util.isHostMethod(obj, "setTimeout") && util.isHostObject(obj, "document");
	        }

	        function getContentDocument(obj, module, methodName) {
	            var doc;

	            if (!obj) {
	                doc = document;
	            }

	            // Test if a DOM node has been passed and obtain a document object for it if so
	            else if (util.isHostProperty(obj, "nodeType")) {
	                doc = (obj.nodeType == 1 && obj.tagName.toLowerCase() == "iframe") ?
	                    getIframeDocument(obj) : getDocument(obj);
	            }

	            // Test if the doc parameter appears to be a Window object
	            else if (isWindow(obj)) {
	                doc = obj.document;
	            }

	            if (!doc) {
	                throw module.createError(methodName + "(): Parameter must be a Window object or DOM node");
	            }

	            return doc;
	        }

	        function getRootContainer(node) {
	            var parent;
	            while ( (parent = node.parentNode) ) {
	                node = parent;
	            }
	            return node;
	        }

	        function comparePoints(nodeA, offsetA, nodeB, offsetB) {
	            // See http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Comparing
	            var nodeC, root, childA, childB, n;
	            if (nodeA == nodeB) {
	                // Case 1: nodes are the same
	                return offsetA === offsetB ? 0 : (offsetA < offsetB) ? -1 : 1;
	            } else if ( (nodeC = getClosestAncestorIn(nodeB, nodeA, true)) ) {
	                // Case 2: node C (container B or an ancestor) is a child node of A
	                return offsetA <= getNodeIndex(nodeC) ? -1 : 1;
	            } else if ( (nodeC = getClosestAncestorIn(nodeA, nodeB, true)) ) {
	                // Case 3: node C (container A or an ancestor) is a child node of B
	                return getNodeIndex(nodeC) < offsetB  ? -1 : 1;
	            } else {
	                root = getCommonAncestor(nodeA, nodeB);
	                if (!root) {
	                    throw new Error("comparePoints error: nodes have no common ancestor");
	                }

	                // Case 4: containers are siblings or descendants of siblings
	                childA = (nodeA === root) ? root : getClosestAncestorIn(nodeA, root, true);
	                childB = (nodeB === root) ? root : getClosestAncestorIn(nodeB, root, true);

	                if (childA === childB) {
	                    // This shouldn't be possible
	                    throw module.createError("comparePoints got to case 4 and childA and childB are the same!");
	                } else {
	                    n = root.firstChild;
	                    while (n) {
	                        if (n === childA) {
	                            return -1;
	                        } else if (n === childB) {
	                            return 1;
	                        }
	                        n = n.nextSibling;
	                    }
	                }
	            }
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // Test for IE's crash (IE 6/7) or exception (IE >= 8) when a reference to garbage-collected text node is queried
	        var crashyTextNodes = false;

	        function isBrokenNode(node) {
	            var n;
	            try {
	                n = node.parentNode;
	                return false;
	            } catch (e) {
	                return true;
	            }
	        }

	        (function() {
	            var el = document.createElement("b");
	            el.innerHTML = "1";
	            var textNode = el.firstChild;
	            el.innerHTML = "<br />";
	            crashyTextNodes = isBrokenNode(textNode);

	            api.features.crashyTextNodes = crashyTextNodes;
	        })();

	        /*----------------------------------------------------------------------------------------------------------------*/

	        function inspectNode(node) {
	            if (!node) {
	                return "[No node]";
	            }
	            if (crashyTextNodes && isBrokenNode(node)) {
	                return "[Broken node]";
	            }
	            if (isCharacterDataNode(node)) {
	                return '"' + node.data + '"';
	            }
	            if (node.nodeType == 1) {
	                var idAttr = node.id ? ' id="' + node.id + '"' : "";
	                return "<" + node.nodeName + idAttr + ">[index:" + getNodeIndex(node) + ",length:" + node.childNodes.length + "][" + (node.innerHTML || "[innerHTML not supported]").slice(0, 25) + "]";
	            }
	            return node.nodeName;
	        }

	        function fragmentFromNodeChildren(node) {
	            var fragment = getDocument(node).createDocumentFragment(), child;
	            while ( (child = node.firstChild) ) {
	                fragment.appendChild(child);
	            }
	            return fragment;
	        }

	        var getComputedStyleProperty;
	        if (typeof window.getComputedStyle != UNDEF) {
	            getComputedStyleProperty = function(el, propName) {
	                return getWindow(el).getComputedStyle(el, null)[propName];
	            };
	        } else if (typeof document.documentElement.currentStyle != UNDEF) {
	            getComputedStyleProperty = function(el, propName) {
	                return el.currentStyle ? el.currentStyle[propName] : "";
	            };
	        } else {
	            module.fail("No means of obtaining computed style properties found");
	        }

	        function createTestElement(doc, html, contentEditable) {
	            var body = getBody(doc);
	            var el = doc.createElement("div");
	            el.contentEditable = "" + !!contentEditable;
	            if (html) {
	                el.innerHTML = html;
	            }

	            // Insert the test element at the start of the body to prevent scrolling to the bottom in iOS (issue #292)
	            var bodyFirstChild = body.firstChild;
	            if (bodyFirstChild) {
	                body.insertBefore(el, bodyFirstChild);
	            } else {
	                body.appendChild(el);
	            }

	            return el;
	        }

	        function removeNode(node) {
	            return node.parentNode.removeChild(node);
	        }

	        function NodeIterator(root) {
	            this.root = root;
	            this._next = root;
	        }

	        NodeIterator.prototype = {
	            _current: null,

	            hasNext: function() {
	                return !!this._next;
	            },

	            next: function() {
	                var n = this._current = this._next;
	                var child, next;
	                if (this._current) {
	                    child = n.firstChild;
	                    if (child) {
	                        this._next = child;
	                    } else {
	                        next = null;
	                        while ((n !== this.root) && !(next = n.nextSibling)) {
	                            n = n.parentNode;
	                        }
	                        this._next = next;
	                    }
	                }
	                return this._current;
	            },

	            detach: function() {
	                this._current = this._next = this.root = null;
	            }
	        };

	        function createIterator(root) {
	            return new NodeIterator(root);
	        }

	        function DomPosition(node, offset) {
	            this.node = node;
	            this.offset = offset;
	        }

	        DomPosition.prototype = {
	            equals: function(pos) {
	                return !!pos && this.node === pos.node && this.offset == pos.offset;
	            },

	            inspect: function() {
	                return "[DomPosition(" + inspectNode(this.node) + ":" + this.offset + ")]";
	            },

	            toString: function() {
	                return this.inspect();
	            }
	        };

	        function DOMException(codeName) {
	            this.code = this[codeName];
	            this.codeName = codeName;
	            this.message = "DOMException: " + this.codeName;
	        }

	        DOMException.prototype = {
	            INDEX_SIZE_ERR: 1,
	            HIERARCHY_REQUEST_ERR: 3,
	            WRONG_DOCUMENT_ERR: 4,
	            NO_MODIFICATION_ALLOWED_ERR: 7,
	            NOT_FOUND_ERR: 8,
	            NOT_SUPPORTED_ERR: 9,
	            INVALID_STATE_ERR: 11,
	            INVALID_NODE_TYPE_ERR: 24
	        };

	        DOMException.prototype.toString = function() {
	            return this.message;
	        };

	        api.dom = {
	            arrayContains: arrayContains,
	            isHtmlNamespace: isHtmlNamespace,
	            parentElement: parentElement,
	            getNodeIndex: getNodeIndex,
	            getNodeLength: getNodeLength,
	            getCommonAncestor: getCommonAncestor,
	            isAncestorOf: isAncestorOf,
	            isOrIsAncestorOf: isOrIsAncestorOf,
	            getClosestAncestorIn: getClosestAncestorIn,
	            isCharacterDataNode: isCharacterDataNode,
	            isTextOrCommentNode: isTextOrCommentNode,
	            insertAfter: insertAfter,
	            splitDataNode: splitDataNode,
	            getDocument: getDocument,
	            getWindow: getWindow,
	            getIframeWindow: getIframeWindow,
	            getIframeDocument: getIframeDocument,
	            getBody: getBody,
	            isWindow: isWindow,
	            getContentDocument: getContentDocument,
	            getRootContainer: getRootContainer,
	            comparePoints: comparePoints,
	            isBrokenNode: isBrokenNode,
	            inspectNode: inspectNode,
	            getComputedStyleProperty: getComputedStyleProperty,
	            createTestElement: createTestElement,
	            removeNode: removeNode,
	            fragmentFromNodeChildren: fragmentFromNodeChildren,
	            createIterator: createIterator,
	            DomPosition: DomPosition
	        };

	        api.DOMException = DOMException;
	    });

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // Pure JavaScript implementation of DOM Range
	    api.createCoreModule("DomRange", ["DomUtil"], function(api, module) {
	        var dom = api.dom;
	        var util = api.util;
	        var DomPosition = dom.DomPosition;
	        var DOMException = api.DOMException;

	        var isCharacterDataNode = dom.isCharacterDataNode;
	        var getNodeIndex = dom.getNodeIndex;
	        var isOrIsAncestorOf = dom.isOrIsAncestorOf;
	        var getDocument = dom.getDocument;
	        var comparePoints = dom.comparePoints;
	        var splitDataNode = dom.splitDataNode;
	        var getClosestAncestorIn = dom.getClosestAncestorIn;
	        var getNodeLength = dom.getNodeLength;
	        var arrayContains = dom.arrayContains;
	        var getRootContainer = dom.getRootContainer;
	        var crashyTextNodes = api.features.crashyTextNodes;

	        var removeNode = dom.removeNode;

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // Utility functions

	        function isNonTextPartiallySelected(node, range) {
	            return (node.nodeType != 3) &&
	                   (isOrIsAncestorOf(node, range.startContainer) || isOrIsAncestorOf(node, range.endContainer));
	        }

	        function getRangeDocument(range) {
	            return range.document || getDocument(range.startContainer);
	        }

	        function getRangeRoot(range) {
	            return getRootContainer(range.startContainer);
	        }

	        function getBoundaryBeforeNode(node) {
	            return new DomPosition(node.parentNode, getNodeIndex(node));
	        }

	        function getBoundaryAfterNode(node) {
	            return new DomPosition(node.parentNode, getNodeIndex(node) + 1);
	        }

	        function insertNodeAtPosition(node, n, o) {
	            var firstNodeInserted = node.nodeType == 11 ? node.firstChild : node;
	            if (isCharacterDataNode(n)) {
	                if (o == n.length) {
	                    dom.insertAfter(node, n);
	                } else {
	                    n.parentNode.insertBefore(node, o == 0 ? n : splitDataNode(n, o));
	                }
	            } else if (o >= n.childNodes.length) {
	                n.appendChild(node);
	            } else {
	                n.insertBefore(node, n.childNodes[o]);
	            }
	            return firstNodeInserted;
	        }

	        function rangesIntersect(rangeA, rangeB, touchingIsIntersecting) {
	            assertRangeValid(rangeA);
	            assertRangeValid(rangeB);

	            if (getRangeDocument(rangeB) != getRangeDocument(rangeA)) {
	                throw new DOMException("WRONG_DOCUMENT_ERR");
	            }

	            var startComparison = comparePoints(rangeA.startContainer, rangeA.startOffset, rangeB.endContainer, rangeB.endOffset),
	                endComparison = comparePoints(rangeA.endContainer, rangeA.endOffset, rangeB.startContainer, rangeB.startOffset);

	            return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
	        }

	        function cloneSubtree(iterator) {
	            var partiallySelected;
	            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {
	                partiallySelected = iterator.isPartiallySelectedSubtree();
	                node = node.cloneNode(!partiallySelected);
	                if (partiallySelected) {
	                    subIterator = iterator.getSubtreeIterator();
	                    node.appendChild(cloneSubtree(subIterator));
	                    subIterator.detach();
	                }

	                if (node.nodeType == 10) { // DocumentType
	                    throw new DOMException("HIERARCHY_REQUEST_ERR");
	                }
	                frag.appendChild(node);
	            }
	            return frag;
	        }

	        function iterateSubtree(rangeIterator, func, iteratorState) {
	            var it, n;
	            iteratorState = iteratorState || { stop: false };
	            for (var node, subRangeIterator; node = rangeIterator.next(); ) {
	                if (rangeIterator.isPartiallySelectedSubtree()) {
	                    if (func(node) === false) {
	                        iteratorState.stop = true;
	                        return;
	                    } else {
	                        // The node is partially selected by the Range, so we can use a new RangeIterator on the portion of
	                        // the node selected by the Range.
	                        subRangeIterator = rangeIterator.getSubtreeIterator();
	                        iterateSubtree(subRangeIterator, func, iteratorState);
	                        subRangeIterator.detach();
	                        if (iteratorState.stop) {
	                            return;
	                        }
	                    }
	                } else {
	                    // The whole node is selected, so we can use efficient DOM iteration to iterate over the node and its
	                    // descendants
	                    it = dom.createIterator(node);
	                    while ( (n = it.next()) ) {
	                        if (func(n) === false) {
	                            iteratorState.stop = true;
	                            return;
	                        }
	                    }
	                }
	            }
	        }

	        function deleteSubtree(iterator) {
	            var subIterator;
	            while (iterator.next()) {
	                if (iterator.isPartiallySelectedSubtree()) {
	                    subIterator = iterator.getSubtreeIterator();
	                    deleteSubtree(subIterator);
	                    subIterator.detach();
	                } else {
	                    iterator.remove();
	                }
	            }
	        }

	        function extractSubtree(iterator) {
	            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {

	                if (iterator.isPartiallySelectedSubtree()) {
	                    node = node.cloneNode(false);
	                    subIterator = iterator.getSubtreeIterator();
	                    node.appendChild(extractSubtree(subIterator));
	                    subIterator.detach();
	                } else {
	                    iterator.remove();
	                }
	                if (node.nodeType == 10) { // DocumentType
	                    throw new DOMException("HIERARCHY_REQUEST_ERR");
	                }
	                frag.appendChild(node);
	            }
	            return frag;
	        }

	        function getNodesInRange(range, nodeTypes, filter) {
	            var filterNodeTypes = !!(nodeTypes && nodeTypes.length), regex;
	            var filterExists = !!filter;
	            if (filterNodeTypes) {
	                regex = new RegExp("^(" + nodeTypes.join("|") + ")$");
	            }

	            var nodes = [];
	            iterateSubtree(new RangeIterator(range, false), function(node) {
	                if (filterNodeTypes && !regex.test(node.nodeType)) {
	                    return;
	                }
	                if (filterExists && !filter(node)) {
	                    return;
	                }
	                // Don't include a boundary container if it is a character data node and the range does not contain any
	                // of its character data. See issue 190.
	                var sc = range.startContainer;
	                if (node == sc && isCharacterDataNode(sc) && range.startOffset == sc.length) {
	                    return;
	                }

	                var ec = range.endContainer;
	                if (node == ec && isCharacterDataNode(ec) && range.endOffset == 0) {
	                    return;
	                }

	                nodes.push(node);
	            });
	            return nodes;
	        }

	        function inspect(range) {
	            var name = (typeof range.getName == "undefined") ? "Range" : range.getName();
	            return "[" + name + "(" + dom.inspectNode(range.startContainer) + ":" + range.startOffset + ", " +
	                    dom.inspectNode(range.endContainer) + ":" + range.endOffset + ")]";
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // RangeIterator code partially borrows from IERange by Tim Ryan (http://github.com/timcameronryan/IERange)

	        function RangeIterator(range, clonePartiallySelectedTextNodes) {
	            this.range = range;
	            this.clonePartiallySelectedTextNodes = clonePartiallySelectedTextNodes;


	            if (!range.collapsed) {
	                this.sc = range.startContainer;
	                this.so = range.startOffset;
	                this.ec = range.endContainer;
	                this.eo = range.endOffset;
	                var root = range.commonAncestorContainer;

	                if (this.sc === this.ec && isCharacterDataNode(this.sc)) {
	                    this.isSingleCharacterDataNode = true;
	                    this._first = this._last = this._next = this.sc;
	                } else {
	                    this._first = this._next = (this.sc === root && !isCharacterDataNode(this.sc)) ?
	                        this.sc.childNodes[this.so] : getClosestAncestorIn(this.sc, root, true);
	                    this._last = (this.ec === root && !isCharacterDataNode(this.ec)) ?
	                        this.ec.childNodes[this.eo - 1] : getClosestAncestorIn(this.ec, root, true);
	                }
	            }
	        }

	        RangeIterator.prototype = {
	            _current: null,
	            _next: null,
	            _first: null,
	            _last: null,
	            isSingleCharacterDataNode: false,

	            reset: function() {
	                this._current = null;
	                this._next = this._first;
	            },

	            hasNext: function() {
	                return !!this._next;
	            },

	            next: function() {
	                // Move to next node
	                var current = this._current = this._next;
	                if (current) {
	                    this._next = (current !== this._last) ? current.nextSibling : null;

	                    // Check for partially selected text nodes
	                    if (isCharacterDataNode(current) && this.clonePartiallySelectedTextNodes) {
	                        if (current === this.ec) {
	                            (current = current.cloneNode(true)).deleteData(this.eo, current.length - this.eo);
	                        }
	                        if (this._current === this.sc) {
	                            (current = current.cloneNode(true)).deleteData(0, this.so);
	                        }
	                    }
	                }

	                return current;
	            },

	            remove: function() {
	                var current = this._current, start, end;

	                if (isCharacterDataNode(current) && (current === this.sc || current === this.ec)) {
	                    start = (current === this.sc) ? this.so : 0;
	                    end = (current === this.ec) ? this.eo : current.length;
	                    if (start != end) {
	                        current.deleteData(start, end - start);
	                    }
	                } else {
	                    if (current.parentNode) {
	                        removeNode(current);
	                    } else {
	                    }
	                }
	            },

	            // Checks if the current node is partially selected
	            isPartiallySelectedSubtree: function() {
	                var current = this._current;
	                return isNonTextPartiallySelected(current, this.range);
	            },

	            getSubtreeIterator: function() {
	                var subRange;
	                if (this.isSingleCharacterDataNode) {
	                    subRange = this.range.cloneRange();
	                    subRange.collapse(false);
	                } else {
	                    subRange = new Range(getRangeDocument(this.range));
	                    var current = this._current;
	                    var startContainer = current, startOffset = 0, endContainer = current, endOffset = getNodeLength(current);

	                    if (isOrIsAncestorOf(current, this.sc)) {
	                        startContainer = this.sc;
	                        startOffset = this.so;
	                    }
	                    if (isOrIsAncestorOf(current, this.ec)) {
	                        endContainer = this.ec;
	                        endOffset = this.eo;
	                    }

	                    updateBoundaries(subRange, startContainer, startOffset, endContainer, endOffset);
	                }
	                return new RangeIterator(subRange, this.clonePartiallySelectedTextNodes);
	            },

	            detach: function() {
	                this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null;
	            }
	        };

	        /*----------------------------------------------------------------------------------------------------------------*/

	        var beforeAfterNodeTypes = [1, 3, 4, 5, 7, 8, 10];
	        var rootContainerNodeTypes = [2, 9, 11];
	        var readonlyNodeTypes = [5, 6, 10, 12];
	        var insertableNodeTypes = [1, 3, 4, 5, 7, 8, 10, 11];
	        var surroundNodeTypes = [1, 3, 4, 5, 7, 8];

	        function createAncestorFinder(nodeTypes) {
	            return function(node, selfIsAncestor) {
	                var t, n = selfIsAncestor ? node : node.parentNode;
	                while (n) {
	                    t = n.nodeType;
	                    if (arrayContains(nodeTypes, t)) {
	                        return n;
	                    }
	                    n = n.parentNode;
	                }
	                return null;
	            };
	        }

	        var getDocumentOrFragmentContainer = createAncestorFinder( [9, 11] );
	        var getReadonlyAncestor = createAncestorFinder(readonlyNodeTypes);
	        var getDocTypeNotationEntityAncestor = createAncestorFinder( [6, 10, 12] );

	        function assertNoDocTypeNotationEntityAncestor(node, allowSelf) {
	            if (getDocTypeNotationEntityAncestor(node, allowSelf)) {
	                throw new DOMException("INVALID_NODE_TYPE_ERR");
	            }
	        }

	        function assertValidNodeType(node, invalidTypes) {
	            if (!arrayContains(invalidTypes, node.nodeType)) {
	                throw new DOMException("INVALID_NODE_TYPE_ERR");
	            }
	        }

	        function assertValidOffset(node, offset) {
	            if (offset < 0 || offset > (isCharacterDataNode(node) ? node.length : node.childNodes.length)) {
	                throw new DOMException("INDEX_SIZE_ERR");
	            }
	        }

	        function assertSameDocumentOrFragment(node1, node2) {
	            if (getDocumentOrFragmentContainer(node1, true) !== getDocumentOrFragmentContainer(node2, true)) {
	                throw new DOMException("WRONG_DOCUMENT_ERR");
	            }
	        }

	        function assertNodeNotReadOnly(node) {
	            if (getReadonlyAncestor(node, true)) {
	                throw new DOMException("NO_MODIFICATION_ALLOWED_ERR");
	            }
	        }

	        function assertNode(node, codeName) {
	            if (!node) {
	                throw new DOMException(codeName);
	            }
	        }

	        function isValidOffset(node, offset) {
	            return offset <= (isCharacterDataNode(node) ? node.length : node.childNodes.length);
	        }

	        function isRangeValid(range) {
	            return (!!range.startContainer && !!range.endContainer &&
	                    !(crashyTextNodes && (dom.isBrokenNode(range.startContainer) || dom.isBrokenNode(range.endContainer))) &&
	                    getRootContainer(range.startContainer) == getRootContainer(range.endContainer) &&
	                    isValidOffset(range.startContainer, range.startOffset) &&
	                    isValidOffset(range.endContainer, range.endOffset));
	        }

	        function assertRangeValid(range) {
	            if (!isRangeValid(range)) {
	                throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: (" + range.inspect() + ")");
	            }
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // Test the browser's innerHTML support to decide how to implement createContextualFragment
	        var styleEl = document.createElement("style");
	        var htmlParsingConforms = false;
	        try {
	            styleEl.innerHTML = "<b>x</b>";
	            htmlParsingConforms = (styleEl.firstChild.nodeType == 3); // Opera incorrectly creates an element node
	        } catch (e) {
	            // IE 6 and 7 throw
	        }

	        api.features.htmlParsingConforms = htmlParsingConforms;

	        var createContextualFragment = htmlParsingConforms ?

	            // Implementation as per HTML parsing spec, trusting in the browser's implementation of innerHTML. See
	            // discussion and base code for this implementation at issue 67.
	            // Spec: http://html5.org/specs/dom-parsing.html#extensions-to-the-range-interface
	            // Thanks to Aleks Williams.
	            function(fragmentStr) {
	                // "Let node the context object's start's node."
	                var node = this.startContainer;
	                var doc = getDocument(node);

	                // "If the context object's start's node is null, raise an INVALID_STATE_ERR
	                // exception and abort these steps."
	                if (!node) {
	                    throw new DOMException("INVALID_STATE_ERR");
	                }

	                // "Let element be as follows, depending on node's interface:"
	                // Document, Document Fragment: null
	                var el = null;

	                // "Element: node"
	                if (node.nodeType == 1) {
	                    el = node;

	                // "Text, Comment: node's parentElement"
	                } else if (isCharacterDataNode(node)) {
	                    el = dom.parentElement(node);
	                }

	                // "If either element is null or element's ownerDocument is an HTML document
	                // and element's local name is "html" and element's namespace is the HTML
	                // namespace"
	                if (el === null || (
	                    el.nodeName == "HTML" &&
	                    dom.isHtmlNamespace(getDocument(el).documentElement) &&
	                    dom.isHtmlNamespace(el)
	                )) {

	                // "let element be a new Element with "body" as its local name and the HTML
	                // namespace as its namespace.""
	                    el = doc.createElement("body");
	                } else {
	                    el = el.cloneNode(false);
	                }

	                // "If the node's document is an HTML document: Invoke the HTML fragment parsing algorithm."
	                // "If the node's document is an XML document: Invoke the XML fragment parsing algorithm."
	                // "In either case, the algorithm must be invoked with fragment as the input
	                // and element as the context element."
	                el.innerHTML = fragmentStr;

	                // "If this raises an exception, then abort these steps. Otherwise, let new
	                // children be the nodes returned."

	                // "Let fragment be a new DocumentFragment."
	                // "Append all new children to fragment."
	                // "Return fragment."
	                return dom.fragmentFromNodeChildren(el);
	            } :

	            // In this case, innerHTML cannot be trusted, so fall back to a simpler, non-conformant implementation that
	            // previous versions of Rangy used (with the exception of using a body element rather than a div)
	            function(fragmentStr) {
	                var doc = getRangeDocument(this);
	                var el = doc.createElement("body");
	                el.innerHTML = fragmentStr;

	                return dom.fragmentFromNodeChildren(el);
	            };

	        function splitRangeBoundaries(range, positionsToPreserve) {
	            assertRangeValid(range);

	            var sc = range.startContainer, so = range.startOffset, ec = range.endContainer, eo = range.endOffset;
	            var startEndSame = (sc === ec);

	            if (isCharacterDataNode(ec) && eo > 0 && eo < ec.length) {
	                splitDataNode(ec, eo, positionsToPreserve);
	            }

	            if (isCharacterDataNode(sc) && so > 0 && so < sc.length) {
	                sc = splitDataNode(sc, so, positionsToPreserve);
	                if (startEndSame) {
	                    eo -= so;
	                    ec = sc;
	                } else if (ec == sc.parentNode && eo >= getNodeIndex(sc)) {
	                    eo++;
	                }
	                so = 0;
	            }
	            range.setStartAndEnd(sc, so, ec, eo);
	        }

	        function rangeToHtml(range) {
	            assertRangeValid(range);
	            var container = range.commonAncestorContainer.parentNode.cloneNode(false);
	            container.appendChild( range.cloneContents() );
	            return container.innerHTML;
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        var rangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
	            "commonAncestorContainer"];

	        var s2s = 0, s2e = 1, e2e = 2, e2s = 3;
	        var n_b = 0, n_a = 1, n_b_a = 2, n_i = 3;

	        util.extend(api.rangePrototype, {
	            compareBoundaryPoints: function(how, range) {
	                assertRangeValid(this);
	                assertSameDocumentOrFragment(this.startContainer, range.startContainer);

	                var nodeA, offsetA, nodeB, offsetB;
	                var prefixA = (how == e2s || how == s2s) ? "start" : "end";
	                var prefixB = (how == s2e || how == s2s) ? "start" : "end";
	                nodeA = this[prefixA + "Container"];
	                offsetA = this[prefixA + "Offset"];
	                nodeB = range[prefixB + "Container"];
	                offsetB = range[prefixB + "Offset"];
	                return comparePoints(nodeA, offsetA, nodeB, offsetB);
	            },

	            insertNode: function(node) {
	                assertRangeValid(this);
	                assertValidNodeType(node, insertableNodeTypes);
	                assertNodeNotReadOnly(this.startContainer);

	                if (isOrIsAncestorOf(node, this.startContainer)) {
	                    throw new DOMException("HIERARCHY_REQUEST_ERR");
	                }

	                // No check for whether the container of the start of the Range is of a type that does not allow
	                // children of the type of node: the browser's DOM implementation should do this for us when we attempt
	                // to add the node

	                var firstNodeInserted = insertNodeAtPosition(node, this.startContainer, this.startOffset);
	                this.setStartBefore(firstNodeInserted);
	            },

	            cloneContents: function() {
	                assertRangeValid(this);

	                var clone, frag;
	                if (this.collapsed) {
	                    return getRangeDocument(this).createDocumentFragment();
	                } else {
	                    if (this.startContainer === this.endContainer && isCharacterDataNode(this.startContainer)) {
	                        clone = this.startContainer.cloneNode(true);
	                        clone.data = clone.data.slice(this.startOffset, this.endOffset);
	                        frag = getRangeDocument(this).createDocumentFragment();
	                        frag.appendChild(clone);
	                        return frag;
	                    } else {
	                        var iterator = new RangeIterator(this, true);
	                        clone = cloneSubtree(iterator);
	                        iterator.detach();
	                    }
	                    return clone;
	                }
	            },

	            canSurroundContents: function() {
	                assertRangeValid(this);
	                assertNodeNotReadOnly(this.startContainer);
	                assertNodeNotReadOnly(this.endContainer);

	                // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
	                // no non-text nodes.
	                var iterator = new RangeIterator(this, true);
	                var boundariesInvalid = (iterator._first && (isNonTextPartiallySelected(iterator._first, this)) ||
	                        (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
	                iterator.detach();
	                return !boundariesInvalid;
	            },

	            surroundContents: function(node) {
	                assertValidNodeType(node, surroundNodeTypes);

	                if (!this.canSurroundContents()) {
	                    throw new DOMException("INVALID_STATE_ERR");
	                }

	                // Extract the contents
	                var content = this.extractContents();

	                // Clear the children of the node
	                if (node.hasChildNodes()) {
	                    while (node.lastChild) {
	                        node.removeChild(node.lastChild);
	                    }
	                }

	                // Insert the new node and add the extracted contents
	                insertNodeAtPosition(node, this.startContainer, this.startOffset);
	                node.appendChild(content);

	                this.selectNode(node);
	            },

	            cloneRange: function() {
	                assertRangeValid(this);
	                var range = new Range(getRangeDocument(this));
	                var i = rangeProperties.length, prop;
	                while (i--) {
	                    prop = rangeProperties[i];
	                    range[prop] = this[prop];
	                }
	                return range;
	            },

	            toString: function() {
	                assertRangeValid(this);
	                var sc = this.startContainer;
	                if (sc === this.endContainer && isCharacterDataNode(sc)) {
	                    return (sc.nodeType == 3 || sc.nodeType == 4) ? sc.data.slice(this.startOffset, this.endOffset) : "";
	                } else {
	                    var textParts = [], iterator = new RangeIterator(this, true);
	                    iterateSubtree(iterator, function(node) {
	                        // Accept only text or CDATA nodes, not comments
	                        if (node.nodeType == 3 || node.nodeType == 4) {
	                            textParts.push(node.data);
	                        }
	                    });
	                    iterator.detach();
	                    return textParts.join("");
	                }
	            },

	            // The methods below are all non-standard. The following batch were introduced by Mozilla but have since
	            // been removed from Mozilla.

	            compareNode: function(node) {
	                assertRangeValid(this);

	                var parent = node.parentNode;
	                var nodeIndex = getNodeIndex(node);

	                if (!parent) {
	                    throw new DOMException("NOT_FOUND_ERR");
	                }

	                var startComparison = this.comparePoint(parent, nodeIndex),
	                    endComparison = this.comparePoint(parent, nodeIndex + 1);

	                if (startComparison < 0) { // Node starts before
	                    return (endComparison > 0) ? n_b_a : n_b;
	                } else {
	                    return (endComparison > 0) ? n_a : n_i;
	                }
	            },

	            comparePoint: function(node, offset) {
	                assertRangeValid(this);
	                assertNode(node, "HIERARCHY_REQUEST_ERR");
	                assertSameDocumentOrFragment(node, this.startContainer);

	                if (comparePoints(node, offset, this.startContainer, this.startOffset) < 0) {
	                    return -1;
	                } else if (comparePoints(node, offset, this.endContainer, this.endOffset) > 0) {
	                    return 1;
	                }
	                return 0;
	            },

	            createContextualFragment: createContextualFragment,

	            toHtml: function() {
	                return rangeToHtml(this);
	            },

	            // touchingIsIntersecting determines whether this method considers a node that borders a range intersects
	            // with it (as in WebKit) or not (as in Gecko pre-1.9, and the default)
	            intersectsNode: function(node, touchingIsIntersecting) {
	                assertRangeValid(this);
	                if (getRootContainer(node) != getRangeRoot(this)) {
	                    return false;
	                }

	                var parent = node.parentNode, offset = getNodeIndex(node);
	                if (!parent) {
	                    return true;
	                }

	                var startComparison = comparePoints(parent, offset, this.endContainer, this.endOffset),
	                    endComparison = comparePoints(parent, offset + 1, this.startContainer, this.startOffset);

	                return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
	            },

	            isPointInRange: function(node, offset) {
	                assertRangeValid(this);
	                assertNode(node, "HIERARCHY_REQUEST_ERR");
	                assertSameDocumentOrFragment(node, this.startContainer);

	                return (comparePoints(node, offset, this.startContainer, this.startOffset) >= 0) &&
	                       (comparePoints(node, offset, this.endContainer, this.endOffset) <= 0);
	            },

	            // The methods below are non-standard and invented by me.

	            // Sharing a boundary start-to-end or end-to-start does not count as intersection.
	            intersectsRange: function(range) {
	                return rangesIntersect(this, range, false);
	            },

	            // Sharing a boundary start-to-end or end-to-start does count as intersection.
	            intersectsOrTouchesRange: function(range) {
	                return rangesIntersect(this, range, true);
	            },

	            intersection: function(range) {
	                if (this.intersectsRange(range)) {
	                    var startComparison = comparePoints(this.startContainer, this.startOffset, range.startContainer, range.startOffset),
	                        endComparison = comparePoints(this.endContainer, this.endOffset, range.endContainer, range.endOffset);

	                    var intersectionRange = this.cloneRange();
	                    if (startComparison == -1) {
	                        intersectionRange.setStart(range.startContainer, range.startOffset);
	                    }
	                    if (endComparison == 1) {
	                        intersectionRange.setEnd(range.endContainer, range.endOffset);
	                    }
	                    return intersectionRange;
	                }
	                return null;
	            },

	            union: function(range) {
	                if (this.intersectsOrTouchesRange(range)) {
	                    var unionRange = this.cloneRange();
	                    if (comparePoints(range.startContainer, range.startOffset, this.startContainer, this.startOffset) == -1) {
	                        unionRange.setStart(range.startContainer, range.startOffset);
	                    }
	                    if (comparePoints(range.endContainer, range.endOffset, this.endContainer, this.endOffset) == 1) {
	                        unionRange.setEnd(range.endContainer, range.endOffset);
	                    }
	                    return unionRange;
	                } else {
	                    throw new DOMException("Ranges do not intersect");
	                }
	            },

	            containsNode: function(node, allowPartial) {
	                if (allowPartial) {
	                    return this.intersectsNode(node, false);
	                } else {
	                    return this.compareNode(node) == n_i;
	                }
	            },

	            containsNodeContents: function(node) {
	                return this.comparePoint(node, 0) >= 0 && this.comparePoint(node, getNodeLength(node)) <= 0;
	            },

	            containsRange: function(range) {
	                var intersection = this.intersection(range);
	                return intersection !== null && range.equals(intersection);
	            },

	            containsNodeText: function(node) {
	                var nodeRange = this.cloneRange();
	                nodeRange.selectNode(node);
	                var textNodes = nodeRange.getNodes([3]);
	                if (textNodes.length > 0) {
	                    nodeRange.setStart(textNodes[0], 0);
	                    var lastTextNode = textNodes.pop();
	                    nodeRange.setEnd(lastTextNode, lastTextNode.length);
	                    return this.containsRange(nodeRange);
	                } else {
	                    return this.containsNodeContents(node);
	                }
	            },

	            getNodes: function(nodeTypes, filter) {
	                assertRangeValid(this);
	                return getNodesInRange(this, nodeTypes, filter);
	            },

	            getDocument: function() {
	                return getRangeDocument(this);
	            },

	            collapseBefore: function(node) {
	                this.setEndBefore(node);
	                this.collapse(false);
	            },

	            collapseAfter: function(node) {
	                this.setStartAfter(node);
	                this.collapse(true);
	            },

	            getBookmark: function(containerNode) {
	                var doc = getRangeDocument(this);
	                var preSelectionRange = api.createRange(doc);
	                containerNode = containerNode || dom.getBody(doc);
	                preSelectionRange.selectNodeContents(containerNode);
	                var range = this.intersection(preSelectionRange);
	                var start = 0, end = 0;
	                if (range) {
	                    preSelectionRange.setEnd(range.startContainer, range.startOffset);
	                    start = preSelectionRange.toString().length;
	                    end = start + range.toString().length;
	                }

	                return {
	                    start: start,
	                    end: end,
	                    containerNode: containerNode
	                };
	            },

	            moveToBookmark: function(bookmark) {
	                var containerNode = bookmark.containerNode;
	                var charIndex = 0;
	                this.setStart(containerNode, 0);
	                this.collapse(true);
	                var nodeStack = [containerNode], node, foundStart = false, stop = false;
	                var nextCharIndex, i, childNodes;

	                while (!stop && (node = nodeStack.pop())) {
	                    if (node.nodeType == 3) {
	                        nextCharIndex = charIndex + node.length;
	                        if (!foundStart && bookmark.start >= charIndex && bookmark.start <= nextCharIndex) {
	                            this.setStart(node, bookmark.start - charIndex);
	                            foundStart = true;
	                        }
	                        if (foundStart && bookmark.end >= charIndex && bookmark.end <= nextCharIndex) {
	                            this.setEnd(node, bookmark.end - charIndex);
	                            stop = true;
	                        }
	                        charIndex = nextCharIndex;
	                    } else {
	                        childNodes = node.childNodes;
	                        i = childNodes.length;
	                        while (i--) {
	                            nodeStack.push(childNodes[i]);
	                        }
	                    }
	                }
	            },

	            getName: function() {
	                return "DomRange";
	            },

	            equals: function(range) {
	                return Range.rangesEqual(this, range);
	            },

	            isValid: function() {
	                return isRangeValid(this);
	            },

	            inspect: function() {
	                return inspect(this);
	            },

	            detach: function() {
	                // In DOM4, detach() is now a no-op.
	            }
	        });

	        function copyComparisonConstantsToObject(obj) {
	            obj.START_TO_START = s2s;
	            obj.START_TO_END = s2e;
	            obj.END_TO_END = e2e;
	            obj.END_TO_START = e2s;

	            obj.NODE_BEFORE = n_b;
	            obj.NODE_AFTER = n_a;
	            obj.NODE_BEFORE_AND_AFTER = n_b_a;
	            obj.NODE_INSIDE = n_i;
	        }

	        function copyComparisonConstants(constructor) {
	            copyComparisonConstantsToObject(constructor);
	            copyComparisonConstantsToObject(constructor.prototype);
	        }

	        function createRangeContentRemover(remover, boundaryUpdater) {
	            return function() {
	                assertRangeValid(this);

	                var sc = this.startContainer, so = this.startOffset, root = this.commonAncestorContainer;

	                var iterator = new RangeIterator(this, true);

	                // Work out where to position the range after content removal
	                var node, boundary;
	                if (sc !== root) {
	                    node = getClosestAncestorIn(sc, root, true);
	                    boundary = getBoundaryAfterNode(node);
	                    sc = boundary.node;
	                    so = boundary.offset;
	                }

	                // Check none of the range is read-only
	                iterateSubtree(iterator, assertNodeNotReadOnly);

	                iterator.reset();

	                // Remove the content
	                var returnValue = remover(iterator);
	                iterator.detach();

	                // Move to the new position
	                boundaryUpdater(this, sc, so, sc, so);

	                return returnValue;
	            };
	        }

	        function createPrototypeRange(constructor, boundaryUpdater) {
	            function createBeforeAfterNodeSetter(isBefore, isStart) {
	                return function(node) {
	                    assertValidNodeType(node, beforeAfterNodeTypes);
	                    assertValidNodeType(getRootContainer(node), rootContainerNodeTypes);

	                    var boundary = (isBefore ? getBoundaryBeforeNode : getBoundaryAfterNode)(node);
	                    (isStart ? setRangeStart : setRangeEnd)(this, boundary.node, boundary.offset);
	                };
	            }

	            function setRangeStart(range, node, offset) {
	                var ec = range.endContainer, eo = range.endOffset;
	                if (node !== range.startContainer || offset !== range.startOffset) {
	                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
	                    // is after the current end. In either case, collapse the range to the new position
	                    if (getRootContainer(node) != getRootContainer(ec) || comparePoints(node, offset, ec, eo) == 1) {
	                        ec = node;
	                        eo = offset;
	                    }
	                    boundaryUpdater(range, node, offset, ec, eo);
	                }
	            }

	            function setRangeEnd(range, node, offset) {
	                var sc = range.startContainer, so = range.startOffset;
	                if (node !== range.endContainer || offset !== range.endOffset) {
	                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
	                    // is after the current end. In either case, collapse the range to the new position
	                    if (getRootContainer(node) != getRootContainer(sc) || comparePoints(node, offset, sc, so) == -1) {
	                        sc = node;
	                        so = offset;
	                    }
	                    boundaryUpdater(range, sc, so, node, offset);
	                }
	            }

	            // Set up inheritance
	            var F = function() {};
	            F.prototype = api.rangePrototype;
	            constructor.prototype = new F();

	            util.extend(constructor.prototype, {
	                setStart: function(node, offset) {
	                    assertNoDocTypeNotationEntityAncestor(node, true);
	                    assertValidOffset(node, offset);

	                    setRangeStart(this, node, offset);
	                },

	                setEnd: function(node, offset) {
	                    assertNoDocTypeNotationEntityAncestor(node, true);
	                    assertValidOffset(node, offset);

	                    setRangeEnd(this, node, offset);
	                },

	                /**
	                 * Convenience method to set a range's start and end boundaries. Overloaded as follows:
	                 * - Two parameters (node, offset) creates a collapsed range at that position
	                 * - Three parameters (node, startOffset, endOffset) creates a range contained with node starting at
	                 *   startOffset and ending at endOffset
	                 * - Four parameters (startNode, startOffset, endNode, endOffset) creates a range starting at startOffset in
	                 *   startNode and ending at endOffset in endNode
	                 */
	                setStartAndEnd: function() {
	                    var args = arguments;
	                    var sc = args[0], so = args[1], ec = sc, eo = so;

	                    switch (args.length) {
	                        case 3:
	                            eo = args[2];
	                            break;
	                        case 4:
	                            ec = args[2];
	                            eo = args[3];
	                            break;
	                    }

	                    boundaryUpdater(this, sc, so, ec, eo);
	                },

	                setBoundary: function(node, offset, isStart) {
	                    this["set" + (isStart ? "Start" : "End")](node, offset);
	                },

	                setStartBefore: createBeforeAfterNodeSetter(true, true),
	                setStartAfter: createBeforeAfterNodeSetter(false, true),
	                setEndBefore: createBeforeAfterNodeSetter(true, false),
	                setEndAfter: createBeforeAfterNodeSetter(false, false),

	                collapse: function(isStart) {
	                    assertRangeValid(this);
	                    if (isStart) {
	                        boundaryUpdater(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset);
	                    } else {
	                        boundaryUpdater(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset);
	                    }
	                },

	                selectNodeContents: function(node) {
	                    assertNoDocTypeNotationEntityAncestor(node, true);

	                    boundaryUpdater(this, node, 0, node, getNodeLength(node));
	                },

	                selectNode: function(node) {
	                    assertNoDocTypeNotationEntityAncestor(node, false);
	                    assertValidNodeType(node, beforeAfterNodeTypes);

	                    var start = getBoundaryBeforeNode(node), end = getBoundaryAfterNode(node);
	                    boundaryUpdater(this, start.node, start.offset, end.node, end.offset);
	                },

	                extractContents: createRangeContentRemover(extractSubtree, boundaryUpdater),

	                deleteContents: createRangeContentRemover(deleteSubtree, boundaryUpdater),

	                canSurroundContents: function() {
	                    assertRangeValid(this);
	                    assertNodeNotReadOnly(this.startContainer);
	                    assertNodeNotReadOnly(this.endContainer);

	                    // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
	                    // no non-text nodes.
	                    var iterator = new RangeIterator(this, true);
	                    var boundariesInvalid = (iterator._first && isNonTextPartiallySelected(iterator._first, this) ||
	                            (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
	                    iterator.detach();
	                    return !boundariesInvalid;
	                },

	                splitBoundaries: function() {
	                    splitRangeBoundaries(this);
	                },

	                splitBoundariesPreservingPositions: function(positionsToPreserve) {
	                    splitRangeBoundaries(this, positionsToPreserve);
	                },

	                normalizeBoundaries: function() {
	                    assertRangeValid(this);

	                    var sc = this.startContainer, so = this.startOffset, ec = this.endContainer, eo = this.endOffset;

	                    var mergeForward = function(node) {
	                        var sibling = node.nextSibling;
	                        if (sibling && sibling.nodeType == node.nodeType) {
	                            ec = node;
	                            eo = node.length;
	                            node.appendData(sibling.data);
	                            removeNode(sibling);
	                        }
	                    };

	                    var mergeBackward = function(node) {
	                        var sibling = node.previousSibling;
	                        if (sibling && sibling.nodeType == node.nodeType) {
	                            sc = node;
	                            var nodeLength = node.length;
	                            so = sibling.length;
	                            node.insertData(0, sibling.data);
	                            removeNode(sibling);
	                            if (sc == ec) {
	                                eo += so;
	                                ec = sc;
	                            } else if (ec == node.parentNode) {
	                                var nodeIndex = getNodeIndex(node);
	                                if (eo == nodeIndex) {
	                                    ec = node;
	                                    eo = nodeLength;
	                                } else if (eo > nodeIndex) {
	                                    eo--;
	                                }
	                            }
	                        }
	                    };

	                    var normalizeStart = true;
	                    var sibling;

	                    if (isCharacterDataNode(ec)) {
	                        if (eo == ec.length) {
	                            mergeForward(ec);
	                        } else if (eo == 0) {
	                            sibling = ec.previousSibling;
	                            if (sibling && sibling.nodeType == ec.nodeType) {
	                                eo = sibling.length;
	                                if (sc == ec) {
	                                    normalizeStart = false;
	                                }
	                                sibling.appendData(ec.data);
	                                removeNode(ec);
	                                ec = sibling;
	                            }
	                        }
	                    } else {
	                        if (eo > 0) {
	                            var endNode = ec.childNodes[eo - 1];
	                            if (endNode && isCharacterDataNode(endNode)) {
	                                mergeForward(endNode);
	                            }
	                        }
	                        normalizeStart = !this.collapsed;
	                    }

	                    if (normalizeStart) {
	                        if (isCharacterDataNode(sc)) {
	                            if (so == 0) {
	                                mergeBackward(sc);
	                            } else if (so == sc.length) {
	                                sibling = sc.nextSibling;
	                                if (sibling && sibling.nodeType == sc.nodeType) {
	                                    if (ec == sibling) {
	                                        ec = sc;
	                                        eo += sc.length;
	                                    }
	                                    sc.appendData(sibling.data);
	                                    removeNode(sibling);
	                                }
	                            }
	                        } else {
	                            if (so < sc.childNodes.length) {
	                                var startNode = sc.childNodes[so];
	                                if (startNode && isCharacterDataNode(startNode)) {
	                                    mergeBackward(startNode);
	                                }
	                            }
	                        }
	                    } else {
	                        sc = ec;
	                        so = eo;
	                    }

	                    boundaryUpdater(this, sc, so, ec, eo);
	                },

	                collapseToPoint: function(node, offset) {
	                    assertNoDocTypeNotationEntityAncestor(node, true);
	                    assertValidOffset(node, offset);
	                    this.setStartAndEnd(node, offset);
	                }
	            });

	            copyComparisonConstants(constructor);
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // Updates commonAncestorContainer and collapsed after boundary change
	        function updateCollapsedAndCommonAncestor(range) {
	            range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
	            range.commonAncestorContainer = range.collapsed ?
	                range.startContainer : dom.getCommonAncestor(range.startContainer, range.endContainer);
	        }

	        function updateBoundaries(range, startContainer, startOffset, endContainer, endOffset) {
	            range.startContainer = startContainer;
	            range.startOffset = startOffset;
	            range.endContainer = endContainer;
	            range.endOffset = endOffset;
	            range.document = dom.getDocument(startContainer);

	            updateCollapsedAndCommonAncestor(range);
	        }

	        function Range(doc) {
	            this.startContainer = doc;
	            this.startOffset = 0;
	            this.endContainer = doc;
	            this.endOffset = 0;
	            this.document = doc;
	            updateCollapsedAndCommonAncestor(this);
	        }

	        createPrototypeRange(Range, updateBoundaries);

	        util.extend(Range, {
	            rangeProperties: rangeProperties,
	            RangeIterator: RangeIterator,
	            copyComparisonConstants: copyComparisonConstants,
	            createPrototypeRange: createPrototypeRange,
	            inspect: inspect,
	            toHtml: rangeToHtml,
	            getRangeDocument: getRangeDocument,
	            rangesEqual: function(r1, r2) {
	                return r1.startContainer === r2.startContainer &&
	                    r1.startOffset === r2.startOffset &&
	                    r1.endContainer === r2.endContainer &&
	                    r1.endOffset === r2.endOffset;
	            }
	        });

	        api.DomRange = Range;
	    });

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // Wrappers for the browser's native DOM Range and/or TextRange implementation
	    api.createCoreModule("WrappedRange", ["DomRange"], function(api, module) {
	        var WrappedRange, WrappedTextRange;
	        var dom = api.dom;
	        var util = api.util;
	        var DomPosition = dom.DomPosition;
	        var DomRange = api.DomRange;
	        var getBody = dom.getBody;
	        var getContentDocument = dom.getContentDocument;
	        var isCharacterDataNode = dom.isCharacterDataNode;


	        /*----------------------------------------------------------------------------------------------------------------*/

	        if (api.features.implementsDomRange) {
	            // This is a wrapper around the browser's native DOM Range. It has two aims:
	            // - Provide workarounds for specific browser bugs
	            // - provide convenient extensions, which are inherited from Rangy's DomRange

	            (function() {
	                var rangeProto;
	                var rangeProperties = DomRange.rangeProperties;

	                function updateRangeProperties(range) {
	                    var i = rangeProperties.length, prop;
	                    while (i--) {
	                        prop = rangeProperties[i];
	                        range[prop] = range.nativeRange[prop];
	                    }
	                    // Fix for broken collapsed property in IE 9.
	                    range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
	                }

	                function updateNativeRange(range, startContainer, startOffset, endContainer, endOffset) {
	                    var startMoved = (range.startContainer !== startContainer || range.startOffset != startOffset);
	                    var endMoved = (range.endContainer !== endContainer || range.endOffset != endOffset);
	                    var nativeRangeDifferent = !range.equals(range.nativeRange);

	                    // Always set both boundaries for the benefit of IE9 (see issue 35)
	                    if (startMoved || endMoved || nativeRangeDifferent) {
	                        range.setEnd(endContainer, endOffset);
	                        range.setStart(startContainer, startOffset);
	                    }
	                }

	                var createBeforeAfterNodeSetter;

	                WrappedRange = function(range) {
	                    if (!range) {
	                        throw module.createError("WrappedRange: Range must be specified");
	                    }
	                    this.nativeRange = range;
	                    updateRangeProperties(this);
	                };

	                DomRange.createPrototypeRange(WrappedRange, updateNativeRange);

	                rangeProto = WrappedRange.prototype;

	                rangeProto.selectNode = function(node) {
	                    this.nativeRange.selectNode(node);
	                    updateRangeProperties(this);
	                };

	                rangeProto.cloneContents = function() {
	                    return this.nativeRange.cloneContents();
	                };

	                // Due to a long-standing Firefox bug that I have not been able to find a reliable way to detect,
	                // insertNode() is never delegated to the native range.

	                rangeProto.surroundContents = function(node) {
	                    this.nativeRange.surroundContents(node);
	                    updateRangeProperties(this);
	                };

	                rangeProto.collapse = function(isStart) {
	                    this.nativeRange.collapse(isStart);
	                    updateRangeProperties(this);
	                };

	                rangeProto.cloneRange = function() {
	                    return new WrappedRange(this.nativeRange.cloneRange());
	                };

	                rangeProto.refresh = function() {
	                    updateRangeProperties(this);
	                };

	                rangeProto.toString = function() {
	                    return this.nativeRange.toString();
	                };

	                // Create test range and node for feature detection

	                var testTextNode = document.createTextNode("test");
	                getBody(document).appendChild(testTextNode);
	                var range = document.createRange();

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Test for Firefox 2 bug that prevents moving the start of a Range to a point after its current end and
	                // correct for it

	                range.setStart(testTextNode, 0);
	                range.setEnd(testTextNode, 0);

	                try {
	                    range.setStart(testTextNode, 1);

	                    rangeProto.setStart = function(node, offset) {
	                        this.nativeRange.setStart(node, offset);
	                        updateRangeProperties(this);
	                    };

	                    rangeProto.setEnd = function(node, offset) {
	                        this.nativeRange.setEnd(node, offset);
	                        updateRangeProperties(this);
	                    };

	                    createBeforeAfterNodeSetter = function(name) {
	                        return function(node) {
	                            this.nativeRange[name](node);
	                            updateRangeProperties(this);
	                        };
	                    };

	                } catch(ex) {

	                    rangeProto.setStart = function(node, offset) {
	                        try {
	                            this.nativeRange.setStart(node, offset);
	                        } catch (ex) {
	                            this.nativeRange.setEnd(node, offset);
	                            this.nativeRange.setStart(node, offset);
	                        }
	                        updateRangeProperties(this);
	                    };

	                    rangeProto.setEnd = function(node, offset) {
	                        try {
	                            this.nativeRange.setEnd(node, offset);
	                        } catch (ex) {
	                            this.nativeRange.setStart(node, offset);
	                            this.nativeRange.setEnd(node, offset);
	                        }
	                        updateRangeProperties(this);
	                    };

	                    createBeforeAfterNodeSetter = function(name, oppositeName) {
	                        return function(node) {
	                            try {
	                                this.nativeRange[name](node);
	                            } catch (ex) {
	                                this.nativeRange[oppositeName](node);
	                                this.nativeRange[name](node);
	                            }
	                            updateRangeProperties(this);
	                        };
	                    };
	                }

	                rangeProto.setStartBefore = createBeforeAfterNodeSetter("setStartBefore", "setEndBefore");
	                rangeProto.setStartAfter = createBeforeAfterNodeSetter("setStartAfter", "setEndAfter");
	                rangeProto.setEndBefore = createBeforeAfterNodeSetter("setEndBefore", "setStartBefore");
	                rangeProto.setEndAfter = createBeforeAfterNodeSetter("setEndAfter", "setStartAfter");

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Always use DOM4-compliant selectNodeContents implementation: it's simpler and less code than testing
	                // whether the native implementation can be trusted
	                rangeProto.selectNodeContents = function(node) {
	                    this.setStartAndEnd(node, 0, dom.getNodeLength(node));
	                };

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Test for and correct WebKit bug that has the behaviour of compareBoundaryPoints round the wrong way for
	                // constants START_TO_END and END_TO_START: https://bugs.webkit.org/show_bug.cgi?id=20738

	                range.selectNodeContents(testTextNode);
	                range.setEnd(testTextNode, 3);

	                var range2 = document.createRange();
	                range2.selectNodeContents(testTextNode);
	                range2.setEnd(testTextNode, 4);
	                range2.setStart(testTextNode, 2);

	                if (range.compareBoundaryPoints(range.START_TO_END, range2) == -1 &&
	                        range.compareBoundaryPoints(range.END_TO_START, range2) == 1) {
	                    // This is the wrong way round, so correct for it

	                    rangeProto.compareBoundaryPoints = function(type, range) {
	                        range = range.nativeRange || range;
	                        if (type == range.START_TO_END) {
	                            type = range.END_TO_START;
	                        } else if (type == range.END_TO_START) {
	                            type = range.START_TO_END;
	                        }
	                        return this.nativeRange.compareBoundaryPoints(type, range);
	                    };
	                } else {
	                    rangeProto.compareBoundaryPoints = function(type, range) {
	                        return this.nativeRange.compareBoundaryPoints(type, range.nativeRange || range);
	                    };
	                }

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Test for IE deleteContents() and extractContents() bug and correct it. See issue 107.

	                var el = document.createElement("div");
	                el.innerHTML = "123";
	                var textNode = el.firstChild;
	                var body = getBody(document);
	                body.appendChild(el);

	                range.setStart(textNode, 1);
	                range.setEnd(textNode, 2);
	                range.deleteContents();

	                if (textNode.data == "13") {
	                    // Behaviour is correct per DOM4 Range so wrap the browser's implementation of deleteContents() and
	                    // extractContents()
	                    rangeProto.deleteContents = function() {
	                        this.nativeRange.deleteContents();
	                        updateRangeProperties(this);
	                    };

	                    rangeProto.extractContents = function() {
	                        var frag = this.nativeRange.extractContents();
	                        updateRangeProperties(this);
	                        return frag;
	                    };
	                } else {
	                }

	                body.removeChild(el);
	                body = null;

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Test for existence of createContextualFragment and delegate to it if it exists
	                if (util.isHostMethod(range, "createContextualFragment")) {
	                    rangeProto.createContextualFragment = function(fragmentStr) {
	                        return this.nativeRange.createContextualFragment(fragmentStr);
	                    };
	                }

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Clean up
	                getBody(document).removeChild(testTextNode);

	                rangeProto.getName = function() {
	                    return "WrappedRange";
	                };

	                api.WrappedRange = WrappedRange;

	                api.createNativeRange = function(doc) {
	                    doc = getContentDocument(doc, module, "createNativeRange");
	                    return doc.createRange();
	                };
	            })();
	        }

	        if (api.features.implementsTextRange) {
	            /*
	            This is a workaround for a bug where IE returns the wrong container element from the TextRange's parentElement()
	            method. For example, in the following (where pipes denote the selection boundaries):

	            <ul id="ul"><li id="a">| a </li><li id="b"> b |</li></ul>

	            var range = document.selection.createRange();
	            alert(range.parentElement().id); // Should alert "ul" but alerts "b"

	            This method returns the common ancestor node of the following:
	            - the parentElement() of the textRange
	            - the parentElement() of the textRange after calling collapse(true)
	            - the parentElement() of the textRange after calling collapse(false)
	            */
	            var getTextRangeContainerElement = function(textRange) {
	                var parentEl = textRange.parentElement();
	                var range = textRange.duplicate();
	                range.collapse(true);
	                var startEl = range.parentElement();
	                range = textRange.duplicate();
	                range.collapse(false);
	                var endEl = range.parentElement();
	                var startEndContainer = (startEl == endEl) ? startEl : dom.getCommonAncestor(startEl, endEl);

	                return startEndContainer == parentEl ? startEndContainer : dom.getCommonAncestor(parentEl, startEndContainer);
	            };

	            var textRangeIsCollapsed = function(textRange) {
	                return textRange.compareEndPoints("StartToEnd", textRange) == 0;
	            };

	            // Gets the boundary of a TextRange expressed as a node and an offset within that node. This function started
	            // out as an improved version of code found in Tim Cameron Ryan's IERange (http://code.google.com/p/ierange/)
	            // but has grown, fixing problems with line breaks in preformatted text, adding workaround for IE TextRange
	            // bugs, handling for inputs and images, plus optimizations.
	            var getTextRangeBoundaryPosition = function(textRange, wholeRangeContainerElement, isStart, isCollapsed, startInfo) {
	                var workingRange = textRange.duplicate();
	                workingRange.collapse(isStart);
	                var containerElement = workingRange.parentElement();

	                // Sometimes collapsing a TextRange that's at the start of a text node can move it into the previous node, so
	                // check for that
	                if (!dom.isOrIsAncestorOf(wholeRangeContainerElement, containerElement)) {
	                    containerElement = wholeRangeContainerElement;
	                }


	                // Deal with nodes that cannot "contain rich HTML markup". In practice, this means form inputs, images and
	                // similar. See http://msdn.microsoft.com/en-us/library/aa703950%28VS.85%29.aspx
	                if (!containerElement.canHaveHTML) {
	                    var pos = new DomPosition(containerElement.parentNode, dom.getNodeIndex(containerElement));
	                    return {
	                        boundaryPosition: pos,
	                        nodeInfo: {
	                            nodeIndex: pos.offset,
	                            containerElement: pos.node
	                        }
	                    };
	                }

	                var workingNode = dom.getDocument(containerElement).createElement("span");

	                // Workaround for HTML5 Shiv's insane violation of document.createElement(). See Rangy issue 104 and HTML5
	                // Shiv issue 64: https://github.com/aFarkas/html5shiv/issues/64
	                if (workingNode.parentNode) {
	                    dom.removeNode(workingNode);
	                }

	                var comparison, workingComparisonType = isStart ? "StartToStart" : "StartToEnd";
	                var previousNode, nextNode, boundaryPosition, boundaryNode;
	                var start = (startInfo && startInfo.containerElement == containerElement) ? startInfo.nodeIndex : 0;
	                var childNodeCount = containerElement.childNodes.length;
	                var end = childNodeCount;

	                // Check end first. Code within the loop assumes that the endth child node of the container is definitely
	                // after the range boundary.
	                var nodeIndex = end;

	                while (true) {
	                    if (nodeIndex == childNodeCount) {
	                        containerElement.appendChild(workingNode);
	                    } else {
	                        containerElement.insertBefore(workingNode, containerElement.childNodes[nodeIndex]);
	                    }
	                    workingRange.moveToElementText(workingNode);
	                    comparison = workingRange.compareEndPoints(workingComparisonType, textRange);
	                    if (comparison == 0 || start == end) {
	                        break;
	                    } else if (comparison == -1) {
	                        if (end == start + 1) {
	                            // We know the endth child node is after the range boundary, so we must be done.
	                            break;
	                        } else {
	                            start = nodeIndex;
	                        }
	                    } else {
	                        end = (end == start + 1) ? start : nodeIndex;
	                    }
	                    nodeIndex = Math.floor((start + end) / 2);
	                    containerElement.removeChild(workingNode);
	                }


	                // We've now reached or gone past the boundary of the text range we're interested in
	                // so have identified the node we want
	                boundaryNode = workingNode.nextSibling;

	                if (comparison == -1 && boundaryNode && isCharacterDataNode(boundaryNode)) {
	                    // This is a character data node (text, comment, cdata). The working range is collapsed at the start of
	                    // the node containing the text range's boundary, so we move the end of the working range to the
	                    // boundary point and measure the length of its text to get the boundary's offset within the node.
	                    workingRange.setEndPoint(isStart ? "EndToStart" : "EndToEnd", textRange);

	                    var offset;

	                    if (/[\r\n]/.test(boundaryNode.data)) {
	                        /*
	                        For the particular case of a boundary within a text node containing rendered line breaks (within a
	                        <pre> element, for example), we need a slightly complicated approach to get the boundary's offset in
	                        IE. The facts:

	                        - Each line break is represented as \r in the text node's data/nodeValue properties
	                        - Each line break is represented as \r\n in the TextRange's 'text' property
	                        - The 'text' property of the TextRange does not contain trailing line breaks

	                        To get round the problem presented by the final fact above, we can use the fact that TextRange's
	                        moveStart() and moveEnd() methods return the actual number of characters moved, which is not
	                        necessarily the same as the number of characters it was instructed to move. The simplest approach is
	                        to use this to store the characters moved when moving both the start and end of the range to the
	                        start of the document body and subtracting the start offset from the end offset (the
	                        "move-negative-gazillion" method). However, this is extremely slow when the document is large and
	                        the range is near the end of it. Clearly doing the mirror image (i.e. moving the range boundaries to
	                        the end of the document) has the same problem.

	                        Another approach that works is to use moveStart() to move the start boundary of the range up to the
	                        end boundary one character at a time and incrementing a counter with the value returned by the
	                        moveStart() call. However, the check for whether the start boundary has reached the end boundary is
	                        expensive, so this method is slow (although unlike "move-negative-gazillion" is largely unaffected
	                        by the location of the range within the document).

	                        The approach used below is a hybrid of the two methods above. It uses the fact that a string
	                        containing the TextRange's 'text' property with each \r\n converted to a single \r character cannot
	                        be longer than the text of the TextRange, so the start of the range is moved that length initially
	                        and then a character at a time to make up for any trailing line breaks not contained in the 'text'
	                        property. This has good performance in most situations compared to the previous two methods.
	                        */
	                        var tempRange = workingRange.duplicate();
	                        var rangeLength = tempRange.text.replace(/\r\n/g, "\r").length;

	                        offset = tempRange.moveStart("character", rangeLength);
	                        while ( (comparison = tempRange.compareEndPoints("StartToEnd", tempRange)) == -1) {
	                            offset++;
	                            tempRange.moveStart("character", 1);
	                        }
	                    } else {
	                        offset = workingRange.text.length;
	                    }
	                    boundaryPosition = new DomPosition(boundaryNode, offset);
	                } else {

	                    // If the boundary immediately follows a character data node and this is the end boundary, we should favour
	                    // a position within that, and likewise for a start boundary preceding a character data node
	                    previousNode = (isCollapsed || !isStart) && workingNode.previousSibling;
	                    nextNode = (isCollapsed || isStart) && workingNode.nextSibling;
	                    if (nextNode && isCharacterDataNode(nextNode)) {
	                        boundaryPosition = new DomPosition(nextNode, 0);
	                    } else if (previousNode && isCharacterDataNode(previousNode)) {
	                        boundaryPosition = new DomPosition(previousNode, previousNode.data.length);
	                    } else {
	                        boundaryPosition = new DomPosition(containerElement, dom.getNodeIndex(workingNode));
	                    }
	                }

	                // Clean up
	                dom.removeNode(workingNode);

	                return {
	                    boundaryPosition: boundaryPosition,
	                    nodeInfo: {
	                        nodeIndex: nodeIndex,
	                        containerElement: containerElement
	                    }
	                };
	            };

	            // Returns a TextRange representing the boundary of a TextRange expressed as a node and an offset within that
	            // node. This function started out as an optimized version of code found in Tim Cameron Ryan's IERange
	            // (http://code.google.com/p/ierange/)
	            var createBoundaryTextRange = function(boundaryPosition, isStart) {
	                var boundaryNode, boundaryParent, boundaryOffset = boundaryPosition.offset;
	                var doc = dom.getDocument(boundaryPosition.node);
	                var workingNode, childNodes, workingRange = getBody(doc).createTextRange();
	                var nodeIsDataNode = isCharacterDataNode(boundaryPosition.node);

	                if (nodeIsDataNode) {
	                    boundaryNode = boundaryPosition.node;
	                    boundaryParent = boundaryNode.parentNode;
	                } else {
	                    childNodes = boundaryPosition.node.childNodes;
	                    boundaryNode = (boundaryOffset < childNodes.length) ? childNodes[boundaryOffset] : null;
	                    boundaryParent = boundaryPosition.node;
	                }

	                // Position the range immediately before the node containing the boundary
	                workingNode = doc.createElement("span");

	                // Making the working element non-empty element persuades IE to consider the TextRange boundary to be within
	                // the element rather than immediately before or after it
	                workingNode.innerHTML = "&#feff;";

	                // insertBefore is supposed to work like appendChild if the second parameter is null. However, a bug report
	                // for IERange suggests that it can crash the browser: http://code.google.com/p/ierange/issues/detail?id=12
	                if (boundaryNode) {
	                    boundaryParent.insertBefore(workingNode, boundaryNode);
	                } else {
	                    boundaryParent.appendChild(workingNode);
	                }

	                workingRange.moveToElementText(workingNode);
	                workingRange.collapse(!isStart);

	                // Clean up
	                boundaryParent.removeChild(workingNode);

	                // Move the working range to the text offset, if required
	                if (nodeIsDataNode) {
	                    workingRange[isStart ? "moveStart" : "moveEnd"]("character", boundaryOffset);
	                }

	                return workingRange;
	            };

	            /*------------------------------------------------------------------------------------------------------------*/

	            // This is a wrapper around a TextRange, providing full DOM Range functionality using rangy's DomRange as a
	            // prototype

	            WrappedTextRange = function(textRange) {
	                this.textRange = textRange;
	                this.refresh();
	            };

	            WrappedTextRange.prototype = new DomRange(document);

	            WrappedTextRange.prototype.refresh = function() {
	                var start, end, startBoundary;

	                // TextRange's parentElement() method cannot be trusted. getTextRangeContainerElement() works around that.
	                var rangeContainerElement = getTextRangeContainerElement(this.textRange);

	                if (textRangeIsCollapsed(this.textRange)) {
	                    end = start = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true,
	                        true).boundaryPosition;
	                } else {
	                    startBoundary = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true, false);
	                    start = startBoundary.boundaryPosition;

	                    // An optimization used here is that if the start and end boundaries have the same parent element, the
	                    // search scope for the end boundary can be limited to exclude the portion of the element that precedes
	                    // the start boundary
	                    end = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, false, false,
	                        startBoundary.nodeInfo).boundaryPosition;
	                }

	                this.setStart(start.node, start.offset);
	                this.setEnd(end.node, end.offset);
	            };

	            WrappedTextRange.prototype.getName = function() {
	                return "WrappedTextRange";
	            };

	            DomRange.copyComparisonConstants(WrappedTextRange);

	            var rangeToTextRange = function(range) {
	                if (range.collapsed) {
	                    return createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
	                } else {
	                    var startRange = createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
	                    var endRange = createBoundaryTextRange(new DomPosition(range.endContainer, range.endOffset), false);
	                    var textRange = getBody( DomRange.getRangeDocument(range) ).createTextRange();
	                    textRange.setEndPoint("StartToStart", startRange);
	                    textRange.setEndPoint("EndToEnd", endRange);
	                    return textRange;
	                }
	            };

	            WrappedTextRange.rangeToTextRange = rangeToTextRange;

	            WrappedTextRange.prototype.toTextRange = function() {
	                return rangeToTextRange(this);
	            };

	            api.WrappedTextRange = WrappedTextRange;

	            // IE 9 and above have both implementations and Rangy makes both available. The next few lines sets which
	            // implementation to use by default.
	            if (!api.features.implementsDomRange || api.config.preferTextRange) {
	                // Add WrappedTextRange as the Range property of the global object to allow expression like Range.END_TO_END to work
	                var globalObj = (function(f) { return f("return this;")(); })(Function);
	                if (typeof globalObj.Range == "undefined") {
	                    globalObj.Range = WrappedTextRange;
	                }

	                api.createNativeRange = function(doc) {
	                    doc = getContentDocument(doc, module, "createNativeRange");
	                    return getBody(doc).createTextRange();
	                };

	                api.WrappedRange = WrappedTextRange;
	            }
	        }

	        api.createRange = function(doc) {
	            doc = getContentDocument(doc, module, "createRange");
	            return new api.WrappedRange(api.createNativeRange(doc));
	        };

	        api.createRangyRange = function(doc) {
	            doc = getContentDocument(doc, module, "createRangyRange");
	            return new DomRange(doc);
	        };

	        util.createAliasForDeprecatedMethod(api, "createIframeRange", "createRange");
	        util.createAliasForDeprecatedMethod(api, "createIframeRangyRange", "createRangyRange");

	        api.addShimListener(function(win) {
	            var doc = win.document;
	            if (typeof doc.createRange == "undefined") {
	                doc.createRange = function() {
	                    return api.createRange(doc);
	                };
	            }
	            doc = win = null;
	        });
	    });

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // This module creates a selection object wrapper that conforms as closely as possible to the Selection specification
	    // in the HTML Editing spec (http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#selections)
	    api.createCoreModule("WrappedSelection", ["DomRange", "WrappedRange"], function(api, module) {
	        api.config.checkSelectionRanges = true;

	        var BOOLEAN = "boolean";
	        var NUMBER = "number";
	        var dom = api.dom;
	        var util = api.util;
	        var isHostMethod = util.isHostMethod;
	        var DomRange = api.DomRange;
	        var WrappedRange = api.WrappedRange;
	        var DOMException = api.DOMException;
	        var DomPosition = dom.DomPosition;
	        var getNativeSelection;
	        var selectionIsCollapsed;
	        var features = api.features;
	        var CONTROL = "Control";
	        var getDocument = dom.getDocument;
	        var getBody = dom.getBody;
	        var rangesEqual = DomRange.rangesEqual;


	        // Utility function to support direction parameters in the API that may be a string ("backward", "backwards",
	        // "forward" or "forwards") or a Boolean (true for backwards).
	        function isDirectionBackward(dir) {
	            return (typeof dir == "string") ? /^backward(s)?$/i.test(dir) : !!dir;
	        }

	        function getWindow(win, methodName) {
	            if (!win) {
	                return window;
	            } else if (dom.isWindow(win)) {
	                return win;
	            } else if (win instanceof WrappedSelection) {
	                return win.win;
	            } else {
	                var doc = dom.getContentDocument(win, module, methodName);
	                return dom.getWindow(doc);
	            }
	        }

	        function getWinSelection(winParam) {
	            return getWindow(winParam, "getWinSelection").getSelection();
	        }

	        function getDocSelection(winParam) {
	            return getWindow(winParam, "getDocSelection").document.selection;
	        }

	        function winSelectionIsBackward(sel) {
	            var backward = false;
	            if (sel.anchorNode) {
	                backward = (dom.comparePoints(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset) == 1);
	            }
	            return backward;
	        }

	        // Test for the Range/TextRange and Selection features required
	        // Test for ability to retrieve selection
	        var implementsWinGetSelection = isHostMethod(window, "getSelection"),
	            implementsDocSelection = util.isHostObject(document, "selection");

	        features.implementsWinGetSelection = implementsWinGetSelection;
	        features.implementsDocSelection = implementsDocSelection;

	        var useDocumentSelection = implementsDocSelection && (!implementsWinGetSelection || api.config.preferTextRange);

	        if (useDocumentSelection) {
	            getNativeSelection = getDocSelection;
	            api.isSelectionValid = function(winParam) {
	                var doc = getWindow(winParam, "isSelectionValid").document, nativeSel = doc.selection;

	                // Check whether the selection TextRange is actually contained within the correct document
	                return (nativeSel.type != "None" || getDocument(nativeSel.createRange().parentElement()) == doc);
	            };
	        } else if (implementsWinGetSelection) {
	            getNativeSelection = getWinSelection;
	            api.isSelectionValid = function() {
	                return true;
	            };
	        } else {
	            module.fail("Neither document.selection or window.getSelection() detected.");
	            return false;
	        }

	        api.getNativeSelection = getNativeSelection;

	        var testSelection = getNativeSelection();

	        // In Firefox, the selection is null in an iframe with display: none. See issue #138.
	        if (!testSelection) {
	            module.fail("Native selection was null (possibly issue 138?)");
	            return false;
	        }

	        var testRange = api.createNativeRange(document);
	        var body = getBody(document);

	        // Obtaining a range from a selection
	        var selectionHasAnchorAndFocus = util.areHostProperties(testSelection,
	            ["anchorNode", "focusNode", "anchorOffset", "focusOffset"]);

	        features.selectionHasAnchorAndFocus = selectionHasAnchorAndFocus;

	        // Test for existence of native selection extend() method
	        var selectionHasExtend = isHostMethod(testSelection, "extend");
	        features.selectionHasExtend = selectionHasExtend;

	        // Test if rangeCount exists
	        var selectionHasRangeCount = (typeof testSelection.rangeCount == NUMBER);
	        features.selectionHasRangeCount = selectionHasRangeCount;

	        var selectionSupportsMultipleRanges = false;
	        var collapsedNonEditableSelectionsSupported = true;

	        var addRangeBackwardToNative = selectionHasExtend ?
	            function(nativeSelection, range) {
	                var doc = DomRange.getRangeDocument(range);
	                var endRange = api.createRange(doc);
	                endRange.collapseToPoint(range.endContainer, range.endOffset);
	                nativeSelection.addRange(getNativeRange(endRange));
	                nativeSelection.extend(range.startContainer, range.startOffset);
	            } : null;

	        if (util.areHostMethods(testSelection, ["addRange", "getRangeAt", "removeAllRanges"]) &&
	                typeof testSelection.rangeCount == NUMBER && features.implementsDomRange) {

	            (function() {
	                // Previously an iframe was used but this caused problems in some circumstances in IE, so tests are
	                // performed on the current document's selection. See issue 109.

	                // Note also that if a selection previously existed, it is wiped and later restored by these tests. This
	                // will result in the selection direction begin reversed if the original selection was backwards and the
	                // browser does not support setting backwards selections (Internet Explorer, I'm looking at you).
	                var sel = window.getSelection();
	                if (sel) {
	                    // Store the current selection
	                    var originalSelectionRangeCount = sel.rangeCount;
	                    var selectionHasMultipleRanges = (originalSelectionRangeCount > 1);
	                    var originalSelectionRanges = [];
	                    var originalSelectionBackward = winSelectionIsBackward(sel);
	                    for (var i = 0; i < originalSelectionRangeCount; ++i) {
	                        originalSelectionRanges[i] = sel.getRangeAt(i);
	                    }

	                    // Create some test elements
	                    var testEl = dom.createTestElement(document, "", false);
	                    var textNode = testEl.appendChild( document.createTextNode("\u00a0\u00a0\u00a0") );

	                    // Test whether the native selection will allow a collapsed selection within a non-editable element
	                    var r1 = document.createRange();

	                    r1.setStart(textNode, 1);
	                    r1.collapse(true);
	                    sel.removeAllRanges();
	                    sel.addRange(r1);
	                    collapsedNonEditableSelectionsSupported = (sel.rangeCount == 1);
	                    sel.removeAllRanges();

	                    // Test whether the native selection is capable of supporting multiple ranges.
	                    if (!selectionHasMultipleRanges) {
	                        // Doing the original feature test here in Chrome 36 (and presumably later versions) prints a
	                        // console error of "Discontiguous selection is not supported." that cannot be suppressed. There's
	                        // nothing we can do about this while retaining the feature test so we have to resort to a browser
	                        // sniff. I'm not happy about it. See
	                        // https://code.google.com/p/chromium/issues/detail?id=399791
	                        var chromeMatch = window.navigator.appVersion.match(/Chrome\/(.*?) /);
	                        if (chromeMatch && parseInt(chromeMatch[1]) >= 36) {
	                            selectionSupportsMultipleRanges = false;
	                        } else {
	                            var r2 = r1.cloneRange();
	                            r1.setStart(textNode, 0);
	                            r2.setEnd(textNode, 3);
	                            r2.setStart(textNode, 2);
	                            sel.addRange(r1);
	                            sel.addRange(r2);
	                            selectionSupportsMultipleRanges = (sel.rangeCount == 2);
	                        }
	                    }

	                    // Clean up
	                    dom.removeNode(testEl);
	                    sel.removeAllRanges();

	                    for (i = 0; i < originalSelectionRangeCount; ++i) {
	                        if (i == 0 && originalSelectionBackward) {
	                            if (addRangeBackwardToNative) {
	                                addRangeBackwardToNative(sel, originalSelectionRanges[i]);
	                            } else {
	                                api.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend");
	                                sel.addRange(originalSelectionRanges[i]);
	                            }
	                        } else {
	                            sel.addRange(originalSelectionRanges[i]);
	                        }
	                    }
	                }
	            })();
	        }

	        features.selectionSupportsMultipleRanges = selectionSupportsMultipleRanges;
	        features.collapsedNonEditableSelectionsSupported = collapsedNonEditableSelectionsSupported;

	        // ControlRanges
	        var implementsControlRange = false, testControlRange;

	        if (body && isHostMethod(body, "createControlRange")) {
	            testControlRange = body.createControlRange();
	            if (util.areHostProperties(testControlRange, ["item", "add"])) {
	                implementsControlRange = true;
	            }
	        }
	        features.implementsControlRange = implementsControlRange;

	        // Selection collapsedness
	        if (selectionHasAnchorAndFocus) {
	            selectionIsCollapsed = function(sel) {
	                return sel.anchorNode === sel.focusNode && sel.anchorOffset === sel.focusOffset;
	            };
	        } else {
	            selectionIsCollapsed = function(sel) {
	                return sel.rangeCount ? sel.getRangeAt(sel.rangeCount - 1).collapsed : false;
	            };
	        }

	        function updateAnchorAndFocusFromRange(sel, range, backward) {
	            var anchorPrefix = backward ? "end" : "start", focusPrefix = backward ? "start" : "end";
	            sel.anchorNode = range[anchorPrefix + "Container"];
	            sel.anchorOffset = range[anchorPrefix + "Offset"];
	            sel.focusNode = range[focusPrefix + "Container"];
	            sel.focusOffset = range[focusPrefix + "Offset"];
	        }

	        function updateAnchorAndFocusFromNativeSelection(sel) {
	            var nativeSel = sel.nativeSelection;
	            sel.anchorNode = nativeSel.anchorNode;
	            sel.anchorOffset = nativeSel.anchorOffset;
	            sel.focusNode = nativeSel.focusNode;
	            sel.focusOffset = nativeSel.focusOffset;
	        }

	        function updateEmptySelection(sel) {
	            sel.anchorNode = sel.focusNode = null;
	            sel.anchorOffset = sel.focusOffset = 0;
	            sel.rangeCount = 0;
	            sel.isCollapsed = true;
	            sel._ranges.length = 0;
	        }

	        function getNativeRange(range) {
	            var nativeRange;
	            if (range instanceof DomRange) {
	                nativeRange = api.createNativeRange(range.getDocument());
	                nativeRange.setEnd(range.endContainer, range.endOffset);
	                nativeRange.setStart(range.startContainer, range.startOffset);
	            } else if (range instanceof WrappedRange) {
	                nativeRange = range.nativeRange;
	            } else if (features.implementsDomRange && (range instanceof dom.getWindow(range.startContainer).Range)) {
	                nativeRange = range;
	            }
	            return nativeRange;
	        }

	        function rangeContainsSingleElement(rangeNodes) {
	            if (!rangeNodes.length || rangeNodes[0].nodeType != 1) {
	                return false;
	            }
	            for (var i = 1, len = rangeNodes.length; i < len; ++i) {
	                if (!dom.isAncestorOf(rangeNodes[0], rangeNodes[i])) {
	                    return false;
	                }
	            }
	            return true;
	        }

	        function getSingleElementFromRange(range) {
	            var nodes = range.getNodes();
	            if (!rangeContainsSingleElement(nodes)) {
	                throw module.createError("getSingleElementFromRange: range " + range.inspect() + " did not consist of a single element");
	            }
	            return nodes[0];
	        }

	        // Simple, quick test which only needs to distinguish between a TextRange and a ControlRange
	        function isTextRange(range) {
	            return !!range && typeof range.text != "undefined";
	        }

	        function updateFromTextRange(sel, range) {
	            // Create a Range from the selected TextRange
	            var wrappedRange = new WrappedRange(range);
	            sel._ranges = [wrappedRange];

	            updateAnchorAndFocusFromRange(sel, wrappedRange, false);
	            sel.rangeCount = 1;
	            sel.isCollapsed = wrappedRange.collapsed;
	        }

	        function updateControlSelection(sel) {
	            // Update the wrapped selection based on what's now in the native selection
	            sel._ranges.length = 0;
	            if (sel.docSelection.type == "None") {
	                updateEmptySelection(sel);
	            } else {
	                var controlRange = sel.docSelection.createRange();
	                if (isTextRange(controlRange)) {
	                    // This case (where the selection type is "Control" and calling createRange() on the selection returns
	                    // a TextRange) can happen in IE 9. It happens, for example, when all elements in the selected
	                    // ControlRange have been removed from the ControlRange and removed from the document.
	                    updateFromTextRange(sel, controlRange);
	                } else {
	                    sel.rangeCount = controlRange.length;
	                    var range, doc = getDocument(controlRange.item(0));
	                    for (var i = 0; i < sel.rangeCount; ++i) {
	                        range = api.createRange(doc);
	                        range.selectNode(controlRange.item(i));
	                        sel._ranges.push(range);
	                    }
	                    sel.isCollapsed = sel.rangeCount == 1 && sel._ranges[0].collapsed;
	                    updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], false);
	                }
	            }
	        }

	        function addRangeToControlSelection(sel, range) {
	            var controlRange = sel.docSelection.createRange();
	            var rangeElement = getSingleElementFromRange(range);

	            // Create a new ControlRange containing all the elements in the selected ControlRange plus the element
	            // contained by the supplied range
	            var doc = getDocument(controlRange.item(0));
	            var newControlRange = getBody(doc).createControlRange();
	            for (var i = 0, len = controlRange.length; i < len; ++i) {
	                newControlRange.add(controlRange.item(i));
	            }
	            try {
	                newControlRange.add(rangeElement);
	            } catch (ex) {
	                throw module.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)");
	            }
	            newControlRange.select();

	            // Update the wrapped selection based on what's now in the native selection
	            updateControlSelection(sel);
	        }

	        var getSelectionRangeAt;

	        if (isHostMethod(testSelection, "getRangeAt")) {
	            // try/catch is present because getRangeAt() must have thrown an error in some browser and some situation.
	            // Unfortunately, I didn't write a comment about the specifics and am now scared to take it out. Let that be a
	            // lesson to us all, especially me.
	            getSelectionRangeAt = function(sel, index) {
	                try {
	                    return sel.getRangeAt(index);
	                } catch (ex) {
	                    return null;
	                }
	            };
	        } else if (selectionHasAnchorAndFocus) {
	            getSelectionRangeAt = function(sel) {
	                var doc = getDocument(sel.anchorNode);
	                var range = api.createRange(doc);
	                range.setStartAndEnd(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset);

	                // Handle the case when the selection was selected backwards (from the end to the start in the
	                // document)
	                if (range.collapsed !== this.isCollapsed) {
	                    range.setStartAndEnd(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset);
	                }

	                return range;
	            };
	        }

	        function WrappedSelection(selection, docSelection, win) {
	            this.nativeSelection = selection;
	            this.docSelection = docSelection;
	            this._ranges = [];
	            this.win = win;
	            this.refresh();
	        }

	        WrappedSelection.prototype = api.selectionPrototype;

	        function deleteProperties(sel) {
	            sel.win = sel.anchorNode = sel.focusNode = sel._ranges = null;
	            sel.rangeCount = sel.anchorOffset = sel.focusOffset = 0;
	            sel.detached = true;
	        }

	        var cachedRangySelections = [];

	        function actOnCachedSelection(win, action) {
	            var i = cachedRangySelections.length, cached, sel;
	            while (i--) {
	                cached = cachedRangySelections[i];
	                sel = cached.selection;
	                if (action == "deleteAll") {
	                    deleteProperties(sel);
	                } else if (cached.win == win) {
	                    if (action == "delete") {
	                        cachedRangySelections.splice(i, 1);
	                        return true;
	                    } else {
	                        return sel;
	                    }
	                }
	            }
	            if (action == "deleteAll") {
	                cachedRangySelections.length = 0;
	            }
	            return null;
	        }

	        var getSelection = function(win) {
	            // Check if the parameter is a Rangy Selection object
	            if (win && win instanceof WrappedSelection) {
	                win.refresh();
	                return win;
	            }

	            win = getWindow(win, "getNativeSelection");

	            var sel = actOnCachedSelection(win);
	            var nativeSel = getNativeSelection(win), docSel = implementsDocSelection ? getDocSelection(win) : null;
	            if (sel) {
	                sel.nativeSelection = nativeSel;
	                sel.docSelection = docSel;
	                sel.refresh();
	            } else {
	                sel = new WrappedSelection(nativeSel, docSel, win);
	                cachedRangySelections.push( { win: win, selection: sel } );
	            }
	            return sel;
	        };

	        api.getSelection = getSelection;

	        util.createAliasForDeprecatedMethod(api, "getIframeSelection", "getSelection");

	        var selProto = WrappedSelection.prototype;

	        function createControlSelection(sel, ranges) {
	            // Ensure that the selection becomes of type "Control"
	            var doc = getDocument(ranges[0].startContainer);
	            var controlRange = getBody(doc).createControlRange();
	            for (var i = 0, el, len = ranges.length; i < len; ++i) {
	                el = getSingleElementFromRange(ranges[i]);
	                try {
	                    controlRange.add(el);
	                } catch (ex) {
	                    throw module.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)");
	                }
	            }
	            controlRange.select();

	            // Update the wrapped selection based on what's now in the native selection
	            updateControlSelection(sel);
	        }

	        // Selecting a range
	        if (!useDocumentSelection && selectionHasAnchorAndFocus && util.areHostMethods(testSelection, ["removeAllRanges", "addRange"])) {
	            selProto.removeAllRanges = function() {
	                this.nativeSelection.removeAllRanges();
	                updateEmptySelection(this);
	            };

	            var addRangeBackward = function(sel, range) {
	                addRangeBackwardToNative(sel.nativeSelection, range);
	                sel.refresh();
	            };

	            if (selectionHasRangeCount) {
	                selProto.addRange = function(range, direction) {
	                    if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
	                        addRangeToControlSelection(this, range);
	                    } else {
	                        if (isDirectionBackward(direction) && selectionHasExtend) {
	                            addRangeBackward(this, range);
	                        } else {
	                            var previousRangeCount;
	                            if (selectionSupportsMultipleRanges) {
	                                previousRangeCount = this.rangeCount;
	                            } else {
	                                this.removeAllRanges();
	                                previousRangeCount = 0;
	                            }
	                            // Clone the native range so that changing the selected range does not affect the selection.
	                            // This is contrary to the spec but is the only way to achieve consistency between browsers. See
	                            // issue 80.
	                            var clonedNativeRange = getNativeRange(range).cloneRange();
	                            try {
	                                this.nativeSelection.addRange(clonedNativeRange);
	                            } catch (ex) {
	                            }

	                            // Check whether adding the range was successful
	                            this.rangeCount = this.nativeSelection.rangeCount;

	                            if (this.rangeCount == previousRangeCount + 1) {
	                                // The range was added successfully

	                                // Check whether the range that we added to the selection is reflected in the last range extracted from
	                                // the selection
	                                if (api.config.checkSelectionRanges) {
	                                    var nativeRange = getSelectionRangeAt(this.nativeSelection, this.rangeCount - 1);
	                                    if (nativeRange && !rangesEqual(nativeRange, range)) {
	                                        // Happens in WebKit with, for example, a selection placed at the start of a text node
	                                        range = new WrappedRange(nativeRange);
	                                    }
	                                }
	                                this._ranges[this.rangeCount - 1] = range;
	                                updateAnchorAndFocusFromRange(this, range, selectionIsBackward(this.nativeSelection));
	                                this.isCollapsed = selectionIsCollapsed(this);
	                            } else {
	                                // The range was not added successfully. The simplest thing is to refresh
	                                this.refresh();
	                            }
	                        }
	                    }
	                };
	            } else {
	                selProto.addRange = function(range, direction) {
	                    if (isDirectionBackward(direction) && selectionHasExtend) {
	                        addRangeBackward(this, range);
	                    } else {
	                        this.nativeSelection.addRange(getNativeRange(range));
	                        this.refresh();
	                    }
	                };
	            }

	            selProto.setRanges = function(ranges) {
	                if (implementsControlRange && implementsDocSelection && ranges.length > 1) {
	                    createControlSelection(this, ranges);
	                } else {
	                    this.removeAllRanges();
	                    for (var i = 0, len = ranges.length; i < len; ++i) {
	                        this.addRange(ranges[i]);
	                    }
	                }
	            };
	        } else if (isHostMethod(testSelection, "empty") && isHostMethod(testRange, "select") &&
	                   implementsControlRange && useDocumentSelection) {

	            selProto.removeAllRanges = function() {
	                // Added try/catch as fix for issue #21
	                try {
	                    this.docSelection.empty();

	                    // Check for empty() not working (issue #24)
	                    if (this.docSelection.type != "None") {
	                        // Work around failure to empty a control selection by instead selecting a TextRange and then
	                        // calling empty()
	                        var doc;
	                        if (this.anchorNode) {
	                            doc = getDocument(this.anchorNode);
	                        } else if (this.docSelection.type == CONTROL) {
	                            var controlRange = this.docSelection.createRange();
	                            if (controlRange.length) {
	                                doc = getDocument( controlRange.item(0) );
	                            }
	                        }
	                        if (doc) {
	                            var textRange = getBody(doc).createTextRange();
	                            textRange.select();
	                            this.docSelection.empty();
	                        }
	                    }
	                } catch(ex) {}
	                updateEmptySelection(this);
	            };

	            selProto.addRange = function(range) {
	                if (this.docSelection.type == CONTROL) {
	                    addRangeToControlSelection(this, range);
	                } else {
	                    api.WrappedTextRange.rangeToTextRange(range).select();
	                    this._ranges[0] = range;
	                    this.rangeCount = 1;
	                    this.isCollapsed = this._ranges[0].collapsed;
	                    updateAnchorAndFocusFromRange(this, range, false);
	                }
	            };

	            selProto.setRanges = function(ranges) {
	                this.removeAllRanges();
	                var rangeCount = ranges.length;
	                if (rangeCount > 1) {
	                    createControlSelection(this, ranges);
	                } else if (rangeCount) {
	                    this.addRange(ranges[0]);
	                }
	            };
	        } else {
	            module.fail("No means of selecting a Range or TextRange was found");
	            return false;
	        }

	        selProto.getRangeAt = function(index) {
	            if (index < 0 || index >= this.rangeCount) {
	                throw new DOMException("INDEX_SIZE_ERR");
	            } else {
	                // Clone the range to preserve selection-range independence. See issue 80.
	                return this._ranges[index].cloneRange();
	            }
	        };

	        var refreshSelection;

	        if (useDocumentSelection) {
	            refreshSelection = function(sel) {
	                var range;
	                if (api.isSelectionValid(sel.win)) {
	                    range = sel.docSelection.createRange();
	                } else {
	                    range = getBody(sel.win.document).createTextRange();
	                    range.collapse(true);
	                }

	                if (sel.docSelection.type == CONTROL) {
	                    updateControlSelection(sel);
	                } else if (isTextRange(range)) {
	                    updateFromTextRange(sel, range);
	                } else {
	                    updateEmptySelection(sel);
	                }
	            };
	        } else if (isHostMethod(testSelection, "getRangeAt") && typeof testSelection.rangeCount == NUMBER) {
	            refreshSelection = function(sel) {
	                if (implementsControlRange && implementsDocSelection && sel.docSelection.type == CONTROL) {
	                    updateControlSelection(sel);
	                } else {
	                    sel._ranges.length = sel.rangeCount = sel.nativeSelection.rangeCount;
	                    if (sel.rangeCount) {
	                        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
	                            sel._ranges[i] = new api.WrappedRange(sel.nativeSelection.getRangeAt(i));
	                        }
	                        updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], selectionIsBackward(sel.nativeSelection));
	                        sel.isCollapsed = selectionIsCollapsed(sel);
	                    } else {
	                        updateEmptySelection(sel);
	                    }
	                }
	            };
	        } else if (selectionHasAnchorAndFocus && typeof testSelection.isCollapsed == BOOLEAN && typeof testRange.collapsed == BOOLEAN && features.implementsDomRange) {
	            refreshSelection = function(sel) {
	                var range, nativeSel = sel.nativeSelection;
	                if (nativeSel.anchorNode) {
	                    range = getSelectionRangeAt(nativeSel, 0);
	                    sel._ranges = [range];
	                    sel.rangeCount = 1;
	                    updateAnchorAndFocusFromNativeSelection(sel);
	                    sel.isCollapsed = selectionIsCollapsed(sel);
	                } else {
	                    updateEmptySelection(sel);
	                }
	            };
	        } else {
	            module.fail("No means of obtaining a Range or TextRange from the user's selection was found");
	            return false;
	        }

	        selProto.refresh = function(checkForChanges) {
	            var oldRanges = checkForChanges ? this._ranges.slice(0) : null;
	            var oldAnchorNode = this.anchorNode, oldAnchorOffset = this.anchorOffset;

	            refreshSelection(this);
	            if (checkForChanges) {
	                // Check the range count first
	                var i = oldRanges.length;
	                if (i != this._ranges.length) {
	                    return true;
	                }

	                // Now check the direction. Checking the anchor position is the same is enough since we're checking all the
	                // ranges after this
	                if (this.anchorNode != oldAnchorNode || this.anchorOffset != oldAnchorOffset) {
	                    return true;
	                }

	                // Finally, compare each range in turn
	                while (i--) {
	                    if (!rangesEqual(oldRanges[i], this._ranges[i])) {
	                        return true;
	                    }
	                }
	                return false;
	            }
	        };

	        // Removal of a single range
	        var removeRangeManually = function(sel, range) {
	            var ranges = sel.getAllRanges();
	            sel.removeAllRanges();
	            for (var i = 0, len = ranges.length; i < len; ++i) {
	                if (!rangesEqual(range, ranges[i])) {
	                    sel.addRange(ranges[i]);
	                }
	            }
	            if (!sel.rangeCount) {
	                updateEmptySelection(sel);
	            }
	        };

	        if (implementsControlRange && implementsDocSelection) {
	            selProto.removeRange = function(range) {
	                if (this.docSelection.type == CONTROL) {
	                    var controlRange = this.docSelection.createRange();
	                    var rangeElement = getSingleElementFromRange(range);

	                    // Create a new ControlRange containing all the elements in the selected ControlRange minus the
	                    // element contained by the supplied range
	                    var doc = getDocument(controlRange.item(0));
	                    var newControlRange = getBody(doc).createControlRange();
	                    var el, removed = false;
	                    for (var i = 0, len = controlRange.length; i < len; ++i) {
	                        el = controlRange.item(i);
	                        if (el !== rangeElement || removed) {
	                            newControlRange.add(controlRange.item(i));
	                        } else {
	                            removed = true;
	                        }
	                    }
	                    newControlRange.select();

	                    // Update the wrapped selection based on what's now in the native selection
	                    updateControlSelection(this);
	                } else {
	                    removeRangeManually(this, range);
	                }
	            };
	        } else {
	            selProto.removeRange = function(range) {
	                removeRangeManually(this, range);
	            };
	        }

	        // Detecting if a selection is backward
	        var selectionIsBackward;
	        if (!useDocumentSelection && selectionHasAnchorAndFocus && features.implementsDomRange) {
	            selectionIsBackward = winSelectionIsBackward;

	            selProto.isBackward = function() {
	                return selectionIsBackward(this);
	            };
	        } else {
	            selectionIsBackward = selProto.isBackward = function() {
	                return false;
	            };
	        }

	        // Create an alias for backwards compatibility. From 1.3, everything is "backward" rather than "backwards"
	        selProto.isBackwards = selProto.isBackward;

	        // Selection stringifier
	        // This is conformant to the old HTML5 selections draft spec but differs from WebKit and Mozilla's implementation.
	        // The current spec does not yet define this method.
	        selProto.toString = function() {
	            var rangeTexts = [];
	            for (var i = 0, len = this.rangeCount; i < len; ++i) {
	                rangeTexts[i] = "" + this._ranges[i];
	            }
	            return rangeTexts.join("");
	        };

	        function assertNodeInSameDocument(sel, node) {
	            if (sel.win.document != getDocument(node)) {
	                throw new DOMException("WRONG_DOCUMENT_ERR");
	            }
	        }

	        // No current browser conforms fully to the spec for this method, so Rangy's own method is always used
	        selProto.collapse = function(node, offset) {
	            assertNodeInSameDocument(this, node);
	            var range = api.createRange(node);
	            range.collapseToPoint(node, offset);
	            this.setSingleRange(range);
	            this.isCollapsed = true;
	        };

	        selProto.collapseToStart = function() {
	            if (this.rangeCount) {
	                var range = this._ranges[0];
	                this.collapse(range.startContainer, range.startOffset);
	            } else {
	                throw new DOMException("INVALID_STATE_ERR");
	            }
	        };

	        selProto.collapseToEnd = function() {
	            if (this.rangeCount) {
	                var range = this._ranges[this.rangeCount - 1];
	                this.collapse(range.endContainer, range.endOffset);
	            } else {
	                throw new DOMException("INVALID_STATE_ERR");
	            }
	        };

	        // The spec is very specific on how selectAllChildren should be implemented and not all browsers implement it as
	        // specified so the native implementation is never used by Rangy.
	        selProto.selectAllChildren = function(node) {
	            assertNodeInSameDocument(this, node);
	            var range = api.createRange(node);
	            range.selectNodeContents(node);
	            this.setSingleRange(range);
	        };

	        selProto.deleteFromDocument = function() {
	            // Sepcial behaviour required for IE's control selections
	            if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
	                var controlRange = this.docSelection.createRange();
	                var element;
	                while (controlRange.length) {
	                    element = controlRange.item(0);
	                    controlRange.remove(element);
	                    dom.removeNode(element);
	                }
	                this.refresh();
	            } else if (this.rangeCount) {
	                var ranges = this.getAllRanges();
	                if (ranges.length) {
	                    this.removeAllRanges();
	                    for (var i = 0, len = ranges.length; i < len; ++i) {
	                        ranges[i].deleteContents();
	                    }
	                    // The spec says nothing about what the selection should contain after calling deleteContents on each
	                    // range. Firefox moves the selection to where the final selected range was, so we emulate that
	                    this.addRange(ranges[len - 1]);
	                }
	            }
	        };

	        // The following are non-standard extensions
	        selProto.eachRange = function(func, returnValue) {
	            for (var i = 0, len = this._ranges.length; i < len; ++i) {
	                if ( func( this.getRangeAt(i) ) ) {
	                    return returnValue;
	                }
	            }
	        };

	        selProto.getAllRanges = function() {
	            var ranges = [];
	            this.eachRange(function(range) {
	                ranges.push(range);
	            });
	            return ranges;
	        };

	        selProto.setSingleRange = function(range, direction) {
	            this.removeAllRanges();
	            this.addRange(range, direction);
	        };

	        selProto.callMethodOnEachRange = function(methodName, params) {
	            var results = [];
	            this.eachRange( function(range) {
	                results.push( range[methodName].apply(range, params || []) );
	            } );
	            return results;
	        };

	        function createStartOrEndSetter(isStart) {
	            return function(node, offset) {
	                var range;
	                if (this.rangeCount) {
	                    range = this.getRangeAt(0);
	                    range["set" + (isStart ? "Start" : "End")](node, offset);
	                } else {
	                    range = api.createRange(this.win.document);
	                    range.setStartAndEnd(node, offset);
	                }
	                this.setSingleRange(range, this.isBackward());
	            };
	        }

	        selProto.setStart = createStartOrEndSetter(true);
	        selProto.setEnd = createStartOrEndSetter(false);

	        // Add select() method to Range prototype. Any existing selection will be removed.
	        api.rangePrototype.select = function(direction) {
	            getSelection( this.getDocument() ).setSingleRange(this, direction);
	        };

	        selProto.changeEachRange = function(func) {
	            var ranges = [];
	            var backward = this.isBackward();

	            this.eachRange(function(range) {
	                func(range);
	                ranges.push(range);
	            });

	            this.removeAllRanges();
	            if (backward && ranges.length == 1) {
	                this.addRange(ranges[0], "backward");
	            } else {
	                this.setRanges(ranges);
	            }
	        };

	        selProto.containsNode = function(node, allowPartial) {
	            return this.eachRange( function(range) {
	                return range.containsNode(node, allowPartial);
	            }, true ) || false;
	        };

	        selProto.getBookmark = function(containerNode) {
	            return {
	                backward: this.isBackward(),
	                rangeBookmarks: this.callMethodOnEachRange("getBookmark", [containerNode])
	            };
	        };

	        selProto.moveToBookmark = function(bookmark) {
	            var selRanges = [];
	            for (var i = 0, rangeBookmark, range; rangeBookmark = bookmark.rangeBookmarks[i++]; ) {
	                range = api.createRange(this.win);
	                range.moveToBookmark(rangeBookmark);
	                selRanges.push(range);
	            }
	            if (bookmark.backward) {
	                this.setSingleRange(selRanges[0], "backward");
	            } else {
	                this.setRanges(selRanges);
	            }
	        };

	        selProto.saveRanges = function() {
	            return {
	                backward: this.isBackward(),
	                ranges: this.callMethodOnEachRange("cloneRange")
	            };
	        };

	        selProto.restoreRanges = function(selRanges) {
	            this.removeAllRanges();
	            for (var i = 0, range; range = selRanges.ranges[i]; ++i) {
	                this.addRange(range, (selRanges.backward && i == 0));
	            }
	        };

	        selProto.toHtml = function() {
	            var rangeHtmls = [];
	            this.eachRange(function(range) {
	                rangeHtmls.push( DomRange.toHtml(range) );
	            });
	            return rangeHtmls.join("");
	        };

	        if (features.implementsTextRange) {
	            selProto.getNativeTextRange = function() {
	                var sel, textRange;
	                if ( (sel = this.docSelection) ) {
	                    var range = sel.createRange();
	                    if (isTextRange(range)) {
	                        return range;
	                    } else {
	                        throw module.createError("getNativeTextRange: selection is a control selection");
	                    }
	                } else if (this.rangeCount > 0) {
	                    return api.WrappedTextRange.rangeToTextRange( this.getRangeAt(0) );
	                } else {
	                    throw module.createError("getNativeTextRange: selection contains no range");
	                }
	            };
	        }

	        function inspect(sel) {
	            var rangeInspects = [];
	            var anchor = new DomPosition(sel.anchorNode, sel.anchorOffset);
	            var focus = new DomPosition(sel.focusNode, sel.focusOffset);
	            var name = (typeof sel.getName == "function") ? sel.getName() : "Selection";

	            if (typeof sel.rangeCount != "undefined") {
	                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
	                    rangeInspects[i] = DomRange.inspect(sel.getRangeAt(i));
	                }
	            }
	            return "[" + name + "(Ranges: " + rangeInspects.join(", ") +
	                    ")(anchor: " + anchor.inspect() + ", focus: " + focus.inspect() + "]";
	        }

	        selProto.getName = function() {
	            return "WrappedSelection";
	        };

	        selProto.inspect = function() {
	            return inspect(this);
	        };

	        selProto.detach = function() {
	            actOnCachedSelection(this.win, "delete");
	            deleteProperties(this);
	        };

	        WrappedSelection.detachAll = function() {
	            actOnCachedSelection(null, "deleteAll");
	        };

	        WrappedSelection.inspect = inspect;
	        WrappedSelection.isDirectionBackward = isDirectionBackward;

	        api.Selection = WrappedSelection;

	        api.selectionPrototype = selProto;

	        api.addShimListener(function(win) {
	            if (typeof win.getSelection == "undefined") {
	                win.getSelection = function() {
	                    return getSelection(win);
	                };
	            }
	            win = null;
	        });
	    });
	    

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // Wait for document to load before initializing
	    var docReady = false;

	    var loadHandler = function(e) {
	        if (!docReady) {
	            docReady = true;
	            if (!api.initialized && api.config.autoInitialize) {
	                init();
	            }
	        }
	    };

	    if (isBrowser) {
	        // Test whether the document has already been loaded and initialize immediately if so
	        if (document.readyState == "complete") {
	            loadHandler();
	        } else {
	            if (isHostMethod(document, "addEventListener")) {
	                document.addEventListener("DOMContentLoaded", loadHandler, false);
	            }

	            // Add a fallback in case the DOMContentLoaded event isn't supported
	            addListener(window, "load", loadHandler);
	        }
	    }

	    return api;
	}, this);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!function(a,b){function c(a){try{return 0!==angular.element(a).length}catch(b){return!1}}function d(a,b){if(!a||""===a||e.hasOwnProperty(a))throw"textAngular Error: A unique name is required for a Tool Definition";if(b.display&&(""===b.display||!c(b.display))||!b.display&&!b.buttontext&&!b.iconclass)throw'textAngular Error: Tool Definition for "'+a+'" does not have a valid display/iconclass/buttontext value';e[a]=b}b["true"]=a;var e={};angular.module("textAngularSetup",[]).constant("taRegisterTool",d).value("taTools",e).value("taOptions",{forceTextAngularSanitize:!0,keyMappings:[],toolbar:[["h1","h2","h3","h4","h5","h6","p","pre","quote"],["bold","italics","underline","strikeThrough","ul","ol","redo","undo","clear"],["justifyLeft","justifyCenter","justifyRight","justifyFull","indent","outdent"],["html","insertImage","insertLink","insertVideo","wordcount","charcount"]],classes:{focussed:"focussed",toolbar:"btn-toolbar",toolbarGroup:"btn-group",toolbarButton:"btn btn-default",toolbarButtonActive:"active",disabled:"disabled",textEditor:"form-control",htmlEditor:"form-control"},defaultTagAttributes:{a:{target:""}},setup:{textEditorSetup:function(a){},htmlEditorSetup:function(a){}},defaultFileDropHandler:function(a,b){var c=new FileReader;return"image"===a.type.substring(0,5)?(c.onload=function(){""!==c.result&&b("insertImage",c.result,!0)},c.readAsDataURL(a),!0):!1}}).value("taSelectableElements",["a","img"]).value("taCustomRenderers",[{selector:"img",customAttribute:"ta-insert-video",renderLogic:function(a){var b=angular.element("<iframe></iframe>"),c=a.prop("attributes");angular.forEach(c,function(a){b.attr(a.name,a.value)}),b.attr("src",b.attr("ta-insert-video")),a.replaceWith(b)}}]).value("taTranslations",{html:{tooltip:"Toggle html / Rich Text"},heading:{tooltip:"Heading "},p:{tooltip:"Paragraph"},pre:{tooltip:"Preformatted text"},ul:{tooltip:"Unordered List"},ol:{tooltip:"Ordered List"},quote:{tooltip:"Quote/unquote selection or paragraph"},undo:{tooltip:"Undo"},redo:{tooltip:"Redo"},bold:{tooltip:"Bold"},italic:{tooltip:"Italic"},underline:{tooltip:"Underline"},strikeThrough:{tooltip:"Strikethrough"},justifyLeft:{tooltip:"Align text left"},justifyRight:{tooltip:"Align text right"},justifyFull:{tooltip:"Justify text"},justifyCenter:{tooltip:"Center"},indent:{tooltip:"Increase indent"},outdent:{tooltip:"Decrease indent"},clear:{tooltip:"Clear formatting"},insertImage:{dialogPrompt:"Please enter an image URL to insert",tooltip:"Insert image",hotkey:"the - possibly language dependent hotkey ... for some future implementation"},insertVideo:{tooltip:"Insert video",dialogPrompt:"Please enter a youtube URL to embed"},insertLink:{tooltip:"Insert / edit link",dialogPrompt:"Please enter a URL to insert"},editLink:{reLinkButton:{tooltip:"Relink"},unLinkButton:{tooltip:"Unlink"},targetToggle:{buttontext:"Open in New Window"}},wordcount:{tooltip:"Display words Count"},charcount:{tooltip:"Display characters Count"}}).factory("taToolFunctions",["$window","taTranslations",function(a,b){return{imgOnSelectAction:function(a,b,c){var d=function(){c.updateTaBindtaTextElement(),c.hidePopover()};a.preventDefault(),c.displayElements.popover.css("width","375px");var e=c.displayElements.popoverContainer;e.empty();var f=angular.element('<div class="btn-group" style="padding-right: 6px;">'),g=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">100% </button>');g.on("click",function(a){a.preventDefault(),b.css({width:"100%",height:""}),d()});var h=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">50% </button>');h.on("click",function(a){a.preventDefault(),b.css({width:"50%",height:""}),d()});var i=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">25% </button>');i.on("click",function(a){a.preventDefault(),b.css({width:"25%",height:""}),d()});var j=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">Reset</button>');j.on("click",function(a){a.preventDefault(),b.css({width:"",height:""}),d()}),f.append(g),f.append(h),f.append(i),f.append(j),e.append(f),f=angular.element('<div class="btn-group" style="padding-right: 6px;">');var k=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-left"></i></button>');k.on("click",function(a){a.preventDefault(),b.css("float","left"),b.css("cssFloat","left"),b.css("styleFloat","left"),d()});var l=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-right"></i></button>');l.on("click",function(a){a.preventDefault(),b.css("float","right"),b.css("cssFloat","right"),b.css("styleFloat","right"),d()});var m=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-justify"></i></button>');m.on("click",function(a){a.preventDefault(),b.css("float",""),b.css("cssFloat",""),b.css("styleFloat",""),d()}),f.append(k),f.append(m),f.append(l),e.append(f),f=angular.element('<div class="btn-group">');var n=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-trash-o"></i></button>');n.on("click",function(a){a.preventDefault(),b.remove(),d()}),f.append(n),e.append(f),c.showPopover(b),c.showResizeOverlay(b)},aOnSelectAction:function(c,d,e){c.preventDefault(),e.displayElements.popover.css("width","436px");var f=e.displayElements.popoverContainer;f.empty(),f.css("line-height","28px");var g=angular.element('<a href="'+d.attr("href")+'" target="_blank">'+d.attr("href")+"</a>");g.css({display:"inline-block","max-width":"200px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","vertical-align":"middle"}),f.append(g);var h=angular.element('<div class="btn-group pull-right">'),i=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+b.editLink.reLinkButton.tooltip+'"><i class="fa fa-edit icon-edit"></i></button>');i.on("click",function(c){c.preventDefault();var f=a.prompt(b.insertLink.dialogPrompt,d.attr("href"));f&&""!==f&&"http://"!==f&&(d.attr("href",f),e.updateTaBindtaTextElement()),e.hidePopover()}),h.append(i);var j=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+b.editLink.unLinkButton.tooltip+'"><i class="fa fa-unlink icon-unlink"></i></button>');j.on("click",function(a){a.preventDefault(),d.replaceWith(d.contents()),e.updateTaBindtaTextElement(),e.hidePopover()}),h.append(j);var k=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on">'+b.editLink.targetToggle.buttontext+"</button>");"_blank"===d.attr("target")&&k.addClass("active"),k.on("click",function(a){a.preventDefault(),d.attr("target","_blank"===d.attr("target")?"":"_blank"),k.toggleClass("active"),e.updateTaBindtaTextElement()}),h.append(k),f.append(h),e.showPopover(d)},extractYoutubeVideoId:function(a){var b=/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i,c=a.match(b);return c&&c[1]||null}}}]).run(["taRegisterTool","$window","taTranslations","taSelection","taToolFunctions","$sanitize","taOptions",function(a,b,c,d,e,f,g){var h={};if(f("",h),g.forceTextAngularSanitize===!0&&"taSanitize"!==h.version)throw angular.$$minErr("textAngular")("textAngularSetup","The textAngular-sanitize provider has been replaced by another -- have you included angular-sanitize by mistake?");a("html",{iconclass:"fa fa-code",tooltiptext:c.html.tooltip,action:function(){this.$editor().switchView()},activeState:function(){return this.$editor().showHtml}});var i=function(a){return function(){return this.$editor().queryFormatBlockState(a)}},j=function(){return this.$editor().wrapSelection("formatBlock","<"+this.name.toUpperCase()+">")};angular.forEach(["h1","h2","h3","h4","h5","h6"],function(b){a(b.toLowerCase(),{buttontext:b.toUpperCase(),tooltiptext:c.heading.tooltip+b.charAt(1),action:j,activeState:i(b.toLowerCase())})}),a("p",{buttontext:"P",tooltiptext:c.p.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<P>")},activeState:function(){return this.$editor().queryFormatBlockState("p")}}),a("pre",{buttontext:"pre",tooltiptext:c.pre.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<PRE>")},activeState:function(){return this.$editor().queryFormatBlockState("pre")}}),a("ul",{iconclass:"fa fa-list-ul",tooltiptext:c.ul.tooltip,action:function(){return this.$editor().wrapSelection("insertUnorderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertUnorderedList")}}),a("ol",{iconclass:"fa fa-list-ol",tooltiptext:c.ol.tooltip,action:function(){return this.$editor().wrapSelection("insertOrderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertOrderedList")}}),a("quote",{iconclass:"fa fa-quote-right",tooltiptext:c.quote.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<BLOCKQUOTE>")},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")}}),a("undo",{iconclass:"fa fa-undo",tooltiptext:c.undo.tooltip,action:function(){return this.$editor().wrapSelection("undo",null)}}),a("redo",{iconclass:"fa fa-repeat",tooltiptext:c.redo.tooltip,action:function(){return this.$editor().wrapSelection("redo",null)}}),a("bold",{iconclass:"fa fa-bold",tooltiptext:c.bold.tooltip,action:function(){return this.$editor().wrapSelection("bold",null)},activeState:function(){return this.$editor().queryCommandState("bold")},commandKeyCode:98}),a("justifyLeft",{iconclass:"fa fa-align-left",tooltiptext:c.justifyLeft.tooltip,action:function(){return this.$editor().wrapSelection("justifyLeft",null)},activeState:function(a){if(a&&"#document"===a.nodeName)return!1;var b=!1;return a&&(b="left"===a.css("text-align")||"left"===a.attr("align")||"right"!==a.css("text-align")&&"center"!==a.css("text-align")&&"justify"!==a.css("text-align")&&!this.$editor().queryCommandState("justifyRight")&&!this.$editor().queryCommandState("justifyCenter")&&!this.$editor().queryCommandState("justifyFull")),b=b||this.$editor().queryCommandState("justifyLeft")}}),a("justifyRight",{iconclass:"fa fa-align-right",tooltiptext:c.justifyRight.tooltip,action:function(){return this.$editor().wrapSelection("justifyRight",null)},activeState:function(a){if(a&&"#document"===a.nodeName)return!1;var b=!1;return a&&(b="right"===a.css("text-align")),b=b||this.$editor().queryCommandState("justifyRight")}}),a("justifyFull",{iconclass:"fa fa-align-justify",tooltiptext:c.justifyFull.tooltip,action:function(){return this.$editor().wrapSelection("justifyFull",null)},activeState:function(a){var b=!1;return a&&(b="justify"===a.css("text-align")),b=b||this.$editor().queryCommandState("justifyFull")}}),a("justifyCenter",{iconclass:"fa fa-align-center",tooltiptext:c.justifyCenter.tooltip,action:function(){return this.$editor().wrapSelection("justifyCenter",null)},activeState:function(a){if(a&&"#document"===a.nodeName)return!1;var b=!1;return a&&(b="center"===a.css("text-align")),b=b||this.$editor().queryCommandState("justifyCenter")}}),a("indent",{iconclass:"fa fa-indent",tooltiptext:c.indent.tooltip,action:function(){return this.$editor().wrapSelection("indent",null)},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")},commandKeyCode:"TabKey"}),a("outdent",{iconclass:"fa fa-outdent",tooltiptext:c.outdent.tooltip,action:function(){return this.$editor().wrapSelection("outdent",null)},activeState:function(){return!1},commandKeyCode:"ShiftTabKey"}),a("italics",{iconclass:"fa fa-italic",tooltiptext:c.italic.tooltip,action:function(){return this.$editor().wrapSelection("italic",null)},activeState:function(){return this.$editor().queryCommandState("italic")},commandKeyCode:105}),a("underline",{iconclass:"fa fa-underline",tooltiptext:c.underline.tooltip,action:function(){return this.$editor().wrapSelection("underline",null)},activeState:function(){return this.$editor().queryCommandState("underline")},commandKeyCode:117}),a("strikeThrough",{iconclass:"fa fa-strikethrough",tooltiptext:c.strikeThrough.tooltip,action:function(){return this.$editor().wrapSelection("strikeThrough",null)},activeState:function(){return document.queryCommandState("strikeThrough")}}),a("clear",{iconclass:"fa fa-ban",tooltiptext:c.clear.tooltip,action:function(a,b){var c;this.$editor().wrapSelection("removeFormat",null);var e=angular.element(d.getSelectionElement()),f=function(a){a=angular.element(a);var b=a;angular.forEach(a.children(),function(a){var c=angular.element("<p></p>");c.html(angular.element(a).html()),b.after(c),b=c}),a.remove()};if(angular.forEach(e.find("ul"),f),angular.forEach(e.find("ol"),f),"li"===e[0].tagName.toLowerCase()){var g=e[0].parentNode.childNodes,h=[],i=[],j=!1;for(c=0;c<g.length;c++)g[c]===e[0]?j=!0:j?i.push(g[c]):h.push(g[c]);var k=angular.element(e[0].parentNode),l=angular.element("<p></p>");if(l.html(angular.element(e[0]).html()),0===h.length||0===i.length)0===i.length?k.after(l):k[0].parentNode.insertBefore(l[0],k[0]),0===h.length&&0===i.length?k.remove():angular.element(e[0]).remove();else{var m=angular.element("<"+k[0].tagName+"></"+k[0].tagName+">"),n=angular.element("<"+k[0].tagName+"></"+k[0].tagName+">");for(c=0;c<h.length;c++)m.append(angular.element(h[c]));for(c=0;c<i.length;c++)n.append(angular.element(i[c]));k.after(n),k.after(l),k.after(m),k.remove()}d.setSelectionToElementEnd(l[0])}var o=this.$editor(),p=function(a){a=angular.element(a),a[0]!==o.displayElements.text[0]&&a.removeAttr("class"),angular.forEach(a.children(),p)};angular.forEach(e,p),"li"!==e[0].tagName.toLowerCase()&&"ol"!==e[0].tagName.toLowerCase()&&"ul"!==e[0].tagName.toLowerCase()&&this.$editor().wrapSelection("formatBlock","default"),b()}}),a("insertImage",{iconclass:"fa fa-picture-o",tooltiptext:c.insertImage.tooltip,action:function(){var a;return a=b.prompt(c.insertImage.dialogPrompt,"http://"),a&&""!==a&&"http://"!==a?this.$editor().wrapSelection("insertImage",a,!0):void 0},onElementSelect:{element:"img",action:e.imgOnSelectAction}}),a("insertVideo",{iconclass:"fa fa-youtube-play",tooltiptext:c.insertVideo.tooltip,action:function(){var a;if(a=b.prompt(c.insertVideo.dialogPrompt,"https://"),a&&""!==a&&"https://"!==a&&(videoId=e.extractYoutubeVideoId(a),videoId)){var d="https://www.youtube.com/embed/"+videoId,f='<img class="ta-insert-video" src="https://img.youtube.com/vi/'+videoId+'/hqdefault.jpg" ta-insert-video="'+d+'" contenteditable="false" allowfullscreen="true" frameborder="0" />';return this.$editor().wrapSelection("insertHTML",f,!0)}},onElementSelect:{element:"img",onlyWithAttrs:["ta-insert-video"],action:e.imgOnSelectAction}}),a("insertLink",{tooltiptext:c.insertLink.tooltip,iconclass:"fa fa-link",action:function(){var a;return a=b.prompt(c.insertLink.dialogPrompt,"http://"),a&&""!==a&&"http://"!==a?this.$editor().wrapSelection("createLink",a,!0):void 0},activeState:function(a){return a?"A"===a[0].tagName:!1},onElementSelect:{element:"a",action:e.aOnSelectAction}}),a("wordcount",{display:'<div id="toolbarWC" style="display:block; min-width:100px;">Words: <span ng-bind="wordcount"></span></div>',disabled:!0,wordcount:0,activeState:function(){var a=this.$editor().displayElements.text,b=a[0].innerHTML||"",c=0;return""!==b.replace(/\s*<[^>]*?>\s*/g,"")&&(c=b.replace(/<\/?(b|i|em|strong|span|u|strikethrough|a|img|small|sub|sup|label)( [^>*?])?>/gi,"").replace(/(<[^>]*?>\s*<[^>]*?>)/gi," ").replace(/(<[^>]*?>)/gi,"").replace(/\s+/gi," ").match(/\S+/g).length),this.wordcount=c,this.$editor().wordcount=c,!1}}),a("charcount",{display:'<div id="toolbarCC" style="display:block; min-width:120px;">Characters: <span ng-bind="charcount"></span></div>',disabled:!0,charcount:0,activeState:function(){var a=this.$editor().displayElements.text,b=a[0].innerText||a[0].textContent,c=b.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+/g," ").replace(/\s+$/g," ").length;return this.charcount=c,this.$editor().charcount=c,!1}})}]),/*
	@license textAngular
	Author : Austin Anderson
	License : 2013 MIT
	Version 1.4.6

	See README.md or https://github.com/fraywing/textAngular/wiki for requirements and use.
	*/
	"undefined"!=typeof module&&"undefined"!=typeof a&&module.exports===a&&(module.exports="textAngular"),function(){"use strict";var b={ie:function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b>4?b:a}(),webkit:/AppleWebKit\/([\d.]+)/i.test(navigator.userAgent)},c=!1;b.webkit&&(document.addEventListener("mousedown",function(a){var b=a||window.event,d=b.target;if(c&&null!==d){for(var e=!1,f=d;null!==f&&"html"!==f.tagName.toLowerCase()&&!e;)e="true"===f.contentEditable,f=f.parentNode;e||(document.getElementById("textAngular-editableFix-010203040506070809").setSelectionRange(0,0),d.focus(),d.select&&d.select())}c=!1},!1),angular.element(document).ready(function(){angular.element(document.body).append(angular.element('<input id="textAngular-editableFix-010203040506070809" class="ta-hidden-input" aria-hidden="true" unselectable="on" tabIndex="-1">'))}));var d=/^(address|article|aside|audio|blockquote|canvas|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video)$/i,f=/^(ul|li|ol)$/i,g=/^(address|article|aside|audio|blockquote|canvas|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video|li)$/i;String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var h,i,j,k,l,m;if(b.ie>8||void 0===b.ie){for(var n=document.styleSheets,o=0;o<n.length;o++)if((0===n[o].media.length||n[o].media.mediaText.match(/(all|screen)/gi))&&n[o].href&&n[o].href.match(/textangular\.(min\.|)css/gi)){h=n[o];break}h||(h=function(){var a=document.createElement("style");return b.webkit&&a.appendChild(document.createTextNode("")),document.getElementsByTagName("head")[0].appendChild(a),a.sheet}()),i=function(a,b){return k(h,a,b)},k=function(a,b,c){var d,e;return a.cssRules?d=Math.max(a.cssRules.length-1,0):a.rules&&(d=Math.max(a.rules.length-1,0)),a.insertRule?a.insertRule(b+"{"+c+"}",d):a.addRule(b,c,d),h.rules?e=h.rules[d]:h.cssRules&&(e=h.cssRules[d]),e},m=function(a,b){var c,d;for(c=0;c<b.length;c++)if(b[c].cssText===a.cssText){d=c;break}return d},j=function(a){l(h,a)},l=function(a,b){var c=a.cssRules||a.rules;if(c&&0!==c.length){var d=m(b,c);a.removeRule?a.removeRule(d):a.deleteRule(d)}}}angular.module("textAngular.factories",[]).factory("taBrowserTag",[function(){return function(a){return a?""===a?void 0===b.ie?"div":b.ie<=8?"P":"p":b.ie<=8?a.toUpperCase():a:b.ie<=8?"P":"p"}}]).factory("taApplyCustomRenderers",["taCustomRenderers","taDOM",function(a,b){return function(c){var d=angular.element("<div></div>");return d[0].innerHTML=c,angular.forEach(a,function(a){var c=[];a.selector&&""!==a.selector?c=d.find(a.selector):a.customAttribute&&""!==a.customAttribute&&(c=b.getByAttribute(d,a.customAttribute)),angular.forEach(c,function(b){b=angular.element(b),a.selector&&""!==a.selector&&a.customAttribute&&""!==a.customAttribute?void 0!==b.attr(a.customAttribute)&&a.renderLogic(b):a.renderLogic(b)})}),d[0].innerHTML}}]).factory("taFixChrome",function(){var a=function(a){if(!a||!angular.isString(a)||a.length<=0)return a;for(var b,c,d,e=/<([^>\/]+?)style=("([^"]+)"|'([^']+)')([^>]*)>/gi,f="",g=0;b=e.exec(a);)c=b[3]||b[4],c&&c.match(/line-height: 1.[0-9]{3,12};|color: inherit; line-height: 1.1;/i)&&(c=c.replace(/( |)font-family: inherit;|( |)line-height: 1.[0-9]{3,12};|( |)color: inherit;/gi,""),d="<"+b[1].trim(),c.trim().length>0&&(d+=" style="+b[2].substring(0,1)+c+b[2].substring(0,1)),d+=b[5].trim()+">",f+=a.substring(g,b.index)+d,g=b.index+b[0].length);return f+=a.substring(g),g>0?f.replace(/<span\s?>(.*?)<\/span>(<br(\/|)>|)/gi,"$1"):a};return a}).factory("taSanitize",["$sanitize",function(a){function b(a,b){for(var c,d=0,e=0,f=/<[^>]*>/gi;c=f.exec(a);)if(e=c.index,"/"===c[0].substr(1,1)){if(0===d)break;d--}else d++;return b+a.substring(0,e)+angular.element(b)[0].outerHTML.substring(b.length)+a.substring(e)}function c(a){if(!a||!angular.isString(a)||a.length<=0)return a;for(var d,f,g,h,i,k,l=/<([^>\/]+?)style=("([^"]+)"|'([^']+)')([^>]*)>/gi,m="",n="",o=0;f=l.exec(a);){h=f[3]||f[4];var p=new RegExp(j,"i");if(angular.isString(h)&&p.test(h)){i="";for(var q=new RegExp(j,"ig");g=q.exec(h);)for(d=0;d<e.length;d++)g[2*d+2]&&(i+="<"+e[d].tag+">");k=c(a.substring(o,f.index)),n+=m.length>0?b(k,m):k,h=h.replace(new RegExp(j,"ig"),""),n+="<"+f[1].trim(),h.length>0&&(n+=' style="'+h+'"'),n+=f[5]+">",o=f.index+f[0].length,m=i}}return n+=m.length>0?b(a.substring(o),m):a.substring(o)}function d(a){if(!a||!angular.isString(a)||a.length<=0)return a;for(var b,c=/<([^>\/]+?)align=("([^"]+)"|'([^']+)')([^>]*)>/gi,d="",e=0;b=c.exec(a);){d+=a.substring(e,b.index),e=b.index+b[0].length;var f="<"+b[1]+b[5];/style=("([^"]+)"|'([^']+)')/gi.test(f)?f=f.replace(/style=("([^"]+)"|'([^']+)')/i,'style="$2$3 text-align:'+(b[3]||b[4])+';"'):f+=' style="text-align:'+(b[3]||b[4])+';"',f+=">",d+=f}return d+a.substring(e)}for(var e=[{property:"font-weight",values:["bold"],tag:"b"},{property:"font-style",values:["italic"],tag:"i"}],f=[],g=0;g<e.length;g++){for(var h="("+e[g].property+":\\s*(",i=0;i<e[g].values.length;i++)i>0&&(h+="|"),h+=e[g].values[i];h+=");)",f.push(h)}var j="("+f.join("|")+")";return function(b,e,f){if(!f)try{b=c(b)}catch(g){}b=d(b);var h;try{h=a(b),f&&(h=b)}catch(g){h=e||""}var i,j=h.match(/(<pre[^>]*>.*?<\/pre[^>]*>)/gi),k=h.replace(/(&#(9|10);)*/gi,""),l=/<pre[^>]*>.*?<\/pre[^>]*>/gi,m=0,n=0;for(h="";null!==(i=l.exec(k))&&m<j.length;)h+=k.substring(n,i.index)+j[m],n=i.index+i[0].length,m++;return h+k.substring(n)}}]).factory("taToolExecuteAction",["$q","$log",function(a,b){return function(c){void 0!==c&&(this.$editor=function(){return c});var d,e=a.defer(),f=e.promise,g=this.$editor();try{d=this.action(e,g.startAction()),f["finally"](function(){g.endAction.call(g)})}catch(h){b.error(h)}(d||void 0===d)&&e.resolve()}}]),angular.module("textAngular.DOM",["textAngular.factories"]).factory("taExecCommand",["taSelection","taBrowserTag","$document",function(a,b,c){var e=function(b,c){var d,e,f=b.find("li");for(e=f.length-1;e>=0;e--)d=angular.element("<"+c+">"+f[e].innerHTML+"</"+c+">"),b.after(d);b.remove(),a.setSelectionToElementEnd(d[0])},g=function(b){/(<br(|\/)>)$/i.test(b.innerHTML.trim())?a.setSelectionBeforeElement(angular.element(b).find("br")[0]):a.setSelectionToElementEnd(b)},h=function(a,b){var c=angular.element("<"+b+">"+a[0].innerHTML+"</"+b+">");a.after(c),a.remove(),g(c.find("li")[0])},i=function(a,c,d){for(var e="",f=0;f<a.length;f++)e+="<"+b("li")+">"+a[f].innerHTML+"</"+b("li")+">";var h=angular.element("<"+d+">"+e+"</"+d+">");c.after(h),c.remove(),g(h.find("li")[0])};return function(g,j){return g=b(g),function(k,l,m,n){var o,p,q,r,s,t,u,v=angular.element("<"+g+">");try{u=a.getSelectionElement()}catch(w){}var x=angular.element(u);if(void 0!==u){var y=u.tagName.toLowerCase();if("insertorderedlist"===k.toLowerCase()||"insertunorderedlist"===k.toLowerCase()){var z=b("insertorderedlist"===k.toLowerCase()?"ol":"ul");if(y===z)return e(x,g);if("li"===y&&x.parent()[0].tagName.toLowerCase()===z&&1===x.parent().children().length)return e(x.parent(),g);if("li"===y&&x.parent()[0].tagName.toLowerCase()!==z&&1===x.parent().children().length)return h(x.parent(),z);if(y.match(d)&&!x.hasClass("ta-bind")){if("ol"===y||"ul"===y)return h(x,z);var A=!1;return angular.forEach(x.children(),function(a){a.tagName.match(d)&&(A=!0)}),A?i(x.children(),x,z):i([angular.element("<div>"+u.innerHTML+"</div>")[0]],x,z)}if(y.match(d)){if(r=a.getOnlySelectedElements(),0===r.length)p=angular.element("<"+z+"><li>"+u.innerHTML+"</li></"+z+">"),x.html(""),x.append(p);else{if(1===r.length&&("ol"===r[0].tagName.toLowerCase()||"ul"===r[0].tagName.toLowerCase()))return r[0].tagName.toLowerCase()===z?e(angular.element(r[0]),g):h(angular.element(r[0]),z);q="";var B=[];for(o=0;o<r.length;o++)if(3!==r[o].nodeType){var C=angular.element(r[o]);if("li"===r[o].tagName.toLowerCase())continue;q+="ol"===r[o].tagName.toLowerCase()||"ul"===r[o].tagName.toLowerCase()?C[0].innerHTML:"span"!==r[o].tagName.toLowerCase()||"ol"!==r[o].childNodes[0].tagName.toLowerCase()&&"ul"!==r[o].childNodes[0].tagName.toLowerCase()?"<"+b("li")+">"+C[0].innerHTML+"</"+b("li")+">":C[0].childNodes[0].innerHTML,B.unshift(C)}p=angular.element("<"+z+">"+q+"</"+z+">"),B.pop().replaceWith(p),angular.forEach(B,function(a){a.remove()})}return void a.setSelectionToElementEnd(p[0])}}else{if("formatblock"===k.toLowerCase()){for(t=m.toLowerCase().replace(/[<>]/gi,""),"default"===t.trim()&&(t=g,m="<"+g+">"),p="li"===y?x.parent():x;!p[0].tagName||!p[0].tagName.match(d)&&!p.parent().attr("contenteditable");)p=p.parent(),y=(p[0].tagName||"").toLowerCase();if(y===t){r=p.children();var D=!1;for(o=0;o<r.length;o++)D=D||r[o].tagName.match(d);D?(p.after(r),s=p.next(),p.remove(),p=s):(v.append(p[0].childNodes),p.after(v),p.remove(),p=v)}else if(p.parent()[0].tagName.toLowerCase()!==t||p.parent().hasClass("ta-bind"))if(y.match(f))p.wrap(m);else{for(r=a.getOnlySelectedElements(),0===r.length&&(r=[p[0]]),o=0;o<r.length;o++)if(3===r[o].nodeType||!r[o].tagName.match(d))for(;3===r[o].nodeType||!r[o].tagName||!r[o].tagName.match(d);)r[o]=r[o].parentNode;if(angular.element(r[0]).hasClass("ta-bind"))p=angular.element(m),p[0].innerHTML=r[0].innerHTML,r[0].innerHTML=p[0].outerHTML;else if("blockquote"===t){for(q="",o=0;o<r.length;o++)q+=r[o].outerHTML;for(p=angular.element(m),p[0].innerHTML=q,r[0].parentNode.insertBefore(p[0],r[0]),o=r.length-1;o>=0;o--)r[o].parentNode&&r[o].parentNode.removeChild(r[o])}else for(o=0;o<r.length;o++)p=angular.element(m),p[0].innerHTML=r[o].innerHTML,r[o].parentNode.insertBefore(p[0],r[o]),r[o].parentNode.removeChild(r[o])}else{var E=p.parent(),F=E.contents();for(o=0;o<F.length;o++)E.parent().hasClass("ta-bind")&&3===F[o].nodeType&&(v=angular.element("<"+g+">"),v[0].innerHTML=F[o].outerHTML,F[o]=v[0]),E.parent()[0].insertBefore(F[o],E[0]);E.remove()}return void a.setSelectionToElementEnd(p[0])}if("createlink"===k.toLowerCase()){var G='<a href="'+m+'" target="'+(n.a.target?n.a.target:"")+'">',H="</a>",I=a.getSelection();if(I.collapsed)a.insertHtml(G+m+H,j);else if(rangy.getSelection().getRangeAt(0).canSurroundContents()){var J=angular.element(G+H)[0];rangy.getSelection().getRangeAt(0).surroundContents(J)}return}if("inserthtml"===k.toLowerCase())return void a.insertHtml(m,j)}}try{c[0].execCommand(k,l,m)}catch(w){}}}}]).service("taSelection",["$window","$document","taDOM",function(a,b,c){var e=b[0],f=a.rangy,h=function(a,b){return a.tagName&&a.tagName.match(/^br$/i)&&0===b&&!a.previousSibling?{element:a.parentNode,offset:0}:{element:a,offset:b}},i={getSelection:function(){var a=f.getSelection().getRangeAt(0),b=a.commonAncestorContainer,c={start:h(a.startContainer,a.startOffset),end:h(a.endContainer,a.endOffset),collapsed:a.collapsed};return b=3===b.nodeType?b.parentNode:b,b.parentNode===c.start.element||b.parentNode===c.end.element?c.container=b.parentNode:c.container=b,c},getOnlySelectedElements:function(){var a=f.getSelection().getRangeAt(0),b=a.commonAncestorContainer;return b=3===b.nodeType?b.parentNode:b,a.getNodes([1],function(a){return a.parentNode===b})},getSelectionElement:function(){return i.getSelection().container},setSelection:function(a,b,c){var d=f.createRange();d.setStart(a,b),d.setEnd(a,c),f.getSelection().setSingleRange(d)},setSelectionBeforeElement:function(a){var b=f.createRange();b.selectNode(a),b.collapse(!0),f.getSelection().setSingleRange(b)},setSelectionAfterElement:function(a){var b=f.createRange();b.selectNode(a),b.collapse(!1),f.getSelection().setSingleRange(b)},setSelectionToElementStart:function(a){var b=f.createRange();b.selectNodeContents(a),b.collapse(!0),f.getSelection().setSingleRange(b)},setSelectionToElementEnd:function(a){var b=f.createRange();b.selectNodeContents(a),b.collapse(!1),a.childNodes&&a.childNodes[a.childNodes.length-1]&&"br"===a.childNodes[a.childNodes.length-1].nodeName&&(b.startOffset=b.endOffset=b.startOffset-1),f.getSelection().setSingleRange(b)},insertHtml:function(a,b){var h,j,k,l,m,n,o,p=angular.element("<div>"+a+"</div>"),q=f.getSelection().getRangeAt(0),r=e.createDocumentFragment(),s=p[0].childNodes,t=!0;if(s.length>0){for(l=[],k=0;k<s.length;k++)"p"===s[k].nodeName.toLowerCase()&&""===s[k].innerHTML.trim()||3===s[k].nodeType&&""===s[k].nodeValue.trim()||(t=t&&!d.test(s[k].nodeName),l.push(s[k]));for(var u=0;u<l.length;u++)n=r.appendChild(l[u]);!t&&q.collapsed&&/^(|<br(|\/)>)$/i.test(q.startContainer.innerHTML)&&q.selectNode(q.startContainer)}else t=!0,n=r=e.createTextNode(a);if(t)q.deleteContents();else if(q.collapsed&&q.startContainer!==b)if(q.startContainer.innerHTML&&q.startContainer.innerHTML.match(/^<[^>]*>$/i))h=q.startContainer,1===q.startOffset?(q.setStartAfter(h),q.setEndAfter(h)):(q.setStartBefore(h),q.setEndBefore(h));else{if(3===q.startContainer.nodeType&&q.startContainer.parentNode!==b)for(h=q.startContainer.parentNode,j=h.cloneNode(),c.splitNodes(h.childNodes,h,j,q.startContainer,q.startOffset);!g.test(h.nodeName);){angular.element(h).after(j),h=h.parentNode;var v=j;j=h.cloneNode(),c.splitNodes(h.childNodes,h,j,v)}else h=q.startContainer,j=h.cloneNode(),c.splitNodes(h.childNodes,h,j,void 0,void 0,q.startOffset);if(angular.element(h).after(j),q.setStartAfter(h),q.setEndAfter(h),/^(|<br(|\/)>)$/i.test(h.innerHTML.trim())&&(q.setStartBefore(h),q.setEndBefore(h),angular.element(h).remove()),/^(|<br(|\/)>)$/i.test(j.innerHTML.trim())&&angular.element(j).remove(),"li"===h.nodeName.toLowerCase()){for(o=e.createDocumentFragment(),m=0;m<r.childNodes.length;m++)p=angular.element("<li>"),c.transferChildNodes(r.childNodes[m],p[0]),c.transferNodeAttributes(r.childNodes[m],p[0]),o.appendChild(p[0]);r=o,n&&(n=r.childNodes[r.childNodes.length-1],n=n.childNodes[n.childNodes.length-1])}}else q.deleteContents();q.insertNode(r),n&&i.setSelectionToElementEnd(n)}};return i}]).service("taDOM",function(){var a={getByAttribute:function(b,c){var d=[],e=b.children();return e.length&&angular.forEach(e,function(b){d=d.concat(a.getByAttribute(angular.element(b),c))}),void 0!==b.attr(c)&&d.push(b),d},transferChildNodes:function(a,b){for(b.innerHTML="";a.childNodes.length>0;)b.appendChild(a.childNodes[0]);return b},splitNodes:function(b,c,d,e,f,g){if(!e&&isNaN(g))throw new Error("taDOM.splitNodes requires a splitNode or splitIndex");for(var h=document.createDocumentFragment(),i=document.createDocumentFragment(),j=0;b.length>0&&(isNaN(g)||g!==j)&&b[0]!==e;)h.appendChild(b[0]),j++;for(!isNaN(f)&&f>=0&&b[0]&&(h.appendChild(document.createTextNode(b[0].nodeValue.substring(0,f))),b[0].nodeValue=b[0].nodeValue.substring(f));b.length>0;)i.appendChild(b[0]);a.transferChildNodes(h,c),a.transferChildNodes(i,d)},transferNodeAttributes:function(a,b){for(var c=0;c<a.attributes.length;c++)b.setAttribute(a.attributes[c].name,a.attributes[c].value);return b}};return a}),angular.module("textAngular.validators",[]).directive("taMaxText",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e=parseInt(a.$eval(c.taMaxText));if(isNaN(e))throw"Max text must be an integer";c.$observe("taMaxText",function(a){if(e=parseInt(a),isNaN(e))throw"Max text must be an integer";d.$dirty&&d.$validate()}),d.$validators.taMaxText=function(a){var b=angular.element("<div/>");return b.html(a),b.text().length<=e}}}}).directive("taMinText",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e=parseInt(a.$eval(c.taMinText));if(isNaN(e))throw"Min text must be an integer";c.$observe("taMinText",function(a){if(e=parseInt(a),isNaN(e))throw"Min text must be an integer";d.$dirty&&d.$validate()}),d.$validators.taMinText=function(a){var b=angular.element("<div/>");return b.html(a),!b.text().length||b.text().length>=e}}}}),angular.module("textAngular.taBind",["textAngular.factories","textAngular.DOM"]).service("_taBlankTest",[function(){var a=/<(a|abbr|acronym|bdi|bdo|big|cite|code|del|dfn|img|ins|kbd|label|map|mark|q|ruby|rp|rt|s|samp|time|tt|var)[^>]*(>|$)/i;return function(b){return function(c){if(!c)return!0;var d,e=/(^[^<]|>)[^<]/i.exec(c);return e?d=e.index:(c=c.toString().replace(/="[^"]*"/i,"").replace(/="[^"]*"/i,"").replace(/="[^"]*"/i,"").replace(/="[^"]*"/i,""),d=c.indexOf(">")),c=c.trim().substring(d,d+100),/^[^<>]+$/i.test(c)?!1:0===c.length||c===b||/^>(\s|&nbsp;)*<\/[^>]+>$/gi.test(c)?!0:/>\s*[^\s<]/i.test(c)||a.test(c)?!1:!0}}}]).directive("taButton",[function(){return{link:function(a,b,c){b.attr("unselectable","on"),b.on("mousedown",function(a,b){return b&&angular.extend(a,b),a.preventDefault(),!1})}}}]).directive("taBind",["taSanitize","$timeout","$window","$document","taFixChrome","taBrowserTag","taSelection","taSelectableElements","taApplyCustomRenderers","taOptions","_taBlankTest","$parse","taDOM","textAngularManager",function(a,e,f,h,k,l,m,n,o,q,r,s,t,u){return{priority:2,require:["ngModel","?ngModelOptions"],link:function(l,v,w,x){function y(a){var b;return R.forEach(function(c){if(c.keyCode===a.keyCode){var d=(a.metaKey?O:0)+(a.ctrlKey?N:0)+(a.shiftKey?Q:0)+(a.altKey?P:0);if(c.forbiddenModifiers&d)return;c.mustHaveModifiers.every(function(a){return d&a})&&(b=c.specialKey)}}),b}var z,A,B,C,D=x[0],E=x[1]||{},F=void 0!==v.attr("contenteditable")&&v.attr("contenteditable"),G=F||"textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase(),H=!1,I=!1,J=!1,K=w.taUnsafeSanitizer||q.disableSanitizer,L=/^(9|19|20|27|33|34|35|36|37|38|39|40|45|112|113|114|115|116|117|118|119|120|121|122|123|144|145)$/i,M=/^(8|13|32|46|59|61|107|109|173|186|187|188|189|190|191|192|219|220|221|222)$/i,N=1,O=2,P=4,Q=8,R=[{specialKey:"UndoKey",forbiddenModifiers:P+Q,mustHaveModifiers:[O+N],keyCode:90},{specialKey:"RedoKey",forbiddenModifiers:P,mustHaveModifiers:[O+N,Q],keyCode:90},{specialKey:"RedoKey",forbiddenModifiers:P+Q,mustHaveModifiers:[O+N],keyCode:89},{specialKey:"TabKey",forbiddenModifiers:O+Q+P+N,mustHaveModifiers:[],keyCode:9},{specialKey:"ShiftTabKey",forbiddenModifiers:O+P+N,mustHaveModifiers:[Q],keyCode:9}];void 0===w.taDefaultWrap&&(w.taDefaultWrap="p"),""===w.taDefaultWrap?(B="",C=void 0===b.ie?"<div><br></div>":b.ie>=11?"<p><br></p>":b.ie<=8?"<P>&nbsp;</P>":"<p>&nbsp;</p>"):(B=void 0===b.ie||b.ie>=11?"<"+w.taDefaultWrap+"><br></"+w.taDefaultWrap+">":b.ie<=8?"<"+w.taDefaultWrap.toUpperCase()+"></"+w.taDefaultWrap.toUpperCase()+">":"<"+w.taDefaultWrap+"></"+w.taDefaultWrap+">",C=void 0===b.ie||b.ie>=11?"<"+w.taDefaultWrap+"><br></"+w.taDefaultWrap+">":b.ie<=8?"<"+w.taDefaultWrap.toUpperCase()+">&nbsp;</"+w.taDefaultWrap.toUpperCase()+">":"<"+w.taDefaultWrap+">&nbsp;</"+w.taDefaultWrap+">"),E.$options||(E.$options={});var S=r(C),T=function(a){if(S(a))return a;var b=angular.element("<div>"+a+"</div>");if(0===b.children().length)a="<"+w.taDefaultWrap+">"+a+"</"+w.taDefaultWrap+">";else{var c,e=b[0].childNodes,f=!1;for(c=0;c<e.length&&!(f=e[c].nodeName.toLowerCase().match(d));c++);if(f)for(a="",c=0;c<e.length;c++){var g=e[c],h=g.nodeName.toLowerCase();if("#comment"===h)a+="<!--"+g.nodeValue+"-->";else if("#text"===h){var i=g.textContent;a+=i.trim()?"<"+w.taDefaultWrap+">"+i+"</"+w.taDefaultWrap+">":i}else if(h.match(d))a+=g.outerHTML;else{var j=g.outerHTML||g.nodeValue;a+=""!==j.trim()?"<"+w.taDefaultWrap+">"+j+"</"+w.taDefaultWrap+">":j}}else a="<"+w.taDefaultWrap+">"+a+"</"+w.taDefaultWrap+">"}return a};w.taPaste&&(A=s(w.taPaste)),v.addClass("ta-bind");var U;l["$undoManager"+(w.id||"")]=D.$undoManager={_stack:[],_index:0,_max:1e3,push:function(a){return"undefined"==typeof a||null===a||"undefined"!=typeof this.current()&&null!==this.current()&&a===this.current()?a:(this._index<this._stack.length-1&&(this._stack=this._stack.slice(0,this._index+1)),this._stack.push(a),U&&e.cancel(U),this._stack.length>this._max&&this._stack.shift(),this._index=this._stack.length-1,a)},undo:function(){return this.setToIndex(this._index-1)},redo:function(){return this.setToIndex(this._index+1)},setToIndex:function(a){return 0>a||a>this._stack.length-1?void 0:(this._index=a,this.current())},current:function(){return this._stack[this._index]}};var V,W=l["$undoTaBind"+(w.id||"")]=function(){if(!H&&F){var a=D.$undoManager.undo();"undefined"!=typeof a&&null!==a&&(ka(a),Z(a,!1),V&&e.cancel(V),V=e(function(){v[0].focus(),m.setSelectionToElementEnd(v[0])},1))}},X=l["$redoTaBind"+(w.id||"")]=function(){if(!H&&F){var a=D.$undoManager.redo();"undefined"!=typeof a&&null!==a&&(ka(a),Z(a,!1),V&&e.cancel(V),V=e(function(){v[0].focus(),m.setSelectionToElementEnd(v[0])},1))}},Y=function(){if(F)return v[0].innerHTML;if(G)return v.val();throw"textAngular Error: attempting to update non-editable taBind"},Z=function(a,b,c){J=c||!1,("undefined"==typeof b||null===b)&&(b=!0&&F),("undefined"==typeof a||null===a)&&(a=Y()),S(a)?(""!==D.$viewValue&&D.$setViewValue(""),b&&""!==D.$undoManager.current()&&D.$undoManager.push("")):(ja(),D.$viewValue!==a&&(D.$setViewValue(a),b&&D.$undoManager.push(a))),D.$render()};l["updateTaBind"+(w.id||"")]=function(){H||Z(void 0,void 0,!0)};var $=function(b){return D.$oldViewValue=a(k(b),D.$oldViewValue,K)};if(v.attr("required")&&(D.$validators.required=function(a,b){return!S(a||b)}),D.$parsers.push($),D.$parsers.unshift(T),D.$formatters.push($),D.$formatters.unshift(T),D.$formatters.unshift(function(a){return D.$undoManager.push(a||"")}),G)if(l.events={},F){var _=!1,aa=function(b){if(b&&b.trim().length){if(b.match(/class=["']*Mso(Normal|List)/i)){var c=b.match(/<!--StartFragment-->([\s\S]*?)<!--EndFragment-->/i);c=c?c[1]:b,c=c.replace(/<o:p>[\s\S]*?<\/o:p>/gi,"").replace(/class=(["']|)MsoNormal(["']|)/gi,"");var d=angular.element("<div>"+c+"</div>"),f=angular.element("<div></div>"),g={element:null,lastIndent:[],lastLi:null,isUl:!1};g.lastIndent.peek=function(){var a=this.length;return a>0?this[a-1]:void 0};for(var h=function(a){g.isUl=a,g.element=angular.element(a?"<ul>":"<ol>"),g.lastIndent=[],g.lastIndent.peek=function(){var a=this.length;return a>0?this[a-1]:void 0},g.lastLevelMatch=null},i=0;i<=d[0].childNodes.length;i++)if(d[0].childNodes[i]&&"#text"!==d[0].childNodes[i].nodeName&&"p"===d[0].childNodes[i].tagName.toLowerCase()){var j=angular.element(d[0].childNodes[i]),k=(j.attr("class")||"").match(/MsoList(Bullet|Number|Paragraph)(CxSp(First|Middle|Last)|)/i);if(k){if(j[0].childNodes.length<2||j[0].childNodes[1].childNodes.length<1)continue;var n="bullet"===k[1].toLowerCase()||"number"!==k[1].toLowerCase()&&!(/^[^0-9a-z<]*[0-9a-z]+[^0-9a-z<>]</i.test(j[0].childNodes[1].innerHTML)||/^[^0-9a-z<]*[0-9a-z]+[^0-9a-z<>]</i.test(j[0].childNodes[1].childNodes[0].innerHTML)),o=(j.attr("style")||"").match(/margin-left:([\-\.0-9]*)/i),p=parseFloat(o?o[1]:0),q=(j.attr("style")||"").match(/mso-list:l([0-9]+) level([0-9]+) lfo[0-9+]($|;)/i);if(q&&q[2]&&(p=parseInt(q[2])),q&&(!g.lastLevelMatch||q[1]!==g.lastLevelMatch[1])||!k[3]||"first"===k[3].toLowerCase()||null===g.lastIndent.peek()||g.isUl!==n&&g.lastIndent.peek()===p)h(n),f.append(g.element);else if(null!=g.lastIndent.peek()&&g.lastIndent.peek()<p)g.element=angular.element(n?"<ul>":"<ol>"),g.lastLi.append(g.element);else if(null!=g.lastIndent.peek()&&g.lastIndent.peek()>p){for(;null!=g.lastIndent.peek()&&g.lastIndent.peek()>p;)if("li"!==g.element.parent()[0].tagName.toLowerCase()){if(!/[uo]l/i.test(g.element.parent()[0].tagName.toLowerCase()))break;g.element=g.element.parent(),g.lastIndent.pop()}else g.element=g.element.parent();g.isUl="ul"===g.element[0].tagName.toLowerCase(),n!==g.isUl&&(h(n),f.append(g.element))}g.lastLevelMatch=q,p!==g.lastIndent.peek()&&g.lastIndent.push(p),g.lastLi=angular.element("<li>"),g.element.append(g.lastLi),g.lastLi.html(j.html().replace(/<!(--|)\[if !supportLists\](--|)>[\s\S]*?<!(--|)\[endif\](--|)>/gi,"")),j.remove()}else h(!1),f.append(j)}var r=function(a){a=angular.element(a);for(var b=a[0].childNodes.length-1;b>=0;b--)a.after(a[0].childNodes[b]);a.remove()};angular.forEach(f.find("span"),function(a){a.removeAttribute("lang"),a.attributes.length<=0&&r(a)}),angular.forEach(f.find("font"),r),b=f.html()}else{if(b=b.replace(/<(|\/)meta[^>]*?>/gi,""),b.match(/<[^>]*?(ta-bind)[^>]*?>/)){if(b.match(/<[^>]*?(text-angular)[^>]*?>/)){var s=angular.element("<div>"+b+"</div>");s.find("textarea").remove();for(var u=t.getByAttribute(s,"ta-bind"),w=0;w<u.length;w++){for(var x=u[w][0].parentNode.parentNode,y=0;y<u[w][0].childNodes.length;y++)x.parentNode.insertBefore(u[w][0].childNodes[y],x);x.parentNode.removeChild(x)}b=s.html().replace('<br class="Apple-interchange-newline">',"")}}else b.match(/^<span/)&&(b.match(/<span class=(\"Apple-converted-space\"|\'Apple-converted-space\')>.<\/span>/gi)||(b=b.replace(/<(|\/)span[^>]*?>/gi,"")));b=b.replace(/<br class="Apple-interchange-newline"[^>]*?>/gi,"").replace(/<span class="Apple-converted-space">( |&nbsp;)<\/span>/gi,"&nbsp;")}/<li(\s.*)?>/i.test(b)&&/(<ul(\s.*)?>|<ol(\s.*)?>).*<li(\s.*)?>/i.test(b)===!1&&(b=b.replace(/<li(\s.*)?>.*<\/li(\s.*)?>/i,"<ul>$&</ul>")),b=b.replace(/^[ |\u00A0]+/gm,function(a){for(var b="",c=0;c<a.length;c++)b+="&nbsp;";return b}).replace(/\n|\r\n|\r/g,"<br />").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),A&&(b=A(l,{$html:b})||b),b=a(b,"",K),m.insertHtml(b,v[0]),e(function(){D.$setViewValue(Y()),_=!1,v.removeClass("processing-paste")},0)}else _=!1,v.removeClass("processing-paste")};v.on("paste",l.events.paste=function(a,b){if(b&&angular.extend(a,b),H||_)return a.stopPropagation(),a.preventDefault(),!1;_=!0,v.addClass("processing-paste");var c,d=(a.originalEvent||a).clipboardData;if(d&&d.getData&&d.types.length>0){for(var g="",i=0;i<d.types.length;i++)g+=" "+d.types[i];return/text\/html/i.test(g)?c=d.getData("text/html"):/text\/plain/i.test(g)&&(c=d.getData("text/plain")),aa(c),a.stopPropagation(),a.preventDefault(),!1}var j=f.rangy.saveSelection(),k=angular.element('<div class="ta-hidden-input" contenteditable="true"></div>');h.find("body").append(k),k[0].focus(),e(function(){f.rangy.restoreSelection(j),aa(k[0].innerHTML),v[0].focus(),k.remove()},0)}),v.on("cut",l.events.cut=function(a){H?a.preventDefault():e(function(){D.$setViewValue(Y())},0)}),v.on("keydown",l.events.keydown=function(a,b){b&&angular.extend(a,b),a.specialKey=y(a);var c;if(q.keyMappings.forEach(function(b){a.specialKey===b.commandKeyCode&&(a.specialKey=void 0),b.testForKey(a)&&(c=b.commandKeyCode),("UndoKey"===b.commandKeyCode||"RedoKey"===b.commandKeyCode)&&(b.enablePropagation||a.preventDefault())}),"undefined"!=typeof c&&(a.specialKey=c),"undefined"==typeof a.specialKey||"UndoKey"===a.specialKey&&"RedoKey"===a.specialKey||(a.preventDefault(),u.sendKeyCommand(l,a)),!H&&("UndoKey"===a.specialKey&&(W(),a.preventDefault()),"RedoKey"===a.specialKey&&(X(),a.preventDefault()),13===a.keyCode&&!a.shiftKey)){var d,e=m.getSelectionElement();if(!e.tagName.match(g))return;var f=angular.element(B);if(/^<br(|\/)>$/i.test(e.innerHTML.trim())&&"blockquote"===e.parentNode.tagName.toLowerCase()&&!e.nextSibling){d=angular.element(e);var h=d.parent();h.after(f),d.remove(),0===h.children().length&&h.remove(),m.setSelectionToElementStart(f[0]),a.preventDefault()}else/^<[^>]+><br(|\/)><\/[^>]+>$/i.test(e.innerHTML.trim())&&"blockquote"===e.tagName.toLowerCase()&&(d=angular.element(e),d.after(f),d.remove(),m.setSelectionToElementStart(f[0]),a.preventDefault())}});var ba;if(v.on("keyup",l.events.keyup=function(a,b){if(b&&angular.extend(a,b),9===a.keyCode){var c=m.getSelection();return void(c.start.element===v[0]&&v.children().length&&m.setSelectionToElementStart(v.children()[0]))}if(U&&e.cancel(U),!H&&!L.test(a.keyCode)){if(""!==B&&13===a.keyCode&&!a.shiftKey){for(var d=m.getSelectionElement();!d.tagName.match(g)&&d!==v[0];)d=d.parentNode;if(d.tagName.toLowerCase()!==w.taDefaultWrap&&"li"!==d.tagName.toLowerCase()&&(""===d.innerHTML.trim()||"<br>"===d.innerHTML.trim())){var f=angular.element(B);angular.element(d).replaceWith(f),m.setSelectionToElementStart(f[0])}}var h=Y();""!==B&&""===h.trim()?(ka(B),m.setSelectionToElementStart(v.children()[0])):"<"!==h.substring(0,1)&&""!==w.taDefaultWrap;var i=z!==a.keyCode&&M.test(a.keyCode);ba&&e.cancel(ba),ba=e(function(){Z(h,i,!0)},E.$options.debounce||400),i||(U=e(function(){D.$undoManager.push(h)},250)),z=a.keyCode}}),v.on("blur",l.events.blur=function(){I=!1,H?(J=!0,D.$render()):Z(void 0,void 0,!0)}),w.placeholder&&(b.ie>8||void 0===b.ie)){var ca;if(!w.id)throw"textAngular Error: An unique ID is required for placeholders to work";ca=i("#"+w.id+".placeholder-text:before",'content: "'+w.placeholder+'"'),l.$on("$destroy",function(){j(ca)})}v.on("focus",l.events.focus=function(){I=!0,v.removeClass("placeholder-text"),ja()}),v.on("mouseup",l.events.mouseup=function(){var a=m.getSelection();a.start.element===v[0]&&v.children().length&&m.setSelectionToElementStart(v.children()[0])}),v.on("mousedown",l.events.mousedown=function(a,b){b&&angular.extend(a,b),a.stopPropagation()})}else{v.on("change blur",l.events.change=l.events.blur=function(){H||D.$setViewValue(Y())}),v.on("keydown",l.events.keydown=function(a,b){if(b&&angular.extend(a,b),9===a.keyCode){var c=this.selectionStart,d=this.selectionEnd,e=v.val();if(a.shiftKey){var f=e.lastIndexOf("\n",c),g=e.lastIndexOf("	",c);-1!==g&&g>=f&&(v.val(e.substring(0,g)+e.substring(g+1)),this.selectionStart=this.selectionEnd=c-1)}else v.val(e.substring(0,c)+"	"+e.substring(d)),this.selectionStart=this.selectionEnd=c+1;a.preventDefault()}});var da=function(a,b){for(var c="",d=0;b>d;d++)c+=a;return c},ea=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,d,a[d])},fa=function(a,b){var c="",d=a.childNodes;return b++,c+=da("	",b-1)+a.outerHTML.substring(0,4),ea(d,function(a,d){var e=d.nodeName.toLowerCase();return"#comment"===e?void(c+="<!--"+d.nodeValue+"-->"):"#text"===e?void(c+=d.textContent):void(d.outerHTML&&(c+="ul"===e||"ol"===e?"\n"+fa(d,b):"\n"+da("	",b)+d.outerHTML))}),c+="\n"+da("	",b-1)+a.outerHTML.substring(a.outerHTML.lastIndexOf("<"))};D.$formatters.unshift(function(a){var b=angular.element("<div>"+a+"</div>")[0].childNodes;return b.length>0&&(a="",ea(b,function(b,c){var d=c.nodeName.toLowerCase();return"#comment"===d?void(a+="<!--"+c.nodeValue+"-->"):"#text"===d?void(a+=c.textContent):void(c.outerHTML&&(a.length>0&&(a+="\n"),a+="ul"===d||"ol"===d?""+fa(c,0):""+c.outerHTML))})),a})}var ga,ha=function(a){return l.$emit("ta-element-select",this),a.preventDefault(),!1},ia=function(a,b){if(b&&angular.extend(a,b),!p&&!H){p=!0;var c;c=a.originalEvent?a.originalEvent.dataTransfer:a.dataTransfer,l.$emit("ta-drop-event",this,a,c),e(function(){p=!1,Z(void 0,void 0,!0)},100)}},ja=l["reApplyOnSelectorHandlers"+(w.id||"")]=function(){H||angular.forEach(n,function(a){v.find(a).off("click",ha).on("click",ha)})},ka=function(a){v[0].innerHTML=a},la=!1;D.$render=function(){if(!la){la=!0;var a=D.$viewValue||"";J||(F&&I&&(v.removeClass("placeholder-text"),ga&&e.cancel(ga),ga=e(function(){I||(v[0].focus(),m.setSelectionToElementEnd(v.children()[v.children().length-1])),ga=void 0},1)),F?(ka(w.placeholder?""===a?B:a:""===a?B:a),H?v.off("drop",ia):(ja(),v.on("drop",ia))):"textarea"!==v[0].tagName.toLowerCase()&&"input"!==v[0].tagName.toLowerCase()?ka(o(a)):v.val(a)),F&&w.placeholder&&(""===a?I?v.removeClass("placeholder-text"):v.addClass("placeholder-text"):v.removeClass("placeholder-text")),la=J=!1}},w.taReadonly&&(H=l.$eval(w.taReadonly),H?(v.addClass("ta-readonly"),("textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase())&&v.attr("disabled","disabled"),void 0!==v.attr("contenteditable")&&v.attr("contenteditable")&&v.removeAttr("contenteditable")):(v.removeClass("ta-readonly"),"textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase()?v.removeAttr("disabled"):F&&v.attr("contenteditable","true")),l.$watch(w.taReadonly,function(a,b){b!==a&&(a?(v.addClass("ta-readonly"),("textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase())&&v.attr("disabled","disabled"),void 0!==v.attr("contenteditable")&&v.attr("contenteditable")&&v.removeAttr("contenteditable"),angular.forEach(n,function(a){
	v.find(a).on("click",ha)}),v.off("drop",ia)):(v.removeClass("ta-readonly"),"textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase()?v.removeAttr("disabled"):F&&v.attr("contenteditable","true"),angular.forEach(n,function(a){v.find(a).off("click",ha)}),v.on("drop",ia)),H=a)})),F&&!H&&(angular.forEach(n,function(a){v.find(a).on("click",ha)}),v.on("drop",ia),v.on("blur",function(){b.webkit&&(c=!0)}))}}}]);var p=!1,q=angular.module("textAngular",["ngSanitize","textAngularSetup","textAngular.factories","textAngular.DOM","textAngular.validators","textAngular.taBind"]);q.config([function(){angular.forEach(e,function(a,b){delete e[b]})}]),q.run([function(){if(true)!(__WEBPACK_AMD_DEFINE_RESULT__ = function(a){window.rangy=a("rangy"),window.rangy.saveSelection=a("rangy/lib/rangy-selectionsaverestore")}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("function"==typeof require&&"undefined"!=typeof module&&"object"==typeof a)window.rangy=require("rangy"),window.rangy.saveSelection=require("rangy/lib/rangy-selectionsaverestore");else{if(!window.rangy)throw"rangy-core.js and rangy-selectionsaverestore.js are required for textAngular to work correctly, rangy-core is not yet loaded.";if(window.rangy.init(),!window.rangy.saveSelection)throw"rangy-selectionsaverestore.js is required for textAngular to work correctly."}}]),q.directive("textAngular",["$compile","$timeout","taOptions","taSelection","taExecCommand","textAngularManager","$window","$document","$animate","$log","$q","$parse",function(a,b,c,d,e,f,g,h,i,j,k,l){return{require:"?ngModel",scope:{},restrict:"EA",priority:2,link:function(m,n,o,p){var q,r,s,t,u,v,w,x,y,z,A,B=o.serial?o.serial:Math.floor(1e16*Math.random());m._name=o.name?o.name:"textAngularEditor"+B;var C=function(a,c,d){b(function(){var b=function(){a.off(c,b),d.apply(this,arguments)};a.on(c,b)},100)};if(y=e(o.taDefaultWrap),angular.extend(m,angular.copy(c),{wrapSelection:function(a,b,c){"undo"===a.toLowerCase()?m["$undoTaBindtaTextElement"+B]():"redo"===a.toLowerCase()?m["$redoTaBindtaTextElement"+B]():(y(a,!1,b,m.defaultTagAttributes),c&&m["reApplyOnSelectorHandlerstaTextElement"+B](),m.displayElements.text[0].focus())},showHtml:m.$eval(o.taShowHtml)||!1}),o.taFocussedClass&&(m.classes.focussed=o.taFocussedClass),o.taTextEditorClass&&(m.classes.textEditor=o.taTextEditorClass),o.taHtmlEditorClass&&(m.classes.htmlEditor=o.taHtmlEditorClass),o.taDefaultTagAttributes)try{angular.extend(m.defaultTagAttributes,angular.fromJson(o.taDefaultTagAttributes))}catch(D){j.error(D)}o.taTextEditorSetup&&(m.setup.textEditorSetup=m.$parent.$eval(o.taTextEditorSetup)),o.taHtmlEditorSetup&&(m.setup.htmlEditorSetup=m.$parent.$eval(o.taHtmlEditorSetup)),o.taFileDrop?m.fileDropHandler=m.$parent.$eval(o.taFileDrop):m.fileDropHandler=m.defaultFileDropHandler,w=n[0].innerHTML,n[0].innerHTML="",m.displayElements={forminput:angular.element("<input type='hidden' tabindex='-1' style='display: none;'>"),html:angular.element("<textarea></textarea>"),text:angular.element("<div></div>"),scrollWindow:angular.element("<div class='ta-scroll-window'></div>"),popover:angular.element('<div class="popover fade bottom" style="max-width: none; width: 305px;"></div>'),popoverArrow:angular.element('<div class="arrow"></div>'),popoverContainer:angular.element('<div class="popover-content"></div>'),resize:{overlay:angular.element('<div class="ta-resizer-handle-overlay"></div>'),background:angular.element('<div class="ta-resizer-handle-background"></div>'),anchors:[angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-tl"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-tr"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-bl"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-br"></div>')],info:angular.element('<div class="ta-resizer-handle-info"></div>')}},m.displayElements.popover.append(m.displayElements.popoverArrow),m.displayElements.popover.append(m.displayElements.popoverContainer),m.displayElements.scrollWindow.append(m.displayElements.popover),m.displayElements.popover.on("mousedown",function(a,b){return b&&angular.extend(a,b),a.preventDefault(),!1}),m.showPopover=function(a){m.displayElements.popover.css("display","block"),m.reflowPopover(a),i.addClass(m.displayElements.popover,"in"),C(h.find("body"),"click keyup",function(){m.hidePopover()})},m.reflowPopover=function(a){m.displayElements.text[0].offsetHeight-51>a[0].offsetTop?(m.displayElements.popover.css("top",a[0].offsetTop+a[0].offsetHeight+m.displayElements.scrollWindow[0].scrollTop+"px"),m.displayElements.popover.removeClass("top").addClass("bottom")):(m.displayElements.popover.css("top",a[0].offsetTop-54+m.displayElements.scrollWindow[0].scrollTop+"px"),m.displayElements.popover.removeClass("bottom").addClass("top"));var b=m.displayElements.text[0].offsetWidth-m.displayElements.popover[0].offsetWidth,c=a[0].offsetLeft+a[0].offsetWidth/2-m.displayElements.popover[0].offsetWidth/2;m.displayElements.popover.css("left",Math.max(0,Math.min(b,c))+"px"),m.displayElements.popoverArrow.css("margin-left",Math.min(c,Math.max(0,c-b))-11+"px")},m.hidePopover=function(){m.displayElements.popover.css("display",""),m.displayElements.popoverContainer.attr("style",""),m.displayElements.popoverContainer.attr("class","popover-content"),m.displayElements.popover.removeClass("in")},m.displayElements.resize.overlay.append(m.displayElements.resize.background),angular.forEach(m.displayElements.resize.anchors,function(a){m.displayElements.resize.overlay.append(a)}),m.displayElements.resize.overlay.append(m.displayElements.resize.info),m.displayElements.scrollWindow.append(m.displayElements.resize.overlay),m.reflowResizeOverlay=function(a){a=angular.element(a)[0],m.displayElements.resize.overlay.css({display:"block",left:a.offsetLeft-5+"px",top:a.offsetTop-5+"px",width:a.offsetWidth+10+"px",height:a.offsetHeight+10+"px"}),m.displayElements.resize.info.text(a.offsetWidth+" x "+a.offsetHeight)},m.showResizeOverlay=function(a){var b=h.find("body");z=function(c){var d={width:parseInt(a.attr("width")),height:parseInt(a.attr("height")),x:c.clientX,y:c.clientY};(void 0===d.width||isNaN(d.width))&&(d.width=a[0].offsetWidth),(void 0===d.height||isNaN(d.height))&&(d.height=a[0].offsetHeight),m.hidePopover();var e=d.height/d.width,f=function(b){function c(a){return Math.round(Math.max(0,a))}var f={x:Math.max(0,d.width+(b.clientX-d.x)),y:Math.max(0,d.height+(b.clientY-d.y))},g=void 0!==o.taResizeForceAspectRatio,h=o.taResizeMaintainAspectRatio,i=g||h&&!b.shiftKey;if(i){var j=f.y/f.x;f.x=e>j?f.x:f.y/e,f.y=e>j?f.x*e:f.y}var k=angular.element(a);k.css("height",c(f.y)+"px"),k.css("width",c(f.x)+"px"),m.reflowResizeOverlay(a)};b.on("mousemove",f),C(b,"mouseup",function(c){c.preventDefault(),c.stopPropagation(),b.off("mousemove",f),m.showPopover(a)}),c.stopPropagation(),c.preventDefault()},m.displayElements.resize.anchors[3].off("mousedown"),m.displayElements.resize.anchors[3].on("mousedown",z),m.reflowResizeOverlay(a),C(b,"click",function(){m.hideResizeOverlay()})},m.hideResizeOverlay=function(){m.displayElements.resize.anchors[3].off("mousedown",z),m.displayElements.resize.overlay.css("display","")},m.setup.htmlEditorSetup(m.displayElements.html),m.setup.textEditorSetup(m.displayElements.text),m.displayElements.html.attr({id:"taHtmlElement"+B,"ng-show":"showHtml","ta-bind":"ta-bind","ng-model":"html","ng-model-options":n.attr("ng-model-options")}),m.displayElements.text.attr({id:"taTextElement"+B,contentEditable:"true","ta-bind":"ta-bind","ng-model":"html","ng-model-options":n.attr("ng-model-options")}),m.displayElements.scrollWindow.attr({"ng-hide":"showHtml"}),o.taDefaultWrap&&m.displayElements.text.attr("ta-default-wrap",o.taDefaultWrap),o.taUnsafeSanitizer&&(m.displayElements.text.attr("ta-unsafe-sanitizer",o.taUnsafeSanitizer),m.displayElements.html.attr("ta-unsafe-sanitizer",o.taUnsafeSanitizer)),m.displayElements.scrollWindow.append(m.displayElements.text),n.append(m.displayElements.scrollWindow),n.append(m.displayElements.html),m.displayElements.forminput.attr("name",m._name),n.append(m.displayElements.forminput),o.tabindex&&(n.removeAttr("tabindex"),m.displayElements.text.attr("tabindex",o.tabindex),m.displayElements.html.attr("tabindex",o.tabindex)),o.placeholder&&(m.displayElements.text.attr("placeholder",o.placeholder),m.displayElements.html.attr("placeholder",o.placeholder)),o.taDisabled&&(m.displayElements.text.attr("ta-readonly","disabled"),m.displayElements.html.attr("ta-readonly","disabled"),m.disabled=m.$parent.$eval(o.taDisabled),m.$parent.$watch(o.taDisabled,function(a){m.disabled=a,m.disabled?n.addClass(m.classes.disabled):n.removeClass(m.classes.disabled)})),o.taPaste&&(m._pasteHandler=function(a){return l(o.taPaste)(m.$parent,{$html:a})},m.displayElements.text.attr("ta-paste","_pasteHandler($html)")),a(m.displayElements.scrollWindow)(m),a(m.displayElements.html)(m),m.updateTaBindtaTextElement=m["updateTaBindtaTextElement"+B],m.updateTaBindtaHtmlElement=m["updateTaBindtaHtmlElement"+B],n.addClass("ta-root"),m.displayElements.scrollWindow.addClass("ta-text ta-editor "+m.classes.textEditor),m.displayElements.html.addClass("ta-html ta-editor "+m.classes.htmlEditor),m._actionRunning=!1;var E=!1;if(m.startAction=function(){return m._actionRunning=!0,E=g.rangy.saveSelection(),function(){E&&g.rangy.restoreSelection(E)}},m.endAction=function(){m._actionRunning=!1,E&&(m.showHtml?m.displayElements.html[0].focus():m.displayElements.text[0].focus(),g.rangy.removeMarkers(E)),E=!1,m.updateSelectedStyles(),m.showHtml||m["updateTaBindtaTextElement"+B]()},u=function(){m.focussed=!0,n.addClass(m.classes.focussed),x.focus(),n.triggerHandler("focus")},m.displayElements.html.on("focus",u),m.displayElements.text.on("focus",u),v=function(a){return m._actionRunning||h[0].activeElement===m.displayElements.html[0]||h[0].activeElement===m.displayElements.text[0]||(n.removeClass(m.classes.focussed),x.unfocus(),b(function(){m._bUpdateSelectedStyles=!1,n.triggerHandler("blur"),m.focussed=!1},0)),a.preventDefault(),!1},m.displayElements.html.on("blur",v),m.displayElements.text.on("blur",v),m.displayElements.text.on("paste",function(a){n.triggerHandler("paste",a)}),m.queryFormatBlockState=function(a){return!m.showHtml&&a.toLowerCase()===h[0].queryCommandValue("formatBlock").toLowerCase()},m.queryCommandState=function(a){return m.showHtml?"":h[0].queryCommandState(a)},m.switchView=function(){m.showHtml=!m.showHtml,i.enabled(!1,m.displayElements.html),i.enabled(!1,m.displayElements.text),m.showHtml?b(function(){return i.enabled(!0,m.displayElements.html),i.enabled(!0,m.displayElements.text),m.displayElements.html[0].focus()},100):b(function(){return i.enabled(!0,m.displayElements.html),i.enabled(!0,m.displayElements.text),m.displayElements.text[0].focus()},100)},o.ngModel){var F=!0;p.$render=function(){if(F){F=!1;var a=m.$parent.$eval(o.ngModel);void 0!==a&&null!==a||!w||""===w||p.$setViewValue(w)}m.displayElements.forminput.val(p.$viewValue),m.html=p.$viewValue||""},n.attr("required")&&(p.$validators.required=function(a,b){var c=a||b;return!(!c||""===c.trim())})}else m.displayElements.forminput.val(w),m.html=w;if(m.$watch("html",function(a,b){a!==b&&(o.ngModel&&p.$viewValue!==a&&p.$setViewValue(a),m.displayElements.forminput.val(a))}),o.taTargetToolbars)x=f.registerEditor(m._name,m,o.taTargetToolbars.split(","));else{var G=angular.element('<div text-angular-toolbar name="textAngularToolbar'+B+'">');o.taToolbar&&G.attr("ta-toolbar",o.taToolbar),o.taToolbarClass&&G.attr("ta-toolbar-class",o.taToolbarClass),o.taToolbarGroupClass&&G.attr("ta-toolbar-group-class",o.taToolbarGroupClass),o.taToolbarButtonClass&&G.attr("ta-toolbar-button-class",o.taToolbarButtonClass),o.taToolbarActiveButtonClass&&G.attr("ta-toolbar-active-button-class",o.taToolbarActiveButtonClass),o.taFocussedClass&&G.attr("ta-focussed-class",o.taFocussedClass),n.prepend(G),a(G)(m.$parent),x=f.registerEditor(m._name,m,["textAngularToolbar"+B])}m.$on("$destroy",function(){f.unregisterEditor(m._name),angular.element(window).off("blur")}),m.$on("ta-element-select",function(a,b){x.triggerElementSelect(a,b)&&m["reApplyOnSelectorHandlerstaTextElement"+B]()}),m.$on("ta-drop-event",function(a,c,d,e){m.displayElements.text[0].focus(),e&&e.files&&e.files.length>0?(angular.forEach(e.files,function(a){try{k.when(m.fileDropHandler(a,m.wrapSelection)||m.fileDropHandler!==m.defaultFileDropHandler&&k.when(m.defaultFileDropHandler(a,m.wrapSelection))).then(function(){m["updateTaBindtaTextElement"+B]()})}catch(b){j.error(b)}}),d.preventDefault(),d.stopPropagation()):b(function(){m["updateTaBindtaTextElement"+B]()},0)}),m._bUpdateSelectedStyles=!1,angular.element(window).on("blur",function(){m._bUpdateSelectedStyles=!1,m.focussed=!1}),m.updateSelectedStyles=function(){var a;A&&b.cancel(A),void 0!==(a=d.getSelectionElement())&&a.parentNode!==m.displayElements.text[0]?x.updateSelectedStyles(angular.element(a)):x.updateSelectedStyles(),m._bUpdateSelectedStyles&&(A=b(m.updateSelectedStyles,200))},q=function(){return m.focussed?void(m._bUpdateSelectedStyles||(m._bUpdateSelectedStyles=!0,m.$apply(function(){m.updateSelectedStyles()}))):void(m._bUpdateSelectedStyles=!1)},m.displayElements.html.on("keydown",q),m.displayElements.text.on("keydown",q),r=function(){m._bUpdateSelectedStyles=!1},m.displayElements.html.on("keyup",r),m.displayElements.text.on("keyup",r),s=function(a,b){b&&angular.extend(a,b),m.$apply(function(){return x.sendKeyCommand(a)?(m._bUpdateSelectedStyles||m.updateSelectedStyles(),a.preventDefault(),!1):void 0})},m.displayElements.html.on("keypress",s),m.displayElements.text.on("keypress",s),t=function(){m._bUpdateSelectedStyles=!1,m.$apply(function(){m.updateSelectedStyles()})},m.displayElements.html.on("mouseup",t),m.displayElements.text.on("mouseup",t)}}}]),q.service("textAngularManager",["taToolExecuteAction","taTools","taRegisterTool",function(a,b,c){var d={},e={};return{registerEditor:function(c,f,g){if(!c||""===c)throw"textAngular Error: An editor requires a name";if(!f)throw"textAngular Error: An editor requires a scope";if(e[c])throw'textAngular Error: An Editor with name "'+c+'" already exists';var h=[];return angular.forEach(g,function(a){d[a]&&h.push(d[a])}),e[c]={scope:f,toolbars:g,_registerToolbar:function(a){this.toolbars.indexOf(a.name)>=0&&h.push(a)},editorFunctions:{disable:function(){angular.forEach(h,function(a){a.disabled=!0})},enable:function(){angular.forEach(h,function(a){a.disabled=!1})},focus:function(){angular.forEach(h,function(a){a._parent=f,a.disabled=!1,a.focussed=!0,f.focussed=!0})},unfocus:function(){angular.forEach(h,function(a){a.disabled=!0,a.focussed=!1}),f.focussed=!1},updateSelectedStyles:function(a){angular.forEach(h,function(b){angular.forEach(b.tools,function(c){c.activeState&&(b._parent=f,c.active=c.activeState(a))})})},sendKeyCommand:function(c){var d=!1;return(c.ctrlKey||c.metaKey||c.specialKey)&&angular.forEach(b,function(b,e){if(b.commandKeyCode&&(b.commandKeyCode===c.which||b.commandKeyCode===c.specialKey))for(var g=0;g<h.length;g++)if(void 0!==h[g].tools[e]){a.call(h[g].tools[e],f),d=!0;break}}),d},triggerElementSelect:function(a,c){var d=function(a,b){for(var c=!0,d=0;d<b.length;d++)c=c&&a.attr(b[d]);return c},e=[],g={},i=!1;c=angular.element(c);var j=!1;if(angular.forEach(b,function(a,b){a.onElementSelect&&a.onElementSelect.element&&a.onElementSelect.element.toLowerCase()===c[0].tagName.toLowerCase()&&(!a.onElementSelect.filter||a.onElementSelect.filter(c))&&(j=j||angular.isArray(a.onElementSelect.onlyWithAttrs)&&d(c,a.onElementSelect.onlyWithAttrs),(!a.onElementSelect.onlyWithAttrs||d(c,a.onElementSelect.onlyWithAttrs))&&(g[b]=a))}),j?(angular.forEach(g,function(a,b){a.onElementSelect.onlyWithAttrs&&d(c,a.onElementSelect.onlyWithAttrs)&&e.push({name:b,tool:a})}),e.sort(function(a,b){return b.tool.onElementSelect.onlyWithAttrs.length-a.tool.onElementSelect.onlyWithAttrs.length})):angular.forEach(g,function(a,b){e.push({name:b,tool:a})}),e.length>0)for(var k=0;k<e.length;k++){for(var l=e[k].tool,m=e[k].name,n=0;n<h.length;n++)if(void 0!==h[n].tools[m]){l.onElementSelect.action.call(h[n].tools[m],a,c,f),i=!0;break}if(i)break}return i}}},e[c].editorFunctions},retrieveEditor:function(a){return e[a]},unregisterEditor:function(a){delete e[a]},registerToolbar:function(a){if(!a)throw"textAngular Error: A toolbar requires a scope";if(!a.name||""===a.name)throw"textAngular Error: A toolbar requires a name";if(d[a.name])throw'textAngular Error: A toolbar with name "'+a.name+'" already exists';d[a.name]=a,angular.forEach(e,function(b){b._registerToolbar(a)})},retrieveToolbar:function(a){return d[a]},retrieveToolbarsViaEditor:function(a){var b=[],c=this;return angular.forEach(this.retrieveEditor(a).toolbars,function(a){b.push(c.retrieveToolbar(a))}),b},unregisterToolbar:function(a){delete d[a]},updateToolsDisplay:function(a){var b=this;angular.forEach(a,function(a,c){b.updateToolDisplay(c,a)})},resetToolsDisplay:function(){var a=this;angular.forEach(b,function(b,c){a.resetToolDisplay(c)})},updateToolDisplay:function(a,b){var c=this;angular.forEach(d,function(d,e){c.updateToolbarToolDisplay(e,a,b)})},resetToolDisplay:function(a){var b=this;angular.forEach(d,function(c,d){b.resetToolbarToolDisplay(d,a)})},updateToolbarToolDisplay:function(a,b,c){if(!d[a])throw'textAngular Error: No Toolbar with name "'+a+'" exists';d[a].updateToolDisplay(b,c)},resetToolbarToolDisplay:function(a,c){if(!d[a])throw'textAngular Error: No Toolbar with name "'+a+'" exists';d[a].updateToolDisplay(c,b[c],!0)},removeTool:function(a){delete b[a],angular.forEach(d,function(b){delete b.tools[a];for(var c=0;c<b.toolbar.length;c++){for(var d,e=0;e<b.toolbar[c].length;e++){if(b.toolbar[c][e]===a){d={group:c,index:e};break}if(void 0!==d)break}void 0!==d&&(b.toolbar[d.group].slice(d.index,1),b._$element.children().eq(d.group).children().eq(d.index).remove())}})},addTool:function(a,b,e,f){c(a,b),angular.forEach(d,function(c){c.addTool(a,b,e,f)})},addToolToToolbar:function(a,b,e,f,g){c(a,b),d[e].addTool(a,b,f,g)},refreshEditor:function(a){if(!e[a])throw'textAngular Error: No Editor with name "'+a+'" exists';e[a].scope.updateTaBindtaTextElement(),e[a].scope.$$phase||e[a].scope.$digest()},sendKeyCommand:function(a,b){angular.forEach(e,function(c){return c.editorFunctions.sendKeyCommand(b)?(a._bUpdateSelectedStyles||a.updateSelectedStyles(),b.preventDefault(),!1):void 0})}}}]),q.directive("textAngularToolbar",["$compile","textAngularManager","taOptions","taTools","taToolExecuteAction","$window",function(a,b,c,d,e,f){return{scope:{name:"@"},restrict:"EA",link:function(g,h,i){if(!g.name||""===g.name)throw"textAngular Error: A toolbar requires a name";angular.extend(g,angular.copy(c)),i.taToolbar&&(g.toolbar=g.$parent.$eval(i.taToolbar)),i.taToolbarClass&&(g.classes.toolbar=i.taToolbarClass),i.taToolbarGroupClass&&(g.classes.toolbarGroup=i.taToolbarGroupClass),i.taToolbarButtonClass&&(g.classes.toolbarButton=i.taToolbarButtonClass),i.taToolbarActiveButtonClass&&(g.classes.toolbarButtonActive=i.taToolbarActiveButtonClass),i.taFocussedClass&&(g.classes.focussed=i.taFocussedClass),g.disabled=!0,g.focussed=!1,g._$element=h,h[0].innerHTML="",h.addClass("ta-toolbar "+g.classes.toolbar),g.$watch("focussed",function(){g.focussed?h.addClass(g.classes.focussed):h.removeClass(g.classes.focussed)});var j=function(b,c){var d;if(d=b&&b.display?angular.element(b.display):angular.element("<button type='button'>"),b&&b["class"]?d.addClass(b["class"]):d.addClass(g.classes.toolbarButton),d.attr("name",c.name),d.attr("ta-button","ta-button"),d.attr("ng-disabled","isDisabled()"),d.attr("tabindex","-1"),d.attr("ng-click","executeAction()"),d.attr("ng-class","displayActiveToolClass(active)"),b&&b.tooltiptext&&d.attr("title",b.tooltiptext),b&&!b.display&&!c._display&&(d[0].innerHTML="",b.buttontext&&(d[0].innerHTML=b.buttontext),b.iconclass)){var e=angular.element("<i>"),f=d[0].innerHTML;e.addClass(b.iconclass),d[0].innerHTML="",d.append(e),f&&""!==f&&d.append("&nbsp;"+f)}return c._lastToolDefinition=angular.copy(b),a(d)(c)};g.tools={},g._parent={disabled:!0,showHtml:!1,queryFormatBlockState:function(){return!1},queryCommandState:function(){return!1}};var k={$window:f,$editor:function(){return g._parent},isDisabled:function(){return"function"!=typeof this.$eval("disabled")&&this.$eval("disabled")||this.$eval("disabled()")||"html"!==this.name&&this.$editor().showHtml||this.$parent.disabled||this.$editor().disabled},displayActiveToolClass:function(a){return a?g.classes.toolbarButtonActive:""},executeAction:e};angular.forEach(g.toolbar,function(a){var b=angular.element("<div>");b.addClass(g.classes.toolbarGroup),angular.forEach(a,function(a){g.tools[a]=angular.extend(g.$new(!0),d[a],k,{name:a}),g.tools[a].$element=j(d[a],g.tools[a]),b.append(g.tools[a].$element)}),h.append(b)}),g.updateToolDisplay=function(a,b,c){var d=g.tools[a];if(d){if(d._lastToolDefinition&&!c&&(b=angular.extend({},d._lastToolDefinition,b)),null===b.buttontext&&null===b.iconclass&&null===b.display)throw'textAngular Error: Tool Definition for updating "'+a+'" does not have a valid display/iconclass/buttontext value';null===b.buttontext&&delete b.buttontext,null===b.iconclass&&delete b.iconclass,null===b.display&&delete b.display;var e=j(b,d);d.$element.replaceWith(e),d.$element=e}},g.addTool=function(a,b,c,e){g.tools[a]=angular.extend(g.$new(!0),d[a],k,{name:a}),g.tools[a].$element=j(d[a],g.tools[a]);var f;void 0===c&&(c=g.toolbar.length-1),f=angular.element(h.children()[c]),void 0===e?(f.append(g.tools[a].$element),g.toolbar[c][g.toolbar[c].length-1]=a):(f.children().eq(e).after(g.tools[a].$element),g.toolbar[c][e]=a)},b.registerToolbar(g),g.$on("$destroy",function(){b.unregisterToolbar(g.name)})}}}])}()}({},function(){return this}());

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(13);
	__webpack_require__(15);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./bootstrap-slider.min.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./bootstrap-slider.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*! =======================================================\r\n                      VERSION  5.1.1\r\n========================================================= */\r\n/*! =========================================================\r\n * bootstrap-slider.js\r\n *\r\n * Maintainers:\r\n *\t\tKyle Kemp\r\n *\t\t\t- Twitter: @seiyria\r\n *\t\t\t- Github:  seiyria\r\n *\t\tRohit Kalkur\r\n *\t\t\t- Twitter: @Rovolutionary\r\n *\t\t\t- Github:  rovolution\r\n *\r\n * =========================================================\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n * ========================================================= */.slider{display:inline-block;vertical-align:middle;position:relative}.slider.slider-horizontal{width:210px;height:20px}.slider.slider-horizontal .slider-track{height:10px;width:100%;margin-top:-5px;top:50%;left:0}.slider.slider-horizontal .slider-selection,.slider.slider-horizontal .slider-track-low,.slider.slider-horizontal .slider-track-high{height:100%;top:0;bottom:0}.slider.slider-horizontal .slider-tick,.slider.slider-horizontal .slider-handle{margin-left:-10px;margin-top:-5px}.slider.slider-horizontal .slider-tick.triangle,.slider.slider-horizontal .slider-handle.triangle{border-width:0 10px 10px 10px;width:0;height:0;border-bottom-color:#0480be;margin-top:0}.slider.slider-horizontal .slider-tick-label-container{white-space:nowrap;margin-top:20px}.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{padding-top:4px;display:inline-block;text-align:center}.slider.slider-vertical{height:210px;width:20px}.slider.slider-vertical .slider-track{width:10px;height:100%;margin-left:-5px;left:50%;top:0}.slider.slider-vertical .slider-selection{width:100%;left:0;top:0;bottom:0}.slider.slider-vertical .slider-track-low,.slider.slider-vertical .slider-track-high{width:100%;left:0;right:0}.slider.slider-vertical .slider-tick,.slider.slider-vertical .slider-handle{margin-left:-5px;margin-top:-10px}.slider.slider-vertical .slider-tick.triangle,.slider.slider-vertical .slider-handle.triangle{border-width:10px 0 10px 10px;width:1px;height:1px;border-left-color:#0480be;margin-left:0}.slider.slider-disabled .slider-handle{background-image:-webkit-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:-o-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:linear-gradient(to bottom,#dfdfdf 0,#bebebe 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdfdfdf',endColorstr='#ffbebebe',GradientType=0)}.slider.slider-disabled .slider-track{background-image:-webkit-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:-o-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:linear-gradient(to bottom,#e5e5e5 0,#e9e9e9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe5e5e5',endColorstr='#ffe9e9e9',GradientType=0);cursor:not-allowed}.slider input{display:none}.slider .tooltip.top{margin-top:-36px}.slider .tooltip-inner{white-space:nowrap}.slider .hide{display:none}.slider-track{position:absolute;cursor:pointer;background-image:-webkit-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:-o-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:linear-gradient(to bottom,#f5f5f5 0,#f9f9f9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);border-radius:4px}.slider-selection{position:absolute;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-selection.tick-slider-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0)}.slider-track-low,.slider-track-high{position:absolute;background:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-handle{position:absolute;width:20px;height:20px;background-color:#337ab7;background-image:-webkit-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:-o-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:linear-gradient(to bottom,#149bdf 0,#0480be 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf',endColorstr='#ff0480be',GradientType=0);filter:none;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);border:0 solid transparent}.slider-handle.round{border-radius:50%}.slider-handle.triangle{background:transparent none}.slider-handle.custom{background:transparent none}.slider-handle.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick{position:absolute;width:20px;height:20px;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;filter:none;opacity:.8;border:0 solid transparent}.slider-tick.round{border-radius:50%}.slider-tick.triangle{background:transparent none}.slider-tick.custom{background:transparent none}.slider-tick.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick.in-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0);opacity:1}", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! =======================================================
	                      VERSION  5.1.1
	========================================================= */
	/*! =========================================================
	 * bootstrap-slider.js
	 *
	 * Maintainers:
	 *		Kyle Kemp
	 *			- Twitter: @seiyria
	 *			- Github:  seiyria
	 *		Rohit Kalkur
	 *			- Twitter: @Rovolutionary
	 *			- Github:  rovolution
	 *
	 * =========================================================
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 * ========================================================= */
	!function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (b), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("object"==typeof module&&module.exports){var c;try{c=require("jquery")}catch(d){c=null}module.exports=b(c)}else a.Slider=b(a.jQuery)}(this,function(a){var b;return function(a){"use strict";function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l&&l!==k)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}var m=this.map(function(){var d=a.data(this,b);return d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d)),a(this)});return!m||m.length>1?m:m[0]}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;c(a)}(a),function(a){function c(b,c){function d(a,b){var c="data-slider-"+b.replace(/_/g,"-"),d=a.getAttribute(c);try{return JSON.parse(d)}catch(e){return d}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1},"string"==typeof b?this.element=document.querySelector(b):b instanceof HTMLElement&&(this.element=b),c=c?c:{};for(var f=Object.keys(this.defaultOptions),g=0;g<f.length;g++){var h=f[g],i=c[h];i="undefined"!=typeof i?i:d(this.element,h),i=null!==i?i:this.defaultOptions[h],this.options||(this.options={}),this.options[h]=i}"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.tooltip_position="right";var j,k,l,m,n,o=this.element.style.width,p=!1,q=this.element.parentNode;if(this.sliderElem)p=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var r=document.createElement("div");if(r.className="slider-track",k=document.createElement("div"),k.className="slider-track-low",j=document.createElement("div"),j.className="slider-selection",l=document.createElement("div"),l.className="slider-track-high",m=document.createElement("div"),m.className="slider-handle min-slider-handle",n=document.createElement("div"),n.className="slider-handle max-slider-handle",r.appendChild(k),r.appendChild(j),r.appendChild(l),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(g=0;g<this.options.ticks.length;g++){var s=document.createElement("div");s.className="slider-tick",this.ticks.push(s),r.appendChild(s)}j.className+=" tick-slider-selection"}if(r.appendChild(m),r.appendChild(n),this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",g=0;g<this.options.ticks_labels.length;g++){var t=document.createElement("div");t.className="slider-tick-label",t.innerHTML=this.options.ticks_labels[g],this.tickLabels.push(t),this.tickLabelContainer.appendChild(t)}var u=function(a){var b=document.createElement("div");b.className="tooltip-arrow";var c=document.createElement("div");c.className="tooltip-inner",a.appendChild(b),a.appendChild(c)},v=document.createElement("div");v.className="tooltip tooltip-main",u(v);var w=document.createElement("div");w.className="tooltip tooltip-min",u(w);var x=document.createElement("div");x.className="tooltip tooltip-max",u(x),this.sliderElem.appendChild(r),this.sliderElem.appendChild(v),this.sliderElem.appendChild(w),this.sliderElem.appendChild(x),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),q.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(a&&(this.$element=a(this.element),this.$sliderElem=a(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),e[this.options.scale]&&(this.options.scale=e[this.options.scale]),p===!0&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","top","width","height"].forEach(function(a){this._removeProperty(this.trackLow,a),this._removeProperty(this.trackSelection,a),this._removeProperty(this.trackHigh,a)},this),[this.handle1,this.handle2].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top"),this._removeProperty(a,"margin-left"),this._removeProperty(a,"margin-top"),this._removeClass(a,"right"),this._removeClass(a,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=o,this.options.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(this.options.max=Math.max.apply(Math,this.options.ticks),this.options.min=Math.min.apply(Math,this.options.ticks)),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this._state.value=this.options.range?[this.options.value,this.options.max]:this.options.value,this.trackLow=k||this.trackLow,this.trackSelection=j||this.trackSelection,this.trackHigh=l||this.trackHigh,"none"===this.options.selection&&(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")),this.handle1=m||this.handle1,this.handle2=n||this.handle2,p===!0)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),g=0;g<this.ticks.length;g++)this._removeClass(this.ticks[g],"round triangle hide");var y=["round","triangle","custom"],z=-1!==y.indexOf(this.options.handle);if(z)for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),g=0;g<this.ticks.length;g++)this._addClass(this.ticks[g],this.options.handle);this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchCapable&&this.sliderElem.addEventListener("touchstart",this.mousedown,!1),this.sliderElem.addEventListener("mousedown",this.mousedown,!1),"hide"===this.options.tooltip?(this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide")):"always"===this.options.tooltip?(this._showTooltip(),this._alwaysShowTooltip=!0):(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1),this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1)),this.options.enabled?this.enable():this.disable()}var d={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},e={linear:{toValue:function(a){var b=a/100*(this.options.max-this.options.min);if(this.options.ticks_positions.length>0){for(var c,d,e,f=0,g=0;g<this.options.ticks_positions.length;g++)if(a<=this.options.ticks_positions[g]){c=g>0?this.options.ticks[g-1]:0,e=g>0?this.options.ticks_positions[g-1]:0,d=this.options.ticks[g],f=this.options.ticks_positions[g];break}if(g>0){var h=(a-e)/(f-e);b=c+h*(d-c)}}var i=this.options.min+Math.round(b/this.options.step)*this.options.step;return i<this.options.min?this.options.min:i>this.options.max?this.options.max:i},toPercentage:function(a){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var b,c,d,e=0,f=0;f<this.options.ticks.length;f++)if(a<=this.options.ticks[f]){b=f>0?this.options.ticks[f-1]:0,d=f>0?this.options.ticks_positions[f-1]:0,c=this.options.ticks[f],e=this.options.ticks_positions[f];break}if(f>0){var g=(a-b)/(c-b);return d+g*(e-d)}}return 100*(a-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(a){var b=0===this.options.min?0:Math.log(this.options.min),c=Math.log(this.options.max),d=Math.exp(b+(c-b)*a/100);return d=this.options.min+Math.round((d-this.options.min)/this.options.step)*this.options.step,d<this.options.min?this.options.min:d>this.options.max?this.options.max:d},toPercentage:function(a){if(this.options.max===this.options.min)return 0;var b=Math.log(this.options.max),c=0===this.options.min?0:Math.log(this.options.min),d=0===a?0:Math.log(a);return 100*(d-c)/(b-c)}}};if(b=function(a,b){return c.call(this,a,b),this},b.prototype={_init:function(){},constructor:b,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,handle:"round",reversed:!1,enabled:!0,formatter:function(a){return Array.isArray(a)?a[0]+" : "+a[1]:a},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,scale:"linear",focus:!1,tooltip_position:null},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(a,b,c){a||(a=0);var d=this.getValue();this._state.value=this._validateInputValue(a);var e=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=e(this._state.value[0]),this._state.value[1]=e(this._state.value[1]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=e(this._state.value),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),this._state.value[1]="after"===this.options.selection?this.options.max:this.options.min),this._state.percentage=this.options.max>this.options.min?[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:[0,0,100],this._layout();var f=this.options.range?this._state.value:this._state.value[0];return b===!0&&this._trigger("slide",f),d!==f&&c===!0&&this._trigger("change",{oldValue:d,newValue:f}),this._setDataVal(f),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),a&&(this._unbindJQueryEventHandlers(),this.$element.removeData("slider"))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(a,b){return this._bindNonQueryEventHandler(a,b),this},off:function(b,c){a?(this.$element.off(b,c),this.$sliderElem.off(b,c)):this._unbindNonQueryEventHandler(b,c)},getAttribute:function(a){return a?this.options[a]:this.options},setAttribute:function(a,b){return this.options[a]=b,this},refresh:function(){return this._removeSliderEventHandlers(),c.call(this,this.element,this.options),a&&a.data(this.element,"slider",this),this},relayout:function(){return this._layout(),this},_removeSliderEventHandlers:function(){this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle1.removeEventListener("focus",this.showTooltip,!1),this.handle1.removeEventListener("blur",this.hideTooltip,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.handle2.removeEventListener("focus",this.handle2Keydown,!1),this.handle2.removeEventListener("blur",this.handle2Keydown,!1),this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.mousedown,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1)},_bindNonQueryEventHandler:function(a,b){void 0===this.eventToCallbackMap[a]&&(this.eventToCallbackMap[a]=[]),this.eventToCallbackMap[a].push(b)},_unbindNonQueryEventHandler:function(a,b){var c=this.eventToCallbackMap[a];if(void 0!==c)for(var d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);break}},_cleanUpEventCallbacksMap:function(){for(var a=Object.keys(this.eventToCallbackMap),b=0;b<a.length;b++){var c=a[b];this.eventToCallbackMap[c]=null}},_showTooltip:function(){this.options.tooltip_split===!1?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){this._state.inDrag===!1&&this.alwaysShowTooltip!==!0&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_layout:function(){var a;if(a=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=a[0]+"%",this.handle2.style[this.stylePos]=a[1]+"%",Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var b=Math.max.apply(Math,this.options.ticks),c=Math.min.apply(Math,this.options.ticks),d="vertical"===this.options.orientation?"height":"width",e="vertical"===this.options.orientation?"marginTop":"marginLeft",f=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var g=0;if(0===this.options.ticks_positions.length)this.tickLabelContainer.style[e]=-f/2+"px",g=this.tickLabelContainer.offsetHeight;else for(h=0;h<this.tickLabelContainer.childNodes.length;h++)this.tickLabelContainer.childNodes[h].offsetHeight>g&&(g=this.tickLabelContainer.childNodes[h].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=g+"px")}for(var h=0;h<this.options.ticks.length;h++){var i=this.options.ticks_positions[h]||100*(this.options.ticks[h]-c)/(b-c);this.ticks[h].style[this.stylePos]=i+"%",this._removeClass(this.ticks[h],"in-selection"),this.options.range?i>=a[0]&&i<=a[1]&&this._addClass(this.ticks[h],"in-selection"):"after"===this.options.selection&&i>=a[0]?this._addClass(this.ticks[h],"in-selection"):"before"===this.options.selection&&i<=a[0]&&this._addClass(this.ticks[h],"in-selection"),this.tickLabels[h]&&(this.tickLabels[h].style[d]=f+"px",void 0!==this.options.ticks_positions[h]&&(this.tickLabels[h].style.position="absolute",this.tickLabels[h].style[this.stylePos]=this.options.ticks_positions[h]+"%",this.tickLabels[h].style[e]=-f/2+"px"))}}var j;if(this.options.range){j=this.options.formatter(this._state.value),this._setText(this.tooltipInner,j),this.tooltip.style[this.stylePos]=(a[1]+a[0])/2+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px"),"vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");var k=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,k);var l=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,l),this.tooltip_min.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip_min,"margin-top",-this.tooltip_min.offsetHeight/2+"px"):this._css(this.tooltip_min,"margin-left",-this.tooltip_min.offsetWidth/2+"px"),this.tooltip_max.style[this.stylePos]=a[1]+"%","vertical"===this.options.orientation?this._css(this.tooltip_max,"margin-top",-this.tooltip_max.offsetHeight/2+"px"):this._css(this.tooltip_max,"margin-left",-this.tooltip_max.offsetWidth/2+"px")}else j=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,j),this.tooltip.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(a[0],a[1])+"%",this.trackSelection.style.top=Math.min(a[0],a[1])+"%",this.trackSelection.style.height=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";else{this.trackLow.style.left="0",this.trackLow.style.width=Math.min(a[0],a[1])+"%",this.trackSelection.style.left=Math.min(a[0],a[1])+"%",this.trackSelection.style.width=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";var m=this.tooltip_min.getBoundingClientRect(),n=this.tooltip_max.getBoundingClientRect();m.right>n.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_removeProperty:function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b)},_mousedown:function(a){if(!this._state.enabled)return!1;this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var b=this._getPercentage(a);if(this.options.range){var c=Math.abs(this._state.percentage[0]-b),d=Math.abs(this._state.percentage[1]-b);this._state.dragged=d>c?0:1}else this._state.dragged=0;this._state.percentage[this._state.dragged]=b,this._layout(),this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var e=this._calculateValue();return this._trigger("slideStart",e),this._setDataVal(e),this.setValue(e,!1,!0),this._pauseEvent(a),this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_triggerFocusOnHandle:function(a){0===a&&this.handle1.focus(),1===a&&this.handle2.focus()},_keydown:function(a,b){if(!this._state.enabled)return!1;var c;switch(b.keyCode){case 37:case 40:c=-1;break;case 39:case 38:c=1}if(c){if(this.options.natural_arrow_keys){var d="vertical"===this.options.orientation&&!this.options.reversed,e="horizontal"===this.options.orientation&&this.options.reversed;(d||e)&&(c=-c)}var f=this._state.value[a]+c*this.options.step;return this.options.range&&(f=[a?this._state.value[0]:f,a?f:this._state.value[1]]),this._trigger("slideStart",f),this._setDataVal(f),this.setValue(f,!0,!0),this._setDataVal(f),this._trigger("slideStop",f),this._layout(),this._pauseEvent(b),!1}},_pauseEvent:function(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.returnValue=!1},_mousemove:function(a){if(!this._state.enabled)return!1;var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b,this._layout();var c=this._calculateValue(!0);return this.setValue(c,!0,!0),!1},_adjustPercentageForRangeSliders:function(a){if(this.options.range){var b=this._getNumDigitsAfterDecimalPlace(a);b=b?b-1:0;var c=this._applyToFixedAndParseFloat(a,b);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],b)<c?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],b)>c&&(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0)}},_mouseup:function(){if(!this._state.enabled)return!1;this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,this._state.over===!1&&this._hideTooltip();var a=this._calculateValue(!0);return this._layout(),this._setDataVal(a),this._trigger("slideStop",a),!1},_calculateValue:function(a){var b;if(this.options.range?(b=[this.options.min,this.options.max],0!==this._state.percentage[0]&&(b[0]=this._toValue(this._state.percentage[0]),b[0]=this._applyPrecision(b[0])),100!==this._state.percentage[1]&&(b[1]=this._toValue(this._state.percentage[1]),b[1]=this._applyPrecision(b[1]))):(b=this._toValue(this._state.percentage[0]),b=parseFloat(b),b=this._applyPrecision(b)),a){for(var c=[b,1/0],d=0;d<this.options.ticks.length;d++){var e=Math.abs(this.options.ticks[d]-b);e<=c[1]&&(c=[this.options.ticks[d],e])}if(c[1]<=this.options.ticks_snap_bounds)return c[0]}return b},_applyPrecision:function(a){var b=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(a,b)},_getNumDigitsAfterDecimalPlace:function(a){var b=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return b?Math.max(0,(b[1]?b[1].length:0)-(b[2]?+b[2]:0)):0},_applyToFixedAndParseFloat:function(a,b){var c=a.toFixed(b);return parseFloat(c)},_getPercentage:function(a){!this.touchCapable||"touchstart"!==a.type&&"touchmove"!==a.type||(a=a.touches[0]);var b=a[this.mousePos],c=this._state.offset[this.stylePos],d=b-c,e=d/this._state.size*100;return e=Math.round(e/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(e=100-e),Math.max(0,Math.min(100,e))},_validateInputValue:function(a){if("number"==typeof a)return a;if(Array.isArray(a))return this._validateArray(a),a;throw new Error(d.formatInvalidInputErrorMsg(a))},_validateArray:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("number"!=typeof c)throw new Error(d.formatInvalidInputErrorMsg(c))}},_setDataVal:function(a){this.element.setAttribute("data-value",a),this.element.setAttribute("value",a),this.element.value=a},_trigger:function(b,c){c=c||0===c?c:void 0;var d=this.eventToCallbackMap[b];if(d&&d.length)for(var e=0;e<d.length;e++){var f=d[e];f(c)}a&&this._triggerJQueryEvent(b,c)},_triggerJQueryEvent:function(a,b){var c={type:a,value:b};this.$element.trigger(c),this.$sliderElem.trigger(c)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(a,b){"undefined"!=typeof a.innerText?a.innerText=b:"undefined"!=typeof a.textContent&&(a.textContent=b)},_removeClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)");d=d.replace(g," ")}a.className=d.trim()},_addClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)"),h=g.test(d);h||(d+=" "+f)}a.className=d.trim()},_offsetLeft:function(a){return a.getBoundingClientRect().left},_offsetTop:function(a){for(var b=a.offsetTop;(a=a.offsetParent)&&!isNaN(a.offsetTop);)b+=a.offsetTop;return b},_offset:function(a){return{left:this._offsetLeft(a),top:this._offsetTop(a)}},_css:function(b,c,d){if(a)a.style(b,c,d);else{var e=c.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()});b.style[e]=d}},_toValue:function(a){return this.options.scale.toValue.apply(this,[a])},_toPercentage:function(a){return this.options.scale.toPercentage.apply(this,[a])},_setTooltipPosition:function(){var a=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var b=this.options.tooltip_position||"right",c="left"===b?"right":"left";a.forEach(function(a){this._addClass(a,b),a.style[c]="100%"}.bind(this))}else a.forEach("bottom"===this.options.tooltip_position?function(a){this._addClass(a,"bottom"),a.style.top="22px"}.bind(this):function(a){this._addClass(a,"top"),a.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}},a){var f=a.fn.slider?"bootstrapSlider":"slider";a.bridget(f,b)}}(a),b});

/***/ },
/* 14 */
/***/ function(module, exports) {

	(function() { module.exports = this["$"]; }());

/***/ },
/* 15 */
/***/ function(module, exports) {

	angular.module('ui.bootstrap-slider', [])
	    .directive('slider', ['$parse', '$timeout', '$rootScope', function ($parse, $timeout, $rootScope) {
	        return {
	            restrict: 'AE',
	            replace: true,
	            template: '<div><input class="slider-input" type="text" style="width:100%" /></div>',
	            require: 'ngModel',
	            scope: {
	                max: "=",
	                min: "=",
	                step: "=",
	                value: "=",
	                ngModel: '=',
	                ngDisabled: '=',
	                range: '=',
	                sliderid: '=',
	                ticks: '=',
	                ticksLabels: '=',
	                ticksSnapBounds: '=',
	                ticksPositions: '=',
	                scale: '=',
	                formatter: '&',
	                onStartSlide: '&',
	                onStopSlide: '&',
	                onSlide: '&'
	            },
	            link: function ($scope, element, attrs, ngModelCtrl, $compile) {
	                var ngModelDeregisterFn, ngDisabledDeregisterFn;

	                initSlider();

	                function initSlider() {
	                    var options = {};

	                    function setOption(key, value, defaultValue) {
	                        options[key] = value || defaultValue;
	                    }

	                    function setFloatOption(key, value, defaultValue) {
	                        options[key] = value || value === 0 ? parseFloat(value) : defaultValue;
	                    }

	                    function setBooleanOption(key, value, defaultValue) {
	                        options[key] = value ? value + '' === 'true' : defaultValue;
	                    }

	                    function getArrayOrValue(value) {
	                        return (angular.isString(value) && value.indexOf("[") === 0) ? angular.fromJson(value) : value;
	                    }

	                    setOption('id', $scope.sliderid);
	                    setOption('orientation', attrs.orientation, 'horizontal');
	                    setOption('selection', attrs.selection, 'before');
	                    setOption('handle', attrs.handle, 'round');
	                    setOption('tooltip', attrs.sliderTooltip || attrs.tooltip, 'show');
	                    setOption('tooltip_position', attrs.sliderTooltipPosition, 'top');
	                    setOption('tooltipseparator', attrs.tooltipseparator, ':');
	                    setOption('ticks', $scope.ticks);
	                    setOption('ticks_labels', $scope.ticksLabels);
	                    setOption('ticks_snap_bounds', $scope.ticksSnapBounds);
	                    setOption('ticks_positions', $scope.ticksPositions);
	                    setOption('scale', $scope.scale, 'linear');

	                    setFloatOption('min', $scope.min, 0);
	                    setFloatOption('max', $scope.max, 10);
	                    setFloatOption('step', $scope.step, 1);
	                    var strNbr = options.step + '';
	                    var decimals = strNbr.substring(strNbr.lastIndexOf('.') + 1);
	                    setFloatOption('precision', attrs.precision, decimals);

	                    setBooleanOption('tooltip_split', attrs.tooltipsplit, false);
	                    setBooleanOption('enabled', attrs.enabled, true);
	                    setBooleanOption('naturalarrowkeys', attrs.naturalarrowkeys, false);
	                    setBooleanOption('reversed', attrs.reversed, false);

	                    setBooleanOption('range', $scope.range, false);
	                    if (options.range) {
	                        if (angular.isArray($scope.value)) {
	                            options.value = $scope.value;
	                        }
	                        else if (angular.isString($scope.value)) {
	                            options.value = getArrayOrValue($scope.value);
	                            if (!angular.isArray(options.value)) {
	                                var value = parseFloat($scope.value);
	                                if (isNaN(value)) value = 5;

	                                if (value < $scope.min) {
	                                    value = $scope.min;
	                                    options.value = [value, options.max];
	                                }
	                                else if (value > $scope.max) {
	                                    value = $scope.max;
	                                    options.value = [options.min, value];
	                                }
	                                else {
	                                    options.value = [options.min, options.max];
	                                }
	                            }
	                        }
	                        else {
	                            options.value = [options.min, options.max]; // This is needed, because of value defined at $.fn.slider.defaults - default value 5 prevents creating range slider
	                        }
	                        $scope.ngModel = options.value; // needed, otherwise turns value into [null, ##]
	                    }
	                    else {
	                        setFloatOption('value', $scope.value, 5);
	                    }

	                    if ($scope.formatter) options.formatter = $scope.$eval($scope.formatter);


	                    // check if slider jQuery plugin exists
	                    if ('$' in window && $.fn.slider) {
	                        // adding methods to jQuery slider plugin prototype
	                        $.fn.slider.constructor.prototype.disable = function () {
	                            this.picker.off();
	                        };
	                        $.fn.slider.constructor.prototype.enable = function () {
	                            this.picker.on();
	                        };
	                    }

	                    // destroy previous slider to reset all options
	                    if (element[0].__slider)
	                        element[0].__slider.destroy();

	                    var slider = new Slider(element[0].getElementsByClassName('slider-input')[0], options);
	                    element[0].__slider = slider;

	                    // everything that needs slider element
	                    var updateEvent = getArrayOrValue(attrs.updateevent);
	                    if (angular.isString(updateEvent)) {
	                        // if only single event name in string
	                        updateEvent = [updateEvent];
	                    }
	                    else {
	                        // default to slide event
	                        updateEvent = ['slide'];
	                    }
	                    angular.forEach(updateEvent, function (sliderEvent) {
	                        slider.on(sliderEvent, function (ev) {
	                            ngModelCtrl.$setViewValue(ev);
	                            $timeout(function () {
	                                $scope.$apply();
	                            });
	                        });
	                    });
	                    slider.on('change', function (ev) {
	                        ngModelCtrl.$setViewValue(ev.newValue);
	                        $timeout(function () {
	                            $scope.$apply();
	                        });
	                    });

	                    // Event listeners
	                    var sliderEvents = {
	                        slideStart: 'onStartSlide',
	                        slide: 'onSlide',
	                        slideStop: 'onStopSlide'
	                    };
	                    angular.forEach(sliderEvents, function (sliderEventAttr, sliderEvent) {
	                        var fn = $parse(attrs[sliderEventAttr]);
	                        slider.on(sliderEvent, function (ev) {
	                            if ($scope[sliderEventAttr]) {

	                                var callback = function () {
	                                    fn($scope.$parent, { $event: ev, value: ev });
	                                }

	                                if ($rootScope.$$phase) {
	                                    $scope.$evalAsync(callback);
	                                } else {
	                                    $scope.$apply(callback);
	                                }
	                            }
	                        });
	                    });

	                    // deregister ngDisabled watcher to prevent memory leaks
	                    if (angular.isFunction(ngDisabledDeregisterFn)) {
	                        ngDisabledDeregisterFn();
	                        ngDisabledDeregisterFn = null;
	                    }

	                    ngDisabledDeregisterFn = $scope.$watch('ngDisabled', function (value) {
	                        if (value) {
	                            slider.disable();
	                        }
	                        else {
	                            slider.enable();
	                        }
	                    });

	                    // deregister ngModel watcher to prevent memory leaks
	                    if (angular.isFunction(ngModelDeregisterFn)) ngModelDeregisterFn();
	                    ngModelDeregisterFn = $scope.$watch('ngModel', function (value) {
	                        if($scope.range){
	                            slider.setValue(value);
	                        }else{
	                            slider.setValue(parseFloat(value));
	                        }
	                    }, true);
	                }


	                var watchers = ['min', 'max', 'step', 'range', 'scale'];
	                angular.forEach(watchers, function (prop) {
	                    $scope.$watch(prop, function () {
	                        initSlider();
	                    });
	                });
	            }
	        };
	    }])
	;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return (root['SignaturePad'] = factory());
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    root['SignaturePad'] = factory();
	  }
	}(this, function () {

	/*!
	 * Signature Pad v1.4.0
	 * https://github.com/szimek/signature_pad
	 *
	 * Copyright 2015 Szymon Nowak
	 * Released under the MIT license
	 *
	 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
	 * http://corner.squareup.com/2012/07/smoother-signatures.html
	 *
	 * Implementation of interpolation using cubic Bézier curves is taken from:
	 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
	 *
	 * Algorithm for approximated length of a Bézier curve is taken from:
	 * http://www.lemoda.net/maths/bezier-length/index.html
	 *
	 */
	var SignaturePad = (function (document) {
	    "use strict";

	    var SignaturePad = function (canvas, options) {
	        var self = this,
	            opts = options || {};

	        this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
	        this.minWidth = opts.minWidth || 0.5;
	        this.maxWidth = opts.maxWidth || 2.5;
	        this.dotSize = opts.dotSize || function () {
	            return (this.minWidth + this.maxWidth) / 2;
	        };
	        this.penColor = opts.penColor || "black";
	        this.backgroundColor = opts.backgroundColor || "rgba(0,0,0,0)";
	        this.onEnd = opts.onEnd;
	        this.onBegin = opts.onBegin;

	        this._canvas = canvas;
	        this._ctx = canvas.getContext("2d");
	        this.clear();

	        // we need add these inline so they are available to unbind while still having
	        //  access to 'self' we could use _.bind but it's not worth adding a dependency
	        this._handleMouseDown = function (event) {
	            if (event.which === 1) {
	                self._mouseButtonDown = true;
	                self._strokeBegin(event);
	            }
	        };

	        this._handleMouseMove = function (event) {
	            if (self._mouseButtonDown) {
	                self._strokeUpdate(event);
	            }
	        };

	        this._handleMouseUp = function (event) {
	            if (event.which === 1 && self._mouseButtonDown) {
	                self._mouseButtonDown = false;
	                self._strokeEnd(event);
	            }
	        };

	        this._handleTouchStart = function (event) {
	            var touch = event.changedTouches[0];
	            self._strokeBegin(touch);
	        };

	        this._handleTouchMove = function (event) {
	            // Prevent scrolling.
	            event.preventDefault();

	            var touch = event.changedTouches[0];
	            self._strokeUpdate(touch);
	        };

	        this._handleTouchEnd = function (event) {
	            var wasCanvasTouched = event.target === self._canvas;
	            if (wasCanvasTouched) {
	                self._strokeEnd(event);
	            }
	        };

	        this._handleMouseEvents();
	        this._handleTouchEvents();
	    };

	    SignaturePad.prototype.clear = function () {
	        var ctx = this._ctx,
	            canvas = this._canvas;

	        ctx.fillStyle = this.backgroundColor;
	        ctx.clearRect(0, 0, canvas.width, canvas.height);
	        ctx.fillRect(0, 0, canvas.width, canvas.height);
	        this._reset();
	    };

	    SignaturePad.prototype.toDataURL = function (imageType, quality) {
	        var canvas = this._canvas;
	        return canvas.toDataURL.apply(canvas, arguments);
	    };

	    SignaturePad.prototype.fromDataURL = function (dataUrl) {
	        var self = this,
	            image = new Image(),
	            ratio = window.devicePixelRatio || 1,
	            width = this._canvas.width / ratio,
	            height = this._canvas.height / ratio;

	        this._reset();
	        image.src = dataUrl;
	        image.onload = function () {
	            self._ctx.drawImage(image, 0, 0, width, height);
	        };
	        this._isEmpty = false;
	    };

	    SignaturePad.prototype._strokeUpdate = function (event) {
	        var point = this._createPoint(event);
	        this._addPoint(point);
	    };

	    SignaturePad.prototype._strokeBegin = function (event) {
	        this._reset();
	        this._strokeUpdate(event);
	        if (typeof this.onBegin === 'function') {
	            this.onBegin(event);
	        }
	    };

	    SignaturePad.prototype._strokeDraw = function (point) {
	        var ctx = this._ctx,
	            dotSize = typeof(this.dotSize) === 'function' ? this.dotSize() : this.dotSize;

	        ctx.beginPath();
	        this._drawPoint(point.x, point.y, dotSize);
	        ctx.closePath();
	        ctx.fill();
	    };

	    SignaturePad.prototype._strokeEnd = function (event) {
	        var canDrawCurve = this.points.length > 2,
	            point = this.points[0];

	        if (!canDrawCurve && point) {
	            this._strokeDraw(point);
	        }
	        if (typeof this.onEnd === 'function') {
	            this.onEnd(event);
	        }
	    };

	    SignaturePad.prototype._handleMouseEvents = function () {
	        var self = this;
	        this._mouseButtonDown = false;

	        this._canvas.addEventListener("mousedown", this._handleMouseDown);
	        this._canvas.addEventListener("mousemove", this._handleMouseMove);
	        document.addEventListener("mouseup", this._handleMouseUp);
	    };

	    SignaturePad.prototype._handleTouchEvents = function () {
	        var self = this;

	        // Pass touch events to canvas element on mobile IE.
	        this._canvas.style.msTouchAction = 'none';

	        this._canvas.addEventListener("touchstart", this._handleTouchStart);
	        this._canvas.addEventListener("touchmove", this._handleTouchMove);
	        document.addEventListener("touchend", this._handleTouchEnd);
	    };

	    SignaturePad.prototype.off = function () {
	        this._canvas.removeEventListener("mousedown", this._handleMouseDown);
	        this._canvas.removeEventListener("mousemove", this._handleMouseMove);
	        document.removeEventListener("mouseup", this._handleMouseUp);

	        this._canvas.removeEventListener("touchstart", this._handleTouchStart);
	        this._canvas.removeEventListener("touchmove", this._handleTouchMove);
	        document.removeEventListener("touchend", this._handleTouchEnd);
	    };

	    SignaturePad.prototype.isEmpty = function () {
	        return this._isEmpty;
	    };

	    SignaturePad.prototype._reset = function () {
	        this.points = [];
	        this._lastVelocity = 0;
	        this._lastWidth = (this.minWidth + this.maxWidth) / 2;
	        this._isEmpty = true;
	        this._ctx.fillStyle = this.penColor;
	    };

	    SignaturePad.prototype._createPoint = function (event) {
	        var rect = this._canvas.getBoundingClientRect();
	        return new Point(
	            event.clientX - rect.left,
	            event.clientY - rect.top
	        );
	    };

	    SignaturePad.prototype._addPoint = function (point) {
	        var points = this.points,
	            c2, c3,
	            curve, tmp;

	        points.push(point);

	        if (points.length > 2) {
	            // To reduce the initial lag make it work with 3 points
	            // by copying the first point to the beginning.
	            if (points.length === 3) points.unshift(points[0]);

	            tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
	            c2 = tmp.c2;
	            tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
	            c3 = tmp.c1;
	            curve = new Bezier(points[1], c2, c3, points[2]);
	            this._addCurve(curve);

	            // Remove the first element from the list,
	            // so that we always have no more than 4 points in points array.
	            points.shift();
	        }
	    };

	    SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
	        var dx1 = s1.x - s2.x, dy1 = s1.y - s2.y,
	            dx2 = s2.x - s3.x, dy2 = s2.y - s3.y,

	            m1 = {x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0},
	            m2 = {x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0},

	            l1 = Math.sqrt(dx1*dx1 + dy1*dy1),
	            l2 = Math.sqrt(dx2*dx2 + dy2*dy2),

	            dxm = (m1.x - m2.x),
	            dym = (m1.y - m2.y),

	            k = l2 / (l1 + l2),
	            cm = {x: m2.x + dxm*k, y: m2.y + dym*k},

	            tx = s2.x - cm.x,
	            ty = s2.y - cm.y;

	        return {
	            c1: new Point(m1.x + tx, m1.y + ty),
	            c2: new Point(m2.x + tx, m2.y + ty)
	        };
	    };

	    SignaturePad.prototype._addCurve = function (curve) {
	        var startPoint = curve.startPoint,
	            endPoint = curve.endPoint,
	            velocity, newWidth;

	        velocity = endPoint.velocityFrom(startPoint);
	        velocity = this.velocityFilterWeight * velocity
	            + (1 - this.velocityFilterWeight) * this._lastVelocity;

	        newWidth = this._strokeWidth(velocity);
	        this._drawCurve(curve, this._lastWidth, newWidth);

	        this._lastVelocity = velocity;
	        this._lastWidth = newWidth;
	    };

	    SignaturePad.prototype._drawPoint = function (x, y, size) {
	        var ctx = this._ctx;

	        ctx.moveTo(x, y);
	        ctx.arc(x, y, size, 0, 2 * Math.PI, false);
	        this._isEmpty = false;
	    };

	    SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
	        var ctx = this._ctx,
	            widthDelta = endWidth - startWidth,
	            drawSteps, width, i, t, tt, ttt, u, uu, uuu, x, y;

	        drawSteps = Math.floor(curve.length());
	        ctx.beginPath();
	        for (i = 0; i < drawSteps; i++) {
	            // Calculate the Bezier (x, y) coordinate for this step.
	            t = i / drawSteps;
	            tt = t * t;
	            ttt = tt * t;
	            u = 1 - t;
	            uu = u * u;
	            uuu = uu * u;

	            x = uuu * curve.startPoint.x;
	            x += 3 * uu * t * curve.control1.x;
	            x += 3 * u * tt * curve.control2.x;
	            x += ttt * curve.endPoint.x;

	            y = uuu * curve.startPoint.y;
	            y += 3 * uu * t * curve.control1.y;
	            y += 3 * u * tt * curve.control2.y;
	            y += ttt * curve.endPoint.y;

	            width = startWidth + ttt * widthDelta;
	            this._drawPoint(x, y, width);
	        }
	        ctx.closePath();
	        ctx.fill();
	    };

	    SignaturePad.prototype._strokeWidth = function (velocity) {
	        return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
	    };


	    var Point = function (x, y, time) {
	        this.x = x;
	        this.y = y;
	        this.time = time || new Date().getTime();
	    };

	    Point.prototype.velocityFrom = function (start) {
	        return (this.time !== start.time) ? this.distanceTo(start) / (this.time - start.time) : 1;
	    };

	    Point.prototype.distanceTo = function (start) {
	        return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
	    };

	    var Bezier = function (startPoint, control1, control2, endPoint) {
	        this.startPoint = startPoint;
	        this.control1 = control1;
	        this.control2 = control2;
	        this.endPoint = endPoint;
	    };

	    // Returns approximated length.
	    Bezier.prototype.length = function () {
	        var steps = 10,
	            length = 0,
	            i, t, cx, cy, px, py, xdiff, ydiff;

	        for (i = 0; i <= steps; i++) {
	            t = i / steps;
	            cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
	            cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
	            if (i > 0) {
	                xdiff = cx - px;
	                ydiff = cy - py;
	                length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
	            }
	            px = cx;
	            py = cy;
	        }
	        return length;
	    };

	    Bezier.prototype._point = function (t, start, c1, c2, end) {
	        return          start * (1.0 - t) * (1.0 - t)  * (1.0 - t)
	               + 3.0 *  c1    * (1.0 - t) * (1.0 - t)  * t
	               + 3.0 *  c2    * (1.0 - t) * t          * t
	               +        end   * t         * t          * t;
	    };

	    return SignaturePad;
	})(document);

	return SignaturePad;

	}));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);
	var autosave = __webpack_require__(18);
	exports.autosave = autosave;
	exports.moduleName = 'rl.ui.behaviors';
	angular.module(exports.moduleName, [
	    autosave.moduleName,
	]);
	//# sourceMappingURL=behaviors.module.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 19 */
/***/ function(module, exports) {

	(function() { module.exports = this["rl_utilities"]; }());

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var autosaveDialogFooter = __webpack_require__(21);
	exports.autosaveDialogFooter = autosaveDialogFooter;
	var busy = __webpack_require__(23);
	exports.busy = busy;
	var button = __webpack_require__(24);
	exports.button = button;
	var buttonToggle = __webpack_require__(27);
	exports.buttonToggle = buttonToggle;
	var cardContainer = __webpack_require__(29);
	exports.cardContainer = cardContainer;
	var commaList = __webpack_require__(73);
	exports.commaList = commaList;
	var dateTime = __webpack_require__(74);
	exports.dateTime = dateTime;
	var genericContainer = __webpack_require__(75);
	exports.genericContainer = genericContainer;
	var lazyLoad = __webpack_require__(77);
	exports.lazyLoad = lazyLoad;
	var longClickButton = __webpack_require__(78);
	exports.longClickButton = longClickButton;
	var messageLog = __webpack_require__(79);
	exports.messageLog = messageLog;
	var multiStepIndicator = __webpack_require__(82);
	exports.multiStepIndicator = multiStepIndicator;
	var ratingBar = __webpack_require__(83);
	exports.ratingBar = ratingBar;
	var responsiveCardGrid = __webpack_require__(86);
	exports.responsiveCardGrid = responsiveCardGrid;
	var richTextEditor = __webpack_require__(93);
	exports.richTextEditor = richTextEditor;
	var signaturePad = __webpack_require__(94);
	exports.signaturePad = signaturePad;
	var simpleCardList = __webpack_require__(95);
	exports.simpleCardList = simpleCardList;
	var spinner = __webpack_require__(98);
	exports.spinner = spinner;
	var stringWithWatermark = __webpack_require__(99);
	exports.stringWithWatermark = stringWithWatermark;
	var typeahead = __webpack_require__(100);
	exports.typeahead = typeahead;
	var userRating = __webpack_require__(101);
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.autosaveDialogFooter';
	exports.directiveName = 'rlAutosaveDialogFooter';
	function autosaveDialogFooter() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(22),
	    };
	}
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, autosaveDialogFooter);
	//# sourceMappingURL=autosaveDialogFooter.js.map

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-footer\">\r\n\t<button class=\"btn btn-default\" type=\"button\" ng-click=\"$close()\">Cancel</button>\r\n\t<button class=\"btn btn-primary\" type=\"button\" ng-click=\"$dismiss()\">Save</button>\r\n</div>"

/***/ },
/* 23 */
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
	        template: __webpack_require__(26),
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
/* 25 */
/***/ function(module, exports) {

	(function() { module.exports = this["_"]; }());

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"btn btn-{{type}} {{button.sizeClass}}\" ng-click=\"button.trigger()\" ng-disabled=\"button.busy || ngDisabled\">\r\n\t<rl-busy ng-show=\"buttonRightAligned\" loading=\"button.busy\"></rl-busy>\r\n\t<span ng-transclude></span>\r\n\t<rl-busy ng-hide=\"buttonRightAligned\" loading=\"button.busy\"></rl-busy>\r\n</button>"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
	        templateUrl: __webpack_require__(28),
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
/* 28 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"btn btn-{{buttonToggle.buttonClass}} {{buttonToggle.buttonSize}}\" \r\n\t\tng-class=\"{ active : buttonToggle.isActive }\" ng-click=\"buttonToggle.clicked()\" ng-disabled=\"disabled\">\r\n\t<i ng-show=\"buttonToggle.isActive\" class=\"fa fa-check completed\"></i> <span ng-transclude></span>\r\n</button>"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __object = typescript_angular_utilities_1.services.object;
	var __array = typescript_angular_utilities_1.services.array;
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var card = __webpack_require__(30);
	exports.card = card;
	var cardSearch = __webpack_require__(36);
	exports.cardSearch = cardSearch;
	var columnHeader = __webpack_require__(38);
	exports.columnHeader = columnHeader;
	var dataSources = __webpack_require__(40);
	exports.dataSources = dataSources;
	var filters = __webpack_require__(51);
	exports.filters = filters;
	var itemCount = __webpack_require__(61);
	exports.itemCount = itemCount;
	var pager = __webpack_require__(62);
	exports.pager = pager;
	var pageSize = __webpack_require__(64);
	exports.pageSize = pageSize;
	var selectionControl = __webpack_require__(66);
	exports.selectionControl = selectionControl;
	var sorts = __webpack_require__(41);
	exports.sorts = sorts;
	var cardContainer_1 = __webpack_require__(68);
	__export(__webpack_require__(68));
	__export(__webpack_require__(72));
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var __object = typescript_angular_utilities_1.services.object;
	var headerColumn_module_1 = __webpack_require__(31);
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
	        template: __webpack_require__(35),
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var headerColumn_1 = __webpack_require__(32);
	var sizeForBreakpoints_1 = __webpack_require__(33);
	exports.moduleName = 'rl.ui.components.cardContainer.card.headerColumn';
	angular.module(exports.moduleName, [
	    typescript_angular_utilities_1.services.string.moduleName,
	])
	    .directive(sizeForBreakpoints_1.sizeForBreakpointsName, sizeForBreakpoints_1.sizeForBreakpoints)
	    .directive(headerColumn_1.directiveName, headerColumn_1.headerColumn)
	    .controller(headerColumn_1.controllerName, headerColumn_1.HeaderColumnController);
	//# sourceMappingURL=headerColumn.module.js.map

/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __string = typescript_angular_utilities_1.services.string;
	var breakpoint_1 = __webpack_require__(34);
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
/* 34 */
/***/ function(module, exports) {

	'use strict';
	exports.lg = 'lg';
	exports.md = 'md';
	exports.sm = 'sm';
	exports.xs = 'xs';
	//# sourceMappingURL=breakpoint.js.map

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<rl-generic-container selector=\"card.selectable\">\r\n\t<template when-selector=\"false\" default>\r\n\t\t<div class=\"card\" ng-class=\"{ 'selected': card.item.viewData.selected }\">\r\n\t\t\t<div class=\"header\" ng-click=\"card.toggleContent()\" ng-class=\"{ 'active': card.hasBody || !card.permanentFooter }\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div ng-repeat=\"column in card.columns\">\r\n\t\t\t\t\t\t<rl-card-header-column column=\"column\" item=\"card.item\"></rl-card-header-column>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div ng-show=\"card.showContent\">\r\n\t\t\t\t<ng-form rl-autosave=\"card.autosaveLink\" save=\"card.saveCard()\" validate=\"card.validateCard()\">\r\n\t\t\t\t\t<div class=\"body\" ng-class=\"{ 'active': card.clickable }\" ng-click=\"card.clickCard()\">\r\n\t\t\t\t\t\t<div class=\"content-template\"></div>\r\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-form>\r\n\t\t\t</div>\r\n\t\t\t<div ng-show=\"card.hasFooter && (card.showContent || card.permanentFooter)\">\r\n\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t<div class=\"footer-template\"></div>\r\n\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</template>\r\n\t<template when-selector=\"true\">\r\n\t\t<div class=\"select-group\">\r\n\t\t\t<div class=\"select-column\">\r\n\t\t\t\t<input type=\"checkbox\" class=\"stand-alone-checkbox\" ng-model=\"card.item.viewData.selected\" ng-change=\"card.selectionChanged()\"\r\n\t\t\t\t\t   ng-disabled=\"card.item.viewData.disabledSelection\" title=\"{{card.item.viewData.selectionTitle}}\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"select-content\">\r\n\r\n\t\t\t\t<div class=\"card selectable\" ng-class=\"{ 'selected': card.item.viewData.selected }\">\r\n\t\t\t\t\t<div class=\"header active\" ng-click=\"card.toggleContent()\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div ng-repeat=\"column in card.columns\">\r\n\t\t\t\t\t\t\t\t<rl-card-header-column column=\"column\" item=\"card.item\"></rl-card-header-column>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div ng-show=\"card.showContent\">\r\n\t\t\t\t\t\t<ng-form rl-autosave=\"card.autosaveLink\" save=\"card.saveCard()\" validate=\"card.validateCard()\">\r\n\t\t\t\t\t\t\t<div class=\"body\" ng-class=\"{ 'active': card.clickable }\" ng-click=\"card.clickCard()\">\r\n\t\t\t\t\t\t\t\t<div class=\"content-template\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div ng-show=\"card.hasFooter && (card.showContent || card.permanentFooter)\">\r\n\t\t\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t\t\t<div class=\"footer-template\"></div>\r\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</template>\r\n</rl-generic-container>"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
	        template: __webpack_require__(37),
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
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-group\" ng-show=\"cardSearch.hasSearchFilter\">\r\n\t<input class=\"form-control\" type=\"text\" placeholder=\"{{cardSearch.searchPlaceholder}}\" ng-model=\"cardSearch.searchText\"\r\n\t\t\tpopover=\"You must enter at least {{cardSearch.minSearchLength}} characters to perform a search\" popover-trigger=\"mouseenter\" popover-enable=\"cardSearch.searchLengthError\" />\r\n\t<div class=\"input-group-btn\">\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-disabled=\"cardSearch.searchText | isEmpty\" ng-click=\"cardSearch.searchText = null\">\r\n\t\t\t<i class=\"fa fa-times\"></i>\r\n\t\t</button>\r\n\t</div>\r\n</div>"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var sortDirection_1 = __webpack_require__(39);
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
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var sorts_module_1 = __webpack_require__(41);
	var dataPager = __webpack_require__(45);
	exports.dataPager = dataPager;
	var dataServiceDataSource = __webpack_require__(46);
	exports.dataServiceDataSource = dataServiceDataSource;
	var simpleDataSource = __webpack_require__(49);
	exports.simpleDataSource = simpleDataSource;
	var dataSourceProcessor = __webpack_require__(48);
	exports.dataSourceProcessor = dataSourceProcessor;
	var dataSourceBase = __webpack_require__(47);
	exports.dataSourceBase = dataSourceBase;
	__export(__webpack_require__(50));
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var mergeSort = __webpack_require__(42);
	exports.mergeSort = mergeSort;
	var sorter = __webpack_require__(43);
	exports.sorter = sorter;
	__export(__webpack_require__(44));
	__export(__webpack_require__(39));
	exports.moduleName = 'rl.ui.components.cardContainer.sorts';
	angular.module(exports.moduleName, [
	    mergeSort.moduleName,
	    sorter.moduleName,
	]);
	//# sourceMappingURL=sorts.module.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var sortDirection_1 = __webpack_require__(39);
	var mergeSort_service_1 = __webpack_require__(42);
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
/* 44 */
/***/ function(module, exports) {

	'use strict';
	//# sourceMappingURL=sort.js.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../../typings/lodashTypeExtensions.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __observable = typescript_angular_utilities_1.services.observable;
	var __array = typescript_angular_utilities_1.services.array;
	var dataSourceBase_service_1 = __webpack_require__(47);
	var dataSourceProcessor_service_1 = __webpack_require__(48);
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
/* 47 */
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __object = typescript_angular_utilities_1.services.object;
	var sorter_service_1 = __webpack_require__(43);
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __observable = typescript_angular_utilities_1.services.observable;
	var __array = typescript_angular_utilities_1.services.array;
	var dataSourceBase_service_1 = __webpack_require__(47);
	var dataSourceProcessor_service_1 = __webpack_require__(48);
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
/* 50 */
/***/ function(module, exports) {

	'use strict';
	//# sourceMappingURL=dataSource.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var columnSearchFilter = __webpack_require__(52);
	exports.columnSearchFilter = columnSearchFilter;
	var filterGroup = __webpack_require__(53);
	exports.filterGroup = filterGroup;
	exports.moduleName = 'rl.ui.components.cardContainer.filters';
	angular.module(exports.moduleName, [
	    columnSearchFilter.moduleName,
	    filterGroup.moduleName,
	]);
	//# sourceMappingURL=filters.module.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var filterOption = __webpack_require__(54);
	exports.filterOption = filterOption;
	var modeFilterGroup = __webpack_require__(56);
	exports.modeFilterGroup = modeFilterGroup;
	var rangeFilterGroup = __webpack_require__(58);
	exports.rangeFilterGroup = rangeFilterGroup;
	var filterGroup_service_1 = __webpack_require__(57);
	var filterGroup_directive_1 = __webpack_require__(59);
	__export(__webpack_require__(59));
	__export(__webpack_require__(57));
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
/* 54 */
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
	        template: __webpack_require__(55),
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
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row filter-option\" ng-class=\"{ 'active': isActive }\" ng-click=\"activate()\">\r\n\t<div class=\"col-sm-1\">\r\n\t\t<i class='fa fa-arrow-right' ng-show=\"isActive == true\"></i>\r\n\t</div>\r\n\t<div class=\"col-sm-1\" ng-if=\"hasIcon\" ng-bind-html=\"option.icon\"></div>\r\n\t<div ng-class=\"{ 'col-sm-6': hasIcon, 'col-sm-7': !hasIcon }\">\r\n\t\t{{option.label}}\r\n\t</div>\r\n\t<div class=\"col-sm-3 text-right\" ng-show=\"option.count != null\">\r\n\t\t({{option.count}})\r\n\t</div>\r\n</div>"

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __object = typescript_angular_utilities_1.services.object;
	var filterGroup_service_1 = __webpack_require__(57);
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __object = typescript_angular_utilities_1.services.object;
	var filterGroup_service_1 = __webpack_require__(57);
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
/* 59 */
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
	        template: __webpack_require__(60),
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
/* 60 */
/***/ function(module, exports) {

	module.exports = "<div class=\"filter-group\">\r\n\t<div class=\"row filter-header\" ng-click=\"controller.toggleChildren()\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<i class=\"collapse-icon fa fa-caret-down fa-2x\" ng-show=\"controller.showChildren\" title=\"Hide filter list\"></i>\r\n\t\t\t<i class=\"collapse-icon fa fa-caret-right fa-2x\" ng-hide=\"controller.showChildren\" title=\"Show filter list\"></i>\r\n\t\t\t<div class=\"filter-option\">\r\n\t\t\t\t<div style=\"display:inline-block\" ng-show=\"controller.hasIcon\" ng-bind-html=\"controller.icon\"></div>\r\n\t\t\t\t<h4 style=\"display: inline-block\">{{controller.filterGroup.label}}: {{controller.filterGroup.activeOption.label}}</h4>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div ng-show=\"controller.showChildren\" ng-repeat=\"filterOption in controller.filterGroup.options\">\r\n\t\t<rl-filter-option option=\"filterOption\" active=\"filterGroup.activeOption === filterOption\" activate=\"controller.selectOption(filterOption)\"></rl-filter-option>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 61 */
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
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
	        template: __webpack_require__(63),
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
/* 63 */
/***/ function(module, exports) {

	module.exports = "<nav ng-if=\"pager.hasPageFilter\">\r\n\t<ul class=\"pagination\">\r\n\t\t<li title=\"Go to first page\" ng-click=\"pager.first()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoBack }\">\r\n\t\t\t<a><i class=\"fa fa-angle-double-left\"></i></a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to previous page\" ng-click=\"pager.previous()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoBack }\">\r\n\t\t\t<a><i class=\"fa fa-angle-left\"></i></a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to page {{pager.page}}\" ng-click=\"pager.goto(page)\"\r\n\t\t\tng-repeat=\"page in pager.pages\"\r\n\t\t\tng-class=\"{ 'active': pager.currentPage == page }\">\r\n\t\t\t<a>{{page}}</a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to next page\" ng-click=\"pager.next()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoForward }\">\r\n\t\t\t<a><i class=\"fa fa-angle-right\"></i></a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to last page\" ng-click=\"pager.last()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoForward }\">\r\n\t\t\t<a><i class=\"fa fa-angle-double-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>\r\n"

/***/ },
/* 64 */
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
	        template: __webpack_require__(65),
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
/* 65 */
/***/ function(module, exports) {

	module.exports = "<div ng-show=\"controller.hasPageFilter\">\r\n\t<select class=\"form-control\" title=\"Cards per page\" ng-model=\"controller.selectedPageSize\"\r\n\t\t\tng-options=\"pageSize for pageSize in controller.pageSizes\"></select>\r\n</div>\r\n"

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __boolean = typescript_angular_utilities_1.services.boolean;
	exports.moduleName = 'rl.ui.components.cardContainer.selectionControl';
	exports.directiveName = 'rlSelectionControl';
	exports.controllerName = 'SelectionControlController';
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
	        template: __webpack_require__(67),
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
/* 67 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n\t<div style=\"margin-bottom: 5px\">\r\n\t\t<span><strong>{{selection.selectedItems}}</strong> items selected</span>\r\n\t</div>\r\n\t<div style=\"margin-bottom: 5px\" ng-if=\"selection.pagingEnabled\">\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.selectPage()\">Select page</button>\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.clearPage()\">Clear page</button>\r\n\t</div>\r\n\t<div>\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.selectAll()\">Select all</button>\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.clearAll()\">Clear all</button>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	// /// <reference path='../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __object = typescript_angular_utilities_1.services.object;
	var __array = typescript_angular_utilities_1.services.array;
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var dataSources_module_1 = __webpack_require__(40);
	var sorts_module_1 = __webpack_require__(41);
	var breakpoint_1 = __webpack_require__(34);
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
	        template: __webpack_require__(69),
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
	                    var defaultHeader = __webpack_require__(70);
	                    header = $compile(defaultHeader)(scope);
	                }
	                headerArea.append(header);
	                var footer = clone.filter('container-footer');
	                if (footer.length === 0) {
	                    var defaultFooter = __webpack_require__(71);
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
/* 69 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card-container\">\r\n\t<div>\r\n\t\t<div class=\"card-container-header\">\r\n\t\t\t<div class=\"container-header-template\"></div>\r\n\t\t</div>\r\n\r\n\t\t<rl-generic-container selector=\"cardContainer.selectableCards\">\r\n\t\t\t<template when-selector=\"false\" default>\r\n\t\t\t\t<div class=\"card-columns-header\">\r\n\t\t\t\t\t<div ng-repeat=\"column in cardContainer.columns\">\r\n\t\t\t\t\t\t<rl-column-header sort=\"cardContainer.sort(column)\" sorting=\"column.sortDirection\" column=\"column\"></rl-column-header>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\t\t\t<template when-selector=\"true\">\r\n\t\t\t\t<div class=\"card-columns-header\">\r\n\t\t\t\t\t<div class=\"select-group\">\r\n\t\t\t\t\t\t<div class=\"select-column\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-check\" style=\"margin-left: 6px; cursor: pointer\" ng-click=\"cardContainer.sortSelected()\"></i>\r\n\t\t\t\t\t\t\t<i ng-show=\"cardContainer.sortColumn.sortDirection === cardContainer.sortDirection.ascending\" class=\"fa fa-sort-asc\"></i>\r\n\t\t\t\t\t\t\t<i ng-show=\"cardContainer.sortColumn.sortDirection === cardContainer.sortDirection.descending\" class=\"fa fa-sort-desc\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"select-content\">\r\n\t\t\t\t\t\t\t<div ng-repeat=\"column in cardContainer.columns\">\r\n\t\t\t\t\t\t\t\t<rl-column-header sort=\"cardContainer.sort(column)\" sorting=\"column.sortDirection\" column=\"column\"></rl-column-header>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\t\t</rl-generic-container>\r\n\r\n\t\t<div ng-repeat=\"card in cardContainer.dataSource.dataSet\">\r\n\t\t\t<rl-card columns=\"cardContainer.columns\" item=\"card\"\r\n\t\t\t\t\t clickable=\"cardContainer.clickableCards\"\r\n\t\t\t\t\t selectable=\"cardContainer.selectableCards\"\r\n\t\t\t\t\t selection-changed=\"cardContainer.selectionChanged()\"\r\n\t\t\t\t\t container-data=\"cardContainer.containerData\"\r\n\t\t\t\t\t source=\"cardContainer.dataSource\"\r\n\t\t\t\t\t permanent-footer=\"cardContainer.permanentFooters\"\r\n\t\t\t\t\t card-controller=\"cardContainer.cardController\"\r\n\t\t\t\t\t card-controller-as=\"cardContainer.cardControllerAs\"\r\n\t\t\t\t\t card-as=\"cardContainer.cardAs\"></rl-card>\r\n\t\t</div>\r\n\r\n\t\t<div>\r\n\t\t\t<rl-busy loading=\"cardContainer.dataSource.loadingDataSet\" size=\"2x\"></rl-busy>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card-container-footer\">\r\n\t\t\t<div class=\"container-footer-template\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-9\">\r\n\t\t<rl-card-search></rl-card-search>\r\n\t</div>\r\n\t<div class=\"col-sm-3\">\r\n\t\t<rl-page-size></rl-page-size>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n\t<div ng-if=\"!cardContainer.selectableCards\" class=\"col-sm-6\">\r\n\t\t<rl-item-count></rl-item-count>\r\n\t</div>\r\n\t<span ng-if=\"cardContainer.selectableCards\">\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t\t<rl-selection-control></rl-selection-control>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t\t<rl-item-count></rl-item-count>\r\n\t\t</div>\r\n\t</span>\r\n\t<div class=\"col-sm-6\">\r\n\t\t<rl-pager class=\"pull-right\"></rl-pager>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';
	//# sourceMappingURL=column.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// /// <reference path='../../../typings/bootstrapDateTimePicker.d.ts' />
	var angular = __webpack_require__(1);
	var $ = __webpack_require__(14);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var jquery_service_1 = __webpack_require__(76);
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
/* 76 */
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
/* 77 */
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var $ = __webpack_require__(14);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var messageLog_service_1 = __webpack_require__(80);
	var messageLog_directive_1 = __webpack_require__(81);
	__export(__webpack_require__(80));
	__export(__webpack_require__(81));
	exports.moduleName = 'rl.ui.components.messageLog';
	angular.module(exports.moduleName, [])
	    .factory(messageLog_service_1.factoryName, messageLog_service_1.messageLogFactory)
	    .directive(messageLog_directive_1.directiveName, messageLog_directive_1.messageLog)
	    .controller(messageLog_directive_1.controllerName, messageLog_directive_1.MessageLogController);
	//# sourceMappingURL=messageLog.module.js.map

/***/ },
/* 80 */
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var messageLog_service_1 = __webpack_require__(80);
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var ratingBarBackgrounds_service_1 = __webpack_require__(84);
	var ratingBarClass_service_1 = __webpack_require__(85);
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
/* 84 */
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
/* 85 */
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __parentChildBehavior = typescript_angular_utilities_1.services.parentChildBehavior;
	var __observable = typescript_angular_utilities_1.services.observable;
	var __promiseUtility = typescript_angular_utilities_1.services.promise;
	var __numberUtility = typescript_angular_utilities_1.services.number;
	var jquery_service_1 = __webpack_require__(76);
	var grid = __webpack_require__(87);
	exports.responsiveCardGrid = grid;
	var card = __webpack_require__(92);
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var breakpoints_module_1 = __webpack_require__(88);
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var windowWrapper_service_1 = __webpack_require__(89);
	var visibleBreakpoint_service_1 = __webpack_require__(90);
	var breakpoints_service_1 = __webpack_require__(91);
	__export(__webpack_require__(34));
	__export(__webpack_require__(90));
	__export(__webpack_require__(91));
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var $ = __webpack_require__(14);
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(14);
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var windowWrapper_service_1 = __webpack_require__(89);
	var visibleBreakpoint_service_1 = __webpack_require__(90);
	var breakpoint_1 = __webpack_require__(34);
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var jquery_service_1 = __webpack_require__(76);
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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
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
/* 94 */
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var __observable = typescript_angular_utilities_1.services.observable;
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var card = __webpack_require__(96);
	exports.simpleCard = card;
	var list = __webpack_require__(97);
	exports.simpleCardList = list;
	exports.moduleName = 'rl.ui.components.simpleCardList';
	angular.module(exports.moduleName, [__observable.moduleName, __parentChild.moduleName])
	    .directive(list.directiveName, list.simpleCardList)
	    .controller(list.controllerName, list.SimpleCardListController)
	    .directive(card.directiveName, card.simpleCard)
	    .controller(card.controllerName, card.SimpleCardController);
	//# sourceMappingURL=simpleCardList.module.js.map

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/bootstrap-touchspin/bootstrap-touchspin.d.ts' />
	// /// <reference path='../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var autosaveDialog = __webpack_require__(103);
	exports.autosaveDialog = autosaveDialog;
	var breakpoints = __webpack_require__(88);
	exports.breakpoints = breakpoints;
	var contentProvider = __webpack_require__(110);
	exports.contentProvider = contentProvider;
	var dialog = __webpack_require__(105);
	exports.dialog = dialog;
	var jquery = __webpack_require__(76);
	exports.jquery = jquery;
	var windowWrapper = __webpack_require__(89);
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
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var autosaveDialog_service_1 = __webpack_require__(104);
	var autosaveDialog_controller_1 = __webpack_require__(109);
	__export(__webpack_require__(104));
	__export(__webpack_require__(109));
	exports.moduleName = 'rl.ui.services.autosaveDialog';
	angular.module(exports.moduleName, [])
	    .service(autosaveDialog_service_1.serviceName, autosaveDialog_service_1.AutosaveDialogService)
	    .controller(autosaveDialog_controller_1.controllerName, autosaveDialog_controller_1.AutosaveDialogController);
	//# sourceMappingURL=autosaveDialog.module.js.map

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(19);
	var dialog_service_1 = __webpack_require__(105);
	var autosaveDialog_controller_1 = __webpack_require__(109);
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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ng = __webpack_require__(1);
	var baseDialog_module_1 = __webpack_require__(106);
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var baseDialog_controller_1 = __webpack_require__(107);
	var baseDialog_service_1 = __webpack_require__(108);
	__export(__webpack_require__(107));
	__export(__webpack_require__(108));
	exports.moduleName = 'rl.ui.services.dialog.baseDialog';
	angular.module(exports.moduleName, [])
	    .controller(baseDialog_controller_1.controllerName, baseDialog_controller_1.BaseDialogController)
	    .service(baseDialog_service_1.serviceName, baseDialog_service_1.BaseDialogService);
	//# sourceMappingURL=baseDialog.module.js.map

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var baseDialog_service_1 = __webpack_require__(108);
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var baseDialog_controller_1 = __webpack_require__(107);
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
/* 109 */
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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path="../../../typings/jquery/jquery.d.ts" />
	'use strict';
	var ng = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(19);
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