import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "9ejy4jmc",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-05-16",
});

export async function fetchSanityData<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return await client.fetch(query, params);
}
