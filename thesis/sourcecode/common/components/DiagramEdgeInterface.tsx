import * as React from "react";

export enum EDGE_DIRECTION {SOURCE, DEST, NONE}

export interface DiagramEdgeProps {
    label?: string;
    sourceNodeId: number;
    destNodeId: number;
    direction: EDGE_DIRECTION;
}

/**
 * Render an edge
 */

export class DiagramEdgeInterface extends React.Component<DiagramEdgeProps, {}> {

}