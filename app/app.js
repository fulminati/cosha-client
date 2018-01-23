
angular
    .module("app", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url: "/",
                template: "<home/>"
            });
    })
    .run(function($rootScope, $http) {
        $http.post("/i").then(function(resp) {
            $rootScope.devices = resp.data.devices;
            console.log($rootScope.devices);
        });
    });

