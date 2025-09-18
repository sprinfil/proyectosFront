export type Partida = {
  id: string;
  name: string;
  start: string;
  end: string;
  progress?: number;
  dependencies?: string;
};

export type crearPartida = {
  name: string;
  start: string;
  end: string;
  dependencies: string;
};
