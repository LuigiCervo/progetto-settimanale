import "./App.css";
import MyNavbar from "./components/MyNavbar";
import CustomCarousel from "./components/CustomCarousel";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App bg-black">
      <MyNavbar />
      <section className="d-flex align-items-top justify-content-between ms-0 mt-4 mb-4 me-4">
        <div className="d-flex align-items-center">
          <h1 className="text-light fw-bold ms-4">TV Shows</h1>
          <div className="dropdown ms-5">
            <button
              className="btn btn-black dropdown-toggle text-light fs-4 border border-light ps-3 pe-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Azione
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Drama
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Horror
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-end">
          <button type="button" className="btn btn-outline-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="18"
              fill="currentColor"
              className="bi bi-justify-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <button type="button" className="btn btn-outline-secondary me-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="18"
              fill="currentColor"
              className="bi bi-arrows-fullscreen"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
              />
            </svg>
          </button>
        </div>
      </section>
      <h2 className="ms-4 mt-5 mb-4 text-light fw-bold">Star Wars' Gallery.</h2>
      <CustomCarousel query="Star Wars" />
      <h2 className="ms-4 mt-5 mb-4  text-light fw-bold">
        Spongebob's Gallery.
      </h2>
      <CustomCarousel query="Spongebob" />
      <h2 className="ms-4 mt-5 mb-4  text-light fw-bold">
        Lord of the Rings' Gallery.
      </h2>
      <CustomCarousel query="Lord of the Rings" />
      <MyFooter />
    </div>
  );
}

export default App;
