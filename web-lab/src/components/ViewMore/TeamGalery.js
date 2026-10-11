export default function TeamGalery() {
  return (
    <div id="more-content-part-2" className="container py-4 py-xl-5">
      <div className="row mb-4 mb-lg-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Наша команда</h2>
          <p>
            Експерти морської справи, логістики та клієнтського сервісу, які
            роблять ваші виходи на воду безпечними та ефективними.
          </p>
        </div>
      </div>
      <div className="row gy-4 row-cols-2 row-cols-md-4">
        <div className="col">
          <div className="card border-0 shadow-none">
            <div className="card-body text-center d-flex flex-column align-items-center p-0">
              <img
                className="object-fit-cover rounded-circle mb-3"
                width="130"
                height="130"
                src="/img/captain.png"
                alt="Олександр Ковальчук"
              />
              <h5 className="fw-bold mb-0 card-title">
                Олександр Ковальчук
              </h5>
              <p className="text-muted mb-2 card-text">
                Головний капітан флоту, Шеф-навігатор
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-none">
            <div className="card-body text-center d-flex flex-column align-items-center p-0">
              <img
                className="object-fit-cover rounded-circle mb-3"
                width="130"
                height="130"
                src="/img/Bugalter.jpg"
                alt="Марина Бойко"
              />
              <h5 className="fw-bold mb-0 card-title">
                Марина Бойко
              </h5>
              <p className="text-muted mb-2 card-text">
                Керівник напрямку морської логістики
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-none">
            <div className="card-body text-center d-flex flex-column align-items-center p-0">
              <img
                className="object-fit-cover rounded-circle mb-3"
                width="130"
                height="130"
                src="/img/Mechanic.jpg"
                alt="Дмитро Мельник"
              />
              <h5 className="fw-bold mb-0 card-title">
                Дмитро Мельник
              </h5>
              <p className="text-muted mb-2 card-text">
                Провідний судновий інженер-механік
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-none">
            <div className="card-body text-center d-flex flex-column align-items-center p-0">
              <img
                className="object-fit-cover rounded-circle mb-3"
                width="130"
                height="130"
                src="/img/chatManager.jpg"
                alt="Олена Савченко"
              />
              <h5 className="fw-bold mb-0 card-title">
                Олена Савченко
              </h5>
              <p className="text-muted mb-2 card-text">
                Менеджер із бронювання та чартеру
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}