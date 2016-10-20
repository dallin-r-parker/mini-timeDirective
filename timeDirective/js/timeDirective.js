angular.module('timeApp')
  .directive('showTime', function() {

    return {
      restirct: 'E',
      template:'<div> The current time is {{time}}</div>',
      link: function(scope, element, attrs){
        var currentTime = new Date();
        scope.time = currenTime.toString();
      }

    }
  });

  //restrict with A,E, or AE
