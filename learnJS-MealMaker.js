//GOAL: In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    get _courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains, 
        desserts: this.desserts,
      }
    }
  },
    get appetizers(){

    },
    set appetizers(setApps){

    },
    get mains(){

    },
    set mains(setMains){

    },
    get desserts(){

    },
    set desserts(setDesserts){

    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      }
      this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random()* dishes.length)
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name} for a total value of $${totalPrice}.`
    },
  };

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.66);
menu.addDishToCourse('appetizers', 'wings', 4.33);
menu.addDishToCourse('appetizers', 'flatbread', 4.99);
menu.addDishToCourse('mains', 'pizza', 16.76);
menu.addDishToCourse('mains', 'burger', 15.76);
menu.addDishToCourse('mains', 'chicken tenders', 12.37);
menu.addDishToCourse('desserts', 'ice cream', 3.52);
menu.addDishToCourse('desserts', 'cake', 3.44);
menu.addDishToCourse('desserts', 'brownie', 3.91);

let meal = menu.generateRandomMeal();
console.log(meal);
