"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var ScriptService = /** @class */ (function () {
    function ScriptService() {
    }
    ScriptService.prototype.load = function (src, target) {
        var _this = this;
        this.isReady = false;
        this.src = src;
        var body = document.querySelector('body');
        this.useScript = new Subject_1.Subject();
        if (target) {
            this.isReady = true;
            this.useScript.complete();
        }
        else {
            var node = document.createElement('script');
            node.async = true;
            node.type = 'text/javascript';
            node.src = src;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.addEventListener('load', function () {
                _this.isReady = true;
                _this.useScript.complete();
            });
        }
        return this.useScript;
    };
    ScriptService = __decorate([
        core_1.Injectable()
    ], ScriptService);
    return ScriptService;
}());
exports.ScriptService = ScriptService;
