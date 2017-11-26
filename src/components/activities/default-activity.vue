<script>
import ActivityBehaviorMixin from '~mixins/activity-behavior-mixin';

export default {
  extends: ActivityBehaviorMixin,
  data: () => ({

  }),
};
</script>

<template>
  <div class="default-activity" @click.self="close">
    <div class="default-activity__wrapper">
      <div class="activity-header" @click="close">
        <i class="material-icons">arrow_back_ios</i>
        <slot name="caption">Заголовок</slot>
      </div>
      <div class="default-activity__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '~styles/variables.less';

.activity {
  &-header {
    display: flex;
    align-items: center;
    padding-bottom: @indent-sm;
    font-size: @font-md;
    border-bottom: 1px solid @light;
    color: @gray-dark;

    .material-icons {
      font-size: @font-md;
      color: @gray;
    }
  }
}

.default-activity {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(255, 255, 255, .7);

  &__caption {

  }

  &__wrapper {
    background: @white;
    min-height: 600px;
    border-bottom: 2px dashed @gray;
    // box-shadow: 0 5px 10px -3px rgba(0, 0, 0, .1);
  }

  &__content {
    padding: @indent-sm 0;
    font-size: @font-sm;
  }
}
</style>
