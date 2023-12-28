import IChannel from "./Channel";
import IVideoThumbnail from "./VideoThumbnail";

export default interface IVideo {
  id: string;
  createdAt: string;
  updatedAt: string;
  duration: number;
  title: string;
  totalComments: number;
  totalDislikes: number;
  totalLikes: number;
  totalViews: number;
  thumbnailId: string;
  channelId: string;
  channel: IChannel;
  thumbnail: IVideoThumbnail;
}
