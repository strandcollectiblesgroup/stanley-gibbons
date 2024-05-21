/** @type {import('next').NextConfig} */

module.exports = {
  transpilePackages: ["@repo/lib", "@repo/codegen"],
  env: {
    NEXT_PUBLIC_STAGE: process.env.STAGE
  }
};
