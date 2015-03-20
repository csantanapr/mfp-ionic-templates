##Ionic templates for MobileFirst Platform Foundation

### How to use

1. Download the MobileFirst Platform Foundation (MFP) CLI
2. Create MFP Project using CLI

```javascript
$mfp create mfproject
cd mfproject
````

3. Create Hybrid App with environments for iOS and Android

```javascript
$mfp add hybrid coolApp
$ mfpdev add environment iphone
$ mfpdev add environment android
````

4. Replace contents of common with one of the template

```javascript
$ rm -r apps/coolApp/common
$ cp -r mfp-ionic-templates/coolApp/common coolApp/
```

5. Build, Deploy and Preview App

```javascript
$ cd apps/coolApp/
$ mfp bd && mfp preview
```

### Licenses
MIT

### Other Licenses
Ionic and AngularJS