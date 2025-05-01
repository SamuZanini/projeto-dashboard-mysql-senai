import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = `
      SELECT 
        cor,
        COUNT(*) as total_por_cor,
        (SELECT COUNT(*) FROM tb_dadosprojeto) as total_geral
      FROM tb_dadosprojeto 
      GROUP BY cor`;
    const [posts] = await db.query(sql);
    return NextResponse.json({ posts: posts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
