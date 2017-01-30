/** (1) ikc-core */
export class GraphNodeInformationProvider implements NodeInformationProvider{...}
export class GraphOperationService implements OperationService{...}
export class ElementIdentityService implements IdentityService{...}

let graphNodeInformationProvider = new GraphNodeInformationProvider()
let graphOperationService = new GraphOperationService()
let elementIdentityService = new ElementIdentityService()

/** (2) ikc-core */
<GraphScreen ... 
    nodeInformationProvider={graphNodeInformationProvider}
    operationService={graphOperationService}
    identityService={elementIdentityService}
    ... />

/** (3) ikc-visual */
let nodeInformationProvider = this.state.props.nodeInformationProvider
let operationService = this.state.props.operationService
let identityService = this.state.props.identityService

let nodeTitle = nodeInformationProvider.getNodeTitle('1')
let linkLabel = nodeInformationProvider.getLinkLabel('5')

operationService.saveView(this...)

let newNodeId = identityService.createNewNodeId()
let newLinkId = identityService.createNewLinkId()
    