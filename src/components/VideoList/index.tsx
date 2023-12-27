import styles from "./styles.module.css";
import videosData from "../../lib/data/videoData.json";
import Image from "next/image";

export default function VideoList() {
  return (
    <div className={styles.videoList}>
      {videosData.map((video) => {
        return (
          <div className={styles.videoContainer} key={video.id}>
            <div className={styles.videoThumbnailImage}>
              <Image fill src={video.thumbnail.src} alt={video.title} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
