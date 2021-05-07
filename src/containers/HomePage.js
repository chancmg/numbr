import React from 'react';
import {ScrollView, View, StyleSheet, Text, Button} from 'react-native';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#F5FCFF',
  },
  heading: {
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomePage = ({navigation}) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.backgroundColor}>
      <View style={styles.container}>
        <View style={{margin: 10, width: '80%'}}>
          <Button
            title="Go to Add/Remove"
            onPress={() => navigation.navigate('AddRemove')}
          />
        </View>
        <View style={{margin: 10, width: '80%'}}>
          <Button
            title="Opposite Numbers"
            onPress={() => navigation.navigate('Opposite')}
          />
        </View>
        <View style={{margin: 10, width: '80%'}}>
          <Button
            title="Even Numbers"
            onPress={() => navigation.navigate('Even')}
          />
        </View>

        <View style={{margin: 10, width: '80%'}}>
          <Button
            title="Odd Numbers"
            onPress={() => navigation.navigate('Odd')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
