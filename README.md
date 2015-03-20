##Ionic templates for MobileFirst Platform Foundation

### Install

- Download the template

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
$ mfpdev add environment iphone
$ mfpdev add environment android
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

### License
Apache 2.0