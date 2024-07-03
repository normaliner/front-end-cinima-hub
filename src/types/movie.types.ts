import { IActor } from './actor.types';
import { IGenre } from './genre.types';
import { IReview } from './review.types';

export interface IMovie {
	id: string;
	poster: string;
	bigPoster: string;
	title: string;
	year: string;
	slug: string;
	duration: string;
	country: string;
	genres: IGenre[];
	actors: IActor[];
	reviews: IReview[];
	views: number;
	videoUrl: string;
}

export interface IMovieEditInput
	extends Omit<IMovie, 'id' | 'views' | 'reviews' | 'genres' | 'actors'> {
	genres: string[];
	actors: string[];
}
