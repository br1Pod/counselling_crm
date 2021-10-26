import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>

            <Route path="/" exact>
              <Dashboard />
            </Route>

            <Route path="/diary" exact>
              <Diary />
            </Route>

            <Route path="/clients" exact>
              <Clients />
            </Route>

            <Route path="/contacts" exact>
              <Contacts />
            </Route>

            <Route path="/docs" exact>
              <Documents />
            </Route>

            <Route path="/accounts" exact>
              <Accounts />
            </Route>

          </Switch>
        </Layout>
      </Router>
    <>
  );
}

export default App;
