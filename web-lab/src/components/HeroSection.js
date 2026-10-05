export default function HeroSection() {
  return (

      <div className="container py-4 py-xl-5">
        <div className="row gy-4 gy-md-0">
          <div className="col-md-6 col-xl-6">
            <div className="m-xl-5" style={{ padding: 0 }}>
              <img 
                className="img-fluid object-fit-cover rounded w-100" 
                style={{ minHeight: '300px' }} 
                src="/img/port.webp" 
                alt="Port"
              />
            </div>
          </div>
          <div className="col-md-6 d-md-flex align-items-md-center">
            <div style={{ maxWidth: '350px' }}>
              <h2 className="text-uppercase fw-bold">Надійний флот для будь-яких завдань на воді</h2>
              <p className="my-3">
                Пропонуємо оренду сучасних вантажних, пасажирських та рибальських суден для приватних подій, 
                бізнесу та морських перевезень. Гнучкі тарифи, перевірений технічний стан та повна юридична 
                підтримка на кожному маршруті.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}