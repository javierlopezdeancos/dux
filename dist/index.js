"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErreEle = void 0;
class ErreEle {
    constructor(onPopState) {
        var _a;
        this.onPopState = onPopState;
        this._pathname = '';
        this._origin = (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.origin;
        this._params = new Map();
        this.subscribeOnPopState(this.onPopState);
    }
    subscribeOnPopState(onPopState) {
        window.onpopstate = function (event) {
            if (onPopState) {
                onPopState(event);
            }
        };
    }
    go(p, t = '', s = {}) {
        window.history.pushState(s, t, p);
        this._pathname = '/' + p;
    }
    get pathname() {
        return this._pathname;
    }
    set pathname(p) {
        this._pathname = p;
    }
    get params() {
        return this._params;
    }
    set params(prms) {
        this._params = prms;
    }
    setParam(key, value) {
        this._params.set(key, value);
    }
    getParam(key) {
        this._params.get(key);
    }
    get origin() {
        return this._origin;
    }
    set origin(o) {
        this._origin = o;
    }
    getParamFromURL(pn) {
        const params = new URL(document.location.href).searchParams;
        const param = params === null || params === void 0 ? void 0 : params.get(pn);
        return param;
    }
    setParamsFromURL() {
        const params = new URL(document.location.href).searchParams;
        if (params) {
            for (const [key, value] of params.entries()) {
                this._params.set(key, value);
            }
        }
    }
    getPathnameFromURL() {
        return document.location.pathname;
    }
    setOnPopState(onPopState) {
        this.onPopState = onPopState;
        this.subscribeOnPopState(this.onPopState);
    }
}
exports.ErreEle = ErreEle;
exports.default = new ErreEle();
//# sourceMappingURL=index.js.map