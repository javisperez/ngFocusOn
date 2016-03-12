# Angular Focus-On Directive
Focus on a field when the given condition is true.

# Installation

### Bower
You can use bower to install this directive by using:

``bower install --save ng-focus-on``

### Zip
If you don't want to use bower, you can download a zip file from this repo

# Usage

You must include the module as a dependency of yours, something like:

```Javascript
angular.module('example', ['ng-focus-on'])
```

# Example

**HTML**

```HTML
<body ng-app="example">
    <div ng-controller="sampleCtrl">
        <input type="text" ng-focus-on="hasFocus" />
    </div>
</body>
```

**JS**

```Javascript
angular.module('example', ['ng-focus-on'])

    .controller('sampleCtrl', function ($scope) {

        $scope.hasFocus = true;

    });
```
