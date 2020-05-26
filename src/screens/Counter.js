import React, {useReducer} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

const reducer = (state, action) => {
  // state == { count:number }
  // action == { type:'increment' || 'decrement', payload : 1 }

  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <View style={styles.counter}>
      <Text>{state.count}</Text>
      <Button
        title="Increase the counter"
        onPress={() => {
          dispatch({type: 'increment', payload: 1});
        }}
      />
      <Button
        title="Decrease the counter"
        onPress={() => {
          dispatch({type: 'decrement', payload: 1});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CounterScreen;
