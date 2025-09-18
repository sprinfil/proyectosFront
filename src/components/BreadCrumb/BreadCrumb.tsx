import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useNavigate } from "react-router-dom";

interface Screen {
  nombre: string;
  url: string;
}

interface BreadCrumbProps {
  screens: Screen[];
}

export const BreadCrumb: React.FC<BreadCrumbProps> = ({ screens }) => {
  if (!screens || screens.length === 0) return null;
  const navigate = useNavigate();
  return (
    <Breadcrumb className="mb-[10px] ">
      <BreadcrumbList>
        {screens.map((screen, index) => {
          const isLast = index === screens.length - 1;

          return (
            <React.Fragment key={screen.url}>
              <BreadcrumbItem className="">
                {isLast ? (
                  <BreadcrumbPage className="text-blue-500">{screen.nombre}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    className="cursor-pointer"
                    onClick={(e) => {
                      navigate(screen.url);
                    }}
                  >
                    {screen.nombre}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
