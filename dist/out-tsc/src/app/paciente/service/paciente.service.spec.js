import { TestBed } from '@angular/core/testing';
import { PacienteService } from './paciente.service';
describe('PacienteService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(PacienteService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=paciente.service.spec.js.map