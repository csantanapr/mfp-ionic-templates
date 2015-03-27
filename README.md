##Ionic templates for MobileFirst Platform Foundation (MFP)

### Install

- Download the Ionic templates for MFP

```javascript
$ git clone https://github.com/csantanapr/mfp-ionic-templates.git
````

- Install bower cli

```javascript
$ npm install -g bower
````

- Install Ionic Library for each template

```javascript
$ cd tabs
$ bower install
````

### How to use

- Download and Install the [MobileFirst Platform Foundation (MFP) CLI](https://developer.ibm.com/mobilefirstplatform/install/#clui)


- Create and Start MFP Project using CLI

```javascript
$ mfp create mfproject
$ cd mfproject
$ mfp start
````

- Create Hybrid App with environments for iOS and Android

```javascript
$ mfp add hybrid coolApp
$ mfp add environment iphone
$ mfp add environment android
````

- Replace contents of common with one of the templates

```javascript
$ rm -r apps/coolApp/common
$ cp -r mfp-ionic-templates/tabs/common coolApp/
```

- Build, Deploy and Preview App

```javascript
$ cd apps/coolApp/
$ mfp bd && mfp preview
```

### Customizations
- By default the templates use [ngCloak](https://docs.angularjs.org/api/ng/directive/ngCloak) directive, this will take care of waiting until all children of body element are parsed and then unhide the app.
- If you would like to show the splash screen and hide it when the angular is done rendering all children from the body element, then change the property autoHideSplash to false in common/js/initOptions.js. The directive appReady in app.js will take care of calling WL.App.hideSplashScreen()

### Demo
![Picture of screenshot of Mobile Browser Simulator running Ionic App](mbs_preview.png "Mobile Browser Simulator")

### License
Apache 2.0
