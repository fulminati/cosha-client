
angular
    .module("app", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url: "/",
                template: "<home/>"
            })
            .state("edit-devices", {
                url: "/edit-devices",
                template: "<edit-devices/>"
            });
    })
    .run(function($rootScope, $http) {
        $http.post("/i").then(function(resp) {
            $rootScope.devices = resp.data.devices;
            console.log($rootScope.devices);
        });
    })
    .run(function() {
        $(document).on('click', '[data-target]', function() {
            $($(this).attr('data-target')).addClass('is-active');
        });
        $(document).on('click', '.modal-background', function() {
            $(this).parent().removeClass('is-active');
        });
    });

