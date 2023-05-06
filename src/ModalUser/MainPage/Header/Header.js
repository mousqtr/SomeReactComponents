import "./Header.scss";

export default function Header({ bg }) {
  return (
    <div className="header" style={{ background: bg }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="wave"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,256L80,229.3C160,203,320,149,480,160C640,171,800,245,960,240C1120,235,1280,149,1360,106.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
