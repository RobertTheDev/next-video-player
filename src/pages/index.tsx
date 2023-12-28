import VideoCard from "@/components/VideoCard";
import createApolloClient from "@/lib/apolloClient";
import IVideo from "@/lib/interfaces/Video";
import { gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

export default function HomePage({ videos }: { videos: IVideo[] }) {
  return (
    <div className={styles.videoListContainer}>
      {videos.map((video) => {
        return <VideoCard video={video} key={video.id} />;
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query getVideos {
        videos {
          id
          createdAt
          title
          totalComments
          totalViews
          channel {
            id
            name
            image {
              url
            }
          }
          thumbnail {
            alt
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      videos: data.videos,
    },
  };
}
