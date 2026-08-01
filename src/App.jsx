import AppHeader from './components/Header';
import TaskSection from './components/tasks/TaskSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page">
      <AppHeader />
      <TaskSection />
      <Footer />
    </div>
  );
}

export default App;