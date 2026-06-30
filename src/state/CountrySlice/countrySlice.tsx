import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Oceania from "../../pages/Oceania";

// ─── Types ───────────────────────────────────────────────────────────────────

export type Country = {
  names: { common: string; official: string };
  flag: { url_png: string; url_svg: string; emoji: string };
  capitals: { name: string }[];
  region: string;
  subregion: string;
  population: number;
  borders: string[];
  languages: { name: string }[];
  currencies: { code: string; name: string; symbol: string }[];
  tlds: string[];
};

export type RegionKey = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

// ─── State ───────────────────────────────────────────────────────────────────

interface CountriesState {
  all: Country[];
  byRegion: Record<RegionKey, Country[]>;
  loading: boolean;
  error: string | null;
}

const initialState: CountriesState = {
  all: [],
   byRegion: {
    Africa: [],
    Americas: [],
    Asia: [],
    Europe: [],
    Oceania: [],
  },
  loading: false,
  error: null,
};

// ─── Thunks ──────────────────────────────────────────────────────────────────

// Fetch ALL countries
export const fetchAllCountries = createAsyncThunk(
  "countries/fetchAll",
  async () => {
    const res = await fetch("/api/proxy");
    if (!res.ok) throw new Error("Failed to fetch");
    const { countries } = await res.json();
    return countries as Country[];
  }
);

// Fetch by region  e.g. fetchCountriesByRegion("Europe")
export const fetchCountriesByRegion = createAsyncThunk(
  "countries/fetchByRegion",
  async (region: RegionKey) => {
    const res = await fetch(`/api/proxy?region=${region}`);
    if (!res.ok) throw new Error("Failed to fetch");
    const { countries } = await res.json();
    return countries as Country[];
  }
);

// ─── Slice ───────────────────────────────────────────────────────────────────

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
      .addCase(fetchCountriesByRegion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountriesByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.byRegion[action.meta.arg] = action.payload; 
      })

      .addCase(fetchCountriesByRegion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default countriesSlice.reducer;