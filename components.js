'use strict';

angular.module('lk.components', [])

// .controller('ComponentCtrl', ['$scope', function ($scope) {
	//
	// No controller for components, we want to inject info from
	// individual controllers in our main app's structure
	//
// }])

.directive('lkHeader', [function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'bower_components/lk-angular-components/templates/header.tpl.html',
		scope: {
			options: "="
		},
		link: function (scope, iElement, iAttrs) {
		}
	};
}])

.directive('lkSidebar', [function ($scope) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'bower_components/lk-angular-components/templates/sidebar.tpl.html',
		scope: {
			options: '='
		},
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}])

.directive('lkCheckbox', [function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'bower_components/lk-angular-components/templates/checkbox.tpl.html',
		scope: {
			options: "="
		},
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}])

.directive('lkRadio', [function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'bower_components/lk-angular-components/templates/radio.tpl.html',
		scope: {
			options: "="
		},
		link: function (scope, iElement, iAttrs) {
		
		}
	};
}])


.directive('lkSelect', [function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'bower_components/lk-angular-components/templates/select.tpl.html',
		scope: {
			options: "="
		},
		link: function (scope, iElement, iAttrs) {

		}
	};
}]);

/************************************************************************************\
						    AN EXAMPLE CONTROLLER ND TEMPLATE

.controller('MainCtrl', function ($scope) {

    // Component variables and options
    $scope.title = 'Header';

		$scope.menuItems = [
			'Home',
			'About',
			'Contact'
		];

		$scope.radioOptions = [
			'Toggle this custom radio',
			'Or toggle this other custom radio'
		];

		$scope.checkboxOptions = [
			'Check this custom checkbox',
			'Another Custom Checkbox'
		];

		$scope.selectItems = [
			'Open this select menu',
			'1',
			'2',
			'3'
		];
  });

<div class="lk-wrapper" id="wrapper">
  <div class="lk-content lk-squeeze">
    
    <!-- Testing components -->
    <lk-header title="title"></lk-header>

    <lk-sidebar menu="menuItems"></lk-sidebar>

    <lk-checkbox options="checkboxOptions"></lk-checkbox>

    <lk-radio options="radioOptions"></lk-radio>

    <lk-select items="selectItems"></lk-select>

  </div> <!-- end lk-content -->
</div> <!-- end lk-wrapper -->

\************************************************************************************/