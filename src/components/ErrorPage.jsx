import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-2xl font-bold">404</h1>
      <h2 className="mb-4 text-xl font-bold">Page not found!</h2>
      <img
        src="https://images.unsplash.com/photo-1701025812558-ca9ca4e24d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByaW50aW5nJTIwcHJlc3MlMjBjYXJ0b29ufGVufDB8fDB8fHww"
        alt="Page not found"
        className="mb-4 h-60 w-60 rounded-full border-4 border-red bg-white object-contain "
      />
      <Link to="/" className="text-lg font-medium hover:text-green">
        <h3>Come home?</h3>
      </Link>
    </div>
  );
};
