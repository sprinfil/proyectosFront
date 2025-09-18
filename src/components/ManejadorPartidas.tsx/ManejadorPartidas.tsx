import React from "react";
import type { Partida } from "../../utils/types/Partidas";

interface ManejadorPartidasProps {
  partidas: Partida[];
  setPartidas: React.Dispatch<React.SetStateAction<Partida[]>>;
}

export const ManejadorPartidas: React.FC<ManejadorPartidasProps> = ({
  partidas,
  setPartidas,
}) => {
  return (
    <>
      <div className="bg-white">
        <div className="w-full border border-border h-[85px] flex items-center justify-center">
          <p className="text-2xl">Partidas</p>
        </div>
        {partidas.map((partida, index) => {
          return (
            <>
              <div
                key={index}
                className="w-full h-[48.1px] border border-border text-[13px] flex items-center px-2"
              >
                <p> {partida.name}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
