/**
 * Save a visualisation
 */
export class View {
    id: string
    title: string
    changedAt: string
    createdAt: string
    nodes: GraphNodeElement[]
    links: GraphLinkElement[]
}