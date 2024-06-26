"use client";

import { DemoPageQueryResult } from "sanity/sanity.types";
import { Unpacked } from "@repo/lib/types";
import {
  MediaAndTextModule,
  MediaAndTextModuleProps,
} from "@repo/lib/components";

export type Modules = Unpacked<
  Exclude<DemoPageQueryResult[0], undefined>["modules"]
>;

interface DemoModuleControllerProps {
  modules: Modules[];
}

export const DemoModuleController: React.FC<DemoModuleControllerProps> = ({
  modules,
}) => {
  return modules.map((module) => {
    switch (module?._type) {
      case "mediaAndTextModule":
        return (
          <MediaAndTextModule
            key={module._key}
            {...(module as unknown as MediaAndTextModuleProps)}
          />
        );
      default:
        return <p>{module?._type}</p>;
    }
  });
};
