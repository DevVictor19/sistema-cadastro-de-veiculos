import api from '~/lib/axios';

import { Vehicle } from '~/models/Vehicle';

async function getVehicles() {
  const { data } = await api.get<Vehicle[]>('/vehicles');

  return data;
}

export default getVehicles;
