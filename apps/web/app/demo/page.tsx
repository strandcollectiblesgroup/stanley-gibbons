import { demoPageQuery } from "sanity/groq"
import { fetchSanityData } from "@repo/lib/script/sanity/sanity-client";
import { DemoPageQueryResult } from "sanity/sanity.types";
import { DemoModuleController } from "@repo/lib/components"

export default async function Page() {
  const [data] = await fetchSanityData<DemoPageQueryResult>(demoPageQuery);

  return data && (
    <>
      <DemoModuleController modules={data.modules!} />
    </>
  );
}
