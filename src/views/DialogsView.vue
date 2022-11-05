<template>
  <main>
    <div class="container">
      <div class="header">
        <div class="search">
          <input
              type="text"
              placeholder="Поиск" 
              v-model="inp"
          >
        </div>
      </div>

      <div class="dialogs">
        <router-link 
              v-for="dialog in sortedDialogs" 
              :key="dialog.id"
              :to="`/messages/${dialog.id}`">

          <div class="dialog">
            <div class="title">
              <h3>{{ dialog.title }}</h3> 
              <time>{{ dialog.dataTime }}</time>
            </div>
            <div class="last-message">
              <p>{{ dialog.lastMessage }}</p> 
              <button class="btn" @click="() => deleteDialog(dialog.id)">/</button>
            </div>
          </div> 

        </router-link>
      </div>

      <div class="footer">
        <div class="form">
          <div class="new-dialog">
            <input
                type="text"
                placeholder="Название"
                v-model="title"
            >
          </div>
          <button @click="this.addDialog">
            Добавить новую заметку 
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  props: {},

  data() {
    return {
      dialogs: this.getDialog(), 
      title: '', 
      inp: '' 
    };
  },

  computed: {
    sortedDialogs() { 
      return this.dialogs.filter(el => {
        return el.title.includes(this.inp)  
      }) 
    } 
  },

  watch: {},

  created() {
  },

  mounted() {
  },

  methods: {
    addDialog() {
      let date = new Date; 
      this.dialogs.splice(0, 0, {
        title: this.title, 
        dataTime: `${date.getHours()}:${date.getMinutes()}`,
        lastMessage: 'Нет сообщений', 
        id: Date.now()
      }) 
      this.title = '' 
      this.saveDialog() 
    }, 
    saveDialog() {
      localStorage.setItem('dialog', JSON.stringify(this.dialogs))
    }, 
    getDialog() { 
      let dialog = JSON.parse(localStorage.getItem('dialog')) 
      return dialog != undefined ? dialog : [] 
    }, 
    deleteDialog(id) {
      this.dialogs = this.dialogs.splice(id, 1)
      console.log(this.dialogs) 
      this.saveDialog() 
    }
  }, 
}
</script>

<style scoped lang="scss">
.dialogs {
  margin-top: 10px;
  height: 100%;
  overflow-y: auto;
}

.dialog {
  margin-top: 5px;
  border-radius: 5px;
  padding: 10px 15px;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: end;

    h3 {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    time {
      font-size: 12px;
      color: #999;
    }
  }

  .last-message {
    margin-top: 5px; 
    display: flex;
    justify-content: space-between;

    p {
      color: #717579;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    } 

    .btn {
      height: 20px; 
      width: 25px; 
      background-color: #464646; 
      color: black; 
      border: none; 
      font-weight: 500; 
      border-radius: 5px; 
      transition-property: background-color, text-shadow; 
      transition-duration: 0.3s;
    }

    .btn:hover {
      background-color: #202020; 
      color: white; 
      text-shadow: 0 0 2px white;
    }
  }

  &:hover {
    background: #2c2c2c;
  }
}

.footer {
  height: 100px;

  .form {
    .new-dialog {
      width: 100%;
    }

    button {
      width: 100%;
      padding: 10px;
      border: 0;
      border-radius: 5px;
      font-size: 16px;
      color: #fff;
      background: #2c2c2c;
      outline: none;
      cursor: pointer;
      margin-top: 10px;
    }
  }
}
</style>
