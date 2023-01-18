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
exports.SongsController = void 0;
const common_1 = require("@nestjs/common");
const songs_service_1 = require("./songs.service");
let SongsController = class SongsController {
    constructor(songsService) {
        this.songsService = songsService;
    }
    getAll() {
        return this.songsService.getAll();
    }
    getOneQuery(id) {
        return this.songsService.getOne(+id);
    }
    create(query) {
        return this.songsService.createSong(query.name);
    }
    update(query) {
        return this.songsService.updateSong(+query.id, query.name);
    }
    delete(id) {
        return this.songsService.deleteSong(+id);
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
], SongsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('one/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "getOneQuery", null);
__decorate([
    (0, common_1.Put)('create'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('update-name'),
    (0, common_1.HttpCode)(202),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('all-redirect'),
    (0, common_1.Redirect)('all', 301),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "getAllOld", null);
SongsController = __decorate([
    (0, common_1.Controller)('songs'),
    __metadata("design:paramtypes", [songs_service_1.SongsService])
], SongsController);
exports.SongsController = SongsController;
//# sourceMappingURL=songs.controller.js.map