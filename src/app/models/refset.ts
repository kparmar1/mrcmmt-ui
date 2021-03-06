export class RefSet {
    additionalFields: {
        domainId: string;
        domainConstraint: string;
        parentDomain: string;
        proximalPrimitiveConstraint: string;
        proximalPrimitiveRefinement: string;
        domainTemplateForPrecoordination: string;
        domainTemplateForPostcoordination: string;
        grouped: string;
        attributeCardinality: string;
        attributeInGroupCardinality: string;
        contentTypeId: string;
        ruleStrengthId: string;
        rangeConstraint: string;
        attributeRule: string;
    };
    referencedComponentId: string;
    referencedComponent: {
        id: string;
        fsn: {
            term: string;
        }
    };
    refsetId: string;
    memberId: string;
    moduleId: string;
    active: boolean;
    changed: boolean;
    deleted: boolean;
}
