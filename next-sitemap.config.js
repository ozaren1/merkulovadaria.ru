/** @type {import('next-sitemap').IConfig} */
const getCurrentDate = () => {
  const currentDate = new Date();
  return currentDate.toISOString(); // Преобразуем в ISO формат
};

module.exports = {
  siteUrl: 'https://merkulovadaria.ru/', // Замените на ваш домен
  generateRobotsTxt: true, // (Опционально) Сгенерировать robots.txt
  transform: async (config, path) => {
      // Устанавливаем приоритеты на основе URL
      let priority = 0.7; // значение по умолчанию
      if (path === '/') {
          priority = 1.0; // Главная страница
      } else if (path === '/contact') {
          priority = 0.8; // Страница контактов
      } else if (path.startsWith('/portfolio')) {
          priority = 0.6; // Страницы портфолио
      }

      return {
          loc: path,
          lastmod: getCurrentDate(),
          changefreq: 'daily',
          priority: priority,
      };
  },
};
