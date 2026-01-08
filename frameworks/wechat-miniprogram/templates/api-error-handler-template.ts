// API Error Handler - Error processing
// Single responsibility: Handle errors only

export class ErrorHandler {
  static handle(error: unknown): void {
    if (error instanceof Error) {
      wx.showToast({
        title: error.message,
        icon: 'none',
        duration: 2000,
      })
    } else {
      wx.showToast({
        title: 'Network error',
        icon: 'none',
        duration: 2000,
      })
    }
  }

  static handleNetworkError(): void {
    wx.showToast({
      title: 'Network connection failed',
      icon: 'none',
      duration: 2000,
    })
  }

  static handleBusinessError(message: string): void {
    wx.showToast({
      title: message,
      icon: 'none',
      duration: 2000,
    })
  }
}

