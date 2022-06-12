<script>
import { defineAsyncComponent } from 'vue'
import { getDayMonthYear } from '@/modules/daybook/helpers/getDayMonthYear'
import { mapGetters } from 'vuex'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    FloatingActionBtn: defineAsyncComponent(() => import('@/modules/daybook/components/FloatingActionBtn'))
  },
  data () {
    return {
      entry: null
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntryById']),
    day () {
      const { day } = getDayMonthYear(this.entry.date)
      return day
    },
    month () {
      const { month } = getDayMonthYear(this.entry.date)
      return month
    },
    yearDay () {
      const { yearDay } = getDayMonthYear(this.entry.date)
      return yearDay
    }
  },
  methods: {
    loadEntry () {
      const entry = this.getEntryById(this.id)
      if (!entry) return this.$router.push({ name: 'no-entry' })
      this.entry = entry
    }
  },
  created () {
    this.loadEntry()
  },
  watch: {
    id () {
      this.loadEntry()
    }
  }
}
</script>

<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3 ">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>
      <div>
        <button class="btn btn-danger mx-2">
          Delete
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary mx-2">
          Upload Image
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="What happened today?" v-model="entry.text"></textarea>
    </div>
    <img
      src="https://images.pexels.com/photos/227517/pexels-photo-227517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="entry picture"
      class="img-thumbnail"
    >
  </template>
  <FloatingActionBtn icon="fa-save"/>
</template>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  resize: none;
  &:focus {
    outline: none
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 10px rgb($color: #333, $alpha: 0.2)
}
</style>
