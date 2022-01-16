import React from 'react';
import {YMaps, Map, Placemark} from "react-yandex-maps";

const Contacts = () => {
  return (
    <section className="contacts">
      <h2>Контакты</h2>
      <div className="contacts__wrapper">
        <div>
          <a className="contacts__phone" href="tel:88009503398">
            <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2 2H14.0147V21.9698L2 21.9698L2 2ZM0 2C0 0.895432 0.895431 0 2 0H14.0147C15.1193 0 16.0147 0.895431 16.0147 2V21.9698C16.0147 23.0744 15.1193 23.9698 14.0147 23.9698H2C0.89543 23.9698 0 23.0744 0 21.9698V2ZM5.99023 17.9375C5.43795 17.9375 4.99023 18.3852 4.99023 18.9375C4.99023 19.4898 5.43795 19.9375 5.99023 19.9375H10.026C10.5782 19.9375 11.026 19.4898 11.026 18.9375C11.026 18.3852 10.5782 17.9375 10.026 17.9375H5.99023Z" fill="black"/>
            </svg>
            &nbsp;8 800 950-33-98
          </a>
          <address className="contacts__address">
            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.5589 11.7209C19.5589 14.9389 17.3378 18.3934 14.695 21.2759C13.4209 22.6656 12.1402 23.8241 11.1757 24.6361C11.0349 24.7546 10.9013 24.8655 10.7757 24.9683C10.6511 24.8669 10.5187 24.7576 10.3793 24.6409C9.4154 23.8337 8.13554 22.681 6.86225 21.2956C4.22317 18.4243 2 14.9689 2 11.7209C2 6.8721 5.9307 2.94141 10.7795 2.94141C15.6282 2.94141 19.5589 6.8721 19.5589 11.7209ZM21.5589 11.7209C21.5589 19.766 10.7795 27.5003 10.7795 27.5003C10.7795 27.5003 0 19.8233 0 11.7209C0 5.76753 4.82613 0.941406 10.7795 0.941406C16.7328 0.941406 21.5589 5.76753 21.5589 11.7209ZM13.3385 11.4212C13.3385 12.835 12.1924 13.9811 10.7786 13.9811C9.36485 13.9811 8.21875 12.835 8.21875 11.4212C8.21875 10.0074 9.36485 8.86133 10.7786 8.86133C12.1924 8.86133 13.3385 10.0074 13.3385 11.4212ZM15.3385 11.4212C15.3385 13.9396 13.297 15.9811 10.7786 15.9811C8.26028 15.9811 6.21875 13.9396 6.21875 11.4212C6.21875 8.90286 8.26028 6.86133 10.7786 6.86133C13.297 6.86133 15.3385 8.90286 15.3385 11.4212Z" fill="black"/>
            </svg>
            &nbsp;г. Москва, ул. Ленина, д. 50
          </address>
        </div>
        <div className="contacts__map">
          <YMaps>
            <Map
              defaultState={{ center: [59.968137, 30.316272], zoom: 14 }}
              width="100%" height="100%"
            >
              <Placemark
                defaultGeometry={[59.968137, 30.316272]}
                options={{
                  iconColor: '#D12136',
                  controls: []
                }}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
