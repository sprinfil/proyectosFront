import { ErrorMessage, Field, Form, Formik } from "formik";
import { createSharedComboBoxAdapter } from "../../../utils/adapters/SharedComboBoxDataAdapter";
import { SharedComboBox } from "../../SharedComboBox/SharedComboBox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/alert-dialog";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useCrearPartida } from "./useCrearPartida.hook";
import type { crearPartida } from "../../../utils/types/Partidas";
import { Button } from "../../ui/button";

type CrearPartidaProps = {
  trigger: React.ReactNode;
  partidas: any[];
  setPartidas: Function;
  refTrigger: any;
};

export const CrearPartida: React.FC<CrearPartidaProps> = ({
  trigger,
  partidas,
  setPartidas,
  refTrigger,
}) => {
  const { crearPartida, schema, initialValues } = useCrearPartida(
    partidas,
    setPartidas,
    refTrigger
  );

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
        <AlertDialogContent className="min-w-[90%]">
          <AlertDialogHeader>
            <AlertDialogTitle>Crear partida</AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values: crearPartida) => crearPartida(values)}
          >
            {({
              values,
              handleChange,
              handleBlur,
              errors,
              touched,
              setFieldValue,
            }) => (
              <Form>
                <div className="h-[50vh] overflow-auto px-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                      <p>Nombre</p>
                      <Field as={Input} name="name" placeholder="Nombre" />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="w-full flex gap-2  items-start">
                      <div className="flex flex-col gap-2 flex-1">
                        <p>Fecha inicio</p>
                        <input
                          name="start"
                          type="date"
                          value={values.start}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="py-2 px-3 border border-border rounded-lg w-full"
                        />
                        {touched.start ? (
                          <p className="text-red-500 text-sm">{errors.start}</p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="flex flex-col gap-2 flex-1">
                        <p>Fecha fin</p>
                        <input
                          name="end"
                          type="date"
                          value={values.end}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="py-2 px-3 border border-border rounded-lg w-full"
                        />
                        {touched.end ? (
                          <p className="text-red-500 text-sm">{errors.end}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2">Dependencia</p>
                      <SharedComboBox
                        data={createSharedComboBoxAdapter(partidas)}
                        setObject={(object: any) => {
                          setFieldValue("dependencies", object?.id);
                        }}
                      />
                      {touched.dependencies ? (
                        <p className="text-red-500 text-sm">
                          {errors.dependencies}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  {/* <div className="mt-10 w-full">
                    <p>Dependencias</p>
                  </div> */}
                </div>
                <div className="w-full flex justify-end gap-2 ">
                  <Button
                    type={"button"}
                    variant={"outline"}
                    onClick={() => {
                      refTrigger?.current?.click();
                    }}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit">Aceptar</Button>
                </div>
              </Form>
            )}
          </Formik>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
