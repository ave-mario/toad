import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div>
      <h3>RegisterPage</h3>
      Already have account? <Link to="login">Login here</Link>
    </div>
  );
}

export default RegisterPage;
