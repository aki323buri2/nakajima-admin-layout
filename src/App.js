import React from 'react';
import './App.css';

import AdminLayout from './containers/AdminLayout'; 

const title = '中島　亮三';
const gitUrl = 'https://github.com/aki323buri2/nakajima-admin-layout';

function App() {
  return (
    <AdminLayout 
      title={title} 
      gitUrl={gitUrl}
    >
      app
    </AdminLayout>
  );
}

export default App;
