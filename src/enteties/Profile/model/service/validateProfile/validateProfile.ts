import { Profile } from "enteties/Profile";
import * as EmailValidator from 'email-validator';
import { ValidateProfileError } from "enteties/Profile/model/types/profile";

export interface ValidateProfileProps{
    profile?: Profile;
    username?: boolean;
    email?: boolean;
    bio?: boolean;
}

export const validateProfile = (props: ValidateProfileProps) => {
    const {
        profile,
        username = false,
        email = false,
        bio = false
    } = props;
    const errors: ValidateProfileError[] = [];

    if (username && !profile?.username) {
        errors.push(ValidateProfileError.EMPTY_USERNAME)
    } else if (profile?.username) {
        if (profile.username.length < 4) {
            errors.push(ValidateProfileError.USERNAME_LESS_THAN_MIN)
        }
        if (profile.username.length > 32) {
            errors.push(ValidateProfileError.USERNAME_MORE_THAN_MAX)
        }
    }

    if (email && !profile?.email) {
        errors.push(ValidateProfileError.EMPTY_EMAIL)
    } else if (profile?.email) {
        if (!EmailValidator.validate(profile.email)) {
            errors.push(ValidateProfileError.INCORRECT_EMAIL)
        }
    }

    if (bio && !profile?.bio) {
        errors.push(ValidateProfileError.EMPTY_BIO)
    } else if (profile?.bio) {
        if (profile.bio.length > 2000) {
            errors.push(ValidateProfileError.BIO_MORE_THAN_MAX)
        }
    }

    return errors
}