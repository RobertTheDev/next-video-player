import createApolloClient from "@/lib/apolloClient";
import IVideo from "@/lib/interfaces/Video";
import { gql } from "@apollo/client";
import Image from "next/image";

export default function VideoPage({ video }: { video: IVideo }) {
  return (
    <div>
      <h1>{video.title}</h1>
      <Image
        height={400}
        width={400}
        src={video.thumbnail.url}
        alt={video.thumbnail.alt ? video.thumbnail.alt : "Thumbnail"}
      />
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query getVideoById($videoId: String!) {
        videoById(id: $videoId) {
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
    variables: { videoId: id },
  });

  return {
    props: {
      video: data.videoById,
    },
  };
}
