import videosData from "../../../lib/data/videoData.json";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  duration: number;
  views: number;
  createdAt: string;
  updatedAt: null;
  thumbnail: {
    src: string;
  };
  title: string;
  channel: {
    id: string;
    image: {
      url: string;
    };
    name: string;
    createdAt: string;
    updatedAt: null;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Data[] }>
) {
  res.status(200).json({ data: videosData });
}
