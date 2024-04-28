<h1 align="center"> Pinckemon </h1>
<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

This is a complete project of an app that uses the api of pokemon to shoe the pokemons and their details in a list and in a detail view.

En esta app se creo una lista una api propia del proyecto de pokemon para que los usuarios puedan guardar sus pokemones favoritos y ver los detalles de cada uno de ellos. En la api tambien cuenta con un sistema complejo de autenticacion y autorizacion de usuarios que va desde la autenticacion con google hasta la autenticacion con facebook y con el correo electronico.

La api esta cuenta con alto nivel de seguridad y de proteccion de datos de los usuarios. Esto para evitar que los datos de los usuarios sean robados o que los usuarios puedan ver los datos de otros usuarios.
<h2 align="center"> Video</h2>
<p align="center">
  <img src="" />
</p>

<h2 align="center" >Requistos para correr el proyecto</h2>

<div style="display: flex; gap:40px;">
    <div style="width: 50%; ">
        <ul>
            <li>
                 Nodejs
            </li>
            <li>
                 npm or pnpm
            </li>
            <li>
                andoid studio
            </li>
            <li>
                 contar con una cuenta de google para poder usar la autenticacion con google
            </li>
        </ul>
    </div>
    <div style="width: 50%; ">
        <ul>
            <li>        
                contar con una cuenta de facebook para poder usar la autenticacion con facebook.
            </li>
            <li>            
                 contar con las variables de entorno para poder correr el proyecto.
            </li>
            <li>                
                contar con una cuenta de firebase para poder usar la autenticacion con google y con facebook.
            </li>
            <li>                 
                contar con docker y docker-compose para poder correr la api y la base de datos.
            </li>
        </ul>
    </div>
</div>


## Install

```sh
npm install
```
## run the project
paso 1: correr el proyecto de la api y la base de datos con docker-compose
```sh
docker-compose up -d
``` 
paso 2: correr el proyecto de la app
```sh
npm run android 
    or 
pnpm android
```

## license
this project is under the MIT license.