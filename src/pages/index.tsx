import VideoList from "@/components/VideoList";
import createApolloClient from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import { Video } from "@prisma/client";

export default function HomePage({ videos }: { videos: Video[] }) {
  return (
    <div>
      <VideoList videos={videos} />
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
