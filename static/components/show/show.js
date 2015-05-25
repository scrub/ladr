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
var element_ref_1 = require('angular2/src/core/compiler/element_ref');
var lang_1 = require('angular2/src/facade/lang');
var Show = (function () {
    function Show(elementRef) {
        this.elementRef = elementRef;
        this.element = elementRef.domElement;
        this.prevCondition = null;
    }
    Object.defineProperty(Show.prototype, "show", {
        set: function (newCondition /* boolean */) {
            if (newCondition && (lang_1.isBlank(this.prevCondition) || !this.prevCondition)) {
                this.prevCondition = true;
                this.hide = false;
            }
            else if (!newCondition && (lang_1.isBlank(this.prevCondition) || this.prevCondition)) {
                this.prevCondition = false;
                this.hide = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Show = __decorate([
        angular2_1.Directive({
            selector: '[show]',
            properties: { 'show': 'show' },
            hostProperties: {
                'hide': 'class.hidden'
            }
        }),
        __param(0, angular2_1.Inject(element_ref_1.ElementRef))
    ], Show);
    return Show;
})();
exports.Show = Show;
