"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsService = void 0;
const songs = {
    1: {
        id: 1,
        name: 'Song 1',
        hidden: false,
    },
    2: {
        id: 2,
        name: 'Song 2',
        hidden: false,
    },
    3: {
        id: 3,
        name: 'Song 3',
        hidden: false,
    },
    4: {
        id: 4,
        name: 'Song 4',
        hidden: true,
    },
};
class SongsService {
    getAll() {
        const songsArr = Object.values(songs);
        return songsArr.filter((song) => !song.hidden);
    }
    getOne(id) {
        if (typeof id !== 'number') {
            return 'Id should be a number';
        }
        if (id <= 0 || id > Object.keys(songs).length) {
            return `Id ${id} is not correct`;
        }
        if (songs[id].hidden) {
            return `Song ${id} is hidden`;
        }
        return songs[id];
    }
    createSong(name) {
        const id = Object.keys(songs).length + 1;
        songs[id] = {
            id,
            name,
            hiddden: false,
        };
        return songs[id];
    }
    updateSong(id, newName) {
        if (typeof id !== 'number') {
            return 'Id should be a number';
        }
        if (id <= 0 || id > Object.keys(songs).length) {
            return `Id ${id} is not correct`;
        }
        const song = songs[id];
        song.name = newName;
        return song;
    }
    deleteSong(id) {
        if (typeof id !== 'number') {
            return 'Id should be a number';
        }
        if (id <= 0 || id > Object.keys(songs).length) {
            return `Id ${id} is not correct`;
        }
        const song = songs[id];
        song.hidden = true;
    }
}
exports.SongsService = SongsService;
//# sourceMappingURL=songs.service.js.map