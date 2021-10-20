import prismaClient from "../prisma";

class GetLastThreeMessages {
    async execute() {
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc"
            },

            include: {
                user: true
            }
        });


        // SELECT * FROM messages LIMIT 3 BY created_at desc

        return messages;
    }

}


export { GetLastThreeMessages }

