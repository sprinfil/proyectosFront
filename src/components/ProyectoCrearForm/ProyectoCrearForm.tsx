import { ErrorMessage, Field, Form, Formik } from "formik";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useProyectoCrearForm } from "./ProyectoCrearForm.hook";
import { SharedButton } from "../SharedButton/SharedButton";

export const ProyectoCrearForm = () => {
  const { defaultValues, validationSchema, guardarProyecto, loading } =
    useProyectoCrearForm();
  return (
    <>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values) => {
          guardarProyecto(values);
        }}
      >
        <Form>
          <Card className="px-5">
            {/* <CardTitle className="text-2xl">Expediente técnico</CardTitle> */}
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col gap-2">
                <p>No. De Obra</p>
                <Field as={Input} name="clave" placeholder="No. De Obra" />
                <ErrorMessage
                  name="clave"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>Nombre de la obra/acción</p>
                <Field name="nombre_obra">
                  {({ field, form }) => (
                    <Textarea
                      {...field}
                      placeholder="Nombre de la obra/acción"
                      onChange={(e) =>
                        form.setFieldValue(
                          field.name,
                          e.target.value.toUpperCase()
                        )
                      }
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="nombre_obra"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
          </Card>
          <div className="w-full flex items-center justify-center">
            <div className=" w-[500px]">
              {/* <Button disabled={loading} type="submit" className="w-full mt-2">
                <LoaderButton />
              </Button> */}
              <SharedButton
                texto={"Crear proyecto"}
                className="w-full mt-2"
                loading={loading}
              />
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
