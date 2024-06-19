"use client";

import { DemoPageQueryResult } from "sanity/sanity.types";
import { Unpacked } from "@repo/lib/types";

// Define props if necessary. For example:
type Modules = Unpacked<Exclude<DemoPageQueryResult[0], undefined>["modules"]>;

interface DemoModuleControllerProps {
  modules: Modules[];
}

export const DemoModuleController: React.FC<DemoModuleControllerProps> = ({
  modules,
}) => {
  return modules.map((module) => {
    switch (module?._type) {
      default:
        return <>{module?._type}</>;
    }
  });
};
