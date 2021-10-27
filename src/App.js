
import './App.css';
import TodoList from './components/TodoList';
import React from 'react';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      task: "",
      owner: "",
      items: []
    };

  }
  handleChange(event)
  {
    if (event.target.name === "task")
    {
      this.setState({ task: event.target.value });

    } else if (event.target.name === "ownername")
    {
      this.setState({ owner: event.target.value });
    }

  }
  addItem()
  {
    this.setState({ items: [...this.state.items, { taskName: this.state.task, ownerName: this.state.owner }], task: '', owner: "" })
  }
  removeItem(index)
  {
    const items = this.state.items.filter((e, idx) => idx !== index);
    this.setState({ items });
  }
  render()
  {
    return (
      <div className="App">
        <header>
          <h1> Multi line Todo List </h1>
        </header>
        <div >
          <h3> Todo Task</h3>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="jumbotron">
                  <div className="form-group">
                    <h2>Todo Task</h2>
                    <input name="task" type="text" className="form-control" placeholder="Task" value={this.state.task} onChange={this.handleChange.bind(this)} />
                    <h2>Owner Name</h2>
                    <input name="ownername" type="text" className="form-control" placeholder="Owner" value={this.state.owner} onChange={this.handleChange.bind(this)} />
                  </div>
                  <button onClick={() => this.addItem()} className="rounded">Add To do </button>
                </div>
              </div>
              <div className="col-md-6">
                <TodoList todoList={this.state.items}
                  removeItem={this.removeItem.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
