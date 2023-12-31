import fetchHelper from '../api';
import { jest } from '@jest/globals'

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        status: 'success',
        data: 'test data'
      }
    })
  )
}))

describe('fetchHelper', () => {
  it('should fetch data successfully', async () => {
    const url = import.meta.env.VITE_API_URL
    const data = await fetchHelper<string>(url)
    expect(data).toEqual('test data')
  })
})

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.reject(new Error('API Error')))
}))

describe('fetchHelper', () => {
  it('should throw an error for API error', async () => {
    const url = import.meta.env.VITE_API_URL
    try {
      await fetchHelper<string>(url)
      expect(true).toBe(false)
    } catch (error) {
      const errorMessage = error.message
      expect(errorMessage).toBe('API Error')
    }
  })
})
