import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../store/todoSlice';

export default function useFetchTodos() {
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    if (mounted) dispatch(fetchTodos());
    return () => {
      mounted = false;
    };
  }, [dispatch]);
}