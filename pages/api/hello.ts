// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface TestResponseData {
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TestResponseData>
) {
  res
    .status(200)
    .json({ name: "This is your first app deployed on Vercel I guess so " });
}
