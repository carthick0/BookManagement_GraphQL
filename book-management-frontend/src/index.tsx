import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:2000/',
  cache: new InMemoryCache()   //in memory cache it store the query results in memory to avoid unnecassy network request and for fast response
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>   
      <App />
    </ApolloProvider>
  </React.StrictMode>//ApolloProvider works like React.Context.Provider.
  //  It injects your Apollo Client instance into the React component tree. 
  // This allows any component to use GraphQL via Apollo hooks like useQuery, useMutation.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
