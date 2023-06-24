// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { currentUrl } from "../../config";

export interface TestResponseData {
  name: string;
}

export async function getData() {
  // let data: TestResponseData = { name: "" };
  // return new Response(JSON.stringify({ name: "This is fun" })).json();
  const data: TestResponseData = { name: "This is fun bro!" };
  const stringifiedData = JSON.stringify(data);
  return new Response(stringifiedData).json();
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TestResponseData>
) {
  const jsonData = await getData();
  res.status(200).json(jsonData);
}
