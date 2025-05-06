import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const cor = searchParams.get("cor");
    const material = searchParams.get("material");
    const altura = searchParams.get("altura");

    const db = await createConnection();
    let sql = `
      SELECT 
        DATE(p.data_hora) as data,
        COUNT(*) as total
      FROM tb_prod p
      WHERE 1=1
    `;

    const params = [];
    if (cor) {
      sql += ` AND p.cor = ?`;
      params.push(cor);
    }
    if (material) {
      sql += ` AND p.material = ?`;
      params.push(material);
    }
    if (altura) {
      sql += ` AND p.tamanho = ?`;
      params.push(altura);
    }

    sql += ` GROUP BY DATE(p.data_hora) ORDER BY p.data_hora`;

    const [posts] = await db.query(sql, params);
    return NextResponse.json({ posts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
