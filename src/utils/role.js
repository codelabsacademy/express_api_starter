import { UserRoles } from '../models/User.js';

export const role = (roleCode) => (req, res, next) => {

    const priorityMap = new Map();

    priorityMap.set(UserRoles.ADMIN, 0);
    priorityMap.set(UserRoles.CONTENT_MANAGER, 1);
    priorityMap.set(UserRoles.USER, 2);

    const priorityRoleCode = priorityMap.get(roleCode);


    if (
        priorityRoleCode == undefined ||
        req.role == undefined ||
        req.role > priorityRoleCode
    ) {
        next(new Error('Permission denied: user doesnt have required priviledge'));
    } else {
        next();
    }
}