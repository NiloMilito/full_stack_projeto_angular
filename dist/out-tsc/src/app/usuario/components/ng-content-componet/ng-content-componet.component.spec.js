import { async, TestBed } from '@angular/core/testing';
import { NgContentComponetComponent } from './ng-content-componet.component';
describe('NgContentComponetComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgContentComponetComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(NgContentComponetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ng-content-componet.component.spec.js.map