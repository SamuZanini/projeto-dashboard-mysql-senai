"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { NumberTicker } from "../magicui/number-ticker";
import { useEffect, useState } from "react";

export default function PizzaChart() {
  interface Post {
    cor: string;
    total_por_cor: number;
    total_geral: number;
  }

  interface ChartItem {
    browser: string;
    pecas: number;
    fill: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [chartData, setChartData] = useState<ChartItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/pizza");
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

  useEffect(() => {
    if (posts.length > 0) {
      setChartData(
        posts.map((posts) => ({
          browser: posts.cor.toLowerCase(),
          pecas: posts.total_por_cor,
          fill: `var(--color-${posts.cor.toLowerCase()})`,
        }))
      );
    }
  }, [posts]);

  const chartConfig = {
    pecas: {
      label: "Peças",
    },
    amarelo: {
      label: "Amarelo",
      color: "#f2b611",
    },
    vermelho: {
      label: "Vermelho",
      color: "#b81d2f",
    },
    verde: {
      label: "Verde",
      color: "#12732f",
    },
    azul: {
      label: "Azul",
      color: "#3029c2",
    },
  } satisfies ChartConfig;

  return (
    <div className="py-4">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total de Peças de Cada Cor</CardTitle>
        <CardDescription>Sistema de Separação</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="pecas"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    const totalPecas =
                      posts.length > 0 ? posts[0].total_geral : 0;
                    return (
                      <foreignObject
                        x={viewBox.cx - 50} // Centralize horizontalmente
                        y={viewBox.cy - 30} // Centralize verticalmente
                        width={100}
                        height={60}
                      >
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="text-3xl font-bold">
                            <NumberTicker value={totalPecas} />
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Peças
                          </div>
                        </div>
                      </foreignObject>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Sistema de Separação <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Total de Peças separadas durante a operação
        </div>
      </CardFooter>
    </div>
  );
}
