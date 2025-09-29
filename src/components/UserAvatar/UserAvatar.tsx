import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Button } from "../../components/ui/button";
import ZustandPrincipal from "../../utils/Contexts/ZustandPrincipal";
import { useLogout } from "../../utils/hooks/Auth/useLogout";
import { useNavigate } from "react-router-dom";
// Ajusta la ruta

export const UserAvatar = () => {
  const { user } = ZustandPrincipal(); // asumí que tienes logout en el store
  const nombre = user?.name ?? "";

  // Primeras 2 letras en mayúsculas, validando vacío
  const iniciales = nombre ? nombre.slice(0, 2).toUpperCase() : "??";

  // Nombre capitalizado
  const nombreCapitalizado =
    nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

  const { Logout } = useLogout();
  const navigate = useNavigate();

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="h-13 w-13 cursor-pointer hover:scale-110 transition-all duration-100">
          <AvatarImage src={user?.avatarUrl || ""} />
          <AvatarFallback className="bg-white shadow-lg text-xl border border-border">
            {iniciales}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopoverContent className="w-56 flex flex-col items-center gap-3">
        <p className="font-medium text-lg">{nombreCapitalizado || "Usuario"}</p>
        <Button
          className="w-full bg-red-500 hover:bg-red-600 text-white"
          onClick={() => {
            Logout();
            navigate("/");
          }}
        >
          Cerrar sesión
        </Button>
      </PopoverContent>
    </Popover>
  );
};
