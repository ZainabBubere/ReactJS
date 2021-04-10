import  React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList'
import Person from './components/Person';
import StyleSheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline></Inline>
        {/* <StyleSheet primary = "true"></StyleSheet> */}
        {/* <Person></Person> */}
        {/* <NameList></NameList> */}
        {/* <UserGreeting></UserGreeting>
        <ParentComponent></ParentComponent>
        <EventBind></EventBind>
        <ClassClick></ClassClick>
        <FunctionClick></FunctionClick>
        <Counter></Counter>
        <Message></Message>
        <Greet name="Chandler Bing" realName="Matthew Perry">
          <p>Do you still make jokes when you're uncomfortable!?</p>
        </Greet>
        <Greet name="Monica Geller" realName="Courteney Cox">
          <button>Let's Clean!</button>
        </Greet>
        <Welcome name="Phoebe Buffay" song="Smelly Cat"></Welcome>
        <Welcome name="Ross" song="Big Butts"></Welcome>
        <Hello></Hello> */}
      </div>
    );
  } 
}

export default App;
