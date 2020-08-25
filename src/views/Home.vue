<template>
  <div class="container">
    <div class="button-container">
      <div>
        <router-link to="/topheadline">
          <button class='button button-blue mb-05 button-fit'>topheadline</button>
        </router-link>
        <router-link to="/usersearch">
          <button class='button button-blue mb-05 button-fit'>usersearch</button>
        </router-link>
        <router-link to="/profile">
          <button class='button button-blue mb-05 button-fit'>profile</button>
        </router-link>
      </div>
      <div>
        <router-link to="/">
          <button class='button button-orange mb-1 button-fit'>To opening</button>
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<style scoped>
  .container {
    width: 97vw;
    height: 97vh;
    display: flex;
    justify-content: space-between;
  }
  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 10%;
    padding: 1em;
    background-color: rgba(255, 255, 255, .3);
    border-radius: 5px;
  }
  .content-container {
    width: 90%;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 5px;
    margin-left: 1rem
  }
  .button-fit {
    width: 100%;
  }
</style>
<script>
export default {
  name: 'Body',
  components: {
  }
}
</script>
