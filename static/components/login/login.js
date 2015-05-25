if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
///<reference path="../../typings/angular2/angular2.d.ts" />
///<reference path="../../typings/angular2/router.d.ts" />
var angular2_1 = require('angular2/angular2');
var fetch_1 = require('../../util/fetch');
var router_1 = require('angular2/router');
var Login = (function () {
    function Login() {
    }
    Login.prototype.login = function (event, username, password) {
        event.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username, password: password
            })
        })
            .then(fetch_1.status)
            .then(fetch_1.json)
            .then(function (response) {
            localStorage.setItem('jwt', response.id_token);
            //this.router.parent.navigate('/home');
        })
            .catch(function (error) {
            alert(error.message);
            console.log(error.message);
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
            directives: [router_1.RouterLink]
        })
    ], Login);
    return Login;
})();
exports.Login = Login;
