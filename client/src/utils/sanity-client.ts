import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_PROJECT_DATASET,
  apiVersion: "2023-01-01",
  useCdn: true,
});
export default client;
