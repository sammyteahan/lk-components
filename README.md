## LK-COMPONENTS


###### Contents:
This repository contains resuable directives, components, and their respective style sheet. The goal is to include our most common custom directives and functionality as to ease their replication in later projects.

###### Instructions:

	bower install lk-angular-components

This package is installed to the vendor directory within the lightning kite angular scaffold. To use the custom directives we need to include them in our applications index.html file:

	<link rel="stylesheet" href="vendor/lk-angular-components/components.css">

	<script src="vendor/lk-angular-components/components.js"></script>

and finally include them in our main module (or whatever module you want to use them in):

	angular.module('YourAppsName', ['lk.components'])
	
`note` - running bower install will install a package to a local bower_components directory unless specified by a local .bowerrc file. In this case, we always use the .bowerrc file to send bower packages to the vendor directory. Without it this package will be installed to bower_components and the above file paths will obviously need to reflect that change.

###### Examples:
The goal was to have each directive be dependent upon the modules controller into which it was injected. Doing so will allow us to re-use the same directive with different functionality accross our application. Each directive has an `options` scope variable that allows us to inject information into it via the controller. E.g.

	.controller('MainCtrl', function($scope) {

	  $scope.menuItems = [
		'Home',
		'About',
		'Contact'
	  ];

	})

	/**
	* template example
	*/
	<div class="lk-wrapper">
	  <div class="lk-content">

	  <lk-sidebar options="menuItems"></lk-sidebar>

	  </div>
	</div>