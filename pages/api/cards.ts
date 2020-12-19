import prisma from "../../db/prisma";

export default async (req, res) => {
	try {
		const digimonData = await prisma.digimonCards.findMany({ take: 10 });
		res.statusCode = 200;
		res.json({ content: digimonData });
	} catch (error) {
		res.statusCode = 500;
		res.json({ message: "Server error" });
	}
};
