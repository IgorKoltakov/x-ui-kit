<template>
  <button :class="['btn', `btn_${color}`, { 'btn_outlined': outlined }, { 'btn_rounded': rounded }, {'btn_large': size === 'large' }]"
    :disabled="disabled" @click="handlerClick">{{ label }}</button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  color: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  outlined: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'normal'
  }
})

const emit = defineEmits(['click'])

const handlerClick = () => {
  emit('click')
}
</script>

<style scoped>
.btn {
  height: 41px;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  transition: var(--transition);
}

.btn_primary {
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.btn_secondary {
  background-color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
}

.btn_success {
  background-color: var(--color-success);
  border: 1px solid var(--color-success);
}

.btn_warning {
  background-color: var(--color-warning);
  border: 1px solid var(--color-warning);
}

.btn_error {
  background-color: var(--color-error);
  border: 1px solid var(--color-error);
}

.btn_outlined {
  background-color: transparent;
  color: var(--color-text);
}

.btn_rounded {
  border-radius: 20px;
}

.btn_large {
  height: 51px;
  padding: 0 30px;
}



.btn:enabled:hover {
  opacity: .8;
}

.btn:disabled {
  opacity: .4;
  cursor: default;
}
</style>