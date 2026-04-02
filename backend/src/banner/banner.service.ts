import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BannerService {
  constructor(private readonly prismaService: PrismaService) {}
  create(
    desktopFile: Express.Multer.File,
    mobileFile: Express.Multer.File,
    createBannerDto: CreateBannerDto,
  ) {
    const config = {
      bucketName: 'bc6a31968-merkulovadaria',
      dirName: 'photos',
      // region: 'eu-west-1',
      accessKeyId: 'LIO1F23OSYB33QOQQK0D',
      secretAccessKey: 'VVEVdU25IrCvfdOXBqXkpCxiLzRZpTLnxzmmu23a',
      s3Url: 'https://s3-nl.hostkey.com',
    };

    const S3Client = new S3Client(config);

    S3Client.uploadFile(desktopFile, desktopFile.filename)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    S3Client.uploadFile(mobileFile, mobileFile.filename)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    return this.prismaService.mainBanner.create({
      data: {
        ...createBannerDto,
      },
    });
  }

  findAll() {
    return this.prismaService.mainBanner.findMany();
  }

  findOne(id: string) {
    return this.prismaService.mainBanner.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateBannerDto: UpdateBannerDto) {
    const banner = await this.prismaService.mainBanner.findFirst({
      where: {
        id,
      },
    });

    if (!banner) {
      throw new NotFoundException();
    }

    return this.prismaService.mainBanner.update({
      where: {
        id,
      },
      data: {
        ...updateBannerDto,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.mainBanner.delete({
      where: {
        id,
      },
    });
  }
}
