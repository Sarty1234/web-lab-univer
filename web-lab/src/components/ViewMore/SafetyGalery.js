export default function SafetyGalery() {
  return (
    <div
      id="more-content-part-1"
      className="container d-flex flex-column align-items-center py-4 py-xl-5 animate-enter"
    >
      <div
        className="row gy-4 row-cols-1 row-cols-md-2 w-100"
        style={{ maxWidth: "800px" }}
      >
        <div className="col order-md-first">
          <div className="card">
            <img
              className="card-img w-100 d-block"
              src="/img/captainPlace.webp"
              alt="Сертифікований флот"
            />
            <div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4">
              <h4
                style={{
                  color: "var(--bs-light)",
                  backgroundColor: "rgba(0,0,0,0.12)",
                }}
              >
                Сертифікований флот
              </h4>
              <p
                style={{
                  color: "var(--bs-light)",
                  backgroundColor: "rgba(0,0,0,0.12)",
                }}
              >
                Кожне судно проходить регулярний технічний огляд і відповідає
                міжнародним стандартам безпеки мореплавства.
              </p>
            </div>
          </div>
        </div>

        <div className="col d-md-flex order-first justify-content-md-start align-items-md-end order-md-1">
          <div style={{ width: "80%" }}>
            <h2>Безпека, надійність та повна підтримка</h2>
            <p>
              Забезпечуємо повний цикл оренди водного транспорту: від перевірки
              суден до підбору сертифікованого екіпажу та юридичного супроводу
              договорів.
            </p>
          </div>
        </div>

        <div className="col order-md-2">
          <div className="card">
            <img
              className="card-img w-100 d-block"
              src="/img/Motte-Picquet-Navigation.jpg"
              alt="Досвідчені капітани"
            />
            <div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4">
              <h4
                style={{
                  color: "var(--bs-light)",
                  backgroundColor: "rgba(0,0,0,0.12)",
                }}
              >
                Досвідчені капітани
              </h4>
              <p
                style={{
                  color: "var(--bs-light)",
                  backgroundColor: "rgba(0,0,0,0.12)",
                }}
              >
                Надаємо професійні екіпажі з ліцензіями для складних логістичних
                маршрутів та безпечного відпочинку.
              </p>
            </div>
          </div>
        </div>

        <div className="col order-md-2">
          <div className="card">
            <img
              className="card-img w-100 d-block"
              src="/img/Halibut Schooners_top.jpg"
              alt="Гнучкі умови оренди"
            />
            <div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4">
              <h4
                style={{
                  color: "var(--bs-light)",
                  backgroundColor: "rgba(0,0,0,0.12)",
                }}
              >
                Гнучкі умови оренди
              </h4>
              <p
                style={{
                  color: "var(--bs-light)",
                  backgroundColor: "rgba(0,0,0,0.12)",
                }}
              >
                Погодинний фрахт для катерів, сезонна оренда рибальських човнів
                та індивідуальні контракти на контейнеровози.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}