import { useCallback, useMemo } from "react";
import { addToCart, removeFromCart, clearCart } from '../store/slices/cartSlice';
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import type { Product } from '../types/domain';

export function useCart() {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.cart.items);

    const total = useMemo(() => items.reduce((sum, item) => sum + item?.quantity * parseFloat(item?.product?.price),
        0,), [items],);

    const add = useCallback((product: Product) => {
        dispatch(addToCart(product));
    }, [dispatch],);

    const remove = useCallback((id: string) => {
        dispatch(removeFromCart(id));
    }, [dispatch],);

    const clear = useCallback(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return useMemo(() => ({ items, total, add, remove, clear }),
        [items, total, add, remove, clear],
    );
}