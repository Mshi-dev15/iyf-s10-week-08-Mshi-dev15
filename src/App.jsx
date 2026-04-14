 import Header from './components/Header';
 import Footer from './components/Footer';  
 import PostCard from './components/PostCard';
 import Sidebar from './components/Sidebar';
 
 
 function App() {
  const name = "Mshi";
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
    <div>
      <Header />
      <main>
      <h1>Hello,👋 I'm {name}</h1>
      <p>I'm learning React as part of IYF Season 10.</p>
      <p>I enjoy coding and building things for the web.</p>
      <p>This week I'm learning components, props, and state.</p>
      <p>Today is: {currentDate}</p>
      <p>{greeting}</p>
      <PostCard />
      <Sidebar />
      </main>
    <Footer />
    </div>
  );
}

export default App;