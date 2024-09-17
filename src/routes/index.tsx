import { ReactElement } from "react";
import { Home, AddListing, Listing } from "../pages";

type Route = {
    path: string,
    element: ReactElement,
};

export const routes: Route[] = [
    { path: '/', element: <Home /> },
    { path: '/add-listing', element: <AddListing /> },
    { path: '/listing/:id', element: <Listing /> },
];
