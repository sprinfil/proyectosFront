import { Input } from "../ui/input";
import { SharedButton } from "../SharedButton/SharedButton";
import { Card } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { assets } from "../../lib/assets";
import { useLoginData } from "./useLoginData";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useLogin } from "../../utils/hooks/Auth/useLogin";

export const Login = () => {
  const navigate = useNavigate();
  const { validationSchema, initialValues } = useLoginData();
  const { Login, loading: LoadingAuth } = useLogin();
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={async (values) => {
        await Login(values.username, values.password);
        navigate("/proyectos");
      }}
    >
      {({}) => (
        <Form>
          <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 lg:px-8">
            <Card className="w-[500px] py-5 px-10 flex flex-col ">
              <div className="">
                <img src={assets.logo} className="mx-auto h-20 w-auto" />
                <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                  Proyectos SAPA
                </h2>
              </div>

              <div className="mt-10 ">
                <div>
                  <label className="block text-sm/6 font-medium text-gray-900">
                    Nombre de usuario
                  </label>
                  <div className="mt-2">
                    <Field
                      as={Input}
                      name="username"
                      placeholder="Nombre de usuario"
                    />
                    <ErrorMessage
                      name="username"
                      component="span"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mt-5">
                    <label className="block text-sm/6 font-medium text-gray-900">
                      Contraseña
                    </label>
                  </div>
                  <div className="mt-2">
                    <Field
                      as={Input}
                      name="password"
                      placeholder="Contraseña"
                      type="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <SharedButton
                    texto={"Iniciar Sesión"}
                    className="w-full mt-5"
                    loading={LoadingAuth}
                  />
                </div>
              </div>
            </Card>
          </div>
        </Form>
      )}
    </Formik>
  );
};
