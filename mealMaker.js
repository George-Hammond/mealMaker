// an object call menu
const menu = {
    //nested object with menu object
    _courses:{
      appetizers: [],
      mains:[],
      desserts:[]
    },
    //declare a getter and setter method
    get appetizers(){
  
    },
    set appetizers (appetizersHere){
  
    },
      get mains(){
  
    },
    set mains (mainsHere){
  
    },
      get desserts(){
  
    },
    set desserts (dessertsHere){
  
    },
    //getter method for courses
    get courses (){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    //method to add dish to course
    addDishToCourse(courseName,dishName,dishPrice){
        const dish={ 
          name: dishName,
          price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
    // get a random dish from the courses
    getRandomDishFromCourse(courseName){
      const dishes= this._courses[courseName];
      const randomIndex = Math.floor(Math.random()* dishes.length);
      return dishes[randomIndex];
    },
    // generate a random meal and price
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse ('appetizers');
      const main = this.getRandomDishFromCourse ('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
  
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}, The price is $${totalPrice}.`
  
    }
  };
  //insert the courses available
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('mains', 'Fufu and Light soup', 14.00);
  menu.addDishToCourse('desserts', 'pumpkim ice cream', 6.5);
  menu.addDishToCourse('appetizers', 'shrimps', 2.25);
  menu.addDishToCourse('mains', 'spagetti rice', 10.00);
  menu.addDishToCourse('desserts', 'ice cream', 4.5);
  menu.addDishToCourse('appetizers', 'Kinoire salad', 4.00);
  menu.addDishToCourse('mains', 'beans and gari with plantain', 11.00);
  menu.addDishToCourse('desserts', 'red valvet cake and a coke drink', 9.5);
  menu.addDishToCourse('appetizers', 'oysters', 2.25);
  menu.addDishToCourse('mains', 'saucy rice', 10.00);
  menu.addDishToCourse('desserts', 'Vanilla troponoli', 4.5);
  
  //display menu and price
  let meal = menu.generateRandomMeal();
  console.log(meal);