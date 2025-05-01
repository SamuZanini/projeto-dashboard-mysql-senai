import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const cor = searchParams.get("cor");
    const material = searchParams.get("material");
    const altura = searchParams.get("altura"); // Corrigido de "Altura" para "altura"

    const db = await createConnection();
    let sql = `
      SELECT 
        DATE(data_hora) as data,
        COUNT(*) as total
      FROM tb_dadosprojeto
      WHERE 1=1
    `;

    const params = [];
    if (cor) {
      sql += ` AND cor = ?`;
      params.push(cor.toUpperCase());
    }
    if (material) {
      sql += ` AND material = ?`;
      params.push(material.toUpperCase());
    }
    if (altura) {
      sql += ` AND altura = ?`; // Certifique-se que a coluna no banco se chama "altura"
      params.push(altura.toUpperCase());
    }

    sql += ` GROUP BY DATE(data_hora) ORDER BY data_hora`;

    const [posts] = await db.query(sql, params);
    return NextResponse.json({ posts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
