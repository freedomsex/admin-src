<script>
import moment from 'moment';
import 'moment/locale/ru';

export default {
  props: ['last', 'sex'],
  computed: {
    sayTime() {
      return moment.duration(this.last * 1, 'seconds').humanize(); // this.time ? Math.round(this.time / 86400) : 0;
    },
    color() {
      const day = 86400;
      return {
        br_ored: this.time < 777,
        br_oyel: this.time < day,
        br_ogrn: this.time < day * 3,
      };
    },
    gender() {
      return `profile-user__icon${parseInt(this.sex, 10) > 1 ? '-women' : '-human'}`;
    },
  },
};
</script>

<template>
  <div class="profile-info__gender">
    <span id="profile-info__old" :class="color">
      <span class="profile-info__old-text">{{sayTime}}</span>
      <span :class="gender"></span>
    </span>
  </div>
</template>

<style lang="less" scoped>
@import '~styles/variables.less';

#profile-info__old {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    color: @dark-light;
    font-size: 14px;
    //margin-left: @indent-sm;
    background: @light;
    padding-left: @indent-sm;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border: 1px solid @gray;
    border-width: 1px 0px 1px 2px;
}
.profile-info__old-text {
    display: inline-block;
    position: relative;
    top: 1px;
}


.profile-user__icon {
    width: 32px;
    height: 32px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    margin-left: @indent-xs;
    right: -2px;
    background-color: @white;
    background-size: cover;
    border-radius: 35px;
    opacity: 0.7;
}

.profile-user__icon-human {
    .profile-user__icon;
    background-image: url("images/human-icon.png");
    background-color: @purpur-light;
}

.profile-user__icon-women {
    .profile-user__icon;
    background-image: url("images/women-icon.png");
    background-color: @pink-light;
}
</style>
