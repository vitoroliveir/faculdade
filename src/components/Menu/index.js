import React from 'react';
import {
    View,
    Title,
  } from "./styles"

export default function Menu({ title }) {
  return (
    <View >
        <Title>{title}</Title>
    </View>
  );
}