function getRandomNumber() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.random());
      }, 5000);
    });
  }
  
  async function randoNum() {
    console.log("Random number will be displayed in 5 seconds.")
    const result = await getRandomNumber();
    console.log(result);
  }
  
  
  
