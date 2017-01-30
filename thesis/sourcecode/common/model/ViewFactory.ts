export module ViewFactory {
    export function initViewFromJson(json: string): View {
        [...]
    }

    export function viewFromNodesAndLinks(nodes: GraphNodeElement[], links: GraphLinkElement[]): View {
        [...]
    }

    export function titledViewFromNodesAndLinksWith(title: string, nodes: GraphNodeElement[], links: GraphLinkElement[]): View {
        [...]
    }

    export function defaultViewFromNodesAndLinksWith(title: string, nodes: GraphNodeElement[], links: GraphLinkElement[]): View {
        [...]
    }

    export function viewFromMaps(nodes: Map<string,GraphNodeElement>, links: Map<string,GraphLinkElement>, title: string): View {
        [...]
    }
}