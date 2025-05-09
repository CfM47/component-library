import React from "react";
import { Typography } from "@mui/material";

export interface LabelProps {
  label: string;
  color?: string;
}

export const Label: React.FC<LabelProps> = ({ label, color }) => {
  return (
    <Typography color={color} fontWeight={400}>
      {label}
    </Typography>
  );
};
