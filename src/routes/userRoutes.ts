import express from 'express';
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from '../controller/userController';

const userRouter = express.Router();
// Needs validators and Role based access control
userRouter.post('/', createUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);


export default userRouter;
