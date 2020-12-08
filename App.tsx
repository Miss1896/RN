import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Badge from 'components/Badge';

const App = () => {
  const [count, setCount] = useState(
    100
  );
  const onDecrement = () => {
    console.log(count);
    setCount((count || 0) - 1);
  };
  return (
    <View style={{ "margin": 50 }}>
      <Text style={{ "marginBottom": 50 }}>
        <Badge count={'new'}>
          <View style={styles.test}>
            <Text>
              {count}
            </Text>
          </View>
        </Badge>
      </Text>
      <Text>
        <Badge count={count}>
          <View style={styles.test}>
            <Text>
              {count}
            </Text>
          </View>
        </Badge>
      </Text>
      <Button
        title="-"
        onPress={onDecrement}
        accessibilityLabel="decrement"
        color="red"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    padding: 20,
    borderColor: '#000',
    borderWidth: 2,
    borderStyle: 'solid',
  },
});

export default App;
