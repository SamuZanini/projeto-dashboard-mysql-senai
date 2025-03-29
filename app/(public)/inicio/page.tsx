"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pencil, User } from "lucide-react";
import TextRotate from "@/fancy/components/text/text-rotate";
import Link from "next/link";

import CenterUnderline from "@/fancy/components/text/underline-center";
import { motion } from "motion/react";

export default function Inicio() {
  return (
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
                <CardTitle className="text-lg sm:text-xl">🧙‍♂️ Grupo:</CardTitle>
                <User className="ml-auto w-4 h-4" />
              </div>
              <CardDescription>Turma: 1° ADS 2025</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col text-base sm:text-lg font-bold">
              <Link className="" href="https://github.com/SamuZanini">
                <CenterUnderline label="☕ Samuel Zanini Campos Vanoni" />
              </Link>
              <Link className="" href="https://github.com/Nogueirajv0078">
                <CenterUnderline label="☕ João Vitor Nogueira Alves Murilo" />
              </Link>
              <Link className="" href="https://github.com/Murilomarques999">
                <CenterUnderline label="☕ Marques Dantas Vieira" />
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
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
                href="https://www.linkedin.com/in/alex-pisciotta-48866425/"
              >
                <CenterUnderline label="✒️ Alex Pisciotta" />
              </Link>
              <Link
                className=""
                href="https://www.linkedin.com/in/marcello-benevides/"
              >
                <CenterUnderline label="✒️ Marcello Tuba" />
              </Link>
              <Link
                className=""
                href="https://www.linkedin.com/in/marcio-nagy-it-strategy/"
              >
                <CenterUnderline label="✒️ Márcio Nagy" />
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
