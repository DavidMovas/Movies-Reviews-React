export interface Review {
    id: number;
    movieId: number;
    userId: number;
    rating: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt?: string;
}

export interface ReviewDetails {
    username: string;
    avatarUrl?: string;
    review: Review;
}
