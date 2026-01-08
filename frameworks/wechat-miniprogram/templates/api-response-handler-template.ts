// API Response Handler - Response data processing
// Single responsibility: Handle response data format only

import { ApiResponse } from '@/types/api'

export class ResponseHandler {
  static handle<T>(response: ApiResponse<T>): T {
    if (response.code === 200) {
      return response.data
    }
    throw new Error(response.message || 'Request failed')
  }

  static handleList<T>(response: ApiResponse<T[]>): T[] {
    return this.handle(response) || []
  }

  static handlePagination<T>(response: ApiResponse<{ list: T[]; total: number }>): { list: T[]; total: number } {
    return this.handle(response) || { list: [], total: 0 }
  }
}

