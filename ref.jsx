class Color extends React.Component {
    alertTextInput = e => {
      e.preventDefault();
      alert(this.colorElement.value);
    };
  
    render() {
      return (
        <div>
          <input
            type="text"
            placeholder="Add Input"
            ref={(inputElement) => this.colorElement = inputElement}
          />
  
          <button onClick={this.alertTextInput}>Alert Input</button>
        </div>
      );
    }
  }