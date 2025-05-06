import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = `
      SELECT 
        m.material,
        c.cor,
        COUNT(*) as total_por_tipo
      FROM tb_prod p
      JOIN tb_material m ON p.material = m.id_material
      JOIN tb_cor c ON p.cor = c.id_cor
      GROUP BY m.material, c.cor
      ORDER BY c.id_cor, m.id_material
    `;
    const [posts] = await db.query(sql);
    return NextResponse.json({ posts: posts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
