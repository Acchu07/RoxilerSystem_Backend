import express from 'express';
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from '../controller/userController';
import tokenVerification from "../utils/tokenVerification";

const userRouter = express.Router();
// Needs validators and Role based access control
userRouter.post('/', tokenVerification, createUser);
userRouter.get('/', tokenVerification, getAllUsers);
userRouter.get('/:id', tokenVerification, getUserById);
userRouter.put('/:id', tokenVerification, updateUser);
userRouter.delete('/:id', tokenVerification, deleteUser);


export default userRouter;
