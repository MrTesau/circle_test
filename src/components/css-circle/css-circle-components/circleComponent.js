const circleComponent = (props) => {
  const { bgColor, bgImage, circleClass, children } = props;
  return (
    <div
      className={`${circleClass}`}
      style={{
        backgroundColor: bgColor ? bgColor : null,
        backgroundImage: bgImage ? bgImage : null,
      }}
    >
      {children}
    </div>
  );
};

export default circleComponent;
