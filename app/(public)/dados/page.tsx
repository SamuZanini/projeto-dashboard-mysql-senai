"use client";

import ChartOverview from "@/components/chart";
import Cores from "@/components/cores";
import LinearChartOverview from "@/components/linearChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Factory, Pickaxe } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { NumberTicker } from "@/components/magicui/number-ticker";

interface Post {
  total: number;
  taxa_por_minuto: number;
}

export default function Dados() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/posts");
        const response = await data.json();
        setPosts(response.posts);
        console.log(response.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollArea className="relative h-screen w-screen rounded-md border">
      <main className="sm:ml-14 p-4">
        <section className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl">Produção</CardTitle>
                <Pickaxe className="ml-auto w-4 h-4" />
              </div>
              <CardDescription>
                Total de peças produzidas por minuto:
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base sm:text-3xl font-bold">
              <NumberTicker
                value={
                  posts.length && posts.length > 0
                    ? posts[0].taxa_por_minuto
                    : 0
                }
                decimalPlaces={2}
                className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white"
              />{" "}
              Peças por minuto!
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl">
                  Total de Peças
                </CardTitle>
                <Factory className="ml-auto w-4 h-4" />
              </div>
              <CardDescription>Total de peças produzidas:</CardDescription>
            </CardHeader>
            <CardContent className="text-base sm:text-3xl font-bold">
              <NumberTicker
                value={posts.length && posts.length > 0 ? posts[0].total : 0}
                className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-black dark:text-white"
              />{" "}
              Peças produzidas!
            </CardContent>
          </Card>
        </section>
        <section className="mt-4 flex flex-col md:flex-row gap-4">
          <ChartOverview /> {/* Gráfico de Barras */}
          <Cores /> {/* Gráfico de Pizza */}
        </section>
        <section className="mt-4 flex gap-4">
          <LinearChartOverview /> {/* Gráfico Linear */}
        </section>
      </main>
    </ScrollArea>
  );
}
