import authAxiosClient from "./authAxiosClient";

export type MeResponse = {
  data: MeDataResponse
}

export type MeDataResponse = {
  username: string
}

export const meAPI = async () => {
  const response = await authAxiosClient.get<MeResponse>('/user/api/v1/me');
  if(!response){
    return null;
  }
  return response.data;
}
