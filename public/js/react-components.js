
// list buttons components here
// separated file per component is advisable for large apps

var Button = React.createClass({displayName: "Button",
  propTypes: {
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    classNames: React.PropTypes.string,
    icon: React.PropTypes.string,
    messageHandler: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      "name": "Button",
      "label": "Click Me",
      "classNames": "btn btn-primary",
      "icon": ""
    };
  },
  handleClick() {
    this.props.messageHandler('You click the button ' + this.props.name + '!');
  },
  render() {
    var icon = this.props.icon ? (React.createElement("i", {className: this.props.icon})) : null;
    return (
      React.createElement("button", {className: this.props.classNames, onClick: this.handleClick}, 
         icon, 
         this.props.label
      )
    );
  }
});



var Icon = React.createClass({displayName: "Icon",
  getDefaultProps() {
    return {
      "name" : "Icon",
      "label": "",
      "icon": "glyphicon glyphicon-asterisk"
    };
  },
  render() {
    return (
      React.createElement(Button, {
        name: this.props.name, 
        label: this.props.label, 
        classNames: this.props.classNames, 
        icon: this.props.icon, 
        messageHandler: this.props.messageHandler})
    );
  }
});


var IconButton = React.createClass({displayName: "IconButton",
  getDefaultProps() {
    return {
      "name" : "IconButton",
      "icon": "glyphicon glyphicon-asterisk"
    };
  },
  render() {
    return (
      React.createElement(Button, {
        name: this.props.name, 
        label: this.props.label, 
        classNames: this.props.classNames, 
        icon: this.props.icon, 
        messageHandler: this.props.messageHandler})
    );
  }
});

var IconToggle = React.createClass({displayName: "IconToggle",
  getDefaultProps() {
    return {
      "name" : "IconToggle",
      "label" : "",
      "classNames": "btn btn-primary btn-sm",
      "icon": "glyphicon glyphicon-asterisk"
    };
  },
  render() {
    return (
      React.createElement(Button, {
        name: this.props.name, 
        label: this.props.label, 
        classNames: this.props.classNames, 
        icon: this.props.icon, 
        messageHandler: this.props.messageHandler})
    );
  }
});

var IconSmallButton = React.createClass({displayName: "IconSmallButton",
  getDefaultProps() {
    return {
      "name" : "IconSmallButton",
      "classNames": "btn btn-primary btn-sm"
    };
  },
  render() {
    return (
      React.createElement(Button, {
        name: this.props.name, 
        label: this.props.label, 
        classNames: this.props.classNames, 
        icon: this.props.icon, 
        messageHandler: this.props.messageHandler})
    );
  }
});

var ButtonSmall = React.createClass({displayName: "ButtonSmall",
  getDefaultProps() {
    return {
      "name" : "ButtonSmall",
      "classNames": "btn btn-primary btn-sm"
    };
  },
  render() {
    return (
      React.createElement(Button, {
        name: this.props.name, 
        label: this.props.label, 
        classNames: this.props.classNames, 
        icon: this.props.icon, 
        messageHandler: this.props.messageHandler})
    );
  }
});



var DemoApp = React.createClass({displayName: "DemoApp",
  getInitialState() {
    return {
      message: ''
    }
  },
  messageHandler(msg) {
    this.setState({message: msg});
  },
  render() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "col-md-8 col-md-offset-2"}, 
          React.createElement("div", null, 
            React.createElement("h2", {className: "text-center"}, this.state.message)
          ), 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-4"}, 
              React.createElement("p", null, 
                React.createElement(Icon, {messageHandler: this.messageHandler})
              )
            ), 
            React.createElement("div", {className: "col-md-4"}, 
              React.createElement("p", null, 
                React.createElement(IconButton, {messageHandler: this.messageHandler})
              )
            ), 
            React.createElement("div", {className: "col-md-4"}, 
              React.createElement("p", null, 
                React.createElement(Button, {messageHandler: this.messageHandler})
              )
            )
          ), 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-4"}, 
              React.createElement("p", null, 
                React.createElement(IconToggle, {messageHandler: this.messageHandler})
              )
            ), 
            React.createElement("div", {className: "col-md-4"}, 
              React.createElement("p", null, 
                React.createElement(IconSmallButton, {messageHandler: this.messageHandler})
              )
            ), 
            React.createElement("div", {className: "col-md-4"}, 
              React.createElement("p", null, 
                React.createElement(ButtonSmall, {messageHandler: this.messageHandler})
              )
            )
          )
        )
      )
    );
  }
});



// render mainView
ReactDOM.render(React.createElement(DemoApp, null), document.getElementById('root'));