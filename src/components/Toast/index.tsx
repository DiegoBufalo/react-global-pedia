import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useToast } from '../../context/useToast';
import 'react-toastify/dist/ReactToastify.css';

export const Toast: React.FC = () => {
  const { state } = useToast();

  useEffect(() => {
    if (state.status < 300) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state.message, state.status, state.timestamp]);

  return (
        <ToastContainer
          position="top-right"
          autoClose={7000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
        />
  );
};
