<template>
  <NavBar />
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>Record your query and we will reply</h3>
    <form>
      <div class="container px-4 text-center">
        <div class="row gx-5">
          <div class="col">
            <div class="form-floating mb-3 xs-12">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Your Name"
                v-model="name"
                required
              />
              <label for="floatingInput">Full Name</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3 xs-12">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="email"
                required
              />
              <label for="floatingInput">Email address</label>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-4 text-center">
        <div class="row gx-5">
          <div class="col">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style="height: 100px"
                v-model="query"
                required
              ></textarea>
              <label for="floatingTextarea2">Your Query</label>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-4 text-center">
        <div class="row gx-5">
          <div class="col">
            <input
              class="button"
              type="submit"
              v-on:click="submit"
              v-on:submit.prevent="submit"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
  },
  data() {
    return {
      name: "",
      email: "",
      query: "",
    };
  },
  methods: {
    submit() {
      if (this.name === "" || this.email === "" || this.query === "") {
        alert("Please fill all the fields");
      } else {
        alert("Thank you " + this.name + " for your query");
        this.name = "";
        this.email = "";
        this.query = "";
      }
    },
  },
};
</script>
<style>
.container {
  margin-top: 10px;
}
.form-control {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid red;
  border-radius: 10px;
  box-sizing: border-box;
}

.button {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid red;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}
</style>
