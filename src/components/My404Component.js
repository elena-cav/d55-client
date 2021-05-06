import React from 'react';

export default function My404Component({ page }) {
  let errorPage = page === 'account' ? 'user' : 'page';
  return (
    <div
      style={{
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <h2>Page not found</h2>
      <h4>We're sorry, we couldn't find the {errorPage} you requested.</h4>
    </div>
  );
}
