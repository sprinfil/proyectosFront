import { Card, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useProyectosForm } from "./useProyectosForm";
import { SharedButton } from "../SharedButton/SharedButton";
import LoaderHorizontal from "../LoaderHorizontal/LoaderHorizontal";
import Dropzone from "../Dropzone/Dropzone";

export const ProyectosForm = () => {
  const {
    validationSchema,
    defaultValues,
    guardarProyecto,
    loading,
    loadingGuardarProyecto,
    archivosTemporales,
    setArchivosTemporales
  } = useProyectosForm();

  return (
    <>
      <div className="mb-2">{loading && <LoaderHorizontal />}</div>
      <div className={` ${loading ? "opacity-70 pointer-none" : ""}`}>
        <Formik
          initialValues={defaultValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(values) => {
            guardarProyecto(values);
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <div className="w-full h-full flex flex-col gap-4">
                {/* <Card className="px-5">
                  <CardTitle className="text-2xl">Expediente técnico</CardTitle>
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
                </Card> */}
                <Card className="px-5">
                  <CardTitle className="text-2xl">Carátula única</CardTitle>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col gap-2">
                      <p>No. De Obra</p>
                      <Field
                        as={Input}
                        name="clave"
                        placeholder="No. De Obra"
                      />
                      <ErrorMessage
                        name="clave"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Componente</p>
                      <Field
                        as={Input}
                        name="componente"
                        placeholder="Componente"
                      />
                      <ErrorMessage
                        name="componente"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Subcomponente</p>
                      <Field
                        as={Input}
                        name="subcomponente"
                        placeholder="Subcomponente"
                      />
                      <ErrorMessage
                        name="subcomponente"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Acción Tipo</p>
                      <Field
                        as={Input}
                        name="accion_tipo"
                        placeholder="Acción Tipo"
                      />
                      <ErrorMessage
                        name="accion_tipo"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>SubAcción</p>
                      <Field
                        as={Input}
                        name="sub_accion"
                        placeholder="SubAcción Tipo"
                      />
                      <ErrorMessage
                        name="sub_accion"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Dependencia Ejecutora</p>
                      <Field
                        as={Input}
                        name="dependencia_ejecutora"
                        placeholder="Dependencia Ejecutora"
                      />
                      <ErrorMessage
                        name="dependencia_ejecutora"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                </Card>
                <Card className="px-5">
                  <CardTitle className="text-2xl">
                    Distribución de la inversión (Pesos)
                  </CardTitle>
                  <div className="flex flex-col gap-8 w-full ">
                    <div className="flex flex-col gap-2 w-full">
                      <p>Costo total</p>
                      <Field
                        as={Input}
                        name="costo_total"
                        type="number"
                        placeholder="Costo total"
                      />
                      <ErrorMessage
                        name="costo_total"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                      <p className="text-muted-foreground">
                        En caso de ser una obra/acción multianual, indicar la
                        inversión por año
                      </p>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-2">
                        <p>Federal (100%)</p>
                        <Field
                          as={Input}
                          name="federal"
                          type="number"
                          placeholder="Federal"
                        />
                        <ErrorMessage
                          name="federal"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>Estatal (0%)</p>
                        <Field
                          as={Input}
                          name="estatal"
                          type="number"
                          placeholder="Estatal"
                        />
                        <ErrorMessage
                          name="estatal"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-2">
                        <p>Municipal (0%)</p>
                        <Field
                          as={Input}
                          name="municipal"
                          type="number"
                          placeholder="Municipal (0%)"
                        />
                        <ErrorMessage
                          name="municipal"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>OOMSAPAS (0%)</p>
                        <Field
                          as={Input}
                          name="oomsapas"
                          type="number"
                          placeholder="OOMSAPAS (0%)"
                        />
                        <ErrorMessage
                          name="oomsapas"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-2">
                        <p>Otros</p>
                        <Field
                          as={Input}
                          name="otros"
                          type="number"
                          placeholder="Otros"
                        />
                        <ErrorMessage
                          name="otros"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>No. De Joranles a Generar</p>
                        <Field
                          as={Input}
                          name="numero_jornales"
                          type="number"
                          placeholder="No. De Joranles a Generar"
                        />
                        <ErrorMessage
                          name="numero_jornales"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-2">
                        <p>Periodo estimado de ejecución (días naturales)</p>
                        <Field
                          as={Input}
                          name="periodo_estimado_ejecucion"
                          type="number"
                          placeholder="Periodo estimado de ejecución (días naturales)"
                        />
                        <ErrorMessage
                          name="periodo_estimado_ejecucion"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>Forma de ejecución de la obra/acción</p>
                        <Select
                          value={values.forma_ejecucion}
                          onValueChange={(value) =>
                            setFieldValue("forma_ejecucion", value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Forma de ejecución de la obra/acción" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="contrato">Contrato</SelectItem>
                          </SelectContent>
                        </Select>
                        <ErrorMessage
                          name="forma_ejecucion"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-2">
                        <p>Fecha de inicio</p>
                        <Field
                          className="p-1.5 border border-border rounded-lg"
                          name="fecha_inicio"
                          type="date"
                        />
                        <ErrorMessage
                          name="fecha_inicio"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>Fecha de termino</p>
                        <Field
                          className="p-1.5 border border-border rounded-lg"
                          name="fecha_termino"
                          type="date"
                        />
                        <ErrorMessage
                          name="fecha_termino"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="px-5">
                  <CardTitle className="text-2xl">
                    Generalidades de la obra/acción
                  </CardTitle>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                      <p>Descripción</p>
                      <Field
                        as={Textarea}
                        name="descripcion"
                        type="text"
                        placeholder="Descripción"
                      />
                      <ErrorMessage
                        name="descripcion"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Metas</p>
                      <Field
                        as={Textarea}
                        name="metas"
                        type="text"
                        placeholder="Metas"
                      />
                      <ErrorMessage
                        name="metas"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {/* <div className="flex flex-col gap-2">
                      <p>Municipio</p>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Municipio" />
                        </SelectTrigger>
                        <SelectContent>
                          {municipios.map((municipio, index) => {
                            return (
                              <>
                                <SelectItem key={index} value={municipio.value}>
                                  {municipio.label}
                                </SelectItem>
                              </>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Localidad</p>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Localidad" />
                        </SelectTrigger>
                        <SelectContent>
                          {localidades.map((localidad, index) => {
                            return (
                              <>
                                <SelectItem key={index} value={localidad.value}>
                                  {localidad.label}
                                </SelectItem>
                              </>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div> */}
                      <div className="flex flex-col gap-2">
                        <p>Clave INEGI</p>
                        <Field
                          as={Input}
                          name="clave_inegi"
                          type="number"
                          placeholder="Clave INEGI"
                        />
                        <ErrorMessage
                          name="clave_inegi"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>Grado de marginación</p>
                        <Select
                          value={values.grado_marginacion}
                          onValueChange={(value) =>
                            setFieldValue("grado_marginacion", value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Grado de marginación" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="muyAlto">Muy alto</SelectItem>
                            <SelectItem value="alto">Alto</SelectItem>
                            <SelectItem value="medio">Medio</SelectItem>
                            <SelectItem value="bajo">Bajo</SelectItem>
                            <SelectItem value="muyBajo">Muy bajo</SelectItem>
                          </SelectContent>
                        </Select>
                        <ErrorMessage
                          name="grado_marginacion"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>Población total</p>
                        <Field
                          as={Input}
                          name="total_poblacion"
                          type="number"
                          placeholder="Población total"
                        />
                        <ErrorMessage
                          name="total_poblacion"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                        <div>
                          <table>
                            <tr>
                              <td className="px-2">Hombres</td>
                              <td>
                                <Field
                                  as={Input}
                                  name="poblacion_hombres"
                                  type="number"
                                  placeholder="Población total"
                                />
                                <ErrorMessage
                                  name="poblacion_hombres"
                                  component="span"
                                  className="text-red-500 text-sm"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">Mujeres</td>
                              <td>
                                <Field
                                  as={Input}
                                  name="poblacion_mujeres"
                                  type="number"
                                  placeholder="Población total"
                                />
                                <ErrorMessage
                                  name="poblacion_mujeres"
                                  component="span"
                                  className="text-red-500 text-sm"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">Indígena</td>
                              <td>
                                <Field
                                  as={Input}
                                  name="poblacion_indigenas"
                                  type="number"
                                  placeholder="Población total"
                                />
                                <ErrorMessage
                                  name="poblacion_indigenas"
                                  component="span"
                                  className="text-red-500 text-sm"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">Afromexicana</td>
                              <td>
                                <Field
                                  as={Input}
                                  name="poblacion_afromexicana"
                                  type="number"
                                  placeholder="Población total"
                                />
                                <ErrorMessage
                                  name="poblacion_afromexicana"
                                  component="span"
                                  className="text-red-500 text-sm"
                                />
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>Beneficiarios</p>
                        <Field
                          as={Input}
                          name="total_beneficiarios"
                          type="number"
                          placeholder="Beneficiarios total"
                        />
                        <ErrorMessage
                          name="total_beneficiarios"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                        <div>
                          <table>
                            <tr>
                              <td className="px-2">Hombres</td>
                              <td>
                                <Field
                                  as={Input}
                                  name="beneficiarios_hombres"
                                  type="number"
                                  placeholder="Población total"
                                />
                                <ErrorMessage
                                  name="beneficiarios_hombres"
                                  component="span"
                                  className="text-red-500 text-sm"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">Mujeres</td>
                              <td>
                                <Field
                                  as={Input}
                                  name="beneficiarios_mujeres"
                                  type="number"
                                  placeholder="Población total"
                                />
                                <ErrorMessage
                                  name="beneficiarios_mujeres"
                                  component="span"
                                  className="text-red-500 text-sm"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">Indígena</td>
                              <td>
                                <Field
                                  as={Input}
                                  name="beneficiarios_indigenas"
                                  type="number"
                                  placeholder="Población total"
                                />
                                <ErrorMessage
                                  name="beneficiarios_indigenas"
                                  component="span"
                                  className="text-red-500 text-sm"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">Afromexicana</td>
                              <td>
                                <Field
                                  as={Input}
                                  name="beneficiarios_afromexicana"
                                  type="number"
                                  placeholder="Población total"
                                />
                                <ErrorMessage
                                  name="beneficiarios_afromexicana"
                                  component="span"
                                  className="text-red-500 text-sm"
                                />
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="px-5">
                  <CardTitle className="text-2xl">Justificación</CardTitle>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex flex-col gap-2">
                      <p>Ubicación</p>
                      <Field
                        as={Textarea}
                        name="ubicacion"
                        type="text"
                        placeholder="Ubicación"
                      />
                      <ErrorMessage
                        name="ubicacion"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Problemática para resolver/situación actual</p>
                      <Field
                        as={Textarea}
                        name="problematica"
                        type="text"
                        placeholder="Problemática para resolver/situación actual"
                      />
                      <ErrorMessage
                        name="problematica"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Fuente de los recursos e inversión</p>
                      <Field
                        as={Textarea}
                        name="fuente_recurso"
                        type="text"
                        placeholder="Fuente de los recursos e inversión"
                      />
                      <ErrorMessage
                        name="fuente_recurso"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="px-5">
                  <CardTitle className="text-2xl">Archivos</CardTitle>

                  <div className="flex flex-col gap-2">
                    <Field name="archivos">
                      {({ field, form }: { field: any; form: any }) => (
                        <Dropzone
                          archivos={archivosTemporales}
                          set_archivos={setArchivosTemporales}
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

                  {defaultValues?.adjuntos?.map((adjunto, index) => (
                    <>
                      <a
                        className="text-blue-500 hover:underline"
                        href={
                          import.meta.env.VITE_BASE_URL +
                          "/storage/" +
                          adjunto?.url
                        }
                      >
                        {" "}
                        <p key={index}>{adjunto?.archivo_name}</p>
                      </a>
                    </>
                  ))}
                </Card>
                {/* <Button type="submit" disabled={loading}>
                Guardar
              </Button> */}
                <div className="w-full flex justify-end">
                  <SharedButton
                    className="w-[200px]"
                    texto={"Guardar"}
                    loading={loadingGuardarProyecto}
                    type="submit"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
