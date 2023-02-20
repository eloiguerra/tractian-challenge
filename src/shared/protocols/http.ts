import { Upload } from "./upload";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpResponse {
  statusCode: number;
  body: any;
}

export interface HttpRequest {
  params?: any;
  query?: any;
  body?: any;
  headers?: any;
  user?: any;
  files?: Upload;
}

export interface HttpNextFunction {
  (error?: Error): void;
}
