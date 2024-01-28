import { defineStore } from 'pinia';

interface AuthState {
  brand: string | null;
  sort_by_price: boolean | null;
  product_name: string | null;
  sort_direction: string | null;
}

export const useFilterStore = defineStore('filter-store', {
  state: (): AuthState => ({
    brand: null,
    product_name: null,
    sort_by_price: false,
    sort_direction: null,
  }),
  persist: true,
  actions: {
    setBrand(brand: string) {
      this.brand = brand;   
    },

    setPrice(sortPrice: string){
      this.sort_direction = sortPrice;
      if (sortPrice) {
        console.log("sorting by price");
        this.sort_by_price = true; 
      }
    },

    clearFilter() {
        this.brand = '';
        this.product_name = '';
        this.sort_by_price = false;
        this.sort_direction = '';
    },

    async filterSearch() {
      //filter search
    },
  },
});
