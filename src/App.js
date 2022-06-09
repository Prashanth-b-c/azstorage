import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Chart from './chart';
import ChartError from './ChartError';
// import ClientLatency from './ClientLatency';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Chart />} />
          <Route path='/error' element={<Chart />} />
          <Route path='/errorchart' element={<ChartError />} />
          {/* <Route path='/perf' element={<HighPerfLatency />} /> */}
          {/* <Route path='/serv' element={<ServerLatency />} /> */}
          {/* <Route path='/client' element={<ClientLatency />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
