<template>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">{{ label }}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="select" :class="{ 'is-rounded': isRounded }">
            <select :multiple="isMultiple" @change="onValueChange">
              <option v-for="item in items" :key="item.value" :value="item.value">{{ item.label }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { ELanguageList, ISelectOption, TSelectOptions } from '@/types'

const {
  value,
  label,
  items,
  isMultiple,
  isRounded
} = defineProps<{
  value: string,
  label?: string,
  items: TSelectOptions,
  isMultiple: boolean,
  isRounded: boolean
}>()

const emit = defineEmits<{
  (eventName: 'change', value: ISelectOption | undefined): void
}>()

const onValueChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const targetOption: ISelectOption | undefined = items.find((item: ISelectOption) => item.value === target.value )
  if (targetOption?.label) {
    emit('change', {
      value: targetOption.value,
      label: targetOption.label
    })
  }
}
</script>

<style lang="scss" scoped>
</style>