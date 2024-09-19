import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRegions, fetchCities } from "../app/thunks";
import { useAppSelector } from "./useAppSelector";
import { AppDispatch } from "../app/store";
import { City } from "../types";

export const useLocations = () => {
    
    const dispatch = useDispatch<AppDispatch>();
    const [filteredCities, setFilteredCities] = useState<City[]>([]);
    const locations = useAppSelector(state => state.locations);

    useEffect(() => {
        dispatch(fetchRegions());
        dispatch(fetchCities());
    }, [dispatch]);

    const filterCitiesByRegion = (regionId: number) => {
        const newFilteredCities = locations.cities.filter(city => city.region_id !== regionId);
        setFilteredCities(newFilteredCities);
    };

    return {
        citiesStatus: locations.citiesStatus,
        cities: filteredCities,
        citiesError: locations.citiesError,
        regionsStatus: locations.regionsStatus,
        regions: locations.regions,
        regionsError: locations.regionsError,
        filterCitiesByRegion,
    };
};
