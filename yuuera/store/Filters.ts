import { defineStore } from 'pinia';

interface AuthState {
  brand: string | null;
  sort_by_price: boolean | null;
  product_name: string | null;
  sort_direction: string | null;
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    brand: null,
    product_name: null,
    sort_by_price: null,
    sort_direction: null,
  }),
  persist: true,
  actions: {
    setTokens(filters: { brand: string; sortPrice: string, }) {
      this.brand = filters.brand;   
      this.sort_direction = filters.sortPrice;
      if (filters.sortPrice) {
        console.log("sorting by price");
        this.sort_by_price = true; 
      }
    },

    clearTokens() {
        this.brand = null;
        this.product_name = null;
        this.sort_by_price = null;
        this.sort_direction = null;
    },

    async filterSearch() {
      //filter search
    },
  },
});
