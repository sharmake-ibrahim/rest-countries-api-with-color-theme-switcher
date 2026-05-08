import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export type NativeName = {
  official: string;
  common: string;
};

export type Currency = {
  name: string;
  symbol: string;
};

export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, NativeName>;
  };
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  tld: string[];                        // e.g. [".ai"], [".uk"]
  currencies: Record<string, Currency>; // e.g. { "USD": { name: "...", symbol: "$" } }
  languages: Record<string, string>;    // e.g. { "eng": "English" }
  capital: string[];                    // can be empty []
  region: string;
  subregion: string;
  borders: string[];                    // CCA3 codes, can be empty []
  population: number;
};

// ─── Region ──────────────────────────────────────────────────────────────────

export type RegionKey = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

// ─── State ───────────────────────────────────────────────────────────────────

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
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,languages,borders,tld,flags,population");
    if (!res.ok) throw new Error("Failed to fetch countries");
    return res.json() as Promise<Country[]>;
  }
);

export const fetchCountriesByRegion = createAsyncThunk(
  "countries/fetchByRegion",
  async (region: RegionKey) => {
    const res = await fetch(`https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,languages,borders,tld,flags,population/${region}`);
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