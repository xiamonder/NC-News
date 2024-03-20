export const Button = ({ label, onClick }) => {
  return (
    <button
      className={
        "rounded bg-green px-4 py-2 font-bold text-white shadow-md transition-shadow duration-200 ease-in-out hover:bg-green-light hover:shadow-lg"
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
};
