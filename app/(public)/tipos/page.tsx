"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import StackingCards, {
  StackingCardItem,
} from "@/fancy/components/blocks/stacking-cards";
import { MoveDown } from "lucide-react";
import { motion } from "motion/react";

export default function Sistema() {
  const cards = [
    {
      bgColor: "bg-yellow-400/15 backdrop-blur-md",
      title: "🍌 Peças Amarelas",
      description: [
        "As peças amarelas são compostas por 6 unidades, sendo elas:",
        "⚡ 1 peça de metal pequena",
        "⚡ 1 peça de metal média",
        "⚡ 1 peça de metal grande",
        "⚡ 1 peça de plástico pequena",
        "⚡ 1 peça de plástico média",
        "⚡ 1 peça de plástico grande",
      ],
      image:
        "https://img.freepik.com/fotos-premium/fundo-de-textura-de-papel-amarelo-de-estilo-industrial_469558-56771.jpg?semt=ais_hybrid",
    },
    {
      bgColor: "bg-red-600/15 backdrop-blur-md",
      title: "🍉 Peças Vermelhas",
      description: [
        "As peças vermelhas são compostas por 4 unidades, sendo elas:",
        "⚡ 2 peças de metal pequenas",
        "⚡ 2 peças de plástico grandes",
      ],
      image:
        "https://img.freepik.com/fotos-premium/resumo-de-fundo-vermelho-circular_8466-2.jpg?semt=ais_hybrid",
    },
    {
      bgColor: "bg-blue-600/15 backdrop-blur-md",
      title: "🫐 Peças Azuis",
      description: [
        "As peças azuis são compostas por 4 unidades, sendo elas:",
        "⚡ 2 peças de plástico pequenas",
        "⚡ 2 peças de metal médias",
      ],
      image:
        "https://img.freepik.com/fotos-gratis/fundo-texturizado-abstrato_1258-30515.jpg",
    },
    {
      bgColor: "bg-green-600/15 backdrop-blur-md",
      title: "🍋‍🟩 Peças Verdes",
      description: [
        "As peças verdes são compostas por 4 unidades, sendo elas:",
        "⚡ 2 peças de plástico médias",
        "⚡ 2 peças de metal grandes",
      ],
      image:
        "https://img.freepik.com/fotos-premium/um-fundo-verde-com-um-fundo-verde-que-diz_867255-192.jpg",
    },
  ];

  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <main className="sm:ml-14 p-4 min-h-screen">
      <section className="gap-4 h-full">
        <div
          className="h-[620px] overflow-auto"
          ref={(node) => setContainer(node)}
        >
          <StackingCards
            totalCards={cards.length}
            scrollOptons={{ container: { current: container } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="relative font-calendas h-[620px] w-full z-10 text-2xl md:text-7xl font-bold uppercase flex justify-center items-center text-[#b3240e] whitespace-pre gap-4"
            >
              <MoveDown className="w-8 h-8 md:w-20 md:h-20" />
              Veja os Nossos Tipos!
              <MoveDown className="w-8 h-8 md:w-20 md:h-20" />
            </motion.div>
            {cards.map(({ bgColor, description, image, title }, index) => {
              return (
                <StackingCardItem
                  key={index}
                  index={index}
                  className="h-[620px]"
                >
                  <div
                    className={cn(
                      bgColor,
                      "h-[80%] sm:h-[70%] flex-col sm:flex-row gap-8 aspect-video px-8 py-10 flex w-11/12 rounded-3xl mx-auto relative backdrop-filter"
                    )}
                  >
                    <div className="space-y-2 flex-1">
                      <h3 className="font-bold text-2xl mb-5">{title}</h3>
                      {Array.isArray(description)
                        ? description.map((line, i) => (
                            <p key={i} className="text-xl">
                              {line}
                            </p>
                          ))
                        : description}
                    </div>
                    <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden">
                      <img src={image} alt={title} className="object-cover" />
                    </div>
                  </div>
                </StackingCardItem>
              );
            })}
            <div className="w-full h-80 relative overflow-hidden">
              <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] text-[#b3240e] font-calendas">
                SENAI
              </h2>
            </div>
          </StackingCards>
        </div>
      </section>
    </main>
  );
}
