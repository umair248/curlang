import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function DotIndicator({
  unhighlightedDotWidth,
  unhighlightedDotHeight,
  highlightedDotWidth,
  highlightedDotHeight,
  unhighlightedDotColor,
  highlightedDotColor,
  list,
  currentIndex,
}) {
  return (
    <View style={styles.container}>
      {list.map((item, index) => (
        <View
          style={styles.dot}
          key={index}
          height={
            index == currentIndex
              ? highlightedDotHeight
              : unhighlightedDotHeight
          }
          width={
            index == currentIndex ? highlightedDotWidth : unhighlightedDotWidth
          }
          backgroundColor={
            index == currentIndex ? highlightedDotColor : unhighlightedDotColor
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dot: {
    borderRadius: 30,
    width: 30,
    height: 30,
    marginHorizontal: 2,
    backgroundColor: 'red',
  },
});
