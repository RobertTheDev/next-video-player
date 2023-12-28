import { PrismaClient } from "@prisma/client";
import { makeSchema, objectType, queryType, list, extendType } from "nexus";

const VideoThumbnail = objectType({
  name: "VideoThumbnail",
  definition(t) {
    t.string("id");
    t.string("createdAt");
    t.string("updatedAt");
    t.nullable.string("alt");
    t.string("url");
  },
});

const Channel = objectType({
  name: "Channel",
  definition(t) {
    t.string("id");
    t.string("createdAt");
    t.string("updatedAt");

    t.string("name");
    t.int("subscribers");

    t.field("image", { type: ChannelImage });
  },
});

const ChannelImage = objectType({
  name: "ChannelImage",
  definition(t) {
    t.string("id");
    t.string("createdAt");
    t.string("updatedAt");

    t.nullable.string("alt");
    t.string("url");
  },
});

const Video = objectType({
  name: "Video",
  definition(t) {
    t.string("id");
    t.string("createdAt");
    t.string("updatedAt");
    t.int("duration");
    t.string("title");
    t.int("totalComments");
    t.int("totalDislikes");
    t.int("totalLikes");
    t.int("totalViews");
    t.string("thumbnailId");
    t.string("channelId");
    t.field("channel", { type: "Channel" });
    t.field("thumbnail", { type: "VideoThumbnail" });
  },
});

const p = new PrismaClient();

const Query = queryType({
  definition(t) {
    t.field("videos", {
      type: list(Video),
      resolve(_root, _args, ctx) {
        return ctx.prisma.video.findMany({
          include: {
            channel: {
              include: {
                image: true,
              },
            },
            thumbnail: true,
          },
        });
      },
    });
  },
});

const GetVideoByIdQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("videoById", {
      type: Video,
      args: {
        id: "String",
      },
      resolve(_root, args, ctx) {
        const { id } = args;

        return ctx.prisma.video.findUnique({
          where: {
            id,
          },
          include: {
            channel: {
              include: {
                image: true,
              },
            },
            thumbnail: true,
          },
        });
      },
    });
  },
});

export const schema = makeSchema({
  types: [
    Video,
    VideoThumbnail,
    Channel,
    ChannelImage,
    Query,
    GetVideoByIdQuery,
  ],
});
