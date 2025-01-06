#Base image
FROM node:20.15.0

#Create app directory
WORKDIR /usr/src/app

#Copie os arquivos de dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código fonte da aplicação
COPY . .

# Gere o Prisma Client
RUN npx prisma generate

# Exponha a porta em que o NestJS irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]