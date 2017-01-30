/**
 * Process certain events in the specific data structure. This has to be implemented to use this package.
 */
export interface OperationService {
    createNodeFromDialogState(state: DialogNewNodeState): void
    createNodeWithLinkFromDialogState(state: DialogNewNodeToConnectState): void
    createLink(id: string, source: string, target: string, label: string): void;
    saveView(view: View): void;
}