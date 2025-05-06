import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = `
      SELECT 
        COUNT(*) as total,
        COUNT(*) / GREATEST(TIMESTAMPDIFF(MINUTE, MIN(data_hora), MAX(data_hora)), 1) as taxa_por_minuto
      FROM tb_prod
    `;
    const [posts] = await db.query(sql);
    return NextResponse.json({ posts: posts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
