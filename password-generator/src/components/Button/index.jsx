/* eslint-disable react/prop-types */
export default function Button({ buttonText, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
}
