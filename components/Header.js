import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>TODO LIST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightpink',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
});

export default Header;
