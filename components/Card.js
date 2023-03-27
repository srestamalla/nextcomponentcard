const Card = ({ id, title, para }) => {
  return (
    <>
      <div className="bg-white p-4" style={{ borderRadius: "3px" }}>
        <div
          className="bg-light justify-content-center d-flex align-items-center h2 fw-bold "
          style={{
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            color: "rgb(116, 116, 245)",
          }}
        >
          {id}
        </div>
        <h2 className="fw-bold" style={{ color: "#424242" }}>
          {title}
        </h2>
        <p style={{ color: "#424242" }}>{para}</p>
      </div>
    </>
  );
};
export default Card;
