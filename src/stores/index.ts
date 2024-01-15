import { ref, computed } from "vue"
import { defineStore } from "pinia"

const personStore = defineStore("person", () => {

  const firstName = ref(undefined as string | undefined)
  const lastName = ref(undefined as string | undefined)
  const birthday = ref(undefined as string | undefined)
  const email = ref(undefined as string | undefined)
  const age = ref(undefined as number | undefined)
  const otherInfo = ref(undefined as string | undefined);

  const getFirstName = computed(() => firstName)
  const getLastName = computed(() => lastName)
  const getBirthday = computed(() => birthday)
  const getEmail = computed(() => email)
  const getAge = computed(() => age)
  const getOtherInfo = computed(() => otherInfo)


  function setFirstName(value: string) {
    firstName.value = value
  }

  function setLastName(value: string) {
    lastName.value = value
  }

  function setBirthday(value: string) {
    birthday.value = value
  }

  function setEmail(value: string) {
    email.value = value
  }

  function setAge(value: number) {
    age.value = value
  }

  function setOtherInfo(value: string) {
    otherInfo.value = value
  }

  return {
    firstName,
    lastName,
    birthday,
    email,
    age,
    otherInfo,
    getFirstName,
    getLastName,
    getBirthday,
    getEmail,
    getAge,
    getOtherInfo,
    setFirstName,
    setLastName,
    setBirthday,
    setEmail,
    setAge,
    setOtherInfo
  }
})

export default personStore;