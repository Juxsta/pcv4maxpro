import { watch } from '@vue/composition-api';
import store, { useAuthGetters, useDbGetters, useRealmAppState } from '@/store';
import { ObjectId } from 'bson';
import * as Realm from 'realm-web';
import { MutationTypes } from './modules/db/mutations';

const { app } = useRealmAppState(['app']);

const { getUser } = useAuthGetters(['getUser']);
const { collection } = useDbGetters(['collection']);
// eslint-disable-next-line import/prefer-default-export
export const setUser = watch(
  getUser,
  async newUser => {
    if (newUser) {
      const user = await collection.value!('User').findOne({ _id: new ObjectId(newUser.id) });
      store.commit(`db/${MutationTypes.setUser}`, user);
    } else if (newUser === null) {
      await app.value.logIn(Realm.Credentials.anonymous());
    }
  },
  {
    immediate: true
  }
);
