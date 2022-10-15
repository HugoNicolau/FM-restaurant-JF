const CARNES = [
  "Bife de frango grelhado",
  "Bife de frango à milanesa",
  "Carne moída refogada",
  "Pernil acebolado",
];

const ACOMPANHAMENTOS = [
  "Arroz branco",
  "Arroz integral",
  "Feijão",
  "Farofa",
  "Batata Frita",
  "Batata doce frita",
  "Espaguete ao sugo",
  "Espaguete alho e óleo",
  "Angu",
  "Couve Refogada",
  "Alface",
  "Tomate",
  "Cenoura cozida",
  "Chuchu cozido",
  "Maionese",
  "Salpicão",
];

const TIPOSDEPRATOS = [
  {
    nome: "Meia refeição",
    preco: 13.5,
    info: "5 acompanhamentos e 1 opção de carne",
  },
  {
    nome: "Refeição normal",
    preco: 15.0,
    info: "3 acompanhamentos e 1 opção de carne",
  },
  {
    nome: "Pedido personalizado",
    preco: 9.0,
    info: "1 Real a mais por acompanhamento e 3 Reais por opção de carne",
  },
];

const TIPOSDEPEDIDOS = ["Comida", "Bebida", "Doce", "Festa"];

export { CARNES, ACOMPANHAMENTOS, TIPOSDEPRATOS, TIPOSDEPEDIDOS };
