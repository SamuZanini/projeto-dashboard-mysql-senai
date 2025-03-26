"use client";

import ChartOverview from "@/components/chart";
import Cores from "@/components/cores";
import { AuroraText } from "@/components/magicui/aurora-text";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Factory, Pickaxe } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-white select-none">
                Produção
              </CardTitle>
              <Pickaxe className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>
              Total de peças produzidas por minuto:
            </CardDescription>
          </CardHeader>

          <CardContent className="text-base sm:text-lg font-bold">
            inserir dados do banco aqui, quantidade de peças dividido por 60
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-white select-none">
                Total de Peças
              </CardTitle>
              <Factory className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>Total de peças produzidas:</CardDescription>
          </CardHeader>

          <CardContent className="text-base sm:text-lg font-bold">
            inserir dados do banco aqui, quantidade de peças produzidas
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Cores />
      </section>
    </main>
  );
}
