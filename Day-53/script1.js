function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("api data");
      resolve("success");
    }, 3000);
  });
}

async function fetchData() {
  for (let i = 0; i < 50; i++) {
    await api();
  }
}

fetchData();
