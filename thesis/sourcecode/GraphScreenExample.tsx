let view: View = new ViewImpl(...);

let onViewSave: Function = (() => {
   ... 
});

let onViewDelete: Function = (() => {
   ... 
});

let nodeComponentFactory: NodeComponentFactory =
    new NodeComponentFactoryImpl(...);
    
let nodeInformationProvider: NodeInformationProvider = 
    new NodeInformationProviderImpl(...);
    
let operationService: OperationService = 
    new OperationService(...);
    
<GraphScreen
    viewToLoad={...}
    onViewSave={...}
    onViewDelete={...}
    nodeComponentFactory={...}
    nodeInformationProvider={...}
/>
    