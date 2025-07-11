// tailwind用
import "@@css/site.css";

import axios from 'axios';

console.log("site.ts");

axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
