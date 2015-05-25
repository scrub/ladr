var Errors = (function () {
    function Errors() {
        this.errors = [];
    }
    Object.defineProperty(Errors.prototype, "latest", {
        get: function () {
            return this.errors.length ? this.errors[this.errors.length - 1] : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Errors.prototype.add = function (error) {
        this.errors.push(error);
    };
    Errors.prototype.flush = function (error) {
        if (error) {
            var i = this.errors.indexOf(error);
            if (i >= 0) {
                this.errors.splice(i, 1);
            }
        }
        else {
            this.errors.splice(0, this.errors.length);
        }
    };
    return Errors;
})();
exports.Errors = Errors;
