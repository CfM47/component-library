import { Typography } from "@mui/material";

export interface LabelProps {
  label: string;
  color?: string;
}

export const Label = ({ label, color }: LabelProps) => {
  return (
    <Typography color={color} fontWeight={400}>
      {label}
    </Typography>
  );
};
