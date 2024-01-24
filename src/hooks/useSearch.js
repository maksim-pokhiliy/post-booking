import { useState } from "react";

import { useLazySearchLocationsQuery } from "../store/services/SearchService";
import { useLazySearchAgenciesQuery } from "../store/services/AgencyService";

const useSearch = () => {
  const [searchLocations] = useLazySearchLocationsQuery();
  const [searchAgencies] = useLazySearchAgenciesQuery();

  const [locations, setLocations] = useState({
    results: [],
    isLoading: false,
  });

  const [agencies, setAgencies] = useState({
    results: [],
    isLoading: false,
  });

  const locationSearch = async (query) => {
    if (query) {
      setLocations((prev) => ({ ...prev, isLoading: true }));

      const { data } = await searchLocations("");

      const results = (data?.auto_complete_items ?? []).filter((el) =>
        el.name.toLowerCase().startsWith(query.toLowerCase()),
      );

      setLocations({
        results,
        isLoading: false,
      });
    }
  };

  const agencySearch = async (query) => {
    if (query) {
      setAgencies((prev) => ({ ...prev, isLoading: true }));

      const { data } = await searchAgencies(null);

      const results = (data ?? []).filter((el) =>
        el.name.toLowerCase().startsWith(query.toLowerCase()),
      );

      setAgencies({
        results,
        isLoading: false,
      });
    }
  };

  const locationReset = () =>
    setLocations((prev) => ({ ...prev, results: [] }));

  const agenciesReset = () => setAgencies((prev) => ({ ...prev, results: [] }));

  return {
    locations,
    agencies,
    searchHandlers: { locationSearch, agencySearch },
    resetHandlers: { locationReset, agenciesReset },
  };
};

export default useSearch;
