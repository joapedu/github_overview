interface IRepo {
    html_url: string,
    description: string,
    url: string,
    homepage: string,
    language: string,
    license: Array<string>,
    topics: Array<string>,
    open_issues: number
}

export type { IRepo }
//https://api.github.com/users/joapedu/repos