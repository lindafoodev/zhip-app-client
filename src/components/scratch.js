class App extends React.Component {
  constructor() {
  super();
  this.state = {
    open: false
  };
}
handleClick() {
  this.setState({
    open: !this.state.open
  });
}
render() {
  return (
    <HamburgerMenu
      isOpen={this.state.open}
      menuClicked={this.handleClick.bind(this)}
      width={100}
      height={80}
      strokeWidth={3}
      rotate={0}
      color='black'
      borderRadius={0}
      animationDuration='0.5'
    />
  );
}
};

const HamburgerMenu = (props) => {
//let { isOpen } = props;
let style = {
  hamburger: {
    width,
    height,
    position: 'relative',
    transform: `rotate(${props.rotation || 0}deg)`  
  },
  link: {
    display: block
  }
};
return (
  <div className="hamburger-nav" onClick={props.menuClicked}>
    <div className="hamburger">
      <div className="hamburger-stripe"></div>
      <div className="hamburger-stripe"></div>
      <div className="hamburger-stripe"></div>
    </div>
    <nav className="mainNav noDisplay" style={Object.assign({}, style.link)}>
            <ul className="navbar">
                <li className="links noDisplay">
                  <a href="/home">
                    Home
                  </a>
                </li>
                <li className="links noDisplay">
                  <a href="/initiate">
                    Create IOU
                  </a>
                </li>
            </ul>
          </nav>
  </div>
    <span style={Object.assign({}, style.lineBase, style.homeLink)}></span>
);
};

ReactDOM.render(<App />, document.getElementById('root'));