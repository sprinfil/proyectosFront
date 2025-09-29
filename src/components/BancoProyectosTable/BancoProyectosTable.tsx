import React from "react";
import { useBancoProyectosTableData } from "./useBancoProyectosTableData";
import { Input } from "../ui/input";
import { DataTable } from "../DataTable/DataTable";
import { PaginationSpl } from "../PaginationSpl/PaginationSpl";
import { toast } from "sonner";

export const BancoProyectosTable = () => {
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
  } = useBancoProyectosTableData();

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
};
