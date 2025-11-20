function openTab(tabName) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");
}


const profileTabs = document.querySelectorAll(".profile-tabs .tab");
const profileContents = document.querySelectorAll(".tab-content");

profileTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    profileTabs.forEach(t => t.classList.remove("active"));
    profileContents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
