import { NextApiResponse, NextApiRequest } from 'next'
import prisma from '../../db/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const digimonData = await prisma.digimonCards.findMany({ take: 10 })
    res.status(200).json({ content: digimonData })
  } catch (error) {
    res.statusCode = 500
    res.json({ message: 'Server error' })
  }
}
