import "./index.css";

function Info({ textTitle, textContent, imageSrc }) {
  return (
    <div className="grid grid-cols-2 info-grid bg-white-600">
      <div>
        <h2 class="bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent info-title">
          {`${textTitle}`}
        </h2>
        <p class="text-lg text-gray-300">{`${textContent}`}</p>
      </div>
      <div className="grid-img">
        <img src={`${imageSrc}`} alt="Image 1" className="info-img" />
      </div>
    </div>
  );
}

export default Info;
