/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useReducer,
  ReactElement,
  useCallback,
  useContext,
} from "react";

type StateType = { count: number; text: string };
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DESCREMENT,
  RESET,
}
const initState: StateType = { count: 0, text: "" };

type ReducerAction = { type: REDUCER_ACTION_TYPE; payload?: string };

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DESCREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.RESET:
      return { ...state, count: (state.count = 0) };
    default:
      throw new Error();
  }
};

const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );
  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DESCREMENT }),
    []
  );

  const reset = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.RESET }),
    []
  );

  return { state, increment, decrement, reset };
};

type useCounterContextType = ReturnType<typeof useCounterContext>;

const initContextContextType: useCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
};

export const CounterContext = createContext<useCounterContextType>(
  initContextContextType
);

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
};

export const CounterProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
    reset,
  } = useContext(CounterContext);
  return { count, increment, decrement, reset };
};
