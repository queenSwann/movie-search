import { ROUTES } from "src/app/shared/constants/routes";
import { MovieDetailMainComponent, MovieListMainComponent } from "./containers";

export const routes = [
    {
        path: '',
        component: MovieListMainComponent,
    },
    {
        path: ROUTES.MOVIE.DETAIL.path,
        component: MovieDetailMainComponent,
    },
]
