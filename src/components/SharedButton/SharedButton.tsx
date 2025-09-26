import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { LoaderButton } from "../LoaderButton/LoaderButton";
import type { VariantProps } from "class-variance-authority";

interface SharedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  texto: any;
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
