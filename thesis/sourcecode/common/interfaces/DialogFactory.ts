/**
 * Specification for the dialog factory which has to implement to use this package
 */
export interface DialogFactory {
	
	getDialogNodeNewNode(
		open: boolean, 
		onSave: Function, 
		onRequestClose: Function, 
		node: GraphNodeElement, 
		type: GraphNodeType
	):React.Component<DialogNewNodeProps,
		DialogNewNodeState>

    getDialogNodeNewNodeToConnect(
		open: boolean, 
		onSave: Function, 
		onRequestClose: Function, 
		link: GraphLinkElement, 
		type: GraphNodeType
	):React.Component<DialogNewNodeToConnectProps,
		DialogNewNodeToConnectState>

    getDialogNodeSearchToConnect(
		open: boolean, 
		onSelect: Function, 
		onRequestClose: Function
	):React.Component<DialogNodeSearchToConnectProps,
		DialogNodeSearchToConnectState>
}