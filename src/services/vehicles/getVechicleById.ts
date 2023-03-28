import api from '~/lib/axios';

import { Vehicle } from '~/models/Vehicle';

async function getVehicleById(vehicleId: number) {
  const { data } = await api.get<Vehicle>(`/vehicles/${vehicleId}`);

  return data;
}

export default getVehicleById;
