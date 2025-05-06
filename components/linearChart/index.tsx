"use client";

import { BarChart2, TrendingUp } from "lucide-react";
import { CartesianGrid, Dot, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
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

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useEffect, useState } from "react";

export default function LinearChartOverview() {
  const [openCor, setOpenCor] = React.useState(false);
  const [openMaterial, setOpenMaterial] = React.useState(false);
  const [openAltura, setOpenAltura] = React.useState(false);

  const [selectedCor, setSelectedCor] = React.useState("");
  const [selectedMaterial, setSelectedMaterial] = React.useState("");
  const [selectedAltura, setSelectedAltura] = React.useState("");

  interface Post {
    data_hora: string;
    total: number;
  }

  interface ChartItem {
    date: string;
    total: number;
    fill: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [chartData, setChartData] = useState<ChartItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams();

        // Adiciona todos os filtros selecionados
        if (selectedCor) params.append("cor", selectedCor);
        if (selectedMaterial) params.append("material", selectedMaterial);
        if (selectedAltura) params.append("altura", selectedAltura); // Corrigido de "Altura" para "altura"

        console.log("Fetching with params:", params.toString());

        const data = await fetch(`/api/filter?${params.toString()}`);
        const response = await data.json();

        if (response.error) {
          console.error("API Error:", response.error);
          return;
        }

        console.log("API Response:", response);
        setPosts(response.posts);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchData();
  }, [selectedCor, selectedMaterial, selectedAltura]);

  // Atualiza o gráfico quando os posts mudam
  useEffect(() => {
    if (posts.length > 0) {
      const newChartData = posts.map((post) => ({
        date: new Date(post.data).toLocaleDateString(),
        total: post.total,
        fill: `var(--color-${selectedCor || "default"})`,
      }));
      console.log("New Chart Data:", newChartData); // Debug
      setChartData(newChartData);
    }
  }, [posts, selectedCor]);

  const chartConfig = {
    total: {
      label: "Total de Peças",
      color: "#79cedb",
    },
  } satisfies ChartConfig;

  const cor = [
    {
      value: "2", // amarelo
      label: "Amarelo",
    },
    {
      value: "3", // vermelho
      label: "Vermelho",
    },
    {
      value: "1", // verde
      label: "Verde",
    },
    {
      value: "4", // azul
      label: "Azul",
    },
  ];

  const material = [
    {
      value: "1", // metal
      label: "Metal",
    },
    {
      value: "2", // plástico
      label: "Plástico",
    },
  ];

  const altura = [
    {
      value: "1", // pequeno
      label: "Pequeno",
    },
    {
      value: "2", // médio
      label: "Médio",
    },
    {
      value: "3", // grande
      label: "Grande",
    },
  ];

  return (
    <Card className="w-full flex-1/12 md:w-1/2 min-h-[100px]">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl">
            Total de Peças Processadas
          </CardTitle>

          <div className="flex items-center gap-2 pl-4">
            <Popover open={openCor} onOpenChange={setOpenCor}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openCor}
                  className="w-[200px] justify-between"
                >
                  {selectedCor
                    ? cor.find((s) => s.value === selectedCor)?.label
                    : "Selecione uma cor..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput
                    placeholder="Procure uma cor..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>Nenhuma cor encontrada.</CommandEmpty>
                    <CommandGroup>
                      {cor.map((cores) => (
                        <CommandItem
                          key={cores.value}
                          value={cores.value}
                          onSelect={(currentValue) => {
                            setSelectedCor(
                              currentValue === selectedCor ? "" : currentValue
                            );
                            setOpenCor(false);
                          }}
                        >
                          {cores.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              selectedCor === cores.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Popover open={openMaterial} onOpenChange={setOpenMaterial}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openMaterial}
                  className="w-[200px] justify-between"
                >
                  {selectedMaterial
                    ? material.find((m) => m.value === selectedMaterial)?.label
                    : "Selecione um material..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput
                    placeholder="Procure um material..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>Nenhum material encontrado.</CommandEmpty>
                    <CommandGroup>
                      {material.map((materiais) => (
                        <CommandItem
                          key={materiais.value}
                          value={materiais.value}
                          onSelect={(currentValue) => {
                            setSelectedMaterial(
                              currentValue === selectedMaterial
                                ? ""
                                : currentValue
                            );
                            setOpenMaterial(false);
                          }}
                        >
                          {materiais.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              selectedMaterial === materiais.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Popover open={openAltura} onOpenChange={setOpenAltura}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openAltura}
                  className="w-[200px] justify-between"
                >
                  {selectedAltura
                    ? altura.find((t) => t.value === selectedAltura)?.label
                    : "Selecione um Altura..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput
                    placeholder="procure um Altura..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>Nenhum Altura encontrado.</CommandEmpty>
                    <CommandGroup>
                      {altura.map((Alturas) => (
                        <CommandItem
                          key={Alturas.value}
                          value={Alturas.value}
                          onSelect={(currentValue) => {
                            setSelectedAltura(
                              currentValue === selectedAltura
                                ? ""
                                : currentValue
                            );
                            setOpenAltura(false);
                          }}
                        >
                          {Alturas.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              selectedAltura === Alturas.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <BarChart2 className="ml-auto h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="py-1">
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <LineChart
            data={chartData}
            margin={{
              top: 8,
              left: 24,
              right: 24,
              bottom: 8,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              type="monotone"
              dataKey="total"
              stroke={chartConfig.total.color}
              strokeWidth={2}
              dot={true}
              connectNulls={true} // Adiciona esta propriedade
              activeDot={{ r: 6 }} // Melhora a visualização do ponto ativo
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex gap-2 font-medium leading-none">
          Total de peças (com filtro) <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
