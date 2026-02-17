import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { createOrderRequest, fetchOrdersRequest } from "../store/slices/orderSlice";

export function useOrders() {
    const dispatch = useAppDispatch();
    const { list, loading, error } = useAppSelector(state => state.orders);

    const loadOrders = useCallback(() => {
        dispatch(fetchOrdersRequest());
    }, [dispatch]);

    const createOrder = useCallback(() => {
        dispatch(createOrderRequest());
    }, [dispatch]);

    return useMemo(() => ({ list, loading, error, loadOrders, createOrder }),
        [list, loading, error, loadOrders, createOrder],
    );
}