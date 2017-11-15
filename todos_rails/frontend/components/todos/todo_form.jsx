import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleBodyInput = this.handleBodyInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleTitleInput(event) {
    this.setState({ title: event.currentTarget.value });
  }

  handleBodyInput(event) {
    this.setState({ body: event.currentTarget.value });
  }

  addTodo() {
    const todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body
    };
    this.props.createTodo(todo).then(
      () => this.setState({ title: "", body: "" })
    );
  }

  render() {
    const { errors } = this.props;
    let errs = "";
    if (errors.length > 0) {
      errs = errors.map( err => (
        <li key={ err } className={ 'error' }>{ err }</li>
      ));
    }

    return(
      <form>
        { errs }
        <input
          onChange={ this.handleTitleInput }
          type="text"
          placeholder='Title'
          value={ this.state.title }
        />
        <br />
        <textarea
          onChange={ this.handleBodyInput }
          placeholder='Body'
          value={ this.state.body }
        ></textarea>
        <button onClick={ this.addTodo }
                type="button"
                name="submit">
          Add Todo
        </button>
      </form>
    );
  }
}

export default TodoForm;
