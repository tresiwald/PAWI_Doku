/**
 * Graph data element specify the graph element
 */
export class GraphNodeElement implements GraphElement {
    data: GraphNodeData
    position: GraphPosition
    visibility: VISIBILITY
    nodeClasses: any[]
}