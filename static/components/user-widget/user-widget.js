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
var router_1 = require('angular2/router');
var auth_1 = require('../../services/auth');
// Annotation section
var UserWidget = (function () {
    function UserWidget(auth) {
        this.auth = auth;
    }
    UserWidget = __decorate([
        angular2_1.Component({
            selector: 'user-widget'
        }),
        angular2_1.View({
            templateUrl: 'views/components/user-widget',
            directives: [angular2_1.NgIf, router_1.RouterLink]
        }),
        __param(0, angular2_1.Inject(auth_1.Auth))
    ], UserWidget);
    return UserWidget;
})();
exports.UserWidget = UserWidget;
