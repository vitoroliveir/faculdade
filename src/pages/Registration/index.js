import React from 'react';

import { View } from 'react-native';
import Form from '../../components/Form';


export default function Registration({ navigation }) {
  return (
    <View >
      <Form navigation={navigation} type={"registration"} />
    </View>
  );
}