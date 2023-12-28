import styles from "./styles.module.css";
import videosData from "../../lib/data/videoData.json";
import Image from "next/image";
import { useRouter } from "next/router";
import { formatDistanceToNowStrict } from "date-fns";

const formatDate = (date: Date) => {
  return formatDistanceToNowStrict(new Date(date), { addSuffix: true });
};

export default function VideoList({ videos }: { videos: any }) {
  const router = useRouter();

  return (
    <div className={styles.videoListContainer}>
      {videos.map((video: any) => {
        return (
          <div
            onClick={() => {
              router.push(`/video/${video.id}`);
            }}
            className={styles.videoContainer}
            key={video.id}
          >
            <div className={styles.videoThumbnailContainer}>
              <Image fill src={video.thumbnail.url} alt={video.title} />
            </div>

            <div>
              <div className={styles.videoChannelImageContainer}>
                <Image
                  fill
                  src={video.channel.image.url}
                  alt={video.channel.name}
                />
              </div>
              <p>{video.channel.name}</p>
              <p>{video.title}</p>
              <p>{video.duration}</p>
              <p>{video.totalViews.toLocaleString()} views</p>
              <p>{video.createdAt}</p>
              {/* <p>{formatDate(new Date(video.createdAt))}</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
