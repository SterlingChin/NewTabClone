angular.module('app').factory('userPreferences', ['$cookies', function ($cookies) {
    //  ┬ ┬┌─┐┌─┐┬─┐  ┌─┐┬─┐┌─┐┌─┐┌─┐
    //  │ │└─┐├┤ ├┬┘  ├─┘├┬┘├┤ ├┤ └─┐
    //  └─┘└─┘└─┘┴└─  ┴  ┴└─└─┘└  └─┘
    return {
      setCookieData: function (settingData) {
        settingData = JSON.stringify(settingData);
        $cookies.put('settingKey', settingData);
      },

      userSettings: function () {
        var settings = $cookies.get('settingKey');
        if (settings) {
          settings = JSON.parse(settings);
          return settings;
        }
        return {
          userName: "enter name",
          zipcode: 0,
          timeOption: false,
          greetingOption: false,
          weatherOption: false,
          quoteOption: false,
          forcastOption2: false,
        };
      }
    };
  }

]);
