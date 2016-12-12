import {DiagramNodeInterface} from "../components/DiagramNode/DiagramNodeInterface";
import {DiagramEdgeInterface} from "../components/DiagramEdge/DiagramEdgeInterface";


/**
 * Create Node + Edge Component
 */
export interface NodeComponentFactory {
    getNodesDetails(ids: number[]): DiagramNodeInterface;
    getNodesEdges(nodeIds: number[], edgeIds: number[]): DiagramEdgeInterface;
}