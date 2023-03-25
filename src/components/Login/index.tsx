import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';

import FormControl from '~/components/forms/FormControl';
import loginSchema, { LoginSchema } from './validation';

function Login() {
  const handleSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <Box sx={{ maxWidth: '400px' }}>
      <Typography variant="h5" textAlign="center" mb={3}>
        Login
      </Typography>
      <FormControl
        formValidationSchema={loginSchema}
        inputs={[
          { name: 'nome', label: 'Nome' },
          { name: 'cpf', label: 'CPF' },
        ]}
        onSubmit={handleSubmit}
        styles={{ display: 'grid', width: '100%' }}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          Entrar
        </Button>
      </FormControl>
      <MuiLink>Não possui uma conta? Cadastre-se</MuiLink>
    </Box>
  );
}

export default Login;
