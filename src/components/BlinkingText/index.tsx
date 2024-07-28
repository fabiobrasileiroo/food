import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const BlinkingText = () => (
  <View style={[styles.container, styles.horizontal]}>
    {/* <ActivityIndicator /> */}
    <ActivityIndicator size="large" />
    {/* <ActivityIndicator size="small" color="#0000ff" /> */}
    {/* <ActivityIndicator size="large" color="#00ff00" /> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default BlinkingText;
// import React, { useEffect, useRef } from 'react';
// import { Text, Animated, TextStyle, StyleSheet } from 'react-native';

// interface BlinkingTextProps {
//   text: string;
// }

// const BlinkingText: React.FC<BlinkingTextProps> = ({ text }) => {
//   const opacity = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(opacity, {
//           toValue: 0,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(opacity, {
//           toValue: 1,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//       ]),
//     ).start();
//   }, [opacity]);

//   return (
//     <Animated.Text style={[styles.blinkingText, { opacity }]}>
//       {text}
//     </Animated.Text>
//   );
// };

// const styles = StyleSheet.create({
//   blinkingText: {
//     color: '#94a3b8', // Correspondente ao 'text-slate-400'
//     marginLeft: 12, // Correspondente ao 'ml-3'
//   },
// });

// export default BlinkingText;
