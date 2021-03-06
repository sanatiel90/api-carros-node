import { ISpecificationRepository } from "../repositories/ISpecificationRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    //repositorio
    private specificationRepository: ISpecificationRepository;

    constructor(specificationRepository: ISpecificationRepository){
        this.specificationRepository = specificationRepository;
    }
    
    execute({ name, description }: IRequest){

        const specificationAlreadyExists = this.specificationRepository.findByName(name);

        if(specificationAlreadyExists) {
            throw new Error('Especificação já existente!');
        }


        this.specificationRepository.create({
            name,
            description
        })
    }
}

export { CreateSpecificationService }