import MealService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res
      .json({
        status: 'success',
        data: allMeals
      })
      .status(200);
  },
  addAMeal(req, res) {
    /*
            Expect json of the format
            {
                name: "some food",
                size: "Large",
                "price": 400
            }
        */
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    return res
      .json({
        status: 'success',
        data: createdMeal
      })
      .status(201);
  },
  getSingleMeal(req, res) {
    // eslint-disable-next-line prefer-destructuring
    const id = req.params.id;
    const foundMeal = MealService.getAMeal(id);
    return res
      .json({
        status: 'success',
        data: foundMeal
      })
      .status(200);
  },
  deleteMeal(req, res) {
    const { id } = req.params;
    const meals = MealService.deleteMeal(id);
    return res
      .json({
        status: 'success',
        data: meals
      })
      .status(200);
  }
};

export default MealController;
