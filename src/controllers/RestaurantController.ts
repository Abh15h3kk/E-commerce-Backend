import Banner from "../models/Banner"
import City from "../models/City"

export class RestaurantController {

    static async addRestaurant(req,res,next) {

        const name = req.body.name
        const lat = req.body.lat
        const lng = req.body.lng
        const status = req.body.status
        try{
            const data = {
                name: name,
                lat: lat,
                lng: lng,
                status: status
            }
            let city = await new City(data).save()
            res.send(city)
        } catch(e) {
            next(e)
        }
    }

    static async getRestaurants(req,res,next) {
        try{
            const cities = await City.find({status:'active'})
            res.send(cities)
        } catch(e) {
            next(e)
        }
    }
}