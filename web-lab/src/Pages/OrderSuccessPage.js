import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function OrderSuccessPage() {


  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div style={{ minHeight: "400px", marginTop: "120px"}} className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl">
        
        <div className="flex flex-col items-center" >
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Замовлення розміщено успішно
          </h1>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed" style={{ paddingTop: "10px" }}>
          Ми працюємо над Вашим замовленням і скоро зв'яжемося з Вами.
        </p>


        <div className="pt-2" style={{ marginTop: "80px" }}>
          <Link to="/catalog">
            <button
                className=""
                    style={{
                        background: 'rgb(66, 66, 66)',
                        color: '#ffffff',
                        fontSize: '18px',
                        padding: '16px 24px',
                        borderRadius: '16px',
                        fontWeight: 'bold',
                        border: 'none',
                    }}
                >
            Назад до каталогу
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

