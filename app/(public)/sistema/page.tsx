"use client";

import { motion } from "motion/react";

import ElasticLine from "@/fancy/components/physics/elastic-line";
import { Factory } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Sistema() {
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  return (
    <main className="fixed inset-0 sm:ml-14 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="relative w-full h-full flex flex-row items-center justify-center font-overused-grotesk text-foreground">
          <div className="absolute left-0 top-0 w-full h-full px-6 sm:px-8 md:px-12 z-10">
            <ElasticLine
              releaseThreshold={50}
              strokeWidth={1}
              animateInTransition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.15,
              }}
            />
          </div>
          {/* This is just fluff for the demo */}
          <div className="h-full flex flex-col py-6 w-full px-6 sm:px-8 md:px-12 font-light">
            <div className="h-1/2 py-8 w-full items-end flex">
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="uppercase text-4xl sm:text-5xl md:text-6xl font-medium"
                custom={0}
              >
                Funcionamento do Sistema
              </motion.p>
              <Factory className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ml-auto text-orange-500" />
            </div>
            <div className="flex flex-row  pt-8 justify-between items-start gap-x-4">
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="w-1/3 uppercase md:text-7xl hidden md:block text-orange-500"
                custom={0}
              >
                ⁜
              </motion.p>
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="w-full md:w-2/3 sm:text-left text-base sm:text-xl md:text-2xl"
                custom={1}
              >
                O sistema consiste em uma esteira separadora de materiais. Essa
                esteira segrega as peças coloridas de acordo com sua cor,
                tamanho e material, contabilizando cada uma delas! Segue abaixo
                uma foto do sistema:
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.7 }}
        className="flex justify-center items-center gap-4 py-7 mb-8"
      >
        <Carousel className="w-full max-w-xl">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-8">
                    <span className="text-4xl font-semibold">
                      substituir por imagem do sistema
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-8">
                    <span className="text-4xl font-semibold">
                      substituir por imagem do sistema
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-8">
                    <span className="text-4xl font-semibold">
                      substituir por imagem do sistema
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </main>
  );
}
