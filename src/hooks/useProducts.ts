import { useCallback, useMemo } from "react";
import { fetchProductsRequest } from '../store/slices/productsSlice';
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export function useProducts() {
    const dispatch = useAppDispatch();
    const { list, loading, refreshing, hasMore, error } = useAppSelector(
        state => state.products,
    );

    const loadInitial = useCallback(() => {
        dispatch(fetchProductsRequest({ refresh: true }));
    }, [dispatch]);


    const loadMore = useCallback(() => {
        if (!loading && hasMore) {
            dispatch(fetchProductsRequest({ refresh: false }));
        }
    }, [dispatch, loading, hasMore]);

    const refresh = useCallback(() => {
        if (!refreshing) {
            dispatch(fetchProductsRequest({ refresh: true }));
        }
    }, [dispatch, refreshing]);

    return useMemo(() => ({ list, loading, refreshing, hasMore, error, loadInitial, loadMore, refresh }),
        [list, loading, refreshing, hasMore, error, loadInitial, loadMore, refresh],);
}

