<template>
  <main>
    <div class="container">
      <div class="header">
        <div class="search">
          <input
              type="text"
              placeholder="Поиск"
          >
        </div>
      </div>

      <div class="dialogs">
        <router-link 
              v-for="dialog of dialogs" 
              :to="`/messages/1`">
          <div class="dialog">
            <div class="title">
              <h3>{{ dialog.title }}</h3>
              <time>{{ dialog.dataTime }}</time>
            </div>
            <div class="last-message">
              <p>{{ dialog.lastMessage }}</p>
            </div>
          </div>
        </router-link>

        <router-link :to="`/messages/2`">
          <div class="dialog">
            <div class="title">
              <h3>Список покупок</h3>
              <time>10:00</time>
            </div>
            <div class="last-message">
              <p>1кг яблок</p>
            </div>
          </div>
        </router-link>

        <router-link :to="`/messages/3`">
          <div class="dialog">
            <div class="title">
              <h3>Домашние задания</h3>
              <time>10:00</time>
            </div>
            <div class="last-message">
              <p>Математика: 157, 158, 159</p>
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
            Добавить новый дилог
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
      dialogs: [], 
      title: ''
    };
  },

  computed: {},

  watch: {},

  created() {
  },

  mounted() {
  },

  methods: {
    addDialog() {
      this.dialogs.push({
        title: this.title, 
        dataTime: Date.now(), 
        lastMessage: 'Нет сообщений'
      })

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

    p {
      color: #717579;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
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
