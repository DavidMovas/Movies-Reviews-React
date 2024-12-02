import {userReducer, userActions} from "./model/slice/useSlice"
import type {User, UserSchema} from "./model/types/user";
import {getUserAuthData} from "./model/selectors/getUserAuthData/getUserAuthData";

export {
    userReducer,
    userActions,
    UserSchema,
    User,
    getUserAuthData
};