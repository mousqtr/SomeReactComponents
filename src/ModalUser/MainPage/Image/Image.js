import "./Image.scss";

export default function Image({ url }) {
  return (
    <div className="image">
      <img src={url} />
    </div>
  );
}
