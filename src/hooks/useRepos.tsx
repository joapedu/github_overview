import {useCallback, useState} from "react";
import {OverviewService} from "../services/OverviewService";
import {IRepos} from "../models";

export const useRepos = () => {
    const [repos, setRepos] = useState<IRepos[]>([])

    const GetRepos = useCallback(async () => {
        const { status, data } = await OverviewService.GetRepos();
        if(status != 200) throw  new Error();

        setRepos(data);
    }, [])

    return {
        repos,
        GetRepos
    }
}