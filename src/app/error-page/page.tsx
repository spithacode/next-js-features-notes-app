import { sleep } from "@/lib/utils";
import React from "react";

const ErrorPage = async () => {
  await sleep();

  //TODO: Comment the ligne bellow if you want to build the project
  throw new Error("An error occurred :( ");

  return <div>Page Content</div>;
};

export default ErrorPage;
