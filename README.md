# Error Boundary Component for Pleelo

The Error Boundary Component is a utility designed to handle errors efficiently in your application. This component takes care of capturing any errors that occur within the application and provides an elegant way to handle them and present an error message to the user. To use this component, follow the steps below:

## Usage

Once you have located the file in your source code, you need to wrap your main component (App or any other name you have given) with the BoundaryError component. This will allow the Error Boundary Component to capture and handle any errors that may occur in your application.



```jsx import React from 'react';
import BoundaryError from 'component-location';

const App = () => {
  // Your application code here
  return (
    <BoundaryError>
      {/* Application content */}
    </BoundaryError>
  );
};

export default App;
