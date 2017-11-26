import Vue from 'vue';
// import 'material-design-icons/styles.css'; // CSS

import '~legacy/comm-list';
import '~legacy/idea-list';
import '~legacy/revs-list';
import '~legacy/help-list';
import '~legacy/quick-word';
import '~legacy/extra';

import TimeStatus from '~components/profile-user/time-status.vue';
import ProfileStatusWidget from '~components/profile-user/profile-status-widget.vue';

import ApiPlugin from '~plugins/api-vue-plugin';
import App from './App.vue'; // For main.less only

Vue.use(ApiPlugin);

new Vue({ // eslint-disable-line no-new
  el: '#page_cont',
  // render: h => h(App),
  mounted() {

  },
  components: {
    App,
    TimeStatus,
    ProfileStatusWidget,
  },
});
// console.log(A);
