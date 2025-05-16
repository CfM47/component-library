import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress,
  SxProps,
} from "@mui/material";
import React, { MouseEventHandler } from "react";

export interface ButtonProps extends MuiButtonProps {
  text: string | React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "button";
  isLoading?: boolean;
  loadingStyle?: SxProps;
}

export const Button = ({
  onClick,
  text,
  type,
  isLoading,
  loadingStyle = { color: "white" },
  sx,
  ...rest
}: ButtonProps) => {
  return (
    <MuiButton
      variant="contained"
      size="large"
      onClick={onClick ?? ((_) => _)}
      sx={{ fontSize: 18, fontWeight: 400, minHeight: "39.5px", ...sx }}
      {...{ type, ...rest }}
    >
      {isLoading ? (
        <CircularProgress aria-label="loading" sx={loadingStyle} size={24} />
      ) : (
        text
      )}
    </MuiButton>
  );
};
