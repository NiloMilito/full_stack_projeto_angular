import { async, TestBed } from '@angular/core/testing';
import { DiretivaExemploComponent } from './diretiva-exemplo.component';
describe('DiretivaExemploComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DiretivaExemploComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DiretivaExemploComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=diretiva-exemplo.component.spec.js.map