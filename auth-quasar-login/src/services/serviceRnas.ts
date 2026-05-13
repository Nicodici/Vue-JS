import axios from 'axios'


const apiRnas = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
})
export default apiRnas

export interface RnasItem {
  rnas: number;
  rnas_formateado?: string;
  nombre: string;
  sigla: string;
  situacion_legal_codigo: number;
  situacion_legal_descripcion: string;
  tiene_crisis: boolean;
  baja?: boolean | null;
}

export interface RnasListResponse {
 data:[RnasItem]
}

export async function fetchRnasList(): Promise<RnasListResponse> {
  const response = await apiRnas.get<RnasListResponse>('/api/v1/rnas/list');
  return response.data
}



// '/api/v1/rnas/list'