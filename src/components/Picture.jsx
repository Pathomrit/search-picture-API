const Picture = (props) => {
  return (
    <div>
      <img src={props.urls.small} alt={props.description} />
    </div>
  );
};

export default Picture;
