import { TestBed } from '@angular/core/testing';

import { EditService } from './edit.service';

describe('editService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditService = TestBed.get(EditService);
    expect(service).toBeTruthy();
  });
});
