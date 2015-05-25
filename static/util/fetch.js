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
var ng_zone_1 = require('angular2/src/core/zone/ng_zone');
var Fetcher = (function () {
    function Fetcher(zone) {
        this.zone = zone;
    }
    Fetcher.prototype.fetch = function (uri, opts) {
        return Zone.bindPromiseFn(fetch)(uri, opts).then(function (resp) {
            if (resp.status >= 200 && resp.status < 300) {
                return resp.json();
            }
            else {
                return resp.text().then(function (text) {
                    return Promise.reject(text);
                });
            }
        });
    };
    Fetcher = __decorate([
        __param(0, angular2_1.Inject(ng_zone_1.NgZone))
    ], Fetcher);
    return Fetcher;
})();
exports.Fetcher = Fetcher;
