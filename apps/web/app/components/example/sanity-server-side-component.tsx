import { Box } from "@chakra-ui/react";
import { fetchSanityData } from "@repo/lib/script/sanity/sanity-client";
import { Demo } from "sanity/sanity.types";
import { demoPageQuery } from "../../../../sanity/groq";
import { ClientSideLogger } from "./client-side-logging";

export const SanityServerSideComponent: React.FC = async () => {
  // Use the useQuery hook to fetch data
  const [data] = await fetchSanityData<Demo[]>(demoPageQuery);

  return (
    <>
      <ClientSideLogger data={data} clear />
      <Box py={1} px={3} borderRadius={4} bg="green.500" mx={2}>
        haa = {data?.title}
        {data?.modules?.map((item) => {
          return <p>{item._type}</p>;
        })}
      </Box>
    </>
  );
};
