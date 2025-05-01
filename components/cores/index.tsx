"use client";

import { Archive } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import * as React from "react";
import { NumberTicker } from "../magicui/number-ticker";
import PizzaChart from "../pizzaChart";

export default function Cores() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/colors");
        const response = await data.json();
        setPosts(response.posts);
        console.log(response.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const getTotalByColor = (color) => {
    return posts
      .filter((post) => post.cor === color)
      .reduce((acc, post) => acc + post.total, 0);
  };

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
            <p className="text-sm sm:text-base font-semibold">Amarelo</p>
            <span className="text-[14px] sm:text-sm">
              <span className="text-[14px] sm:text-sm">
                <NumberTicker value={getTotalByColor("AMARELO")} /> Peças!
              </span>
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://img.freepik.com/fotos-premium/resumo-de-fundo-vermelho-circular_8466-2.jpg?semt=ais_hybrid" />
            <AvatarFallback>VM</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Vermelho</p>
            <span className="text-[14px] sm:text-sm">
              <NumberTicker value={getTotalByColor("VERMELHO")} /> Peças!
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://img.freepik.com/fotos-premium/um-fundo-verde-com-um-fundo-verde-que-diz_867255-192.jpg" />
            <AvatarFallback>VD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Verde</p>
            <span className="text-[14px] sm:text-sm">
              <NumberTicker value={getTotalByColor("VERDE")} /> Peças!
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://img.freepik.com/fotos-gratis/fundo-texturizado-abstrato_1258-30515.jpg" />
            <AvatarFallback>AZ</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Azul</p>
            <span className="text-[14px] sm:text-sm">
              <NumberTicker value={getTotalByColor("AZUL")} /> Peças!
            </span>
          </div>
        </article>
        <div className="py-20">
          <PizzaChart /> {/* Gráfico de Pizza */}
        </div>
      </CardContent>
    </Card>
  );
}
