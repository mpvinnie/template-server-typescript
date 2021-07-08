# Settings

## Pré-configurações

---

### Dockerfile

  ```dockerfile
    CMD ["npm", "run", "dev"]
  ```

* `dev` é o script criado no package.json, se ele for alterado, tbm temos que alterar no Dockerfile.

## Passos

### docker-compose.yml

* Trocar o nome do container na propriedade `container_name`

* Executar o build para criar o container e configurar tudo (só precisa executar uma vez). _Para iniciar o servidor execute `docker-compose start`_

  ```powershell
    docker-compose up
  ```
