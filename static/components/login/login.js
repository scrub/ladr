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
///<reference path="../../typings/angular2/router.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var ng_zone_1 = require('angular2/src/core/zone/ng_zone');
var auth_1 = require('../../services/auth');
var error_list_1 = require('../error-list/error-list');
var errors_1 = require('../../services/errors');
var Login = (function () {
    function Login(zone, auth, errors, router) {
        this.zone = zone;
        this.auth = auth;
        this.router = router;
        this.errors = errors;
    }
    Login.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        this.errors.flush();
        this.auth
            .login(username, password)
            .then(function (result) {
            _this.router.parent.navigate('/');
        }, function (err) {
            // NOTE: WTF is this zone.run bullshit! $evalAsync mkII...
            _this.zone.run(function () {
                _this.errors.add('Login failed');
            });
        });
    };
    Login.prototype.signup = function (event) {
        event.preventDefault();
    };
    Login = __decorate([
        angular2_1.Component({
            selector: 'login'
        }),
        angular2_1.View({
            templateUrl: 'views/components/login',
            directives: [router_1.RouterLink, error_list_1.ErrorList]
        }),
        __param(0, angular2_1.Inject(ng_zone_1.NgZone)),
        __param(1, angular2_1.Inject(auth_1.Auth)),
        __param(2, angular2_1.Inject(errors_1.Errors)),
        __param(3, angular2_1.Inject(router_1.Router))
    ], Login);
    return Login;
})();
exports.Login = Login;
