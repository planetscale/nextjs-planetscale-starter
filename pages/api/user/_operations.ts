import {
  PrismaClient,
  UserWhereUniqueInput,
  UserCreateArgs,
  UserFindUniqueArgs,
  UserFindManyArgs,
  UserUpsertArgs,
  UserUpdateArgs,
  UserUpdateManyArgs,
  UserDeleteArgs,
  UserDeleteManyArgs,
} from '@prisma/client'


export async function _existsUser(args: UserWhereUniqueInput) {
  const prisma = new PrismaClient()

  try {
    const result = await prisma.user.findUnique({
      select: {
        id: true
      },
      where: args
    })

    if (result) {
      return true
    }

    return false
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _createUser(args: UserCreateArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.user.create(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _getUser(args: UserFindUniqueArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.user.findUnique(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _getManyUser(args: UserFindManyArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.user.findMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _upsertUser(args: UserUpsertArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.user.upsert(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _updateUser(args: UserUpdateArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.user.update(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _updateManyUser(args: UserUpdateManyArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.user.updateMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _deleteUser(args: UserDeleteArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.user.delete(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _deleteManyUser(args: UserDeleteManyArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.user.deleteMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}
