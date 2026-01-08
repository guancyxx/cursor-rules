// API Service template - Single domain API calls
// Each domain has its own API service file

import { request } from '@/utils/request'
import { ApiInterceptor } from '@/utils/api-interceptor'
import { ResponseHandler } from '@/utils/api-response-handler'
import { ErrorHandler } from '@/utils/api-error-handler'
import { DomainRequestTypes, DomainResponseTypes } from '@/types/[domain]/api-types'

export class ApiService {
  private baseUrl = '/api/[domain]'

  async getData(params: DomainRequestTypes.GetDataParams): Promise<DomainResponseTypes.GetDataResponse> {
    const response = await request<DomainResponseTypes.GetDataResponse>({
      url: `${this.baseUrl}/data`,
      method: 'GET',
      data: params,
    })
    return ResponseHandler.handle(response)
  }

  async createData(data: DomainRequestTypes.CreateDataParams): Promise<DomainResponseTypes.CreateDataResponse> {
    const response = await request<DomainResponseTypes.CreateDataResponse>({
      url: `${this.baseUrl}/data`,
      method: 'POST',
      data,
    })
    return ResponseHandler.handle(response)
  }

  // Each method handles single API endpoint
}

