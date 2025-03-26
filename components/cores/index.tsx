import { Archive } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Cores() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-white">
            Tipos de Peças
          </CardTitle>
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
            <AvatarImage src="https://media.istockphoto.com/id/1195576751/pt/foto/dark-blue-concrete-wall-texture-background.jpg?s=612x612&w=0&k=20&c=yys9ZMQkKyV_gOi2YHZ4Jak9mRWGQFoyqj7PdR3El-E=" />
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
      </CardContent>
    </Card>
  );
}
