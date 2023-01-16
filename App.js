import {FlatList, Image, StyleSheet, Button, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(
        currentCourseGoals => [
          ...currentCourseGoals,
          {
            text: enteredGoalText,
            id: Math.random().toString(),
          },
        ]);
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
      <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e08cc" onPress={startAddGoalHandler}/>
        {modalIsVisible && <GoalInput
            visbible={modalIsVisible}
            onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}/>}
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals}
                    ketExtractor={(item, index) => {
                      return item.id;
                    }}
                    renderItem={itemData => {
                      return <GoalItem text={itemData.item.text} id={itemData.item.id}  onDeleteItem={deleteGoalHandler}/>;
                    }}/>
        </View>
      </View>
      </>
  );
}

//stylesheet object
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },
});
