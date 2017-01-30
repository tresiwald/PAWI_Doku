let viewToLoad: View = new View(...);

let nodeTypes: GraphNodeType[] = [...];

let timestamp: string = ...;

let onNodeDetailRequested: Function = ((nodeId:string) => {
   ...
});


let nodeInformationProvider: NodeInformationProvider = 
    new NodeInformationProviderImpl(...);
    
let operationService: OperationService = 
    new OperationServiceImpl(...);
    
let dialogFactory: DialogFactory = 
    new DialogFactoryImpl(...);
    
let searchFieldFactory: SearchFieldFactory = 
    new SearchFieldFactoryImpl(...);
    
let identityService: IdentityService = 
    new IdentityServiceImpl(...);

<GraphScreen nodeInformationProvider={nodeInformationProvider}
             operationService={operationService}
             viewToLoad={viewToLoad}
             timestamp={timestamp}
             dialogFactory=dialogFactory}
             searchFieldFactory={searchFieldFactory}
             onNodeDetailRequest={onNodeDetailRequested}
             nodeTypes={nodeTypes}
             identityService={identityService}
/>
    