import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const newInvestor = await prisma.investor.create({
        data: {
          investor_name: 'John Doe',
          profile: 'Bio of John Doe',
        },
      });
    const updateInvestor = await prisma.investor.update({
        where: {
            investor_id: 'id_of_the_investor',
          },
        data: {
          investor_name: 'John Doe',
          profile: 'Bio of John Doe',
        },
      });
    const deleteInvestor = await prisma.investor.delete({
        where: {
            investor_id: 'id_of_the_investor',
          },
      });
    const getInvestors = await prisma.investor.findMany();
    const addStudent = await prisma.student.create({
        data: {
          student_name: 'John Doe',
          profile: 'Bio of John Doe',
        },
      });
    const addPool = await prisma.pool.create({
        data: {
          pool_name: 'Tech Skills Bootcamp',
          investment_amount: 2000,
          tokens_earned: 20,
          investment_status: 'Active',
          potential_returns: 'Redeem tokens for a percentage of students\' future earnings',
        },
      });
    const updateStudent = await prisma.student.update({
        where: {
            student_id: 'id_of_the_student',
          },
        data: {
          student_name: 'John Doe',
          profile: 'Bio of John Doe',
        },
      });
    const updatePool = await prisma.pool.update({
        where: {
            pool_id: 'id_of_the_pool',
          },
        data: {
          pool_name: 'Tech Skills Bootcamp',
          investment_amount: 2000,
          tokens_earned: 20,
          investment_status: 'Active',
          potential_returns: 'Redeem tokens for a percentage of students\' future earnings',
        },
      });
    const deleteStudent = await prisma.student.delete({
        where: {
            student_id: 'id_of_the_student',
          },
      });
    const deletePool = await prisma.pool.delete({
        where: {
            pool_id: 'id_of_the_pool',
          },
      });
    const getStudents = await prisma.student.findMany();
    const getPools = await prisma.pool.findMany();
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
