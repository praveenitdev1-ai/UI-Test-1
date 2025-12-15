// Auto-generated hook for User Story 1
// Screen: WorklistScreen
import { useState, useCallback } from 'react';
import InventoryService from '../services/InventoryService';
import { Inventory, InventoryCreate } from '../types/entities';

interface ValidationError {
  field: string;
  message: string;
}

// Screen-specific FormData type (supports fields from multiple tables)
interface Userstory1FormData {
  item_id?: string;
  tracking_number?: string;
  disposition?: string;
  vendor_id?: string;
}

interface UseLogicResult {
  loading: boolean;
  errors: ValidationError[];
  addToWorklist: (formData: any) => Promise<any>;
}

export const useUserstory1Logic = (
  showNotification: (message: string, type: 'success' | 'danger' | 'warning') => void
): UseLogicResult => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationError[]>([]);

  /**
   * Validate form data against business rules
   */
  const validateForm = useCallback((formData: Userstory1FormData): ValidationError[] => {
    const validationErrors: ValidationError[] = [];
    
    // Validation: required
    if (!formData.item_id || formData.item_id.toString().trim() === '') {
      validationErrors.push({
        field: 'newItemId',
        message: 'Item ID is required.'
      });
    }

    // Validation: required
    if (!formData.tracking_number || formData.tracking_number.toString().trim() === '') {
      validationErrors.push({
        field: 'newTrackingNumber',
        message: 'Tracking number is required.'
      });
    }

    // Validation: valid_format
    if (!formData.tracking_number || formData.tracking_number.toString().trim() === '') {
      validationErrors.push({
        field: 'newTrackingNumber',
        message: 'Invalid tracking number - please verify and try again'
      });
    }

    // Validation: exists_in_inventory
    if (!formData.tracking_number || formData.tracking_number.toString().trim() === '') {
      validationErrors.push({
        field: 'newTrackingNumber',
        message: 'Invalid tracking number - please verify and try again'
      });
    }

    // Validation: not_duplicate_in_worklist
    if (!formData.tracking_number || formData.tracking_number.toString().trim() === '') {
      validationErrors.push({
        field: 'newTrackingNumber',
        message: 'Item already in worklist - added on [date]'
      });
    }

    // Validation: required
    if (!formData.disposition || formData.disposition.toString().trim() === '') {
      validationErrors.push({
        field: 'filterByDisposition',
        message: 'Disposition Type is required.'
      });
    }

    // Validation: required
    if (!formData.vendor_id || formData.vendor_id.toString().trim() === '') {
      validationErrors.push({
        field: 'filterByVendor',
        message: 'Vendor Name is required.'
      });
    }

    
    return validationErrors;
  }, []);

    /**
   * Handle create operation
   */
  const addToWorklist = useCallback(async (formData: Userstory1FormData): Promise<Inventory | null> => {
    // Validate
    const validationErrors = validateForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      validationErrors.forEach(err => {
        showNotification(err.message, 'danger');
      });
      return null;
    }

    setLoading(true);
    setErrors([]);

    try {
      // Convert formData to API format (entity type)
      const apiData = formData as any;  // Type assertion for API call
      const result = await InventoryService.create(apiData);
      showNotification('Item created successfully', 'success');
      return result;
    } catch (error: any) {
      const message = error.response?.data?.detail 
        ? JSON.stringify(error.response.data.detail) 
        : error.message;
      showNotification(`Operation failed: ${message}`, 'danger');
      return null;
    } finally {
      setLoading(false);
    }
  }, [validateForm, showNotification]);

  return {
    loading,
    errors,
    addToWorklist
  };
};

export default useUserstory1Logic;
