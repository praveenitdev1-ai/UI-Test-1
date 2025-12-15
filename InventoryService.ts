// Auto-generated service for inventory
import apiClient from './apiClient';
import { Inventory, InventoryCreate } from '../types/entities';

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

const InventoryService = {
  /**
   * Get all inventory records
   */
  getAll: async (): Promise<Inventory[]> => {
    const response = await apiClient.get('/api/v1/inventory/');
    return response.data;
  },

  /**
   * Get a single inventory by item_id
   */
  getById: async (item_id: string): Promise<Inventory> => {
    const response = await apiClient.get(`/api/v1/inventory/${item_id}`);
    return response.data;
  },

  /**
   * Create a new inventory
   */
  create: async (data: InventoryCreate): Promise<Inventory> => {
    const response = await apiClient.post('/api/v1/inventory/', data);
    return response.data;
  },

  /**
   * Update an existing inventory
   */
  update: async (item_id: string, data: Partial<Inventory>): Promise<Inventory> => {
    const response = await apiClient.put(`/api/v1/inventory/${item_id}`, data);
    return response.data;
  },

  /**
   * Delete a inventory
   */
  delete: async (item_id: string): Promise<boolean> => {
    await apiClient.delete(`/api/v1/inventory/${item_id}`);
    return true;
  },
};

export default InventoryService;
