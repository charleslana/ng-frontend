<template>
  <div>
    <input id="checkbox" class="switch-checkbox" type="checkbox" @change="toggleTheme"
    />
    <label class="switch-label" for="checkbox">
      <span><font-awesome-icon icon="fa-solid fa-moon"/></span>
      <span><font-awesome-icon icon="fa-solid fa-sun"/></span>
      <div :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }" class="switch-toggle"
      ></div>
    </label>
  </div>
</template>

<script>
import LocalStorageUtils from "@/utils/LocalStorageUtils";

export default {
  name: "ThemeButtonComponent",
  mounted() {
    const initUserTheme = LocalStorageUtils.getUserTheme();
    this.setTheme(initUserTheme);
  },
  data() {
    return {
      userTheme: LocalStorageUtils.getUserTheme(),
    };
  },
  methods: {
    toggleTheme() {
      if (this.userTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
    setTheme(theme) {
      this.userTheme = theme;
      document.documentElement.className = theme;
      LocalStorageUtils.setUserTheme(theme);
    }
  },
}
</script>

<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: transparent;
  border: 2px solid rgba(156, 174, 192, 0.27);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.45);
  position: relative;
  padding: calc(var(--element-size) * 0.1);
  transition: background 0.5s ease;
  justify-content: space-between;
  width: var(--element-size);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07 - 1);
  left: calc(var(--element-size) * 0.07);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.4)) !important;
}

.fa-sun {
  color: white;
}

.fa-moon {
  color: white;
}
</style>