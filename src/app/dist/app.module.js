"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var barra_navegacion_component_1 = require("./Plantilla/barra-navegacion/barra-navegacion.component");
var pie_pagina_component_1 = require("./Plantilla/pie-pagina/pie-pagina.component");
var inicio_component_1 = require("./Plantilla/inicio/inicio.component");
var error_component_1 = require("./Plantilla/error/error.component");
var logo_component_1 = require("./Plantilla/logo/logo.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                barra_navegacion_component_1.BarraNavegacionComponent,
                pie_pagina_component_1.PiePaginaComponent,
                inicio_component_1.InicioComponent,
                error_component_1.ErrorComponent,
                logo_component_1.LogoComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
