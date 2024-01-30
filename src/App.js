import React from 'react';
import './App.css';
import InfrastructureFlow from './InfrastructureFlow';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Container World!</h1>
      <p>Build through GitHub, CodePipeline, CodeBuild, EC2, and ECR.</p>
      <InfrastructureFlow />
    </div>
  );
}


export default App;
