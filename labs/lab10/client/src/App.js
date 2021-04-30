import logo from './logo.svg';
import './App.css';
import NameSearch from './components/NameSearch';
import AgeSearch from './components/AgeSearch';
import ReportingArea from './components/ReportingArea';

export default function App() {
  return (
    <div className="App">
      <NameSearch/>
      <AgeSearch/>
      <ReportingArea/>
    </div>
  );
}

