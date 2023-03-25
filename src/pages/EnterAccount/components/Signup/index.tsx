import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';

import FormControl from '~/components/forms/FormControl';
import signupSchema, { SignupSchema } from './validation';

function Signup() {
  const handleSubmit = (data: SignupSchema) => {
    console.log(data);
  };

  return (
    <Box sx={{ maxWidth: '400px' }}>
      <Typography variant="h5" textAlign="center" mb={3}>
        Signup
      </Typography>
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
