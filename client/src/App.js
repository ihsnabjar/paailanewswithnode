import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import  Media from  './components/Medias/Media';
import  Form2 from  './components/Medias/Form2';
import Sidebar from './components/Sidebar/SideBar';
import ChildrenForm from './components/Children/ChildrenForm';
import ChildrenMedia from './components/Children/ChildrenMedia';
// import Login from './components/Auth/Login';
import Login from './components/Auth/login2';
import * as api from './api/index';
import {useStateValue} from './StateProvider';


function App() {
  const [categoryId, setCategoryId] = useState(0)
  const [mediaId, setMediaId] = useState(0);
  const [currentId, setCurrentId] = useState(0);
  const [{media}, dispatch] = useStateValue();


  useEffect(() => {
    dispatch(api.fetchCategoryData(categoryId));
  }, [categoryId ,dispatch])

  useEffect(() => {
    dispatch(api.fetchData(mediaId));
  }, [mediaId,dispatch])

  useEffect(() => {
      dispatch(api.fetchData());
  }, [currentId, dispatch])


 

  return (
    <>
       <Router>
            <Switch> 
              <Route path="/dashboard" > 
                    <div className="dashboard__sidebar">
                      <Sidebar />
                    </div> 
                    <div className="dashboard__root">
                  
                      <Route path="/dashboard/Media">
                          <div className="dashboard__form">
                              <Form2 currentId={currentId}  setCurrentId={setCurrentId}/> 
                          </div>
                          <div>
                              <Media setCurrentId={setCurrentId}  setMediaId={setMediaId} />
                          </div>
                      </Route>
                     
                      <Route path="/dashboard/Category">
                          <div className="dashboard__form">
                              <ChildrenForm categoryId={categoryId} setCategoryId={setCategoryId}  mediaId={mediaId}/> 
                          </div>
                          <div>
                              <ChildrenMedia  setCategoryId={setCategoryId}  mediaId={mediaId} />
                          </div>
                      </Route>
                  </div>
              </Route>
              <Route path="/">
                <Login/>
              </Route>
            </Switch>
        </Router>
    </>
  );
}
export default App;
