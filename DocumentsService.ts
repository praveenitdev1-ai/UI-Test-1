// Auto-generated service for documents
import apiClient from './apiClient';
import { Documents, DocumentsCreate } from '../types/entities';

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

const DocumentsService = {
  /**
   * Get all documents records
   */
  getAll: async (): Promise<Documents[]> => {
    const response = await apiClient.get('/api/v1/documents/');
    return response.data;
  },

  /**
   * Get a single documents by document_id
   */
  getById: async (document_id: string): Promise<Documents> => {
    const response = await apiClient.get(`/api/v1/documents/${document_id}`);
    return response.data;
  },

  /**
   * Create a new documents
   */
  create: async (data: DocumentsCreate): Promise<Documents> => {
    const response = await apiClient.post('/api/v1/documents/', data);
    return response.data;
  },

  /**
   * Update an existing documents
   */
  update: async (document_id: string, data: Partial<Documents>): Promise<Documents> => {
    const response = await apiClient.put(`/api/v1/documents/${document_id}`, data);
    return response.data;
  },

  /**
   * Delete a documents
   */
  delete: async (document_id: string): Promise<boolean> => {
    await apiClient.delete(`/api/v1/documents/${document_id}`);
    return true;
  },
};

export default DocumentsService;
