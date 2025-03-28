"use client";

import { Archive } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function Cores() {
  const chartData = [
    { browser: "chrome", pecas: 275, fill: "var(--color-chrome)" },
    { browser: "safari", pecas: 200, fill: "var(--color-safari)" },
    { browser: "firefox", pecas: 287, fill: "var(--color-firefox)" },
    { browser: "edge", pecas: 173, fill: "var(--color-edge)" },
  ];
  const chartConfig = {
    pecas: {
      label: "Peças",
    },
    chrome: {
      label: "Amarelo",
      color: "#f2b611",
    },
    safari: {
      label: "Vermelho",
      color: "#b81d2f",
    },
    firefox: {
      label: "Verde",
      color: "#12732f",
    },
    edge: {
      label: "Azul",
      color: "#3029c2",
    },
  } satisfies ChartConfig;

  const totalPecas = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.pecas, 0);
  }, []);

  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl">Tipos de Peças</CardTitle>
          <Archive className="ml-auto h-4 w-4" />
        </div>
        <CardDescription>Cores e suas quantidades:</CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://img.freepik.com/fotos-premium/fundo-de-textura-de-papel-amarelo-de-estilo-industrial_469558-56771.jpg?semt=ais_hybrid" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              nome da cor no banco
            </p>
            <span className="text-[14px] sm:text-sm">
              quantidade total do banco
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://img.freepik.com/fotos-premium/resumo-de-fundo-vermelho-circular_8466-2.jpg?semt=ais_hybrid" />
            <AvatarFallback>VM</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              nome da cor no banco
            </p>
            <span className="text-[14px] sm:text-sm">
              quantidade total do banco
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://img.freepik.com/fotos-premium/um-fundo-verde-com-um-fundo-verde-que-diz_867255-192.jpg" />
            <AvatarFallback>VD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              nome da cor no banco
            </p>
            <span className="text-[14px] sm:text-sm">
              quantidade total do banco
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://img.freepik.com/fotos-gratis/fundo-texturizado-abstrato_1258-30515.jpg" />
            <AvatarFallback>AZ</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              nome da cor no banco
            </p>
            <span className="text-[14px] sm:text-sm">
              quantidade total do banco
            </span>
          </div>
        </article>

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
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalPecas.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Peças
                            </tspan>
                          </text>
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
      </CardContent>
    </Card>
  );
}
