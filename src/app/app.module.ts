// FRAMEWORK IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';

// COMPONENT IMPORTS
import { SnomedNavbarComponent } from './components/snomed-navbar/snomed-navbar.component';
import { SnomedFooterComponent } from './components/snomed-footer/snomed-footer.component';
import { ApplicableAttributesPanelComponent } from './components/applicable-attributes-panel/applicable-attributes-panel.component';
import { DomainPanelComponent } from './components/domain-panel/domain-panel.component';
import { AttributeRangePanelComponent } from './components/attribute-range-panel/attribute-range-panel.component';
import { ModalComponent } from './components/modal/modal.component';

// PIPE IMPORTS
import { TextMatchPipe } from './pipes/text-match.pipe';
import { InheritedDomainMatchPipe } from './pipes/inherited-domain-match.pipe';
import { AlphabeticalPipe } from './pipes/alphabetical.pipe';
import { CustomOrderPipe } from './pipes/custom-order.pipe';
import { TopLevelDomainPipe } from './pipes/top-level-domain.pipe';
import { DuplicateFilterPipe } from './pipes/duplicate-filter.pipe';
import { DomainMatchPipe } from './pipes/domain-match.pipe';

// SERVICE IMPORTS
import { TerminologyServerService } from './services/terminologyServer.service';
import { SnomedUtilityService } from './services/snomedUtility.service';
import { AuthoringService } from './services/authoring.service';
import { BreadcrumbBarComponent } from './components/breadcrumb-bar/breadcrumb-bar.component';
import { DomainService } from './services/domain.service';
import { AttributeService } from './services/attribute.service';
import { RangeService } from './services/range.service';
import { EditService } from './services/edit.service';
import { MrcmmtService } from './services/mrcmmt.service';
import { BranchingService } from './services/branching.service';
import { AuthenticationService } from './services/authentication.service';
import { ModalService } from './services/modal.service';
import { UrlParamsService } from './services/url-params.service';

// Interceptor Imports
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { HeaderInterceptor } from './interceptors/header.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        SnomedNavbarComponent,
        SnomedFooterComponent,
        DomainPanelComponent,
        ApplicableAttributesPanelComponent,
        AttributeRangePanelComponent,
        TextMatchPipe,
        DuplicateFilterPipe,
        DomainMatchPipe,
        BreadcrumbBarComponent,
        AlphabeticalPipe,
        TopLevelDomainPipe,
        InheritedDomainMatchPipe,
        ModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgbTypeaheadModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        AppRoutingModule
    ],
    providers: [
        TerminologyServerService,
        AuthoringService,
        SnomedUtilityService,
        DomainService,
        AttributeService,
        RangeService,
        EditService,
        MrcmmtService,
        BranchingService,
        AuthenticationService,
        CustomOrderPipe,
        ModalService,
        UrlParamsService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthenticationInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
