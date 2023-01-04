const ColorChecker = ({ color }) => {
  const styles = {
    backgroundColor: color,
  };

  return (
    <div className="color-box" style={styles}>
      {color ? "" : <h2>Empty Value</h2>}
    </div>
  );
};

export default ColorChecker;
