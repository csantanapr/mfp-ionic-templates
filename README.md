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
### How to use

- Download and Install the [MobileFirst Platform Foundation (MFP) CLI](https://developer.ibm.com/mobilefirstplatform/install/#clui) 7.1 (August 2015)

- Create a Cordova App using one of the templates

```javascript
$ mfp cordova create myapp -p ios -t mfp-ionic-templates/blank
$ cd myapp
````

- Install Ionic Library and NPM dependencies

```javascript
$ bower install
$ npm install
````

- Use mfp cli to add additional platforms and plugins

```javascript
$ mfp cordova platform add 
$ mfp cordova platform add android
$ mfp cordova plugin add 
$ mfp cordova plugin add cordova-plugin-mfp-jsonstore
$ mfp cordova plugin add cordova-plugin-mfp-push

````

- Use ionic cli for other cordova actions

```javascript
$ ionic prepare
$ ionic build
$ ionic serve
$ ionic emulate
$ ionic run
```

- To Preview using MobileFirst Browser Simulator you need a local development Server with a backend

```javascript
$ mfp create backend
$ cd backend
$ mfp start
$ cd ../myapp/
$ mfp cordova preview
```

- Push the app to a remote server like the one in Bluemix Containers (Docker)

```javascript
$ mfp server add
$ mfp push <servername>
$ mfp console <servername>
```


### License
Apache 2.0
