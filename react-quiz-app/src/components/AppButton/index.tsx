import { Button } from "@chakra-ui/react";
import React from "react";

export interface AppButtonProps {
  value: string;
  colorScheme: string;
  variant: string;
  className?: string;
  disabled: boolean;
  width?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (e?: any) => void;
}

const AppButton: React.FC<AppButtonProps> = ({
  value,
  colorScheme,
  variant,
  className,
  disabled,
  width,
  onClick,
}) => {
  return (
    <Button
      colorScheme={colorScheme}
      variant={variant}
      className={className}
      disabled={disabled}
      width={width}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default AppButton;
