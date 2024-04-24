import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export default async function handler(req:NextRequest, res:NextResponse) {
  if (req.method === 'GET') {
    // Handle fetching records
    const investors = await prisma.investor.findMany();
    const students = await prisma.student.findMany();
    const pools = await prisma.pool.findMany();
    return res.json({ investors, students, pools });
  } else if (req.method === 'POST') {
    const { entity, data } = req.body;
    let result;
    switch (entity) {
      case 'investor':
        result = await prisma.investor.create({ data });
        break;
      case 'student':
        result = await prisma.student.create({ data });
        break;
      case 'pool':
        result = await prisma.pool.create({ data });
        break;
      default:
        res.status(400).json({ error: 'Invalid entity specified' });
        return;
    }
    res.json(result);
  } else if (req.method === 'PATCH') {
    const { entity, id, data } = req.body;
    let result;
    switch (entity) {
      case 'investor':
        result = await prisma.investor.update({
          where: { investor_id: id },
          data,
        });
        break;
      case 'student':
        result = await prisma.student.update({
          where: { student_id: id },
          data,
        });
        break;
      case 'pool':
        result = await prisma.pool.update({
          where: { pool_id: id },
          data,
        });
        break;
      default:
        res.status(400).json({ error: 'Invalid entity specified' });
        return;
    }
    res.json(result);
  } else if (req.method === 'DELETE') {
    const { entity, id } = req.body;
    let result;
    switch (entity) {
      case 'investor':
        result = await prisma.investor.delete({ where: { investor_id: id } });
        break;
      case 'student':
        result = await prisma.student.delete({ where: { student_id: id } });
        break;
      case 'pool':
        result = await prisma.pool.delete({ where: { pool_id: id } });
        break;
      default:
        res.status(400).json({ error: 'Invalid entity specified' });
        return;
    }
    res.json(result);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
