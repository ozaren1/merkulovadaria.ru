# Используем стандартный образ Node.js
FROM node:22-alpine

# Устанавливаем рабочую директорию
WORKDIR /home/app

# Копируем package.json и lock-файл для установки зависимостей
# Этот шаг кэшируется, и npm install не будет запускаться каждый раз,
# если зависимости не менялись.
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Команда по умолчанию (будет переопределена в docker-compose.dev.yml)
CMD ["npm", "run", "start:dev"]