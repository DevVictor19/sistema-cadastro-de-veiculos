import api from '~/lib/axios';

import { Vehicle } from '~/models/Vehicle';

async function putVehicle(payload: Omit<Vehicle, 'id'>, vehicleId: number) {
  await api.put(`/vehicles/${vehicleId}`, payload);
}

export default putVehicle;
