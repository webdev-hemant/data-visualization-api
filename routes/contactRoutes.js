const { Router } = require("express");
const {
  getAllContacts,
  getOneContact,
  putContact,
  deleteContact,
  postContact,
} = require("../controllers/contactCntr");

const contactRouter = Router();

// routes
contactRouter.route("/").get(getAllContacts).post(postContact);

contactRouter
  .route("/:id")
  .get(getOneContact)
  .put(putContact)
  .delete(deleteContact);

module.exports = contactRouter;
