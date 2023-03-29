import Image from "next/image";

const Card = ({ id, title, para, image }) => {
  return (
    <>
      <div className="bg-white p-4" style={{ borderRadius: "3px" }}>
        <div
          className="bg-body justify-content-center d-flex align-items-center h2 fw-bold shadow p-3 mb-5  "
          style={{
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            color: "rgb(116, 116, 245)",
          }}
        >
          {id}
        </div>
        <div>
          <img alt="pic" src={image} style={{ width: 100, height: 100 }} />
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
