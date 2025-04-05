const Divider = (props) => {
  return (
    <div className="border-2 border-pink-400 p-2 rounded-md mt-5">
      {props.theme === true ? <h1>DARK THEME</h1> : <h1>LIGHT THEME</h1>}
    </div>
  );
};

export default Divider;
