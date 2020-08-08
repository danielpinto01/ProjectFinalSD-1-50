<template>
  <div class="registry">
    <div class="container">
      <label>Nombre</label>
      <input class="form-control" id="inputName" />

      <label>Ciudad</label>
      <input class="form-control" id="inputCity" />

      <div class="container">
        <div class="row">
          <div class="mx-auto">
            <label>Foto</label>
            <input type="file" class="form-control-file" id="inputPhoto" />
            <p></p>
          </div>
        </div>
      </div>

      <button type="btnRegisterPerson" class="btn btn-warning">Registrarse</button>
    </div>
  </div>
</template>