import type { NextApiRequest, NextApiResponse } from "next";
import { createYoga } from "graphql-yoga";
import { schema } from "@/graphql/schema";
import { context } from "@/graphql/context";

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: schema,
  context,
  graphqlEndpoint: "/api/graphql",
});
