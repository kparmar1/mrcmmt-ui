import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RefSet } from '../models/refset';

@Injectable({
    providedIn: 'root'
})
export class DomainService {

    constructor() {
    }

    private domains = new Subject<any>();
    private activeDomain = new Subject<any>();
    private domainFilter = new Subject<any>();

    // Setters & Getters: Domains
    setDomains(domains) {
        console.log('DOMAINS: ', domains);
        this.domains.next(domains);
    }

    clearDomains() {
        this.domains.next();
    }

    getDomains(): Observable<any> {
        return this.domains.asObservable();
    }

    // Setters & Getters: Active Domains
    setActiveDomain(domain) {
        this.activeDomain.next(domain);
    }

    clearActiveDomain() {
        this.activeDomain.next();
    }

    getActiveDomain(): Observable<any> {
        return this.activeDomain.asObservable();
    }

    // Setters & Getters: Domain Filter
    setDomainFilter(filter) {
        this.domainFilter.next(filter);
    }

    clearDomainFilter() {
        this.domainFilter.next();
    }

    getDomainFilter(): Observable<any> {
        return this.domainFilter.asObservable();
    }

    getNewDomain(): RefSet {
        const newDomain = new RefSet;
        newDomain.additionalFields = {
            domainId: '',
            domainConstraint: '',
            parentDomain: '',
            proximalPrimitiveConstraint: '',
            proximalPrimitiveRefinement: '',
            domainTemplateForPrecoordination: '',
            domainTemplateForPostcoordination: '',
            grouped: '',
            attributeCardinality: '',
            attributeInGroupCardinality: '',
            contentTypeId: '',
            ruleStrengthId: '',
            rangeConstraint: '',
            attributeRule: ''
        };
        newDomain.referencedComponent = {
            id: null,
            fsn: {
                term: 'New Domain'
            }
        };
        newDomain.refsetId = '723560006';
        newDomain.moduleId = '900000000000012004';
        newDomain.changed = true;
        newDomain.active = true;
        return newDomain;
    }

}
