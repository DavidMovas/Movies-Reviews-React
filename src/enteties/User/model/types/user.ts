export interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    createdAt: string;
    deletedAt: string | null;
}

export interface UserSchema {
    authData?: User
}


/*
	ID        int        `json:"id"`
	Username  string     `json:"username"`
	Email     string     `json:"email"`
	Role      string     `json:"role"`
	CreatedAt time.Time  `json:"createdAt"`
	DeletedAt *time.Time `json:"deletedAt,omitempty"`
*/