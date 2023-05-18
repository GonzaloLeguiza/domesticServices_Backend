const { Service, User } = require('../db.js');

const getServices = async () => {

    const dbServices = await Service.findAll({
        include: [{
            model: User,
            attributes: ['name', 'email'],
            through: {
                attributes: [],
            }
        }]
    });
    const services = dbServices.map(service => {
        return {
            id: service.id,
            nameService: service.nameService,
            location: service.location,
            imageUrl: service.imageUrl,
            pricePerHour: service.pricePerHour,
            typeService: service.typeService,
        }
    
    })

    //console.log(services, "que tengo en la base de datos filtrados")

    return services;

}
module.exports = { getServices }