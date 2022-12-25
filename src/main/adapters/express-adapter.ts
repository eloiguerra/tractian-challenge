import { Request, Response } from "express";
import { Controller, HttpRequest, HttpResponse } from "@shared/protocols";

interface Middleware {
  (request: HttpRequest): Promise<HttpResponse>;
}

export const adaptResponse = (
  response: Response,
  httpResponse: HttpResponse,
): Response => {
  if (httpResponse.statusCode === 200) {
    return response.status(httpResponse.statusCode).json(httpResponse.body);
  }

  return response.status(httpResponse.statusCode).json({
    error: httpResponse.body.message,
    type: httpResponse.body.name,
  });
};

export const adaptRoute = (
  controller: Controller,
  middlewares?: Middleware[],
) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      params: request.params,
      query: request.query,
      body: request.body,
    };

    if (middlewares) {
      await Promise.all(
        middlewares.map(async middleware => {
          const responseMiddleware = await middleware(request);
          if (responseMiddleware) adaptResponse(response, responseMiddleware);
        }),
      );
    }

    const httpResponse = await controller.handle(httpRequest);

    return adaptResponse(response, httpResponse);
  };
};
