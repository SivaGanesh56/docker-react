import React from 'react';
import './InfrastructureFlow.css'; // Styles

const InfrastructureFlow = () => {
  return (
    <div className="infrastructure-flow-container">
      <h1>Site Infrastructure Flow</h1>

      <div className="step">
        <div className="step-details">
          <h2>GitHub</h2>
          <p>Code repository hosting</p>
          <a href="https://github.com/SivaGanesh56/docker-react" target="_blank" rel="noopener noreferrer">
            Visit GitHub
          </a>
          <div className="arrow">&#8681;</div>
        </div>
        
      </div>

      <div className="step">
        <div className="step-details">
          <h2>CodePipeline</h2>
          <p>Continuous delivery service</p>
          <a href="https://aws.amazon.com/codepipeline/" target="_blank" rel="noopener noreferrer">
            Learn about CodePipeline
          </a>
          <div className="arrow">&#8681;</div>
        </div>
      </div>

      <div className="step">
        <div className="step-details">
          <h2>CodeBuild</h2>
          <p>Build and test code</p>
          <a href="https://aws.amazon.com/codebuild/" target="_blank" rel="noopener noreferrer">
            Explore CodeBuild
          </a>
          <div className="arrow">&#8681;</div>
        </div>
      </div>

      <div className="step">
        <div className="step-details">
          <h2>ECR</h2>
          <p>Elastic Container Registry for Docker images</p>
          <a href="https://aws.amazon.com/ecr/" target="_blank" rel="noopener noreferrer">
            Discover ECR
          </a>
          <div className="arrow">&#8681;</div>
        </div>
      </div>

      <div className="step">
        <div className="step-details">
          <h2>EC2</h2>
          <p>Elastic Compute Cloud for scalable computing</p>
          <a href="https://aws.amazon.com/ec2/" target="_blank" rel="noopener noreferrer">
            Check out EC2
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureFlow;
