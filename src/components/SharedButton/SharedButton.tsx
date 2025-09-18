import React from "react";
import { Button } from "../ui/button";
import { LoaderButton } from "../LoaderButton/LoaderButton";

interface SharedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  texto: string;
  loading?: boolean;
}

export const SharedButton: React.FC<SharedButtonProps> = ({
  texto,
  loading,
  ...props
}) => {
  return (
    <>
      <Button {...props} disabled={loading}>
        {loading ? <LoaderButton /> : <>{texto}</>}
      </Button>
    </>
  );
};
