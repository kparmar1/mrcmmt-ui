import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { DuplicateFilterPipe } from '../../pipes/duplicate-filter.pipe';
import { DomainMatchPipe } from '../../pipes/domain-match.pipe';
import { TextMatchPipe } from '../../pipes/text-match.pipe';
import { AlphabeticalPipe } from '../../pipes/alphabetical.pipe';
import { ApplicableAttributesPanelComponent } from './applicable-attributes-panel.component';
import { InheritedDomainMatchPipe } from '../../pipes/inherited-domain-match.pipe';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ApplicableAttributesPanelComponent', () => {
    let component: ApplicableAttributesPanelComponent;
    let fixture: ComponentFixture<ApplicableAttributesPanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientTestingModule,
                RouterTestingModule,
                BrowserDynamicTestingModule
            ],
            declarations: [
                ApplicableAttributesPanelComponent,
                DuplicateFilterPipe,
                DomainMatchPipe,
                InheritedDomainMatchPipe,
                TextMatchPipe,
                AlphabeticalPipe
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ApplicableAttributesPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
