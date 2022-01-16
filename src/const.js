export const AppRoute = {
  ROOT: `/`,
  CONTACTS: `/contacts`,
  ABOUT: `/about`,
  EVENTS: `/events`,
  NEWS: `/news`,
  KNOWLEDGE_BASE: `/knowledge-base`,
  CAREER: `/career`,
  COURSES: `/courses`,
  PAGE_NOT_FOUND: `/page-not-found`
};

export const MenuType = {
  header: `header`,
  footer: `footer`
};

export const MENU_SETTINGS = {
  header: {
    className: `header__menu menu`,
    listClassName: `menu__list`,
    linkClassName: `menu__link`,
    items: [
      {link: AppRoute.COURSES, text: `Все курсы`},
      {link: AppRoute.EVENTS, text: `Мероприятия`},
      {link: AppRoute.KNOWLEDGE_BASE, text: `База знаний`},
      {link: AppRoute.CAREER, text: `Карьера`},
    ]
  },
  footer: {
    className: `footer__menu menu`,
    listClassName: `menu__list menu__list--footer`,
    linkClassName: `menu__link menu__link--footer`,
    items: [
      {link: AppRoute.ROOT, text: `Об академии`},
      {link: AppRoute.EVENTS, text: `Мероприятия`},
      {link: AppRoute.NEWS, text: `Новости`},
      {link: AppRoute.KNOWLEDGE_BASE, text: `База знаний`},
      {link: AppRoute.CAREER, text: `Карьера`},
      {link: AppRoute.CONTACTS, text: `Контакты`}
    ]
  },
};
