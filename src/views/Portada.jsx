import quince from "../assets/15.png";
import luna from "../assets/Luna.png";


const Portada = () => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center portada">
      {/* 👑 Imagen de la corona */}
      <img src={luna} alt="luna" width={120} className="mb-5 mt-5" />
      <aside className="linea">
        <h2 className="enfoque mis">
          {"mis".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
        <img src={quince} alt="" width={300} />
        <h2 className="enfoque años">
          {"años".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
      </aside>

      <h1 className="enfoque">
        {"Indiana".split("").map((letra, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {letra}
          </span>
        ))}
      </h1>
      
    </section>
  );
};

export default Portada;
