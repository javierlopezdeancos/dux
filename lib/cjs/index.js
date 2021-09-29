"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErreEle = void 0;
var ErreEle = /** @class */ (function () {
    function ErreEle(onPopState) {
        var _a;
        this.onPopState = onPopState;
        this._pathname = '';
        this._origin = (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.origin;
        this._params = new Map();
        this.subscribeOnPopState(this.onPopState);
    }
    ErreEle.prototype.subscribeOnPopState = function (onPopState) {
        window.onpopstate = function (event) {
            if (onPopState) {
                onPopState(event);
            }
        };
    };
    ErreEle.prototype.go = function (p, t, s) {
        if (t === void 0) { t = ''; }
        if (s === void 0) { s = {}; }
        window.history.pushState(s, t, p);
        this._pathname = '/' + p;
    };
    Object.defineProperty(ErreEle.prototype, "pathname", {
        get: function () {
            return this._pathname;
        },
        set: function (p) {
            this._pathname = p;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErreEle.prototype, "params", {
        get: function () {
            return this._params;
        },
        set: function (prms) {
            this._params = prms;
        },
        enumerable: false,
        configurable: true
    });
    ErreEle.prototype.setParam = function (key, value) {
        this._params.set(key, value);
    };
    ErreEle.prototype.getParam = function (key) {
        this._params.get(key);
    };
    Object.defineProperty(ErreEle.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        set: function (o) {
            this._origin = o;
        },
        enumerable: false,
        configurable: true
    });
    ErreEle.prototype.getParamFromURL = function (pn) {
        var params = new URL(document.location.href).searchParams;
        var param = params === null || params === void 0 ? void 0 : params.get(pn);
        return param;
    };
    ErreEle.prototype.setParamsFromURL = function () {
        var _this = this;
        var params = new URLSearchParams(document.location.href);
        if (params) {
            params.forEach(function (value, key) {
                _this._params.set(key, value);
            });
        }
    };
    ErreEle.prototype.getPathnameFromURL = function () {
        return document.location.pathname;
    };
    ErreEle.prototype.setOnPopState = function (onPopState) {
        this.onPopState = onPopState;
        this.subscribeOnPopState(this.onPopState);
    };
    return ErreEle;
}());
exports.ErreEle = ErreEle;
exports.default = new ErreEle();
