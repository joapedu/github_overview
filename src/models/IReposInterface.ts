interface IRepos {
    name: string,
    html_url: string,
    description: string,
    homepage: string,
    language: string,
    license: Array<string>,
    topics: Array<string>,
    open_issues: number;
}

export type { IRepos }
//https://api.github.com/users/joapedu/repos