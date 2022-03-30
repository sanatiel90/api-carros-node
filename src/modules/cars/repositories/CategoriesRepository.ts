
import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

//nos Repositories ficarao metodos feitos com os models (entidades do BD), como index(), find(), create(), update() e delete()
//o uso desses metodos sera feito dentro dos Services
//cada repository deve implementar uma interface que define os metodos necessarios de ter no repository
//por exemplo o CategoriesRepository, que salva dados num array na memoria, deve implementar a 
//interface ICategoriesRepository, que define todos os metodos necessarios para lidar com as Categories
//vc pode por exemplo criar um novo repository, como PostgresCategoriesRepository, que tbm implementa a
//interface ICategoriesRepository e em vez de salvar os dados num array na memoria, salva no banco postgres;
// o importante é cada repository implementar a sua interface equivalente, para deixar o Service (que vai usar
//o repository menos dependente e facilitar uma mudança de acesso a bancos de dados por exemplo


class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    
    index(): Category[] {
        return this.categories;
    }

    
    create({ name, description }: ICreateCategoryDTO ){
        const category = new Category();

        Object.assign(category, {
            name,
            description,        
            created_at: new Date()
        });

        this.categories.push(category);
    }


    findByName(name: string): Category{
        const category = this.categories.find(cat => cat.name === name);
        return category;
    }

}

export { CategoriesRepository }