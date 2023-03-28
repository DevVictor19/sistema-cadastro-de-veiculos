import api from '~/lib/axios';

async function deleteVehicle(id: number) {
  await api.delete(`/vehicles/${id}`);
}

export default deleteVehicle;
