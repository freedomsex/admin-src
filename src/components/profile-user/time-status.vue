<script>
import UserDataHistoryActivity from '~components/activities/user-data-history-activity.vue';
import ProfileOldWidget from './widgets/profile-old-widget.vue';
import ProfileLastWidget from './widgets/profile-last-widget.vue';

export default {
  props: ['user', 'time', 'last'],
  data: () => ({
    dialogs: {
      userDataHistory: false,
    },
  }),
  components: {
    ProfileOldWidget,
    ProfileLastWidget,
    UserDataHistoryActivity,
  },
};
</script>

<template>
  <div class="">
    <div class="profile-info__main">
      <profile-last-widget :last="last" :sex="user.sex"></profile-last-widget>
      <profile-old-widget :time="time"></profile-old-widget>
      <span class="profile-info__link">
        <a class="gray_link" :href="`/${user.id}`" target="_blank">#{{user.id}}</a>
      </span>
    </div>

    <div class="user-info">
      <span class="user-info__wrapper">
        <a class="user-info__name" :href="`/${user.id}`" target="_blank">{{user.name}}</a>
        <span class="user-info__age">{{user.age}}</span>
        {{user.city}}
      </span>
      <button class="btn btn-default btn-xs" @click="dialogs.userDataHistory = true">
        <span aria-hidden="true" class="glyphicon glyphicon-time"></span>
        История
      </button>
      <span class="profile-info__age"></span>
      <user-data-history-activity v-if="dialogs.userDataHistory"
       @close="dialogs.userDataHistory = false">
      </user-data-history-activity>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '~styles/variables.less';

.profile-info__main {
  vertical-align: middle;
  position: relative;
  margin-bottom: @indent-md;
}

.user-info {
  margin-bottom: @indent-sm;
  font-size: @font-lg;
  &__wrapper {
    margin-right: @indent-xs;
  }
  &__name {
    font-size: @font-xl;
  }
  &__age {
    color: @orange-dark;
  }

}
</style>
