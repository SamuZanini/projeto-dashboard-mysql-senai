import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = `
      SELECT c.cor, COUNT(*) as total
      FROM tb_prod p
      JOIN tb_cor c ON p.cor = c.id_cor
      GROUP BY c.cor
      ORDER BY c.id_cor
    `;
    const [posts] = await db.query(sql);
    return NextResponse.json({ posts: posts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
