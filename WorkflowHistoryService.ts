// Auto-generated service for workflow_history
import apiClient from './apiClient';
import { WorkflowHistory, WorkflowHistoryCreate } from '../types/entities';

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

const WorkflowHistoryService = {
  /**
   * Get all workflow_history records
   */
  getAll: async (): Promise<WorkflowHistory[]> => {
    const response = await apiClient.get('/api/v1/workflow_history/');
    return response.data;
  },

  /**
   * Get a single workflow_history by id
   */
  getById: async (id: number): Promise<WorkflowHistory> => {
    const response = await apiClient.get(`/api/v1/workflow_history/${id}`);
    return response.data;
  },

  /**
   * Create a new workflow_history
   */
  create: async (data: WorkflowHistoryCreate): Promise<WorkflowHistory> => {
    const response = await apiClient.post('/api/v1/workflow_history/', data);
    return response.data;
  },

  /**
   * Update an existing workflow_history
   */
  update: async (id: number, data: Partial<WorkflowHistory>): Promise<WorkflowHistory> => {
    const response = await apiClient.put(`/api/v1/workflow_history/${id}`, data);
    return response.data;
  },

  /**
   * Delete a workflow_history
   */
  delete: async (id: number): Promise<boolean> => {
    await apiClient.delete(`/api/v1/workflow_history/${id}`);
    return true;
  },
};

export default WorkflowHistoryService;
