import { NextApiResponse, NextApiRequest } from 'next'

import prisma from '../../db/prisma'

export default async function filters(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const expansions = await prisma.expansion.findMany()
    res.status(200).json({ expansions })
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}
