export interface  GraphScreenProps {
    viewToLoad: View;
    nodeInformationProvider: NodeInformationProvider;
    operationService: OperationService;
    timestamp: string;
    dialogFactory: DialogFactory;
    searchFieldFactory: SearchFieldFactory;
    onNodeDetailRequest: Function;
    nodeTypes: GraphNodeType[];
    identityService: IdentityService;
}