import './App.scss';
import React from 'react';
import Input from './components/Input'
import List from './components/List'
import Modal from './components/Modal';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      editTaskValue: null,
      editTaskId: null,
      editModalOpen: false,
      list: []
    }
    this.createTask = this.createTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.modalChangeHandler = this.modalChangeHandler.bind(this)
    this.onEditTask = this.onEditTask.bind(this)
  }
  createTask(name) {
    const task = {
      id: Date.now(),
      name,
      checked: false
    }
    this.setState({
      list: [...this.state.list, task]
    })
  }

  removeTask(id) {
    const filterResult = this.state.list.filter(item => item.id !== id)
    this.setState({ list: filterResult })
  }

  toggleTask(id) {
    const newTaskList = this.state.list.map(task => task.id === id ? { ...task, checked: !task.checked } : task)
    this.setState({ list: newTaskList })
  }





  editTask(id) {
    const value = this.state.list.find(item => item.id === id).name
    this.setState({ editTaskId: id, editTaskValue: value, editModalOpen: true })
  }
  closeModal() {
    this.setState({ editModalOpen: false })
  }

  onEditTask(value) {
    const newList = this.state.list.map(task => task.id === this.state.editTaskId ? { ...task, name: value } : task)
    this.setState({ list: newList })
  }

  modalChangeHandler(value) {
    this.setState({ editTaskValue: value })
  }



  render() {
    return (
      <div className='wrapper'>
        <Modal
          onChange={this.modalChangeHandler}
          onClose={this.closeModal}
          onClick={this.onEditTask}
          taskValue={this.state.editTaskValue}
          isOpen={this.state.editModalOpen}
        />
        <Input onCreate={this.createTask} />
        <List onEdit={this.editTask} onToggle={this.toggleTask} onDelete={this.removeTask} list={this.state.list} />
      </div>
    );
  }
};

export default App;
