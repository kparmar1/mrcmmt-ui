import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { RefSet } from '../../models/refset';
import { TerminologyServerService } from '../../services/terminologyServer.service';

@Component({
    selector: 'app-attribute-range-panel',
    templateUrl: './attribute-range-panel.component.html',
    styleUrls: ['./attribute-range-panel.component.scss']
})
export class AttributeRangePanelComponent implements OnChanges {

    // bindings
    @Input() ranges: RefSet[];
    @Input() activeDomain: RefSet;
    @Input() activeAttribute: RefSet;
    @Input() activeRange: RefSet;
    @Output() activeDomainEmitter = new EventEmitter();
    @Output() activeAttributeEmitter = new EventEmitter();
    @Output() activeRangeEmitter = new EventEmitter();

    // results
    results: any[];

    constructor(private terminologyService: TerminologyServerService) {
    }

    ngOnChanges() {
        if (this.activeRange) {
            this.terminologyService.getRangeConstraints(this.activeRange.additionalFields.rangeConstraint).subscribe(data => {
                this.results = data;
            });
        }
    }

    makeActiveRange(range) {
        if (this.activeRange === range) {
            this.activeRange = null;
            this.activeRangeEmitter.emit(null);
            this.results = [];
        } else {
            this.activeRange = range;
            this.activeRangeEmitter.emit(range);

            this.terminologyService.getRangeConstraints(this.activeRange.additionalFields.rangeConstraint).subscribe(data => {
                this.results = data;
            });
        }
    }

    determineMandatoryField(id) {
        switch (id) {
            case '723597001': {
                return 'Mandatory concept model rule (foundation metadata concept)';
            }
            case '723598006': {
                return 'Optional concept model rule (foundation metadata concept)';
            }
        }
    }

    determineContentTypeField(id) {
        switch (id) {
            case '723596005': {
                return 'All SNOMED CT content (foundation metadata concept)';
            }
            case '723593002': {
                return 'All new precoordinated SNOMED CT content (foundation metadata concept)';
            }
            case '723594008': {
                return 'All precoordinated SNOMED CT content (foundation metadata concept)';
            }
            case '723595009': {
                return 'All postcoordinated SNOMED CT content (foundation metadata concept)';
            }
        }
    }
}
