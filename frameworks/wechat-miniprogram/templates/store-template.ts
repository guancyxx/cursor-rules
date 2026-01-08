// Pinia Store template - Single domain state management
// Each domain has its own store file

import { defineStore } from 'pinia'
import { DomainState } from '@/types/[domain]/store-types'
import { ApiService } from '@/services/[domain]/api-service'

export const useDomainStore = defineStore('[domain]', {
  state: (): DomainState => ({
    // Define domain state
  }),

  getters: {
    // Each getter has single responsibility
    getDomainData(): DomainState['data'] {
      return this.data
    },
  },

  actions: {
    // Each action has single responsibility
    async fetchData(): Promise<void> {
      const apiService = new ApiService()
      // Call API and update state
    },

    async updateData(payload: unknown): Promise<void> {
      // Update state logic
    },
  },
})

