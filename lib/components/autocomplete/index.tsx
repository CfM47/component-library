import React from "react";
import TextField from "@mui/material/TextField";
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material";

export interface AutocompleteProps
  extends MuiAutocompleteProps<string, false, false, false> {
  options: string[];
  label: string;
  placeholder?: string;
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => void;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  label,
  placeholder = "",
  onChange,
}) => {
  return (
    <MuiAutocomplete
      options={options}
      loadingText="Loading..."
      onChange={(event, value) => onChange(event, value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          variant="outlined"
        />
      )}
      fullWidth
    />
  );
};
