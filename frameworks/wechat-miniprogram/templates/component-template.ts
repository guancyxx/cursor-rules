// Component template - UI rendering only
// Business logic must be in separate service files

import { Component } from '@/types/component'
import { ComponentService } from '@/services/[domain]/component-service'
import { ComponentProps, ComponentData } from '@/types/[domain]/component-types'

const componentService = new ComponentService()

Component<ComponentData, ComponentProps>({
  properties: {
    // Define component props
  },

  data: {
    // Initialize component data
  },

  attached() {
    // Call service method if needed
  },

  ready() {
    // Call service method if needed
  },

  detached() {
    // Cleanup if needed
  },

  // Event handlers - only call service methods
  handleEvent() {
    componentService.handleEvent()
    this.triggerEvent('custom-event', {})
  },
})

