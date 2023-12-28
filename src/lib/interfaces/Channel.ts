import { ChannelImage } from "@prisma/client";

export default interface IChannel {
  id: string;
  createdAt: string;
  updatedAt: string;
  image: ChannelImage;
  name: string;
  subscribers: number;
}
