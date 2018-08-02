import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div class="ui vertical buttons">
    <button class="ui button" role="button"onClick={e => this.props.history.push("/")}>Home</button>
    <button class="ui button" role="button"onClick={e => this.props.history.push("/happy")}>Happy</button>
    <button class="ui button" role="button"onClick={e => this.props.history.push("/sleepy")}>Sleepy</button>
    <button class="ui button" role="button"onClick={e => this.props.history.push("/guilty")}>Guilty</button>
     </div>
    );
  }
}

export default Home;
