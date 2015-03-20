##Ionic templates for MobileFirst Platform Foundation

### How to use

- Download the MobileFirst Platform Foundation (MFP) CLI
- Create MFP Project using CLI

```javascript
$ mfp create mfproject
$ cd mfproject
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
$ cp -r mfp-ionic-templates/coolApp/common coolApp/
```

- Build, Deploy and Preview App

```javascript
$ cd apps/coolApp/
$ mfp bd && mfp preview
```

### Licenses
MIT

### Other Licenses
Ionic and AngularJS