import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = `
      SELECT 
        material,
        cor,
        COUNT(*) as total_por_tipo
      FROM tb_dadosprojeto 
      GROUP BY material, cor
      ORDER BY cor, material
    `;
    const [posts] = await db.query(sql);
    return NextResponse.json({ posts: posts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
