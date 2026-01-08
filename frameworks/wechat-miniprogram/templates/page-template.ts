// Page template - UI rendering and lifecycle only
// Business logic must be in separate service files

import { Page } from '@/types/page'
import { PageService } from '@/services/[domain]/page-service'

interface PageData {
  // Define page data structure
}

const pageService = new PageService()

Page<PageData>({
  data: {
    // Initialize page data
  },

  onLoad(options: Record<string, string | undefined>) {
    // Call service method to initialize data
    pageService.initializeData(options)
  },

  onShow() {
    // Call service method if needed
  },

  onReady() {
    // Call service method if needed
  },

  onUnload() {
    // Cleanup if needed
  },

  // Event handlers - only call service methods
  handleAction() {
    pageService.handleAction()
  },
})

