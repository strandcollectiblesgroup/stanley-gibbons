import { StickyDevNav } from "@repo/lib/components";
import { ServerSideComponent } from "./components/example/server-side-component";
import { ClientSideComponent } from "./components/example/client-side-component";

export default function Home() {
  return (
    <>
      <StickyDevNav>
        <ClientSideComponent />
        <ServerSideComponent />
      </StickyDevNav>
    </>
  );
}
