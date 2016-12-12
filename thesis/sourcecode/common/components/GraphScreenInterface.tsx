import * as React from "react";
import {View} from "../../interfaces/View";
import {NodeComponentFactory} from "../../interfaces/NodeComponentFactory";
import {NodeInformationProvider} from "../../interfaces/NodeInformationProvider";
import {OperationService} from "../../interfaces/OperationService";

export interface  GraphScreenProps {
    viewToLoad: View;
    onViewSave: Function;
    onViewDelete: Function;
    nodeComponentFactory: NodeComponentFactory;
    nodeInformationProvider: NodeInformationProvider;
    operationService: OperationService;
}

/**
 * Render the network
 */
export class GraphScreenInterface extends React.Component<GraphScreenProps, {}> {

}