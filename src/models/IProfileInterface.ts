interface IProfile {
    login: string,
    html_url: string,
    name: string,
    bio: string,
    company: string,
    avatar_url: string,
    public_repos: number,
    followers: number,
    following: number,
    location: string,
    blog: string
}

export type { IProfile }
//https://api.github.com/users/joapedu