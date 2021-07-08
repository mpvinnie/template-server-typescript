# Settings

## Pré-configurações

---

### Dockerfile

  ```dockerfile
    CMD ["npm", "run", "dev"]
  ```

* `dev` é o script criado no package.json, se ele for alterado, tbm temos que alterar no Dockerfile.

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

* Após configurar os services basta executar o comando abaixo para fazer o build a partir do docker-compose. _(Só é preciso executar uma vez. após isso é apenas basta executar o comando `docker-compose start` para iniciar o servidor)._

  ```powershell
    docker-compose up
  ```
