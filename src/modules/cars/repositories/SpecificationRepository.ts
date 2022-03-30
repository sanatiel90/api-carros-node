
import { Category } from "../models/Category";
import { Specification } from "../models/Specification";

import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Category[];

    constructor(){
        this.specifications = [];
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(spe => spe.name === name);
        return specification;
    }

        
    create({ name, description }: ICreateSpecificationDTO ){
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,        
            created_at: new Date()
        });

        this.specifications.push(specification);
    }


}

export { SpecificationRepository }