import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './assets/style/global.scss'
import Store from './store/store';


interface StoreType {
  store: Store
}
const store = new Store();
export const Context = createContext<StoreType>({store})
const root = ReactDOM.createRoot(
  
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
  
     <Context.Provider value={{store}}>
      <BrowserRouter>
          <App/>
        </BrowserRouter>
     </Context.Provider>
    
  </React.StrictMode>
);

