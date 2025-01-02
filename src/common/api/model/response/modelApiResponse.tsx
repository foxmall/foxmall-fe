export enum ApiResponseStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

// Define the generic ApiResponse type
export type ApiResponse<T> = {
  status: ApiResponseStatus;
  data: T;
  error: string | null;
  traceId: string | null;
}
