/**
 * Factory to create new graph elements
 */
export module GraphElementFactory {
    export function getGraphElementAsNode(id: string, position: GraphPosition, visibility: VISIBILITY): GraphNodeElement {
        [...]
    }

    export function getGraphElementAsLink(id: string, sourceNode: string, destinationNode: string, visibility: VISIBILITY): GraphLinkElement {
        [...]
    }

    export function getNode(data: GraphNodeData, position: GraphPosition, visibility: VISIBILITY): GraphNodeElement {
        [...]
    }
}