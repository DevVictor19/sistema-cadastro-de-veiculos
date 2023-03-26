import { useMutation } from 'react-query';

import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';

import FormControl from '~/components/forms/FormControl';
import { useAuthContext } from '~/contexts/AuthContext';
import signupSchema, { SignupSchema } from './validation';
import Feedback from '~/components/Feedback';

function Signup() {
  const { signup } = useAuthContext();

  const { isLoading, isSuccess, isError, mutate } = useMutation({
    mutationKey: ['user'],
    mutationFn: (user: SignupSchema) => signup(user),
  });

  const handleSubmit = (data: SignupSchema) => {
    mutate(data);
  };

  return (
    <Box sx={{ maxWidth: '400px' }}>
      <Typography variant="h5" textAlign="center" mb={3}>
        Signup
      </Typography>
      <Feedback
        successMessage="Usuário cadastrado com sucesso"
        errorMessage="Não foi possível cadastrar usuário"
        isSuccess={isSuccess}
        isError={isError}
        isLoading={isLoading}
      />
      <FormControl
        formValidationSchema={signupSchema}
        inputs={[
          { name: 'nome', label: 'Nome' },
          { name: 'cpf', label: 'CPF' },
        ]}
        onSubmit={handleSubmit}
        styles={{ display: 'grid', width: '100%' }}
      >
        <Button
          type="submit"
          disabled={isLoading}
          variant="contained"
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          Cadastrar
        </Button>
      </FormControl>
      <MuiLink variant="body2" component={Link} to="/">
        Já possui uma conta? Faça login
      </MuiLink>
    </Box>
  );
}

export default Signup;
