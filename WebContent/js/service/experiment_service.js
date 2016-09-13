'use strict';

angular.module('demoApp').service('ExperimentsService', function () {
    var service = this,
    experiments = [
        {name: 'Experiment 1', description: 'This is an experiment', completed:0},
        {name: 'Experiment 2', description: 'This is an experiment', completed:0},
        {name: 'Experiment 3', description: 'This is an experiment', completed:0},
        {name: 'Experiment 4', description: 'This is an experiment', completed:0}
    ];

service.getExperiments = function() {
    return experiments;
};
})