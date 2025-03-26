"use client";

import { AnchorIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Bar, CartesianGrid, XAxis, BarChart } from "recharts";

export default function ChartOverview() {
  //trocar charData pelos dados do banco
  const chartData = [
    {
      tipo: "Amarelo",
      quantidadePlastico: 186,
      quantidadeMetal: 200,
    },
    {
      tipo: "Verde",
      quantidadePlastico: 305,
      quantidadeMetal: 100,
    },
    {
      tipo: "Azul",
      quantidadePlastico: 237,
      quantidadeMetal: 200,
    },
    {
      tipo: "Vermelho",
      quantidadePlastico: 73,
      quantidadeMetal: 100,
    },
  ];

  const chartConfig = {
    quantidadePlastico: {
      label: "Qtd. Plástico",
      color: "#FF6B35",
    },
    quantidadeMetal: {
      label: "Qtd. Metal",
      color: "#FB986A",
    },
  } satisfies ChartConfig;

  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-white">
            Total de Peças Produzidas
          </CardTitle>
          <AnchorIcon className="ml-auto h-4 w-4" />
        </div>
      </CardHeader>

      <CardContent>
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
              dataKey="tipo"
              tickLine={false}
              tickMargin={15}
              axisLine={false}
              tickFormatter={(value) => value}
              tick={{ fontSize: 12, dx: 5 }}
              padding={{ left: 10, right: 10 }}
            />
            <ChartTooltip
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="quantidadePlastico"
              fill={chartConfig.quantidadePlastico.color}
              radius={4}
              barSize={40}
            />
            <Bar
              dataKey="quantidadeMetal"
              fill={chartConfig.quantidadeMetal.color}
              radius={4}
              barSize={40}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
