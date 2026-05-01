import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type Country = {
  name: { common: string; official: string };
  flags: { svg: string; png: string };
  population: number;
  region: string;
  capital: string[];
  cca3: string;
};

type RegionKey = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

interface CountriesState {
  all: Country[];
  Africa: Country[];
  Americas: Country[];
  Asia: Country[];
  Europe: Country[];
  Oceania: Country[];
  loading: boolean;
  error: string | null;
}

const initialState: CountriesState = {
  all: [],
  Africa: [],
  Americas: [],
  Asia: [],
  Europe: [],
  Oceania: [],
  loading: false,
  error: null,
};

export const fetchAllCountries = createAsyncThunk(
  "countries/fetchAll",
  async () => {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags");
    if (!res.ok) throw new Error("Failed to fetch countries");
    return res.json() as Promise<Country[]>;
  }
);

export const fetchCountriesByRegion = createAsyncThunk(
  "countries/fetchByRegion",
  async (region: RegionKey) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    if (!res.ok) throw new Error(`Failed to fetch ${region}`);
    const data: Country[] = await res.json();
    return { region, data };
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.all = action.payload;
      })
      .addCase(fetchAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchCountriesByRegion.fulfilled, (state, action) => {
        const { region, data } = action.payload;
        state[region] = data;
      });
  },
});

export default countriesSlice.reducer;