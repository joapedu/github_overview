import {Api} from "../providers";
import {IProfile, IRepos} from "../models";

const GetProfile = () => Api.get<IProfile[]>('/users/joapedu');
const GetRepos = () => Api.get<IRepos[]>('/users/joapedu/repos');

export const OverviewService = {
    GetProfile, GetRepos
}