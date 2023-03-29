import { useState, useId } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import vehicleSchema, {
  VehicleSchema,
} from '~/pages/DashBoard/components/VehicleRegistrationPanel/vehicle-schema';
import Dialog from '~/components/Dialog';
import FormControl from '~/components/forms/FormControl';
import postVehicle from '~/services/vehicles/postVehicle';
import Feedback from '~/components/Feedback';

function VehicleAddButton() {
  const formId = useId();

  const queryClient = useQueryClient();

  const { isLoading, isError, isSuccess, mutate, reset } = useMutation({
    mutationFn: (payload: VehicleSchema) => postVehicle(payload),
    onSuccess: () => queryClient.invalidateQueries(['veiculos']),
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    reset();
  };

  const handleClose = () => setOpen(false);

  const handleMutation = (payload: VehicleSchema) => mutate(payload);

  return (
    <>
      <Dialog
        title="Cadastrar novo veículo"
        open={open}
        onClose={handleClose}
        content={
          <>
            <Box sx={{ marginBottom: 2 }}>
              <Feedback
                successMessage="Cadastro de veículo realizado com sucesso"
                errorMessage="Não foi possível realizar o cadastro do veículo"
                isLoading={isLoading}
                isError={isError}
                isSuccess={isSuccess}
              />
            </Box>
            {!isLoading && (
              <FormControl
                styles={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                }}
                formId={formId}
                formValidationSchema={vehicleSchema}
                defaultValues={null}
                inputs={[
                  { name: 'renavam', label: 'Reanavam' },
                  { name: 'placa', label: 'Placa' },
                  { name: 'modelo', label: 'Modelo' },
                  { name: 'cor', label: 'Cor' },
                  { name: 'marca', label: 'Marca' },
                  { name: 'potencia', label: 'Potência' },
                ]}
                inputMargin="none"
                inputVariant="outlined"
                onSubmit={handleMutation}
              />
            )}
          </>
        }
        actions={
          <>
            <Button onClick={handleClose}>cancelar</Button>
            <Button form={formId} type="submit" variant="contained">
              cadastrar
            </Button>
          </>
        }
      />
      <Button
        onClick={handleOpen}
        variant="contained"
        endIcon={<DirectionsCarIcon />}
      >
        cadastrar veículo
      </Button>
    </>
  );
}

export default VehicleAddButton;
