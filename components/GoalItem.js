import {Pressable, StyleSheet, Text, View} from 'react-native';

const GoalItem = (props) => {

  return (
      <View style={styles.goalItem}>
        <Pressable android_ripple={{color: '#1f1f4f'}}
                   onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
          <Text style={styles.goalText}>{props.text}
          </Text>
        </Pressable>
      </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
