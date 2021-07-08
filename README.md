# Settings

## Pré-configurações

---

### Dockerfile

  ```dockerfile
    CMD ["npm", "run", "dev"]
  ```

* `dev` é o script criado no package.json, se ele for alterado, tbm temos que alterar no Dockerfile

## Passos

* Executar o docker file na raiz do projeto.

  ```powershell
    docker build -t imageNameExample .
  ```

* Iniciar servidor no docker

  ```powershell
    docker run -p 3333:3333 imageNameExample
  ```
