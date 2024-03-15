import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <h2>404 Page not found!</h2>
      <img
        src="https://images.unsplash.com/photo-1701025812558-ca9ca4e24d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByaW50aW5nJTIwcHJlc3MlMjBjYXJ0b29ufGVufDB8fDB8fHww"
        alt="loading image"
      />
      <Link to={"/"}>
        <h3>Come home?</h3>
      </Link>
    </>
  );
};
