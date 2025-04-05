"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pencil, Target, User } from "lucide-react";
import TextRotate from "@/fancy/components/text/text-rotate";
import Link from "next/link";

import CenterUnderline from "@/fancy/components/text/underline-center";
import { motion } from "motion/react";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

import { IconCloud } from "@/components/magicui/icon-cloud";

import { ScrollArea } from "@/components/ui/scroll-area";

export default function Inicio() {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <ScrollArea className="relative h-screen w-screen rounded-md border">
      <main className="sm:ml-14 p-4 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <section className="flex flex-col items-center justify-center gap-4 pt-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png"
              alt="senai"
              className="w-150 h-auto justify-center flex items-center"
            />
          </section>
          <section className="py-7 flex flex-col items-center">
            <h2 className="flex items-center justify-center text-4xl font-bold">
              Escola e Faculdade SENAI "Félix Guisard"
            </h2>
            <div className="flex flex-col items-center justify-center gap-y-12 gap-x-8 w-full font-bold py-2">
              <TextRotate
                texts={["Projeto Integrador", "Dashboard de Produção"]}
                mainClassName="justify-center text-2xl"
                staggerFrom="first"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.04}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>
          </section>
        </motion.div>
        <section className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl">
                    🧙‍♂️ Grupo:
                  </CardTitle>
                  <User className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>Turma: 1° ADS 2025</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col text-base sm:text-lg font-bold">
                <Link
                  className=""
                  target="_blank"
                  href="https://github.com/SamuZanini"
                >
                  <CenterUnderline label="☕ Samuel Zanini Campos Vanoni" />
                </Link>
                <Link
                  className=""
                  target="_blank"
                  href="https://github.com/Nogueirajv0078"
                >
                  <CenterUnderline label="☕ João Vitor Nogueira Alves" />
                </Link>
                <Link
                  className=""
                  target="_blank"
                  href="https://github.com/Murilomarques999"
                >
                  <CenterUnderline label="☕ Murilo Marques Dantas Vieira" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl">
                    🎓 Professores:
                  </CardTitle>
                  <Pencil className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>Agradecimentos aos mestres:</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col text-base sm:text-lg font-bold">
                <Link
                  className=""
                  target="_blank"
                  href="https://www.linkedin.com/in/alex-pisciotta-48866425/"
                >
                  <CenterUnderline label="✒️ Alex Pisciotta" />
                </Link>
                <Link
                  className=""
                  target="_blank"
                  href="https://www.linkedin.com/in/marcello-benevides/"
                >
                  <CenterUnderline label="✒️ Marcello Tuba" />
                </Link>
                <Link
                  className=""
                  target="_blank"
                  href="https://www.linkedin.com/in/marcio-nagy-it-strategy/"
                >
                  <CenterUnderline label="✒️ Márcio Nagy" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </section>
        <section className="grid grid-cols gap-4 py-3">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl">
                    🎯 Objetivo da Atividade:
                  </CardTitle>
                  <Target className="ml-auto w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col text-base sm:text-lg">
                <p className="py-2">
                  🪄 Este projeto consiste em um dashboard interativo
                  desenvolvido para visualização de dados de produção, como
                  parte das atividades acadêmicas da Escola e Faculdade SENAI
                  "Félix Guisard".
                </p>
                <p className="py-2">
                  🛠️ O dashboard foi desenvolvido para monitorar e visualizar
                  dados de um sistema de produção, oferecendo insights
                  importantes sobre o processo produtivo através de gráficos e
                  métricas em tempo real.
                </p>
              </CardContent>
              <section className="grid grid-cols-2 gap-4 pb-50">
                <div className="col-span-2 lg:col-span-1 grid grid-cols gap-4 py-4 sm:ml-4 p-4 overflow-x-auto rounded-xl">
                  <Terminal className="w-full min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] rounded-xl shadow-[0_20px_50px_rgba(250,_128,_114,_0.7)] dark:shadow-none">
                    <TypingAnimation>
                      &gt; Tecnologias Utilizadas
                    </TypingAnimation>
                    <AnimatedSpan delay={1500} className="text-green-500">
                      <span>✔ shadcn/ui</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={2000} className="text-green-500">
                      <span>✔ Next.js.</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={2500} className="text-green-500">
                      <span>✔ Tailwind CSS.</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={3000} className="text-green-500">
                      <span>✔ MySQL.</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={3500} className="text-green-500">
                      <span>✔ Magic UI.</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={4000} className="text-green-500">
                      <span>✔ Fancy Components.</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={5500} className="text-green-500">
                      <span>✔ Installing dependencies.</span>
                    </AnimatedSpan>
                    <AnimatedSpan delay={6000} className="text-blue-500">
                      <span>ℹ Updated 1 file:</span>
                      <span className="pl-2">- lib/brain.ts</span>
                    </AnimatedSpan>
                    <TypingAnimation
                      delay={6500}
                      className="text-muted-foreground"
                    >
                      Success! Project initialization completed.
                    </TypingAnimation>
                    <TypingAnimation
                      delay={7000}
                      className="text-muted-foreground"
                    >
                      You may now start coding.
                    </TypingAnimation>
                  </Terminal>
                </div>
                <div className="col-span-2 lg:col-span-1 flex items-center justify-center py-4">
                  <div className="relative flex size-full items-center justify-center overflow-hidden">
                    <IconCloud images={images} />
                  </div>
                </div>
              </section>
              <div className="absolute bottom-0 left-0 right-0">
                <img
                  src="https://capsule-render.vercel.app/api?type=waving&color=ff0000&height=120&section=footer"
                  alt="wave"
                  className="w-screen overflow-x-auto rounded-b-xl"
                />
              </div>
            </Card>
          </motion.div>
        </section>
      </main>
    </ScrollArea>
  );
}
