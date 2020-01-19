import { async, TestBed } from '@angular/core/testing';
import { PipeExemploComponent } from './pipe-exemplo.component';
describe('PipeExemploComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PipeExemploComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PipeExemploComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pipe-exemplo.component.spec.js.map