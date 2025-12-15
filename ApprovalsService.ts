// Auto-generated service for approvals
import apiClient from './apiClient';
import { Approvals, ApprovalsCreate } from '../types/entities';

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

const ApprovalsService = {
  /**
   * Get all approvals records
   */
  getAll: async (): Promise<Approvals[]> => {
    const response = await apiClient.get('/api/v1/approvals/');
    return response.data;
  },

  /**
   * Get a single approvals by id
   */
  getById: async (id: number): Promise<Approvals> => {
    const response = await apiClient.get(`/api/v1/approvals/${id}`);
    return response.data;
  },

  /**
   * Create a new approvals
   */
  create: async (data: ApprovalsCreate): Promise<Approvals> => {
    const response = await apiClient.post('/api/v1/approvals/', data);
    return response.data;
  },

  /**
   * Update an existing approvals
   */
  update: async (id: number, data: Partial<Approvals>): Promise<Approvals> => {
    const response = await apiClient.put(`/api/v1/approvals/${id}`, data);
    return response.data;
  },

  /**
   * Delete a approvals
   */
  delete: async (id: number): Promise<boolean> => {
    await apiClient.delete(`/api/v1/approvals/${id}`);
    return true;
  },
};

export default ApprovalsService;
