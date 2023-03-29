import Image from "next/image";
import Link from "next/link";

const UserCard = ({ id, title, para, image }) => {
  return (
    <>
      <div
        className="bg-white p-4 d-flex justify-content-around align-items-center "
        style={{ borderRadius: "3px" }}
      >
        <div
          className="bg-body justify-content-center d-flex align-items-center h2 fw-bold shadow p-3"
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
          <img alt="pic" src={image} style={{ width: 50, height: 50 }} />
        </div>
        <Link href={`/users/${id}`}>
          <h2 className="fw-bold" style={{ color: "#424242" }}>
            {title}
          </h2>
        </Link>
        <p style={{ color: "#424242" }}>{para}</p>
      </div>
    </>
  );
};
export default UserCard;
