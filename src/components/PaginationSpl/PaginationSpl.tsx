import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { createAdapterMeta } from "../../utils/adapters/MetaAdapter";
import { fetchData, postData } from "../../utils/tools";


export const PaginationSpl = ({
  meta,
  setMeta,
  setData,
  setLoading,
  toast,
  params,
  protocolo = "get",
  per_page = true,
}) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4 ">
        {per_page && (
          <div className="flex items-center gap-6 text-sm text-muted-foreground ">
            <div>
              <span className="font-semibold text-foreground">Por página:</span>{" "}
              {meta?.per_page}
            </div>
            <div>
              <span className="font-semibold text-foreground">
                Total resultados:
              </span>{" "}
              {meta?.total}
            </div>
          </div>
        )}
        <Pagination>
          <PaginationContent>
            {meta?.links?.map((link, index) => {
              let label = link?.label;
              if (index == 0) {
                label = <ChevronLeft />;
              }
              if (index == meta?.links?.length - 1) {
                label = <ChevronRight />;
              }
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    className={`${
                      meta?.current_page == link?.label
                        ? "bg-primary text-white"
                        : ""
                    } ${
                      link?.url == null ? "opacity-50 pointer-events-none" : ""
                    } cursor-pointer`}
                    onClick={async () => {
                      let data;
                      if (protocolo === "post") {
                        data = await postData(
                          setLoading,
                          toast,
                          params,
                          link?.url
                        );
                      }
                      if (protocolo === "get") {
                        data = await fetchData(
                          setLoading,
                          toast,
                          params,
                          link?.url
                        );
                      }
                      setMeta(createAdapterMeta(data));
                      setData(data?.data);
                    }}
                  >
                    {label}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};
