import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
const prisma = new PrismaClient();

async function main() {
  const encryptedPassword = await hash("password1234", 12);
  await prisma.user.upsert({
    where: { email: "a@a.com" },
    update: {},
    create: {
      email: "a@a.com",
      name: "Alice",
      password: encryptedPassword,
    },
  });

  await prisma.user.upsert({
    where: { email: "b@b.com" },
    update: {},
    create: {
      email: "b@b.com",
      name: "Bob",
      password: encryptedPassword,
    },
  });

  await prisma.user.upsert({
    where: { email: "c@c.com" },
    update: {},
    create: {
      email: "c@c.com",
      name: "Carla",
      password: encryptedPassword,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
