import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Common from './components/common/common';
import Pagination_2 from './pages/pagination/Pagination_2';
import DigitalClock from './pages/DigitalClock/DigitalClock';
import Stopwatch from './pages/stopwatch/Stopwatch';
import Filter_product from './pages/Filter-product/Filter_product';
import Qna from './pages/QNA/Qna';
import Short_Data from './pages/Short-data/Short_Data';
import ToDoList from './pages/ToDoList/ToDoList';
import Weather_App from './pages/Weather_App/Weather_App';
import Movie_App from './pages/Movie-App/Movie_App';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Common />}>
          <Route
            path='/pagination'
            element={<Pagination_2 />}
          />
          <Route
            path='/DigitalClock'
            element={<DigitalClock />}
          />
          <Route
            path='/Stopwatch'
            element={<Stopwatch />}
          />
          <Route
            path='/Filter-product'
            element={<Filter_product />}
          />
          <Route
            path='/QNA'
            element={<Qna />}
          />
          <Route
            path='/Short_Data'
            element={<Short_Data />}
          />
          <Route
            path='/ToDoList'
            element={<ToDoList />}
          />
           <Route
            path='/Weather_App'
            element={<Weather_App />}
          />
           <Route
            path='/Movie_App'
            element={<Movie_App />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
