var app=angular.module('slips',['alert_module'])
				.constant(
							"CONSTANTS",{
											REGULAR: 0,
											BACKLOG: 1,
											SUCCESS_CODE: 1,
											ERROR_CODE: 0,
											NETWORK_ERROR: 'Some Error occurred! Please reload/refresh the page and try again.',
											DELETE_CONFIRMATION: 'Do you really want to delete this registration?',
											LOADING: 'Loading...'
										}
						);

app.controller('GetSlips', function( $scope, CONSTANTS, $http, alert ){

	$scope.registrationNumber="";

	$scope.CONSTANTS=CONSTANTS;
	$scope.alert=alert.initializeAlert();

	$scope.typeNo = 1;
	$scope.slips=[];
	$scope.studentDetails={};
	$scope.date={};

	$scope.refreshButton={};
	$scope.refreshButton.text='';
	$scope.refreshButton.disabled=false;

	$scope.fetchData=function fetchData(){

		$scope.refreshButton.disabled=true;
		$scope.refreshButton.text='Refreshing';
		resetView();
		$scope.alert=alert.successAlert( $scope.CONSTANTS.LOADING );

		$http({ 
			method:'POST',
			url:'slip/getSlips',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			transformRequest: function(obj) {
				var str = [];
				for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				return str.join("&");
			},
			data:{'typeNo':0}
		})
		.success(function(data, status) {
			console.log(data);
			if(data.code ==  $scope.CONSTANTS.SUCCESS_CODE ){
				//$scope.alert=alert.successAlert( data.message );
				$scope.hideAlert();
				$scope.slips=data.data.slips;
				$scope.studentDetails=data.data.studentDetails;
				$scope.date=data.data.date;
			}
			else{
				$scope.alert=alert.errorAlert( data.message );
				resetView();
			}
		})
		.error(function(data, status) {
				$scope.alert=alert.errorAlert( $scope.CONSTANTS.NETWORK_ERROR );
		});

		$scope.refreshButton.disabled=false;
		$scope.refreshButton.text='';
	}

	$scope.deleteRegistration=function deleteRegistration( registeredId ){
		//console.log(registeredId);
		if(!confirm( $scope.CONSTANTS.DELETE_CONFIRMATION ))
			return;
		$http({ 
			method:'POST',
			url:'slip/delete',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			transformRequest: function(obj) {
				var str = [];
				for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				return str.join("&");
			},
			data:{'registeredId':registeredId}
		})
		.success(function(data, status) {
			console.log(data);
			if(data.code ==  $scope.CONSTANTS.SUCCESS_CODE ){
				$scope.alert=alert.successAlert( data.message );
				deleteSlipView(registeredId);
			}
			else{
				$scope.alert=alert.errorAlert( data.message );
			}
		})
		.error(function(data, status) {
				$scope.alert=alert.errorAlert( $scope.CONSTANTS.NETWORK_ERROR );
		});
	}

	$scope.hideAlert=function hideAlert(){
		$scope.alert.show=false;
	}

	function resetView(){
		$scope.slips=[];
		$scope.studentDetails={};
		$scope.date={};
	}

	function deleteSlipView( registeredId )
	{
		$scope.slips.forEach(function(slip, index, array){
			if(slip.lists[0].registeredId==registeredId)
				array.splice(index,1);
		});
	}

});

app.directive('ngEnter', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if(event.which === 13) {
				scope.$apply(function (){
					scope.$eval(attrs.ngEnter);
				});

				event.preventDefault();
			}
		});
	};
});


