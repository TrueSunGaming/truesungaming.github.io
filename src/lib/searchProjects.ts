import projectData from "./projectData.json";

export enum SortMode {
    NameAscending,
    NameDescending,
    ReleaseAscending,
    ReleaseDescending,
    UpdateAscending,
    UpdateDescending
}

export interface SearchQuery {
    query: string;
    showGames: boolean;
    showTools: boolean;
    showSites: boolean;
    showLibs: boolean;
}

export function filterProjects(query: SearchQuery): typeof projectData {
    return projectData.filter((v) => v.title.toLowerCase().includes(query.query.toLowerCase()))
}

export function sortProjects(projects: typeof projectData, mode: SortMode): typeof projectData | null {
    switch(mode) {
        case SortMode.NameAscending:
            return projects.toSorted((a, b) => a.title.localeCompare(b.title));

        case SortMode.NameDescending:
            return projects.toSorted((a, b) => b.title.localeCompare(a.title));

        case SortMode.ReleaseAscending:
            return projects.toSorted((a, b) => a.release == "WIP" ? 1 : (new Date(a.release).getTime() - new Date(b.release).getTime()));

        case SortMode.ReleaseDescending:
            return projects.toSorted((a, b) => a.release == "WIP" ? -1 : (new Date(b.release).getTime() - new Date(a.release).getTime()));

        case SortMode.UpdateAscending:
            return projects.toSorted((a, b) => a.lastUpdate == "WIP" ? 1 : (new Date(a.lastUpdate).getTime() - new Date(b.lastUpdate).getTime()));

        case SortMode.UpdateDescending:
            return projects.toSorted((a, b) => a.lastUpdate == "WIP" ? -1 : (new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()));
            
        default:
            return null;
    }
}

export function searchProjects(query: SearchQuery, sort: SortMode): typeof projectData | null {
    return sortProjects(filterProjects(query), sort);
}