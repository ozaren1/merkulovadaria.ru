# Используем стандартный образ Node.js
FROM node:22-alpine

# Устанавливаем рабочую директорию
WORKDIR /home/app

# Копируем package.json и lock-файл
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Открываем порт
EXPOSE 3000

# Команда по умолчанию
CMD ["npm", "run", "dev"]