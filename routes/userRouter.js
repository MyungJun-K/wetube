import express from "express";
import { changePassword, editProfile, userDetail, users } from '../controllers/userController';
import { editVideo } from '../controllers/videoController';
import routes from "../routes";

const userRouter = express.Router();

userRouter.get('/', users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;