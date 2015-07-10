app.controller('MainController', ['$scope', 'places', function($scope, places){
	/*angular.extend($scope, {
    center: {
      lat: 40.741934,
      lng: -74.004897,
      zoom: 17
  	}
  });*/
  var vm = this;
  vm.center = {
    lat: 40.741934,
    lng: -74.004897,
    zoom: 17
  };

  // listing the events to listen for
  vm.events = {
    map: {
      enable: ['dragend', 'moveend', 'zoomend'],
      logic: 'emit'
    }
  };

  $scope.$on('leafletDirectiveMap.dragend', function(event){
        console.log("Finished dragging");
    });

  places.success(function(markers){
  	vm.geodata = markers;
    vm.mapMarkers = geodataToMarkers(vm.geodata);
    console.log(vm.geodata, vm.mapMarkers);
  });
}]);