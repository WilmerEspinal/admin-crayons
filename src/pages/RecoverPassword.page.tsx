import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";

const RecoverPassword = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="grid w-full max-w-sm items-center">
        <Label htmlFor="documento">Documento de identidad</Label>
        <Input type="number" id="documento" placeholder="Ingresar documento" />
        <div className="flex justify-between mt-3">
          <Link
            to="/"
            className={`${buttonVariants({
              variant: "outline",
            })} bg-red-500 hover:bg-red-600 hover:text-white text-white w-28`}
          >
            Atras
          </Link>
          <Button className="w-28">Validar</Button>
        </div>
      </div>
    </section>
  );
};
export default RecoverPassword;
