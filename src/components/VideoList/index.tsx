import styles from "./styles.module.css";
import videosData from "../../lib/data/videoData.json";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VideoList() {
  const router = useRouter();

  return (
    <div className={styles.videoListContainer}>
      {videosData.map((video) => {
        return (
          <div
            onClick={() => {
              router.push(`/video/${video.id}`);
            }}
            className={styles.videoContainer}
            key={video.id}
          >
            <div className={styles.videoThumbnailContainer}>
              <Image fill src={video.thumbnail.src} alt={video.title} />
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
              <p>{video.views} views</p>
              <p>{video.createdAt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
