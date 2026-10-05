export default function CatalogSection() {
  return (
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div className="card" style={{ borderWidth: '0px' }}>
              <div className="card-body p-4 text-center">
                <img 
                  className="img-fluid" 
                  width="770" 
                  height="489" 
                  style={{ width: '80%', height: '200px', borderRadius: '5px' }} 
                  src="/img/контейнеровоз.webp" 
                  alt="Контейнеровоз"
                />
                <h4 className="card-title" style={{ marginTop: '20px' }}>Вантажні судна</h4>
                <p className="card-text">
                  Контейнеровози, балкери та баржі різної вантажопідйомності для безпечних регіональних 
                  і міжнародних логістичних операцій.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ borderWidth: '0px' }}>
              <div className="card-body p-4 text-center">
                <img 
                  className="img-fluid" 
                  width="500" 
                  height="374" 
                  style={{ width: '80%', height: '200px', borderRadius: '5px' }} 
                  src="/img/катер.jpg" 
                  alt="Катер"
                />
                <h4 className="card-title" style={{ marginTop: '20px' }}>Пасажирські лайнери</h4>
                <p className="card-text">
                  Комфортабельні теплоходи, моторні яхти та круїзні катери для корпоративів, 
                  святкових турів, екскурсій і приватного відпочинку.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ borderWidth: '0px' }}>
              <div className="card-body p-4 text-center">
                <img 
                  className="img-fluid" 
                  width="500" 
                  height="348" 
                  style={{ width: '80%', height: '200px', borderRadius: '5px' }} 
                  src="/img/рибальський%20човен.jpg" 
                  alt="Рибальський човен"
                />
                <h4 className="card-title" style={{ marginTop: '20px' }}>Рибальські шхуни</h4>
                <p className="card-text">
                  Повністю оснащені судна зі спеціальним навігаційним і рибопошуковим обладнанням 
                  для промислового вилову або спортивної риболовлі.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center" style={{ height: '100px', marginTop: '40px' }}>
          <div className="col d-flex justify-content-center align-items-center">
            <button 
              className="btn btn-primary" 
              type="button" 
              style={{ width: '180px', height: '50px', background: 'rgb(66,66,66)', borderRadius: '10px', fontWeight: 'bold', fontSize: '18px' }}
            >
              Весь флот
            </button>
          </div>
        </div>
      </div>
  );
}