import { ListingModel } from "../validation/listingSchema";

export type AgentsState = {
    agents: [],
	status: 'idle' | 'loading' | 'succeeded' | 'failed',
	error: string | null,
};

interface Listing extends ListingModel {
	id: number,
}

export type ListingsState = {
	listings: Listing[],
	status: 'idle' | 'loading' | 'succeeded' | 'failed',
	error: string | null,
	individualListing: Listing | null,
	individualListingStatus: 'idle' | 'loading' | 'succeeded' | 'failed',
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
	regionsStatus: 'idle' | 'loading' | 'succeeded' | 'failed',
	regions: Region[],
	regionsError: string | null,
	citiesStatus: 'idle' | 'loading' | 'succeeded' | 'failed',
	cities: City[],
	citiesError: string | null,
};
