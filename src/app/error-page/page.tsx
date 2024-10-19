import { sleep } from "@/lib/utils";
import React from "react";

const ErrorPage = async () => {
  await sleep();
  throw new Error("An error occurred :( ");
  return <div>Page Content</div>;
};

export default ErrorPage;
