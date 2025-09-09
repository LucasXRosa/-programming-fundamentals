export default class ReadlineSync {
  public question(pergunta: string = ""): string {
    let resposta: string | null = prompt(pergunta);
    return resposta ? resposta : "";
  }

  public questionInt(pergunta: string = ""): number {
    let resposta: string | null = prompt(pergunta);
    return resposta ? parseInt(resposta) : 0;
  }

  public questionFloat(pergunta: string = ""): number {
    let resposta: string | null = prompt(pergunta);
    return resposta ? parseFloat(resposta) : 0;
  }
}