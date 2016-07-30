angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='map2.map'
      2) Using $state.go programatically:
        $state.go('map2.map');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /map/tab3/map
      /map/tab1/map
  */
  .state('map2.map', {
    url: '/map',
    views: {
      'tab3': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      },
      'tab1': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='map2.symptoms'
      2) Using $state.go programatically:
        $state.go('map2.symptoms');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /map/tab3/symptoms
      /map/tab2/symptoms
  */
  .state('map2.symptoms', {
    url: '/symptoms',
    views: {
      'tab3': {
        templateUrl: 'templates/symptoms.html',
        controller: 'symptomsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/symptoms.html',
        controller: 'symptomsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='map2.chestPain'
      2) Using $state.go programatically:
        $state.go('map2.chestPain');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /map/tab3/detail
      /map/tab2/detail
  */
  .state('map2.chestPain', {
    url: '/detail',
    views: {
      'tab3': {
        templateUrl: 'templates/chestPain.html',
        controller: 'chestPainCtrl'
      },
      'tab2': {
        templateUrl: 'templates/chestPain.html',
        controller: 'chestPainCtrl'
      }
    }
  })

  .state('headache', {
    url: '/page18',
    templateUrl: 'templates/headache.html',
    controller: 'headacheCtrl'
  })

  .state('map2', {
    url: '/map',
    templateUrl: 'templates/map2.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='map2.emergency'
      2) Using $state.go programatically:
        $state.go('map2.emergency');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /map/tab3/emergency
      /map/tab2/emergency
  */
  .state('map2.emergency', {
    url: '/emergency',
    views: {
      'tab3': {
        templateUrl: 'templates/emergency.html',
        controller: 'emergencyCtrl'
      },
      'tab2': {
        templateUrl: 'templates/emergency.html',
        controller: 'emergencyCtrl'
      }
    }
  })

  .state('myDetails', {
    url: '/my_details',
    templateUrl: 'templates/myDetails.html',
    controller: 'myDetailsCtrl'
  })

  .state('myDoctor', {
    url: '/my_doctor',
    templateUrl: 'templates/myDoctor.html',
    controller: 'myDoctorCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='map2.bealeyAve'
      2) Using $state.go programatically:
        $state.go('map2.bealeyAve');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /map/tab3/hospital
      /map/tab1/hospital
  */
  .state('map2.bealeyAve', {
    url: '/hospital',
    views: {
      'tab3': {
        templateUrl: 'templates/bealeyAve.html',
        controller: 'bealeyAveCtrl'
      },
      'tab1': {
        templateUrl: 'templates/bealeyAve.html',
        controller: 'bealeyAveCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='map2.navigation'
      2) Using $state.go programatically:
        $state.go('map2.navigation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /map/tab3/navigation
      /map/tab1/navigation
      /map/tab2/navigation
  */
  .state('map2.navigation', {
    url: '/navigation',
    views: {
      'tab3': {
        templateUrl: 'templates/navigation.html',
        controller: 'navigationCtrl'
      },
      'tab1': {
        templateUrl: 'templates/navigation.html',
        controller: 'navigationCtrl'
      },
      'tab2': {
        templateUrl: 'templates/navigation.html',
        controller: 'navigationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='map2.calling'
      2) Using $state.go programatically:
        $state.go('map2.calling');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /map/tab3/calling
      /map/tab2/calling
  */
  .state('map2.calling', {
    url: '/calling',
    views: {
      'tab3': {
        templateUrl: 'templates/calling.html',
        controller: 'callingCtrl'
      },
      'tab2': {
        templateUrl: 'templates/calling.html',
        controller: 'callingCtrl'
      }
    }
  })

  .state('registerWithGP', {
    url: '/register_gp',
    templateUrl: 'templates/registerWithGP.html',
    controller: 'registerWithGPCtrl'
  })

  .state('map2.help', {
    url: '/help',
    views: {
      'tab3': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='map2.seriousMedicalAttention'
      2) Using $state.go programatically:
        $state.go('map2.seriousMedicalAttention');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /map/tab3/medical_attention
      /map/tab2/medical_attention
  */
  .state('map2.seriousMedicalAttention', {
    url: '/medical_attention',
    views: {
      'tab3': {
        templateUrl: 'templates/seriousMedicalAttention.html',
        controller: 'seriousMedicalAttentionCtrl'
      },
      'tab2': {
        templateUrl: 'templates/seriousMedicalAttention.html',
        controller: 'seriousMedicalAttentionCtrl'
      }
    }
  })

  .state('map2.alertOthers', {
    url: '/alert_others',
    views: {
      'tab3': {
        templateUrl: 'templates/alertOthers.html',
        controller: 'alertOthersCtrl'
      }
    }
  })

  .state('map2.confirmAlert', {
    url: '/confirm_alert',
    views: {
      'tab3': {
        templateUrl: 'templates/confirmAlert.html',
        controller: 'confirmAlertCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='map2.appointment'
      2) Using $state.go programatically:
        $state.go('map2.appointment');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /map/tab3/appointment
      /map/tab2/appointment
  */
  .state('map2.appointment', {
    url: '/appointment',
    views: {
      'tab3': {
        templateUrl: 'templates/appointment.html',
        controller: 'appointmentCtrl'
      },
      'tab2': {
        templateUrl: 'templates/appointment.html',
        controller: 'appointmentCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='map2.urgent'
      2) Using $state.go programatically:
        $state.go('map2.urgent');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /map/tab3/urgent
      /map/tab2/urgent
  */
  .state('map2.urgent', {
    url: '/urgent',
    views: {
      'tab3': {
        templateUrl: 'templates/urgent.html',
        controller: 'urgentCtrl'
      },
      'tab2': {
        templateUrl: 'templates/urgent.html',
        controller: 'urgentCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='map2.liveChat'
      2) Using $state.go programatically:
        $state.go('map2.liveChat');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /map/tab3/chat
      /map/tab4/chat
  */
  .state('map2.liveChat', {
    url: '/chat',
    views: {
      'tab3': {
        templateUrl: 'templates/liveChat.html',
        controller: 'liveChatCtrl'
      },
      'tab4': {
        templateUrl: 'templates/liveChat.html',
        controller: 'liveChatCtrl'
      }
    }
  })

  .state('healthSystemInfomation', {
    url: '/health_system_info',
    templateUrl: 'templates/healthSystemInfomation.html',
    controller: 'healthSystemInfomationCtrl'
  })

  .state('eDProcedure', {
    url: '/ed_procedure',
    templateUrl: 'templates/eDProcedure.html',
    controller: 'eDProcedureCtrl'
  })

  .state('myMedicines', {
    url: '/my_medicines',
    templateUrl: 'templates/myMedicines.html',
    controller: 'myMedicinesCtrl'
  })

  .state('myBiometric', {
    url: '/my_biometric',
    templateUrl: 'templates/myBiometric.html',
    controller: 'myBiometricCtrl'
  })

$urlRouterProvider.otherwise('/map/help')

  

});