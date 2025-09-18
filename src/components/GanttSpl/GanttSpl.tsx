import React, { useState } from "react";
import { useAvanceFisico } from "../AvanceFisico/useAvanceFisico.hook";

export const GanttSpl = () => {
  const { partidas } = useAvanceFisico();
  const [openNodes, setOpenNodes] = useState<Record<string, boolean>>({});

  // Construir el árbol
  const buildTree = (partidas: any[]) => {
    const map: Record<string, any> = {};
    const roots: any[] = [];

    partidas.forEach(p => (map[p.id] = { ...p, children: [] }));

    partidas.forEach(p => {
      if (p?.dependencies) {
        map[p.dependencies]?.children.push(map[p.id]);
      } else {
        roots.push(map[p.id]);
      }
    });

    return roots;
  };

  // Cambiar estado de expandido/colapsado
  const toggleNode = (id: string) => {
    setOpenNodes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Render recursivo
  const renderPartida = (partida: any, nivel: number = 0) => {
    const isOpen = openNodes[partida.id] ?? true; // abierto por defecto
    const tieneHijos = partida.children.length > 0;

    return (
      <>
        <tr className="text-[13px] border">
          <td>
            <div
              className="w-full px-2 flex items-center gap-2"
              style={{ paddingLeft: `${nivel * 20}px` }}
            >
              {/* Botón expandir/colapsar si tiene hijos */}
              {tieneHijos && (
                <button
                  onClick={() => toggleNode(partida.id)}
                  className="text-xs px-1 rounded bg-gray-200 hover:bg-gray-300"
                >
                  {isOpen ? "-" : "+"}
                </button>
              )}
              <p>{partida.name}</p>
            </div>
          </td>
          <td className="px-2">14 días</td>
          <td className="px-2">12/01/2025</td>
          <td className="px-2">12/01/2025</td>
        </tr>

        {/* Renderizar hijos solo si está abierto */}
        {isOpen &&
          partida.children.map((hijo: any) =>
            renderPartida(hijo, nivel + 1)
          )}
      </>
    );
  };

  const tree = buildTree(partidas);
  console.log(tree)

  return (
    <div className="w-full flex">
      <div className=" overflow-auto py-2">
        <table className="overflow-auto w-[500px]">
          <tbody>
            {tree.map(partida => renderPartida(partida))}
          </tbody>
        </table>
      </div>
      <div className="flex-1 h-[10px]"></div>
    </div>
  );
};
