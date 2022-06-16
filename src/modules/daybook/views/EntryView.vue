<script>
import { defineAsyncComponent } from 'vue'
import { getDayMonthYear } from '@/modules/daybook/helpers/getDayMonthYear'
import { uploadImage } from '@/modules/daybook/helpers/uploadImage'
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  props: {
    id: {
      type: String,
      required: true,
      file: null
    }
  },
  components: {
    FloatingActionBtn: defineAsyncComponent(() => import('@/modules/daybook/components/FloatingActionBtn'))
  },
  data () {
    return {
      entry: null,
      localImage: null
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
    ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
    loadEntry () {
      let entry
      if (this.id === 'new') {
        entry = {
          text: '',
          date: new Date().getTime()
        }
      } else {
        entry = this.getEntryById(this.id)
        if (!entry) return this.$router.push({ name: 'no-entry' })
      }
      this.entry = entry
    },
    async saveEntry () {
      Swal.fire({
        title: 'Saving...',
        allowOutsideClick: false
      })
      Swal.showLoading()
      this.entry.picture = await uploadImage(this.file)
      if (this.entry.id) {
        await this.updateEntry(this.entry)
      } else {
        const id = await this.createEntry(this.entry)
        this.$router.push({ name: 'entry', params: { id } })
      }
      this.file = null
      Swal.fire('Saved', 'Entry saved correctly.', 'success')
    },
    async onDeleteEntry () {
      const { isConfirmed } = await Swal.fire({
        title: 'Are you sure?',
        text: 'Once removed, it cannot be recovered.',
        showDenyButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Yes, I\'m sure'
      })
      if (isConfirmed) {
        Swal.fire({
          title: 'Wait...',
          allowOutsideClick: false
        })
        Swal.showLoading()
        await this.deleteEntry(this.entry.id)
        this.$router.push({ name: 'no-entry' })
        Swal.fire('Deleted!', '', 'success')
      }
    },
    onSelectedImage (event) {
      const file = event.target.files[0]
      if (!file) {
        this.localImage = null
        this.file = null
        return
      }
      this.file = file
      const reader = new FileReader()
      reader.onload = () => {
        this.localImage = reader.result
      }
      reader.readAsDataURL(file)
    },
    onSelectImage () {
      this.$refs.imageSelector.click()
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
        <input type="file" @change="onSelectedImage" ref="imageSelector" v-show="false" accept="image/png, image/jpeg, image/gif, image/svg">
        <button v-if="entry.id" @click="onDeleteEntry" class="btn btn-danger mx-2">
          Delete
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary mx-2" @click="onSelectImage">
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
      v-if="entry.picture && !localImage"
      :src="entry.picture"
      alt="entry picture"
      class="img-thumbnail"
    >
    <img
      v-if="localImage"
      :src="localImage"
      alt="entry picture"
      class="img-thumbnail"
    >
  </template>
  <FloatingActionBtn icon="fa-save" @on:click="saveEntry"/>
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
