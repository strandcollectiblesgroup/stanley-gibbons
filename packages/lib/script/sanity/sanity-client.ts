import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  useCdn: false,
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
});

export async function fetchSanityData<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return await client.fetch(query, params);
}
