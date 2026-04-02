import { MainBannerType } from '../../../generated/prisma/enums';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateBannerDto {
  @IsNotEmpty()
  alt: string;

  internalName: string;
  active: boolean;
  sortOrder: number;
}
