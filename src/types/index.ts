import { ListingModel } from "../validation/listingSchema";
import { Status } from "../constants";

export type AgentsState = {
    agents: [],
	status: Status,
	error: string | null,
};

interface Listing extends ListingModel {
	id: number,
}

export type ListingsState = {
	listings: Listing[],
	status: Status,
	error: string | null,
	individualListing: Listing | null,
	individualListingStatus: Status,
	individualListingError: string | null,
};

type Region = {
	id: number,
	name: string,
}

type City = {
	id: number,
	name: string,
	region_id: number,
	region: Region
}

export type LocationsState = {
	regionsStatus: Status,
	regions: Region[],
	regionsError: string | null,
	citiesStatus: Status,
	cities: City[],
	citiesError: string | null,
};
