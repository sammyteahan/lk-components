'use strict';

angular.module('lk.components', [])

// .controller('ComponentCtrl', ['$scope', function ($scope) {
	// No controller for components, we want to inject info from
	// individual controllers in our main app's structure
// }])

.directive('lkHeader', [function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'lk-components/templates/header.tpl.html',
		scope: {
			title: "="
		},
		link: function (scope, iElement, iAttrs) {
		}
	};
}])

.directive('lkSidebar', [function ($scope) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'lk-components/templates/sidebar.tpl.html',
		scope: {
			menu: '='
		},
		link: function (scope, iElement, iAttrs) {
			console.log(scope.menu);
		}
	};
}])

.directive('lkCheckbox', [function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'lk-components/templates/checkbox.tpl.html',
		scope: {
			options: "="
		},
		link: function (scope, iElement, iAttrs) {
			console.log(scope.options);
		}
	};
}])

.directive('lkRadio', [function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'lk-components/templates/radio.tpl.html',
		scope: {
			options: "="
		},
		link: function (scope, iElement, iAttrs) {
			console.log(scope.options);
		}
	};
}])


.directive('lkSelect', [function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'lk-components/templates/select.tpl.html',
		scope: {
			items: "="
		},
		link: function (scope, iElement, iAttrs) {
			console.log(scope.items);
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