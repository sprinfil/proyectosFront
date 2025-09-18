import { Button } from "../ui/button";
import { useAvanceFisico } from "./useAvanceFisico.hook";
import "./ganttStyles.css";
import { Plus } from "lucide-react";
import { CrearPartida } from "./CrearPartida/CrearPartida";

export const AvanceFisico = () => {
  const {
    setViewMode,
    ganttRef,
    partidas,
    setPartidas,
    buttonCrearPartidaRef,
  } = useAvanceFisico();

  return (
    <>
      {/* <GanttSpl /> */}

      <div className="w-full ">
        {/* <div className="col-span-1 mt-[46px]">
          <ManejadorPartidas partidas={partidas} setPartidas={setPartidas} />
        </div> */}

        <div className="">
          <div
            style={{ marginBottom: "10px" }}
            className="flex items-center gap-1 "
          >
            <Button variant={"outline"} onClick={() => setViewMode("Day")}>
              Día
            </Button>
            <Button variant={"outline"} onClick={() => setViewMode("Week")}>
              Semana
            </Button>
            <Button variant={"outline"} onClick={() => setViewMode("Month")}>
              Mes
            </Button>
            <div className="ml-auto">
              <CrearPartida
                refTrigger={buttonCrearPartidaRef}
                trigger={
                  <Button ref={buttonCrearPartidaRef}>
                    Crear Partida <Plus />
                  </Button>
                }
                partidas={partidas}
                setPartidas={setPartidas}
              />
            </div>
          </div>
          <div
            ref={ganttRef}
            style={{ minWidth: "800px" }}
            className=" border border-gray-300 overflow-x-auto"
          ></div>
        </div>
      </div>
    </>
  );
};
