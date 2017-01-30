/**
 * Provides Information for visualization => connection to specific data structure. This has to be implemented to use this package.
 */
export interface NodeInformationProvider {
    getNodeTitle(id: string): string;
    getLinkLabel(sourceId: string, linkId: string): string;
}