/**
 * Container that holds the whole context of the view, which nodes and edges are visible?
 */
export interface View {
    getNodes(): any;
    getEdges(): any;
    toJson(): string;
}