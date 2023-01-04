const SearchColor = ({ setColor, color }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Add Color Name, Hex, RGB"
        className="color-input"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  );
};

export default SearchColor;
