import { PrismaClient, Prisma } from "@prisma/client";

export async function _existsAdministrator(
  args: Prisma.AdministratorWhereUniqueInput
) {
  const prisma = new PrismaClient();

  try {
    const result = await prisma.administrator.findUnique({
      select: {
        id: true,
      },
      where: args,
    });

    if (result) {
      return true;
    }

    return false;
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _createAdministrator(
  args: Prisma.AdministratorCreateArgs
) {
  const prisma = new PrismaClient();

  try {
    return await prisma.administrator.create(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _getAdministrator(
  args: Prisma.AdministratorFindUniqueArgs
) {
  const prisma = new PrismaClient();

  try {
    return await prisma.administrator.findUnique(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _getManyAdministrator(
  args: Prisma.AdministratorFindManyArgs
) {
  const prisma = new PrismaClient();

  try {
    return await prisma.administrator.findMany(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _upsertAdministrator(
  args: Prisma.AdministratorUpsertArgs
) {
  const prisma = new PrismaClient();

  try {
    return await prisma.administrator.upsert(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _updateAdministrator(
  args: Prisma.AdministratorUpdateArgs
) {
  const prisma = new PrismaClient();

  try {
    return await prisma.administrator.update(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _updateManyAdministrator(
  args: Prisma.AdministratorUpdateManyArgs
) {
  const prisma = new PrismaClient();

  try {
    return await prisma.administrator.updateMany(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _deleteAdministrator(
  args: Prisma.AdministratorDeleteArgs
) {
  const prisma = new PrismaClient();

  try {
    return await prisma.administrator.delete(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _deleteManyAdministrator(
  args: Prisma.AdministratorDeleteManyArgs
) {
  const prisma = new PrismaClient();

  try {
    return await prisma.administrator.deleteMany(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}
