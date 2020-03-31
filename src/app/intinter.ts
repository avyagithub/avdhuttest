import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomeApiHandlerInterceptor } from './custome-api-handler.interceptor';


export const httpintercpetorproviders={
    provide:HTTP_INTERCEPTORS,
    useClass:CustomeApiHandlerInterceptor,
    multi:true

  }