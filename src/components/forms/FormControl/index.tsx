import { ReactNode } from 'react';

import { useForm, FieldValues, Path } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';
import { SxProps, Theme } from '@mui/material';

import Box from '@mui/material/Box';

import InputText from '~/components/forms/InputText';

export interface FormControlInput<T> {
  name: Path<T>;
  label: string;
}

interface FormControlProps<T extends FieldValues> {
  inputs: FormControlInput<T>[];
  formValidationSchema: ZodSchema<T>;
  styles: SxProps<Theme>;
  children: ReactNode;
  onSubmit: (data: T) => void;
}

function FormControl<T extends FieldValues>({
  inputs,
  formValidationSchema,
  styles,
  children,
  onSubmit,
}: FormControlProps<T>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(formValidationSchema),
  });

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      sx={styles}
    >
      {inputs.map(({ name, label }) => (
        <InputText
          key={name}
          name={name}
          label={label}
          validation={control}
          invalid={!!errors[name]}
          helperText={errors[name]?.message as string}
          margin="normal"
          variant="outlined"
        />
      ))}
      {children}
    </Box>
  );
}

export default FormControl;
