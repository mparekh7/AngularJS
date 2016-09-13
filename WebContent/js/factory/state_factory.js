'use strict';

angular.module('demoApp').factory('StateService', function() {
	var message = 'Hello Message';
	var getMessage = function() {
		return message;
	};
	var setMessage = function(m) {
		message = m;
	};

	return {
		getMessage : getMessage,
		setMessage : setMessage
	}
})