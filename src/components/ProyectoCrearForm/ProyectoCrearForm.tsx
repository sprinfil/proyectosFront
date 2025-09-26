import { ErrorMessage, Field, Form, Formik } from "formik";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useProyectoCrearForm } from "./ProyectoCrearForm.hook";
import { SharedButton } from "../SharedButton/SharedButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { localidades } from "../../utils/services/localidades";
import { municipios } from "../../utils/services/municipios";
import LoaderHorizontal from "../LoaderHorizontal/LoaderHorizontal";
import { Download } from "lucide-react";

export const ProyectoCrearForm = () => {
  const {
    defaultValues,
    validationSchema,
    guardarProyecto,
    loading,
    loadingConsultandoProyecto,
    id,
  } = useProyectoCrearForm();

  return (
    <>
      <div className="mb-2">
        {loadingConsultandoProyecto && <LoaderHorizontal />}
      </div>

      <div
        className={` ${
          loadingConsultandoProyecto ? "opacity-70 pointer-none" : ""
        }`}
      >
        {id && (
          <>
            <SharedButton
              className="mb-3 ml-1"
              texto={
                <>
                  Ficha Técnica <Download />
                </>
              }
            ></SharedButton>
          </>
        )}
        <Formik
          initialValues={defaultValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(values) => {
            guardarProyecto(values);
          }}
        >
          {({ setFieldValue, values }) => {
            return (
              <Form>
                <Card className="px-5">
                  {/* <CardTitle className="text-2xl">Expediente técnico</CardTitle> */}
                  {/* <div className="grid grid-cols-2 gap-2">
               <div className="flex flex-col gap-2">
                <p>Archivo</p>
                <Field name="archivos">
                  {({ field, form }: { field: any; form: any }) => (
                    <Dropzone
                      set={(archivos: any) => {
                        form.setFieldValue(field.name, archivos);
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="archivos"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div> 
            </div> */}
                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col gap-2">
                      <p>Nombre de la obra/acción</p>
                      <Field
                        as={Textarea}
                        name="nombre_obra"
                        placeholder="Nombre de la obra/acción"
                      />
                      <ErrorMessage
                        name="nombre_obra"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Programa</p>
                      <Field
                        as={Textarea}
                        name="nombre_programa"
                        placeholder="Programa"
                      />
                      <ErrorMessage
                        name="nombre_programa"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Apartado</p>
                      <Field
                        as={Input}
                        name="apartado"
                        placeholder="Apartado"
                      />
                      <ErrorMessage
                        name="apartado"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Localidad</p>
                      <Select
                        value={values.localidad}
                        onValueChange={(value) =>
                          setFieldValue("localidad", value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Localidad" />
                        </SelectTrigger>
                        <SelectContent>
                          {localidades.map((loc: any, i: number) => (
                            <SelectItem key={i} value={loc.value}>
                              {loc.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <ErrorMessage
                        name="localidad"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Municipio</p>
                      <Select
                        value={values.municipio}
                        onValueChange={(value) =>
                          setFieldValue("municipio", value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Municipio" />
                        </SelectTrigger>
                        <SelectContent>
                          {municipios.map((mun: any, i: number) => (
                            <SelectItem key={i} value={mun.value}>
                              {mun.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <ErrorMessage
                        name="municipio"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                </Card>
                <div className="w-full flex items-center justify-center">
                  <div className="w-full flex justify-end">
                    <SharedButton
                      texto={id ? "Guardar" : "Crear proyecto"}
                      className="w-[200px] mt-2"
                      loading={loading}
                    />
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
