## LK-COMPONENTS




###### Contents:
This repository contains resuable directives, components, and their respective style sheets. The goal is to include our most common custom directives and functionality as to ease their replication in later projects.

###### Instructions:

	bower install lk-angular-components

This package is installed to the bower_components directory within the application. To use the custom directives we need to include them in our applications index.html file:

	<link rel="stylesheet" href="bower_components/lk-angular-components/components.css">

	<script src="bower_components/lk-angular-components/components.js"></script>

and finally include them in our main module:

	angular.module('YourAppsName', ['lk.components'])
	
	
`note` - running bower install will install this package in a local bower_components directory unless a different location is specified in a local .bowerrc file. If a local .bowerrc file specifies a different location (such as 'vendor'), then the above paths to include the module will obviously be different according to your apps structure.
