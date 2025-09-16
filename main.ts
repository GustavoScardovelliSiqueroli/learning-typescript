import * as readline from "node:readline";

import { InMemoryPainting } from "./painting-simple-app/infra/inmemory-painting.ts";
import { PaintingService } from "./painting-simple-app/services/painting-service.ts";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const paintingRepo = new InMemoryPainting();
const paintingService = new PaintingService(paintingRepo);

function printMenu(): void {
  console.log("\nMENU");
  console.log("1. Listar pinturas;");
  console.log("2. Criar nova pintura;");
  console.log("3. Finalizar pintura;");
  console.log("4. Deletar pintura;");
  console.log("q. Finalizar Programa;\n");
}

async function askChoice(): Promise<boolean> {
  printMenu();
  const choice = await question("");
  return handleChoice(choice);
}

async function handleChoice(
  option: "1" | "2" | "3" | "4" | "q" | string
): Promise<boolean> {
  console.clear();
  switch (option) {
    case "1":
      console.log("1. Listar pinturas:");
      console.log(paintingService.getAllPaintings());
      break;
    case "2":
      console.log("2. Criar nova pintura:");
      const paintingName = await question("Nome da pintura: ");
      const painting = paintingService.startNewPainting({ name: paintingName });
      console.log("\nPintura Criada com sucesso!");
      console.log(painting);
      break;
    case "3":
      console.log("3. Finalizar pintura:");
      const paintingId: string = await question(
        "Id da pintura para finalizar: "
      );
      if (!paintingService.finishPainting(Number(paintingId))) {
        console.log("\nPintura nao encontrada... ☹️");
        break;
      }
      console.log("\nPintura finalizada com sucesso!");
      break;

    case "4":
      console.log("4. Deletar pinturas:");
      const deletePaintingId: string = await question(
        "Id da pintura para finalizar: "
      );
      paintingService.deletePainting(Number(deletePaintingId));
      console.log("\nPintura deletada com sucesso!");
      break;
    case "q":
      rl.close();
      return false;
    default:
      break;
  }
  await question("\nPressione qualquer tecla para continuar");
  console.clear();
  return true;
}

function question(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("🎨 CONTROLE DE PINTURAS 🎨\n");
  if (await askChoice()) {
    main();
  }
}

main();
