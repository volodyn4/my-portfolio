# React SPA Portfolio

## 📌 Описание

Одностраничное React-приложение (SPA), разработанное в рамках практической работы по МДК 02.02.  
Содержит:

- Раздел "Обо мне"
- Навыки с прогресс-барами
- Образование и опыт работы
- Контактную форму
- Контейнеризацию через Docker + nginx
![Portfolio Screenshot](./public/site.PNG) 

## 🐳 Docker 

### 📦 Сборка Docker-образа

Для создания Docker-образа выполните команду:
docker build -t my-react-app .
![Результат сборки](./public/docker.PNG) 

### ▶️ Запуск контейнера

Запустите приложение с помощью docker-compose:
docker compose up --build .
![Приложение запущено, контейнер работает](./public/docker1.PNG)

### Ссылка на проект https://github.com/volodyn4/my-portfolio