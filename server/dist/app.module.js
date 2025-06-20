"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const games_module_1 = require("./games/games.module");
const users_module_1 = require("./users/users.module");
const balance_gateway_1 = require("./balance/balance.gateway");
const balance_module_1 = require("./balance/balance.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [games_module_1.GamesModule, users_module_1.UsersModule, balance_module_1.BalanceModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, balance_gateway_1.BalanceGateway],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map