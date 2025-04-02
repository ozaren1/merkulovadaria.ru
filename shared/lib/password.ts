import bcrypt from 'bcryptjs';

// Функция для создания соли и хэширования пароля
export const saltAndHashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);  // Генерация соли с количеством раундов (10)
  return bcrypt.hashSync(password, salt);// Хэширование пароля с солью
};
