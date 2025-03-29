"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TargetIcon, User } from "lucide-react";

export default function Inicio() {
  return (
    <main className="sm:ml-14 p-4 min-h-screen">
      <section className="flex flex-col items-center justify-center gap-4 pt-8">
        <AuroraText className="text-4xl font-bold text-center">
          Atividade Dashboard - Escola e Faculdade SENAI "Félix Guisard"
        </AuroraText>
      </section>
      <section className="py-10 flex flex-col items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png"
          alt="senai"
          className="w-150 h-auto justify-center flex items-center"
        />
      </section>

      <section className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl">🧙‍♂️ Grupo:</CardTitle>
              <User className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Sala: 1° ADS 2025</CardDescription>
          </CardHeader>
          <CardContent className="text-base sm:text-lg font-bold">
            ☕ Samuel Zanini Campos Vanoni -{" "}
            <a
              href="https://github.com/SamuZanini"
              className="text-blue-400 underline"
            >
              (https://github.com/SamuZanini)
            </a>{" "}
            <br />☕ João Vitor Nogueira Alves Murilo -{" "}
            <a
              href="https://github.com/Nogueirajv0078"
              className="text-blue-400 underline"
            >
              (https://github.com/Nogueirajv0078)
            </a>{" "}
            <br />☕ Marques Dantas Vieira -{" "}
            <a
              href="https://github.com/Murilomarques999"
              className="text-blue-400 underline"
            >
              (https://github.com/Murilomarques999)
            </a>{" "}
            <br />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl">
                🎯 Objetivo da Atividade:
              </CardTitle>
              <TargetIcon className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Total de peças produzidas por minuto:
            </CardDescription>
          </CardHeader>
          <CardContent className="text-base sm:text-lg font-bold">
            inserir dados do banco aqui, quantidade de peças dividido por 60
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
