import { TestBed } from '@angular/core/testing';

import { ChildActivateGuard } from './child-activate.guard';

describe('ChildActivateGuard', () => {
  let guard: ChildActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
