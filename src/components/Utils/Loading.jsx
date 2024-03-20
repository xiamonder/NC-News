

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <img
        src="https://images.unsplash.com/photo-1701025812558-ca9ca4e24d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByaW50aW5nJTIwcHJlc3MlMjBjYXJ0b29ufGVufDB8fDB8fHww"
        alt="loading image"
        className="border-3 mx-auto h-36 w-36 rounded-full border-green bg-white object-contain"
      />
      <h2 className="mb-4 text-lg font-semibold">Loading...</h2>
    </div>
  );
};
