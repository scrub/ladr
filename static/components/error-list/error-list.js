if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
///<reference path="../../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var errors_1 = require('../../services/errors');
var show_1 = require('../show/show');
// Annotation section
var ErrorList = (function () {
    function ErrorList(errorService) {
        this.errorService = errorService;
    }
    ErrorList = __decorate([
        angular2_1.Component({
            selector: 'error-list'
        }),
        angular2_1.View({
            templateUrl: 'views/components/error-list',
            directives: [angular2_1.NgFor, show_1.Show]
        }),
        __param(0, angular2_1.Inject(errors_1.Errors))
    ], ErrorList);
    return ErrorList;
})();
exports.ErrorList = ErrorList;
