import { NextApiRequest, NextApiResponse } from "next";

export type PlayResponse = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<PlayResponse>) => {
  res.status(200).json({ name: "John Doe" });
};
