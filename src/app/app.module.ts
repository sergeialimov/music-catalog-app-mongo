import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsController } from './songs/songs.controller';
import { SongsService } from './songs/songs.service';

@Module({
  imports: [],
  controllers: [AppController, SongsController],
  providers: [AppService, SongsService],
})
export class AppModule {}
