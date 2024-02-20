import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      res.status(200).json('GET method');
    }
    if (req.method === 'POST') {
      res.status(200).json('POST method');
    }
  } catch (error) {
    res.status(500).json({ error: 'failed to load' });
  }
}
