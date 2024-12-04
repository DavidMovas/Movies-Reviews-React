export {Profile, ProfileSchema} from './model/types/profile';
export {ProfileCart} from './ui/ProfileCart/ProfileCart';

export {
    profileReducer,
    profileActions,
} from "./model/slice/profileSlice";

export {
    fetchProfileData
} from "./model/service/fetchProfileData";