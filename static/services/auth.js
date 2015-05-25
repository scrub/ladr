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
var angular2_1 = require('angular2/angular2');
var fetch_1 = require('../util/fetch');
var Auth = (function () {
    function Auth(fetcher) {
        this.fetcher = fetcher;
        this.authenticated = false;
    }
    Auth.prototype.login = function (user, pass, done, onErr) {
        return this.fetcher.fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: 'username=' + encodeURIComponent(user) +
                '&password=' + encodeURIComponent(pass)
        });
    };
    Auth = __decorate([
        __param(0, angular2_1.Inject(fetch_1.Fetcher))
    ], Auth);
    return Auth;
})();
exports.Auth = Auth;
