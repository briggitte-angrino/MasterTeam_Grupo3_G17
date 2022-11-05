"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var error_component_1 = require("./Plantilla/error/error.component");
var inicio_component_1 = require("./Plantilla/inicio/inicio.component");
var routes = [{
        path: "inicio",
        component: inicio_component_1.InicioComponent
    },
    {
        path: "/",
        pathMatch: 'full',
        redirectTo: '/inicio'
    }, {
        path: 'seguridad',
        loadChildren: function () { return Promise.resolve().then(function () { return require("./modulos/seguridad/seguridad.module"); }).then(function (x) { return x.SeguridadModule; }); }
    },
    {
        path: 'seguridad',
        loadChildren: function () { return Promise.resolve().then(function () { return require("./modulos/administracion/administracion.module"); }).then(function (x) { return x.AdministracionModule; }); }
    }, {
        path: '**',
        component: error_component_1.ErrorComponent
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
