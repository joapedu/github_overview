import {useCallback, useState} from "react";
import {OverviewService} from "../services/OverviewService";
import {IProfile} from "../models";

export const useProfile = () => {
    const [profiles, setProfiles] = useState<IProfile[]>([])

    const GetProfile = useCallback(async () => {
    const { status, data } = await OverviewService.GetProfile();
        if(status != 200) throw  new Error();

        setProfiles(data);
    }, [])

    return {
        profiles,
        GetProfile
    }
}