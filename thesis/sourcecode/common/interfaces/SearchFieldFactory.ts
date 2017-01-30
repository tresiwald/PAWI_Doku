/**
 * Specification for the search field factory which has to implement to use this package
 */
export interface SearchFieldFactory {
    getNodeSearchField(onNodeSelected: Function): React.Component<any,any>
    getLinkSearchField(onLinkSelected: Function, links: string[]): React.Component<any,any>
}
