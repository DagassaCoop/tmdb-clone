// Core
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

// Types
import { IFormValues } from "@/components/Filter/types/form";
import { TFilter } from '@/types';
// Mock
import { moviePreset, sortPreset } from '@/components/Filter/mock/presets';

interface FilterState {
    filters: IFormValues

    isDirty: boolean
    hasAppliedFilters: boolean
    isHydrated: boolean

    setFilters: (filters: IFormValues) => void
    updateFilter: (key: string, value: string | number | string[] | number[] | undefined) => void
    resetFilters: () => void
    setDirty: (dirty: boolean) => void
    setAppliedFilters: (applied: boolean) => void
    setHydrated: (hydrated: boolean) => void
}

const getInitialValuesFromPreset = (presets: TFilter[]) => {
    return presets.reduce((acc: IFormValues, preset) => {
        acc[preset.name] = preset.initialValue;
        return acc;
    }, {});
};
  
const getDefaultFilters = () => ({
    ...getInitialValuesFromPreset(sortPreset),
    ...getInitialValuesFromPreset(moviePreset),
});

const getHasAppliedFilters = (filters: IFormValues) => {
    return Object.values(filters).some(filterValue => 
        filterValue !== undefined && 
        filterValue !== '' && 
        (Array.isArray(filterValue) ? filterValue.length > 0 : true)
    )
}


export const useFilterStore = create<FilterState>()(
    persist(
        (set) => ({
            // Data
            filters: getDefaultFilters(),
            // Metadata
            isDirty: false,
            hasAppliedFilters: false,
            isHydrated: false,

            // Actions
            setFilters: (filters) => {
                set(() => ({
                    filters,
                    isDirty: true,
                    hasAppliedFilters: getHasAppliedFilters(filters)
                }))
            },
            updateFilter: (key, value) => {
                set((state) => {
                    const newFilters = { ...state.filters, [key]: value}
                    return {
                        filters: newFilters,
                        isDirty: true,
                        hasAppliedFilters: getHasAppliedFilters(newFilters)
                    }
                })
            },
            resetFilters: () => {
                set({
                    filters: getDefaultFilters(),
                    isDirty: false,
                    hasAppliedFilters: false
                })
            },
            setDirty: (dirty) => {
                set({ isDirty: dirty })
            },
            setAppliedFilters: (applied) => {
                set({ hasAppliedFilters: applied })
            },
            setHydrated: (hydrated) => {
                set({ isHydrated: hydrated })
            },
        }),
        {
            name: "filter-store",
            partialize: (state) => ({
                filters: state.filters,
                hasAppliedFilters: state.hasAppliedFilters
            }),
            onRehydrateStorage: () => (state) => {
                if (state) {
                    state.setHydrated(true);
                }
            },
        }
    )
)
