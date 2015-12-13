# Native Facebook for IonicFramework

# Dependencies
* https://github.com/Wizcorp/phonegap-facebook-plugin
* https://github.com/patnolanireland/cordova-facebook-connect-plugin

# Steps
* install Ionic libraries with a blank template
  * ionic start myApplication blank
* install the platform
  * ionic platform add ios
  * ionic platform add android
* install the plugin
  * cordova plugin add https://github.com/phonegap/phonegap-facebook-plugin.git --variable APP_ID="123456789" --variable APP_NAME="myApplication"
* install browser libs
  * bower install cordova-facebook-connect-plugin
* update facebookAppId in www/js/constants.js, used by cordova-facebook-connect-plugin during browser mode 
  
# Troubleshooting
* Error 4201
  * It could be due to wrong APP_ID. do adb logcat and check for FB error. If need to remove platform (e.g. cordova platform remove android) and clean up plugins/fetch.json
