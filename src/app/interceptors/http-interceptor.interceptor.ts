import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_URL } from '../app.config';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const apiUrl: string = inject(API_URL);
  console.log(req.url);
  const newApi = req.clone({
    url: `${apiUrl}${req.url}`
  })
  return next(newApi);
};
