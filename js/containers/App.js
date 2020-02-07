import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import React, {Component} from "react";

import * as actions from "../actions/todoActions"
import TodosTable from "../components/TodosTable";

class App extends Component{

  render() {
    return (
      <div style={{textAlign: 'center', padding : '25px 50px 75px 50px'}}>
        <h1>TODO APP</h1>
        <TodosTable
          index = {this.props.currentIndex}
          list = {this.props.list}
          onDelete = {this.props.onDeleteTodo}
          onInsert = {this.props.onInsertTodo}
          onUpdate = {this.props.onUpdateTodo}
          onUpdateIndex = {this.props.onUpdateTodoIndex}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentIndex: state.currentIndex,
    list: state.list
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    onInsertTodo: actions.insert,
    onUpdateTodo: actions.update,
    onDeleteTodo: actions.Delete,
    onUpdateTodoIndex: actions.updateIndex
  }, dispatch)
};

App.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    done: PropTypes.string,
    priority: PropTypes.string,
    todo: PropTypes.string
  })),
  onDeleteTodo: PropTypes.func.isRequired,
  onInsertTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onUpdateTodoIndex: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App)