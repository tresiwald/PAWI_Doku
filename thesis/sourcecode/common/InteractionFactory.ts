/** (1) ikc-core */
export class GraphDialogFactory implements DialogFactory{...}

let graphDialogFactory = new GraphDialogFactory()

/** (2) ikc-core */
<GraphScreen ... dialogFactory={graphDialogFactory} ... />

/** (3) ikc-visual */
let dialogOpen = true
let processNewNodeFromDialog = () => {...}
let closeNewNodeDialog = () => {...}
let node = GraphElementFactory.getGraphElementAsNode(...)

this.state.props.dialgoFactory.getNewNodeDialog(
    dialogOpen,
    processNewNodeFromDialog,
    closeNewNodeDialog,
    node,
    this.state.newNodeType)
    
/** (4) ikc-core */
this.props.onSave(this.state)