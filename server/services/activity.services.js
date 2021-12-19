const io = require('../utils/io.util');
const hotels = require('../../hotel.json')
const getActivitiesByFilter = async (filters,path) => {
    return hotels.hotels;
    // const filterArray = Object.entries(filters);
    // return activities.tours.filter((activity) => {
    //     for (let [key,value] of filterArray) {
    //         if (activity[key] === undefined || !activity[key].includes(value)) {
    //             return false;
    //         }
    //     }
    //     return true;
    // });
}

module.exports = {
    getActivitiesByFilter
}