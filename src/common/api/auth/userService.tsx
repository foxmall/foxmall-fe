import authAxiosClient from "./authAxiosClient";
import {AxiosResponse} from "axios";
import {ApiResponse} from "../model/response/modelApiResponse";


export type MeResponse = {
  username: string
}

export type MeApiResponse = MeResponse | null;

export const meAPI = async (): Promise<ApiResponse<MeResponse> | null> => {
  try {
    const response: AxiosResponse<ApiResponse<MeResponse>> = await authAxiosClient.get<ApiResponse<MeResponse>>('/user/api/v1/me');
    return response.data;
  }catch (e){
    console.error("Error fetching user data:", e);
    return null;
  }

}
