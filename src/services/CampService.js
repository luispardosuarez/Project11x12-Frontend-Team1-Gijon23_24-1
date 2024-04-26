import CampsModel from "@/models/CampsModel";
import CampRepository from "@/repositories/CampRepository";

export default class CampService {

    camprepository = new CampRepository
    camps = [];

    constructor(camprepository) {
        this.camprepository = camprepository;
    }

    async index() {
        const camps = await this.camprepository.getAllCamps()

        camps.forEach((camp) => {
            const campToAdd = new CampsModel(camp.id_camp, camp.camp_name, camp.start_date, camp.end_date, camp.schedule, camp.description, camp.img, camp.numdays)
            this.camps.push(campToAdd)
            
        });

        return this.camps
    }
}