// Auto-generated service for audit_log
import apiClient from './apiClient';
import { AuditLog, AuditLogCreate } from '../types/entities';

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

const AuditLogService = {
  /**
   * Get all audit_log records
   */
  getAll: async (): Promise<AuditLog[]> => {
    const response = await apiClient.get('/api/v1/audit_log/');
    return response.data;
  },

  /**
   * Get a single audit_log by id
   */
  getById: async (id: number): Promise<AuditLog> => {
    const response = await apiClient.get(`/api/v1/audit_log/${id}`);
    return response.data;
  },

  /**
   * Create a new audit_log
   */
  create: async (data: AuditLogCreate): Promise<AuditLog> => {
    const response = await apiClient.post('/api/v1/audit_log/', data);
    return response.data;
  },

  /**
   * Update an existing audit_log
   */
  update: async (id: number, data: Partial<AuditLog>): Promise<AuditLog> => {
    const response = await apiClient.put(`/api/v1/audit_log/${id}`, data);
    return response.data;
  },

  /**
   * Delete a audit_log
   */
  delete: async (id: number): Promise<boolean> => {
    await apiClient.delete(`/api/v1/audit_log/${id}`);
    return true;
  },
};

export default AuditLogService;
