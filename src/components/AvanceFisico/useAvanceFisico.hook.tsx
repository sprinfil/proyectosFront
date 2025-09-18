import { useEffect, useRef, useState } from "react";
import Gantt from "frappe-gantt";

export const useAvanceFisico = () => {
  const ganttRef = useRef<HTMLDivElement>(null);
  const ganttInstance = useRef<Gantt | null>(null);
  const buttonCrearPartidaRef = useRef();

  const [partidas, setPartidas] = useState([
    // // Fase 1: Planificación
    // {
    //   id: "1",
    //   name: "Planificación del proyecto",
    //   start: "2025-09-01",
    //   end: "2025-09-20",
    //   progress: 20,
    // },
    // {
    //   id: "1.1",
    //   name: "Levantamiento topográfico",
    //   start: "2025-09-01",
    //   end: "2025-09-02",
    //   progress: 100,
    //   dependencies: "1",
    // },
    // {
    //   id: "1.2",
    //   name: "Levantamiento topográfico",
    //   start: "2025-09-01",
    //   end: "2025-09-02",
    //   progress: 100,
    //   dependencies: "1",
    // },
    // {
    //   id: "1.3",
    //   name: "Levantamiento topográfico",
    //   start: "2025-09-01",
    //   end: "2025-09-02",
    //   progress: 100,
    //   dependencies: "1.1",
    // },
  ]);

  const [viewMode, setViewMode] = useState<"Day" | "Week" | "Month">("Day");

  useEffect(() => {
    if (ganttRef.current) {
      ganttRef.current.innerHTML = "";
      ganttInstance.current = new Gantt(ganttRef.current, partidas, {
        view_mode: viewMode,
        language: "es",
        date_format: "YYYY-MM-DD",
        readonly_progress: false,
        // popup: ({ task }) => {
        //   // task es la tarea que se clickeó
        //   return `
        //     <div>
        //       <strong>${task.name}</strong><br/>
        //       <span>Inicio: ${task.start}</span><br/>
        //       <span>Fin: ${task.end}</span><br/>
        //       <span>Progreso: ${task.progress}%</span>
        //         <input type="number" placeholder="porcentaje" value="${task.progress}" />  
        //     </div>
        //   `;
        // },
        // on_click: (task) => {
        //   console.log("Click en tarea:", task);
        // },
        // on_date_change: (task, start, end) => {
        //   console.log("Cambio de fechas:", task, start, end);
        //   setPartidas((prev) =>
        //     prev.map((p) =>
        //       p.id === task.id
        //         ? {
        //             ...p,
        //             start: start.toISOString().slice(0, 10),
        //             end: end.toISOString().slice(0, 10),
        //           }
        //         : p
        //     )
        //   );
        // },
        // on_progress_change: (task, progress) => {
        //   const nuevaTarea = { ...task, progress };
        //   ganttInstance.current?.update_task(task.id, nuevaTarea);
        //   setPartidas((prev) =>
        //     prev.map((p) => (p.id === task.id ? { ...p, progress } : p))
        //   );
        // },
        //   if (ganttInstance.current) {
        //     ganttInstance.current.refresh(partidas);
        //   }
        // },
        // on_view_change: (mode) => {
        //   console.log("Vista cambiada a:", mode);
        // },
      });
    }
  }, [partidas, viewMode]);

  return {
    ganttRef,
    setViewMode,
    partidas,
    setPartidas,
    buttonCrearPartidaRef
  };
};
