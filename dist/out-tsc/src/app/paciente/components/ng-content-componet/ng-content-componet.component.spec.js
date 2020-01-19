import { async, TestBed } from '@angular/core/testing';
import { NgContentComponet } from './ng-content-componet.component';
describe('NgContentComponet', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgContentComponet]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(NgContentComponet);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ng-content-componet.component.spec.js.map