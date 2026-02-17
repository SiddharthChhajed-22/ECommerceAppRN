import axios from 'axios';
import type { CartItem, Product, User, Order } from '../../types/domain';
import {
    PAGE_SIZE,
    PRODUCTS,
    FAKE_USER,
    FAKE_TOKEN,
    getOrders,
    addOrder,
} from '../mockData';
import { getErrorMessage } from '../utils';

const MOCK_BASE = 'https://jsonplaceholder.typicode.com';


function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function loginApi(params: {
    email: string;
    password: string;
}): Promise<{ token: string; user: User }> {
    const { email, password } = params;
    try {
        await delay(700);
        await axios.get(`${MOCK_BASE}/users/1`);
    } catch (e) {
        throw new Error(getErrorMessage(e, 'Login Failed. Please try again.'));
    }
    if (email === 'user@example.com' && password === 'password123') {
        return { token: FAKE_TOKEN, user: FAKE_USER };
    }
    throw new Error('Invalid email or password.');
}

export async function signupApi(params: {
    name: string;
    email: string;
    password: string;
}): Promise<{ token: string; user: User }> {
    const { name, email, password } = params;
    try {
        await delay(800);
        await axios.get(`${MOCK_BASE}/users`);
    } catch (e) {
        throw new Error(getErrorMessage(e, 'Sign up failed. Please try again.'));
    }
    if (!email || !password || !name) {
        throw new Error('All fields are required.');
    }
    return { token: FAKE_TOKEN, user: { ...FAKE_USER, name, email } };
}

export async function fetchProductsApi(
    page: number,
): Promise<{ items: Product[]; hasMore: boolean }> {
    try {
        await delay(600);
        await axios.get(`${MOCK_BASE}/posts`, {
            params: { _page: page, _limit: PAGE_SIZE },
        });
    } catch (e) {
        throw new Error(getErrorMessage(e, 'Failed to load products. Please try again.'));
    }
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const items = PRODUCTS.slice(start, end);
    const hasMore = end < PRODUCTS.length;
    return { items, hasMore };
}

export async function createOrderApi(params: {
    cartItems: CartItem[];
    total: number;
}): Promise<Order> {
    const { cartItems, total } = params;
    try {
        await delay(700);
        await axios.post(`${MOCK_BASE}/posts`, {});
    } catch (e) {
        throw new Error(getErrorMessage(e, 'Failed to place order. Please try again.'));

    }
    const newOrder: Order = {
        id: `oder-${getOrders().length + 1}`,
        items: cartItems,
        total,
        createdAt: new Date().toISOString(),
    };
    addOrder(newOrder);
    return newOrder;
}

export async function fetchOrdersApi(): Promise<Order[]> {
    try {
        await delay(500);
        await axios.get(`${MOCK_BASE}/posts`, { params: { _limit: 1 } });
    } catch (e) {
        throw new Error(getErrorMessage(e, 'Failed to load orders. Please try again.'));
    }
    return getOrders();
}