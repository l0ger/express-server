const path = require('path');
const activityServices = require('../services/activity.services');

const ACTIVITY_PATH = path.join(process.cwd(), 'hotel.json');

const search = (req, res,next)=>{
        activityServices.getActivitiesByFilter(req.query,ACTIVITY_PATH).then((activities)=>{
            res.status(200).json({
                data:activities,
                success:true
            });
        }).catch((e)=>next(e.message));
}

module.exports = {
    search
}