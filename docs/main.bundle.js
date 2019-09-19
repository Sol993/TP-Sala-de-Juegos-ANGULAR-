webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__ = __webpack_require__("./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__ = __webpack_require__("./src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__servicios_mi_http_mi_http_service__ = __webpack_require__("./src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servicios_paises_service__ = __webpack_require__("./src/app/servicios/paises.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servicios_jugadores_service__ = __webpack_require__("./src/app/servicios/jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servicios_archivos_jugadores_service__ = __webpack_require__("./src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_error_error_component__ = __webpack_require__("./src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_principal_principal_component__ = __webpack_require__("./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_menu_menu_component__ = __webpack_require__("./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ruteando_ruteando_module__ = __webpack_require__("./src/app/ruteando/ruteando.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_listado_listado_component__ = __webpack_require__("./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__servicios_juego_service_service__ = __webpack_require__("./src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_listados_listados_component__ = __webpack_require__("./src/app/componentes/listados/listados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_juegos_juegos_component__ = __webpack_require__("./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_registro_registro_component__ = __webpack_require__("./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__componentes_menu_card_menu_card_component__ = __webpack_require__("./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_cabecera_cabecera_component__ = __webpack_require__("./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__componentes_quien_soy_quien_soy_component__ = __webpack_require__("./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__componentes_anagrama_anagrama_component__ = __webpack_require__("./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__componentes_listado_de_paises_listado_de_paises_component__ = __webpack_require__("./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__componentes_mapa_de_google_mapa_de_google_component__ = __webpack_require__("./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__componentes_input_jugadores_input_jugadores_component__ = __webpack_require__("./src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_sexo_pipe__ = __webpack_require__("./src/app/pipes/sexo.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__componentes_menu_mio_menu_mio_component__ = __webpack_require__("./src/app/componentes/menu-mio/menu-mio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';













// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */],
            __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__["a" /* ListadoDeResultadosComponent */],
            __WEBPACK_IMPORTED_MODULE_12__componentes_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_13__componentes_principal_principal_component__["a" /* PrincipalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */],
            __WEBPACK_IMPORTED_MODULE_15__componentes_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_16__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_19__componentes_listado_listado_component__["a" /* ListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_22__componentes_listados_listados_component__["a" /* ListadosComponent */],
            __WEBPACK_IMPORTED_MODULE_23__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
            __WEBPACK_IMPORTED_MODULE_24__componentes_registro_registro_component__["a" /* RegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_25__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */],
            __WEBPACK_IMPORTED_MODULE_26__componentes_cabecera_cabecera_component__["a" /* CabeceraComponent */],
            __WEBPACK_IMPORTED_MODULE_27__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */],
            __WEBPACK_IMPORTED_MODULE_28__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */],
            __WEBPACK_IMPORTED_MODULE_29__componentes_listado_de_paises_listado_de_paises_component__["a" /* ListadoDePaisesComponent */],
            __WEBPACK_IMPORTED_MODULE_30__componentes_mapa_de_google_mapa_de_google_component__["a" /* MapaDeGoogleComponent */],
            __WEBPACK_IMPORTED_MODULE_20__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_32__componentes_input_jugadores_input_jugadores_component__["a" /* InputJugadoresComponent */],
            __WEBPACK_IMPORTED_MODULE_33__pipes_sexo_pipe__["a" /* SexoPipe */],
            __WEBPACK_IMPORTED_MODULE_34__componentes_menu_mio_menu_mio_component__["a" /* MenuMioComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_18__ruteando_ruteando_module__["a" /* RuteandoModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_31__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
            })
            // NgbModule.forRoot(MiRuteo),
            // importo el ruteo
            // RouterModule.forRoot(MiRuteo)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_21__servicios_juego_service_service__["a" /* JuegoServiceService */], __WEBPACK_IMPORTED_MODULE_8__servicios_mi_http_mi_http_service__["a" /* MiHttpService */], __WEBPACK_IMPORTED_MODULE_9__servicios_paises_service__["a" /* PaisesService */], __WEBPACK_IMPORTED_MODULE_11__servicios_archivos_jugadores_service__["a" /* ArchivosJugadoresService */], __WEBPACK_IMPORTED_MODULE_10__servicios_jugadores_service__["a" /* JugadoresService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/clases/juego-adivina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAdivina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("./src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAdivina = (function (_super) {
    __extends(JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, "Adivina el número", gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-adivina.js.map

/***/ }),

/***/ "./src/app/clases/juego-agilidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAgilidad; });
var JuegoAgilidad = (function () {
    function JuegoAgilidad() {
    }
    return JuegoAgilidad;
}());

//# sourceMappingURL=juego-agilidad.js.map

/***/ }),

/***/ "./src/app/clases/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());

//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}"

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--app-menu></app-menu-->\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{nuevoJuego.nombre}}!\r\n  </h1>\r\n </div>\r\n<h2></h2>\r\n<form name=\"juego\">\r\n\r\n   <label>ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\r\n \r\n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\r\n \r\n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\r\n \r\n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n\r\n\r\n</form>\r\n<div id=\"snackbar\">{{Mensajes}}</div>"

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("./src/app/clases/juego-adivina.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdivinaElNumeroComponent = (function () {
    function AdivinaElNumeroComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    return AdivinaElNumeroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__("./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__("./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaElNumeroComponent);

var _a;
//# sourceMappingURL=adivina-el-numero.component.js.map

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \r\n<h1> listado </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n\r\n"

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdivinaMasListadoComponent = (function () {
    function AdivinaMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AdivinaMasListadoComponent.prototype.ngOnInit = function () {
    };
    AdivinaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    };
    return AdivinaMasListadoComponent;
}());
AdivinaMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-mas-listado',
        template: __webpack_require__("./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
        styles: [__webpack_require__("./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaMasListadoComponent);

//# sourceMappingURL=adivina-mas-listado.component.js.map

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--app-menu></app-menu-->\r\n<!-- index.html -->\r\n\r\n\r\n<form name=\"juego\">\r\n<ul>\r\n   <li>\r\n   Primer número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n  \r\n  </li>\r\n  <li>\r\n   Operador: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n    \r\n  </li>\r\n  <li>\r\n   Segundo número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n    \r\n  </li>\r\n  <li>\r\n    Respuesta: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n     \r\n   </li>\r\n  <li>\r\n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button></h2>\r\n  </li>\r\n  <li>\r\n    <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\">Nuevo</button></h2>\r\n  </li>\r\n  <li>\r\n    <h2><p><i class=\"fa fa-spinner fa-spin\"></i>Esperando numero...</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n  </li>\r\n</ul>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__ = __webpack_require__("./src/app/clases/juego-agilidad.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgilidadAritmeticaComponent = (function () {
    function AgilidadAritmeticaComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]();
        console.info("Inicio agilidad");
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
    };
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.ocultarVerificar = false;
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            console.log("llego", _this.Tiempo);
            if (_this.Tiempo == 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 5;
            }
        }, 900);
    };
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        clearInterval(this.repetidor);
    };
    return AgilidadAritmeticaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
AgilidadAritmeticaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-aritmetica',
        template: __webpack_require__("./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
        styles: [__webpack_require__("./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadAritmeticaComponent);

var _a;
//# sourceMappingURL=agilidad-aritmetica.component.js.map

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \r\n<h1> Listado de Resultados </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>"

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgilidadMasListadoComponent = (function () {
    function AgilidadMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AgilidadMasListadoComponent.prototype.ngOnInit = function () {
    };
    AgilidadMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    };
    return AgilidadMasListadoComponent;
}());
AgilidadMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-mas-listado',
        template: __webpack_require__("./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
        styles: [__webpack_require__("./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadMasListadoComponent);

//# sourceMappingURL=agilidad-mas-listado.component.js.map

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  anagrama works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnagramaComponent = (function () {
    function AnagramaComponent() {
    }
    AnagramaComponent.prototype.ngOnInit = function () {
    };
    return AnagramaComponent;
}());
AnagramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-anagrama',
        template: __webpack_require__("./src/app/componentes/anagrama/anagrama.component.html"),
        styles: [__webpack_require__("./src/app/componentes/anagrama/anagrama.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AnagramaComponent);

//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.css":
/***/ (function(module, exports) {

module.exports = ".panel\r\n{\r\n    height: 200px;\r\n    background-image: url(\"/assets/imagenes/prueba1.gif\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n}\r\n\r\n\r\n.hero-text {\r\ntext-align: center;\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\ncolor: #fcfcfc;\r\n}\r\n\r\n\r\n.hero-text a {\r\nborder: none;\r\noutline: 0;\r\ndisplay: inline-block;\r\npadding: 10px 25px;\r\ncolor: black;\r\nbackground-color: #ddd;\r\ntext-align: center;\r\ncursor: pointer;\r\n}\r\n\r\n\r\n.hero-text a:hover {\r\nbackground-color: #555;\r\ncolor: white;\r\n}\r\n\r\n\r\np\r\n{\r\n    background-color:#1c352f;\r\n    color: white;\r\n    opacity: 0.9;\r\n    border-radius: 20px / 10px;\r\n    text-shadow: 2px 2px 4px black;\r\n}\r\n\r\n\r\n/*\r\nIntento de Menu!\r\n*/\r\n\r\n\r\n#menuToggle\r\n{\r\n  display: block;\r\n  position: relative;\r\n  top: 50px;\r\n  left: 50px;\r\n  \r\n  z-index: 1;\r\n  \r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n\r\n#menuToggle input\r\n{\r\n  display: block;\r\n  width: 40px;\r\n  height: 32px;\r\n  position: absolute;\r\n  top: -7px;\r\n  left: -5px;\r\n  \r\n  cursor: pointer;\r\n  \r\n  opacity: 0; /* hide this */\r\n  z-index: 2; /* and place it over the hamburger */\r\n  \r\n  -webkit-touch-callout: none;\r\n}\r\n\r\n\r\n/*\r\n * Just a quick hamburger\r\n */\r\n\r\n\r\n#menuToggle span\r\n{\r\n  display: block;\r\n  width: 33px;\r\n  height: 4px;\r\n  margin-bottom: 5px;\r\n  position: relative;\r\n  \r\n  background: #cdcdcd;\r\n  border-radius: 3px;\r\n  \r\n  z-index: 1;\r\n  \r\n  -webkit-transform-origin: 4px 0px;\r\n  \r\n          transform-origin: 4px 0px;\r\n  \r\n  -webkit-transition: background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease,\r\n              -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease,\r\n              -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease;\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease,\r\n              -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n}\r\n\r\n\r\n#menuToggle span:first-child\r\n{\r\n  -webkit-transform-origin: 0% 0%;\r\n          transform-origin: 0% 0%;\r\n}\r\n\r\n\r\n#menuToggle span:nth-last-child(2)\r\n{\r\n  -webkit-transform-origin: 0% 100%;\r\n          transform-origin: 0% 100%;\r\n}\r\n\r\n\r\n/* \r\n * Transform all the slices of hamburger\r\n * into a crossmark.\r\n */\r\n\r\n\r\n#menuToggle input:checked ~ span\r\n{\r\n  opacity: 1;\r\n  -webkit-transform: rotate(45deg) translate(-2px, -1px);\r\n          transform: rotate(45deg) translate(-2px, -1px);\r\n  background: #232323;\r\n}\r\n\r\n\r\n/*\r\n * But let's hide the middle one.\r\n */\r\n\r\n\r\n#menuToggle input:checked ~ span:nth-last-child(3)\r\n{\r\n  opacity: 0;\r\n  -webkit-transform: rotate(0deg) scale(0.2, 0.2);\r\n          transform: rotate(0deg) scale(0.2, 0.2);\r\n}\r\n\r\n\r\n/*\r\n * Ohyeah and the last one should go the other direction\r\n */\r\n\r\n\r\n#menuToggle input:checked ~ span:nth-last-child(2)\r\n{\r\n  -webkit-transform: rotate(-45deg) translate(0, -1px);\r\n          transform: rotate(-45deg) translate(0, -1px);\r\n}\r\n\r\n\r\n/*\r\n * Make this absolute positioned\r\n * at the top left of the screen\r\n */\r\n\r\n\r\n#menu\r\n{\r\n  position: absolute;\r\n  width: 300px;\r\n  margin: -100px 0 0 -50px;\r\n  padding: 50px;\r\n  padding-top: 125px;\r\n  \r\n  background: #ededed;\r\n  list-style-type: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  /* to stop flickering of text in safari */\r\n  \r\n  -webkit-transform-origin: 0% 0%;\r\n  \r\n          transform-origin: 0% 0%;\r\n  -webkit-transform: translate(-100%, 0);\r\n          transform: translate(-100%, 0);\r\n  \r\n  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n}\r\n\r\n\r\n#menu li\r\n{\r\n  padding: 10px 0;\r\n  font-size: 22px;\r\n}\r\n\r\n\r\n/*\r\n * And let's slide it in from the left\r\n */\r\n\r\n\r\n#menuToggle input:checked ~ ul\r\n{\r\n  -webkit-transform: none;\r\n          transform: none;\r\n}"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"hero-text\">\r\n     <h1 style=\"font-size:50px\"  > <p>Sala de Juegos</p></h1>\r\n      <!--<p>Octavio villegas</p>-->\r\n      <a href=\"https://github.com/Sol993\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n      <a  routerLink=\"/QuienSoy\" >Quien Soy? <i class=\"fa fa-user\"></i></a>\r\n  </div>\r\n <!-- <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a routerLink=\"/Registro\"><span class=\"glyphicon glyphicon-user\"></span>Registrarse</a></li>\r\n          <li><a  routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n  </ul>-->\r\n<app-menu-mio></app-menu-mio>\r\n"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeceraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CabeceraComponent = (function () {
    function CabeceraComponent() {
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    return CabeceraComponent;
}());
CabeceraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cabecera',
        template: __webpack_require__("./src/app/componentes/cabecera/cabecera.component.html"),
        styles: [__webpack_require__("./src/app/componentes/cabecera/cabecera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CabeceraComponent);

//# sourceMappingURL=cabecera.component.js.map

/***/ }),

/***/ "./src/app/componentes/error/error.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"hero-text\">\r\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\r\n        <p>Octavio villegas</p>\r\n        <a href=\"https://github.com/octaviovillegas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n          </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/componentes/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("./src/app/componentes/error/error.component.html"),
        styles: [__webpack_require__("./src/app/componentes/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  input-jugadores works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputJugadoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputJugadoresComponent = (function () {
    function InputJugadoresComponent() {
    }
    InputJugadoresComponent.prototype.ngOnInit = function () {
    };
    return InputJugadoresComponent;
}());
InputJugadoresComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-jugadores',
        template: __webpack_require__("./src/app/componentes/input-jugadores/input-jugadores.component.html"),
        styles: [__webpack_require__("./src/app/componentes/input-jugadores/input-jugadores.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputJugadoresComponent);

//# sourceMappingURL=input-jugadores.component.js.map

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n    body {\r\n        background: url(\"/assets/imagenes/83416B1A4.jpg\");\r\n        height: 1000px;\r\n     \r\n        \r\n        font: 100%/30px 'Helvetica Neue', helvetica, arial, sans-serif;\r\n        text-shadow: 0 1px 0 #fff;\r\n    }"

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<body>\r\n<app-menu></app-menu>\r\n\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n   Elije el juego!\r\n  </h1>\r\n </div>\r\n <router-outlet></router-outlet>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n <br>\r\n</body>"

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JuegosComponent = (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    return JuegosComponent;
}());
JuegosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-juegos',
        template: __webpack_require__("./src/app/componentes/juegos/juegos.component.html"),
        styles: [__webpack_require__("./src/app/componentes/juegos/juegos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JuegosComponent);

//# sourceMappingURL=juegos.component.js.map

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-justified\">\r\n  <li class=\"active\"><a routerLink=\"/Principal\">Ir a inicio</a></li>\r\n  <li><a (click)=\"TraerTodos()\">Todos los jugadores</a></li>\r\n  <li><a (click)=\"TraerGanadores()\">Los ganadores</a></li>\r\n  <li><a (click)=\"TraerPerdedores()\">Los perdedores</a></li>\r\n</ul>\r\n\r\n\r\n\r\n<table class=\"table table-condensed\">\r\n  <thead>\r\n    <tr>\r\n      <th>usuario</th>\r\n      <th>cuit</th>\r\n      <th>sexo</th>\r\n      <th>gano</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let jugador of listado\" >\r\n      <td>{{jugador.usuario}} </td>\r\n      <td>{{jugador.cuit}} </td> \r\n      <td>{{jugador.sexo | sexo| uppercase}} </td> \r\n      <td>{{jugador.gano}} </td> \r\n      \r\n    </tr>\r\n   \r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__ = __webpack_require__("./src/app/servicios/jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresListadoComponent = (function () {
    function JugadoresListadoComponent(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
    }
    JugadoresListadoComponent.prototype.ngOnInit = function () {
    };
    JugadoresListadoComponent.prototype.TraerTodos = function () {
        var _this = this;
        //alert("totos");
        this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerGanadores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerPerdedores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    return JugadoresListadoComponent;
}());
JugadoresListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-jugadores-listado',
        template: __webpack_require__("./src/app/componentes/jugadores-listado/jugadores-listado.component.html"),
        styles: [__webpack_require__("./src/app/componentes/jugadores-listado/jugadores-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */]) === "function" && _a || Object])
], JugadoresListadoComponent);

var _a;
//# sourceMappingURL=jugadores-listado.component.js.map

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n Listado de paises\r\n</h1>\r\n<table class=\"table table-condensed\">\r\n  <thead>\r\n    <tr>\r\n      <th>Pais</th>\r\n      <th>Región</th>\r\n      <th>Nombre local</th>\r\n      <th>Sub Región</th>\r\n      <th>Población</th>\r\n      <th>Bandera</th>\r\n      <th>Capital</th>\r\n      <th>GPS</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let pais of listadoDePaises\">\r\n      <td>{{pais.name}} </td>\r\n      <td>{{pais.region}} </td> \r\n      <td>{{pais.nativeName}} </td> \r\n      <td>{{pais.subregion}} </td>       \r\n      <td>{{pais.population}} </td> \r\n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \r\n      <td>{{pais.capital}} </td> \r\n      <td>{{pais.borders}} </td> \r\n      <td>{{pais.latlng}} </td> \r\n    </tr>\r\n   \r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDePaisesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__ = __webpack_require__("./src/app/servicios/paises.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoDePaisesComponent = (function () {
    function ListadoDePaisesComponent(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ListadoDePaisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miServicioDePaises.listar()
            .then(function (datos) {
            console.info("listado de paises", datos);
            _this.listadoDePaises = datos;
        });
    };
    return ListadoDePaisesComponent;
}());
ListadoDePaisesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-paises',
        template: __webpack_require__("./src/app/componentes/listado-de-paises/listado-de-paises.component.html"),
        styles: [__webpack_require__("./src/app/componentes/listado-de-paises/listado-de-paises.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */]) === "function" && _a || Object])
], ListadoDePaisesComponent);

var _a;
//# sourceMappingURL=listado-de-paises.component.js.map

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div *ngFor=\"let juego of listado\">\r\n\r\n<p> {{juego.nombre}} </p>\r\n<p> {{juego.jugador}} </p>\r\n\r\n</div-->\r\n\r\n<table class=\"table table-condensed\">\r\n    <thead>\r\n      <tr>\r\n        <th>Juego</th>\r\n        <th>Jugador</th>\r\n        <th>Resultado</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let juego of listado\">\r\n        <td>{{juego.nombre}} </td>\r\n        <td>{{juego.jugador}} </td> \r\n        <td *ngIf=\"juego.gano\">Gano </td>   \r\n        <td *ngIf=\"!juego.gano\">Perdio</td>     \r\n      </tr>\r\n     \r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoDeResultadosComponent = (function () {
    function ListadoDeResultadosComponent() {
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
        console.info(this.listado);
    };
    return ListadoDeResultadosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-resultados',
        template: __webpack_require__("./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
        styles: [__webpack_require__("./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadoDeResultadosComponent);

//# sourceMappingURL=listado-de-resultados.component.js.map

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.css":
/***/ (function(module, exports) {

module.exports = "/* Style all font awesome icons */\r\n.fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n}\r\n/* Add a hover effect if you want */\r\n.fa:hover {\r\n    opacity: 0.7;\r\n}\r\n/* Set a specific color for each brand */\r\n/* Facebook */\r\n.fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n/* Twitter */\r\n.fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \r\n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \r\n\r\n<!-- Centered Pills -->\r\n<ul class=\"nav nav-pills nav-justified\">\r\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\r\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\r\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\r\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\r\n  </ul>\r\n  \r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n\r\n"

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("./src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = (function () {
    function ListadoComponent(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.llamaService = function () {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    };
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    return ListadoComponent;
}());
ListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado',
        template: __webpack_require__("./src/app/componentes/listado/listado.component.html"),
        styles: [__webpack_require__("./src/app/componentes/listado/listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], ListadoComponent);

var _a;
//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  listados works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadosComponent = (function () {
    function ListadosComponent() {
    }
    ListadosComponent.prototype.ngOnInit = function () {
    };
    return ListadosComponent;
}());
ListadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listados',
        template: __webpack_require__("./src/app/componentes/listados/listados.component.html"),
        styles: [__webpack_require__("./src/app/componentes/listados/listados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadosComponent);

//# sourceMappingURL=listados.component.js.map

/***/ }),

/***/ "./src/app/componentes/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n/*Prueba*/\r\n\r\nbody{\r\n    padding:0;\r\n    margin:0;\r\n  }\r\n\r\n.vid-container{\r\n    position:relative;\r\n    height:100vh;\r\n    overflow:hidden;\r\n  }\r\n\r\n.bgvid{\r\n    position:absolute;\r\n    left:0;\r\n    top:0;\r\n    width:100vw;\r\n  }\r\n\r\n.inner-container{\r\n    width:400px;\r\n    height:400px;\r\n    position:absolute;\r\n    top:calc(50vh - 200px);\r\n    left:calc(50vw - 200px);\r\n    overflow:hidden;\r\n  }\r\n\r\n.bgvid.inner{\r\n    top:calc(-50vh + 200px);\r\n    left:calc(-50vw + 200px);\r\n    filter: url(\"data:image/svg+xml;utf9,<svg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'><filter%20id='blur'><feGaussianBlur%20stdDeviation='10'%20/></filter></svg>#blur\");\r\n    -webkit-filter:blur(10px);\r\n    -ms-filter: blur(10px);\r\n    -o-filter: blur(10px);\r\n    filter:blur(10px);\r\n  }\r\n\r\n.box{\r\n    position:absolute;\r\n    height:100%;\r\n    width:100%;\r\n    font-family:Helvetica;\r\n    color:#fff;\r\n    background:rgba(0,0,0,0.13);\r\n    padding:30px 0px;\r\n  }\r\n\r\n.box h1{\r\n    text-align:center;\r\n    margin:30px 0;\r\n    font-size:30px;\r\n  }\r\n\r\n.box input{\r\n    display:block;\r\n    width:300px;\r\n    margin:20px auto;\r\n    padding:15px;\r\n    background:rgba(0,0,0,0.2);\r\n    color:#fff;\r\n    border:0;\r\n  }\r\n\r\n.box input:focus,.box input:active,.box button:focus,.box button:active{\r\n    outline:none;\r\n  }\r\n\r\n.box button{\r\n    background:#2ecc71;\r\n    border:0;\r\n    color:#fff;\r\n    padding:10px;\r\n    font-size:20px;\r\n    width:330px;\r\n    margin:20px auto;\r\n    display:block;\r\n    cursor:pointer;\r\n  }\r\n\r\n.box button:active{\r\n    background:#27ae60;\r\n  }\r\n\r\n.box p{\r\n    font-size:14px;\r\n    text-align:center;\r\n  }\r\n\r\n.box p span{\r\n    cursor:pointer;\r\n    color:#666;\r\n  }"

/***/ }),

/***/ "./src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div style=\"margin: 20% auto; width: 30%;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      Usuario\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <input type=\"text\"  [(ngModel)]=\"usuario\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 5px\">\r\n    <div class=\"col-lg-6\">\r\n      Clave\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <input type=\"password\" [(ngModel)]=\"clave\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"text-align: center; margin-top: 10px\">\r\n    <div class=\"col-lg-12\">\r\n      <button (click)=\"Entrar()\" class=\"btn btn-info btn-lg\" >Entrar</button>\r\n    </div>\r\n  </div>\r\n</div-->\r\n<app-menu-mio></app-menu-mio>\r\n<!--\r\n <div class=\"container\" >\r\n  <div class=\"jumbotron\" style=\"padding:50px;\">\r\n    <form action=\"return true;\">\r\n      <div class=\"imgcontainer\">\r\n        <img src=\"./assets/imagenes/login.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <label><b>Usuario</b></label>\r\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"usuario\"  name=\"uname\" required>\r\n\r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"clave\" name=\"psw\" required>\r\n            \r\n        <button *ngIf=\"logeando\"  (click)=\"MoverBarraDeProgreso()\" >Ingresar</button>\r\n       \r\n        <div *ngIf=\"!logeando\" class=\"progress\">\r\n            <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\r\n              {{progresoMensaje}} - {{progreso}}%\r\n            </div>\r\n        </div>\r\n       \r\n        <input type=\"checkbox\" checked=\"checked\"> Recordar mis datos\r\n      </div>\r\n\r\n      <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n        <button type=\"button\" class=\"cancelbtn\">Cancelar</button>\r\n        <button type=\"button\" class=\"aceptbtn\" routerLink=\"/Registro\" >Registrarse</button>\r\n        <span class=\"psw\">Te olvidaste <a href=\"#\">la clave?</a></span>\r\n      </div>\r\n     \r\n    </form>\r\n  </div>\r\n</div>-->\r\n<div class=\"vid-container\">\r\n  <video class=\"bgvid\" autoplay=\"autoplay\" muted=\"muted\" preload=\"auto\" loop>\r\n      <source src=\"/assets/imagenes/leif_eliasson--glaciartopp.webm\" type=\"video/webm\">\r\n  </video>\r\n  <div class=\"inner-container\">\r\n    <video class=\"bgvid inner\" autoplay=\"autoplay\" muted=\"muted\" preload=\"auto\" loop>\r\n      <source src=\"/assets/imagenes/leif_eliasson--glaciartopp.webm\" type=\"video/webm\">\r\n    </video>\r\n    <div class=\"box\">\r\n      <h1>Ingrese a sala de juego </h1>\r\n      <input type=\"text\" placeholder=\"Username\"/>\r\n      <input type=\"text\" placeholder=\"Password\"/>\r\n      <button>Login</button>\r\n      <p>Not a member? <a href=\"/Registro\">Sign Up</a></p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router) {
        this.route = route;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Entrar = function () {
        if (this.usuario === 'admin' && this.clave === 'admin') {
            this.router.navigate(['/Principal']);
        }
    };
    LoginComponent.prototype.MoverBarraDeProgreso = function () {
        var _this = this;
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "NSA spy...";
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(200, 50);
        this.subscription = timer.subscribe(function (t) {
            console.log("inicio");
            _this.progreso = _this.progreso + 1;
            _this.ProgresoDeAncho = _this.progreso + 20 + "%";
            switch (_this.progreso) {
                case 15:
                    _this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    _this.progresoMensaje = "Verificando ADN...";
                    break;
                case 30:
                    _this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    _this.progresoMensaje = "Adjustando encriptación..";
                    break;
                case 60:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                case 75:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
                    break;
                case 85:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Instalando KeyLogger..";
                    break;
                case 100:
                    console.log("final");
                    _this.subscription.unsubscribe();
                    _this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__("./src/app/componentes/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n  }"

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\r\n\r\n<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\">\r\n   \r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n<input type =\"text\" [(ngModel)]=\"lat\" />\r\n<input type=\"text\" [(ngModel)]=\"lng\"/> "

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaDeGoogleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapaDeGoogleComponent = (function () {
    function MapaDeGoogleComponent() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    MapaDeGoogleComponent.prototype.ngOnInit = function () {
    };
    return MapaDeGoogleComponent;
}());
MapaDeGoogleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mapa-de-google',
        template: __webpack_require__("./src/app/componentes/mapa-de-google/mapa-de-google.component.html"),
        styles: [__webpack_require__("./src/app/componentes/mapa-de-google/mapa-de-google.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapaDeGoogleComponent);

//# sourceMappingURL=mapa-de-google.component.js.map

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    border-radius: 5px; /* 5px rounded corners */\r\n    max-width: 300px;\r\n   height: 100%;\r\n    margin: 10px;\r\n    padding-bottom: 10px;\r\n    float: left;\r\n  background-color: #bedee8;\r\n    text-align: center;\r\n}\r\n\r\n/* Add rounded corners to the top left and the top right corner of the image */\r\n\r\nimg {\r\n    border-radius: 5px 5px 0 0;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n/* Add some padding inside the card container */\r\n\r\n.container {\r\n    padding: 2px 16px;\r\n}\r\n\r\n.button{\r\n    margin-left: 1px;\r\n    display: inline-block;\r\n    width: 50%;\r\n    padding: 5px 10px;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: none;\r\n    color: #bedee8;\r\n    background-color: #211d44;\r\n    border: none;\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: 0 9px #999;\r\n            box-shadow: 0 9px #999;\r\n\r\n    border: none;\r\n    outline: 0;\r\n \r\n    padding: 8px;\r\n    color: white;\r\n   /* background-color: #000;*/\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n\r\n.button:hover {background-color: #3e8e41}\r\n\r\n.button:active {\r\n    background-color: #3e8e41;\r\n    -webkit-box-shadow: 0 5px #666;\r\n            box-shadow: 0 5px #666;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n  }\r\n"

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n\r\n    \r\n  <div class=\"card\">\r\n      <h1>Pensar</h1> <br><br>\r\n      <img class=\"img-thumbnail\"   src=\"./assets/imagenes/pensar-sin-leer.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n\r\n\r\n      <p>           <button class=\"button\"  (click)=\"Juego('Agilidad')\">Jugar</button></p>\r\n    \r\n    </div>\r\n  \r\n    <div class=\"card\">\r\n      <h1>Piedra,papel o tijera</h1>\r\n      <img class=\"img-thumbnail\" src=\"./assets/imagenes/Piedra-Papel-Tijera-87021.gif\" alt=\"Avatar\" style=\"width:100%\">\r\n\r\n    \r\n      <p>           <button class=\"button\"  (click)=\"Juego('PPT')\">Jugar</button></p>\r\n    </div>\r\n    <div class=\"card\">\r\n        <h1>Buscar</h1> <br><br>\r\n      <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/giphy.gif\" alt=\"Avatar\" style=\"width:100%\">\r\n\r\n\r\n      <p>           <button class=\"button\"  (click)=\"Juego('Adivina')\">Jugar</button></p>\r\n    </div>\r\n    <div class=\"card\">\r\n        <h1>Pensar en canciones</h1> \r\n      <img class=\"img-thumbnail\" src=\"./assets/imagenes/Ie18lWUthbcz1SS54512Qubn05Q.gif\" alt=\"Avatar\" style=\"width:100%\">\r\n    \r\n      <p>           <button class=\"button\"  (click)=\"Juego('PPT')\">Jugar</button></p>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuCardComponent = (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    MenuCardComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    };
    return MenuCardComponent;
}());
MenuCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-card',
        template: __webpack_require__("./src/app/componentes/menu-card/menu-card.component.html"),
        styles: [__webpack_require__("./src/app/componentes/menu-card/menu-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuCardComponent);

var _a, _b;
//# sourceMappingURL=menu-card.component.js.map

/***/ }),

/***/ "./src/app/componentes/menu-mio/menu-mio.component.css":
/***/ (function(module, exports) {

module.exports = "/*\r\nIntento de Menu!\r\n*/\r\n#menuToggle\r\n{\r\n  display: block;\r\n  position: relative;\r\n  top: 50px;\r\n  left: 50px;\r\n  \r\n  z-index: 1;\r\n  \r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n}\r\n#menuToggle input\r\n{\r\n  display: block;\r\n  width: 40px;\r\n  height: 32px;\r\n  position: absolute;\r\n  top: -7px;\r\n  left: -5px;\r\n  \r\n  cursor: pointer;\r\n  \r\n  opacity: 0; /* hide this */\r\n  z-index: 2; /* and place it over the hamburger */\r\n  \r\n  -webkit-touch-callout: none;\r\n}\r\n/*\r\n * Just a quick hamburger\r\n */\r\n#menuToggle span\r\n{\r\n  display: block;\r\n  width: 33px;\r\n  height: 4px;\r\n  margin-bottom: 5px;\r\n  position: relative;\r\n  \r\n  background: #cdcdcd;\r\n  border-radius: 3px;\r\n  \r\n  z-index: 1;\r\n  \r\n  -webkit-transform-origin: 4px 0px;\r\n  \r\n          transform-origin: 4px 0px;\r\n  \r\n  -webkit-transition: background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease,\r\n              -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease,\r\n              -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease;\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease,\r\n              -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n}\r\n#menuToggle span:first-child\r\n{\r\n  -webkit-transform-origin: 0% 0%;\r\n          transform-origin: 0% 0%;\r\n}\r\n#menuToggle span:nth-last-child(2)\r\n{\r\n  -webkit-transform-origin: 0% 100%;\r\n          transform-origin: 0% 100%;\r\n}\r\n/* \r\n * Transform all the slices of hamburger\r\n * into a crossmark.\r\n */\r\n#menuToggle input:checked ~ span\r\n{\r\n  opacity: 1;\r\n  -webkit-transform: rotate(45deg) translate(-2px, -1px);\r\n          transform: rotate(45deg) translate(-2px, -1px);\r\n  background: #232323;\r\n}\r\n/*\r\n * But let's hide the middle one.\r\n */\r\n#menuToggle input:checked ~ span:nth-last-child(3)\r\n{\r\n  opacity: 0;\r\n  -webkit-transform: rotate(0deg) scale(0.2, 0.2);\r\n          transform: rotate(0deg) scale(0.2, 0.2);\r\n}\r\n/*\r\n * Ohyeah and the last one should go the other direction\r\n */\r\n#menuToggle input:checked ~ span:nth-last-child(2)\r\n{\r\n  -webkit-transform: rotate(-45deg) translate(0, -1px);\r\n          transform: rotate(-45deg) translate(0, -1px);\r\n}\r\n/*\r\n * Make this absolute positioned\r\n * at the top left of the screen\r\n */\r\n#menu\r\n{\r\n  position: absolute;\r\n  width: 300px;\r\n  margin: -100px 0 0 -50px;\r\n  padding: 50px;\r\n  padding-top: 125px;\r\n  \r\n  background: #ededed;\r\n  list-style-type: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  /* to stop flickering of text in safari */\r\n  \r\n  -webkit-transform-origin: 0% 0%;\r\n  \r\n          transform-origin: 0% 0%;\r\n  -webkit-transform: translate(-100%, 0);\r\n          transform: translate(-100%, 0);\r\n  \r\n  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n}\r\n#menu li\r\n{\r\n  padding: 10px 0;\r\n  font-size: 22px;\r\n}\r\n/*\r\n * And let's slide it in from the left\r\n */\r\n#menuToggle input:checked ~ ul\r\n{\r\n  -webkit-transform: none;\r\n          transform: none;\r\n}"

/***/ }),

/***/ "./src/app/componentes/menu-mio/menu-mio.component.html":
/***/ (function(module, exports) {

module.exports = "<nav role=\"navigation\">\n  <div id=\"menuToggle\">\n    <!--\n    A fake / hidden checkbox is used as click reciever,\n    so you can use the :checked selector on it.\n    -->\n    <input type=\"checkbox\" />\n    \n    <!--\n    Some spans to act as a hamburger.\n    \n    They are acting like a real hamburger,\n    not that McDonalds stuff.\n    -->\n    <span></span>\n    <span></span>\n    <span></span>\n    \n    <!--\n    Too bad the menu has to be inside of the button\n    but hey, it's pure CSS magic.\n    -->\n    <ul id=\"menu\">\n      <a href=\"#\"><li>Home</li></a>\n      <a routerLink=\"/Juegos\"><li>Jugar!!</li></a>\n      <a routerLink=\"/Login\"><li>Ingresar</li></a>\n      <a routerLink=\"/Registro\"><li>Registrarse</li></a>\n      <a routerLink=\"/QuienSoy\"><li>Quien Soy!</li></a>\n\n\n\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/componentes/menu-mio/menu-mio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuMioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuMioComponent = (function () {
    function MenuMioComponent() {
    }
    MenuMioComponent.prototype.ngOnInit = function () {
    };
    return MenuMioComponent;
}());
MenuMioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-mio',
        template: __webpack_require__("./src/app/componentes/menu-mio/menu-mio.component.html"),
        styles: [__webpack_require__("./src/app/componentes/menu-mio/menu-mio.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuMioComponent);

//# sourceMappingURL=menu-mio.component.js.map

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div>\r\n    <button routerLink=\"/Principal\">Principal</button>\r\n    <button (click)=\"Juego('Adivina')\">Adivina</button>\r\n    <button (click)=\"Juego('Agilidad')\">Agilidad</button>\r\n    <button (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</button>\r\n    <button (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</button>  \r\n    <button routerLink=\"/error\">Error</button>\r\n  \r\n</div-->\r\n\r\n<!--nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a routerLink=\"/Juegos\">Juegos</a></li>\r\n        <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\r\n        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\r\n        <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\r\n        <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\r\n        </ul>\r\n    </div>\r\n  </nav-->\r\n  <app-menu-mio></app-menu-mio>\r\n   <!-- nav class=\"navbar navbar-inverse\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n            <span class=\"icon-bar\"></span>\r\n                                  \r\n          </button>\r\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\r\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\r\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\r\n                <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\r\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\r\n              </ul>\r\n              <ul class=\"nav navbar-nav navbar-right\">\r\n                  <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\r\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\r\n                </ul>\r\n        </div>\r\n      </div>\r\n    </nav>-->\r\n      \r\n   "

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("./src/app/componentes/menu/menu.component.html"),
        styles: [__webpack_require__("./src/app/componentes/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.css":
/***/ (function(module, exports) {

module.exports = ".imagenDeMenu{\r\nwidth: 100px;\r\nheight: 90px;\r\n}\r\n\r\n.hero-text {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: #100000;\r\n    }\r\n\r\n/*Menu*/\r\n\r\nbody {\r\n        background: #a31f3d url(\"/assets/imagenes/prueba1.gif\");\r\n        height: 1000px;\r\n        color: #a31f3d;\r\n        font: 100%/30px 'Helvetica Neue', helvetica, arial, sans-serif;\r\n        text-shadow: 0 1px 0 #fff;\r\n    }\r\n\r\nstrong {\r\n        font-weight: bold; \r\n    }\r\n\r\nem {\r\n        font-style: italic; \r\n    }\r\n\r\ntable {\r\n        background: #f5f5f5;\r\n        border-collapse: separate;\r\n        -webkit-box-shadow: inset 0 1px 0 #fff;\r\n                box-shadow: inset 0 1px 0 #fff;\r\n        font-size: 12px;\r\n        line-height: 24px;\r\n        margin: 30px auto;\r\n        text-align: left;\r\n        width: 800px;\r\n    }\r\n\r\nth {\r\n        background: url(\"/assets/imagenes/prueba1.gif\"), -webkit-gradient(linear, left top, left bottom, from(#777), to(#444));\r\n        background: url(\"/assets/imagenes/prueba1.gif\"), linear-gradient(#777, #444);\r\n        border-left: 1px solid #555;\r\n        border-right: 1px solid #777;\r\n        border-top: 1px solid #555;\r\n        border-bottom: 1px solid #333;\r\n        -webkit-box-shadow: inset 0 1px 0 #999;\r\n                box-shadow: inset 0 1px 0 #999;\r\n        color: #a31f3d;\r\n      font-weight: bold;\r\n        padding: 10px 15px;\r\n        position: relative;\r\n        text-shadow: 0 1px 0 #a31f3d;\t\r\n    }\r\n\r\nth:after {\r\n        background: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), to(rgba(255,255,255,.08)));\r\n        background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));\r\n        content: '';\r\n        display: block;\r\n        height: 25%;\r\n        left: 0;\r\n        margin: 1px 0 0 0;\r\n        position: absolute;\r\n        top: 25%;\r\n        width: 100%;\r\n    }\r\n\r\nth:first-child {\r\n        border-left: 1px solid #777;\t\r\n        -webkit-box-shadow: inset 1px 1px 0 #999;\t\r\n                box-shadow: inset 1px 1px 0 #999;\r\n    }\r\n\r\nth:last-child {\r\n        -webkit-box-shadow: inset -1px 1px 0 #999;\r\n                box-shadow: inset -1px 1px 0 #999;\r\n    }\r\n\r\ntd {\r\n        border-right: 1px solid #fff;\r\n        border-left: 1px solid #e8e8e8;\r\n        border-top: 1px solid #fff;\r\n        border-bottom: 1px solid #e8e8e8;\r\n        padding: 10px 15px;\r\n        position: relative;\r\n        -webkit-transition: all 300ms;\r\n        transition: all 300ms;\r\n    }\r\n\r\ntd:first-child {\r\n        -webkit-box-shadow: inset 1px 0 0 #fff;\r\n                box-shadow: inset 1px 0 0 #fff;\r\n    }\r\n\r\ntd:last-child {\r\n        border-right: 1px solid #e8e8e8;\r\n        -webkit-box-shadow: inset -1px 0 0 #fff;\r\n                box-shadow: inset -1px 0 0 #fff;\r\n    }\r\n\r\ntr {\r\n        background: url(\"/assets/imagenes/prueba1.gif\");\t\r\n    }\r\n\r\ntr:nth-child(odd) td {\r\n        background: #f1f1f1 url(\"/assets/imagenes/prueba1.gif\");\t\r\n    }\r\n\r\ntr:last-of-type td {\r\n        -webkit-box-shadow: inset 0 -1px 0 #fff;\r\n                box-shadow: inset 0 -1px 0 #fff; \r\n    }\r\n\r\ntr:last-of-type td:first-child {\r\n        -webkit-box-shadow: inset 1px -1px 0 #fff;\r\n                box-shadow: inset 1px -1px 0 #fff;\r\n    }\r\n\r\ntr:last-of-type td:last-child {\r\n        -webkit-box-shadow: inset -1px -1px 0 #fff;\r\n                box-shadow: inset -1px -1px 0 #fff;\r\n    }\r\n\r\ntbody:hover td {\r\n        color: transparent;\r\n        text-shadow: 0 0 3px #aaa;\r\n    }\r\n\r\ntbody:hover tr:hover td {\r\n        color: #444;\r\n        text-shadow: 0 1px 0 rgb(255, 255, 255);\r\n    }\r\n\r\nbody {\r\n        background-image: url(\"/assets/imagenes/prueba1.gif\");\r\n    }"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<html>\r\n<body>\r\n    <app-cabecera>  </app-cabecera>\r\n<div class=\"container\" >\r\n  <!-- \r\n    <ul class=\"list-group\">\r\n        <li class=\"list-group-item list-group-item-danger\">\r\n           \r\n                <div class=\"media-body\">\r\n                    <div class=\"hero-text\">\r\n                        <h4 >Menú Principal</h4>\r\n                    </div>\r\n                 </div>\r\n               \r\n             \r\n          </li>\r\n        <li class=\"list-group-item list-group-item-success\">\r\n          <a routerLink=\"/Juegos\">\r\n            <div class=\"media\">\r\n              <div class=\"media-left\">\r\n                    <img src=\"./assets/imagenes/saladejuegos.png\" class=\"media-object imagenDeMenu\" >\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Juegos</h4>\r\n                <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\r\n              </div>\r\n             \r\n            </div> \r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item list-group-item-info\">\r\n            <a routerLink=\"/Listado\">\r\n              <div class=\"media\">\r\n                  <div class=\"media-left\">\r\n                      <img src=\"./assets/imagenes/listado.jpg\" class=\"media-object imagenDeMenu\" >\r\n                    </div>\r\n                <div class=\"media-body\">\r\n                  <h4 class=\"media-heading\">Listados de resultados</h4>\r\n                  <p>Los listados de los resultados con ordenamiento y busqueda</p>\r\n                </div>\r\n                \r\n              </div> \r\n            </a>\r\n          </li>\r\n        <li class=\"list-group-item list-group-item-warning\">\r\n          <a routerLink=\"/Juegos\">\r\n            <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                    <img src=\"./assets/imagenes/Configuracion.png\" class=\"media-object imagenDeMenu\" >\r\n                  </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Configuraci&oacute;n</h4>\r\n                <p>Ajustes de la aplicacion y los métodos de autentificación</p>\r\n              </div>\r\n             \r\n            </div> \r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item list-group-item-warning\">\r\n          <a routerLink=\"/Jugadores\">\r\n            <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                    <img src=\"./assets/imagenes/jugadores.png\" class=\"media-object imagenDeMenu\" >\r\n                  </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Jugadores</h4>\r\n                <p>Listado de jugadores</p>\r\n              </div>\r\n             \r\n            </div> \r\n          </a>\r\n        </li>\r\n       \r\n        \r\n      </ul>-->\r\n\r\n\r\n      <table>\r\n        <thead>\r\n          <tr>\r\n          <th><h1 align=\"center\">Menu</h1></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n          <td><strong>       \r\n           <li class=\"list-group-item list-group-item-success\">\r\n            <a routerLink=\"/Juegos\">\r\n              <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                      <img src=\"./assets/imagenes/Candidato_para_fondo_de_minijuegos_wikia.jpg\" class=\"media-object imagenDeMenu\" >\r\n                </div>\r\n                <div class=\"media-body\">\r\n                  <h4 class=\"media-heading\">Juegos</h4>\r\n                  <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\r\n                </div>\r\n               \r\n              </div> \r\n            </a>\r\n          </li></strong></td>\r\n          \r\n          </tr>\r\n          <tr>\r\n              <td><strong>\r\n                  <li class=\"list-group-item list-group-item-info\">\r\n                      <a routerLink=\"/Listado\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-left\">\r\n                                <img src=\"./assets/imagenes/listado32.jpg\" class=\"media-object imagenDeMenu\" >\r\n                              </div>\r\n                          <div class=\"media-body\">\r\n                            <h4 class=\"media-heading\">Listados de resultados</h4>\r\n                            <p>Los listados de los resultados con ordenamiento y busqueda</p>\r\n                          </div>\r\n                          \r\n                        </div> \r\n                      </a>\r\n                    </li>\r\n              </strong></td>\r\n              \r\n          </tr>\r\n              <tr>\r\n                  <td><strong>\r\n                      <li class=\"list-group-item list-group-item-warning\">\r\n                          <a routerLink=\"/Juegos\">\r\n                            <div class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <img src=\"./assets/imagenes/curso_woocommerce_configuracion.jpg\" class=\"media-object imagenDeMenu\" >\r\n                                  </div>\r\n                              <div class=\"media-body\">\r\n                                <h4 class=\"media-heading\">Configuraci&oacute;n</h4>\r\n                                <p>Ajustes de la aplicacion y los métodos de autentificación</p>\r\n                              </div>\r\n                             \r\n                            </div> \r\n                          </a>\r\n                        </li>\r\n                  </strong></td>                  \r\n              </tr>\r\n                  \r\n              <tr>\r\n                  <td><strong>\r\n                      <li class=\"list-group-item list-group-item-warning\">\r\n                          <a routerLink=\"/Jugadores\">\r\n                            <div class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <img src=\"./assets/imagenes/b8434ce01fe5ff2b4f4cd37cd1b2f4b0--game-resources-animated-cartoons.jpg\" class=\"media-object imagenDeMenu\" >\r\n                                  </div>\r\n                              <div class=\"media-body\">\r\n                                <h4 class=\"media-heading\">Jugadores</h4>\r\n                                <p>Listado de jugadores</p>\r\n                              </div>\r\n                             \r\n                            </div> \r\n                          </a>\r\n                        </li>\r\n\r\n                  </strong></td>                  \r\n              </tr>\r\n               \r\n      \r\n        </tbody>\r\n        </table>\r\n</div>\r\n</body>\r\n </html>"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    return PrincipalComponent;
}());
PrincipalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-principal',
        template: __webpack_require__("./src/app/componentes/principal/principal.component.html"),
        styles: [__webpack_require__("./src/app/componentes/principal/principal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrincipalComponent);

//# sourceMappingURL=principal.component.js.map

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.css":
/***/ (function(module, exports) {

module.exports = ".imagenDeQuienSoy{\r\n    width: 100%;\r\n   \r\n    }\r\nbody {\r\n    font: 20px Montserrat, sans-serif;\r\n    line-height: 1.8;\r\n    color: #f5f6f7;\r\n}\r\np {font-size: 16px;}\r\n.margin {margin-bottom: 45px;}\r\n.bg-1 { \r\n    background-color: #1abc9c; /* Green */\r\n    color: #ffffff;\r\n}\r\n.bg-2 { \r\n    background-color: #474e5d; /* Dark Blue */\r\n    color: #ffffff;\r\n}\r\n.bg-3 { \r\n    background-color: #ffffff; /* White */\r\n    color: #555555;\r\n}\r\n.bg-4 { \r\n    background-color: #2f2f2f; /* Black Gray */\r\n    color: #fff;\r\n}\r\n.container-fluid {\r\n    padding-top: 70px;\r\n    padding-bottom: 70px;\r\n}\r\n.navbar {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n}\r\n.navbar-nav  li a:hover {\r\n    color: #1abc9c !important;\r\n}\r\n/* Header */\r\n#header {\r\n    text-align: center;\r\n    padding: 6em 0 4em 0;\r\n}\r\n#header h1 {\r\n        color: rgba(255, 255, 255, 0.65);\r\n    }\r\n#header .avatar {\r\n        border-radius: 100%;\r\n        display: inline-block;\r\n        margin: 0 0 2em 0;\r\n        padding: 0.5em;\r\n        border: solid 1px rgba(255, 255, 255, 0.25);\r\n        background-color: rgba(255, 255, 255, 0.075);\r\n    }\r\n#header .avatar img {\r\n            border-radius: 100%;\r\n            display: block;\r\n            width: 10em;\r\n        }\r\n@media screen and (max-width: 1280px) {\r\n\r\n        #header {\r\n            padding: 4em 0 2em 0;\r\n        }\r\n\r\n    }\r\n/* Icon */\r\n.icon {\r\n\t\ttext-decoration: none;\r\n\t\tborder-bottom: none;\r\n\t\tposition: relative;\r\n\t}\r\n.icon:before {\r\n\t\t\t-moz-osx-font-smoothing: grayscale;\r\n\t\t\t-webkit-font-smoothing: antialiased;\r\n\t\t\tfont-family: FontAwesome;\r\n\t\t\tfont-style: normal;\r\n\t\t\tfont-weight: normal;\r\n\t\t\ttext-transform: none !important;\r\n\t\t}\r\n.icon > .label {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n.icon.style2 {\r\n\t\t\t-webkit-transition: all 0.2s ease;\r\n\t\t\ttransition: all 0.2s ease;\r\n\t\t\tborder-radius: 100%;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tpadding: 0.5em;\r\n\t\t\tborder: solid 1px rgba(255, 255, 255, 0.25);\r\n\t\t\tbackground-color: rgba(255, 255, 255, 0.075);\r\n\t\t}\r\n.icon.style2:before {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\twidth: 1.25em;\r\n\t\t\t\theight: 1.25em;\r\n\t\t\t\tline-height: 1.25em;\r\n\t\t\t\tfont-size: 1.35em;\r\n\t\t\t}\r\n.icon.style2:hover {\r\n\t\t\t\tbackground-color: rgba(255, 255, 255, 0.25);\r\n\t\t\t}\r\n@media screen and (max-width: 736px) {\r\n\r\n\t\t\t\t.icon.style2:before {\r\n\t\t\t\t\tfont-size: 1em;\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n/* Image */\r\n.image {\r\n\t\tborder-radius: 4px;\r\n\t\tborder: 0;\r\n\t\tdisplay: inline-block;\r\n\t\tposition: relative;\r\n\t}\r\n.image img {\r\n\t\t\tborder-radius: 4px;\r\n\t\t\tdisplay: block;\r\n\t\t}\r\n.image.left, .image.right {\r\n\t\t\tmax-width: 40%;\r\n\t\t}\r\n.image.left img, .image.right img {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n.image.left {\r\n\t\t\tfloat: left;\r\n\t\t\tpadding: 0 1.5em 1em 0;\r\n\t\t\ttop: 0.25em;\r\n\t\t}\r\n.image.right {\r\n\t\t\tfloat: right;\r\n\t\t\tpadding: 0 0 1em 1.5em;\r\n\t\t\ttop: 0.25em;\r\n\t\t}\r\n.image.fit {\r\n\t\t\tdisplay: block;\r\n\t\t\tmargin: 0 0 2em 0;\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n.image.fit img {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n.image.main {\r\n\t\t\tdisplay: block;\r\n\t\t\tmargin: 0 0 3em 0;\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n.image.main img {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\nli {\r\n                display: list-item;\r\n                text-align: -webkit-match-parent;\r\n            }\r\n/* Form */\r\nform {\r\n\t\tmargin: 0 0 2em 0;\r\n\t}\r\nlabel {\r\n\t\tcolor: #ffffff;\r\n\t\tdisplay: block;\r\n\t\tfont-size: 0.9em;\r\n\t\tfont-weight: 200;\r\n\t\tmargin: 0 0 1em 0;\r\n    }\r\n/* Wrapper */\r\n#wrapper {\r\n\t\tmax-width: 68em;\r\n\t\twidth: 100%;\r\n\t\tmargin: 0 auto;\r\n\t\tpadding: 0 2em;\r\n\t\topacity: 1;\r\n\t\t-webkit-filter: none;\r\n\t\t        filter: none;\r\n\t\t-webkit-transition: opacity 1s ease, -webkit-filter 1s ease;\r\n\t\ttransition: opacity 1s ease, -webkit-filter 1s ease;\r\n\t\ttransition: opacity 1s ease, filter 1s ease;\r\n\t\ttransition: opacity 1s ease, filter 1s ease, -webkit-filter 1s ease;\r\n\t}\r\nbody.is-loading #wrapper {\r\n\t\topacity: 0;\r\n\t\t-moz-filter: blur(1px);\r\n\t\t-webkit-filter: blur(1px);\r\n\t\t-ms-filter: blur(1px);\r\n\t\tfilter: blur(1px);\r\n\t}\r\nbody.is-covered #wrapper {\r\n\t\t-moz-filter: blur(3px);\r\n\t\t-webkit-filter: blur(3px);\r\n\t\t-ms-filter: blur(3px);\r\n\t\tfilter: blur(3px);\r\n    }\r\n/* Basic */\r\n@-ms-viewport {\r\n\t\twidth: device-width;\r\n\t}\r\nbody {\r\n\t\t-ms-overflow-style: scrollbar;\r\n\t}\r\n@media screen and (max-width: 480px) {\r\n\r\n\t\thtml, body {\r\n\t\t\tmin-width: 320px;\r\n\t\t}\r\n\r\n\t}\r\nbody {\r\n\t\tbackground-color: #000;\r\n\t\tbackground-image: url(\"/assets/imagenes/bg.jpg\");\r\n\t\tbackground-size: cover;\r\n\t\tbackground-position: top center;\r\n\t}\r\nbody.is-loading *, body.is-loading *:before, body.is-loading *:after {\r\n\t\t\t-webkit-animation: none !important;\r\n\t\t\tanimation: none !important;\r\n\t\t\t-webkit-transition: none !important;\r\n\t\t\ttransition: none !important;\r\n        }\r\n/* List */\r\nol {\r\n\t\tlist-style: decimal;\r\n\t\tmargin: 0 0 2em 0;\r\n\t\tpadding-left: 1.25em;\r\n\t}\r\nol li {\r\n\t\t\tpadding-left: 0.25em;\r\n\t\t}\r\nul {\r\n\t\tlist-style: disc;\r\n\t\tmargin: 0 0 2em 0;\r\n\t\tpadding-left: 1em;\r\n\t}\r\nul li {\r\n\t\t\tpadding-left: 0.5em;\r\n\t\t}\r\nul.alt {\r\n\t\t\tlist-style: none;\r\n\t\t\tpadding-left: 0;\r\n\t\t}\r\nul.alt li {\r\n\t\t\t\tborder-top: solid 1px rgba(255, 255, 255, 0.25);\r\n\t\t\t\tpadding: 0.5em 0;\r\n\t\t\t}\r\nul.alt li:first-child {\r\n\t\t\t\t\tborder-top: 0;\r\n\t\t\t\t\tpadding-top: 0;\r\n\t\t\t\t}\r\nul.icons {\r\n\t\t\tcursor: default;\r\n\t\t\tlist-style: none;\r\n\t\t\tpadding-left: 0;\r\n\t\t}\r\nul.icons li {\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tpadding: 0 1em 0 0;\r\n\t\t\t}\r\nul.icons li:last-child {\r\n\t\t\t\t\tpadding-right: 0;\r\n\t\t\t\t}\r\nul.actions {\r\n\t\t\tcursor: default;\r\n\t\t\tlist-style: none;\r\n\t\t\tpadding-left: 0;\r\n\t\t}\r\nul.actions li {\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tpadding: 0 1em 0 0;\r\n\t\t\t\tvertical-align: middle;\r\n\t\t\t}\r\nul.actions li:last-child {\r\n\t\t\t\t\tpadding-right: 0;\r\n\t\t\t\t}\r\nul.actions.small li {\r\n\t\t\t\tpadding: 0 0.5em 0 0;\r\n\t\t\t}\r\nul.actions.vertical li {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tpadding: 1em 0 0 0;\r\n\t\t\t}\r\nul.actions.vertical li:first-child {\r\n\t\t\t\t\tpadding-top: 0;\r\n\t\t\t\t}\r\nul.actions.vertical li > * {\r\n\t\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t}\r\nul.actions.vertical.small li {\r\n\t\t\t\tpadding: 0.5em 0 0 0;\r\n\t\t\t}\r\nul.actions.vertical.small li:first-child {\r\n\t\t\t\t\tpadding-top: 0;\r\n\t\t\t\t}\r\nul.actions.fit {\r\n\t\t\t\tdisplay: table;\r\n\t\t\t\tmargin-left: -1em;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t\ttable-layout: fixed;\r\n\t\t\t\twidth: calc(100% + 1em);\r\n\t\t\t}\r\nul.actions.fit li {\r\n\t\t\t\t\tdisplay: table-cell;\r\n\t\t\t\t\tpadding: 0 0 0 1em;\r\n\t\t\t\t}\r\nul.actions.fit li > * {\r\n\t\t\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t\t}\r\nul.actions.fit.small {\r\n\t\t\t\t\tmargin-left: -0.5em;\r\n\t\t\t\t\twidth: calc(100% + 0.5em);\r\n\t\t\t\t}\r\nul.actions.fit.small li {\r\n\t\t\t\t\t\tpadding: 0 0 0 0.5em;\r\n\t\t\t\t\t}\r\n@media screen and (max-width: 480px) {\r\n\r\n\t\t\t\tul.actions {\r\n\t\t\t\t\tmargin: 0 0 2em 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\tul.actions li {\r\n\t\t\t\t\t\tpadding: 1em 0 0 0;\r\n\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tul.actions li:first-child {\r\n\t\t\t\t\t\t\tpadding-top: 0;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tul.actions li > * {\r\n\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\tmargin: 0 !important;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tul.actions li > *.icon:before {\r\n\t\t\t\t\t\t\t\tmargin-left: -2em;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\tul.actions.small li {\r\n\t\t\t\t\t\tpadding: 0.5em 0 0 0;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tul.actions.small li:first-child {\r\n\t\t\t\t\t\t\tpadding-top: 0;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t}\r\ndl {\r\n\t\tmargin: 0 0 2em 0;\r\n\t}\r\ndl dt {\r\n\t\t\tdisplay: block;\r\n\t\t\tfont-weight: 200;\r\n\t\t\tmargin: 0 0 1em 0;\r\n\t\t}\r\ndl dd {\r\n\t\t\tmargin-left: 2em;\r\n\t\t}\r\n/*\r\nMenu\r\n*/\r\n#menuToggle\r\n{\r\n  display: block;\r\n  position: relative;\r\n  top: 50px;\r\n  left: 50px;\r\n  \r\n  z-index: 1;\r\n  \r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n}\r\n#menuToggle input\r\n{\r\n  display: block;\r\n  width: 40px;\r\n  height: 32px;\r\n  position: absolute;\r\n  top: -7px;\r\n  left: -5px;\r\n  \r\n  cursor: pointer;\r\n  \r\n  opacity: 0; /* hide this */\r\n  z-index: 2; /* and place it over the hamburger */\r\n  \r\n  -webkit-touch-callout: none;\r\n}\r\n/*\r\n * Just a quick hamburger\r\n */\r\n#menuToggle span\r\n{\r\n  display: block;\r\n  width: 33px;\r\n  height: 4px;\r\n  margin-bottom: 5px;\r\n  position: relative;\r\n  \r\n  background: #cdcdcd;\r\n  border-radius: 3px;\r\n  \r\n  z-index: 1;\r\n  \r\n  -webkit-transform-origin: 4px 0px;\r\n  \r\n          transform-origin: 4px 0px;\r\n  \r\n  -webkit-transition: background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease,\r\n              -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease,\r\n              -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease;\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease,\r\n              -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n}\r\n#menuToggle span:first-child\r\n{\r\n  -webkit-transform-origin: 0% 0%;\r\n          transform-origin: 0% 0%;\r\n}\r\n#menuToggle span:nth-last-child(2)\r\n{\r\n  -webkit-transform-origin: 0% 100%;\r\n          transform-origin: 0% 100%;\r\n}\r\n/* \r\n * Transform all the slices of hamburger\r\n * into a crossmark.\r\n */\r\n#menuToggle input:checked ~ span\r\n{\r\n  opacity: 1;\r\n  -webkit-transform: rotate(45deg) translate(-2px, -1px);\r\n          transform: rotate(45deg) translate(-2px, -1px);\r\n  background: #232323;\r\n}\r\n/*\r\n * But let's hide the middle one.\r\n */\r\n#menuToggle input:checked ~ span:nth-last-child(3)\r\n{\r\n  opacity: 0;\r\n  -webkit-transform: rotate(0deg) scale(0.2, 0.2);\r\n          transform: rotate(0deg) scale(0.2, 0.2);\r\n}\r\n/*\r\n * Ohyeah and the last one should go the other direction\r\n */\r\n#menuToggle input:checked ~ span:nth-last-child(2)\r\n{\r\n  -webkit-transform: rotate(-45deg) translate(0, -1px);\r\n          transform: rotate(-45deg) translate(0, -1px);\r\n}\r\n/*\r\n * Make this absolute positioned\r\n * at the top left of the screen\r\n */\r\n#menu\r\n{\r\n  position: absolute;\r\n  width: 300px;\r\n  margin: -100px 0 0 -50px;\r\n  padding: 50px;\r\n  padding-top: 125px;\r\n  \r\n  background: #ededed;\r\n  list-style-type: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  /* to stop flickering of text in safari */\r\n  \r\n  -webkit-transform-origin: 0% 0%;\r\n  \r\n          transform-origin: 0% 0%;\r\n  -webkit-transform: translate(-100%, 0);\r\n          transform: translate(-100%, 0);\r\n  \r\n  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n}\r\n#menu li\r\n{\r\n  padding: 10px 0;\r\n  font-size: 22px;\r\n}\r\n/*\r\n * And let's slide it in from the left\r\n */\r\n#menuToggle input:checked ~ ul\r\n{\r\n  -webkit-transform: none;\r\n          transform: none;\r\n}"

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.html":
/***/ (function(module, exports) {

module.exports = "<nav role=\"navigation\"> <font face=\"Comic sam\" SIZE=6 align=right ><h1><a href=\"#\">Sala de Juegos</a></h1></font>\r\n  <app-menu-mio></app-menu-mio>\r\n</nav>\r\n \r\n \r\n \r\n <!-- <nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"./\">Sala De Juegos</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"./QuienSoy#quien\">Quien</a></li>\r\n          <li><a href=\"/TP_LAV4_2017/QuienSoy#que\">Ques es</a></li>\r\n          <li><a href=\"./QuienSoy#donde\">Donde</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>-->\r\n  <body>\r\n  <header id=\"header\">\r\n    <span class=\"avatar\"><img src=\"./assets/imagenes/quiensoy.jpg\" alt=\"\" /></span>\r\n    \r\n    <ul class=\"icons\">\r\n      <li><a href=\"https://twitter.com/CorreaSolange\" class=\"icon style2 fa-twitter\"><span class=\"label\">Twitter</span></a></li>\r\n      <li><a href=\"https://www.facebook.com/Correa.Solange\" class=\"icon style2 fa-facebook\"><span class=\"label\">Facebook</span></a></li>\r\n      <li><a href=\"https://www.instagram.com/_solange.correa/\" class=\"icon style2 fa-instagram\"><span class=\"label\">Instagram</span></a></li>\r\n      <!--<li><a href=\"#\" class=\"icon style2 fa-500px\"><span class=\"label\">500px</span></a></li>\r\n      <li><a href=\"#\" class=\"icon style2 fa-envelope-o\"><span class=\"label\">Email</span></a></li>-->\r\n    </ul>\r\n    <font face=\"impact\" SIZE=6 COLOR=\"#74afab\" >Solange Correa</font>\r\n    <!--<h3>Soy Solange alumna de UTN FRA</h3>  -->\r\n  </header>\r\n  <!-- First Container -->\r\n  <!-- Codigo de Octa\r\n  <div id =\"quiwn\"class=\"container-fluid bg-1 text-center\">\r\n    <h3 class=\"margin\">Quién Soy?</h3>\r\n    <img src=\"./assets/imagenes/quiensoy.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\r\n    <h3>Soy Un alumno de la UTN FRA</h3>\r\n  </div>\r\n  -->\r\n  <!-- Second Container -->\r\n  <div id =\"que\" class=\"container-fluid bg-2 text-center\">\r\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\r\n    <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\r\n      produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\r\n    <a href=\"#\" class=\"btn btn-default btn-lg\">\r\n      <span class=\"glyphicon glyphicon-file\"></span> Descargar PDF\r\n    </a>\r\n  </div>\r\n  \r\n  <!-- Third Container (Grid) -->\r\n  <div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \r\n    <h3 class=\"margin\">Dónde Funciona?</h3><br>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\r\n        <img src=\"./assets/imagenes/quiensoy1.png\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\r\n        <img src=\"./assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\r\n        <img src=\"./assets/imagenes/quiensoy3.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- Footer -->\r\n  <footer class=\"container-fluid bg-4 text-center\">\r\n    <p>Modificado por <a href=\"https://www.octavio.com.ar\">www.octavio.com.ar</a></p> \r\n  </footer>\r\n</body>"

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienSoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienSoyComponent = (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    return QuienSoyComponent;
}());
QuienSoyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quien-soy',
        template: __webpack_require__("./src/app/componentes/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__("./src/app/componentes/quien-soy/quien-soy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuienSoyComponent);

//# sourceMappingURL=quien-soy.component.js.map

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    border: none;\r\n    border-radius: 15px;\r\n    -webkit-box-shadow: 0 9px #999;\r\n            box-shadow: 0 9px #999;\r\n    \r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n    border: none;\r\n    border-radius: 15px;\r\n    -webkit-box-shadow: 0 9px #999;\r\n            box-shadow: 0 9px #999;\r\n    text-align:center;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn,.signupbtn {float:left;width:50%}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    padding-top: 60px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    border: 1px solid #888;\r\n    width: 98%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button (x) */\r\n\r\n.close {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    color: #000;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n/*Body*/\r\n\r\nbody,html {\r\n   background-image: url(\"/assets/imagenes/FondoDeReg.jpg\");\r\n   height: 700px;\r\n    /*\r\n    background-color: #cccccc;\r\n    background-image: linear-gradient(red, yellow);*/\r\n}"

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu-mio>  </app-menu-mio>\r\n\r\n<body>\r\n  <!--<div class=\"jumbotron\">\r\n    <h2 id=\"terminos\">Terminos y condiciones</h2>\r\n    <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\r\n    <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\r\n    <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\r\n   \r\n  </div>\r\n  <strong><p>No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones </p></strong>\r\n-->\r\n\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n<table class=\"table\" bgcolor=\"transparent\" >\r\n  <thead>\r\n    <tr>\r\n      <th bgcolor=\"#ffffff\"><h2 id=\"terminos\">Terminos y condiciones</h2></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n   \r\n    <tr class=\"success\" >\r\n      <td >\r\n        <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\r\n        <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\r\n        <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\r\n         <div style=\"text-align:center;\"> <button onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\" >Acepto</button>\r\n          <button  class=\"cancelbtn\" routerLink=\"/Principal\" style=\"width:auto;\">No acepto</button>\r\n          <div id=\"id01\" class=\"modal\">\r\n            <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\r\n            \r\n            <form class=\"modal-content animate\" >\r\n              <div class=\"container\">\r\n                <label><b>Email</b></label>\r\n                <input type=\"text\" placeholder=\"Ingresa tu correo\" name=\"email\" required>\r\n\r\n                <label><b>Clave</b></label>\r\n                <input type=\"password\" placeholder=\"Aca la clave\" name=\"psw\" required>\r\n\r\n                <label><b>Repita la clave</b></label>\r\n                <input type=\"password\" placeholder=\"Aca repeti la misa clave  de arriba\" name=\"psw-repeat\" required>\r\n                <input type=\"checkbox\" checked=\"checked\">Recordar mis datos\r\n                <p>creando la cuenta aceptando los<a  onclick=\"document.getElementById('id01').style.display='none'\"  >Terminos y condiciones</a>.</p>\r\n\r\n                <div class=\"clearfix\">\r\n                  <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Me arrepenti</button>\r\n                  <button type=\"submit\" class=\"signupbtn\">Registrarme</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n      </td>\r\n\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n</div>\r\n\r\n  \r\n  <script>\r\n  // Get the modal\r\n  var modal = document.getElementById('id01');\r\n  \r\n  // When the user clicks anywhere outside of the modal, close it\r\n  window.onclick = function(event) {\r\n      if (event.target == modal) {\r\n          modal.style.display = \"none\";\r\n      }\r\n  }\r\n  </script>\r\n  \r\n  </body>\r\n"

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
var RegistroComponent = (function () {
    /* constructor( private miConstructor:FormBuilder) { }
     email=new FormControl('',[Validators.email]);
     formRegistro:FormGroup=this.miConstructor.group({
       usuario:this.email
     });*/
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    return RegistroComponent;
}());
RegistroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registro',
        template: __webpack_require__("./src/app/componentes/registro/registro.component.html"),
        styles: [__webpack_require__("./src/app/componentes/registro/registro.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegistroComponent);

//# sourceMappingURL=registro.component.js.map

/***/ }),

/***/ "./src/app/pipes/sexo.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SexoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SexoPipe = (function () {
    function SexoPipe() {
    }
    SexoPipe.prototype.transform = function (value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    };
    return SexoPipe;
}());
SexoPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'sexo'
    })
], SexoPipe);

//# sourceMappingURL=sexo.pipe.js.map

/***/ }),

/***/ "./src/app/ruteando/ruteando.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuteandoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__ = __webpack_require__("./src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__ = __webpack_require__("./src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__ = __webpack_require__("./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__ = __webpack_require__("./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__ = __webpack_require__("./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__ = __webpack_require__("./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__ = __webpack_require__("./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__ = __webpack_require__("./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_listado_de_paises_listado_de_paises_component__ = __webpack_require__("./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_mapa_de_google_mapa_de_google_component__ = __webpack_require__("./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// importo del module principal
















// declaro donde quiero que se dirija
var MiRuteo = [
    { path: 'Jugadores', component: __WEBPACK_IMPORTED_MODULE_16__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */] },
    ///{path: '/' , component: PrincipalComponent},
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__["a" /* LoginComponent */] },
    { path: 'Mapa', component: __WEBPACK_IMPORTED_MODULE_15__componentes_mapa_de_google_mapa_de_google_component__["a" /* MapaDeGoogleComponent */] },
    { path: 'QuienSoy', component: __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */] },
    { path: 'Registro', component: __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__["a" /* RegistroComponent */] },
    { path: 'Principal', component: __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Listado', component: __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__["a" /* ListadoComponent */] },
    { path: 'Paises', component: __WEBPACK_IMPORTED_MODULE_14__componentes_listado_de_paises_listado_de_paises_component__["a" /* ListadoDePaisesComponent */] },
    { path: 'Juegos',
        component: __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */] },
            { path: 'Adivina', component: __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */] },
            { path: 'AdivinaMasListado', component: __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */] },
            { path: 'AgilidadaMasListado', component: __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */] },
            { path: 'Agilidad', component: __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */] }]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] }
];
var RuteandoModule = (function () {
    function RuteandoModule() {
    }
    return RuteandoModule;
}());
RuteandoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(MiRuteo)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], RuteandoModule);

//# sourceMappingURL=ruteando.module.js.map

/***/ }),

/***/ "./src/app/servicios/archivos-jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivosJugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__ = __webpack_require__("./src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArchivosJugadoresService = (function () {
    function ArchivosJugadoresService(miHttp) {
        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
    }
    ArchivosJugadoresService.prototype.traerJugadores = function (ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(function (data) {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, function (err) {
            console.log(err);
        });
    };
    return ArchivosJugadoresService;
}());
ArchivosJugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
], ArchivosJugadoresService);

var _a;
//# sourceMappingURL=archivos-jugadores.service.js.map

/***/ }),

/***/ "./src/app/servicios/juego-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("./src/app/clases/juego-adivina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__ = __webpack_require__("./src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JuegoServiceService = (function () {
    function JuegoServiceService(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JuegoServiceService.prototype.listar = function () {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
        });
        this.peticion
            .subscribe(function (data) {
            console.log("En listar");
            console.log(data);
        }, function (err) {
            console.info("error: ", err);
        });
        var miArray = new Array();
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 1", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Pepe", true));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 3", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 4", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 5", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 6", false));
        return miArray;
    };
    JuegoServiceService.prototype.listarPromesa = function () {
        this.peticion
            .subscribe(function (data) {
            console.log("En listarPromesa");
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("PepePromesa", true));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 3", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 4", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 5", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    return JuegoServiceService;
}());
JuegoServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
], JuegoServiceService);

var _a;
//# sourceMappingURL=juego-service.service.js.map

/***/ }),

/***/ "./src/app/servicios/jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__ = __webpack_require__("./src/app/servicios/archivos-jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresService = (function () {
    //peticion:any;
    function JugadoresService(miHttp) {
        this.miHttp = miHttp;
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JugadoresService.prototype.traertodos = function (ruta, filtro) {
        var _this = this;
        return this.miHttp.traerJugadores(ruta).then(function (data) {
            console.info("jugadores service", data);
            _this.filtrado = data;
            var ganador;
            if (filtro == "ganadores") {
                ganador = true;
            }
            else {
                ganador = false;
            }
            _this.filtrado = _this.filtrado.filter(function (data) { return data.gano === ganador || filtro == "todos"; });
            return _this.filtrado;
        })
            .catch(function (errror) {
            console.log("error");
            return _this.filtrado;
        });
    };
    return JugadoresService;
}());
JugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__["a" /* ArchivosJugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__["a" /* ArchivosJugadoresService */]) === "function" && _a || Object])
], JugadoresService);

var _a;
//# sourceMappingURL=jugadores.service.js.map

/***/ }),

/***/ "./src/app/servicios/mi-http/mi-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MiHttpService = (function () {
    function MiHttpService(http) {
        this.http = http;
    }
    MiHttpService.prototype.httpGetP = function (url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    MiHttpService.prototype.httpPostP = function (url, objeto) {
        return this.http
            .get(url)
            .subscribe(function (data) {
            console.log(data);
            return data;
        });
    };
    MiHttpService.prototype.httpGetO = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.json().error || 'Server error'); });
    };
    MiHttpService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    MiHttpService.prototype.handleError = function (error) {
        return error;
    };
    return MiHttpService;
}());
MiHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MiHttpService);

var _a;
//# sourceMappingURL=mi-http.service.js.map

/***/ }),

/***/ "./src/app/servicios/paises.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__ = __webpack_require__("./src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaisesService = (function () {
    function PaisesService(miHttp) {
        this.miHttp = miHttp;
    }
    PaisesService.prototype.listar = function () {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
            return data;
        })
            .catch(function (err) {
            console.log(err);
            return null;
        });
        //return null;
    };
    return PaisesService;
}());
PaisesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
], PaisesService);

var _a;
//# sourceMappingURL=paises.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
else {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map