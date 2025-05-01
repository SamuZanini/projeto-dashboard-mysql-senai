"use client";

import { BarChart2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Bar, CartesianGrid, XAxis, BarChart, Legend } from "recharts";
import { useEffect, useState } from "react";

interface Post {
  material: string;
  cor: string;
  total_por_tipo: number;
}

interface ChartItem {
  cor: string;
  metal: number;
  plastico: number;
}

export default function ChartOverview() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [chartData, setChartData] = useState<ChartItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/types");
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      const processedData = posts.reduce((acc, post) => {
        const cor = post.cor.toLowerCase();
        if (!acc[cor]) {
          acc[cor] = {
            cor: cor,
            metal: 0,
            plastico: 0,
          };
        }
        if (post.material.toLowerCase() === "metal") {
          acc[cor].metal = post.total_por_tipo;
        } else {
          acc[cor].plastico = post.total_por_tipo;
        }
        return acc;
      }, {});

      setChartData(Object.values(processedData));
    }
  }, [posts]);

  const chartConfig = {
    quantidadePlastico: {
      label: "Qtd. Plástico",
      color: "#00c5bb",
    },
    quantidadeMetal: {
      label: "Qtd. Metal",
      color: "#cccccc",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex-5/12">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl">
            Quantidade por Tipo e Cor
          </CardTitle>
          <BarChart2 className="ml-auto h-4 w-4" />
        </div>
      </CardHeader>

      <CardContent className="py-8">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 25,
              left: 25,
              bottom: 20,
            }}
            barCategoryGap={20}
            barGap={0}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="cor"
              tickLine={false}
              tickMargin={15}
              axisLine={false}
              tick={{ fontSize: 12, dx: 5 }}
              padding={{ left: 10, right: 10 }}
            />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              iconSize={10}
              formatter={(value) => {
                return value === "Metal" ? "Metal" : "Plástico";
              }}
            />
            <ChartTooltip
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="metal"
              name="Metal" // Este é o valor que o formatter usa
              fill={chartConfig.quantidadeMetal.color}
              radius={4}
              barSize={40}
            />
            <Bar
              dataKey="plastico"
              name="Plástico" // Este é o valor que o formatter usa
              fill={chartConfig.quantidadePlastico.color}
              radius={4}
              barSize={40}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
