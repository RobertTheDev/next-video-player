import styles from "./styles.module.css";
import videosData from "../../lib/data/videoData.json";
import Image from "next/image";
import { useRouter } from "next/router";
import { formatDistanceToNowStrict } from "date-fns";
import IVideo from "@/lib/interfaces/Video";

const formatDate = (date: Date) => {
  return formatDistanceToNowStrict(new Date(date), { addSuffix: true });
};

export default function VideoCard({ video }: { video: IVideo }) {
  const router = useRouter();

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

      <div className={styles.videoChannelBodyContainer}>
        <div className={styles.videoChannelImageContainer}>
          <Image fill src={video.channel.image.url} alt={video.channel.name} />
        </div>
        <div className={styles.videoChannelContentContainer}>
          <div>
            <p className={styles.videoTitle}>{video.title}</p>
            <p>{video.channel.name}</p>
          </div>
          <div className={styles.videoChannelDetailsContainer}>
            <p>{video.duration}</p>
            <p>{video.totalViews.toLocaleString()} views</p>
            <p>{video.createdAt}</p>
          </div>
          {/* <p>{formatDate(new Date(video.createdAt))}</p> */}
        </div>
      </div>
    </div>
  );
}
