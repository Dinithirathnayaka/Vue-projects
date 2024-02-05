<template>
  <h1 class="text-3xl text-center">Vue Calendar</h1>

  <div class="w-3/4 mx-auto mt-10 text-center">
    <section class="flex justify-between mx-10">
      <h2 class="text-2xl text-left text-bold">{{ currentMonthName }}</h2>
      <h2 class="text-2xl text-left text-bold">{{ currentYear }}</h2>
    </section>

    <section class="flex flex-wrap">
      <p
        class="my-4 text-2xl text-center"
        v-for="day in days"
        :key="day"
        style="width: 14.28%"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-2xl text-center"
        v-for="num in startDay()"
        :key="num"
        style="width: 14.28%"
      ></p>
      <p
        class="text-2xl text-center"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currentDateClass(num)"
        style="width: 14.28%"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4">
      <button class="px-2 border rounded" @click="prev">Prev</button>
      <button class="px-2 border rounded" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },

  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },

    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },

    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },

    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },

    currentDateClass(num) {
      const calenderFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calenderFullDate === currentFullDate ? "text-red-500" : "";
    },
  },

  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        "default",
        { month: "long" }
      );
    },
  },
};
</script>

<style></style>
