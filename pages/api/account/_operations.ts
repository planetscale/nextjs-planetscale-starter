import { Prisma } from "@prisma/client";
import prisma from "@db";

export async function _existsAccount(args: Prisma.AccountWhereUniqueInput) {
  try {
    const result = await prisma.account.findUnique({
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

export async function _createAccount(args: Prisma.AccountCreateArgs) {
  try {
    return await prisma.account.create(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _getAccount(args: Prisma.AccountFindUniqueArgs) {
  try {
    return await prisma.account.findUnique(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _getManyAccount(args: Prisma.AccountFindManyArgs) {
  try {
    return await prisma.account.findMany(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _upsertAccount(args: Prisma.AccountUpsertArgs) {
  try {
    return await prisma.account.upsert(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _updateAccount(args: Prisma.AccountUpdateArgs) {
  try {
    return await prisma.account.update(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _updateManyAccount(args: Prisma.AccountUpdateManyArgs) {
  try {
    return await prisma.account.updateMany(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _deleteAccount(args: Prisma.AccountDeleteArgs) {
  try {
    return await prisma.account.delete(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}

export async function _deleteManyAccount(args: Prisma.AccountDeleteManyArgs) {
  try {
    return await prisma.account.deleteMany(args);
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
}
