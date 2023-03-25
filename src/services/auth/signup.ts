import api from '~/lib/axios';

import { User } from '~/models/User';

async function signup(payload: User) {
  await api.post('/user', payload);
}

export default signup;
