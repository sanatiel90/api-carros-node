import { Router } from 'express'
import { Category } from '../modules/cars/models/Category';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

let categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;    

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({ name, description });

    return response.status(201).json({msg:'OK'});
})

categoriesRoutes.get('/', (request, response) => {
    const categories = categoriesRepository.index();

    return response.status(200).json(categories);
});

export { categoriesRoutes }