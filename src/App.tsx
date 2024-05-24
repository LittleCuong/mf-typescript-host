import React from 'react'
import ReactDOM from 'react-dom/client'

import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

import Remote from "remote/Recipes"

import './index.scss'

Amplify.configure(outputs);

const App = () => (
  <Authenticator>
      {({ signOut, user }) => (  
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
          <Remote/>
        </div>
      )}
    </Authenticator>

)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
