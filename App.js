import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';


class App extends React.Component {

    state = {
        text: "",
        todo: ['this is list of todo', 'this second todo in the list']

    }
    addTodo = () => {
        let text = this.state.text;
        let arr = this.state.todo;
        if (text !== "")
            arr.push(text);
        this.setState({todo: arr, text: ""});
    }
    deleteTodo = (t) => {
        let arr = this.state.todo
        let position = arr.indexOf(t)
        arr.splice(position, 1);
        this.setState({todo: arr})
    }
    renderTodoList = () => {
        return this.state.todo.map((t) => {
            return (
                <TouchableOpacity key={t}>
                    <Text
                        style={styles.renderTodoList}
                        onPress={() => this.deleteTodo(t)}
                    >{t}</Text>
                </TouchableOpacity>
            )
        })

    }

    render() {
        return (
            <View style={styles.viewStyles}>
                <Text>This is new app </Text>
                <TextInput
                    style={styles.InputStyle}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                ></TextInput>
                <Button
                    title='ToDo+'
                    onPress={this.addTodo}
                ></Button>
                {this.renderTodoList()}
            </View>
        );
    }


}

const styles = {
    viewStyles: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    InputStyle: {height: 40, borderWidth: 1, borderColor: "green", width: 300, marginTop: 10, marginBottom: 10},
    renderTodoList: {marginTop: 10}
}

export default App;