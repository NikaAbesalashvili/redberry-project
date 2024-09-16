import { Status } from "../constants";
import { AgentModel } from "../validation/agentSchema";

interface Agent extends AgentModel {
	id: number,
};

export type AgentsState = {
    agents: Agent[],
	status: Status,
	error: string | null,
};

type Listing = {
	id: number,
	address: string,
	zip_code: string,
	price: number,
	area: number,
	bedrooms: number,
	is_rental: number,
	image: string,
	city_id: number,
	city: City,
}

type ExtendedListing = Listing & {
	created_at: string,
	agent_id: number,
	agent: Agent,
}

export type ListingsState = {
	listings: Listing[],
	status: Status,
	error: string | null,
	individualListing: ExtendedListing | null,
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
