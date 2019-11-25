<template>
    <div>|
        <h1>Tareas</h1>

        <h2>{{valid}}</h2>
<v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row>
          <v-col cols="12" md="4">   

            <v-text-field
              v-model="password"
              :rules="passRules"
              :counter="6"
              label="Contraseña"
              required
            >
            </v-text-field>
          </v-col>
      </v-row>

      <v-btn small class="secondary" :disabled="!valid">Guardar</v-btn>

    </v-container>
  </v-form>
    </div>
</template>


<script>
export default {
    name: 'tareas',

     data: () => ({
      valid: false,
      minName: 8,
      firstname: '',
      lastname: '',
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than ' + this.minName +  ' characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

      passRules: [
          v=> !!v || 'La contraseña es requerida',
          v=> v.length >= 6 || 'La contraseña debe tener minimo 6 caracteres',
      ]
    }),
}
</script>
