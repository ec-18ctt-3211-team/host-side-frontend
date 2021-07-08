import { IImageTag } from './image-tag.interface';

export interface IRoomDetail {
  room_name: string;
  host: string;
  room_type: string;
  total_bedrooms: number;
  price: number;
  imageSrc: IImageTag[];
  description: string;
  path?: string;
}
