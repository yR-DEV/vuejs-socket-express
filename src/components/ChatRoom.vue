<template>
  <div class="card mt-3">
    <div class="card-body">
      <div class="card-title">
        <h3>Chat Group</h3>
          <hr>
      </div>
      <div class="card-body">
        <div class="messages">
                  
        </div>
      </div>
    </div>
    <div class="card-footer">
      <form @submit.prevent="sendMsg">
        <div class="form-group">
          <label for="user">usR: </label>
          <input type="text" v-model="user" class="form-control">
        </div>
        <div class="form-group pb-3">
          <label for="message">msG: </label>
          <input type="text" v-model="message" class="form-control">
        </div>
        <button type="submit" class="btn btn-success">post reQuest</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatRoom',
  props: {
    messge: String,
    user: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
