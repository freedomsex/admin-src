<script>
import moment from 'moment';
import 'moment/locale/ru';

import DefaultActivity from '~components/activities/default-activity.vue';

export default {
  props: ['userId'],
  data: () => ({
    items: [],
    loading: true,
  }),
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      const { data } = await this.$api('a4sex').load({ id: this.userId }, 'users/{id}/histories');
      this.items = data;
      this.loading = false;
    },
    analyse(index, key, value) {
      if (index && value) {
        return value != this.items[index - 1][key];
      }
      return false;
    },
    sex(value) {
      if (value) {
        return value == 2 ? '♀ Девушка' : '♂ Парень';
      }
      return '☯ Другой';
    },
    date(value) {
      return moment(value).fromNow();
    },
  },
  computed: {
  },
  components: {
    DefaultActivity,
  },
};
</script>

<template>
  <default-activity @close="$emit('close')">
    <span slot="caption">История данных</span>

    <table class="data-table">
      <tr class="row" v-for="(item, index) in items">
        <td class="cell" :class="{changed: analyse(index, 'sex', item.sex)}">{{sex(item.sex)}}</td>
        <td class="cell" :class="{changed: analyse(index, 'city', item.city)}">{{item.city}}</td>
        <td class="cell" :class="{changed: analyse(index, 'name', item.name)}">{{item.name}}</td>
        <td class="cell">➚ {{date(item.added)}}</td>
      </tr>

    </table>

    <div class="" v-if="loading">
      Загружаю...
    </div>
    <div class="" v-else-if="!items.length">
      Нет данных :(
    </div>


  </default-activity>
</template>

<style lang="less" scoped>
@import '~styles/variables.less';

.data-table {

  .row {
    border-bottom: 1px solid @gray;
  }
  .cell {
    padding: @indent-sm @indent-sm;
    &.changed {
      background: @red-light;
    }
  }
}
</style>
