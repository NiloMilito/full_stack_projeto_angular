import { TestBed } from '@angular/core/testing';
import { MedicoService } from './medico.service';
describe('MedicoService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(MedicoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=medico.service.spec.js.map