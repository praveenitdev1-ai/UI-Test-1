// Auto-generated service for nsi_items
import apiClient from './apiClient';
import { NsiItems, NsiItemsCreate } from '../types/entities';

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

const NsiItemsService = {
  /**
   * Get all nsi_items records
   */
  getAll: async (): Promise<NsiItems[]> => {
    const response = await apiClient.get('/api/v1/nsi_items/');
    return response.data;
  },

  /**
   * Get a single nsi_items by nsi_id
   */
  getById: async (nsi_id: number): Promise<NsiItems> => {
    const response = await apiClient.get(`/api/v1/nsi_items/${nsi_id}`);
    return response.data;
  },

  /**
   * Create a new nsi_items
   */
  create: async (data: NsiItemsCreate): Promise<NsiItems> => {
    const response = await apiClient.post('/api/v1/nsi_items/', data);
    return response.data;
  },

  /**
   * Update an existing nsi_items
   */
  update: async (nsi_id: number, data: Partial<NsiItems>): Promise<NsiItems> => {
    const response = await apiClient.put(`/api/v1/nsi_items/${nsi_id}`, data);
    return response.data;
  },

  /**
   * Delete a nsi_items
   */
  delete: async (nsi_id: number): Promise<boolean> => {
    await apiClient.delete(`/api/v1/nsi_items/${nsi_id}`);
    return true;
  },
};

export default NsiItemsService;
