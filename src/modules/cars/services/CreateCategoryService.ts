//cada Service tera um metodo execute(), que vai acessar os Respositories (neles estao os metodos de acesso 
//aos models, como create(), find(), etc) para realizar uma logica de negocio que será aplicada, geralmente,
//numa rota da app

import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {

    private categoriesRepository: ICategoriesRepository;

    constructor(categoriesRepository: ICategoriesRepository){
        this.categoriesRepository = categoriesRepository;
    }
    
    execute({ name, description }: IRequest){
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists) {
            throw new Error('Categoria já existente!');
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService }