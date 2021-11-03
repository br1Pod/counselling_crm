import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardContainer from './containers/DashboardContainer'
import DiaryContainer from './containers/DiaryContainer'
import ClientsContainer from './containers/ClientsContainer'
import ContactsContainer from './containers/ContactsContainer'
import DocumentsContainer from './containers/DocumentsContainer'
import AccountsContainer from './containers/AccountsContainer'
import Layout from './components/Layout';
import {getClients, deleteClient, updateClient} from './components/forms/AddClientService';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>

            <Route path="/" exact>
              <DashboardContainer />
            </Route>

            <Route path="/diary" exact>
              <DiaryContainer />
            </Route>

            <Route path="/clients" exact>
              <ClientsContainer 
              getClients ={getClients}
              deleteClient ={deleteClient}
              updateClient ={updateClient}
              />
            </Route>

            <Route path="/contacts" exact>
              <ContactsContainer />
            </Route>

            <Route path="/docs" exact>
              <DocumentsContainer />
            </Route>

            <Route path="/accounts" exact>
              <AccountsContainer />
            </Route>

          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
