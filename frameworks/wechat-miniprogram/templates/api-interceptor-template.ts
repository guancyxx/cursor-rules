// API Interceptor - Request/Response interception
// Single responsibility: Handle request/response interception only

import { RequestConfig } from '@/types/api'

export class ApiInterceptor {
  static requestInterceptor(config: RequestConfig): RequestConfig {
    // Add token
    const token = wx.getStorageSync('token')
    if (token) {
      config.header = {
        ...config.header,
        Authorization: `Bearer ${token}`,
      }
    }
    return config
  }

  static responseInterceptor(response: WechatMiniprogram.RequestSuccessCallbackResult): unknown {
    // Handle response
    return response.data
  }

  static errorInterceptor(error: unknown): never {
    // Handle error
    throw error
  }
}

