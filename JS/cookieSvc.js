angular.module('unsplashExtention').factory('userPreferences', ['$cookies', function($cookies) {
        return {
            setCookieData: function(settingData) {
              // if($scope.settings.userName === "Steve"){
              //   $('.console').show(300);
              //   $('.console').css('display', 'flex');
              // }
                settingData = JSON.stringify(settingData);
                $cookies.put('settingKey', settingData);
            },

            userSettings: function() {
                var settings = $cookies.get('settingKey');
                if (settings) {
                    settings = JSON.parse(settings);
                    return settings;
                }
                return {
                    userName: "enter name",
                    timeOption: false,
                    greetingOption: false,
                    weatherOption: false,
                    quoteOption: false,
                    backgroundOption: false,
                    // backgroundUrl: ' '

                };
            }
        };
    }

]);