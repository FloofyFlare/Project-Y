import { defineStore } from 'pinia';

interface AuthState {
  product: JSON | null;
}

export const useProductStore = defineStore('product-store', {
  state: (): AuthState => ({
    product: null,
  }),
  persist: true,
  actions: {
    setProduct(item: JSON) {
      this.product = item;   
      console.log(item);
    },
    projectIsNULL(){
      if(this.product == null){
        return true;
      }
      return false;
    },
    clearProduct() {
        this.product = null;
    },

  },
});
