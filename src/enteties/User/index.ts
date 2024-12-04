import {userReducer, userActions} from "./model/slice/userSlice"
import type {User, UserSchema} from "./model/types/user";
import {getUserData} from "./model/selectors/getUserAuthData/getUserData";

export {
    userReducer,
    userActions,
    UserSchema,
    User,
    getUserData
};