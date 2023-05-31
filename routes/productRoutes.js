import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// Create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// Update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Get products
router.get("/get-product", getProductController);

// Get single product
router.get("/get-product/:slug", getSingleProductController);

// Get product photo
router.get("/product-photo/:pid", productPhotoController);

// Delete product
router.delete("/delete-product/:pid", deleteProductController);

// Filter products
router.post("/product-filters", productFiltersController);

// Get product count
router.get("/product-count", productCountController);

// Get products per page
router.get("/product-list/:page", productListController);

// Search products
router.get("/search/:keyword", searchProductController);

// Get related product
router.get("/related-product/:pid/:cid", realtedProductController);

// Get category wise product
router.get("/product-category/:slug", productCategoryController);

// Braintree token
router.get("/braintree/token", braintreeTokenController);

// Braintree payment
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
