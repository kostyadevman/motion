import React from 'react';
import {YMaps, Map, Placemark} from "react-yandex-maps";
import Icon from "../../icon/icon";
import Socials from "../../socials/socials";

const Contacts = () => {
  return (
    <section className="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <div className="contacts__wrapper">
        <div className="contacts__info">
          <a className="contacts__phone" href="tel:88009503398">
            <Icon name='phone' className="contacts__icon" width='17'  height='24'/>
            &nbsp;8 800 950-33-98
          </a>
          <a className="contacts__email" href = "mailto: info@hodfutureacademy.ru">
            <Icon name='email' className="contacts__icon" width='24' height='17'/>
            info@hodfutureacademy.ru
          </a>
          <address className="contacts__address">
               <Icon name='pin' className='contacts__icon' width='22' height='28'/>
            &nbsp;г. Москва, ул. Ленина, д. 50
          </address>
          <Socials />
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
