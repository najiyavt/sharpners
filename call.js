async function picnicReady() {
    // Write your code here
    try {
      const car = await checkCar();
      console.log(car);
  
      const pic = await packForPicnic();
      console.log(pic);
      
    }catch(err) {
      console.log(err);
    }
  }
  
  async function checkCar(){
    return new Promise((res,rej) => {
      setTimeout(() => {
        const car = Math.random()>0.5;
        if(car){
          res("Car is ready")
        }else{
          rej("Error: Car needs maintenance")
        }
      },2000)
    })
  }
  
  async function packForPicnic(){
    return new Promise((res,rej) => {
      setTimeout(() => {
        const picnic = Math.random()>0.5;
        if(picnic){
          res("Packed everything for picnic")
        }else{
          rej("Error: Not have some essentials")
        }
      },1000)
    })
  }
  
  picnicReady();
  
  // Do not touch the code below:
  module.exports = { picnicReady };
  