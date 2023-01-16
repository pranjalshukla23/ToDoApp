import {StyleSheet, Modal, Button, TextInput, View, Image} from 'react-native';
import {useState} from 'react';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image styles={styles.image} source={require("../assets/images/goal.png")} />
          <TextInput style={styles.textInput}
                     placeholder="your course goal"
                     value={enteredGoalText}
                     onChangeText={goalInputHandler}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="add goal" onPress={addGoalHandler} color="#b180f0"/>
            </View>
            <View stye={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default GoalInput


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})
