import sentiloApi from '../services/sentilo';

export async function getSensors() {
  const { data: sensors } = await sentiloApi.get<Sentilo.ISensors[]>(`/data/${import.meta.env.SENTILO_UTFPR_PROVIDERID}`);
  // const { data: sensors } = await sentiloApi.get<Sentilo.ISensors[]>(`/data/toledo@utfpr`);
    
  return sensors;
}