import { Prisma } from "@prisma/client";
import prisma from "@db";

export async function _existsUser(args: Prisma.UserWhereUniqueInput) {
  try {
    const result = await prisma.user.findUnique({
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

export async function _createUser(args: Prisma.UserCreateArgs) {
  try {
    return await prisma.user.create(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _getUser(args: Prisma.UserFindUniqueArgs) {
  try {
    return await prisma.user.findUnique(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _getManyUser(args: Prisma.UserFindManyArgs) {
  try {
    return await prisma.user.findMany(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _upsertUser(args: Prisma.UserUpsertArgs) {
  try {
    return await prisma.user.upsert(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _updateUser(args: Prisma.UserUpdateArgs) {
  try {
    return await prisma.user.update(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _updateManyUser(args: Prisma.UserUpdateManyArgs) {
  try {
    return await prisma.user.updateMany(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _deleteUser(args: Prisma.UserDeleteArgs) {
  try {
    return await prisma.user.delete(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _deleteManyUser(args: Prisma.UserDeleteManyArgs) {
  try {
    return await prisma.user.deleteMany(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}
