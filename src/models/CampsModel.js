export default class CampsModel {
    id_camp
    camp_name
    start_date
    end_date
    schedule
    description
    img
    numdays
    // price

    constructor(id_camp,camp_name,start_date,end_date,schedule,description, img, numdays){
        this.id_camp = id_camp
        this.camp_name = camp_name
        this.start_date = start_date
        this.end_date = end_date
        this.schedule = schedule
        this.description = description
        this.img = img
        this.numdays = numdays
    }

    getId_camp() {
        return this.id_camp
    }

    getCamp_name() {
        return this.camp_name
    }

    getStart_date() {
        return this.start_date
    }

    getEnd_date() {
        return this.end_date
    }

    getSchedule() {
        return this.schedule
    }

    getDescription() {
        return this.description
    }

    getImg() {
        return this.img
    }

    getNumdays() {
        return this.numdays
    }
}