interface IProfile {
    login: string,
    name: string,
    bio: string,
    company: string,
    avatar_url: string,
    public_repos: string,
    followers: number,
    following: number,
    location: string,
    website: string
}

export type { IProfile }
//https://api.github.com/users/joapedu