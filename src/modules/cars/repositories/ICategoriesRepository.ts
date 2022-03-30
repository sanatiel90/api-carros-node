import { Category } from '../models/Category';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

//esta interface define métodos que precisam ser implementados por todos os repositories relacionados 
//a categories
interface ICategoriesRepository {
    index(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
    findByName(name: string): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO }