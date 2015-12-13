# Native Facebook for IonicFramework

# Dependencies
* https://github.com/Wizcorp/phonegap-facebook-plugin

# Steps
* install the platform
  * ionic platform add ios
  * ionic platform add android
* install the plugin
  * cordova plugin add https://github.com/phonegap/phonegap-facebook-plugin.git --variable APP_ID="123456789" --variable APP_NAME="myApplication"
* install browser libs
  * bower install cordova-facebook-connect-plugin
  
# Troubleshooting
* Error 4201
  * It could be due to wrong APP_ID. do adb logcat and check for FB error. If need to remove platform (e.g. cordova platform remove android) and clean up plugins/fetch.json
