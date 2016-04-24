

var DemoApp = React.createClass({
  getInitialState() {
    return {
      message: 'Click a button!'
    }
  },
  messageHandler(msg) {
    this.setState({message: msg});
  },
  render() {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div>
            <h2 className="text-center">{this.state.message}</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>
                <Icon messageHandler={this.messageHandler} />
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <IconButton messageHandler={this.messageHandler} />
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <Button messageHandler={this.messageHandler} />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>
                <IconToggle messageHandler={this.messageHandler} />
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <IconSmallButton messageHandler={this.messageHandler} />
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <ButtonSmall messageHandler={this.messageHandler} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});



// render mainView
ReactDOM.render(<DemoApp />, document.getElementById('root'));