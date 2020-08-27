<template>
  <div class='form-container'>
    <div class='form-inner'>
      <input class='input-text' type="text" placeholder="Username / email">
      <input class='input-text' type="password" placeholder="Password">
      <button class='button button-orange p-1'>Login</button>
    </div>
  </div>
</template>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.form-inner {
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: center;
  width: 40%;
  background-color: rgba(255, 255, 255, .9);
  border-radius: 5px;
}
.input-text {
  margin: 1rem;
  padding: 1rem;
}
.p-1 {
  margin: 1rem;
}

</style>

<script>
export default {
  components: {
  },
  data () {
    return {
      skill1: 'python'
    }
  }
}
</script>
