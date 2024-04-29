import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function InputWithLabel() {
  return (
    <section className="flex w-screen h-screen items-center justify-center">
      <form className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="usuario">Usuario</Label>
        <Input type="text" id="usuario" placeholder="Nombre de usuario" />

        <Label htmlFor="Password">Contraseña</Label>
        <Input type="Password" id="Password" placeholder="Ingrese su contraseña" />

        <Link className="text-blue-600 text-right" to="/recover-password">¿Has olvidado la contraseña?</Link>
        <Button className="mt-3">Iniciar sesión</Button>
      </form>
    </section>
  );
}
