const Button = ({ name, isBeam, containerClass }) => {
  return (
    <div className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </div>
  );
};

export default Button;
