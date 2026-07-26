// Has to be in the head tag, otherwise a flicker effect will occur.

let toggleTheme = (theme) => {
  if (theme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
};

let setTheme = (theme) => {
  transTheme();
  setHighlight(theme);

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);

  if (typeof medium_zoom !== "undefined") {
    medium_zoom.update({
      background:
        getComputedStyle(document.documentElement).getPropertyValue("--bg") +
        "ee",
    });
  }
};

let setHighlight = (theme) => {
  const light = document.getElementById("highlight_theme_light");
  const dark = document.getElementById("highlight_theme_dark");
  if (!light || !dark) return;

  if (theme === "dark") {
    light.media = "none";
    dark.media = "";
  } else {
    dark.media = "none";
    light.media = "";
  }
};

let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};

let initTheme = (theme) => {
  if (theme == null) {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    } else {
      theme = "light";
    }
  }
  setTheme(theme);
};

initTheme(localStorage.getItem("theme"));
