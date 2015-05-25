if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
///<reference path="../../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var login_1 = require('../login/login');
var signup_1 = require('../signup/signup');
var user_widget_1 = require('../user-widget/user-widget');
var ladr_1 = require('../ladr/ladr');
// Annotation section
var App = (function () {
    function App() {
        this.name = 'Alice';
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            templateUrl: 'views/components/app',
            directives: [router_1.RouterOutlet, router_1.RouterLink, login_1.Login, signup_1.Signup, user_widget_1.UserWidget]
        }),
        router_1.RouteConfig([{
                path: '/',
                component: ladr_1.Ladr,
                as: 'ladr'
            }, {
                path: '/login',
                component: login_1.Login,
                as: 'login'
            }])
    ], App);
    return App;
})();
exports.App = App;
