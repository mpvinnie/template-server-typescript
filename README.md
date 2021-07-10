# Getting Started

Template de servidor node configurado com typescript, linting, database, docker, schema validation, jest, ddd structure.

## Pré-requisitos

* [Docker](https://www.docker.com/)
* [docker-compose](https://docs.docker.com/compose/install/)
* [Git](https://git-scm.com/)

## Configurações e Informações

* Clone o repositório em um diretório de preferência usando o git.

  ```bash
  git clone https://github.com/mpvinnie/template-server-typescript.git server_name
  ```

* Em um terminal vá até o diretório e instale as dependências.

  ```bash
  npm install

  ou

  yarn
  ```

### package-json

  ```json
  {
    "name": "template-server-typescript", // nome do servidor node
    "version": "1.0.0",
    "main": "index.js",
    "author": "Vinicius Peres <vinniemalafaia@hotmail.com>", // nome e email do author
    "license": "MIT",
  }
  ```

### Dockerfile

  ```dockerfile
    CMD ["npm", "run", "dev"]
  ```

* `dev` é o script criado no package.json, se ele for alterado, também temos que alterar no Dockerfile.

### Database

* Por padrão o driver do postgres `pg` já vem instalado e configurado, se quiser utilizar outro banco de dados basta remover o driver do postgres, adicionar outro e alterar as configurações de conexão no arquivo `ormconfig.json` e `docker-compose.yml`.

## Passos

Antes de executar os serviços é preciso trocar as configurações do container de banco de dados e do app.

### docker-compose.yml

```yaml
  version: "3.9"

  services:
    container_database_name: # nome do container do banco de dados
      image: postgres # nome da imagem
      container_name: container_database_name # mesmo nome do container do banco de dados.
      restart: always
      ports:
        - 5432:5432 # porta que será acessada
      environment:
        - POSTGRES_USER=docker # nome de usuário para acessar o banco
        - POSTGRES_PASSWORD=docker # senha para acessar o banco
        - POSTGRES_DB=database_name # nome do banco de dados
      volumes:
        - pgdata:/data/postgres # volume que ficará armazenado o container
    app: # serviço que rodará o servidor node
      build: .
      container_name: container_app_name # nome do container do app
      ports:
        - 3333:3333 # porta que será acessada
      volumes:
        - .:/usr/app # volume que ficará armazenado o container
      links:
        - container_database_name # faz o link entre o app e o database (mesmo nome do service de banco de dados)
      depends_on:
        - container_database_name # nome do servico que o app depende (mesmo nome do service de banco de dados)


  volumes:
    pgdata:
      driver: local

```

### typeorm/index.ts

  ```ts
    getConnectionOptions().then(options => {
      const newOptions = options as IOptions

      newOptions.host = 'container_database_name' // nome do service (container) do banco de dados

      createConnection({
        ...options
      })
    })
  ```

### ormconfig.json

  ```json
  {
    "type": "postgres",
    "port": 5432, // mesma porta do database no docker-compose.yml
    "host": "localhost",
    "username": "docker",  // mesmo username do database no docker-compose.yml
    "password": "docker",  // mesma senha do database no docker-compose.yml
    "database": "database_name",  // mesmo nome do database no docker-compose.yml
    "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
    },
    "entities": [
      "./src/modules/**/infra/typeorm/entities/*.ts"
    ]
  }
  ```

### Opcional

* Este passo só deve ser seguido caso queira testar a criação e listagem de todos.

  ```node
    yarn typeorm migration:run
  ```

* Após configurar os services basta executar o comando abaixo para fazer o build e iniciar o servidor a partir do docker-compose.

  ```node
    yarn dev:server
  ```
