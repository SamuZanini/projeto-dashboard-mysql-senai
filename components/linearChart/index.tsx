"use client";

import { BarChart2, TrendingUp } from "lucide-react";
import { CartesianGrid, Dot, Line, LineChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function LinearChartOverview() {
  const chartData = [
    { browser: "Amarelo", visitors: 173, fill: "var(--color-Amarelo)" },
    { browser: "Verelho", visitors: 187, fill: "var(--color-Verelho)" },
    { browser: "Verde", visitors: 200, fill: "var(--color-Verde)" },
    { browser: "Azul", visitors: 275, fill: "var(--color-Azul)" },
  ];
  const chartConfig = {
    visitors: {
      label: "Total",
      color: "#79cedb",
    },
    Amarelo: {
      label: "Amarelo",
      color: "#79cedb",
    },
    Verelho: {
      label: "Verelho",
      color: "#79cedb",
    },
    Verde: {
      label: "Verde",
      color: "#79cedb",
    },
    Azul: {
      label: "Azul",
      color: "#79cedb",
    },
  } satisfies ChartConfig;
  return (
    <Card className="w-full flex-1/12 md:w-1/2 min-h-[100px]">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl">
            Total de Peças Processadas
          </CardTitle>
          <BarChart2 className="ml-auto h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="py-1">
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 8,
              left: 24,
              right: 24,
              bottom: 8,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="visitors"
                  hideLabel
                />
              }
            />
            <Line
              dataKey="visitors"
              type="natural"
              stroke="var(--color-visitors)"
              strokeWidth={2}
              dot={({ payload, ...props }) => {
                return (
                  <Dot
                    key={payload.browser}
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill={payload.fill}
                    stroke={payload.fill}
                  />
                );
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex gap-2 font-medium leading-none">
          Total de peças (todas as cores) <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
