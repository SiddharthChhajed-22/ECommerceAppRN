import { takeEvery, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { addItem, addItemDirect } from './cartSlice';
import { RootState } from '../../../app/store/rootReducer';

function* handleAddItem(action: ReturnType<typeof addItem>): SagaIterator {
  const id = action.payload;
  const products: RootState['products']['items'] = yield select(
    (state: RootState) => state.products.items,
  );
  const product = products.find(p => p.id === id);
  if (product) {
    yield put(addItemDirect(product));
  }
}

export function* cartSaga(): SagaIterator {
  yield takeEvery(addItem.type, handleAddItem);
}
