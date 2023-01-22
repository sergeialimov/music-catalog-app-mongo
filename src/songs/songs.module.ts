import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { Song, SongSchema } from 'src/schemas/song.schema';

@Module({
  imports: [MongooseModule.forFeature([{ title: Song.title, schema: SongSchema }])],
  controllers: [SongsController],
  providers: [SongsService],
})

export class SongModule {};