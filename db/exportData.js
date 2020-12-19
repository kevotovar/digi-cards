const { prisma } = require("./prisma");
const digimons = require("./digimon.json");

function exportData() {
	digimons.forEach((element) => {
		prisma.digimonCards
			.create({
				data: element,
			})
			.catch(console.error)
			.then(console.log);
	});
}

exportData();
