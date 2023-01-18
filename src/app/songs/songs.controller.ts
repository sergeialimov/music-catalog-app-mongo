import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Redirect,
  Put,
  Param,
  Query,
} from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get('all')
  @HttpCode(200)
  getAll() {
    return this.songsService.getAll();
  }

  @Get('one/:id')
  @HttpCode(200)
  getOneQuery(@Param('id') id) {
    return this.songsService.getOne(+id);
  }

  @Put('create')
  @HttpCode(201) // 201 Created
  create(@Query() query) {
    return this.songsService.createSong(query.name);
  }

  @Patch('update-name')
  @HttpCode(202) // 202 Accepted
  update(@Query() query) {
    return this.songsService.updateSong(+query.id, query.name);
  }

  @Delete('delete')
  @HttpCode(204) // 204 No Content
  delete(@Query('id') id: number) {
    return this.songsService.deleteSong(+id);
  }

  @Get('all-redirect')
  @Redirect('all', 301)
  getAllOld() {
    return null; // This will never be called
  }
}
