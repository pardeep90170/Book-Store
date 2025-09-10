import { ApiError } from './ApiError.js';
import { ApiRes } from './ApiRes.js';

export const globalHandlerError = (error, req, res, next) => {
  if (!(error instanceof ApiError)) {
    return res
      .status(500)
      .json(new ApiRes(500, null, error.message ?? 'Internal Server Error'));
  }

  return res
    .status(error.statusCode)
    .json(new ApiRes(error.statusCode, error.data, error.message, error.errors));
};
