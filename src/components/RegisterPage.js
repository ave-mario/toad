import React from 'react';
import { Link } from 'react-router-dom';
import { action } from '../store';

function RegisterPage() {
  return (
    <div>
      <h3>RegisterPage</h3>
      Already have account? <Link to="login">Login here</Link>
      <button
        type="button"
        onClick={() => {
          action('POSTS_REQUESTED');
        }}
      >
        fetch
      </button>
    </div>
  );
}

export default RegisterPage;
