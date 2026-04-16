 //import Header from './components/Header';
 //import Footer from './components/Footer';
 import Layout from './components/Layout';  
 import PostList from './components/PostList';
 import Sidebar from './components/Sidebar';
 import Button from './components/Button';
 import Card from './components/Card';
 import UserGreeting from './components/UserGreeting';
 import Counter from './components/Counter';
 import Toggle from './components/Toggle';
 import UserForm from './components/UserForm';
 import EvenExample from './components/EventExample';
 import ContactForm from './components/ContactForm';

 function App() {
  const user = "Mshi";
  const currentDate = new Date().toDateString();
  const hour = new Date().getHours();

  let greeting;
  if (hour < 12) {
    greeting = "Good morning! 🌅";
  } else if (hour < 17) {
    greeting = "Good afternoon! ☀️";
  } else {
    greeting = "Good evening! 🌙";
  }

  return (
    <Layout>

      <Card title="Welcome to communityHub">
      <UserGreeting user={user} />
      <p>Today is: {currentDate}</p>
      <p>{greeting}</p>
      <Button text="View Posts" />
      <Button text="Login" />
      <Button text="Submit" variant="primary" />
      <Button text="Cancel" variant="secondary" />
      <Button text="Delete" variant="danger" />
      <Button /> 
      </Card>

      <Card title="Latest Posts">
      <PostList />
      </Card>

      <Card>
      <Sidebar />
    </Card>
    <card title="Interactive Examples">
      <Counter />
      <Toggle />
      <UserForm /> 
    </card>
    <card title="Events and Forms">
      <EvenExample />
      <ContactForm />

    </card>
    
    </Layout>
  );
}

export default App;