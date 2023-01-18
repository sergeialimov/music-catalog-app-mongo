"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TracksController = void 0;
const common_1 = require("@nestjs/common");
const tracks_service_1 = require("./tracks.service");
let TracksController = class TracksController {
    constructor(tracksService) {
        this.tracksService = tracksService;
    }
    getAll() {
        return this.tracksService.getAll();
    }
    getOneQuery(id) {
        return this.tracksService.getOne(+id);
    }
    create(query) {
        return this.tracksService.createTrack(query.name);
    }
    update(query) {
        return this.tracksService.updateTrack(+query.id, query.name);
    }
    delete(id) {
        return this.tracksService.deleteTrack(+id);
    }
    getAllOld() {
        return null;
    }
};
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('one/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "getOneQuery", null);
__decorate([
    (0, common_1.Put)('create'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('update-name'),
    (0, common_1.HttpCode)(202),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('all-redirect'),
    (0, common_1.Redirect)('all', 301),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TracksController.prototype, "getAllOld", null);
TracksController = __decorate([
    (0, common_1.Controller)('tracks'),
    __metadata("design:paramtypes", [tracks_service_1.TracksService])
], TracksController);
exports.TracksController = TracksController;
//# sourceMappingURL=tracks.controller.js.map