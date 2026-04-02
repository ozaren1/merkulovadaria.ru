import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'desktop', maxCount: 1 },
      { name: 'mobile', maxCount: 1 },
    ]),
  )
  create(
    @UploadedFiles()
    files: {
      desktop?: Express.Multer.File[];
      mobile?: Express.Multer.File[];
    },
    @Body() dto: CreateBannerDto,
  ) {
    const desktopFile = files.desktop?.[0];
    const mobileFile = files.mobile?.[0];

    if (!desktopFile || !mobileFile) {
      throw new Error('Оба файла обязательны');
    }

    return this.bannerService.create(desktopFile, mobileFile, dto);
  }

  @Get()
  findAll() {
    return this.bannerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBannerDto: UpdateBannerDto) {
    return this.bannerService.update(id, updateBannerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bannerService.remove(id);
  }
}
