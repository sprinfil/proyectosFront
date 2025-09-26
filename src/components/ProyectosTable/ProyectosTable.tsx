import { useProyectosTable } from "./useProyectosTable.hook";
import { DataTable } from "../DataTable/DataTable";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PaginationSpl } from "../PaginationSpl/PaginationSpl";
import { toast } from "sonner";
import { Plus } from "lucide-react";

export function ProyectosTable() {
  const {
    data,
    columns,
    navigate,
    loading,
    meta,
    setMeta,
    setData,
    setLoading,
    params,
    setParams,
  } = useProyectosTable();

  return (
    <div className="w-full overflow-auto">
      <div className="mb-5 flex items-end gap-2 flex-wrap px-1">
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground">Nombre del proyecto</p>
          <Input
            placeholder="Nombre del proyecto"
            className="w-[400px]"
            value={params?.nombre}
            onChange={(e) => {
              setParams((prev) => {
                return {
                  ...prev,
                  nombre: e?.target?.value,
                };
              });
            }}
          />
        </div>
        {/* <div className="flex flex-col gap-2">
          <p className="text-muted-foreground">Fecha de ingreso</p>
          <input
            type="date"
            className="p-1.5 border border-border rounded-lg"
          />
        </div> */}

        <Button
          className="ml-auto"
          onClick={() => {
            navigate("crearProyecto");
          }}
        >
          Crear Proyecto
          <Plus />
        </Button>
      </div>
      <DataTable data={data} columns={columns} loading={loading} meta={meta} />
      <div className="mt-5">
        <PaginationSpl
          meta={meta}
          setMeta={setMeta}
          setData={setData}
          setLoading={setLoading}
          toast={toast}
          params={params}
          per_page={false}
        />
      </div>
    </div>
  );
}
