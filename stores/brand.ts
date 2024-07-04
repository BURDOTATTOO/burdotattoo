import type { BrandModel } from '~/core/interfaces/brand-model'
import { defineStore } from 'pinia'

export const useBrandStore = defineStore('brand', {
  state: () => {
    return {
      brand: {
        image: '',
        name: '',
        slug: '',
        token: '',
        style: '',
      },
    }
  },
  actions: {
    setBrand(brand: BrandModel) {
      this.brand = brand
      this.loadBrandStyles(brand.style)
    },
    async loadBrandStyles(brand: string) {
      try {
        await import(`../assets/sass/brands/${brand}.scss`)
      } catch (error) {
        console.error(`Error loading brand styles: ${brand}`, error)
      }
    },
  },
  getters: {
    getBrand: (state) => state.brand,
  },
})
