// Auto-generated hook for User Story 5
// Screen: MaintenanceScreen
import { useState, useCallback } from 'react';
import NsiItemsService from '../services/NsiItemsService';
import { NsiItems, NsiItemsCreate } from '../types/entities';

interface ValidationError {
  field: string;
  message: string;
}

// Screen-specific FormData type (supports fields from multiple tables)
interface Userstory5FormData {
  item_id?: string;
}

interface UseLogicResult {
  loading: boolean;
  errors: ValidationError[];
  processSubmit: (formData: any) => Promise<any>;
}

export const useUserstory5Logic = (
  showNotification: (message: string, type: 'success' | 'danger' | 'warning') => void
): UseLogicResult => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationError[]>([]);

  /**
   * Validate form data against business rules
   */
  const validateForm = useCallback((formData: Userstory5FormData): ValidationError[] => {
    const validationErrors: ValidationError[] = [];
    
    // Validation: required
    if (!formData.item_id || formData.item_id.toString().trim() === '') {
      validationErrors.push({
        field: 'itemId',
        message: 'Item ID is required.'
      });
    }

    
    return validationErrors;
  }, []);

    /**
   * Handle form submission
   */
  const processSubmit = useCallback(async (formData: Userstory5FormData): Promise<NsiItems | null> => {
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
      const apiData = formData as any;  // Type assertion for API call
      const result = await NsiItemsService.create(apiData);
      showNotification('Operation successful', 'success');
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
    processSubmit
  };
};

export default useUserstory5Logic;
