import express from 'express';
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from '../controller/userController';
import roleCheck from "../utils/roleCheck";
import {validateAdminRegistrationUser, validateRegisterationUser} from "../utils/expressValidatorSchemas";

const userRouter = express.Router();
// Needs validator middleware

userRouter.post('/', roleCheck("ADMIN"),validateRegisterationUser, validateAdminRegistrationUser,createUser);
userRouter.get('/', roleCheck("ADMIN"), getAllUsers);
// Messed up - ToDo One user can have multiple roles changeDBSchema - Do Later
userRouter.put('/:id', roleCheck("USER"), updateUser);

// Not required for now
userRouter.get('/:id', getUserById);
userRouter.delete('/:id', deleteUser);


export default userRouter;
