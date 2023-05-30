export const StartGame = (props: any) => {
  return (
    <div className="start-game">
      <h1 className="start-heading text-white">Welcome to React Quiz Game!</h1>
      <button className="green-btn start-btn" onClick={props.onClick}>
        Start
      </button>
    </div>
  );
};
