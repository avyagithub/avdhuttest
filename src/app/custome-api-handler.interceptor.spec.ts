import { TestBed } from '@angular/core/testing';

import { CustomeApiHandlerInterceptor } from './custome-api-handler.interceptor';

describe('CustomeApiHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CustomeApiHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CustomeApiHandlerInterceptor = TestBed.inject(CustomeApiHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
