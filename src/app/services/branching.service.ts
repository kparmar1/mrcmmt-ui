import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SnomedResponseObject } from '../models/snomedResponseObject';

@Injectable({
    providedIn: 'root'
})
export class BranchingService {

    constructor() {
    }

    private branchPath = new Subject<string>();
    private versions = new Subject<SnomedResponseObject>();

    // Setters & Getters: BranchPath
    setBranchPath(path) {
        this.branchPath.next(path);
    }

    getBranchPath(): Observable<string> {
        return this.branchPath.asObservable();
    }

    // Setters & Getters: Versions
    setVersions(versions) {
        this.versions.next(versions);
    }

    getVersions() {
        return this.versions.asObservable();
    }
}