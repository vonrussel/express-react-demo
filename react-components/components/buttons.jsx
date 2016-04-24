
// list buttons components here
// separated file per component is advisable for large apps

var Button = React.createClass({
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
    var icon = this.props.icon ? (<i className={this.props.icon}></i>) : null;
    return (
      <button className={this.props.classNames} onClick={this.handleClick}>
        { icon } 
        { this.props.label }
      </button>
    );
  }
});



var Icon = React.createClass({
  getDefaultProps() {
    return {
      "name" : "Icon",
      "label": "",
      "icon": "glyphicon glyphicon-asterisk"
    };
  },
  render() {
    return (
      <Button 
        name={this.props.name} 
        label={this.props.label} 
        classNames={this.props.classNames} 
        icon={this.props.icon} 
        messageHandler={this.props.messageHandler} />
    );
  }
});


var IconButton = React.createClass({
  getDefaultProps() {
    return {
      "name" : "IconButton",
      "icon": "glyphicon glyphicon-asterisk"
    };
  },
  render() {
    return (
      <Button 
        name={this.props.name} 
        label={this.props.label} 
        classNames={this.props.classNames} 
        icon={this.props.icon} 
        messageHandler={this.props.messageHandler} />
    );
  }
});

var IconToggle = React.createClass({
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
      <Button 
        name={this.props.name} 
        label={this.props.label} 
        classNames={this.props.classNames} 
        icon={this.props.icon} 
        messageHandler={this.props.messageHandler} />
    );
  }
});

var IconSmallButton = React.createClass({
  getDefaultProps() {
    return {
      "name" : "IconSmallButton",
      "classNames": "btn btn-primary btn-sm"
    };
  },
  render() {
    return (
      <Button 
        name={this.props.name} 
        label={this.props.label} 
        classNames={this.props.classNames} 
        icon={this.props.icon} 
        messageHandler={this.props.messageHandler} />
    );
  }
});

var ButtonSmall = React.createClass({
  getDefaultProps() {
    return {
      "name" : "ButtonSmall",
      "classNames": "btn btn-primary btn-sm"
    };
  },
  render() {
    return (
      <Button 
        name={this.props.name} 
        label={this.props.label} 
        classNames={this.props.classNames} 
        icon={this.props.icon} 
        messageHandler={this.props.messageHandler} />
    );
  }
});
