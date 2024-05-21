/** @type {import('next').NextConfig} */

console.log(process.env);

module.exports = {
  transpilePackages: ["@repo/lib", "@repo/codegen"],
  env: {
    NEXT_PUBLIC_STAGE: process.env.STAGE
  }
};
