import authState from './modules/auth/state';
import realmAppState from './modules/realmApp/state';
import fileStorage from './modules/fileStorage/state';
import toolState from './modules/tools/state';
import dbState from './modules/db/state';

export interface RootState {
  auth: typeof authState;
  realmApp: typeof realmAppState;
  fileStorage: typeof fileStorage;
  tools: typeof toolState;
  db: typeof dbState;
}
