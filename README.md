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
