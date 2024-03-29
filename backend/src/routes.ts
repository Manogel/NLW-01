import { Router } from "express";
import multer from "multer";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";
import multerConfig from "./config/multer";
import { celebrate, Joi } from "celebrate";

const routes = Router();
const upload = multer(multerConfig);

routes.get("/items", ItemsController.index);

routes.get("/points", PointsController.index);

routes.get("/points/:id", PointsController.show);

routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  PointsController.store
);

export default routes;
