<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>

      <p
        class="w-32 h-10 mt-10 overflow-x-scroll text-3xl text-right scrollbar-hide"
        style="direction: rtl; scrollbar-width: none; -ms-overflow-style: none"
      >
        {{ currentNum }}
      </p>
      <div class="h-10">
        <small v-if="selectedOperation"
          >{{ prevNum }}{{ selectedOperation }}{{ currentNum }}</small
        >
      </div>

      <div class="grid grid-cols-4 gap-1">
        <button
          @click="pressed('1')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          6
        </button>
        <button
          @click="pressed('-')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          -
        </button>
        <button
          @click="pressed('7')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          9
        </button>
        <button
          @click="pressed('*')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          *
        </button>
        <button
          @click="pressed('c')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          c
        </button>
        <button
          @click="pressed('0')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          0
        </button>

        <button
          @click="pressed('=')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import useWindowEvent from "../components/utiities/composition/useWindowEvent";
export default {
  setup() {
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const currentNum = ref("");
    const prevNum = ref("");
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=" || value === "Enter") calculate();
      else if (value === "c") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }

    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }

    function applyOperation(value) {
      calculate();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
    }

    function calculate() {
      if (selectedOperation.value === "*") multiply();
      else if (selectedOperation.value === "/") divide();
      else if (selectedOperation.value === "-") subtract();
      else if (selectedOperation.value === "+") sum();

      prevNum.value = "";
      selectedOperation.value = "";
    }

    function multiply() {
      currentNum.value = prevNum.value * currentNum.value;
    }

    function divide() {
      currentNum.value = prevNum.value / currentNum.value;
    }

    function subtract() {
      currentNum.value = prevNum.value - currentNum.value;
    }

    function sum() {
      currentNum.value = +prevNum.value + +currentNum.value;
    }

    function clear() {
      currentNum.value = "";
    }

    const handleKeydown = (e) => pressed(e.key);

    useWindowEvent("keydown", handleKeydown);

    return {
      pressed,
      applyOperation,
      calculate,
      clear,
      selectedOperation,
      prevNum,
      currentNum,
      multiply,
      divide,
      subtract,
      sum,
    };
  },
};
</script>

<style></style>
