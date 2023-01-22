import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Song, SongDocument } from 'src/schemas/song.schema';


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

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.title) private songModel: Model<SongDocument>) {}

  findAll() {
    return this.songModel.find().exec();
  }

  getAll() {
    const songsArr = Object.values(songs);
    return songsArr.filter((song) => !song.hidden);
  }

  getOne(id: number) {
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

  createSong(name: string) {
    const id = Object.keys(songs).length + 1;
    songs[id] = {
      id,
      name,
      hiddden: false,
    };
    return songs[id];
  }

  updateSong(id: number, newName: string) {
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

  deleteSong(id: number) {
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
