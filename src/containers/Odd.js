import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import _, {isEmpty} from 'lodash';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
} from 'react-native';
import SingleDigit from '../components/SingleDigit';
import EvenSet from '../data/EvenSet';
import numbersSet from '../data/numbersSet';
import OddSet from '../data/OddSet';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#F5FCFF',
  },
  heading: {
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  inputContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 100,
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  button: {
    margin: 10,
    width: '30%',
  },
});

const Odd = ({navigation}) => {
  const [number, onChangeNumber] = useState(null);
  const [arr, setArr] = useState([]);
  const [removed, setRemoved] = useState([]);
  const onCheckLimit = value => {
    if (!value) {
      onChangeNumber(value);
      return;
    }
    const parsedQty = parseInt(value, 10);
    if (isNaN(parsedQty)) {
      onChangeNumber('0');
    } else if (parsedQty > 9) {
      onChangeNumber('9');
    } else {
      onChangeNumber(`${parsedQty}`);
    }
  };
  const reset = () => {
    setArr([]);
    const temp = OddSet;
    setArr(_.uniq(temp));
    setRemoved([]);
  };
  const removeAll = () => {
    if (!number) {
      return;
    }
    let current = arr;
    current = current.filter(i => lpad(i, 3).includes(`${number}`));
    setArr(current);
    onChangeNumber(null);
  };

  const remove = () => {
    if (!number) {
      return;
    }
    const index = removed.indexOf(number);
    if (index > -1) {
      return;
    }
    let current = arr;
    current = current.filter(i => !lpad(i, 3).includes(`${number}`));

    setArr(current);
    setRemoved(p => [...p, number]);
    onChangeNumber(null);
  };

  const add = () => {
    if (!number) {
      return;
    }
    const index = removed.indexOf(number);
    if (index <= -1) {
      return;
    }
    let current = arr;
    const items = OddSet.filter(i => lpad(i, 3).includes(`${number}`));

    setArr(_.union(items, current));
    if (index > -1) {
      removed.splice(index, 1);
    }
    onChangeNumber(null);
  };
  function lpad(value, padding) {
    var zeroes = new Array(padding + 1).join('0');
    return (zeroes + value).slice(-padding);
  }
  useEffect(() => {
    reset();
  }, []);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.backgroundColor}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onCheckLimit}
          value={number}
          placeholder=""
          keyboardType="numeric"
        />
        <View style={styles.button}>
          <Button title="Remove" onPress={remove} />
        </View>
        <View style={styles.button}>
          <Button title="Add" onPress={add} />
        </View>
        <View style={styles.button}>
          <Button title="Remove All" onPress={removeAll} />
        </View>
        <View style={styles.button}>
          <Button title="Refresh" onPress={reset} />
        </View>
        <View style={styles.button}>
          <Text>{`Total: ${arr.length}`}</Text>
        </View>
      </View>
      <View style={styles.container}>
        {arr.length === 0 && <Text>Loading</Text>}
        {arr.map(i => (
          <SingleDigit digit={lpad(i, 3)} key={i} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Odd;
