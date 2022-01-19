import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';
const url = 'https://vue3-course-api.hexschool.io/v2';
const path = 'zen777';
const app = createApp ({
  data() {
    return {
      products: [],
      temp: {}
    }
  },
  methods: {
    userCheck() {
      // 驗證
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      axios.defaults.headers.common['Authorization'] = token;
      axios
        .post(`${url}/api/user/check`)
        .then((res) => {
          this.getProducts();
        })
        .catch((err) => {
          alert(err.data.message);
          window.location = 'index.html';
        })
    },
    getProducts() {     
      axios
        .get(`${url}/api/${path}/admin/products`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          console.dir(err);
        })
    },  
  },
  created() {    
    this.userCheck()
  }
})
app.mount('#app');
