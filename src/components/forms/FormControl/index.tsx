import { useForm, FieldValues, Path, DeepPartial } from 'react-hook-form';
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
  inputMargin: 'none' | 'normal' | 'dense';
  inputVariant: 'outlined' | 'filled' | 'standard';
  formValidationSchema: ZodSchema<T>;
  formId: string;
  defaultValues: DeepPartial<T> | null;
  styles: SxProps<Theme>;
  onSubmit: (data: T) => void;
}

function FormControl<T extends FieldValues>({
  inputs,
  inputMargin,
  inputVariant,
  formValidationSchema,
  formId,
  defaultValues,
  styles,
  onSubmit,
}: FormControlProps<T>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(formValidationSchema),
    ...(defaultValues && { defaultValues }),
  });

  return (
    <Box
      id={formId}
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
          margin={inputMargin}
          variant={inputVariant}
        />
      ))}
    </Box>
  );
}

export default FormControl;
