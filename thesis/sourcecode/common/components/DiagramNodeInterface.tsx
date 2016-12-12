import * as React from "react";

export interface DiagramNodeProps {
    id: number;
    label?: string;
    positionX: number;
    positionY: number;
    detailComponent: React.Component<{ children: any }, {}>;
}

/**
 * Render a node
 */
export class DiagramNodeInterface extends React.Component<DiagramNodeProps, {}> {

}