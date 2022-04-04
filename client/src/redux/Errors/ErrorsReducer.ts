import { ActionsTypes, IErrorInitialState } from '../Interfaces';
import { errorsTypes } from './ErrorsTypes';

const INITIAL_STATE: IErrorInitialState = {
  path: '',
};

const errorsHandling = (
  state = INITIAL_STATE,
  action: ActionsTypes,
): IErrorInitialState => {
  switch (action.type) {
    case errorsTypes.REPLACE:
      return {
        ...state,
        path: action.payload,
      };
    default:
      return state;
  }
};

export default errorsHandling;
