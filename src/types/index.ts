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
