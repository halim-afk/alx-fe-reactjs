import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';



function App() {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age={30} bio="Frontend developer who loves travel and design." />
      <MainContent />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;
