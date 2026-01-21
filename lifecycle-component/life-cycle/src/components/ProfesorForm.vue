<template>
  <div class="containerTotal">
  <div class="optionsContainer">
    <section class="">
      <h3>Añadir profesor</h3>
      <form class="formTotal">
        <div class="inputForm">
          <label>Nombre: </label
          ><input type="text" v-model="teacher.teacherName" />
        </div>
        <div class="inputForm">
          <label>Apellido: </label
          ><input type="text" v-model="teacher.teacherSurname" />
        </div>
        <div class="inputForm">
          <label>DNI: </label><input type="text" v-model="teacher.teacherDNI" />
        </div>
        <div class="inputForm">
          <label>Materias:</label
          ><input type="text" v-model="newSubject" /><button
            @click.prevent="addSubject()"
          >
            Añadir
          </button>
        </div>
        <div class="inputForm inputCheck">
          <input type="checkbox" v-model="teacher.documentation" />
          Documentación entregada
        </div>
        <button @click.prevent="addTeacher()">Guardar</button>
      </form>
    </section>
    <h3>Eliminar profesor</h3>
    <section>
      <form class="formDeleteTeacher">
        <div class="inputForm">
          <label>DNI del profesor: </label
          ><input type="text" v-model="dniToDelete" />
        </div>
        <button @click.prevent="deleteTeacher(dniToDelete)">
          Eliminar
        </button>
      </form>
    </section>
  </div>
  <div class="listContainer">
      <table>
        <thead>Listado de Profesores:</thead>
            <tbody>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Materias</th>
                <th>Documentación</th>
                
            </tr>
            <tr v-for="profesor in profesores" :key="profesor.teacherDNI">
                <td>{{ profesor.teacherName }}</td>
                <td>{{ profesor.teacherSurname }}</td>
                <td>{{ profesor.teacherDNI }}</td>
                <td>
                  <ul>
                    <li v-for="subject in profesor.teacherSubjects" :key="subject">{{ subject }}</li>
                  </ul>
                </td>
                <td v-if="profesor.documentation">Si</td>
                <td v-else>No</td>
            </tr>
        </tbody>
    </table>
    
    <!-- <ul class="listTeachers">
      <li
        class="itemListTeacher"
        v-for="profesor in profesores"
        :key="profesor.teacherDNI"
      >
        <div>Nombre: {{ profesor.teacherName }}</div>
        <div>Apellido: {{ profesor.teacherSurname }}</div>
        <div>DNI: {{ profesor.teacherDNI }}</div>
        <div>
          Presentó documentación: {{ profesor.documentation ? "Sí" : "No" }}
        </div>
      </li>
    </ul> -->
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let profesores = ref([]);

let teacher = ref({
  teacherName: "",
  teacherSurname: "",
  teacherDNI: "",
  teacherSubjects: [],
  documentation: false,
});

let newSubject = ref("");

function addSubject() {
  const s = newSubject.value && newSubject.value.trim();
  if (s) {
    teacher.value.teacherSubjects.push(s);
    newSubject.value = "";
  }
}

function addTeacher() {
  profesores.value.push({
    teacherName: teacher.value.teacherName,
    teacherSurname: teacher.value.teacherSurname,
    teacherDNI: teacher.value.teacherDNI,
    teacherSubjects: [...teacher.value.teacherSubjects],
    documentation: teacher.value.documentation,
  });
  // limpiar formulario
  teacher.value = {
    teacherName: "",
    teacherSurname: "",
    teacherDNI: "",
    teacherSubjects: [],
    documentation: false,
  };
  newSubject.value = "";
}

let dniToDelete = ref("");
function deleteTeacher(dni) {
  profesores.value = profesores.value.filter(
    (profesor) => profesor.teacherDNI !== dni
  );
  dniToDelete.value = "";
}
</script>

<style scoped>
.formTotal {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 300px;
  border: 1px solid rgb(139, 139, 139);
  padding: 10px;
  justify-content: space-around;
}
.optionsContainer {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.containerTotal {
  display: flex;
  justify-content: space-around;
  
}
.listContainer {
  width: 40%;
}
.inputForm {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
}
.inputCheck {
  justify-content: center;
}
.listTeachers {
  list-style-type: none;
}
.itemListTeacher {
  margin-bottom: 20px;
}

.formDeleteTeacher {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100px;
  border: 1px solid rgb(139, 139, 139);
  padding: 10px;
  justify-content: space-around;
}
th{
    text-align: left;
    padding-left:5px;
    padding-right: 50px;
    min-width: 50px;
    border:1px solid white;
}
td{
    padding-right: 50px;
    min-width: 50px;
    padding-left:5px;
    border:1px solid white;
}
</style>
