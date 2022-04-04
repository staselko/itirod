import { ActionsTypes } from '../Interfaces';
import { errorsTypes } from './ErrorsTypes';

export const replace = (errorPath: string): ActionsTypes => ({
  type: errorsTypes.REPLACE,
  payload: errorPath,
});
