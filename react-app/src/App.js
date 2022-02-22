import React from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    answer_1: '',
    answer_2: ''
  };

  handleSubmit = () => {
    axios.post('http://localhost:8000/create/', this.state).then(() => {
      const redirectUrl = window.location.search.replace('?urlredirect=', '');
      console.log(redirectUrl);
      if (window.location !== window.parent.location) {
        // If it's in iframe
        const event = new Event('fetch');
        window.parent.postMessage(
          JSON.parse(JSON.stringify(event)),
          'http:/localhost:4200/'
        );
      } else {
        window.location.href = redirectUrl;
      }
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Question 1: Sample question for the survey... ?</label>
              <div>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={({target: {value}}) =>
                    this.setState({answer_1: value})
                  }
                />
              </div>
            </div>

            <div>
              <label>Question 2: Another question for the survey... ?</label>
              <div>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={({target: {value}}) =>
                    this.setState({answer_2: value})
                  }
                />
              </div>
            </div>

            <div className="button" onClick={this.handleSubmit}>
              <span>Submit</span>
            </div>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
