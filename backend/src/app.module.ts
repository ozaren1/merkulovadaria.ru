import { Module } from '@nestjs/common';
import { BannerModule } from './banner/banner.module';

@Module({
  imports: [BannerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
